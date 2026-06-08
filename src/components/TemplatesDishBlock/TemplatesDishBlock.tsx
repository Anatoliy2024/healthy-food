"use client"
import { useState } from "react"
import style from "./TemplatesDishBlock.module.scss"
import test from "@/BD/test"
import menuDishBD from "@/BD/menuDishBD"

export function TemplatesDishBlock() {
  const [dayMenu, setDayMenu] = useState(0)
  console.log("test", test)
  const today = new Date()

  const formatter = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
  })
  console.log("formatter", formatter)

  const dates = Array.from({ length: 6 }, (_, i) => {
    const date = new Date(today)
    date.setDate(today.getDate() + i)

    return formatter.format(date)
  })

  return (
    <div className={style.templatesDishBlock} id="templates">
      <div className={style.templatesDishBlock__container}>
        <h3>Готовые шаблоны меню</h3>
        <div className={style.templatesDishBlock__content}>
          <ul className={style.templatesDishBlock__data}>
            {dates.map((el, i) => (
              <li
                key={i}
                onClick={() => setDayMenu(i)}
                className={`${dayMenu === i ? style.templatesDishBlock__dataActive : ""} noSelect`}
              >
                {el}
              </li>
            ))}
          </ul>
          <ul className={style.templatesDishBlock__menuDish}>
            {menuDishBD[dayMenu].map((menu, i) => (
              <li key={i} className={style.templatesDishBlock__menuDishElem}>
                <h4>{menu.ingestion}</h4>
                <div className={style.templatesDishBlock__dishElemContent}>
                  <div>{menu.nameDish}</div>
                  <div>{menu.kal}</div>
                  <div>{menu.nutrients}</div>
                  <div>{menu.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
