"use client"

import React from "react"
import Container from "@/components/layout/container"
import Image from "@/components/ui/image"
import Link from "next/link"

export default function Footer() {
	const currentYear = new Date().getFullYear()

	// These would normally come from a global site settings API call
	const quickLinks = [{ label: "Schedule consultation", url: "/consultation" }]

	const siteMapLinks = [
		{ label: "Services", url: "/services" },
		{ label: "About Us", url: "/about" },
		{ label: "Contact", url: "/contact" }
	]

	const legalLinks = [
		{ label: "Privacy Policy", url: "/privacy" },
		{ label: "Terms and Conditions", url: "/terms" },
		{ label: "Security", url: "/security" }
	]

	return (
		<footer className="bg-[#101010] text-white py-16">
			<Container>
				<div className="flex justify-between mb-12">
					{/* Logo */}
					<div>
						<Image src="/logo.png" alt="Logo" height={100} width={200} />
					</div>
					<div className="flex gap-20 mr-18">
						{/* Quick Links */}
						<div>
							<h4 className="text-[1rem] uppercase mb-6 font-medium text-[#AAAAAA]">Quick Links</h4>
							<ul className="space-y-2">
								{quickLinks.map((link, index) => (
									<li key={index}>
										<Link
											href={link.url}
											className="text-[1rem] font-normal text-[#AAAAAA] hover:text-white transition-colors"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Site Map */}
						<div>
							<h4 className="text-[1rem] uppercase mb-6 font-medium text-[#AAAAAA]">Site Map</h4>
							<ul className="space-y-2">
								{siteMapLinks.map((link, index) => (
									<li key={index}>
										<Link
											href={link.url}
											className="text-[1rem] font-normal text-[#AAAAAA] hover:text-white transition-colors"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className=" pt-12 border-t border-[#2D2D2D] flex flex-col md:flex-row justify-between items-center">
					<p className="text-[#AAAAAA] font-normal text-sm">© Vantico {currentYear}</p>

					<div className="flex gap-10 mt-4 md:mt-0">
						{legalLinks.map((link, index) => (
							<Link
								key={index}
								href={link.url}
								className="text-[#AAAAAA] font-normal text-sm hover:text-white transition-colors"
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			</Container>
		</footer>
	)
}
