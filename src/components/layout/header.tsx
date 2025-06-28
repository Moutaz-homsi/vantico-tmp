"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui"
import Image from "@/components/ui/image"
import Container from "./container"
import AnimatedMenuIcon from "../ui/header/animated-menu-icon"
import { DesktopMenu, MobileMenuContent, MobileMenuOverlay } from "../ui/header/nav-menu"
import { useModal } from "@/hooks/use-model"
import Calendly from "../calendly"

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
			<header className="sticky top-0 z-50 bg-black">
				<Container noGutters className="flex items-center justify-between h-16 px-4 py-3">
					<Link href="/" className="block md:w-52">
						<Image src="/logo-v2.svg" alt="Logo" height={100} width={200} className="select-none" />
					</Link>

					<DesktopMenu />

					<div className="lg:hidden">
						<AnimatedMenuIcon isOpen={isOpen} onClick={() => setIsOpen((v) => !v)} />
					</div>

					<div className="hidden lg:block">
						<Button
							onClick={handleConsultation}
							variant="outline"
							className="text-lg font-semibold text-white border-neutral-600 lg:w-[160px] xl:w-[180px] md:text-sm 2xl:w-auto 2xl:text-lg"
						>
							Book consultation
						</Button>
					</div>
				</Container>
			</header>

			<MobileMenuOverlay isOpen={isOpen}>
				<div data-lenis-stop>
					<MobileMenuContent isOpen={isOpen} onClose={() => setIsOpen(false)} handleConsultation={handleConsultation} />
				</div>
			</MobileMenuOverlay>
		</>
	)
}
