// Blog post type definitions and sample content
// In production, this would connect to a CMS like Sanity, Contentful, or use MDX files

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  category: BlogCategory
  author: Author
  publishedAt: string
  readingTime: string
  featured: boolean
  tags: string[]
}

export interface Author {
  name: string
  role: string
  image: string
}

export type BlogCategory =
  | "health"
  | "relationships"
  | "mindset"
  | "purpose"
  | "transformation"
  | "podcast"

export const categories: { id: BlogCategory; label: string; icon: string; description: string }[] = [
  { id: "health", label: "Health", icon: "health", description: "Optimize your physical vitality" },
  { id: "relationships", label: "Relationships", icon: "heart", description: "Deepen your connections" },
  { id: "mindset", label: "Mindset", icon: "globe", description: "Master your mental state" },
  { id: "purpose", label: "Purpose", icon: "compass", description: "Live with intention" },
  { id: "transformation", label: "Transformation", icon: "star", description: "Stories of change" },
  { id: "podcast", label: "Podcast", icon: "microphone", description: "Episode highlights" },
]

export const authors: Record<string, Author> = {
  garin: {
    name: "Garin Heslop",
    role: "Co-Founder",
    image: "/founders/Garin.JPEG"
  },
  yesi: {
    name: "Yesi Heslop",
    role: "Co-Founder",
    image: "/founders/YESI.JPG"
  }
}

