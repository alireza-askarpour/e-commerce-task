import { classNames } from "utils"

interface IProps {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

const Badge = ({ className, style, children }: IProps) => {
  return (
    <div
      className={classNames("bg-[#FFE9EE] w-7 h-9 grid place-items-center overflow-hidden", className)}
      style={style}
    >
      <div className="relative">
        {children}
        <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+3px)]  w-10 h-10 bg-gray-7 rotate-45"></div>
      </div>
    </div>
  )
}

export default Badge
