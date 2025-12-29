import Image from "next/image"
import style from "./TelegramChatBlock.module.scss"
export function TelegramChatBlock() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.textBlock}>
          <h4>Телеграмм чат</h4>
          <div>
            Получайте ценные знания напрямую от экспертов и находите
            единомышленников в нашем онлайн-сообществе. Регулярные вебинары
            помогут глубоко разобраться в важных темах здорового питания.
          </div>
          <button>Оформить подписку</button>
        </div>
        <div className={style.imageBlock}>
          <Image
            src={"/image/smile-girl.png"}
            width={927}
            height={966}
            alt="smile-girl"
          />
        </div>
      </div>
    </div>
  )
}
