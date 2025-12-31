"use client"
import { useEffect, useState } from "react"
import { LogoFull } from "../LogoFull/LogoFull"
import { NavbarList } from "../NavbarList/NavbarList"
import style from "./Header.module.scss"
import { Logo } from "@/assets/svg/logo"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleShowToggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1200px)")

    const updateMedia = () => {
      setMenuOpen(mediaQuery.matches)
      setShowButton(!mediaQuery.matches)
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    // начальное состояние (УЖЕ НА КЛИЕНТЕ)
    updateMedia()
    onScroll()

    mediaQuery.addEventListener("change", updateMedia)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      mediaQuery.removeEventListener("change", updateMedia)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    if (menuOpen && showButton) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen, showButton])

  return (
    <div className={`${style.wrapper} ${scrolled ? style.headerBg : ""}`}>
      <div className={style.container}>
        <LogoFull />

        {menuOpen && showButton && (
          <div className={style.overlay} onClick={() => setMenuOpen(false)} />
        )}
        <NavbarList isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        {showButton && (
          <div
            onClick={handleShowToggleMenu}
            className={`${style.hamburger} ${
              menuOpen ? style.hamburgerOpen : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </div>
  )
}
