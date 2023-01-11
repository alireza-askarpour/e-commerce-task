export interface IProps {
  children?: React.ReactNode
  className?: string
  href?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}
