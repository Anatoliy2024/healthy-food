import { Arrow } from "@/assets/svg/Arrow"
import style from "./RecipeBlock.module.scss"
export function RecipeBlock() {
  return (
    <div className={style.wrapper}>
      <h3>Вкусные и полезные рецепты на каждый день</h3>
      <div className={style.content}>
        <div className={style.rowOne}>
          <div className={style.breakfast}>
            <div>
              <h4>Завтраки</h4>
              <Arrow />
            </div>
          </div>
          <div className={style.lunch}>
            <div>
              <h4>Обеды</h4>
              <Arrow />
            </div>
          </div>
        </div>
        <div className={style.rowTwo}>
          <div className={style.dinner}>
            <div>
              <h4>Ужин</h4>
              <Arrow />
            </div>
          </div>
          <div className={style.smoothie}>
            <div>
              <h4>Смузи</h4>
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
