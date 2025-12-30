import { AdvantageBlock } from "../AdvantageBlock/AdvantageBlock"
import { AdviceBlock } from "../AdviceBlock/AdviceBlock"
import { CheckList } from "../CheckList/CheckList"
import { GeneralInformationBlock } from "../GeneralInformation/GeneralInformationBlock"
import { MisconceptionsBlock } from "../MisconceptionsBlock/MisconceptionsBlock"
import { RecipeBlock } from "../RecipeBlock/RecipeBlock"
import { SloganBlock } from "../SloganBlock/SloganBlock"
import { SloganBlockTwo } from "../SloganBlockTwo/SloganBlockTwo"
import { SubscribeBlock } from "../SubscribeBlock/SubscribeBlock"
import { TariffBlock } from "../TariffBlock/TariffBlock"
import { TelegramChatBlock } from "../TelegramChatBlock/TelegramChatBlock"
import { TemplatesDishBlock } from "../TemplatesDishBlock/TemplatesDishBlock"

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
      <MisconceptionsBlock />
      <TelegramChatBlock />
      <TemplatesDishBlock />
    </div>
  )
}
