import Link from "next/link"
import { IProps } from "types/components/CustomLink"
import { classNames } from "utils"
import Icon from "../Icon"

import styles from "./style.module.css"

const CustomLink = ({ href, children, style, variant, className, icon }: IProps) => {
  return (
    <Link
      href={href}
      style={style}
      className={classNames(
        "group text-gray-2 text-sm transition duration-300 hover:text-red",
        variant && styles.CustomLink,
        className,
      )}
    >
      {icon && (
        <Icon
          name={icon}
          size={20}
          color="black"
          className="transition duration-300 ml-1.5 group-hover:fill-[#D72339]"
        />
      )}
      {children}
    </Link>
  )
}

export default CustomLink
