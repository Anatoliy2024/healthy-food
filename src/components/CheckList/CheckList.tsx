import { ArrowWhite } from "@/assets/svg/ArrowWhite"
import style from "./CheckList.module.scss"
export function CheckList() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h3>Успей забрать чек-лист</h3>
        <div className={style.content}>
          <div className={style.offer}>
            <div>
              <p>
                Оставьте свой адрес электронной почты и начните получать
                полезные советы по правильному питанию прямо на почту —
                совершенно бесплатно!
              </p>
              <p>
                Вас ждут простые рекомендации, вкусные идеи и проверенные
                лайфхаки для здорового образа жизни.
              </p>
            </div>
            <div>
              <input type="text" placeholder="Электронная почта" />
              <ArrowWhite />
            </div>
          </div>
          <div className={style.principles}>
            <div>Здоровье</div>
            <div>Сила</div>
            <div>Результат</div>
            <div>План</div>
            <div>Энергия</div>
            <div>Легкость</div>
            <div>Старт</div>
          </div>
        </div>
      </div>
    </div>
  )
}
