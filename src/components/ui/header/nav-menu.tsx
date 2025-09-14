"use client"
import Link from "next/link"
import Image from "@/components/ui/image"
import { useState, useRef, useEffect, RefObject } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type SubmenuItem = {
	label: string
	href: string
}

type MenuItem = {
	label: string
	href?: string
	submenu?: SubmenuItem[]
}

const menuItems: MenuItem[] = [
	{
		label: "About",
		submenu: [
			// overview
			{ label: "Overview", href: "/about" },
			{ label: "Our People", href: "/our-people" },
			// { label: "Contact", href: "/contact" }
		]
	},
	{
		label: "Investment Focus",
		submenu: [
			{ label: "Real Estate", href: "/investment-focus#real-estate" },
			{ label: "Healthcare", href: "/investment-focus#healthcare" },
			{ label: "Private Equity", href: "/investment-focus#private-equity" }
		]
	},
	{
		label: "Partner Network",
		href: "/partner-network"
	},
	{
		label: "Our Edge",
		href: "/our-edge"
	},
	{
		label: "Vantico Lab",
		href: "/vantico-lab"
	},
	// {
	// 	label: "Vantico Lab",
	// 	submenu: [
	// 		{ label: "Insights and news", href: "/insights-and-news" },
	// 		{ label: "Press Release", href: "/press-release" },
	// 		{ label: "Data", href: "/data" },
	// 		{ label: "Growth states", href: "/growth-states" }
	// 	]
	// },
	{
		label: "LP Access",
		href: "/lp-access"
	}
]

const DropdownMenu = ({
	items,
	isMobile = false,
	onClose
}: {
	items: MenuItem["submenu"]
	isMobile?: boolean
	onClose?: () => void
}) => {
	if (!items) return null

	const baseClasses = "transition-all duration-200 rounded-lg text-sm md:text-base px-4 py-3 flex items-center"
	const mobileClasses =
		"text-white/90 hover:bg-white/5 hover:text-white pl-6 border-l-2 border-transparent hover:border-primary"
	const desktopClasses = "text-gray-300 hover:bg-white/5 hover:text-white"

	return (
		<div
			className={`${
				isMobile
					? "relative w-full overflow-hidden transition-all duration-300 ease-in-out"
					: "absolute left-0 mt-2 w-56 rounded-xl bg-gray-900/95 backdrop-blur-lg border border-white/10 shadow-2xl p-1.5 z-50"
			}`}
		>
			<div className={isMobile ? "space-y-0.5" : "space-y-1"}>
				{items.map((item) => (
					<Link
						key={item.href}
						href={item.href}
						onClick={onClose}
						className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
					>
						{isMobile && <span className="w-1 h-1 rounded-full bg-current opacity-70 mr-3"></span>}
						{item.label}
					</Link>
				))}
			</div>
		</div>
	)
}

