"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "@/components/ui/image"
import Container from "./container"
import AnimatedMenuIcon from "../ui/header/animated-menu-icon"
import { DesktopMenu, MobileMenuContent, MobileMenuOverlay } from "../ui/header/nav-menu"
import { useModal } from "@/hooks/use-model"
import Calendly from "../calendly"
import { cn } from "@/utils"

export default function Header() {
	const [isOpen, setIsOpen] = useState(false)
	const { open } = useModal()

	const handleConsultation = () => {
		// @ts-ignore
		open({ title: "BOOK A 15‑MIN INVESTOR CONSULTATION", children: <Calendly />, wideContent: true })
		setIsOpen(false)
	}

	return (
		<>
			<header className="sticky top-0 left-0 right-0 z-50 w-full bg-black">
				<div className="w-full bg-black">
					<Container
						noGutters
						className={cn(
							"relative flex items-center justify-between h-16 px-4 2xl:px-0 py-3 md:py-3 lg:py-3 w-full max-w-7xl mx-auto",
							!isOpen ? "bg-black" : "bg-gray-900"
						)}
					>
					<Link href="/" className="block md:w-52">
						<Image src="/logo-v2.svg" alt="Logo" height={100} width={200} className="select-none" quality="100" />
					</Link>

					<DesktopMenu />

					<div className="lg:hidden">
						<AnimatedMenuIcon isOpen={isOpen} onClick={() => setIsOpen((v) => !v)} />
					</div>

					{/* <div className="hidden lg:block">
						<Button
							onClick={handleConsultation}
							variant="outline"
							className="text-lg font-semibold text-white border-neutral-600 lg:w-[160px] xl:w-[180px] md:text-sm 2xl:w-auto 2xl:text-lg"
						>
							Book consultation
						</Button>
					</div> */}
					</Container>
				</div>
			</header>

			<MobileMenuOverlay isOpen={isOpen}>
				<div data-lenis-stop>
					<MobileMenuContent isOpen={isOpen} onClose={() => setIsOpen(false)} handleConsultation={handleConsultation} />
				</div>
			</MobileMenuOverlay>
		</>
	)
}
