"use client"
import Link from "next/link"
import { Image } from "@/components/ui"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { INewsItem } from "@/types/news.interface"

export function NewsCard({ item }: { item: INewsItem }) {
	const date = new Date(item.date)

	const formattedDate = date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	})

	return (
		<div className="flex flex-col">
			<Link href={`/news/${item.slug}`} className="group">
				<AspectRatio ratio={15 / 16} className="mb-6 w-full h-full relative overflow-hidden">
					<Image
						isFill
						strapiImage={item.image as unknown as null | undefined}
						src={(item.image as any)?.url || "/placeholder.svg"}
						alt={item.title}
						className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</AspectRatio>
				<div className="flex flex-col gap-2 mt-4">
					<div className="text-[#535353] text-lg ">{formattedDate}</div>
					<p className="text-xl font-medium mb-3 group-hover:text-gray-700 transition-colors">{item.title}</p>
					{/* <p className="text-[#151515] leading-[140%] text-xl md:text-2xl line-clamp-3">{item.content}</p> */}
				</div>
			</Link>
		</div>
	)
}
