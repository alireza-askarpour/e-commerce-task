import { Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { Arrow } from "components/Shared"
import { IMAGES_SLIDER } from "constants/imagesSlider"

import "swiper/css"
import "swiper/css/pagination"

const MiniSlider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        className="rounded-3xl overflow-hidden h-full"
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
      >
        <div>
          {IMAGES_SLIDER.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F7F7F7] overflow-hidden h-full rounded-3xl pt-4 grid place-items-center">
                <img src="/images/amazing-offers-img-1.svg" className="mb-5" />
                <div className="w-full px-4 pb-4">
                  <h4 className="text-[#282828] font-black mb-12">همزن برقی Sanford</h4>
                  <div className="text-left">
                    <span className="font-black text-lg ml-0.5 text-[#333333]">۴,۳۴۳,۰۰۰</span>
                    <span className="text-xs text-[#4F4F4F]">تومان</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white py-1 px-3 rounded-full gird place-items-center font-medium text-sm bg-button-primary">
                      ۳۴٪
                    </span>
                    <span className="line-through text-[#BDBDBD] text-sm">۴,۳۴۳,۰۰۰</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
        <div>
          <Arrow direction="right" className="prev-button absolute right-0 top-1/2 -translate-y-1/2 z-10" />
          <Arrow direction="left" className="next-button absolute left-0 top-1/2 -translate-y-1/2 z-10" />
        </div>
      </Swiper>
    </>
  )
}

export default MiniSlider
