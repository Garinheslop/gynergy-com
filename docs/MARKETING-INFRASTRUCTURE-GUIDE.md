# GYNERGY.com Marketing Infrastructure Guide

**For**: Team Reference & Operations
**Last Updated**: January 19, 2025
**Owner**: GYNERGY Marketing Team

---

## Executive Summary

This document explains how the GYNERGY.com marketing system works - from visitor to customer. The website captures leads and tracks behavior, then GoHighLevel (GHL) handles all email communication and automation.

**Key Insight**: The website does NOT send emails. It captures data and syncs to GHL, which handles all communication.

---

## 1. Email System Architecture

### How It Works

```
┌─────────────────────────────────────────────────────────────────┐
│                     GYNERGY.com Website                         │
│                                                                 │
│  [Forms] → [API Routes] → [GoHighLevel CRM]                    │
│                                                                 │
│  Newsletter signup     /api/ghl/contact      Creates contact   │
│  L5L Application       /api/ghl/contact      + applies tags    │
│  Coaching inquiry      /api/ghl/contact      + custom fields   │
│  Speaking request      /api/ghl/contact      + UTM data        │
│  Contact form          /api/ghl/contact                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     GoHighLevel (GHL)                           │
│                                                                 │
│  [Contact Created] → [Tags Applied] → [Workflow Triggered]     │
│                                                                 │
│  Workflows handle:                                              │
│  • Welcome emails                                               │
│  • Nurture sequences                                            │
│  • Follow-up automation                                         │
│  • Sales notifications                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Where Emails Come From

| Source | Platform | Reply Address |
|--------|----------|---------------|
| Welcome emails | GoHighLevel | Configure in GHL settings |
| Nurture sequences | GoHighLevel | Configure in GHL settings |
| Follow-up emails | GoHighLevel | Configure in GHL settings |
| Transactional (receipts) | Stripe | noreply@stripe.com |

**Can People Reply?**: Yes, if you configure GHL with a real reply-to address. Replies go to your GHL inbox or configured email.

### What the Website Does

The website's `/api/ghl/contact` endpoint:
1. Receives form submission data
2. Parses name into first/last name
3. Applies relevant tags based on form type
4. Includes UTM attribution data
5. Creates or updates contact in GHL
6. Returns success/failure to the form

**Code Location**: [app/api/ghl/contact/route.ts](../app/api/ghl/contact/route.ts)

---

## 2. Tags Applied Automatically

Tags trigger workflows in GHL. Here's what gets applied:

### Form-Based Tags

| Form | Tags Applied | Source File |
|------|--------------|-------------|
| Newsletter (Footer/Default) | `newsletter`, `gynergy-com`, `website-signup` | `components/ui/newsletter-form.tsx` |
| Lead Magnet (5 Pillars) | `lead-magnet`, `5-pillars-assessment`, `gynergy-com` | `components/sections/lead-magnet.tsx` |
| Blog Newsletter | `newsletter`, `blog-subscriber`, `gynergy-com` | `components/pages/blog/newsletter.tsx` |
| L5L Application | `l5l-application`, `level-5-life`, `high-ticket`, `gynergy-com`, `investment-${level}` | `components/pages/level-5-life/application.tsx` |
| Coaching Application | `coaching-application`, `1on1-coaching`, `gynergy-com`, `timeline-${timeline}`, `investment-${investment}` | `components/pages/coaching/application.tsx` |
| Speaking Request | `speaking-inquiry`, `gynergy-com`, `event-${eventType}` | `components/pages/speaking/booking.tsx` |
| Contact Form | `contact-form`, `gynergy-com`, `inquiry-${subject}` | `components/sections/contact.tsx` |

**Note**: Tags with `${variable}` are dynamically generated based on form field values.

### Payment-Based Tags (Stripe Webhook)

| Event | Tags Applied |
|-------|--------------|
| One-time purchase | `stripe-customer`, `purchase-completed`, `gynergy-com`, `product-${slug}` |
| Subscription created | `stripe-customer`, `active-subscriber`, `gynergy-ai-member`, `${tier}-member`, `billing-${interval}ly`, `gynergy-com` |
| Subscription cancelled | `subscription-canceled`, `churned-subscriber`, `win-back-candidate` |
| Payment failed | `payment-failed`, `payment-attempt-${count}`, `payment-warning` OR `payment-at-risk` |

**Note**: `payment-warning` is applied for attempts 1-2, `payment-at-risk` for attempts 3+.

**Code Location**: [app/api/stripe/webhook/route.ts](../app/api/stripe/webhook/route.ts)

---

## 3. Tracking System

### Google Analytics 4 (GA4)

We track specific conversion events in GA4:

| Event Name | Category | Triggered When | Value |
|------------|----------|----------------|-------|
| `newsletter_signup` | lead_capture | Newsletter form submitted | - |
| `lead_magnet_download` | lead_capture | PDF/resource downloaded | - |
| `contact_form_submit` | lead_capture | Contact form submitted | - |
| `application_submit` | lead_capture | Program application | - |
| `l5l_application` | high_value_lead | L5L application submitted | $15,000 |
| `coaching_application` | high_value_lead | 1-on-1 coaching inquiry | - |
| `speaking_inquiry` | high_value_lead | Speaking request | - |
| `date_zero_inquiry` | high_value_lead | Date Zero interest | $1,497 |
| `service_retreat_inquiry` | high_value_lead | Service retreat interest | $1,497 |
| `begin_checkout` | ecommerce | Checkout started | [cart value] |
| `purchase` | ecommerce | Payment completed | [transaction value] |

**Code Location**: [components/analytics/google-analytics.tsx](../components/analytics/google-analytics.tsx)

### UTM Attribution Tracking

Every form captures UTM parameters with **first-touch attribution** (30-day persistence):

| Field | Purpose | Example |
|-------|---------|---------|
| `utm_source` | Where traffic came from | `facebook`, `google`, `instagram` |
| `utm_medium` | Marketing medium | `cpc`, `email`, `social` |
| `utm_campaign` | Campaign name | `l5l-launch-jan2025` |
| `utm_term` | Keywords (paid search) | `mens+coaching` |
| `utm_content` | Ad variation | `video-ad-1` |
| `landing_page` | First page visited | `/level-5-life` |
| `referrer` | Referring website | `facebook.com` |
| `first_touch` | First visit timestamp | `2025-01-15T10:30:00Z` |

**How It Works**:
1. Visitor lands on site with UTM parameters (e.g., from Facebook ad)
2. System stores UTMs in localStorage (persists 30 days)
3. When they fill out a form (even days later), original UTMs are attached
4. Data syncs to GHL as custom fields for attribution reporting

**Code Location**: [lib/utm-tracking.ts](../lib/utm-tracking.ts)

---

## 4. GHL Workflow Setup Required

For the system to work fully, these workflows need to exist in GHL:

### Essential Workflows

| Trigger | Workflow Name | What It Does |
|---------|---------------|--------------|
| Tag: `newsletter` | Newsletter Welcome | Send welcome email, start nurture sequence |
| Tag: `lead-magnet` | Lead Magnet Follow-up | Deliver resource, start nurture sequence |
| Tag: `l5l-application` | L5L Application Received | Notify team, send confirmation, start nurture |
| Tag: `coaching-application` | Coaching Application | Notify Garin/Yesi, send acknowledgment |
| Tag: `speaking-inquiry` | Speaking Request | Notify team, send speaking packet |
| Tag: `high-ticket` | High-Value Lead Alert | Immediate Slack/SMS notification to sales |
| Tag: `active-subscriber` | New Subscriber Welcome | Welcome to GYNERGY.AI, onboarding sequence |
| Tag: `churned-subscriber` | Churn Prevention | Win-back sequence |
| Tag: `win-back-candidate` | Win-Back Campaign | Re-engagement sequence for cancelled subs |
| Tag: `payment-failed` | Payment Recovery | Dunning sequence (escalates with attempt count) |

### Recommended Pipelines

| Pipeline | Stages |
|----------|--------|
| **Website Leads** | New → Contacted → Qualified → Proposal → Won/Lost |
| **L5L Applications** | Received → Reviewed → Call Scheduled → Enrolled → Declined |
| **Coaching Inquiries** | New → Discovery Call → Proposal → Enrolled |

---

## 5. Action Items for the Team

### Immediate Setup (Do Now)

| Task | Owner | Status |
|------|-------|--------|
| Create GHL API key with contacts.write permission | Admin | |
| Add GHL_API_KEY to Vercel environment | Dev | |
| Add GHL_LOCATION_ID to Vercel environment | Dev | |
| Set up GA4 property | Marketing | |
| Add GA_MEASUREMENT_ID to Vercel environment | Dev | |
| Create essential GHL workflows | Marketing | |

### Weekly Operations

| Task | Frequency | Owner |
|------|-----------|-------|
| Review GA4 conversion reports | Weekly | Marketing |
| Check GHL pipeline stages | Daily | Sales |
| Review UTM attribution report in GHL | Weekly | Marketing |
| Monitor failed payment tags | Daily | Finance |
| Review high-value lead notifications | Daily | Sales |

### Monthly Reviews

| Task | Purpose |
|------|---------|
| UTM performance analysis | Which campaigns drive conversions? |
| Funnel conversion rates | Where are we losing leads? |
| Email sequence performance | Open rates, click rates, conversions |
| Tag cleanup | Remove outdated tags, consolidate duplicates |

---

## 6. Video Content Strategy

### Why Video Matters

- **Builds trust** faster than text
- **Higher engagement** on social platforms
- **Repurposable** across channels
- **60 scripts already exist** in LVL-5-LIFE marketing docs

### Existing Video Script Library

| Category | Count | Location |
|----------|-------|----------|
| LVL 5 LIFE content | 60 scripts | `LVL-5-LIFE/docs/marketing/video-content/` |
| GYNERGY.AI B2C | 40+ scripts | `LVL-5-LIFE/docs/marketing/social-content/` |
| Enterprise content | 40 scripts | `LVL-5-LIFE/docs/marketing/social-content/enterprise/` |

### Video Content Recommendations

| Platform | Format | Length | Purpose |
|----------|--------|--------|---------|
| Instagram Reels | Vertical 9:16 | 30-60 sec | Awareness, hooks |
| YouTube | Horizontal 16:9 | 5-15 min | Deep education, trust |
| LinkedIn | Square/Horizontal | 1-3 min | B2B, enterprise |
| TikTok | Vertical 9:16 | 15-60 sec | Younger audience |
| Website | Horizontal | 2-3 min | Testimonials, explainers |

### Recommended Video Types

1. **Founder Story** - Garin & Yesi's journey, why GYNERGY exists
2. **Testimonials** - Real member transformations (we have Vimeo IDs)
3. **5-Pillar Explainers** - Short video for each pillar
4. **Program Previews** - What to expect in each program
5. **Behind-the-Scenes** - Service retreats, events, coaching sessions
6. **FAQ Answers** - Address common questions in video form

---

## 7. Technical Reference

### Environment Variables Required

```env
# GoHighLevel CRM
GHL_API_KEY=xxxxx              # API Key from GHL Settings
GHL_LOCATION_ID=xxxxx          # Location ID from GHL Settings
GHL_API_BASE_URL=https://services.leadconnectorhq.com

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Stripe (for payment webhooks)
STRIPE_SECRET_KEY=sk_live_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

