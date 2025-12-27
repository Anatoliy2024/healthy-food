"use client"
import { useEffect, useState } from "react"
import { LogoFull } from "../LogoFull/LogoFull"
import { NavbarList } from "../NavbarList/NavbarList"
import style from "./Navbar.module.scss"
import { Logo } from "@/assets/svg/logo"

export function Navbar() {
  const mediaQuery = window.matchMedia("(min-width: 1200px)")
  const scrollY = window.scrollY > 0
  // на случай если страница уже проскроллена

  const [menuOpen, setMenuOpen] = useState(!!mediaQuery.matches)
  const [showButton, setShowButton] = useState(!mediaQuery.matches)
  const [scrolled, setScrolled] = useState(scrollY)

  console.log("menuOpen", menuOpen)
  console.log("showButton", showButton)
  console.log("scrolled", scrolled)
  // const [menuOpen, setMenuOpen] = useState(false)
  // const [showButton, setShowButton] = useState(false)

  const handleShowToggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1200px)")

    const handleChange = (e: MediaQueryListEvent) => {
      setMenuOpen(!!e.matches) // true — открыть, false — закрыть
      setShowButton(!e.matches)
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    mediaQuery.addEventListener("change", handleChange)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      mediaQuery.removeEventListener("change", handleChange)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    if (menuOpen && window.matchMedia("(min-width: 1200px)")) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <div className={`${style.wrapper} ${scrolled ? style.headerBg : ""}`}>
      <div className={style.container}>
        <LogoFull />
        {/* <div className={style.logo}>
          <div>
            <Logo />
          </div>
          <div>
            здоровое <br />
            питания
          </div>
        </div> */}
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
        {/* <ul className={style.navbar}>
          <li>Советы</li>
          <li>Рецепты</li>
          <li>Индивидуальный подход</li>
          <li>Шаблоны</li>
          <li>Ценности</li>
        </ul> */}
      </div>
    </div>
  )
}
