import Link from "next/link"

import { IProps } from "types/components/Button"
import { classNames } from "utils/classNames"

const Button = ({ children, className, disabled, href, onClick, type, variant }: IProps) => {
  const handleClickButton = () => {
    if (!disabled && typeof onClick === "function") {
      onClick()
    }
  }

  const elementProps = {
    type: href ? null : type || "button",
    onClick: handleClickButton,
    disabled: disabled,
    className: classNames(
      "appearance-none relative text-center inline-block rounded-full overflow-hidden cursor-pointer select-none transition duration-300 ease-in-out transform border border-transparent px-5 py-2.5",
      disabled && "cursor-not-allowed opacity-75",
      className,
      variant === "primary" && "text-white bg-button-primary hover:bg-button-primary-hover",
      variant === "secondary" && "text-red bg-gray-7 hover:bg-light-pink",
    ),
  }

  return href ? (
    <Link href={href} {...elementProps}>
      <span>{children}</span>
    </Link>
  ) : (
    <button {...elementProps}>
      <span>{children}</span>
    </button>
  )
}

export default Button
