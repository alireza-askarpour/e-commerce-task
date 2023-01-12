import { classNames } from "utils"

type Props = {
  className?: string
  images: [string, string]
}

const Banner = ({ className, images }: Props) => {
  return (
    <section className={classNames("container mx-auto flex gap-x-4", className)}>
      <div className="w-1/2 max-h-56 h-full overflow-hidden rounded-3xl">
        <img src={images[0]} className="rounded-3xl object-cover w-full h-full" />
      </div>
      <div className="w-1/2 max-h-56 h-full overflow-hidden object-cover rounded-3xl">
        <img src={images[1]} className="rounded-3xl w-full h-full" />
      </div>
    </section>
  )
}

export default Banner
