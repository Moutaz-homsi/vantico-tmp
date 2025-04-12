import { cn } from "@/utils/style-utils"
import Link from "next/link"
import React from "react"
import Container from "./container"
import Image from "@/components/ui/image"
import { ChevronRight } from "lucide-react"

const links = [
	{ href: "/services", label: "Services" },
	{ href: "/about-us", label: "About Us" },
	{ href: "/contact", label: "Contact" }
]
export default function Header({}) {
	return (
		<header className="sticky top-0 z-50 ">
			<div className={cn(" bg-[#101010]")}>
				<Container className="flex items-center justify-between py-4 px-4 md:flex-row md:items-center md:justify-between h-[5rem]">
					{/* Logo */}
					<div>
						<Link href="/" className="h-full">
							<Image src="/logo.png" alt="Logo" height={100} width={200} />
						</Link>
					</div>
					{/* Navigation */}
					<nav>
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
					</nav>
					{/* User actions */}
				</Container>
			</div>
		</header>
	)
}