### API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/ghl/contact` | POST | Create/update contact in GHL |
| `/api/stripe/webhook` | POST | Handle Stripe payment events |
| `/api/stripe/checkout` | POST | Create Stripe checkout session |

### Key Files

| File | Purpose |
|------|---------|
| `lib/utm-tracking.ts` | UTM capture and first-touch attribution |
| `components/analytics/google-analytics.tsx` | GA4 event tracking and conversion utilities |
| `app/api/ghl/contact/route.ts` | GHL contact sync (create/update with tags) |
| `app/api/stripe/webhook/route.ts` | Stripe payment/subscription event handling |
| `.env.example` | Environment variable documentation |

### Form Component Files

| File | Form Type | Tags Applied |
|------|-----------|--------------|
| `components/ui/newsletter-form.tsx` | Newsletter signup | `newsletter`, `website-signup` |
| `components/sections/lead-magnet.tsx` | 5 Pillars Assessment | `lead-magnet`, `5-pillars-assessment` |
| `components/sections/contact.tsx` | Contact form | `contact-form`, `inquiry-${subject}` |
| `components/pages/coaching/application.tsx` | Coaching application | `coaching-application`, dynamic tags |
| `components/pages/speaking/booking.tsx` | Speaking request | `speaking-inquiry`, `event-${type}` |
| `components/pages/level-5-life/application.tsx` | L5L application | `l5l-application`, `high-ticket` |

