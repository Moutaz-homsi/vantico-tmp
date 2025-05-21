"use client"
import React from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface HeroProps {
	title?: string
	subtitle?: string
	ctaText?: string
	onCtaClick?: () => void
	className?: string
}

const Hero: React.FC<HeroProps> = ({
	title = "BUILD WEALTH WITH VANTICO",
	subtitle = "Prime investments in the Mid-Atlantic in high-end dental and underutilized commercial properties",
	ctaText = "Get started",
	onCtaClick,
	className
}) => {
	return (
		<div className="relative w-full h-screen bg-black flex items-center justify-center">
			{/* Background overlay for video/image */}

			<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
				<h1 className="text-5xl md:text-7xl font-light text-white uppercase tracking-wider mb-6">{title}</h1>

				<p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">{subtitle}</p>

				<Button
					onClick={onCtaClick}
					variant="outline"
					size="lg"
					className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors py-6 px-8 text-lg"
				>
					{ctaText} <ArrowRight className="ml-2" size={20} />
				</Button>
			</div>
		</div>
	)
}

export default Hero
