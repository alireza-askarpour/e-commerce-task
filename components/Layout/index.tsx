import Navbar from "./Navbar"
import Footer from "./Footer"

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => {
  return (
    <section>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </section>
  )
}

export default Layout
