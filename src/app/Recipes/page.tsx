"use client"
import InnerApp from "@/providers/InnerApp"
import style from "./Recipes.module.scss"
import { useState } from "react"

import { FilterBlock } from "@/components/FilterBlock/FilterBlock"

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
  console.log("isCheckedIngestion", isChecked)
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
          <div className={style.recipe}></div>
        </div>
      </div>
    </InnerApp>
  )
  //   return <div className={style.wrapper}></div>
}
