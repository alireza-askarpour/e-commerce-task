import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper"

import { Arrow } from "components/Shared"
import { toPersinaDigit, discountPrice } from "utils"
import { IProps, IData } from "types/components/SliderPreview"

import "swiper/css"
import "swiper/css/pagination"

const SliderPreview = ({ data }: IProps) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={16}
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
      }}
      navigation={{
        prevEl: ".prev-button",
        nextEl: ".next-button",
      }}
      className="bg-[#F7F7F7] rounded-3xl overflow-hidden"
      style={{ position: "relative", padding: "16px" }}
    >
      <div>
        {data.map((item: IData, index) => (
          <SwiperSlide
            key={index}
            className="pt-4 px-4 cursor-pointer rounded-3xl group hover:bg-white"
            style={{ transition: "background .5s ease" }}
          >
            <div className="w-full grid place-items-center">
              <img
                src="/images/shoe.svg"
                className="max-w-[120px] w-full group-hover:scale-110 transition-all duration-500"
              />
            </div>
            <div className="pb-8">
              <div className="flex items-center justify-end">
                <span className="font-black text-lg ml-0.5 text-[#333333]">
                  {toPersinaDigit(
                    item.discount
                      ? discountPrice(item.discount, item.price).toLocaleString()
                      : item.price.toLocaleString(),
                  )}
                </span>
                <span className="text-xs text-[#4F4F4F]">تومان</span>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className="text-white py-1 px-3 rounded-full gird place-items-center font-medium text-sm"
                  style={{ background: "linear-gradient(252.18deg, #D72339 0.28%, #F23B51 93.8%)" }}
                >
                  {toPersinaDigit(item.discount)}%
                </span>
                <span className="line-through text-[#BDBDBD] text-sm">
                  {toPersinaDigit(item.price.toLocaleString())}
                </span>
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
  )
}

export default SliderPreview
