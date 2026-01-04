"use client"
import style from "./RecipesDishCard.module.scss"
import { useRouter } from "next/navigation"

type RecipeType = {
  id: number
  title: string
  imageUrl: string
  nutrients: { protein: number; fat: number; carbohydrates: number }
  calorieContent: number
  private: boolean
  ingestion?: string[]
  cookingTime?: string
  yourTarget?: string
  complexity?: string
  description?: string
  ingredients?: string[]
  recipe?: {
    stageName: string
    stageList: string[]
  }
  advice?: Record<string, string>
}

export function RecipesDishCard({ recipes }: { recipes: RecipeType }) {
  const router = useRouter()
  return (
    <div
      className={style.wrapper}
      title={recipes.title}
      onClick={() => {
        router.push(`/recipes/${recipes.id}`)
      }}
    >
      <div
        className={style.imageBlock}
        style={{
          background: `url(${recipes.imageUrl}) center / cover no-repeat`,
        }}
      >
        <ul>
          <li>Б-{recipes.nutrients.protein}г</li>
          <li>Ж-{recipes.nutrients.fat}г</li>
          <li>У-{recipes.nutrients.carbohydrates}г</li>
        </ul>
      </div>

      <div className={style.title}>{recipes.title}</div>
      <div className={style.calorieContent}>
        {recipes.calorieContent} ккал - 100 грамм
      </div>
    </div>
  )
}
