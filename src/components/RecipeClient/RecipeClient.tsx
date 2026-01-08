"use client"

import { useParams } from "next/navigation"

import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import recipesDishBD from "@/BD/recipesDish"
import InnerApp from "@/providers/InnerApp"
import { ArrowLeft } from "@/assets/svg/ArrowLeft"

import style from "./RecipeClient.module.scss"
export default function RecipeClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { id } = useParams()
  const recipeDish = recipesDishBD.filter((el) => el.id === Number(id))[0]

  const goBack = () => {
    const params = new URLSearchParams(searchParams.toString())

    router.push(`/recipes?${params.toString()}`)
  }
  return (
    <InnerApp>
      <div className={style.wrapper}>
        <div
          className={`${style.backButton} noSelect`}
          onClick={() => goBack()}
        >
          <ArrowLeft />
          <div>Назад</div>
        </div>
        <h1>{recipeDish.title}</h1>
        <div className={style.contentBlock}>
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
            <div className={style.ingredients}>
              <h2>Ингридиенты</h2>
              <ul>
                {recipeDish.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
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
              {recipeDish.recipe[1] && (
                <div>
                  <h3>{recipeDish.recipe[1].stageName}</h3>
                  <ul>
                    {recipeDish.recipe[1].stageList.map((el, index) => (
                      <li key={index}>{el}</li>
                    ))}
                  </ul>
                </div>
              )}
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
