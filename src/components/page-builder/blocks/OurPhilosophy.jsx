"use client"
import { Container } from "@/components/layout"
import { Image } from "@/components/ui"

const OurPhilosophy = ({ founder_image, founder_philosophy }) => {
	return (
		<section className="w-full bg-black">
			<Container patternSkin="dark" pattern="hidden">
				<div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 items-center lg:items-stretch">
					<div className="">
						<div className="relative w-[300px] h-[400px] aspect-[3/4] mx-auto">
							<Image
								src={founder_image || "/images/Dr-Hesham-Baky-V2.jpg"}
								alt="CEO Image"
								className="rounded-lg"
								isFill
							/>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex-1 flex items-center mb-10">
							<p className="text-lg md:text-2xl text-white font-normal leading-relaxed tracking-wider">
								{founder_philosophy ||
									`At VANTICO we lead with character before capital. True investment begins with trust. Before any numbers or structures we focus on people their values their vision and their integrity. We believe long-term success is not only measured in returns but in relationships built with care and conviction. We are here to build what matters patiently and with purpose. That means saying no more often than yes. It means choosing partners who share our principles.`}
							</p>
						</div>
						<div className="w-fit flex justify-end items-start flex-col text-left text-white ms-auto">
							<p className="text-lg md:text-2xl">Dr. Hesham Baky</p>
							<p className="text-md md:text-xl font-light">Chairman and Founder</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default OurPhilosophy
