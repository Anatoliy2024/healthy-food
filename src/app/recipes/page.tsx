import RecipesClient from "@/components/RecipesClient/RecipesClient"
import { Suspense } from "react"

export default function Page() {
  return (
    <Suspense fallback={null}>
      <RecipesClient />
    </Suspense>
  )
}
