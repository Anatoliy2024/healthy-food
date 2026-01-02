"use client"
import { useState } from "react"
import style from "./TemplatesDishBlock.module.scss"
import MenuDishBD from "@/BD/MenuDish"

export function TemplatesDishBlock() {
  const [dayMenu, setDayMenu] = useState(0)

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
    <div className={style.wrapper} id="templates">
      <div className={style.container}>
        <h3>Готовые шаблоны меню</h3>
        <div className={style.content}>
          <ul className={style.data}>
            {dates.map((el, i) => (
              <li
                key={i}
                onClick={() => setDayMenu(i)}
                className={dayMenu === i ? style.dataActive : ""}
              >
                {el}
              </li>
            ))}
          </ul>
          <ul className={style.menuDish}>
            {MenuDishBD[dayMenu].map((menu, i) => (
              <li key={i} className={style.menuDishElem}>
                <h4>{menu.ingestion}</h4>
                <div className={style.dishElemContent}>
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
