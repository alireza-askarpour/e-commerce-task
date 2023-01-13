import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

import { useOnClickOutside } from "hooks"
import { Icon } from "components/Shared"
import Categories from "./Categories"
import SubCategories from "./SubCategories"

import { classNames } from "utils/classNames"
import { CATEGORIES } from "constants/categories"

export default function CategoriesDropdown() {
  const [open, setOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState({
    name: "",
    value: "",
    subcategories: [],
  })

  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)

  const elementRef = useRef(null)
  useOnClickOutside(elementRef, onClose)

  useEffect(() => {
    const firstCategory = CATEGORIES[0]

    if (firstCategory) {
      setActiveCategory({
        name: firstCategory?.name,
        value: firstCategory?.value,
        subcategories: firstCategory?.subcategories,
      })
    }
  }, [])
  return (
    <div className="relative mr-8 text-sm">
      <div
        className={classNames("px-1 flex items-center cursor-pointer", open && "pointer-events-none")}
        onClick={onOpen}
      >
        <Icon name="category" size={20} color="black" className="transition duration-300 ml-1.5 " />
        دسته بندی ها
        <Icon name="arrow-down-2" size={16} color="black" className="mr-1.5" />
      </div>

      <motion.div
        initial="hide"
        ref={elementRef}
        className="absolute mt-7 top-full right-0 bg-white rounded-2xl min-w-[800px] overflow-hidden z-20  gray-shadow"
        animate={open ? "show" : "hide"}
        transition={{ duration: 0.2, type: "tween" }}
        variants={{
          show: { opacity: 1, display: "flex", y: 0 },
          hide: { opacity: 0, y: 30, transitionEnd: { display: "none" } },
        }}
      >
        <Categories setActiveCategory={setActiveCategory} activeCategory={activeCategory} categories={CATEGORIES} />
        <SubCategories activeCategory={activeCategory} categories={CATEGORIES} />
      </motion.div>
    </div>
  )
}
