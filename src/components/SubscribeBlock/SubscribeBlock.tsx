import Image from "next/image"
import style from "./SubscribeBlock.module.scss"
export function SubscribeBlock() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.textBlock}>
          <h3>Скорее подпишись </h3>
          <div>
            <p>
              Оформи подписку прямо сейчас и открой доступ к более чем 100
              эксклюзивным рецептам, которые недоступны на бесплатном тарифе!{" "}
            </p>
            <p>
              Открой для себя новые вкусы, кулинарные техники и вдохновение для
              каждого дня.
            </p>
          </div>
          <button>Оформить подписку</button>
        </div>
        <div className={style.imageBlock}>
          <Image src="/image/dish-3.png" width={701} height={574} alt="dish" />
        </div>
      </div>
    </div>
  )
}
