import { Arrow } from "@/assets/svg/Arrow"
import style from "./RecipeBlock.module.scss"
import Link from "next/link"
export function RecipeBlock() {
  return (
    <div className={style.wrapper} id="recipe">
      <h3>Вкусные и полезные рецепты на каждый день</h3>
      <div className={style.content}>
        <div className={style.rowOne}>
          <Link href="/Recipes" className={style.breakfast}>
            <RecipeElem text={"Завтраки"} />
          </Link>
          <Link href="/Recipes" className={style.lunch}>
            <RecipeElem text={"Обеды"} />
          </Link>
        </div>
        <div className={style.rowTwo}>
          <Link href="/Recipes" className={style.dinner}>
            <RecipeElem text={"Ужин"} />
          </Link>
          <Link href="/Recipes" className={style.smoothie}>
            <RecipeElem text={"Смузи"} />
          </Link>
        </div>
      </div>
    </div>
  )
}

function RecipeElem({ text }: { text: string }) {
  return (
    <div>
      <h4>{text}</h4>
      <Arrow />
    </div>
  )
}
