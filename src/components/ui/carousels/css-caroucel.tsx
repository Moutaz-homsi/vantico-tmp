"use client"
// TODO: We had to mark this component as we have an issue on the image component,
// as it has loader and the loader should be optimized to run on server functions
import { cn } from "@/utils"
import Link from "next/link"
import { Image } from "@/components/ui"

const BASE_DURATION = 40 // This will be the duration for a carousel with 5 items

export default function CssCarousel({ data = [], imgHeight }: { data: any[]; imgHeight?: string }) {
	// Calculate duration based on number of items
	const duration = data.length > 0 ? Math.max(20, Math.min(120, (data.length / 5) * BASE_DURATION)) : 60

	return (
		<div className="w-full overflow-hidden">
			<div className="card-logos-container">
				<div className="card-logos-content" style={{ "--animation-duration": `${duration}s` } as React.CSSProperties}>
					{/* First set of cards */}
					{data.map((item, index) => (
						<SlideItem item={item} imgHeight={imgHeight} key={item?.id || index} />
					))}
					{/* Duplicate set for seamless loop */}
					{data.map((item, index) => (
						<SlideItem item={item} imgHeight={imgHeight} key={`duplicate-${item?.id || index}`} />
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
	item: { image: { url: string; alt: string }; link?: string; apply_mask: boolean | null }
	imgHeight?: string
}) {
	return (
		<div className="card-logos-item">
			<div className={cn("text-center w-[200px] relative", !imgHeight ? "h-32" : imgHeight)}>
				{item.link ? (
					<Link href={item.link} target="_blank">
						<div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
							<Image
								isFill
								src={item.image.url}
								strapiImage={item.image as any}
								alt={item.image.alt}
								className={cn("object-contain pointer-events-none select-none", item?.apply_mask && "brightness-50")}
							/>
						</div>
					</Link>
				) : (
					<div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
						<Image
							isFill
							src={item.image.url}
							strapiImage={item.image as any}
							alt={item.image.alt}
							className={cn("object-contain pointer-events-none select-none", item?.apply_mask && "brightness-50")}
						/>
					</div>
				)}
			</div>
		</div>
	)
}
