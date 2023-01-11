import { Button, IconButton } from "components/Shared"
import Icon from "components/Shared/Icon"
import Link from "next/link"

const links = [
  { href: "/category", label: "دسته بندی ها", icon: "category", isDropdown: true },
  { href: "/fire", label: "پرفروش ترین ها", icon: "fire" },
  { href: "/ticket-discount", label: "تخفیف دار ها", icon: "ticket-discount" },
]

const Navbar = () => {
  return (
    <header className="container mx-auto">
      <nav
        className="bg-white shadow-lg rounded-full flex items-center justify-between mt-8 mb-4 px-6 py-4 text-sm"
        style={{
          boxShadow: "0px 0px 24px rgba(189, 182, 183, 0.25)",
          borderRadius: "40px",
        }}
      >
        {/* Right Items */}
        <div className="flex items-center space-x-4 space-x-reverse">
          <div>
            <img src="/logo.svg" className="w-10 h-10" />
          </div>

          {links.map(({ href, label, icon, isDropdown }, index) => (
            <Link key={index} href={href} className="px-1 transition flex items-center">
              <Icon name={icon} size={20} color="black" />
              <span className="text-[#4F4F4F] mr-1.5">{label}</span>
              {isDropdown && <Icon name="arrow-down-2" size={16} color="black" className="mr-1.5" />}
            </Link>
          ))}
        </div>

        {/* Left Items */}
        <div className="flex items-center gap-2">
          <div className="w-64 flex items-center justify-end rounded-full bg-[#F7F7F7]">
            <input
              type="text"
              placeholder="جستجوی محصولات..."
              className="flex-1 outline-none pr-3 bg-inherit rounded-full"
            />
            <IconButton size="lg">
              <Icon name="search-normal" size={20} />
            </IconButton>
          </div>

          <IconButton size="lg">
            <Icon name="shopping-cart" size={20} />
          </IconButton>

          <Button className="text-sm py-3">ورود/ ثبت نام</Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
