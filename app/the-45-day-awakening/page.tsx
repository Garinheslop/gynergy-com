import { redirect } from "next/navigation"

// The 45 Day Awakening is the same as Date Zero - redirect to canonical URL
export default function The45DayAwakeningPage() {
  redirect("/date-zero")
}
