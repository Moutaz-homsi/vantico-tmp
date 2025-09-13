import { cn } from "@/utils"

const defaultClasses = {
	// light: "bg-[#FAF6F2] text-[#AB804A]",
	// dark: "bg-[#1E1E1E] text-[#AB804A]"
	light: "text-black",
	dark: "text-white"
}

export default function SectionLabel({ className = "", variant = "light", label }) {
	return (
		<span
			className={cn(
				"rounded-xs font-normal capitalize text-lg md:text-2xl px-4 py-2",
				defaultClasses[variant],
				className
			)}
		>
			{label}
		</span>
	)
}
