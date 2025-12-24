import { Telegram } from "@/assets/svg/Telegram"
import { LogoFull } from "../LogoFull/LogoFull"
import { NavbarList } from "../NavbarList/NavbarList"
import style from "./Footer.module.scss"
import { WhatsApp } from "@/assets/svg/WhatsApp"
import { Instagram } from "@/assets/svg/Instagram"
import { TicToc } from "@/assets/svg/TicToc"
import { Vk } from "@/assets/svg/Vk"
export function Footer() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.colOne}>
          <LogoFull />
          <div className={style.privetPolitic}>
            ©2024 — tea room Privacy Policy
          </div>
        </div>
        <div className={style.colTwo}>
          <NavbarList />
          <div className={style.socialMedia}>
            <div>
              <Telegram />
            </div>
            <div>
              <WhatsApp />
            </div>
            <div>
              <Instagram />
            </div>
            <div>
              <TicToc />
            </div>
            <div>
              <Vk />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
