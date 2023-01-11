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
      "appearance-none relative text-center inline-block rounded-full overflow-hidden cursor-pointer select-none transition duration-150 ease-in-out transform border border-transparent px-[24px] py-2.5 text-white",
      disabled && "cursor-not-allowed opacity-75",
      className,
    ),
  }

  return href ? (
    <Link
      href={href}
      {...elementProps}
      style={{
        background: "linear-gradient(252.18deg, #D72339 0.28%, #F23B51 93.8%)",
      }}
    >
      <span>{children}</span>
    </Link>
  ) : (
    <button
      {...elementProps}
      style={{
        background: "linear-gradient(252.18deg, #D72339 0.28%, #F23B51 93.8%)",
      }}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button
