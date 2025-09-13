"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import { Image } from "@/components/ui"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ChevronRight } from "lucide-react"
import Title from "@/components/ui/title"
import { useRouter } from "next/navigation"
import { INewsItem } from "@/types/news.interface"
import { NewsCard } from "@/components/ui/news/card"

interface NewsSectionProps {
	title?: string
	items?: INewsItem[]
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
	const router = useRouter()
	return (
		<section id="news" className={cn("w-full py-10 md:py-30 bg-gray-50", className)}>
			<div className="max-w-7xl mx-auto px-4">
				{/* Header */}
				<Title text={title} />

				{/* News grid */}
				{items?.length > 0 && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 my-8 md:my-20">
						{items.map((item, index) => (
							<NewsCard key={item.id} item={item} />
						))}
					</div>
				)}

				{/* See more button */}
				{seeMoreUrl && (
					<div className="flex justify-center mt-2">
						<Button
							onClick={async () => {
								router.push(seeMoreUrl)
							}}
							variant="dark"
						>
							{seeMoreText} <ChevronRight className="ml-2" size={16} />
						</Button>
					</div>
				)}
			</div>
		</section>
	)
}

