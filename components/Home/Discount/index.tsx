const Discount = () => {
  return (
    <section className="container mx-auto flex gap-x-4 mt-16">
      <div className="w-1/2 overflow-hidden rounded-3xl">
        <img src="/images/discount-img-1.svg" className="w-full h-full object-cover rounded-3xl" />
      </div>
      <div className="w-1/2 flex flex-col gap-4">
        <div className="h-1/2 overflow-hidden rounded-3xl">
          <img src="/images/discount-img-2.svg" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div className="h-1/2 overflow-hidden rounded-3xl">
          <img src="/images/discount-img-3.svg" className="w-full h-full object-cover rounded-3xl" />
        </div>
      </div>
    </section>
  )
}

export default Discount
