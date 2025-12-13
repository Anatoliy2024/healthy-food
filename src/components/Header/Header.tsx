import { Navbar } from "../Navbar/Navbar"
import { HeaderMain } from "../HeaderMain/HeaderMain"
import style from "./Header.module.scss"
export function Header() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Navbar />
        <HeaderMain />
      </div>
    </div>
  )
}