// Sample blog posts - in production, these would come from a CMS
export const blogPosts: BlogPost[] = [
  {
    slug: "the-level-5-life-framework-explained",
    title: "The Level 5 Life Framework Explained",
    excerpt: "Discover the five pillars that create extraordinary results across every area of your life—and why working on all five simultaneously is the key to lasting transformation.",
    content: `
# The Level 5 Life Framework Explained

For years, I chased success in silos. I'd focus intensely on my health, only to watch my relationships suffer. I'd pour everything into my career, only to feel empty despite the achievements.

Then I discovered something that changed everything: **true transformation happens when you work on all five pillars simultaneously.**

## The Five Pillars

### 1. Health
Your body is the vehicle for everything else. Without energy and vitality, you can't show up fully in any other area.

### 2. Relationships
We're social creatures. The quality of your relationships directly impacts your happiness, success, and longevity.

### 3. Wealth
Financial abundance creates freedom and options. It's not about greed—it's about having the resources to live your purpose fully.

### 4. Mindset
Your thoughts create your reality. Master your mind, and you master your life.

### 5. Purpose
Without meaning, even success feels hollow. Purpose is what gets you out of bed excited every morning.

## Why All Five Matter

Here's what most people don't understand: these pillars aren't separate. They're interconnected.

When your health suffers, your mindset follows. When your relationships are strained, your purpose feels unclear. When your finances are stressed, you can't focus on growth. When you lack purpose, you don't take care of your health.

**But the inverse is also true.**

When you improve one area, it creates momentum in the others. And when you intentionally work on all five? That's when magic happens.

## Getting Started

The Level 5 Life isn't about perfection. It's about progress in all five areas, simultaneously.

Start by asking yourself: "On a scale of 1-10, where am I in each pillar?" Then identify one small action you can take in each area this week.

Small, consistent actions across all five pillars create exponential results.

---

*Ready to dive deeper? [Join the Level 5 Life Mastermind](/level-5-life) and transform every area of your life.*
    `,
    coverImage: "/images/blog/level-5-framework.jpg",
    category: "transformation",
    author: authors.garin,
    publishedAt: "2025-01-10",
    readingTime: "5 min read",
    featured: true,
    tags: ["framework", "transformation", "pillars", "getting-started"]
  },
  {
    slug: "morning-routines-that-actually-work",
    title: "Morning Routines That Actually Work",
    excerpt: "Forget the 5 AM club hype. Here's what actually matters for a morning routine that sets you up for success—without the exhausting wake-up call.",
    content: `
# Morning Routines That Actually Work

You've seen the headlines: "Successful people wake up at 4 AM!" But here's the truth nobody talks about—it's not about when you wake up. It's about what you do in the first hour.

## The 3-Part Morning Framework

### 1. Move Your Body (15 minutes)
Not a full workout. Just movement. Walk, stretch, dance—anything to signal to your body that it's time to activate.

### 2. Feed Your Mind (15 minutes)
Reading, journaling, meditation—choose one. The goal is input that elevates your thinking.

### 3. Set Your Intention (10 minutes)
What's the ONE thing that would make today a success? Write it down. Visualize it done.

## The Key: Consistency Over Intensity

A 40-minute morning routine you do daily beats a 2-hour routine you do occasionally.

Start small. Build momentum. Expand from there.

---

*Want personalized guidance on optimizing your mornings? [Book a coaching call](/one-on-one-coaching).*
    `,
    coverImage: "/images/blog/morning-routine.jpg",
    category: "health",
    author: authors.garin,
    publishedAt: "2025-01-08",
    readingTime: "4 min read",
    featured: true,
    tags: ["health", "routine", "productivity", "morning"]
  },
  {
    slug: "the-conversation-that-saved-our-marriage",
    title: "The Conversation That Saved Our Marriage",
    excerpt: "Yesi and I almost didn't make it. Here's the turning point conversation that changed everything—and how you can have it too.",
    content: `
# The Conversation That Saved Our Marriage

There was a moment, about five years ago, when Yesi and I were barely holding on. We were both successful by external measures, but internally? We were disconnected, resentful, and running on empty.

Then we had THE conversation.

## What Changed Everything

It wasn't a fight. It wasn't therapy (though we've done that too). It was a vulnerable, honest conversation where we both shared:

1. **What we were really feeling** (not what we thought the other wanted to hear)
2. **What we needed** (specifically, clearly, without blame)
3. **What we were committed to** (our vision for the relationship)

## The Framework We Use Now

Every week, Yesi and I have a "State of the Union" conversation. It's simple:

- **Wins**: What went well this week?
- **Struggles**: Where did we feel disconnected?
- **Needs**: What do we need from each other next week?
- **Gratitude**: One thing we appreciate about each other.

This 30-minute weekly ritual has transformed our marriage more than any single grand gesture ever could.

## Your Turn

Don't wait until you're in crisis. Schedule your first conversation this week.

---

*Want to learn the communication frameworks that saved our relationship? [Check out Date Zero](/date-zero).*
    `,
    coverImage: "/images/blog/relationship-conversation.jpg",
    category: "relationships",
    author: authors.yesi,
    publishedAt: "2025-01-05",
    readingTime: "6 min read",
    featured: true,
    tags: ["relationships", "communication", "marriage", "connection"]
  },
  {
    slug: "breaking-the-limiting-belief-loop",
    title: "Breaking the Limiting Belief Loop",
    excerpt: "Why positive thinking doesn't work—and what to do instead when you're stuck in negative thought patterns.",
    content: `
# Breaking the Limiting Belief Loop

"Just think positive!"

If only it were that simple.

The problem with positive thinking is that it's surface-level. You can repeat "I am confident" all day, but if deep down you believe you're not good enough, your actions will reflect that belief.

## Understanding the Belief Loop

Here's how it works:

1. **Belief** → "I'm not good enough"
2. **Thought** → "Why bother trying?"
3. **Emotion** → Hopelessness, fear
4. **Action** → Don't take action
5. **Result** → No progress
6. **Reinforcement** → "See? I'm not good enough"

And the loop continues.

## Breaking the Cycle

The key isn't changing your thoughts. It's **taking different action despite your thoughts.**

When you act differently—even while feeling scared, doubtful, or uncertain—you create new results. New results create new evidence. New evidence updates your beliefs.

## The 3-Step Process

1. **Acknowledge** the limiting belief without fighting it
2. **Act** as if you believed the opposite (just for today)
3. **Collect** evidence from the new results

Repeat until the new belief becomes your default.

---

*Ready to break through your mental blocks? [Apply for 1-on-1 coaching](/one-on-one-coaching).*
    `,
    coverImage: "/images/blog/mindset-breakthrough.jpg",
    category: "mindset",
    author: authors.garin,
    publishedAt: "2025-01-02",
    readingTime: "5 min read",
    featured: false,
    tags: ["mindset", "beliefs", "breakthrough", "psychology"]
  },
  {
    slug: "finding-your-purpose-practical-guide",
    title: "Finding Your Purpose: A Practical Guide",
    excerpt: "Purpose isn't found—it's created. Here's a practical framework for discovering what makes you come alive.",
    content: `
# Finding Your Purpose: A Practical Guide

"What's my purpose?" might be the most asked question in personal development.

But here's what I've learned after coaching hundreds of high-performers: purpose isn't something you find. It's something you **create through action.**

## The Purpose Discovery Framework

### 1. What makes you lose track of time?
These activities point to your natural interests and talents.

### 2. What problems make you angry?
Anger is often a sign that you care deeply about something.

### 3. What would you do if money wasn't a factor?
This reveals your intrinsic motivations.

### 4. Who do you want to help?
Purpose is often found in service to others.

## The Intersection

Your purpose lives at the intersection of:
- What you're good at
- What you love
- What the world needs
- What you can be paid for

But here's the key: you don't figure this out by thinking. You figure it out by **doing.**

## Action Steps

1. List 10 activities that energize you
2. Identify 3 problems you want to solve
3. Define who you want to serve
4. Take one small action this week toward that vision

Purpose reveals itself through action, not contemplation.

---

*Want guidance on discovering and living your purpose? [Join the Level 5 Life Mastermind](/level-5-life).*
    `,
    coverImage: "/images/blog/finding-purpose.jpg",
    category: "purpose",
    author: authors.garin,
    publishedAt: "2024-12-28",
    readingTime: "5 min read",
    featured: false,
    tags: ["purpose", "meaning", "career", "fulfillment"]
  },
  {
    slug: "podcast-episode-10-highlights",
    title: "Episode 10 Highlights: Overcoming Fear of Failure",
    excerpt: "Key takeaways from our latest podcast episode on how to use fear as fuel instead of letting it hold you back.",
    content: `
# Episode 10 Highlights: Overcoming Fear of Failure

In this week's episode, we dove deep into one of the most common obstacles people face: the fear of failure.

## Key Takeaways

### 1. Fear is information, not direction
Fear tells you something matters. It doesn't tell you to stop.

### 2. Failure is feedback
Every "failure" is data that helps you improve. Reframe it as a learning experience.

### 3. The cost of inaction
We often focus on the risk of trying. But what's the cost of NOT trying?

## Quote of the Episode

> "The only real failure is the failure to try." — Garin

## Listen to the Full Episode

[Listen on Spotify](#) | [Listen on Apple Podcasts](#)

---

*Never miss an episode. [Subscribe to the podcast](/podcast).*
    `,
    coverImage: "/images/blog/podcast-ep10.jpg",
    category: "podcast",
    author: authors.garin,
    publishedAt: "2024-12-20",
    readingTime: "3 min read",
    featured: false,
    tags: ["podcast", "fear", "failure", "mindset"]
  }
]

// Helper functions
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getPostBySlug(currentSlug)
  if (!currentPost) return []

  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit)
}

export function getAllSlugs(): string[] {
  return blogPosts.map(post => post.slug)
}
