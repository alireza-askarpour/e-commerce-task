export interface IProps {
  linkStyle?: React.CSSProperties
  className?: string
  socialLinks?: boolean
  title: string
  data: {
    title: string
    link: string
    icon?: string
  }[]
}
