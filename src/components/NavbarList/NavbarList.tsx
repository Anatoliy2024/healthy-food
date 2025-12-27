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
        <Link href="/advice" onClick={handleLinkClick} prefetch={false}>
          Советы
        </Link>
      </li>
      <li>
        <Link href="/Recipe" onClick={handleLinkClick} prefetch={false}>
          Рецепты
        </Link>
      </li>
      <li>
        <Link
          href="/IndividualApproach"
          onClick={handleLinkClick}
          prefetch={false}
        >
          Индивидуальный подход
        </Link>
      </li>
      <li>
        <Link href="/Templates" onClick={handleLinkClick} prefetch={false}>
          Шаблоны
        </Link>
      </li>
      <li>
        <Link href="/Worth" onClick={handleLinkClick} prefetch={false}>
          Ценности
        </Link>
      </li>
      {/* <li>Советы</li> 
       <li>Рецепты</li>
      <li>Индивидуальный подход</li>
      <li>Шаблоны</li>
      <li>Ценности</li> */}
    </ul>
  )
}
