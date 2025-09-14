import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Container } from "@/components/layout"
import LinkButton from "@/components/ui/buttons/link-button"

export default function InvestWithPurpose() {
	return (
		<section id="tour" className="bg-black text-white">
			<Container patternSkin="dark" pattern="hidden">
				<div className="container mx-auto max-w-6xl">
					<div>
						<h2 className="flex-none text-5xl md:text-6xl text-center font-secondary">
							Invest with Purpose. Build what Matters.
						</h2>
						<div className="mt-6 md:mt-10 flex-none">
							<div className="flex w-full gap-4 text-lg md:text-2xl text-gray-300 text-center">
								At VANTICO, we focus on sectors with long-term growth potential, creating resilient strategies powered
								by data, market insight, and true alignment with our long-term partners.
							</div>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 my-8 md:my-20">
						{items.map((item, index) => (
							<Item key={index} item={item} />
						))}
					</div>

					<div className="flex justify-center md:justify-right mt-6 md:mt-10">
						<LinkButton link="/investment-focus" className="bg-white text-black">
							Explore Our Investment Focus <ChevronRight className="ml-2" />
						</LinkButton>
					</div>
				</div>
			</Container>
		</section>
	)
}

export interface Item {
	title: string
	content: string
	image: string
	link: string
}

const items = [
	{
		title: "Real Estate Excellence",
		content:
			"High-demand, income-generating commercial assets dental-anchored centers, healthcare plazas, and mixed-use developments in high-growth markets.",
		image: "https://vantico-backend.webotak.com/uploads/DJI_20250520115848_0037_D_54cfa578d8.jpg",
		link: "/investment-focus#real-estate"
	},
	{
		title: "Healthcare Innovation",
		content:
			"Scaling founder-led healthcare businesses with capital, strategy, and operational expertise to deliver better care and long-term value.",
		image: "https://vantico-backend.webotak.com/uploads/IMG_5240_41b6eaf9b3.jpg",
		link: "/investment-focus#healthcare"
	},
	{
		title: "Private Equity Impact",
		content:
			"Transformative growth with disciplined risk. Selective co-investments with visionary operators for sustainable growth.",
		image: "https://vantico-backend.webotak.com/uploads/DJI_20250521095954_0158_D_5b3ca604b0.jpg",
		link: "/investment-focus#private-equity"
	}
]

export function Item({ item }: { item: Item }) {
	return (
		<div className="flex flex-col">
			{/* <AspectRatio ratio={15 / 16} className="mb-6 w-full h-full relative overflow-hidden"> */}
			<Link href={item.link || "#"}>
				<img
					// isFill
					// strapiImage={item.image as unknown as null | undefined}
					src={item.image || "/placeholder.svg"}
					alt={item.title}
					className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105 rounded cursor-pointer"
				/>
			</Link>
			{/* </AspectRatio> */}
			<div className="flex flex-col gap-2 mt-4">
				<Link href={item.link || "#"}>
					<p className="text-xl font-medium mb-3 hover:text-gray-700 transition-colors">{item.title}</p>
				</Link>
				<div className="text-gray-300 text-lg ">{item.content}</div>
			</div>
		</div>
	)
}
