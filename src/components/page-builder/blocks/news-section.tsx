import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import { Image } from "@/components/ui"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ChevronRight } from "lucide-react"

export interface NewsItem {
	title: string
	excerpt: string
	date: string
	image: string
	url: string
}

interface NewsSectionProps {
	title?: string
	items?: NewsItem[]
	seeMoreText?: string
	seeMoreUrl?: string
	className?: string
}

export default function NewsSection({
	title = "NEWS & EVENTS",
	items = [],
	seeMoreText = "See more",
	seeMoreUrl = "/news",
	className
}: NewsSectionProps) {
	return (
		<section id="news" className={cn("w-full py-20 bg-gray-50", className)}>
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<h2 className="text-6xl uppercase mb-16">{title}</h2>

				{/* News grid */}
				{items.length > 0 && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{items.map((item, index) => (
							<div key={index} className="flex flex-col">
								<Link href={item.url} className="group">
									<AspectRatio ratio={15 / 16} className="mb-6 w-full h-full relative overflow-hidden">
										<Image
											isFill
											src={item.image || "/placeholder.svg"}
											alt={item.title}
											className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
										/>
									</AspectRatio>
									<div className="flex flex-col gap-2 pt-3">
										<div className="text-gray-500">{item.date}</div>
										{/* <h3 className="text-xl font-medium mb-3 group-hover:text-gray-700 transition-colors">
											{item.title}
										</h3> */}
										<p className="text-gray-600">{item.excerpt}</p>
									</div>
								</Link>
							</div>
						))}
					</div>
				)}

				{/* See more button */}
				{seeMoreUrl && (
					<div className="flex justify-center mt-2">
						<Button asChild variant="dark">
							<Link href={seeMoreUrl}>
								{seeMoreText} <ChevronRight className="ml-2" size={16} />
							</Link>
						</Button>
					</div>
				)}
			</div>
		</section>
	)
}
