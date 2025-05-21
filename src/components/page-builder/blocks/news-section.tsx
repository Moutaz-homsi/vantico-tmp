import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"

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
		<section className={cn("w-full py-20 bg-gray-50", className)}>
			<div className="container mx-auto px-4">
				{/* Header */}
				<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-wider uppercase mb-16">{title}</h2>

				{/* News grid */}
				{items.length > 0 && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{items.map((item, index) => (
							<div key={index} className="flex flex-col">
								<Link href={item.url} className="group">
									<div className="mb-6 overflow-hidden">
										<img
											src={item.image || "/placeholder.svg"}
											alt={item.title}
											className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
										/>
									</div>
									<div className="text-gray-500 mb-2">{item.date}</div>
									<h3 className="text-xl font-medium mb-3 group-hover:text-gray-700 transition-colors">{item.title}</h3>
									<p className="text-gray-600">{item.excerpt}</p>
								</Link>
							</div>
						))}
					</div>
				)}

				{/* See more button */}
				{seeMoreUrl && (
					<div className="flex justify-center">
						<Button asChild className="bg-black hover:bg-gray-800 text-white rounded-none px-8 py-6">
							<Link href={seeMoreUrl}>
								{seeMoreText} <span className="ml-2">→</span>
							</Link>
						</Button>
					</div>
				)}
			</div>
		</section>
	)
}
