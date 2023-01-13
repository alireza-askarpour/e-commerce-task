import { IconName } from "components/Shared/Icon/icons"

export interface IProps {
  href: string
  children?: React.ReactNode
  variant?: "underline"
  style?: React.CSSProperties
  className?: string
  icon?: IconName
}
