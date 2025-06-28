import { Button, Image } from "@/components/ui"
import { Separator } from "@/components/ui/separator"
import { Instagram, Linkedin, Youtube, X, ChevronRight } from "lucide-react"
import Link from "next/link"
import { AspectRatio } from "../ui/aspect-ratio"

/* Site Map Section */
const siteMapLinks = [
	{ href: "/", label: "Services" },
	{ href: "/", label: "About Us" },
	{ href: "/", label: "Contact" }
]

// Define contact details as an array
const contactDetails = [
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5 text-gray-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				/>
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
			</svg>
		),
		content: (
			<address className="not-italic">
				1400 Crescent Green Drive,
				<br />
				Suite 320, Cary, North Carolina
			</address>
		)
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5 text-gray-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
				/>
			</svg>
		),
		content: (
			<a href="tel:+19296764692" className="hover:text-primary transition-colors">
				+1 (929) 676-4692
			</a>
		)
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-5 w-5 text-gray-400"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>
		),
		content: (
			<a href="mailto:contact@vantico.com" className="hover:text-primary transition-colors">
				contact@vantico.com
			</a>
		)
	}
]

const Footer = () => {
	return (
		<footer className="bg-[#1E1E1E] text-white overflow-hidden ">
			{/* background image */}
			<div className="relative inset-0 pointer-events-none select-none">
				<div className="size-96 opacity-15 absolute left-0 top-0  z-0">
					<Image
						src="/bg-logo.png"
						alt="Background logo"
						isFill
						styles={{}}
						quality={80}
						fetchPriority="auto"
						className="object-contain object-right h-full w-full opacity-80"
					/>
				</div>
			</div>

			<div className="container mx-auto p-8 md:px-30 md:py-20">
				{/* logo and button div */}
				<div className="flex flex-col md:flex-row gap-10 items-center md:justify-between mb-16">
					<div className="flex items-center">
						<Image src="/logo-v2.svg" alt="Logo" height={30} width={260} />
					</div>
					<Button className="font-semibold">
						Schedule free consultation
						<ChevronRight className="ml-2" size={16} />
					</Button>
				</div>
				<div className="flex flex-col lg:flex-row justify-between md:items-start mb-12">
					<div className="mb-8 lg:mb-0">
						{/* Site Map Section */}
						<div className="mb-10">
							<h3 className="text-neutral-300 text-center md:text-start uppercase text-sm mb-10">Site Map</h3>
							<nav className="">
								<ul className="space-y-8">
									{siteMapLinks.map((link, index) => (
										<li className="w-full text-center md:text-start " key={index}>
											<Link href={link.href} className="hover:text-primary text-neutral-300 transition-colors">
												{link.label}
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</div>
					</div>

					{/* Contact Section */}
					<div className="lg:mx-auto mb-8 lg:mb-0">
						<h3 className="text-neutral-300 text-center md:text-start uppercase text-sm mb-10">Contact</h3>
						<div className="space-y-8 w-full  ">
							{contactDetails.map((detail, index) => (
								<div
									className="flex justify-center md:justify-start items-center md:items-start text-center md:text-start    text-neutral-300"
									key={index}
								>
									<div className="min-w-8 mt-1">{detail.icon}</div>
									<div>{detail.content}</div>
								</div>
							))}
						</div>
					</div>

					{/* Map and CTA */}
					<div className="w-full lg:w-[40%]">
						<AspectRatio ratio={7 / 4} className="relative   rounded-sm overflow-hidden mb-6">
							<Image
								isFill
								src="/images/map.png"
								alt="Map showing the office location"
								className="w-full h-64 object-cover"
							/>
						</AspectRatio>
					</div>
				</div>

				<Separator className="bg-neutral-700 my-10" />

				{/* bottom links */}
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex items-center mb-6 md:mb-0">
						<p className="text-sm text-neutral-300">© Vantico 2025</p>
						<div className="flex space-x-4 ml-8">
							<a href="#" aria-label="Instagram" className="text-neutral-300 hover:text-white transition-colors">
								<Instagram size={20} />
							</a>
							<a href="#" aria-label="Twitter" className="text-neutral-300 hover:text-white transition-colors">
								<X size={20} />
							</a>
							<a href="#" aria-label="LinkedIn" className="text-neutral-300 hover:text-white transition-colors">
								<Linkedin size={20} />
							</a>
							<a href="#" aria-label="YouTube" className="text-neutral-300 hover:text-white transition-colors">
								<Youtube size={20} />
							</a>
						</div>
					</div>

					<div className="flex space-x-8">
						<a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">
							Terms and Conditions
						</a>
						<a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors">
							Security
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
