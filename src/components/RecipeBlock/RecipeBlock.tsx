import { Arrow } from "@/assets/svg/Arrow"
import style from "./RecipeBlock.module.scss"
import Link from "next/link"
export function RecipeBlock() {
  return (
    <div className={style.recipeBlock} id="recipe">
      <h3>Вкусные и полезные рецепты на каждый день</h3>
      <div className={style.recipeBlock__content}>
        <div className={style.recipeBlock__rowOne}>
          <Link
            href={"/recipes?ingestion=breakfast"}
            className={style.recipeBlock__breakfast}
          >
            <RecipeElem text={"Завтраки"} />
          </Link>
          <Link
            href={"/recipes?ingestion=lunch"}
            className={style.recipeBlock__lunch}
          >
            <RecipeElem text={"Обеды"} />
          </Link>
        </div>
        <div className={style.recipeBlock__rowTwo}>
          <Link
            href={"/recipes?ingestion=dinner"}
            className={style.recipeBlock__dinner}
          >
            <RecipeElem text={"Ужин"} />
          </Link>
          <Link
            href={"/recipes?ingestion=smoothie"}
            className={style.recipeBlock__smoothie}
          >
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
