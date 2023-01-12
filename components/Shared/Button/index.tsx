import Link from "next/link"

import { IProps } from "types/components/Button"
import { classNames } from "utils/classNames"

const Button = ({ children, className, disabled, href, onClick, type }: IProps) => {
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
      "appearance-none relative text-center inline-block bg-button-primary rounded-full overflow-hidden cursor-pointer select-none transition duration-150 ease-in-out transform border border-transparent px-5 py-2.5 text-white",
      disabled && "cursor-not-allowed opacity-75",
      className,
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
