import Image from "next/image"
import style from "./FaceBlockMain.module.scss"
export function FaceBlockMain() {
  return (
    <div className={style.faceBlockMain}>
      <div className={style.faceBlockMain__container}>
        <div className={style.faceBlockMain__textInfo}>
          <div>Сбалансированное & здоровое </div>
          <div>питание дома</div>
          <button>Оформить подписку</button>
        </div>
        <div className={style.faceBlockMain__imageWrapper}>
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