---

## 8. Troubleshooting

### Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| Contacts not appearing in GHL | Missing API key | Add GHL_API_KEY to Vercel env |
| No UTM data in contacts | localStorage blocked | Check for cookie consent issues |
| GA4 events not firing | Missing measurement ID | Add GA_MEASUREMENT_ID to env |
| Stripe webhooks failing | Wrong webhook secret | Verify STRIPE_WEBHOOK_SECRET |
| Tags not triggering workflows | Workflow not published | Publish workflow in GHL |

### Verification Steps

1. **Test GHL Integration**:
   - Submit a test form on the site
   - Check GHL contacts for new entry
   - Verify tags were applied

2. **Test GA4 Tracking**:
   - Open GA4 Real-time reports
   - Submit a form
   - Watch for conversion event

3. **Test UTM Tracking**:
   - Visit site with UTM parameters: `?utm_source=test&utm_campaign=verification`
   - Submit a form
   - Check GHL contact custom fields for UTM data

---

## 9. Future Enhancements

### Planned Improvements

| Enhancement | Impact | Status | Notes |
|-------------|--------|--------|-------|
| Subscription checkout | GYNERGY.AI B2C recurring revenue | In Progress | Checkout API supports subscriptions; needs product config |
| ARIA chat widget | 24/7 lead engagement, qualification | Planned | API exists in LVL-5-LIFE; needs widget port to gynergy-com |
| Enhanced attribution | Multi-touch attribution beyond first-touch | Planned | Current: first-touch only with 30-day window |
| A/B testing integration | Conversion optimization | Planned | For landing pages and form variants |

### Content Gaps to Fill

| Content Type | Status | Priority | Reference Location |
|--------------|--------|----------|-------------------|
| Enterprise email sequences | Not created | HIGH | See plan: Phase 1 in excellence plan |
| Date Zero social expansion | Needs +20 posts | MEDIUM | `docs/marketing/social-content/` |
| Fit & Feminine onboarding | Not created | MEDIUM | May 2026 launch target |
| Referral program sequence | Not created | MEDIUM | Universal sequence for all programs |

---

## Contact

**Technical Questions**: Development team
**GHL/Workflow Questions**: Marketing operations
**Content Questions**: Content team

---

*This document should be reviewed and updated quarterly or when significant system changes occur.*
