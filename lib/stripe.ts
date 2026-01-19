import Stripe from "stripe"

// Server-side Stripe instance - only import this in server components/API routes
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
  typescript: true,
})

// Re-export products for convenience in API routes
export {
  PRODUCTS,
  formatPrice,
  isSubscriptionProduct,
  getSubscriptionInterval,
  type ProductId,
  type Product,
} from "./products"