const MenuItem = ({
	item,
	isMobile = false,
	onClose
}: {
	item: MenuItem
	isMobile?: boolean
	onClose?: () => void
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLLIElement | null>(null)
	const hasSubmenu = Boolean(item.submenu?.length)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	const handleClick = (e: React.MouseEvent) => {
		if (hasSubmenu) {
			e.preventDefault()
			setIsOpen(!isOpen)
		} else if (onClose) {
			onClose()
		}
	}

	if (isMobile) {
		return (
			<div className="space-y-1">
				<div
					className={`flex items-center justify-between w-full text-left p-2 rounded-lg transition-all duration-200 ${
						isOpen ? "bg-white/5" : "hover:bg-white/5"
					}`}
					onClick={handleClick}
				>
					{item.href ? (
						<Link
							href={item.href}
							className="block text-lg text-white hover:text-primary transition-colors"
						>
							{item.label}
						</Link>
					) : (
						<span className="block text-lg text-white hover:text-primary transition-colors cursor-pointer">
							{item.label}
						</span>
					)}
					{hasSubmenu && (
						<span className="ml-2 text-white/60">{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
					)}
				</div>
				{hasSubmenu && (
					<div
						className={`overflow-hidden transition-all duration-300 ${
							isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
						}`}
					>
						<DropdownMenu items={item.submenu} isMobile onClose={onClose} />
					</div>
				)}
			</div>
		)
	}

	return (
		<div ref={ref as any} className="relative">
			<div className="flex items-center">
				{item.href ? (
					<Link
						href={item.href}
						className="relative z-10 group-hover:text-primary transition-colors cursor-pointer"
						onMouseEnter={() => setIsOpen(false)}
					>
						<span className="relative">
							<span className="text-lg lg:text-sm xl:text-base text-white group-hover:text-primary transition-colors">
								{item.label}
							</span>
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
						</span>
					</Link>
				) : (
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="relative z-10 text-lg lg:text-sm xl:text-base text-white hover:text-primary focus:outline-none transition-colors flex items-center group cursor-pointer"
						aria-expanded={isOpen}
						aria-haspopup="true"
					>
						<span className="relative">
							{item.label}
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
						</span>
						<span className={`ml-1.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
							<ChevronDown size={16} />
						</span>
					</button>
				)}
			</div>

			{hasSubmenu && (
				<div className="absolute left-0 flex justify-center">
					<div
						className={`absolute top-full mt-2 transition-all duration-300 origin-top z-50 ${
							isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
						}`}
					>
						<DropdownMenu items={item.submenu} />
					</div>
				</div>
			)}
		</div>
	)
}

export function DesktopMenu() {
	return (
		<nav className="hidden lg:block w-full">
			<ul className="flex items-center justify-end">
				{menuItems.map((item, index) => (
					<li key={item.href || item.label} className="group relative px-2 xl:px-3 2xl:px-4 flex justify-center">
						<MenuItem item={item} />
					</li>
				))}
			</ul>
		</nav>
	)
}

// Helper function to handle body scroll lock
const useBodyScrollLock = (isLocked: boolean) => {
	useEffect(() => {
		if (typeof document !== "undefined") {
			if (isLocked) {
				// Store the current scroll position
				const scrollY = window.scrollY
				// Apply styles to lock the body
				document.body.style.position = "fixed"
				document.body.style.top = `-${scrollY}px`
				document.body.style.width = "100%"
				document.body.style.overflow = "hidden"

				return () => {
					// Re-enable scrolling and restore scroll position
					const scrollY = document.body.style.top
					document.body.style.position = ""
					document.body.style.top = ""
					document.body.style.width = ""
					document.body.style.overflow = ""
					window.scrollTo(0, parseInt(scrollY || "0") * -1)
				}
			}
		}
	}, [isLocked])
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
	// Lock body scroll when menu is open
	useBodyScrollLock(isOpen)

	return (
		<div className="fixed inset-0 z-50 overflow-hidden">
			{/* Prevent scroll on body when menu is open */}
			<style jsx global>{`
				html {
					overflow-y: ${isOpen ? "hidden" : "auto"};
				}
			`}</style>
			{/* Backdrop */}
			<div
				className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={onClose}
			/>

			{/* Menu Panel */}
			<div
				className={`fixed top-0 left-0 h-full _w-4/5 w-full max-w-sm bg-gray-900 _bg-black shadow-2xl transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				{/* Header */}
				<div className="flex items-center justify-between p-5 border-b border-white/10">
					<Link href="/" onClick={onClose} className="block">
						<Image src="/logo-v2.svg" alt="Vantico" height={50} width={120} className="h-10 w-auto" />
					</Link>
					<button
						onClick={onClose}
						className="p-2 -mr-2 text-white/60 hover:text-white transition-colors"
						aria-label="Close menu"
					>
						<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				{/* Navigation */}
				<nav className="flex-1 overflow-y-scroll py-4 px-2 max-h-[calc(100vh-6rem)]">
					<div className="space-y-1">
						{menuItems.map((item) => (
							<MenuItem key={item.href || item.label} item={item} isMobile onClose={onClose} />
						))}
					</div>
				</nav>

				{/* Footer */}
				{/* <div className="p-5 border-t border-white/10">
					<Button
						onClick={() => {
							handleConsultation()
							onClose()
						}}
						variant="outline"
						className="w-full py-4 text-base font-medium bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 hover:border-primary/30 transition-colors"
					>
						Book consultation
					</Button>
				</div> */}
			</div>
		</div>
	)
}

export function MobileMenuOverlay({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
	return (
		<div
			className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
				isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
			}`}
		>
			{children}
		</div>
	)
}
