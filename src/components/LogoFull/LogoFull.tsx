import { Logo } from "@/assets/svg/logo"
import style from "./LogoFull.module.scss"
import Link from "next/link"
export function LogoFull() {
  return (
    <Link href="/">
      <div className={style.logo}>
        <div>
          <Logo />
        </div>
        <div>
          здоровое <br />
          питания
        </div>
      </div>
    </Link>
  )
}
