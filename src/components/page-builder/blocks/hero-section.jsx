"use client"

import Image from "@/components/ui/image"
import Container from "@/components/layout/container"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection({ titleStart, titleBold, titleEnd, subtitle, backgroundImage, ctaText, ctaLink }) {
	return (
		<section className="relative h-[800px] overflow-hidden">
			{backgroundImage && (
				<div className="absolute inset-0">
					<Image
						src={backgroundImage.url}
						strapiImage={backgroundImage}
						isFill
						sizes="100vw"
						className="object-cover"
						alt="Hero background"
					/>
					{/* <div className="absolute inset-0 bg-gradient-to-r from-black/10 from-[5.74%] via-[#293338]/35 via-100% z-10"></div> */}
				</div>
			)}

			<Container className="relative h-full flex flex-col justify-center z-20">
				<div className="flex flex-col gap-12 w-[29rem]">
					<h1 className="font-extralight text-[82px] leading-[110%] text-title ">
						{titleStart} <span className="font-normal">{titleBold}</span> {titleEnd}
					</h1>
					<p className="text-text-500 text-2xl font-light leading-[140% ]">{subtitle}</p>
					<Link href={ctaLink} className="flex items-center gap-4">
						<p className="text-xl font-medium">{ctaText || "Get started"}</p>
						<div className="size-12 rounded-full border border-black flex items-center justify-center">
							<ChevronRight className="size-9 stroke-black" strokeWidth={1} />
						</div>
					</Link>
				</div>
			</Container>
		</section>
	)
}
