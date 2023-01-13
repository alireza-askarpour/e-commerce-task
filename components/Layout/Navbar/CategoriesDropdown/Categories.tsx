import { Icon } from "components/Shared"
import { classNames } from "utils/classNames"

export default function TopCategories({ activeCategory, categories, setActiveCategory }) {
  return (
    <div className="min-w-[220px] py-4 pr-4">
      <ul className="space-y-1">
        {categories?.map(({ name, icon, value, subcategories }) => (
          <li
            key={value}
            className={classNames(
              value === activeCategory.value ? "text-red bg-gray-7" : "text-gray-3",
              "flex items-center justify-between py-2 pr-2 pl-1 transition-all group duration-200 rounded-xl cursor-pointer select-none hover:text-red hover:bg-gray-7",
            )}
            onClick={() => {
              setActiveCategory({ name, value, subcategories })
            }}
          >
            <div className="flex items-center">
              <Icon
                name={icon}
                className={classNames(
                  "transition-colors duration-200 ml-2 group-hover:fill-red",
                  value === activeCategory.value && "fill-red",
                )}
              />
              <span>{name}</span>
            </div>

            {activeCategory.value === value && (
              <Icon
                name="arrow-left"
                size={16}
                className={classNames(
                  "transition-colors duration-200 ml-2 group-hover:fill-red",
                  value === activeCategory.value && "fill-red",
                )}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
