import Image from "next/image"
import style from "./WorthBlock.module.scss"
export function WorthBlock() {
  return (
    <div className={style.wrapper} id="worth">
      <div className={style.textBlock}>
        <h3>Наши ценности и философия</h3>
        <p>
          Мы верим, что здоровый образ жизни — это не ограничения, а свобода
          выбора, энергия и уверенность в себе. Наша миссия — стать вашим
          надежным партнером на этом пути, предлагая не просто диеты,а
          правильный путь в достижение цели.
        </p>
        <ul>
          <li>Осознанность</li>
          <li>Поддержка</li>
          <li>Энергия</li>
          <li>Свобода</li>
          <li>Доверие</li>
          <li>Устойчивость</li>
          <li>Уверенность</li>
        </ul>
      </div>
      <div className={style.imageBlock}>
        <Image
          src="/image/smile-girl-2.png"
          width={598}
          height={740}
          alt="girl-smile"
        />
      </div>
    </div>
  )
}
