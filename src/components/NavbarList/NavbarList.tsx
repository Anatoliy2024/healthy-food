import style from "./NavbarList.module.scss"
export function NavbarList() {
  return (
    <ul className={style.navbar}>
      <li>Советы</li>
      <li>Рецепты</li>
      <li>Индивидуальный подход</li>
      <li>Шаблоны</li>
      <li>Ценности</li>
    </ul>
  )
}
