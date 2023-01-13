import { Icon, IconButton } from "components/Shared"
import { IProps } from "types/components/SearchInput"
import { classNames } from "utils"

const SearchInput = ({ placeholder, className }: IProps) => {
  return (
    <div className={classNames("relative h-12 rounded-full bg-gray-7", className)}>
      <input
        type="text"
        placeholder={placeholder}
        className="absolute top-0 right-0 bottom-0 left-0 pl-12 outline-none pr-3 bg-inherit rounded-full transition-all duration-300 border border-transparent border-1 border-gray-7 hover:placeholder:text-gray-2 hover:border-gray-300 focus:placeholder:text-gray-4 focus:border-red"
      />
      <IconButton
        size="lg"
        className="z-10 absolute left-[2px] top-[2px] bottom-[2px]"
        style={{ width: "44px", height: "44px" }}
      >
        <Icon name="search-normal" size={20} />
      </IconButton>
    </div>
  )
}

export default SearchInput
