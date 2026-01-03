"use client"
import InnerApp from "@/providers/InnerApp"
import style from "./Recipes.module.scss"
import { useState } from "react"

import { FilterBlock } from "@/components/FilterBlock/FilterBlock"
import { title } from "process"
import Image from "next/image"
import { RecipesDishCard } from "@/components/RecipesDischCard/RecipesDishCard"

const FILTERS = [
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

const dishBD = [
  {
    title: "Омлет с тунцом",
    imageUrl: "/image/recipe-1.png",
    nutrients: { protein: 25, fat: 7, carbohydrates: 13 },
    calorieContent: 212,
    private: false,
  },
  {
    title: "Ленивые вареники",
    imageUrl: "/image/recipe-2.png",
    nutrients: { protein: 17, fat: 4, carbohydrates: 15 },
    calorieContent: 180,
    private: false,
  },
  {
    title: "Овсяноблин с бананом и сыром",
    imageUrl: "/image/recipe-3.png",
    nutrients: { protein: 10, fat: 4, carbohydrates: 25 },
    calorieContent: 150,
    private: false,
  },
  {
    title: "Тост с глазуньей и рукколой",
    imageUrl: "/image/recipe-4.png",
    nutrients: { protein: 14, fat: 11, carbohydrates: 13 },
    calorieContent: 202,
    private: false,
  },
  {
    title: "Пшеничная каша с яблоком и корицей",
    imageUrl: "/image/recipe-5.png",
    nutrients: { protein: 25, fat: 7, carbohydrates: 13 },
    calorieContent: 212,
    private: true,
  },
  {
    title: "Сырники с тыквой",
    imageUrl: "/image/recipe-6.png",
    nutrients: { protein: 17, fat: 5, carbohydrates: 19 },
    calorieContent: 196,
    private: false,
  },
  {
    title: "Творожная запеканка с ягодами",
    imageUrl: "/image/recipe-7.png",
    nutrients: { protein: 27, fat: 7, carbohydrates: 13 },
    calorieContent: 187,
    private: false,
  },
  {
    title: "Куриные маффины с сыром",
    imageUrl: "/image/recipe-8.png",
    nutrients: { protein: 23, fat: 7, carbohydrates: 8 },
    calorieContent: 178,
    private: false,
  },
  {
    title: "Панкейки с бананом",
    imageUrl: "/image/recipe-9.png",
    nutrients: { protein: 25, fat: 7, carbohydrates: 13 },
    calorieContent: 212,
    private: false,
  },
]

export type SetOpenType = {
  ingestion: boolean
  cookingTime: boolean
  complexity: boolean
  yourTarget: boolean
}
export type SetIsCheckedType = {
  ingestion: string
  cookingTime: string
  complexity: string
  yourTarget: string
}

export default function Recipes() {
  const [open, setOpen] = useState<SetOpenType>({
    ingestion: false,
    cookingTime: false,
    complexity: false,
    yourTarget: false,
  })
  // const [openIngestion, setOpenIngestion] = useState(false)

  const [isChecked, setIsChecked] = useState<SetIsCheckedType>({
    ingestion: "",
    cookingTime: "",
    complexity: "",
    yourTarget: "",
  })
  // const [isCheckedIngestion, setIsCheckedIngestion] = useState("")
  // console.log("isCheckedIngestion", isChecked)
  return (
    <InnerApp>
      <div className={style.wrapper}>
        <h1>Рецепты</h1>
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
                setChecked={setIsChecked}
              />
            ))}

            {/* <div className={style.contentBelow}>
              Контент ниже будет плавно сдвигаться
            </div> */}
          </div>
          <div className={style.recipeContainer}>
            {dishBD.map((recipes, index) => (
              <RecipesDishCard key={index} recipes={recipes} />
            ))}
          </div>
        </div>
      </div>
    </InnerApp>
  )
  //   return <div className={style.wrapper}></div>
}
