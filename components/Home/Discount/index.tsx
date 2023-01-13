const Discount = () => {
  return (
    <section className="container mx-auto lg:flex gap-x-4 mt-6 lg:mt-16">
      <div className="lg:w-1/2 overflow-hidden rounded-2xl lg:rounded-3xl mb-6 lg:mb-0">
        <div className="aspect-w-16 aspect-h-9">
          <img src="/images/discount-img-1.svg" className=" w-full h-full object-center object-cover rounded-2xl lg:rounded-3xl" />
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col gap-2 lg:gap-4">
        <div className="h-1/2 overflow-hidden rounded-2xl lg:rounded-3xl">
          <img src="/images/discount-img-2.svg" className="w-full h-full object-cover rounded-2xl lg:rounded-3xl" />
        </div>
        <div className="h-1/2 overflow-hidden rounded-2xl lg:rounded-3xl">
          <img src="/images/discount-img-3.svg" className="w-full h-full object-cover rounded-2xl lg:rounded-3xl" />
        </div>
      </div>
    </section>
  )
}

export default Discount
