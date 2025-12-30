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
      <li>
        <a onClick={handleLinkClick} href="#advise">
          Советы
        </a>
      </li>
      <li>
        <a onClick={handleLinkClick} href="#recipe">
          Рецепты
        </a>
      </li>
      <li>
        <a onClick={handleLinkClick} href="#advantage">
          Индивидуальный подход
        </a>
      </li>
      <li>
        <a onClick={handleLinkClick} href="#templates">
          Шаблоны
        </a>
      </li>
      <li>
        <a onClick={handleLinkClick} href="#worth">
          Ценности
        </a>
      </li>
      {/* <li>Советы</li> 
       <li>Рецепты</li>
      <li>Индивидуальный подход</li>
      <li>Шаблоны</li>
      <li>Ценности</li> */}
    </ul>
  )
}
