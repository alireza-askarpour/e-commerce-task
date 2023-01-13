import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation } from "swiper"

import { Arrow } from "components/Shared"
import { IMAGES_SLIDER } from "constants/imagesSlider"

import "swiper/css"
import "swiper/css/pagination"

const ImageSlider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        className="rounded-3xl overflow-hidden h-full bg-gray-7"
        navigation={{
          prevEl: ".prev-button",
          nextEl: ".next-button",
        }}
      >
        <div>
          {IMAGES_SLIDER.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </div>
        <div>
          <Arrow direction="right" responsive className="prev-button absolute right-0 top-1/2 -translate-y-1/2 z-10" />
          <Arrow direction="left" responsive className="next-button absolute left-0 top-1/2 -translate-y-1/2 z-10" />
        </div>
      </Swiper>
    </>
  )
}

export default ImageSlider
