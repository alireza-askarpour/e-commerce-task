import DownloadButton from "./DownloadButton"

const Download = () => {
  return (
    <section className="container relative mx-auto lg:max-w-4xl rounded-3xl bg-gradient-red p-4 md:p-6 lg:p-8 mt-6 lg:mt-[170px] mb-6 lg:mb-28">
      <div className="hidden lg:block absolute w-[400px] left-[60px] bottom-0 overflow-hidden">
        <img src="/images/mobile.svg" className="w-[150px] h-[322px] absolute left-0 bottom-0" />
        <img src="/images/mobile.svg" className="w-[150px] h-[322px] translate-y-10 -translate-x-[180px]" />
      </div>
      <div>
        <h2 className="text-white font-black text-lg"> ویتسل را همیشه همراه داشته باشید!</h2>
        <div className="lg:flex items-center gap-3 mt-4">
          <div className="flex items-stretch mb-4 lg:mb-0 gap-x-3">
            <DownloadButton icon="/images/bazar.svg" className="w-full justify-center lg:w-auto lg:justify-start">
              دانلود از بازار
            </DownloadButton>
            <DownloadButton icon="/images/myket.svg" className="w-full justify-center lg:w-auto lg:justify-start">
              دانلود از مایکت
            </DownloadButton>
          </div>
          <DownloadButton icon="/images/android.svg" className="w-full justify-center lg:w-auto lg:justify-start">
            دانلود مستقیم{" "}
          </DownloadButton>
        </div>
      </div>
    </section>
  )
}

export default Download
