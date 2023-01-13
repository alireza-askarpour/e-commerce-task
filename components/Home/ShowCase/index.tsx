import ImageSlider from "./ImageSlider"
import Banner from "../Banner"
import MiniSlider from "./MiniSlider"

const bannerImages: [string, string] = ["/images/banner-img-2.svg", "/images/banner-img-1.svg"]

const ShowCase = () => {
  return (
    <section className="container mx-auto my-6 lg:mb-16">
      <section className="flex w-full mb-2 lg:mb-4">
        <div className="w-full lg:w-3/4 lg:pl-2">
          <ImageSlider />
        </div>
        <div className="hidden lg:inline-block w-1/4 lg:pr-2">
          <MiniSlider />
        </div>
      </section>
      <Banner images={bannerImages} responsiveDir="row" />
    </section>
  )
}

export default ShowCase
