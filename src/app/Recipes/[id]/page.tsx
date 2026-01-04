"use client"

import InnerApp from "@/providers/InnerApp"
import { useParams } from "next/navigation"
import recipesDishBD from "@/BD/recipesDish"
import style from "./Recipe.module.scss"
import Image from "next/image"
export default function Recipe() {
  const { id } = useParams()
  const recipeDish = recipesDishBD.filter((el) => el.id === Number(id))[0]
  return (
    <InnerApp>
      <div className={style.wrapper}>
        <h1>{recipeDish.title}</h1>
        <div>
          <div className={style.imageContainer}>
            <Image
              src={recipeDish.imageUrl}
              width={495}
              height={495}
              alt="imageDish"
            />
          </div>
          <div className={style.textContainer}>
            <div className={style.description}>
              <div>
                <div>{recipeDish.calorieContent} ккал- 100 грамм</div>
                <ul>
                  <li>Б-{recipeDish.nutrients.protein}г</li>
                  <li>Ж-{recipeDish.nutrients.fat}г</li>
                  <li>У-{recipeDish.nutrients.carbohydrates}г</li>
                </ul>
              </div>
              <div>{recipeDish.description}</div>
            </div>
            <ul className={style.ingredients}>
              <h2>Ингридиенты</h2>
              {recipeDish.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <div className={style.recipe}>
              <h2>Рецепт</h2>
              <div>
                <h3>{recipeDish.recipe[0].stageName}</h3>
                <ul>
                  {recipeDish.recipe[0].stageList.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>{recipeDish.recipe[1].stageName}</h3>
                <ul>
                  {recipeDish.recipe[1].stageList.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={style.advice}>
              <div>
                <div>{recipeDish.advice.temperature}</div>
                <div>{recipeDish.advice.time}</div>
              </div>
              <ul>
                {recipeDish.advice.otherAdvice.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </InnerApp>
  )
}
