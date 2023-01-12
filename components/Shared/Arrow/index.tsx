import Icon from "../Icon"
import { classNames } from "utils"
import { IProps } from "types/components/Arrow"

const Arrow = ({ className, direction, background }: IProps) => {
  return (
    <button
      className={classNames(
        "w-auto h-24 cursor-pointer group disabledcursor-not-allowed",
        className,
        direction === "right" && "rotate-180",
      )}
    >
      <div className="relative">
        <svg width="34" height="93" viewBox="0 0 34 93" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26.8665 32.428C17.9836 25.4576 7.38809 19.1824 0 0V92.5001C6.44522 75.6301 18.4051 68.889 28.0682 59.6002C32.0726 55.7509 34.0748 53.8263 33.6635 45.6325C33.2522 37.4388 31.1236 35.7685 26.8665 32.428Z"
            fill={background || "#fff"}
          />
        </svg>
        <Icon
          name="arrow-left"
          size={20}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group-hover:fill-[#D72339] transition-colors"
        />
      </div>
    </button>
  )
}

export default Arrow
