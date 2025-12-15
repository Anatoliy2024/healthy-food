import Image from "next/image"
import style from "./GeneralInformation.module.scss"
export function GeneralInformation() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h3>Что такое здоровое питание?</h3>
        <div className={style.mainInfo}>
          <div className={style.textContainer}>
            <div className={style.othersInfo}>
              <div>Разнообразие</div>
              <div>Регулярное</div>
              <div>Натуральное</div>
              <div>Умеренность</div>
              <div>Баланс</div>
              <div>Вкус</div>
            </div>
            <div className={style.blockInfo}>
              <div className={style.col}>
                <div className={style.protein}>
                  <h4>Белки</h4>
                  <ul>
                    <li>Рост и регенерацию мышц</li>
                    <li>Синтез антител</li>
                    <li>Являются источником аминокислот</li>
                    <li>Способствуют насыщению</li>
                  </ul>
                </div>
                <div className={style.carbohydrates}>
                  <h4>Углеводы</h4>
                  <ul>
                    <li>Продолжительная энергия</li>
                    <li>Нормализует перистальтику</li>
                    <li>Помогает регулировать вес</li>
                    <li>Способствуют насыщению</li>
                  </ul>
                </div>
              </div>

              <div className={style.col}>
                <div className={style.vitamin}>
                  <h4>Витамины</h4>
                  <ul>
                    <li>Укрепляет иммунитет </li>
                    <li>Поддерживает усвоение кальция </li>
                    <li>Защищают клетки от свободных радикалов</li>
                  </ul>
                </div>
                <div className={style.fats}>
                  <h4>Жиры</h4>
                  <ul>
                    <li>Рост клеток и заживление ран</li>
                    <li>Улучшают всасывание витаминов</li>
                    <li>Являются источником аминокислот</li>
                    <li>Снижает воспаление, поддерживают здоровье кожи</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={style.imageContainer}>
            <Image
              src="/image/dish-4.png"
              width={950}
              height={990}
              alt="dishImage"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
