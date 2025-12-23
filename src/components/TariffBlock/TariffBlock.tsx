import style from "./TariffBlock.module.scss"

const BD = [
  "Персональное недельное меню",
  "Списки покупок на каждый день",
  "Поддержка по e-mail",
  "Советы по замене продуктов",
  "Доступ ко всем рецептам",
  "2 онлайн-разбора питания в месяц",
  "Индивидуальный план питания c учётом анализа рациона и здоровья",
  "Чек-листы для мотивации и контроля прогресса",
  "Приглашение на закрытые вебинары и онлайн-кулинарные мастер-классы",
]
export function TariffBlock() {
  return (
    <div className={style.wrapper}>
      <h3>Тарифы</h3>
      <div className={style.content}>
        <TrafficElem title="Базовый" price="1299P" styleElem="basic" />
        <TrafficElem
          title="Премиум"
          price="2449P"
          fullPrice="3449P"
          styleElem="special2"
        />
        <TrafficElem title="Оптимальный" price="1999P" styleElem="special" />
      </div>
    </div>
  )
}

function TrafficElem({
  title,
  price,
  styleElem,
  fullPrice,
}: {
  title: string
  price: string
  styleElem?: string
  fullPrice?: string
}) {
  return (
    <div
      className={`${style.col} ${
        styleElem === "special" ? style.special : ""
      } ${styleElem === "special2" ? style.specialTwo : ""}`}
    >
      <h4>{title}</h4>
      <div className={style.price}>
        {price}
        {fullPrice && <div className={style.fullPrice}>{fullPrice}</div>}
      </div>

      <ul>
        {BD.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
      <button>Оформить подписку</button>
    </div>
  )
}
