"use client"
import { cn } from "@/utils"
import { Image } from "@/components/ui"

export default function TenantCarousel({ images = [], imgHeight }: { images: any[]; imgHeight?: string }) {
	return (
		<div className="w-full overflow-hidden">
			<div className="card-logos-container">
				<div className={"card-logos-content animate-logos"}>
					{/* First set of cards */}
					{images.map((item, index) => (
						<div key={index} className="card-logos-item">
							<div className={cn("text-center min-w-[200px] ", !imgHeight ? "h-32" : imgHeight)}>
								<div className={cn("relative w-full h-full")}>
									<Image
										isFill
										src={item.url}
										strapiImage={item}
										alt={item.alt}
										className="object-contain pointer-events-none select-none"
									/>
								</div>
							</div>
						</div>
					))}
					{/* Duplicate set for seamless loop */}
					{images.map((item, index) => (
						<div key={`duplicate-${index}`} className="card-logos-item">
							<div className={cn("text-center min-w-[200px] ", !imgHeight ? "h-32" : imgHeight)}>
								<div className={cn("relative w-full h-full ")}>
									<Image
										isFill
										src={item.url}
										strapiImage={item}
										alt={item.alt}
										className="object-contain pointer-events-none select-none"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
