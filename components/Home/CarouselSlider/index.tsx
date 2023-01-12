import SliderPreview from "components/Home/CarouselSlider/SliderPerview"
import SectionHeader from "components/Home/SectionHeader"
import { CAROUSEL_SLIDER } from "constants/carouselSlider"
import { IProps } from "types/components/CarouselSlider"

const CarouselSlider = ({ title, icon, link }: IProps) => {
  return (
    <section className="container mx-auto mt-16">
      <SectionHeader title={title} icon={icon} link={link} className="mb-2 lg:mb-6" />
      <SliderPreview data={CAROUSEL_SLIDER} />
    </section>
  )
}

export default CarouselSlider
