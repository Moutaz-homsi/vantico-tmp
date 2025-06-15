"use client"
import { Button } from "@/components/ui"
import Image from "@/components/ui/image"
import { cn } from "@/utils/style-utils"
import Link from "next/link"
import Container from "./container"
import MobileMenu from "./mobile-menu"
import { useState } from "react"
import { useModal } from "@/hooks/use-model"
import ConsultationSection from "../page-builder/blocks/consultation-section"
import Calendly from "../calendly"
import { X } from "lucide-react"

export default function Header({}) {
	const [isOpen, setIsOpen] = useState(false)
	const { open, close } = useModal()
	return (
		<>
			<header className="sticky top-0 z-50 ">
				<div className={cn("bg-black ")}>
					<Container className="flex items-center justify-between py-4 px-4 md:flex-row md:items-center md:justify-between h-[5rem]">
						{/* Logo */}
						<div>
							<Link href="/" className="h-full">
								<Image className="select-none" src="/logo.svg" alt="Logo" height={100} width={200} />
							</Link>
						</div>

						{!isOpen ? (
							<MenuIcon
								onClick={() => {
									setIsOpen(!isOpen)
								}}
							/>
						) : (
							<X
								color="white"
								onClick={() => {
									setIsOpen(!isOpen)
								}}
								className="cursor-pointer  text-white size-6"
							/>
						)}

						<Button
							onClick={() => {
								open({
									title: "BOOK A 15-MIN INVESTOR CONSULTATION",
									children: <Calendly />
								})
							}}
							variant="outline"
							className="hidden md:block text-white text-lg font-semibold border-neutral-600"
						>
							Book consultation
						</Button>
					</Container>
				</div>
			</header>
			<MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	)
}

function MenuIcon({ onClick }) {
	return (
		<svg
			onClick={onClick}
			width="57"
			height="17"
			viewBox="0 0 57 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="cursor-pointer group"
		>
			<line
				x1="-4.37114e-08"
				y1="0.499996"
				x2="57"
				y2="0.499991"
				stroke="white"
				className="group-hover:stroke-primary transition-colors"
			/>
			<line
				x1="-4.37114e-08"
				y1="8.5"
				x2="57"
				y2="8.5"
				stroke="white"
				className="group-hover:stroke-primary transition-colors"
			/>
			<line
				x1="-4.37114e-08"
				y1="16.5"
				x2="57"
				y2="16.5"
				stroke="white"
				className="group-hover:stroke-primary transition-colors"
			/>
		</svg>
	)
}
