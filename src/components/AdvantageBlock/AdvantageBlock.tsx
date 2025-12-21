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
        {/* <AdvantageElem
          title="Поддержка сообщества единомышленников"
          description=" Вы становитесь частью закрытого клуба, где каждый разделяет ваши
              цели. Общайтесь, делитесь успехами, получайте советы и находите
              мотивацию."
          image="/image/icons.png"
        />
        <div>
          <h4>Поддержка сообщества единомышленников</h4>
          <div>
            <div>
              Вы становитесь частью закрытого клуба, где каждый разделяет ваши
              цели. Общайтесь, делитесь успехами, получайте советы и находите
              мотивацию.
            </div>
            <div>
              <Image
                src="/image/icons.png"
                width={200}
                height={240}
                alt="image"
              />
            </div>
          </div>
        </div>
        <div>
          <h4>Экономия времени</h4>
          <div>
            <div>
              Программа и материалы структурированы так, чтобы вы получали
              максимум пользы за малое время.
            </div>
            <div>
              <Image
                src="/image/icons(1).png"
                width={200}
                height={240}
                alt="image"
              />
            </div>
          </div>
        </div>
        <div>
          <h4>Формирование устойчивых здоровых привычек</h4>
          <div>
            <div>
              Маленькие шаги ведут к большим изменениям. Откройте для себя
              простые и эффективные методы.
            </div>
            <div>
              <Image
                src="/image/icons(2).png"
                width={200}
                height={240}
                alt="image"
              />
            </div>
          </div>
        </div>
        <div>
          <h4>Доступ к базе знаний</h4>
          <div>
            <div>
              Получите доступ к проверенной информации: статьям, видеоурокам и
              тренировкам от экспертов.
            </div>
            <div>
              <Image
                src="/image/icons(3).png"
                width={200}
                height={240}
                alt="image"
              />
            </div>
          </div>
        </div>
        <div>
          <h4>Улучшение общего самочувствия</h4>
          <div>
            <div>
              наша программа нацелена не только на внешние изменения, но и
              полное оздоровление организма.
            </div>
            <div>
              <Image
                src="/image/icons(4).png"
                width={200}
                height={240}
                alt="image"
              />
            </div>
          </div>
        </div> */}
        <div>
          <h4>доступно с платной подпиской «оптимальный» и выше</h4>
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
      <div className={style.elemContent}>
        <div>{description}</div>
        <div className={style.imageContainer}>
          <Image src={image} width={200} height={240} alt="image" />
        </div>
      </div>
    </div>
  )
}
