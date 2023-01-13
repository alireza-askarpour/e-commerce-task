import { AMAZING_OFFERS_ITEMS } from "constants/amazingOffersList"
import { discountPrice, toPersinaDigit } from "utils"
import SectionHeader from "../SectionHeader"
import Badge from "./Badge"

const AmazingOffers = () => {
  return (
    <section className="container mx-auto mt-16">
      <SectionHeader icon="fire" title="پیشنهادات شگفت انگیز" link="/amazing-offers" className="mb-7" />
      <section className="flex gap-6 overflow-x-auto remove-scrollbar">
        <div className="hidden relative w-1/4 bg-[#F7F7F7] overflow-hidden rounded-3xl pt-4 lg:grid place-items-center">
          <Badge className="absolute top-0 left-3" />
          <img src="/images/amazing-offers-img-1.svg" className="mb-5" />
          <div className="w-full px-4 pb-4">
            <h4 className="text-[#282828] font-black mb-12">همزن برقی Sanford</h4>
            <div className="text-left">
              <span className="font-black text-lg ml-0.5 text-[#333333]">۴,۳۴۳,۰۰۰</span>
              <span className="text-xs text-[#4F4F4F]">تومان</span>
            </div>
          </div>
        </div>

        {/* List Item */}
        <div className="flex lg:grid grid-cols-3 gap-y-4 gap-x-6 lg:w-full">
          {AMAZING_OFFERS_ITEMS.map((item, index) => (
            <div key={index} className="relative w-72 lg:w-auto flex justify-around overflow-hidden items-center py-3 bg-[#F7F7F7] rounded-3xl px-3">
              <div>
                <img src={item.image} className="max-w-[90px] lg:w-full" />
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-sm text-right">{item.title}</h5>
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
                    className="text-white pt-1.5 pb-0.5 px-3 rounded-full gird place-items-center font-medium text-sm bg-button-primary"
                  >
                    {toPersinaDigit(item.discount)}%
                  </span>
                  <span className="line-through text-[#BDBDBD] text-sm">
                    {toPersinaDigit(item.price.toLocaleString())}
                  </span>
                </div>
              </div>
              <Badge className="absolute top-0 left-3" />
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}

export default AmazingOffers
