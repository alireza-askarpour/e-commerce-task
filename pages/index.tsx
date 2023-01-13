import { SEO } from "components/Shared"
import Layout from "components/Layout"
import Banner from "components/Home/Banner"
import CarouselSlider from "components/Home/CarouselSlider"
import AmazingOffers from "components/Home/AmazingOffers"
import Discount from "components/Home/Discount"
import Download from "components/Home/Download"
import Popular from "components/Home/Popular"
import ShowCase from "components/Home/ShowCase"

const bannerImages: [string, string] = ["/images/banner-img-1.svg", "/images/banner-img-2.svg"]

const Home = () => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <ShowCase />
        <CarouselSlider icon="ticket-discount" title="تخفیف های ویتسل" link="#" />
        <Banner images={bannerImages} className="mt-6 lg:mt-16" />
        <Popular />
        <AmazingOffers />
        <CarouselSlider icon="magic-star" title="پرفروش ترین محصولات" link="#" />
        <Discount />
        <Download />
      </Layout>
    </>
  )
}

export default Home
