import { Telegram } from "@/assets/svg/Telegram"
import { LogoFull } from "../LogoFull/LogoFull"

import style from "./Footer.module.scss"
import { WhatsApp } from "@/assets/svg/WhatsApp"
import { Instagram } from "@/assets/svg/Instagram"
import { TicToc } from "@/assets/svg/TicToc"
import { Vk } from "@/assets/svg/Vk"
export function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__colOne}>
          <LogoFull />
        </div>
        <div className={style.footer__colTwo}>
          {/* <NavbarList /> */}
          <div className={style.footer__socialMedia}>
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
      <div className={style.footer__privetPolitic}>
        ©2024 — tea room Privacy Policy
      </div>
    </div>
  )
}
