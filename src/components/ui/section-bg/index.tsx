import { cn } from "@/utils"
import Image from "../image"

interface ISectionBg {
	hero_video_url?: string
	subtitle?: string
	id?: string
	className?: string
	children?: React.ReactNode
}

export default function SectionBg({ id, className, children }: ISectionBg) {
	return (
		<section
			{...(id ? { id: id } : {})}
			className={cn("w-full relative pt-18 lg:ot28 pb-18 px-4 md:px-8 lg:px-16 bg-white", className)}
		>
			{/* <Image src="/bg-logo.png" /> */}
			{children}
		</section>
	)
}
