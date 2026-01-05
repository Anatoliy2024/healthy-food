import { ArrowOpen } from "@/assets/svg/ArrowOpen"
import style from "./FilterBlock.module.scss"
import { ArrowClose } from "@/assets/svg/ArrowClose"
import { SetIsCheckedType, SetOpenType } from "@/app/recipes/page"
import { Dispatch, SetStateAction } from "react"
import { useRouter, useSearchParams } from "next/navigation"
type FilterKey = keyof SetOpenType
export function FilterBlock({
  filterKey,
  title,
  options,
  open,
  setOpen,
  checked,
  // setChecked,
  handleFilterChange,
}: {
  filterKey: keyof SetIsCheckedType
  title: string
  options: { value: string; label: string }[]

  open: SetOpenType
  setOpen: Dispatch<SetStateAction<SetOpenType>>
  checked: SetIsCheckedType
  // setChecked: Dispatch<SetStateAction<SetIsCheckedType>>
  handleFilterChange: (type: keyof SetIsCheckedType, value: string) => void
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
          // if (open[filterKey as FilterKey]) {
          //   checked[filterKey] = ""
          //   // setChecked((c) => ({ ...c, [filterKey]: "" }))
          // }
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
            // console.log("checked[opt.value]", checked[opt.value])
            // console.log("checked[filterKey]", checked[filterKey])
            // console.log("checked", checked)
            // console.log("opt.value", opt.value)
            // console.log("filterKey", filterKey)
            return (
              <div
                key={opt.value}
                onClick={() => handleFilterChange(filterKey, opt.value)}
                // onClick={() =>
                //   setChecked((c) => ({
                //     ...c,
                //     [filterKey]: opt.value,
                //   }))
                // }
              >
                <div
                  className={`${style.customRadio} ${
                    checked[filterKey as FilterKey] === opt.value
                      ? style.selected
                      : ""
                  }`}
                  // onClick={() => setSelected(opt)}
                  id={opt.value}
                  role="radio"
                  aria-checked={checked[filterKey as FilterKey] === opt.value}
                ></div>
                {/* <input
                type="radio"
                id={opt.value}
                name={filterKey}
                value={opt.value}
                checked={checked[filterKey as FilterKey] === opt.value}
                onChange={(e) =>
                  setChecked((c) => ({
                    ...c,
                    [filterKey]: e.target.value,
                  }))
                }
              /> */}
                <label htmlFor={opt.value}>{opt.label}</label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
