import { MainInfo } from "@/components/MainInfo/MainInfo"

import InnerApp from "@/providers/InnerApp"

export default function Home() {
  return (
    <InnerApp>
      <MainInfo />
    </InnerApp>
  )
}
