import { FaceBlockMain } from "../FaceBlockMain/FaceBlockMain"
import style from "./FaceBlock.module.scss"
import Image from "next/image"
export function FaceBlock() {
  return (
    <div className={style.faceBlock}>
      <div className={style.faceBlock__container}>
        {/* <Navbar /> */}
        <FaceBlockMain />
        <div className={style.faceBlock__backgroundFruit}>
          <div className={style.faceBlock__appleOne}>
            <Image
              src="/image/apple.png"
              width={100}
              height={100}
              alt="apple"
            />
          </div>
          <div className={style.faceBlock__appleTwo}>
            <Image src="/image/apple.png" width={70} height={70} alt="apple" />
          </div>
          <div className={style.faceBlock__appleThree}>
            <Image src="/image/apple.png" width={80} height={80} alt="kiwi" />
          </div>
          <div className={style.faceBlock__kiwiOne}>
            <Image src="/image/kiwi.png" width={100} height={100} alt="kiwi" />
          </div>
          <div className={style.faceBlock__kiwiTwo}>
            <Image src="/image/kiwi.png" width={120} height={120} alt="kiwi" />
          </div>
          <div className={style.faceBlock__kiwiThree}>
            <Image src="/image/kiwi.png" width={180} height={180} alt="kiwi" />
          </div>
          <div className={style.faceBlock__pearOne}>
            <Image src="/image/pear.png" width={120} height={120} alt="pear" />
          </div>
          <div className={style.faceBlock__pearTwo}>
            <Image src="/image/pear.png" width={200} height={200} alt="pear" />
          </div>
        </div>
      </div>
    </div>
  )
}
