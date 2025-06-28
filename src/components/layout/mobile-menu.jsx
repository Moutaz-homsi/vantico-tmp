import Image from "@/components/ui/image"
import Link from "next/link"
import { Fragment } from "react"
import { Separator } from "../ui/separator"
import { cn } from "@/utils"

const dev_links = [
	{ href: "#hero", label: "hero" },
	{ href: "#about", label: "about" },
	{ href: "#history", label: "history" },
	{ href: "#strategy", label: "strategy" },
	{ href: "#investors", label: "investors" },
	{ href: "#tour", label: "tour" },
	{ href: "#tenants", label: "tenants" },
	{ href: "#roi", label: "roi" },
	{ href: "#ready", label: "ready" },
	{ href: "#team", label: "team" },
	{ href: "#approach", label: "approach" },
	{ href: "#testimonials", label: "testimonials" },
	{ href: "#news", label: "news" },
	{ href: "#faq", label: "faq" }
]

export default function MobileMenu({ isOpen = false, setIsOpen }) {
	return (
		<div
			className={cn(
				isOpen ? "block" : "hidden",
				"fixed left-0 w-full pb-40   transition-all duration-300  bg-black  h-screen   z-[9999999999] overflow-y-scroll overscroll-none hide-scrollbar"
			)}
		>
			{/* Logo */}
			{/* <div>
				<Link href="/" className="h-full">
					<Image src="/logo-v2.svg" alt="Logo" height={100} width={200} />
				</Link>
			</div> */}

			<div className="flex flex-col gap-8 justify-center items-center py-2 ">
				{dev_links.map((item) => {
					return (
						<Fragment key={item.href}>
							<Link
								onClick={(even) => {
									event.preventDefault()
									setIsOpen(false)
								}}
								className="text-white hover:text-primary uppercase"
								href={item.href}
							>
								{item.label}
							</Link>
							<Separator className="w-3/4 bg-neutral-800" />
						</Fragment>
					)
				})}
			</div>
		</div>
	)
}
