"use client"
import InnerApp from "@/providers/InnerApp"
import style from "./Recipes.module.scss"
import { useState } from "react"
export default function Recipes() {
  const [open, setOpen] = useState(false)
  return (
    <InnerApp>
      <div className={style.wrapper}>
        <h1>Рецепты</h1>
        <div className={style.content}>
          <div className={style.option}>
            <div>
              <button
                className={style.trigger}
                onClick={() => setOpen((o) => !o)}
              >
                Тип питания
              </button>
              <div className={`${style.panel} ${open ? style.open : ""}`}>
                <div className={style.inner}>
                  <div>Вариант 1</div>
                  <div>Вариант 2</div>
                  <div>Вариант 3</div>
                </div>
              </div>
            </div>
            <div className={style.contentBelow}>
              Контент ниже будет плавно сдвигаться
            </div>
          </div>
          <div className={style.recipe}></div>
        </div>
      </div>
    </InnerApp>
  )
  //   return <div className={style.wrapper}></div>
}
