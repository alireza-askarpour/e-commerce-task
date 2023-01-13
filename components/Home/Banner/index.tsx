import { classNames } from "utils"

interface IProps {
  className?: string
  responsiveDir?: "row" | "col"
  images: [string, string]
}

const Banner = ({ className, images, responsiveDir }: IProps) => {
  return (
    <section
      className={classNames(
        "container mx-auto flex gap-2 lg:gap-4",
        responsiveDir === "row" ? "" : "flex-col md:flex-row",
        className,
      )}
    >
      <div
        className={classNames(
          responsiveDir === "row"
            ? "h-28 md:h-auto lg:w-1/2 lg:max-h-56 overflow-hidden rounded-2xl lg:rounded-3xl"
            : "lg:w-1/2 lg:max-h-56 overflow-hidden  rounded-2xl lg:rounded-3xl",
        )}
      >
        <img src={images[0]} className="rounded-2xl lg:rounded-3xl object-cover w-full h-full" />
      </div>
      <div
        className={classNames(
          responsiveDir === "row"
            ? "h-28 md:h-auto lg:w-1/2 lg:max-h-56 overflow-hidden rounded-2xl lg:rounded-3xl"
            : "lg:w-1/2 lg:max-h-56 overflow-hidden rounded-2xl lg:rounded-3xl",
        )}
      >
        <img src={images[1]} className="rounded-2xl lg:rounded-3xl object-cover w-full h-full" />
      </div>
    </section>
  )
}

export default Banner
