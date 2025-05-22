import { cn } from "@/utils/style-utils"
import Link from "next/link"
import React from "react"
import Container from "./container"
import Image from "@/components/ui/image"
import { ChevronRight, Ham, Menu } from "lucide-react"
import { Button } from "@/components/ui"

const links = [
	{ href: "/services", label: "Services" },
	{ href: "/about-us", label: "About Us" },
	{ href: "/contact", label: "Contact" }
]

const dev_links = [
	{ href: "#hero", label: "hero" },
	{ href: "#about", label: "about" },
	{ href: "#history", label: "history" },
	{ href: "#strategy", label: "strategy" },
	{ href: "#investors", label: "investors" },
	{ href: "#tour", label: "tour" },
	{ href: "#tenants", label: "tenants" },
	{ href: "#roi", label: "roi" },
	{ href: "#renamelater", label: "renamelater" },
	{ href: "#team", label: "team" },
	{ href: "#approach", label: "approach" },
	{ href: "#testimonials", label: "testimonials" },
	{ href: "#news", label: "news" },
	{ href: "#faq", label: "faq" }
]
export default function Header({}) {
	return (
		<header className="sticky top-0 z-50 ">
			<div className={cn(" bg-[#101010]")}>
				<Container className="flex items-center justify-between py-4 px-4 md:flex-row md:items-center md:justify-between h-[5rem]">
					{/* Logo */}
					<div>
						<Link href="/" className="h-full">
							<Image src="/logo.svg" alt="Logo" height={100} width={200} />
						</Link>
					</div>

					<Menu className="text-white" />

					<Button size="lg" variant="outline" className="!py-6 border-neutral-600">
						<p className="text-white">Book consultation</p>
					</Button>
					{/* Navigation */}
					{/* <nav>
						<ul className="flex gap-8 items-center">
							{links.map((link) => (
								<li key={link.label}>
									<Link href={link.href} className="text-[1rem] font-normal text-white">
										{link.label}
									</Link>
								</li>
							))}
							<div className="w-[1px] h-[24px] bg-gray-500"></div>
							<Link href={"/book"} className="flex items-center gap-4">
								<p className="text-white">Book a consultation</p>
								<ChevronRight className="stroke-white stroke-1 size-8 border-[1.5px] border-white m-auto rounded-full" />
							</Link>
						</ul>
					</nav> */}
					{/* User actions */}
				</Container>
				<div className="flex gap-4 justify-center py-2 ">
					{dev_links.map((item) => {
						return (
							<Link className="text-white hover:text-primary uppercase" href={item.href} key={item.href}>
								{item.label}
							</Link>
						)
					})}
				</div>
			</div>
		</header>
	)
}
