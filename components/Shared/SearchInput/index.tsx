import { Icon, IconButton } from "components/Shared"
import { IProps } from "types/components/SearchInput"
import { classNames } from "utils"

const SearchInput = ({ placeholder, className }: IProps) => {
  return (
    <div className={classNames("flex items-center justify-end rounded-full bg-[#F7F7F7]", className)}>
      <input type="text" placeholder={placeholder} className="flex-1 outline-none pr-3 bg-inherit rounded-full" />
      <IconButton size="lg">
        <Icon name="search-normal" size={20} />
      </IconButton>
    </div>
  )
}

export default SearchInput
