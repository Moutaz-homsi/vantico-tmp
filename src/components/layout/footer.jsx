import { Button } from "@/components/ui"
import { Separator } from "@/components/ui/separator"
import { Instagram, Linkedin, Youtube, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
			<a href="tel:+19296764692" className="hover:text-amber-400 transition-colors">
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
			<a href="mailto:contact@vantico.com" className="hover:text-amber-400 transition-colors">
				contact@vantico.com
			</a>
		)
	}
]

const Footer = () => {
	return (
		<footer className="bg-black text-white py-16">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="flex justify-between">
					<div className="flex items-center mb-16">
						<Image src="/logo.png" alt="Logo" height={100} width={200} />
					</div>
					<Button
						variant="outline"
						className=" text-white bg-transparent border-white hover:bg-white hover:text-black transition-colors p-6"
					>
						Schedule free consultation
						<span className="ml-2">→</span>
					</Button>
				</div>
				<div className="flex flex-col lg:flex-row justify-between items-start mb-12">
					{/* Logo */}

					<div className="mb-8 lg:mb-0">
						{/* Site Map Section */}
						<div className="mb-10">
							<h3 className="text-gray-400 uppercase text-sm mb-6">Site Map</h3>
							<nav>
								<ul className="space-y-4">
									{siteMapLinks.map((link, index) => (
										<li key={index}>
											<Link href={link.href} className="hover:text-amber-400 transition-colors">
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
						<h3 className="text-gray-400 uppercase text-sm mb-6">Contact</h3>
						<div className="space-y-6">
							{contactDetails.map((detail, index) => (
								<div className="flex items-start" key={index}>
									<div className="min-w-8 mt-1">{detail.icon}</div>
									<div>{detail.content}</div>
								</div>
							))}
						</div>
					</div>

					{/* Map and CTA */}
					<div className="w-full lg:w-1/3">
						<div className="rounded-lg overflow-hidden mb-6">
							<img
								src="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-78.85,35.81,13,0/600x400?access_token=pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2xmeWh6aHZmMDdteDNlcGRsdnU3ZnN0NiJ9.6YmLDqDlGHFnyGJQkz9tjw"
								alt="Map showing the office location"
								className="w-full h-64 object-cover"
							/>
						</div>
					</div>
				</div>

				<Separator className="bg-gray-800 my-10" />

				{/* bottom links */}
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="flex items-center mb-6 md:mb-0">
						<p className="text-sm text-gray-400">© Vantico 2025</p>
						<div className="flex space-x-4 ml-8">
							<a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
								<Instagram size={20} />
							</a>
							<a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
								<X size={20} />
							</a>
							<a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
								<Linkedin size={20} />
							</a>
							<a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
								<Youtube size={20} />
							</a>
						</div>
					</div>

					<div className="flex space-x-8">
						<a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
							Terms and Conditions
						</a>
						<a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
							Security
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
