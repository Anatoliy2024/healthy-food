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

  // const BD = [
  //   [
  //     {
  //       ingestion: "Завтрак",
  //       nameDish: "Овсянка с ягодами и орехами",
  //       kal: "~350 ккал",
  //       nutrients: "Б-12г / Ж-10г / У-50г",
  //       description:
  //         "Классическая овсянка на воде или нежирном молоке с добавлением свежих или замороженных ягод (малина, черника) и горсти измельченных орехов (миндаль, грецкий).",
  //     },
  //     {
  //       ingestion: "Перекус",
  //       nameDish: "Яблоко и 100г натурального йогурта",
  //       kal: "~150 ккал",
  //       nutrients: "Б-8г / Ж-3г / У-20г",
  //       description:
  //         "",
  //     },
  //     {
  //       ingestion: "Обед",
  //       nameDish: "Куриная грудка на гриле с киноа и овощным салатом",
  //       kal: "~550 ккал",
  //       nutrients: "Б-40г / Ж-15г / У-60г",
  //       description:
  //         "Нежная куриная грудка, приготовленная без масла, рассыпчатая киноа как гарнир и свежий салат из огурцов, помидоров, болгарского перца, заправленный оливковым маслом.",
  //     },
  //     {
  //       ingestion: "Ужин",
  //       nameDish: "Запеченная треска с брокколи и бататом",
  //       kal: "~600 ккал",
  //       nutrients: "Б-34г / Ж-20г / У-50г",
  //       description:
  //         "Филе трески, запеченное в духовке с лимоном и травами, подается с отварной или запеченной брокколи и кусочками батата.",
  //     },
  //   ],
  // ]

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
