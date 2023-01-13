import { CustomLink } from "components/Shared"

export default function SubCategories({ activeCategory, categories }) {
  return (
    <div className="py-6 px-8 flex-1 space-y-4">
      <h3 className="text-sm text-gray-3 font-medium border-r-red pr-2 border-r-4 leading-6">{activeCategory.name}</h3>
      <ul className="mb-2 list-none flex flex-wrap content-start justify-start">
        {activeCategory.subcategories.map((item) => (
          <li key={item.value} className="w-1/2 mb-2">
            <CustomLink href="/" style={{ fontSize: "12px" }} className="text-gray-3">
              {item.name}
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
