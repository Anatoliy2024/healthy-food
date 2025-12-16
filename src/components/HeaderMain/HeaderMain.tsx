import Image from "next/image"
import style from "./HeaderMain.module.scss"
export function HeaderMain() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.textInfo}>
          <div>Сбалансированное & здоровое </div>
          <div>питание дома</div>
          <button>Оформить подписку</button>
        </div>
        <div className={style.imageWrapper}>
          <Image
            src="/image/dish-2.png"
            width={716}
            height={670}
            alt="dishImage"
          />
        </div>
      </div>
    </div>
  )
}
