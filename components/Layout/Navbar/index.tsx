import { Button, IconButton } from "components/Shared"
import Icon from "components/Shared/Icon"
import { NAVBAR_LINKS } from "constants/navbarLinks"
import Link from "next/link"
import { SearchInput } from "components/Shared"

const Navbar = () => {
  return (
    <header className="container mx-auto">
      <nav className="bg-white lg:rounded-full lg:flex lg:items-center lg:justify-between lg:mt-8 lg:mb-4 lg:px-6 lg:py-4 text-sm lg:gray-shadow">
        {/* Mobile View */}
        <div className="flex lg:hidden items-center py-3 ">
          <img src="/logo.svg" className="w-6 h-6" />
          <span className="font-black text-base text-red pr-2">ویتسل</span>
        </div>
        <div className="flex items-center justify-between lg:hidden">
          <IconButton style={{ background: "#fff" }} size="sm" className="ml-7">
            <Icon name="menu" color="black" />
          </IconButton>
          <SearchInput placeholder="جستجو..." className="flex-1 md:flex-none md:w-96" />
          <div className="flex items-center">
            <IconButton style={{ background: "#fff" }} size="lg">
              <Icon name="shopping-cart" />
            </IconButton>
            <IconButton style={{ background: "#fff" }} size="lg">
              <Icon name="login" />
            </IconButton>
          </div>
        </div>

        {/* Right Items - Navbar links and logo (Desktop View) */}
        <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
          <div>
            <img src="/logo.svg" className="w-10 h-10" />
          </div>

          {NAVBAR_LINKS.map((item: any, index: number) => (
            <Link key={index} href={item.href} className="px-1 transition flex items-center">
              <Icon name={item.icon} size={20} color="black" />
              <span className="text-[#4F4F4F] mr-1.5">{item.label}</span>
              {item.isDropdown && <Icon name="arrow-down-2" size={16} color="black" className="mr-1.5" />}
            </Link>
          ))}
        </div>

        {/* Left Items Loggin and card button and search box (Desktop View) */}
        <div className="hidden lg:flex items-center gap-2">
          <SearchInput placeholder="جستجوی محصولات..." className="w-64" />

          <IconButton size="lg">
            <Icon name="shopping-cart" size={20} />
          </IconButton>

          <Button className="text-sm py-3 h-12">ورود/ ثبت نام</Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
