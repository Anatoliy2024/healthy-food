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
        <Link onClick={handleLinkClick} href="/#advise">
          Советы
        </Link>
      </li>
      <li>
        <Link onClick={handleLinkClick} href="/#recipe">
          Рецепты
        </Link>
      </li>
      <li>
        <Link onClick={handleLinkClick} href="/#advantage">
          Индивидуальный подход
        </Link>
      </li>
      <li>
        <Link onClick={handleLinkClick} href="/#templates">
          Шаблоны
        </Link>
      </li>
      <li>
        <Link onClick={handleLinkClick} href="/#worth">
          Ценности
        </Link>
      </li>
    </ul>
  )
}
