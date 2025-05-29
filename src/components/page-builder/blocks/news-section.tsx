"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import { Image } from "@/components/ui"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ChevronRight } from "lucide-react"
import Title from "@/components/ui/title"

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
	title = "News & Events",
	items = [],
	seeMoreText = "See more",
	seeMoreUrl = "/news",
	className
}: NewsSectionProps) {
	return (
		<section id="news" className={cn("w-full py-30 bg-gray-50", className)}>
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<Title text={title} />

				{/* News grid */}
				{items.length > 0 && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
						{items.map((item, index) => (
							<NewsItem key={item.id} item={item} />
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

export function NewsItem({ item }) {
	return (
		<div className="flex flex-col">
			<Link href={`/news/${item.slug}`} className="group">
				<AspectRatio ratio={15 / 16} className="mb-6 w-full h-full relative overflow-hidden">
					<Image
						isFill
						strapiImage={item.image}
						src={item.image?.url || "/placeholder.svg"}
						alt={item.title}
						className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</AspectRatio>
				<div className="flex flex-col gap-4 pt-8">
					<div className="text-[#535353] text-lg ">{item.date}</div>
					{/* <h3 className="text-xl font-medium mb-3 group-hover:text-gray-700 transition-colors">
											{item.title}
										</h3> */}
					<p className="text-[#151515] leading-[140%] text-2xl line-clamp-3">{item.content}</p>
				</div>
			</Link>
		</div>
	)
}
