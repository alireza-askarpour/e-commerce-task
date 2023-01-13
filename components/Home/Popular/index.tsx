import { classNames } from "utils"
import SectionHeader from "../SectionHeader"

import styles from "./style.module.css"

const popularList = [
  { title: "مد و پوشاک", image: "/images/popular-img-1.svg" },
  { title: "موبایل", image: "/images/popular-img-2.svg" },
  { title: "کالای دیجیتال", image: "/images/popular-img-3.svg" },
  { title: "لوارم تحریر", image: "/images/popular-img-4.svg" },
  { title: "تجهیزات صنعتی", image: "/images/popular-img-5.svg" },
  { title: "سوپرمارکت", image: "/images/popular-img-6.svg" },
  { title: "اسباب بازی ", image: "/images/popular-img-7.svg" },
  { title: "زیبایی و سلامت", image: "/images/popular-img-8.svg" },
  { title: "خانه و آشپزخانه", image: "/images/popular-img-9.svg" },
]

const Popular = () => {
  return (
    <section className="container mx-auto flex mt-6 lg:mt-16">
      <div className="w-full lg:w-2/3 lg:pl-4">
        <SectionHeader title="دسته بندی های محبوب" icon="category" className="mb-7" />
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-6">
          {popularList.map((item, index) => (
            <div key={index} className={classNames("bg-gray-6 py-2 rounded-2xl p-5", styles.Card)}>
              <figure className="aspect-w-1 aspect-h-1">
                <img src={item.image} className="w-full h-full object-center object-cover" />
              </figure>
              <figcaption className=" text-center">
                <h5 className="text-xs md:text-sm font-bold whitespace-nowrap">{item.title}</h5>
              </figcaption>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:inline-block lg:w-1/3">
        <img src="/images/cart.svg" className="w-full h-full" />
      </div>
    </section>
  )
}

export default Popular
