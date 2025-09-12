import { IconHealthcare, IconPrivate, IconRealEstate } from "@/components/icons"
import SectionLabel from "@/components/section-label"
import IconBlox from "@/components/ui/boxes/icon-box"
import LinkButton from "@/components/ui/buttons/link-button"
import { ChevronRight } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
// import { Image } from "@/components/ui"
// import { Button } from "@/components/ui/button"
// import Title from "@/components/ui/title"
// import { cn } from "@/utils"
// import { getImageUrlFromObject } from "@/utils/image-loader"
// import { Fancybox } from "@fancyapps/ui"
// import "@fancyapps/ui/dist/fancybox.css"

// Fancybox.defaults.Hash = false

const items=[
	{
		title: "Real Estate Excellence",
		content: "High-demand, income-generating commercial assets dental-anchored centers, healthcare plazas, and mixed-use developments in high-growth markets.",
		image: "https://vantico-backend.webotak.com/uploads/DJI_20250520115848_0037_D_54cfa578d8.jpg"
	},
	{
		title: "Healthcare Innovation",
		content: "Scaling founder-led healthcare businesses with capital, strategy, and operational expertise to deliver better care and long-term value.",
		image: "https://vantico-backend.webotak.com/uploads/IMG_5240_41b6eaf9b3.jpg"
	},
	{
		title: "Private Equity Impact",
		content: "Transformative growth with disciplined risk. Selective co-investments with visionary operators for sustainable growth.",
		image: "https://vantico-backend.webotak.com/uploads/DJI_20250521095954_0158_D_5b3ca604b0.jpg"
	}
]

export default function InvestWithPurpose() {
	return (
		<section id="tour" className="bg-black text-white py-20 px-4">
			<div className="container mx-auto max-w-6xl">

				<div className="flex justify-center">
					<h2
						className="w-1/2 flex-none text-5xl md:text-6xl font-secondary"
					>
						Invest with Purpose.<br />
						Build What Matters.
					</h2>

					<div className="mt-6 md:mt-10 flex-none w-1/2">
						<div className="flex w-full gap-4 text-center text-xl">
						At VANTICO, we focus on sectors with long-term growth potential,
						creating resilient strategies powered by data, market insight,
						and true alignment with our long-term partners.
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 my-8 md:my-20">
					{items.map((item, index) => (
						<Item key={index} item={item} />
					))}
				</div>

				<div className="flex justify-center mt-6 md:mt-10">
					<LinkButton link="/real-estate" className="bg-white text-black">
						Explore Our Investment Focus <ChevronRight className="ml-2" />
					</LinkButton>
				</div>
			</div>
		</section>
	)
}

export interface Item {
	title: string
	content: string
	image: string
}

export function Item({ item }: { item: Item }) {

	return (
		<div className="flex flex-col">
				<AspectRatio ratio={15 / 16} className="mb-6 w-full h-full relative overflow-hidden">
					<img
						// isFill
						// strapiImage={item.image as unknown as null | undefined}
						src={(item.image as any)?.url || "/placeholder.svg"}
						alt={item.title}
						className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</AspectRatio>
				<div className="flex flex-col gap-2 mt-4">
					<p className="text-xl font-medium mb-3 group-hover:text-gray-700 transition-colors">{item.title}</p>
					<div className="text-[#535353] text-lg ">{item.content}</div>
				</div>
		</div>
	)
}