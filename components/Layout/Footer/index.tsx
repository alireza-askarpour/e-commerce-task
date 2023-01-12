import { IconButton } from "components/Shared"
import Icon from "components/Shared/Icon"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="container mx-auto text-sm">
      <section className="flex justify-between pt-12 pb-7">
        <div className="max-w-[250px] space-y-1">
          <img src="/logo.svg" className="w-28 h-28" />
          <h3 className="text-base font-black text-black">ویتسل</h3>
          <p className="text-[#474747]">
            صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز دیجیتال در بستری مطمئن
          </p>
        </div>

        <div>
          <h3 className="font-black mb-4 text-base">با ویتسل</h3>
          <ul>
            <li className="mb-3 text-[#4F4F4F]">
              <Link href="/about-us">درباره ما</Link>
            </li>
            <li className="mb-3 text-[#4F4F4F]">
              <Link href="contact-us">تماس با ما</Link>
            </li>
            <li className="mb-3 text-[#4F4F4F]">
              <Link href="/privacy">حریم خصوصی</Link>
            </li>
            <li className="mb-3 text-[#4F4F4F]">
              <Link href="/product-return-conditions">شرایط بازگشت کالا</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-black mb-4 text-base">محصولات ویتسل</h3>
          <ul>
            <li className="mb-3 text-[#4F4F4F]">
              <Link href="/">کالای دیجیتال</Link>
            </li>
            <li className="mb-3 text-[#4F4F4F]">
              <Link href="/">سوپرمارکت</Link>
            </li>
            <li className="mb-3 text-[#4F4F4F]">
              <Link href="/">گوشی موبایل</Link>
            </li>
            <li className="mb-3 text-[#4F4F4F]">
              <Link href="/">ابزار الات</Link>
            </li>
            <li className="mb-3 text-[#4F4F4F]">
              <Link href="/">لوازم تحریر</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-black mb-4 text-base">ارتباط با ویتسل</h3>
          <ul>
            <li className="flex items-center mb-3">
              <Icon name="send" />
              <span className="text-xs text-[#717171] mr-2">ٰvitdell@gmail.com</span>
            </li>
            <li className="flex items-center mb-3">
              <Icon name="call" />
              <span className="text-xs text-[#717171] mr-2">۰۸۴۷۷۴۷۳۲۲</span>
            </li>
            <li className="flex items-center mb-8">
              <Icon name="map" />
              <span className="text-xs text-[#717171] mr-2">خیابان ولی عصرنرسیده به سینما آفریقا</span>
            </li>
            <li className="flex gap-x-3">
              <IconButton>
                <Icon name="instagram" />
              </IconButton>
              <IconButton>
                <Icon name="send-2" />
              </IconButton>
              <IconButton>
                <Icon name="whatsapp" />
              </IconButton>
            </li>
          </ul>
        </div>

        <div>
          <div className="bg-[#F7F7F7] rounded-2xl w-[134px] h-[134px] grid place-items-center">
            <img src="/images/samandehi.svg" className="w-[110px]" />
          </div>
          <div className="bg-[#F7F7F7] rounded-2xl w-[134px] h-[134px] grid place-items-center mt-[9px]">
            <img src="/images/ecunion.svg" className="w-[110px]" />
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
