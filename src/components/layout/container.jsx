"use client"

import React from "react"
import { cn } from "@/utils/style-utils"
import { Image } from "../ui"

export default function Container({
	children,
	className = "",
	as: Component = "div",
	fluid = false,
	noGutters = false,
	pattern = "left" || "right" || "hidden",
	patternSkin = "light" || "dark",
	...props
}) {
	return (
		<div className="w-full relative">
			{pattern !== "hidden" ? (
				<div
					className={cn(
						"absolute z-[0] w-[500px] h-[500px] max-h-full",
						pattern === "right" ? "right-0 -bottom-[0.2rem]" : "left-0 -top-[0.2rem]",
						patternSkin === "dark" ? "opacity-30" : "opacity-80"
					)}
				>
					<Image
						src="/bg-logo.png"
						alt="Background logo"
						isFill
						quality={80}
						fetchPriority="auto"
						className={cn("object-contain h-full w-full", patternSkin === "dark" ? "opacity-30" : "opacity-80")}
					/>
				</div>
			) : null}
			<Component
				className={cn(
					"mx-auto w-full pt-16 md:pt-20 lg:pt-[7.5rem] pb-16 md:pb-20 lg:pb-[7.25rem] z-[1] relative",
					!fluid && "max-w-7xl",
					!noGutters && "px-6 md:px-8 lg:px-12",
					className
				)}
				{...props}
			>
				{children}
			</Component>
		</div>
	)
}
