import Image from "next/image"
import style from "./AdviceBlock.module.scss"

export function AdviceBlock() {
  return (
    <div className={style.adviceBlock}>
      <div className={style.adviceBlock__imageBlock}>
        <Image src="/image/dish.png" width={495} height={836} alt="dish" />
      </div>
      <div className={style.adviceBlock__textBlock} id="advise">
        <h3>Простые советы для старта</h3>
        <div className={style.adviceBlock__textInfo}>
          <p>
            Начать путь к здоровому питанию можно с простых шагов. Постарайтесь
            заменить сладкие напитки чистой водой и добавить в рацион больше
            овощей и фруктов. Кушайте медленнее и прислушивайтесь к чувству
            насыщения — это помогает избежать переедания.
          </p>
          <p>
            Планируйте приёмы пищи заранее, чтобы реже прибегать к фастфуду.
            Старайтесь готовить дома — так вы точно будете знать, что именно
            едите. Главное — двигаться постепенно и не стремиться к идеалу
            сразу.
          </p>
        </div>
        <div className={style.adviceBlock__advice}>
          <div>Планируйте приёмы пищи заранее</div>
          <div>Пейте достаточно воды</div>
          <div>Соблюдайте режим питания</div>
          <div>Ограничьте добавленный сахар</div>
          <div>Добавляйте овощи и фрукты в каждый приём пищи</div>
        </div>
      </div>
    </div>
  )
}
