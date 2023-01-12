import { Icon } from "components/Shared"
import { classNames } from "utils"


interface IProps {
   className?: string
}

const Badge = ({ className }: IProps) => {
  return (
    <div className={classNames("bg-[#FFE9EE] w-7 h-9 grid place-items-center", className)}>
      <Icon name="fire" color="red" size={20} />
    </div>
  )
}

export default Badge