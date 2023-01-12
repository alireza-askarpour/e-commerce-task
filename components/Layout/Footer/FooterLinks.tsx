import Link from "next/link"
import { classNames } from "utils"
import { Icon, IconButton } from "components/Shared"
import { IProps } from "types/components/FooterLinks"

const FooterLinks = ({ data, linkStyle, className, socialLinks, title }: IProps) => {
  return (
    <div className={className}>
      <h3 className="font-black mb-4 text-base">{title}</h3>
      <ul>
        {data.map((item: any, index) => (
          <li key={index} style={linkStyle} className="mb-3 text-[#4F4F4F]">
            <Link href={item.link} className="flex items-center">
              {item.icon && <Icon name={item.icon} />}
              <span className={classNames(item.icon && "text-xs text-[#717171] mr-2")}>{item.title}</span>
            </Link>
          </li>
        ))}
        {socialLinks && (
          <li className="flex gap-x-3">
            <IconButton>
              <Icon name="instagram" />
            </IconButton>
            <IconButton>
              <Icon name="send-2" />
            </IconButton>
            <IconButton>
              <Icon name="whatsapp" />
            </IconButton>
          </li>
        )}
      </ul>
    </div>
  )
}

export default FooterLinks
