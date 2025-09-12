"use client"
import { cn } from "@/utils"
import { Image } from "@/components/ui"
import Link from "next/link"

export default function CssCarousel({ data = [], imgHeight }: { data: any[]; imgHeight?: string }) {
	return (
		<div className="w-full overflow-hidden">
			<div className="card-logos-container">
				<div className={"card-logos-content animate-logos"}>
					{/* First set of cards */}
					{data.map((item, index) => (
						<SlideItem item={item} imgHeight={imgHeight} key={item?.id || index} />
						// <div key={index} className="card-logos-item">
						// 	<div className={cn("text-center min-w-[200px] ", !imgHeight ? "h-32" : imgHeight)}>
						// 		<div className={cn("relative w-full h-full")}>
						// 			<Image
						// 				isFill
						// 				src={item.url}
						// 				strapiImage={item}
						// 				alt={item.alt}
						// 				className="object-contain pointer-events-none select-none"
						// 			/>
						// 		</div>
						// 	</div>
						// </div>
					))}
					{/* Duplicate set for seamless loop */}
					{data.map((item, index) => (
						<SlideItem item={item} imgHeight={imgHeight} key={`duplicate-${item?.id || index}`} />

						// <div key={`duplicate-${index}`} className="card-logos-item">
						// 	<div className={cn("text-center min-w-[200px] ", !imgHeight ? "h-32" : imgHeight)}>
						// 		<div className={cn("relative w-full h-full ")}>
						// 			<Image
						// 				isFill
						// 				src={item.url}
						// 				strapiImage={item}
						// 				alt={item.alt}
						// 				className="object-contain pointer-events-none select-none"
						// 			/>
						// 		</div>
						// 	</div>
						// </div>
					))}
				</div>
			</div>
		</div>
	)
}

function SlideItem({
	item,
	imgHeight
}: {
	item: { image: { url: string; alt: string }; link?: string }
	imgHeight?: string
}) {
	return (
		<div className="card-logos-item">
			<div className={cn("text-center min-w-[200px] ", !imgHeight ? "h-32" : imgHeight)}>
				{item.link ? (
					<Link href={item.link} target="_blank">
						<div className={cn("relative w-full h-full")}>
							<Image
								isFill
								src={item.image.url}
								strapiImage={item.image as any}
								alt={item.image.alt}
								className="object-contain pointer-events-none select-none"
							/>
						</div>
					</Link>
				) : (
					<div className={cn("relative w-full h-full")}>
						<Image
							isFill
							src={item.image.url}
							strapiImage={item.image as any}
							alt={item.image.alt}
							className="object-contain pointer-events-none select-none"
						/>
					</div>
				)}
			</div>
		</div>
	)
}
