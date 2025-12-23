import { AdvantageBlock } from "../AdvantageBlock/AdvantageBlock"
import { AdviceBlock } from "../AdviceBlock/AdviceBlock"
import { CheckList } from "../CheckList/CheckList"
import { GeneralInformationBlock } from "../GeneralInformation/GeneralInformationBlock"
import { RecipeBlock } from "../RecipeBlock/RecipeBlock"
import { SloganBlock } from "../SloganBlock/SloganBlock"
import { SloganBlockTwo } from "../SloganBlockTwo/SloganBlockTwo"
import { SubscribeBlock } from "../SubscribeBlock/SubscribeBlock"
import { TariffBlock } from "../TariffBlock/TariffBlock"

export function MainInfo() {
  return (
    <div>
      <GeneralInformationBlock />
      <SubscribeBlock />
      <AdviceBlock />
      <SloganBlock />
      <RecipeBlock />
      <AdvantageBlock />
      <SloganBlockTwo />
      <CheckList />
      <TariffBlock />
    </div>
  )
}
