"use client"
import Link from "next/link"
import { Button } from "@/components/ui"
import Image from "@/components/ui/image"
import AnimatedMenuIcon from "./animated-menu-icon"
import BookmarkLink from "./bookmark-link"

const menuItems = [
	{ label: "What we do", href: "/#about" },
	{ label: "News & insights", href: "/#news" },
	{ label: "Our team", href: "/team" },
	{ label: "Tenants", href: "/#tenants" }
]

export function DesktopMenu() {
	return (
		<ul className="hidden lg:flex gap-8 lg:gap-4 xl:gap-6 2xl:gap-8 text-white">
			{menuItems.map(({ label, href }) => (
				<li key={href} className="relative group">
					<Link href={href}>
						<span className="relative z-10 text-lg lg:text-sm xl:text-base font-semibold">{label}</span>
						<span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
					</Link>
				</li>
			))}
		</ul>
	)
}

export function MobileMenuContent({
	isOpen,
	onClose,
	handleConsultation
}: {
	isOpen: boolean
	onClose: () => void
	handleConsultation: () => void
}) {
	return (
		<div
			data-lenis-prevent
			className={`fixed top-0 left-0 z-50 flex h-full w-full flex-col bg-black text-white transition-transform duration-500 ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} `}
		>
			<div className="flex items-center justify-between p-4">
				<AnimatedMenuIcon isOpen={isOpen} onClick={onClose} />
				<Link href="/" onClick={onClose}>
					<Image src="/logo-v2.svg" alt="Logo" height={60} width={120} />
				</Link>
			</div>

			<nav className="flex-1 overflow-y-auto px-4 space-y-4">
				{menuItems.map(({ label, href }, idx) => (
					<Link
						key={`${href}-${idx}`}
						href={href}
						onClick={onClose}
						className="block text-lg font-medium hover:text-primary transition-colors"
					>
						{label}
					</Link>
				))}
			</nav>

			<div className="p-4">
				<Button
					onClick={handleConsultation}
					variant="outline"
					className="w-full text-lg font-semibold text-white border-neutral-600"
				>
					Book consultation
				</Button>
			</div>
		</div>
	)
}

export function MobileMenuOverlay({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
	return (
		<div
			className={`fixed inset-0 z-40 bg-[rgba(0,0,0,0.7)] backdrop-blur-sm transition-opacity duration-300 ${
				isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
			}`}
		>
			{children}
		</div>
	)
}
