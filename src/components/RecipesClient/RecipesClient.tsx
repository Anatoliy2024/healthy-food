"use client"
import {
  FilterKey,
  FiltersType,
  SetIsCheckedType,
  SetOpenType,
} from "@/types/recipes"

import style from "./RecipesClient.module.scss"
import { useState } from "react"

import { useRouter, useSearchParams } from "next/navigation"
import recipesDishBD from "@/BD/recipesDish"
import InnerApp from "@/providers/InnerApp"
import { FilterBlock } from "../FilterBlock/FilterBlock"
import { RecipesDishCard } from "../RecipesDishCard/RecipesDishCard"
import { Paginator } from "../Paginator/Paginator"

const ITEMS_PER_PAGE = 12
const FILTERS: FiltersType = [
  {
    key: "ingestion",
    title: "Тип питания",
    options: [
      { value: "breakfast", label: "Завтрак" },
      { value: "lunch", label: "Обед" },
      { value: "smoothie", label: "Смузи" },
      { value: "dinner", label: "Ужин" },
    ],
  },
  {
    key: "cookingTime",
    title: "Время готовки",
    options: [
      { value: "fast", label: "быстрые - 15-20 мин." },
      { value: "middling", label: "средние - 20-40 мин." },
      { value: "long", label: "долго - более 40 мин." },
    ],
  },
  {
    key: "yourTarget",
    title: "Цель",
    options: [
      { value: "muscleGain", label: "набор массы" },
      { value: "detox", label: "детокс" },
      { value: "weightLoss", label: "похудения" },
      { value: "weightSupport", label: "поддержка веса" },
    ],
  },
  {
    key: "complexity",
    title: "Сложность",
    options: [
      { value: "easy", label: "легко" },
      { value: "middle", label: "средние" },
      { value: "difficult", label: "сложно" },
    ],
  },
]

const EMPTY_OPEN: SetOpenType = {
  ingestion: false,
  cookingTime: false,
  complexity: false,
  yourTarget: false,
}

export default function RecipesClient() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const isChecked: SetIsCheckedType = {
    ingestion: searchParams.get("ingestion") || "",
    cookingTime: searchParams.get("cookingTime") || "",
    complexity: searchParams.get("complexity") || "",
    yourTarget: searchParams.get("yourTarget") || "",
  }

  const openCalculate: SetOpenType = {
    ingestion: !!isChecked.ingestion,
    cookingTime: !!isChecked.cookingTime,
    complexity: !!isChecked.complexity,
    yourTarget: !!isChecked.yourTarget,
  }
  const [open, setOpen] = useState<SetOpenType>(openCalculate)

  const page = Number(searchParams.get("page")) || 1

  console.log("isChecked", isChecked)

  const handleFilterChange = (type: FilterKey, value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set(type, value)
    } else {
      params.delete(type)
    }

    params.set("page", "1")
    router.push(`/recipes?${params.toString()}`, { scroll: false })
  }

  const filteredRecipes = recipesDishBD.filter((recipe) => {
    if (isChecked.ingestion && !recipe.ingestion.includes(isChecked.ingestion))
      return false
    if (isChecked.cookingTime && recipe.cookingTime !== isChecked.cookingTime)
      return false
    if (isChecked.complexity && recipe.complexity !== isChecked.complexity)
      return false
    if (isChecked.yourTarget && recipe.yourTarget !== isChecked.yourTarget)
      return false

    return true
  })

  const start = (page - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE

  const currentItems = filteredRecipes.slice(start, end)

  const onPageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", String(page))
    router.push(`/recipes?${params.toString()}`)
  }

  const resetOption = () => {
    router.replace("/recipes")
    setOpen(EMPTY_OPEN)
  }

  return (
    <InnerApp>
      <div className={style.wrapper}>
        <h1>Рецепты</h1>
        {/* <Link href="/">Назад</Link> */}
        <div className={style.content}>
          <div className={style.option}>
            {FILTERS.map((f) => (
              <FilterBlock
                key={f.key}
                filterKey={f.key}
                title={f.title}
                options={f.options}
                open={open}
                setOpen={setOpen}
                checked={isChecked}
                handleFilterChange={handleFilterChange}
              />
            ))}
            <div
              className={`${style.resetButton}  noSelect`}
              onClick={resetOption}
            >
              Сброс
            </div>
          </div>
          <div className={style.infoBlock}>
            {currentItems.length === 0 && (
              <div className={style.noRecipe}>
                По заданным парамертам рецептов нет
              </div>
            )}
            {currentItems.length > 0 && (
              <div className={style.recipeContainer}>
                {currentItems.map((recipes, index) => (
                  <RecipesDishCard key={index} recipes={recipes} />
                ))}
              </div>
            )}
            <Paginator
              totalItems={filteredRecipes.length}
              currentPage={page}
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </InnerApp>
  )
}
