import style from "./RecipesDishCard.module.scss"

type RecipeType = {
  title: string
  imageUrl: string
  nutrients: { protein: number; fat: number; carbohydrates: number }
  calorieContent: number
  private: boolean
}

export function RecipesDishCard({ recipes }: { recipes: RecipeType }) {
  return (
    <div className={style.wrapper}>
      <div
        className={style.imageBlock}
        style={{
          background: `url(${recipes.imageUrl}) center / cover no-repeat`,
        }}
      >
        <ul>
          <li>Б-{recipes.nutrients.protein}г</li>
          <li>Ж-{recipes.nutrients.fat}г</li>
          <li>У-{recipes.nutrients.carbohydrates}г</li>
        </ul>
      </div>
      <div>{recipes.title}</div>
      <div>{recipes.calorieContent}ккал- 100 грамм</div>
      <div></div>
    </div>
  )
}
