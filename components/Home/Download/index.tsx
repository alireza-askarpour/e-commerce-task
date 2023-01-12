import { DOWNLOAD_LIST } from "constants/download"
import DownloadButton from "./DownloadButton"

const Download = () => {
  return (
    <section className="relative mx-auto max-w-4xl rounded-3xl bg-gradient-red p-8 mt-[170px] mb-28">
      <div className="absolute w-[400px] left-[60px] bottom-0 overflow-hidden">
        <img src="/images/mobile.svg" className="w-[150px] h-[322px] absolute left-0 bottom-0" />
        <img src="/images/mobile.svg" className="w-[150px] h-[322px] translate-y-10 -translate-x-[180px]" />
      </div>

      <div>
        <h2 className="text-white font-black text-lg"> ویتسل را همیشه همراه داشته باشید!</h2>
        <div className="flex items-center gap-3 mt-4">
          {DOWNLOAD_LIST.map((item, index) => (
            <DownloadButton key={index} icon={item.icon}>
              {item.title}
            </DownloadButton>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Download
