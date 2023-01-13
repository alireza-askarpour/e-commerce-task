import { classNames } from "utils"
import { CustomLink, Icon, IconButton } from "components/Shared"
import { IProps } from "types/components/FooterLinks"

const FooterLinks = ({ data, linkStyle, className, socialLinks, title }: IProps) => {
  return (
    <div className={className}>
      <h3 className="font-black mb-4 text-base">{title}</h3>
      <ul>
        {data.map((item: any, index) => (
          <li key={index} style={linkStyle} className="mb-3 text-[#4F4F4F]">
            <CustomLink href={item.link} className="flex items-center">
              {item.icon && <Icon name={item.icon} />}
              <span
                className={classNames(
                  item.icon && "text-xs mr-2 transition duration-200 text-[#717171] hover:text-purple-700",
                )}
              >
                {item.title}
              </span>
            </CustomLink>
          </li>
        ))}
        {socialLinks && (
          <li className="flex gap-x-3">
            <IconButton className="group">
              <Icon name="instagram" className="transition duration-300 group-hover:fill-[#D72339]" />
            </IconButton>
            <IconButton className="group">
              <Icon name="send-2" className="transition duration-300 group-hover:fill-[#D72339]" />
            </IconButton>
            <IconButton className="group">
              <Icon name="whatsapp" className="transition duration-300 group-hover:fill-[#D72339]" />
            </IconButton>
          </li>
        )}
      </ul>
    </div>
  )
}

export default FooterLinks
