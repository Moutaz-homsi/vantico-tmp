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

export default function MobileMenu({ isOpen = false }) {
	return (
		<div className={cn(isOpen ? "hidden" : "block", "absolute bg-black h-screen w-screen z-1000")}>
			{/* Logo */}
			{/* <div>
				<Link href="/" className="h-full">
					<Image src="/logo.svg" alt="Logo" height={100} width={200} />
				</Link>
			</div> */}

			<div className="flex flex-col gap-8 justify-center items-center py-2 ">
				{dev_links.map((item) => {
					return (
						<Fragment key={item.href}>
							<Link className="text-white hover:text-primary uppercase" href={item.href}>
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
