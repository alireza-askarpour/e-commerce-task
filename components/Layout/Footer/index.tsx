import FooterLinks from "./FooterLinks"

const Footer = () => {
  return (
    <footer className="container mx-auto text-sm">
      <section className="lg:flex justify-between pt-12 pb-7">
        {/* Desktop View */}
        <div className="hidden lg:inline-block max-w-[250px] space-y-1">
          <img src="/logo.svg" className="w-28 h-28" />
          <h3 className="text-base font-black text-black">ویتسل</h3>
          <p className="text-[#474747]">
            صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز دیجیتال در بستری مطمئن
          </p>
        </div>

        {/* Mobile View */}
        <div className="flex mb-4 lg:hidden">
          <FooterLinks
            title="با ویتسل"
            className="w-1/2 inline-block lg:w-auto"
            data={[
              { title: "درباره ما", link: "/about-us" },
              { title: "تماس با ما", link: "/contact-us" },
              { title: "حریم خصوصی", link: "/privacy" },
              { title: "شرایط بازگشت کالا", link: "/product-return-conditions" },
            ]}
          />
          <FooterLinks
            title="محصولات ویتسل"
            className="w-1/2 inline-block lg:w-auto"
            data={[
              { title: "کالای دیجیتال", link: "/" },
              { title: "سوپرمارکت", link: "/" },
              { title: "گوشی موبایل", link: "/" },
              { title: "", link: "/" },
              { title: "ابزار الات", link: "/" },
              { title: "لوازم تحریر", link: "/" },
            ]}
          />
        </div>

        {/* Desktop View */}
        <FooterLinks
          title="با ویتسل"
          className="hidden lg:inline-block"
          data={[
            { title: "درباره ما", link: "/about-us" },
            { title: "تماس با ما", link: "/contact-us" },
            { title: "حریم خصوصی", link: "/privacy" },
            { title: "شرایط بازگشت کالا", link: "/product-return-conditions" },
          ]}
        />

        <FooterLinks
          title="محصولات ویتسل"
          className="hidden lg:inline-block"
          data={[
            { title: "کالای دیجیتال", link: "/" },
            { title: "سوپرمارکت", link: "/" },
            { title: "گوشی موبایل", link: "/" },
            { title: "", link: "/" },
            { title: "ابزار الات", link: "/" },
            { title: "لوازم تحریر", link: "/" },
          ]}
        />

        <FooterLinks
          socialLinks
          title="ارتباط با ویتسل"
          className="mb-4 lg:mb-0"
          data={[
            { title: "ٰvitdell@gmail.com", icon: "send", link: "/" },
            { title: "۰۸۴۷۷۴۷۳۲۲", icon: "call", link: "/" },
            { title: "خیابان ولی عصرنرسیده به سینما آفریقا", icon: "map", link: "/" },
          ]}
        />

        <div className="flex items-center justify-end gap-2.5 lg:gap-0 lg:block">
          <div className="lg:hidden bg-[#F7F7F7] rounded-2xl w-[78px] h-[78px] lg:w-[134px] lg:h-[134px] grid place-items-center">
            <img src="/images/iwmf.svg" className="w-[54px] lg:w-[110px]" />
          </div>
          <div className="lg:hidden bg-[#F7F7F7] rounded-2xl w-[78px] h-[78px] lg:w-[134px] lg:h-[134px] grid place-items-center">
            <img src="/images/zarinpal.svg" className="w-[54px] lg:w-[110px]" />
          </div>
          <div className="bg-[#F7F7F7] rounded-2xl w-[78px] h-[78px] lg:w-[134px] lg:h-[134px] grid place-items-center">
            <img src="/images/samandehi.svg" className="w-[54px] lg:w-[110px]" />
          </div>
          <div className="bg-[#F7F7F7] rounded-2xl w-[78px] h-[78px] lg:w-[134px] lg:h-[134px] grid place-items-center lg:mt-[9px]">
            <img src="/images/ecunion.svg" className="w-[54px] lg:w-[110px]" />
          </div>
        </div>
      </section>

      <hr className="border-[#AB8BD1]" />

      <section>
        <p className="text-[#474747] mt-3 mb-[22px]">کلیه حقوق متعلق به شرکت ویستا است.</p>
      </section>
    </footer>
  )
}

export default Footer
