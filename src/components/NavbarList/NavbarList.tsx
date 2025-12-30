"use client"
import Link from "next/link"
import style from "./NavbarList.module.scss"
export function NavbarList({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const handleLinkClick = () => {
    const isMobile = window.innerWidth <= 1200
    if (isMobile && onClose) {
      onClose()
    }
  }

  return (
    <ul className={`${style.navbar} ${!isOpen ? style.hidden : ""}`}>
      <li onClick={handleLinkClick}>
        <a href="#advise">Советы</a>
      </li>
      <li onClick={handleLinkClick}>
        <a href="#recipe">Рецепты</a>
      </li>
      <li onClick={handleLinkClick}>
        <a href="#advantage">Индивидуальный подход</a>
      </li>
      <li onClick={handleLinkClick}>
        <a href="#templates">Шаблоны</a>
      </li>
      <li onClick={handleLinkClick}>
        <a href="#worth">Ценности</a>
      </li>
      {/* <li>Советы</li> 
       <li>Рецепты</li>
      <li>Индивидуальный подход</li>
      <li>Шаблоны</li>
      <li>Ценности</li> */}
    </ul>
  )
}
