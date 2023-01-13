import { IconName } from "components/Shared/Icon/icons"

export interface IProps {
  href: string
  children?: React.ReactNode
  variant?: "underline"
  size?: number
  className?: string
  icon?: IconName
}
