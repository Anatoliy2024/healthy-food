import { FaceBlockMain } from "../FaceBlockMain/FaceBlockMain"
import style from "./FaceBlock.module.scss"
import Image from "next/image"
export function FaceBlock() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        {/* <Navbar /> */}
        <FaceBlockMain />
        <div className={style.backgroundFruit}>
          <div className={style.appleOne}>
            <Image
              src="/image/apple.png"
              width={100}
              height={100}
              alt="apple"
            />
          </div>
          <div className={style.appleTwo}>
            <Image src="/image/apple.png" width={70} height={70} alt="apple" />
          </div>
          <div className={style.appleThree}>
            <Image src="/image/apple.png" width={80} height={80} alt="kiwi" />
          </div>
          <div className={style.kiwiOne}>
            <Image src="/image/kiwi.png" width={100} height={100} alt="kiwi" />
          </div>
          <div className={style.kiwiTwo}>
            <Image src="/image/kiwi.png" width={120} height={120} alt="kiwi" />
          </div>
          <div className={style.kiwiThree}>
            <Image src="/image/kiwi.png" width={180} height={180} alt="kiwi" />
          </div>
          <div className={style.pearOne}>
            <Image src="/image/pear.png" width={120} height={120} alt="pear" />
          </div>
          <div className={style.pearTwo}>
            <Image src="/image/pear.png" width={200} height={200} alt="pear" />
          </div>
        </div>
      </div>
    </div>
  )
}
