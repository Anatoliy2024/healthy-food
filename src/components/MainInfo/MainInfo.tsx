import { AdviceBlock } from "../AdviceBlock/AdviceBlock"
import { GeneralInformationBlock } from "../GeneralInformation/GeneralInformationBlock"
import { RecipeBlock } from "../RecipeBlock/RecipeBlock"
import { SloganBlock } from "../SloganBlock/SloganBlock"
import { SubscribeBlock } from "../SubscribeBlock/SubscribeBlock"

export function MainInfo() {
  return (
    <div>
      <GeneralInformationBlock />
      <SubscribeBlock />
      <AdviceBlock />
      <SloganBlock />
      <RecipeBlock />
    </div>
  )
}
