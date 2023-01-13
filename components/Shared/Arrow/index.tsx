import Icon from "../Icon"
import { classNames } from "utils"
import { IProps } from "types/components/Arrow"

const Arrow = ({ className, direction, background, responsive }: IProps) => {
  return (
    <button
      className={classNames(
        "cursor-pointer group disabled:cursor-not-allowed",
        responsive ? "w-7 h-[68px] md:w-9 md:h-24" : "w-auto h-24",
        direction === "right" && "rotate-180",
        className,
      )}
    >
      <div className="relative">
        <svg
          className={classNames(responsive ? "w-7 h-[68px] md:w-9 md:h-24" : "w-9 h-24")}
          viewBox="0 0 39 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.8665 32.428C17.9836 25.4576 7.38809 19.1824 0 0V92.5001C6.44522 75.6301 18.4051 68.889 28.0682 59.6002C32.0726 55.7509 34.0748 53.8263 33.6635 45.6325C33.2522 37.4388 31.1236 35.7685 26.8665 32.428Z"
            fill={background || "#fff"}
          />
        </svg>
        <Icon
          name="arrow-left"
          className={classNames(
            responsive ? "w-4 h-4 md:w-5 md:h-5" : "w-5 h-5",
            "absolute group-hover:left-2.5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 group-hover:fill-[#D72339] transition-all",
          )}
        />
      </div>
    </button>
  )
}

export default Arrow
