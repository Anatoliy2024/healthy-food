import { GeneralInformationBlock } from "../GeneralInformation/GeneralInformationBlock"
import { SubscribeBlock } from "../SubscribeBlock/SubscribeBlock"

export function MainInfo() {
  return (
    <div>
      <GeneralInformationBlock />
      <SubscribeBlock />
    </div>
  )
}
