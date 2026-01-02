import { ArrowOpen } from "@/assets/svg/ArrowOpen"
import style from "./FilterBlock.module.scss"
import { ArrowClose } from "@/assets/svg/ArrowClose"
import { SetIsCheckedType, SetOpenType } from "@/app/recipes/page"
import { Dispatch, SetStateAction } from "react"
type FilterKey = keyof SetOpenType
export function FilterBlock({
  filterKey,
  title,
  options,
  open,
  setOpen,
  checked,
  setChecked,
}: {
  filterKey: string
  title: string
  options: { value: string; label: string }[]

  open: SetOpenType
  setOpen: Dispatch<SetStateAction<SetOpenType>>
  checked: SetIsCheckedType
  setChecked: Dispatch<SetStateAction<SetIsCheckedType>>
}) {
  return (
    <div>
      <div
        className={style.triggerContainer}
        onClick={() => {
          setOpen((o) => ({ ...o, [filterKey]: !o[filterKey as FilterKey] }))

          if (open[filterKey as FilterKey]) {
            setChecked((c) => ({ ...c, [filterKey]: "" }))
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
          {options.map((opt) => (
            <div key={opt.value}>
              <input
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
              />
              <label htmlFor={opt.value}>{opt.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
