import { ArrowOpen } from "@/assets/svg/ArrowOpen"
import style from "./FilterBlock.module.scss"
import { ArrowClose } from "@/assets/svg/ArrowClose"

import { Dispatch, SetStateAction } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { FilterKey, SetIsCheckedType, SetOpenType } from "@/types/recipes"

export function FilterBlock({
  filterKey,
  title,
  options,
  open,
  setOpen,
  checked,

  handleFilterChange,
}: {
  filterKey: FilterKey
  title: string
  options: { value: string; label: string }[]

  open: SetOpenType
  setOpen: Dispatch<SetStateAction<SetOpenType>>
  checked: SetIsCheckedType

  handleFilterChange: (type: FilterKey, value: string) => void
}) {
  const searchParams = useSearchParams()
  const router = useRouter()
  return (
    <div>
      <div
        className={style.triggerContainer}
        onClick={() => {
          setOpen((o) => ({ ...o, [filterKey]: !o[filterKey as FilterKey] }))
          const params = new URLSearchParams(searchParams.toString())

          const urlParams = params.get(filterKey)
          console.log("filterKey", filterKey)
          console.log("urlParams", urlParams)
          if (urlParams) {
            params.delete(filterKey)
            router.push(`/recipes?${params.toString()}`, { scroll: false })
          }
        }}
      >
        <button className={style.trigger}>{title}</button>
        {open[filterKey as FilterKey] ? <ArrowOpen /> : <ArrowClose />}
      </div>

      <div
        className={`${style.panel} ${
          open[filterKey as FilterKey] ? style.open : ""
        }`}
      >
        <div className={style.inner}>
          {options.map((opt) => {
            return (
              <div
                key={opt.value}
                onClick={() => handleFilterChange(filterKey, opt.value)}
              >
                <div
                  className={`${style.customRadio} ${
                    checked[filterKey as FilterKey] === opt.value
                      ? style.selected
                      : ""
                  }`}
                  id={opt.value}
                  role="radio"
                  aria-checked={checked[filterKey as FilterKey] === opt.value}
                ></div>

                <label htmlFor={opt.value}>{opt.label}</label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
