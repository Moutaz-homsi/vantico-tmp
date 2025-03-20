"use client"
import getNotfoundImaUrl from "@/components/not-found-img"
import { Button } from "@/components/ui/button"
import Image from "@/components/ui/image"
import { cn } from "@/utils/style-utils"

export default function CtaBlock({ ...props }) {
  const { image, title, description, variation = "small", alignment = "center" } = props

  const ImageComp = (
    <div className="absolute inset-0">
      <Image src={image?.url || getNotfoundImaUrl()} strapiImage={image} isFill sizes="100vw" className="object-cover h-full" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-r from-black from-[5.74%] via-[#293338]/35 via-100% z-10"></div>
    </div>
  )

  if (variation === "two_columns") {
    return (
      <section className="relative col-span-full h-[500px] overflow-hidden rounded-3xl grid grid-cols-1 lg:grid-cols-2">
        {/* image column */}
        <div className="relative col-span-1 lg:col-span-1 min-h-[125px]">{ImageComp}</div>
        {/* content column */}
        <div className="bg-secondary col-span-1 lg:col-span-1 relative z-20">
          <Content data={props} />
        </div>
      </section>
    )
  }

  // here we need to handle small/medium variation
  const padding = variation === "small" ? "py-10" : "py-24"
  return (
    <>
      <section className={`relative col-span-full overflow-hidden rounded-3xl ${padding} `}>
        {image && ImageComp}
        <Content data={props} />
      </section>
    </>
  )
}

function Content({ data }) {
  const { image, title, description, variation, alignment = "center" } = data

  const textAlign = `text-${alignment}`

  return (
    <div className={cn(`relative h-full flex flex-col gap-4 px-6 lg:px-[3.75rem] z-20`, getFlexAlignmentClasses(alignment))}>
      <h2
        className={cn(
          `text-white font-secondary text-2xl lg:text-4xl leading-normal font-bold  `,
          variation != "two_columns" && "lg:w-1/2",
          textAlign
        )}
      >
        {title}
      </h2>
      <p className={cn(`text-gray-300 text-base md:text-xl font-normal leading-normal `, variation != "two_columns" && "lg:w-1/2", textAlign)}>
        {description}
      </p>
      <Button onClick={() => {}} className="!text-base mt-4 lg:!text-xl !font-bold !leading-normal">
        Arrange a Consultation
      </Button>
    </div>
  )
}

const getFlexAlignmentClasses = (alignment) => {
  switch (alignment) {
    case "center":
      return "items-center justify-center"
    case "left":
      return "items-start justify-center"
    case "right":
      return "items-end justify-center"
    default:
      return "items-center justify-center"
  }
}
