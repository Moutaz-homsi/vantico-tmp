import { Image } from "@/components/ui"
import { Separator } from "@/components/ui/separator"
import { Instagram, Linkedin, Youtube, X } from "lucide-react"
import VideoSection from "../ui/video-section"
import VideoBackground from "../page-builder/blocks/VideoBackground"

export default function Footer({ options }) {
	const { footerVideoUrl } = options || {}

	return (
		<footer className="bg-[#1E1E1E] text-white overflow-hidden ">
			{/* background image */}
			{footerVideoUrl ? (
				<VideoBackground
					videoSrc={footerVideoUrl}
					opacityPercentage={50}
					className="min-h-[300px] h-full bg-[#1E1E1E] text-white overflow-hidden"
				>
					<div className="relative inset-0 -top-[5px] pointer-events-none select-none">
						<div className="size-96 opacity-20 absolute left-0 top-0 z-[1]">
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
						<div className="flex flex-col md:flex-row gap-10 items-center md:justify-between mb-26">
							<div className="flex items-center">
								<Image src="/logo-v2.svg" alt="Logo" height={30} width={260} />
							</div>
						</div>
						<div className="flex flex-col lg:flex-row justify-between md:items-start">
							<div className="w-full flex flex-wrap gap-4 mb-10">
								{contactDetails.map((detail, index) => (
									<div
										className="flex justify-center md:justify-start items-start md:items-start text-center md:text-start text-neutral-300"
										key={index}
									>
										<div className="min-w-8 mt-1">{detail.icon}</div>
										<div className="text-start">{detail.content}</div>
									</div>
								))}
							</div>
						</div>

						<Separator className="bg-neutral-700 mb-10" />

						{/* bottom links */}
						<div className="flex flex-wrap gap-y-5 justify-between items-center">
							<div className="flex items-center md:mb-0">
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

							<div className="flex gap-x-8 flex-wrap gap-y-5">
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
						{/* TODO : Improve */}
						<em
							style={{
								fontSize: "14px",
								color: "#ccc",
								marginTop: "34px",
								display: "block"
							}}
						>
							The information presented on this website is for informational purposes only and does not constitute an
							offer to sell, a solicitation to buy, or a recommendation for any security, investment strategy, or
							financial product. Nothing contained herein should be construed as investment, legal, tax, or accounting
							advice. Visitors should consult their own professional advisors before making any financial or investment
							decision. All investments involve risk, including the potential loss of principal. Past performance is not
							indicative of future results. Forward-looking statements are subject to uncertainty and may not reflect
							actual outcomes. While VANTICO believes the information provided to be accurate as of the date of
							publication, no representation or warranty is made as to its completeness or accuracy, and it is subject
							to change without notice. Any references to assets under management (AUM) reflect the aggregate of
							affiliated entities across various investment platforms. These entities may be legally independent and
							separately managed. VANTICO does not guarantee the security or accuracy of third-party websites linked
							herein and disclaims all liability arising from their use. Use of this site constitutes acceptance of our
							terms of use and privacy policy.{" "}
						</em>
					</div>
				</VideoBackground>
			) : (
				<>
					<div className="relative inset-0 -top-[5px] pointer-events-none select-none">
						<div className="size-96 opacity-20 absolute left-0 top-0 z-[1]">
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
						<div className="flex flex-col md:flex-row gap-10 items-center md:justify-between mb-26">
							<div className="flex items-center">
								<Image src="/logo-v2.svg" alt="Logo" height={30} width={260} />
							</div>
						</div>
						<div className="flex flex-col lg:flex-row justify-between md:items-start">
							<div className="space-y-8 w-full flex gap-4">
								{contactDetails.map((detail, index) => (
									<div
										className="flex flex-wrap justify-center md:justify-start items-center md:items-start text-center md:text-start text-neutral-300"
										key={index}
									>
										<div className="min-w-8 mt-1">{detail.icon}</div>
										<div>{detail.content}</div>
									</div>
								))}
							</div>
						</div>

						<Separator className="bg-neutral-700 mb-10" />

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
						{/* TODO : Improve */}
						<em
							style={{
								fontSize: "14px",
								color: "#ccc",
								marginTop: "34px",
								display: "block"
							}}
						>
							The information presented on this website is for informational purposes only and does not constitute an
							offer to sell, a solicitation to buy, or a recommendation for any security, investment strategy, or
							financial product. Nothing contained herein should be construed as investment, legal, tax, or accounting
							advice. Visitors should consult their own professional advisors before making any financial or investment
							decision. All investments involve risk, including the potential loss of principal. Past performance is not
							indicative of future results. Forward-looking statements are subject to uncertainty and may not reflect
							actual outcomes. While VANTICO believes the information provided to be accurate as of the date of
							publication, no representation or warranty is made as to its completeness or accuracy, and it is subject
							to change without notice. Any references to assets under management (AUM) reflect the aggregate of
							affiliated entities across various investment platforms. These entities may be legally independent and
							separately managed. VANTICO does not guarantee the security or accuracy of third-party websites linked
							herein and disclaims all liability arising from their use. Use of this site constitutes acceptance of our
							terms of use and privacy policy.{" "}
						</em>
					</div>
				</>
			)}
		</footer>
	)
}

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
		content: <address className="not-italic">51 Kilmayne Dr, Cary, NC 27511</address>
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
			<a href="tel:+19192990709" className="hover:text-primary transition-colors">
				+1 (919) 299 0709
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
