"use client"

import React from "react"
import { cn } from "@/utils/style-utils"

export default function Container({
	children,
	className = "",
	as: Component = "div",
	fluid = false,
	noGutters = false,
	...props
}) {
	return (
		<Component
			className={cn("mx-auto w-full pt-16 md:pt-20 lg:pt-[7.5rem] pb-16 md:pb-20 lg:pb-[7.25rem]", !fluid && "max-w-7xl", !noGutters && "px-6 md:px-8 lg:px-12", className)}
			{...props}
		>
			{children}
		</Component>
	)
}
