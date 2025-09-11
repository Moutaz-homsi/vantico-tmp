import { cn } from "@/utils"
import Link from "next/link"

interface ILinkButton {
	link: string
	children: React.ReactNode
	className?: string
}
export default function LinkButton({ link, children, className }: ILinkButton) {
	return (
		<Link
			className={cn(
				"inline-flex items-center py-3 px-8 justify-center gap-2 whitespace-nowrap  text-md rounded-sm font-bold transition-all hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive select-none",
				className
			)}
			href={link}
		>
			{children}
		</Link>
	)
}
