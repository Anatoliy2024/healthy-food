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
          <li>советы</li>
          <li>рецепты</li>
          <li>индивидуальный подход</li>
          <li>шаблоны</li>
          <li>ценности</li>
        </ul>
      </div>
    </div>
  )
}
