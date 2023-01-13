import { Button, CustomLink, IconButton, Icon, SearchInput } from "components/Shared"
import { useAuth } from "provider/Auth"
import CategoriesDropdown from "./CategoriesDropdown"

const Navbar = () => {
  const { loggedin } = useAuth()

  return (
    <header className="container mx-auto">
      <nav className="bg-white lg:rounded-full lg:flex lg:items-center lg:justify-between lg:mt-8 lg:mb-4 lg:px-6 lg:py-4 text-sm lg:gray-shadow">
        {/*  (Mobile View) */}
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
            <IconButton style={{ background: "#fff" }} size="lg" className="group">
              <Icon name="shopping-cart" className="group-hover:fill-[#D72339] transition-colors duration-200" />
            </IconButton>

            <IconButton style={{ background: "#fff" }} size="lg" className="group">
              <Icon
                name={loggedin ? "user" : "login"}
                className="group-hover:fill-[#D72339] transition-colors duration-200"
              />
            </IconButton>
          </div>
        </div>

        {/* Right Items - Navbar links and logo (Desktop View) */}
        <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
          <div>
            <img src="/logo.svg" className="w-10 h-10" />
          </div>
          <CategoriesDropdown />
          <CustomLink href="/" variant="underline" icon="fire" className="px-1 flex items-center">
            پرفروش ترین ها
          </CustomLink>
          <CustomLink href="/" variant="underline" icon="ticket-discount" className="px-1 flex items-center">
            تخفیف دار ها
          </CustomLink>
        </div>

        {/* Left Items Loggin and card button and search box (Desktop View) */}
        <div className="hidden lg:flex items-center gap-2">
          <SearchInput placeholder="جستجوی محصولات..." className="w-64" />

          <IconButton size="lg" className="group">
            <Icon name="shopping-cart" className="group-hover:fill-[#D72339] transition-colors duration-200" />
          </IconButton>

          {loggedin ? (
            <IconButton size="lg" className="group">
              <Icon name="user" className="group-hover:fill-[#D72339] transition-colors duration-200" />
            </IconButton>
          ) : (
            <Button className="text-sm py-3 h-12" variant="primary">
              ورود/ ثبت نام
            </Button>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
