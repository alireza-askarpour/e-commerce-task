import { IProps } from "types/components/DownloadButton"

const DownloadButton = ({ icon, children }: IProps) => {
  return (
    <button className="bg-[#ffffff14] flex items-center px-4 py-3 rounded-full  transition-color duration-[400ms] group hover:bg-white">
      <img src={icon} />
      <span className="mr-2 text-sm transition-color duration-[400ms] text-white font-semibold group-hover:text-[#CE273B]">
        {children}
      </span>
    </button>
  )
}

export default DownloadButton
