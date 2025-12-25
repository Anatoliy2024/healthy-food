import Image from "next/image"
import style from "./AdvantageBlock.module.scss"

const BD = [
  {
    title: "Поддержка сообщества единомышленников",
    description:
      "Вы становитесь частью закрытого клуба, где каждый разделяет ваши цели. Общайтесь, делитесь успехами, получайте советы и находитемотивацию.",
    image: "/image/icons.png",
  },
  {
    title: "Экономия времени",
    description:
      "Программа и материалы структурированы так, чтобы вы получали максимум пользы за малое время.",
    image: "/image/icons(1).png",
  },
  {
    title: "Формирование устойчивых здоровых привычек",
    description:
      "Маленькие шаги ведут к большим изменениям. Откройте для себя простые и эффективные методы.",
    image: "/image/icons(2).png",
  },
  {
    title: "Доступ к базе знаний",
    description:
      "Получите доступ к проверенной информации: статьям, видеоурокам и тренировкам от экспертов.",
    image: "/image/icons(3).png",
  },
  {
    title: "Улучшение общего самочувствия",
    description:
      "Наша программа нацелена не только на внешние изменения, но и полное оздоровление организма.",
    image: "/image/icons(4).png",
  },
]
export function AdvantageBlock() {
  return (
    <div className={style.wrapper}>
      <h3>
        Индивидуальный подход:
        <br /> Онлайн-поддержка тренера
      </h3>

      <div className={style.content}>
        {BD.map((el, index) => (
          <AdvantageElem
            title={el.title}
            description={el.description}
            image={el.image}
            key={index}
          />
        ))}

        <div className={style.subscribeElem}>
          <h4>Доступно с платной подпиской «оптимальный» и выше</h4>
          <button>Оформить подписку</button>
        </div>
      </div>
    </div>
  )
}

function AdvantageElem({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <div className={style.advantageElem}>
      <h4>{title}</h4>
      <div>{description}</div>
      <div className={style.imageContainer}>
        <Image src={image} width={200} height={240} alt="image" />
      </div>
      {/* <div className={style.elemContent}>
      </div> */}
    </div>
  )
}
