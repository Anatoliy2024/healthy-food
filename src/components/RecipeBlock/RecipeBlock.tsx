import { Arrow } from "@/assets/svg/Arrow"
import style from "./RecipeBlock.module.scss"
export function RecipeBlock() {
  return (
    <div className={style.wrapper} id="recipe">
      <h3>Вкусные и полезные рецепты на каждый день</h3>
      <div className={style.content}>
        <div className={style.rowOne}>
          <div className={style.breakfast}>
            <RecipeElem text={"Завтраки"} />
            {/* <div>
              <h4>Завтраки</h4>
              <Arrow />
            </div> */}
          </div>
          <div className={style.lunch}>
            <RecipeElem text={"Обеды"} />

            {/* <div>
              <h4>Обеды</h4>
              <Arrow />
            </div> */}
          </div>
        </div>
        <div className={style.rowTwo}>
          <div className={style.dinner}>
            <RecipeElem text={"Ужин"} />

            {/* <div>
              <h4>Ужин</h4>
              <Arrow />
            </div> */}
          </div>
          <div className={style.smoothie}>
            <RecipeElem text={"Смузи"} />

            {/* <div>
              <h4>Смузи</h4>
              <Arrow />
            </div> */}
          </div>
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
