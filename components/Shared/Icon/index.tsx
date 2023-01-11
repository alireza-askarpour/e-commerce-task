import { IProps } from "types/components/Icon"
import { icons } from "./icons"

const colors = {
  black: "#4F4F4F",
  white: "#FFFFFF",
  red: "#D72339",
  gray: "#7D7D7D",
}

export default function Icon({ name, className, color = "gray", size = 24 }: IProps) {
  if (!icons[name]) throw new Error(`Cannot find icon ${name}`)

  const IconElement = icons[name]
  const iconColor = colors?.[color]

  return (
    <svg
      fill={iconColor}
      width={size}
      height={size}
      aria-label={name}
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <IconElement stopColor={iconColor} />
    </svg>
  )
}
