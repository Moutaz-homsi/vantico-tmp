import { Image } from "@/components/ui"
import { Container } from "@/components/layout"

export default function GerhardSection() {
	return (
		<section className="w-full bg-[#000000e6]">
			<Container patternSkin="dark" pattern="hidden">
				<div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 items-center lg:items-stretch">
					<div className="">
						<div className="relative w-[300px] h-[400px] aspect-[3/4] mx-auto">
							<Image src="/images/gerhard-image.webp" alt="CEO Image" className="rounded-lg" isFill />
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex-1 flex items-center mb-10">
							<p className="text-lg md:text-2xl text-white font-normal leading-relaxed tracking-wider">
								At VANTICO, strength lies in stillness. We don’t rush decisions, we refine them. Through financial
								discipline, risk awareness, and patient execution, we build lasting value. True confidence isn’t loud;
								it’s steady. And true stewardship is about protecting capital with care, clarity, and conviction.
							</p>
						</div>
						<div className="w-fit flex justify-end items-start flex-col text-left text-white ms-auto">
							<p className="text-lg md:text-2xl">Gerhard Renner</p>
							<p className="text-md md:text-xl font-light">Co-Founder & CFO</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
