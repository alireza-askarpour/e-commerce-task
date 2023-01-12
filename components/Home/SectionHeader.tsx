import Link from "next/link"
import { classNames } from "utils"
import { Icon, IconButton } from "components/Shared"
import { IProps } from "types/components/SectionHeader"

const SectionHeader = ({ title, icon, link, className }: IProps) => {
  return (
    <header className={classNames("flex items-center", className)}>
      <div className="flex items-center">
        <IconButton>
          <Icon name={icon} color="red" />
        </IconButton>
        <h2 className="mr-2 font-black text-lg ">{title}</h2>
      </div>
      <hr className="border-[#FFE9EE] mr-6 ml flex-1" />
      {link && (
        <Link href={link} className="hidden md:flex items-center mr-6 group">
          <span className="text-[#4F4F4F] font-medium text-sm ml-1 group-hover:text-[#C2123C] transition-color duration-150">
            مشاهده همه
          </span>
          <Icon
            name="arrow-left-2"
            size={16}
            color="black"
            className="group-hover:fill-[#C2123C] transition-color duration-150"
          />
        </Link>
      )}
    </header>
  )
}

export default SectionHeader
