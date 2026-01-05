export type SetOpenType = {
  ingestion: boolean
  cookingTime: boolean
  complexity: boolean
  yourTarget: boolean
}
export type SetIsCheckedType = {
  ingestion: string
  cookingTime: string
  complexity: string
  yourTarget: string
}
export type FilterKey = keyof SetIsCheckedType

export type FiltersType = {
  key: FilterKey
  title: string
  options: {
    value: string
    label: string
  }[]
}[]
