import SectionHeader from "../SectionHeader"

const popularList = [
  { title: "مد و پوشاک", image: "/images/popular-img-1.svg" },
  { title: "موبایل", image: "/images/popular-img-2.svg" },
  { title: "کالای دیجیتال", image: "/images/popular-img-2.svg" },
  { title: "لوارم تحریر", image: "/images/popular-img-4.svg" },
  { title: "تجهیزات صنعتی", image: "/images/popular-img-5.svg" },
  { title: "سوپرمارکت", image: "/images/popular-img-6.svg" },
  { title: "اسباب بازی ", image: "/images/popular-img-7.svg" },
  { title: "زیبایی و سلامت", image: "/images/popular-img-8.svg" },
  { title: "خانه و آشپزخانه", image: "/images/popular-img-9.svg" },
]

const Popular = () => {
  return (
    <section className="container mx-auto flex mt-16">
      <div className="w-2/3">
        <SectionHeader title="دسته بندی های محبوب" icon="category" className="mb-7" />
        <div className="flex flex-wrap gap-6">
          {popularList.map((item, index) => (
            <div key={index} className="bg-gray-6 py-2 px-5 w-36 h-36 rounded-2xl flex flex-col items-center justify-start">
              <img src={item.image} className="w-full max-w-[98px]" />
              <h5 className="text-sm font-bold">{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3">
        <img src="/images/cart.svg" className="w-full h-full" />
      </div>
    </section>
  )
}

export default Popular
