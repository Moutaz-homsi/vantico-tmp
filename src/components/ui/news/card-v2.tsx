"use client"
import Link from "next/link"
import Image from "../image"
import { INewsItem } from "@/types/news.interface"

export function NewsCard_v2({ item }: { item: INewsItem }) {
	return (
		<div className="flex flex-col">
			<Link href={item.external_url ? item.external_url : `/news/${item.slug}`} className="relative w-full h-64">
				<Image
					isFill
					strapiImage={item.image?.url as unknown as null | undefined}
					src={item.image?.url || "/placeholder.svg"}
					alt={item.title}
					className="object-cover transition-transform duration-500 hover:scale-105 rounded cursor-pointer"
				/>
			</Link>
			<div className="flex flex-col gap-2 mt-4">
				<Link href={item.external_url ? item.external_url : `/news/${item.slug}`}>
					<p className="text-xl font-medium mb-3 hover:text-gray-700 transition-colors line-clamp-2 text-ellipsis overflow-hidden">
						{item.title}
					</p>
				</Link>
				<div className="text-gray-400 text-lg line-clamp-3 text-ellipsis overflow-hidden">{item.content}</div>
			</div>
		</div>
	)
}
