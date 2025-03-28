import { cn } from "@/utils/style-utils"
import Link from "next/link"
import React from "react"
import Container from "./container"
import { Image } from "@/components/ui"

const links = [
	{ href: "/", label: "Home" },
	{ href: "/about-us", label: "About" }
]
export default function Header({}) {
	return (
		<header className="sticky top-0 z-50 bg-white shadow dark:bg-gray-900">
			<div className={cn("", "border-b border-gray-200")}>
				<Container className="flex items-center justify-between py-4 px-4 md:flex-row md:items-center md:justify-between">
					{/* Logo */}
					<div>
						<Link href="/">
							<Image src="/logo.svg" alt="Logo" width={100} height={100} />
						</Link>
					</div>
					{/* Navigation */}
					<nav>
						<ul className="flex gap-8">
							{links.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					{/* User actions */}
				</Container>
			</div>
		</header>
	)
}