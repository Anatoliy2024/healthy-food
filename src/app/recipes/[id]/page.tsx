import RecipeClient from "@/components/RecipeClient/RecipeClient"
import { Suspense } from "react"

export default function Page() {
  return (
    <Suspense fallback={null}>
      <RecipeClient />
    </Suspense>
  )
}
