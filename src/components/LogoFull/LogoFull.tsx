import { Logo } from "@/assets/svg/logo"
import style from "./LogoFull.module.scss"
export function LogoFull() {
  return (
    <div className={style.logo}>
      <div>
        <Logo />
      </div>
      <div>
        здоровое <br />
        питания
      </div>
    </div>
  )
}
