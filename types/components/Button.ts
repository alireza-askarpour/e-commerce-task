export interface IProps {
  children?: React.ReactNode
  className?: string
  href?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  variant?: "primary" | "secondary"
  onClick?: () => void
}
