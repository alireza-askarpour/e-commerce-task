import ImageSlider from "./ImageSlider"
import Banner from "../Banner"
import MiniSlider from "./MiniSlider"

const bannerImages: [string, string] = ["/images/banner-img-2.svg", "/images/banner-img-1.svg"]

const ShowCase = () => {
  return (
    <section className="container mx-auto mb-16">
      <section className="flex gap-4 mb-4">
        <div className="w-3/4">
          <ImageSlider />
        </div>
        <div className="w-1/4">
          <MiniSlider />
        </div>
      </section>
      <Banner images={bannerImages} />
    </section>
  )
}

export default ShowCase
