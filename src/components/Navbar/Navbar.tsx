import style from "./Navbar.module.scss"
import { Logo } from "@/assets/svg/logo"

export function Navbar() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.logo}>
          <div>
            <Logo />
          </div>
          <div>
            здоровое <br />
            питания
          </div>
        </div>
        <ul className={style.navbar}>
          <li>Советы</li>
          <li>Рецепты</li>
          <li>Индивидуальный подход</li>
          <li>Шаблоны</li>
          <li>Ценности</li>
        </ul>
      </div>
    </div>
  )
}
