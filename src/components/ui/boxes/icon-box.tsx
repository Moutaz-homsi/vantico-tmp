import { cn } from "@/utils"
import Image from "../image"

interface IIconBox {
	icon: React.ReactNode
	title: string
	content: string | React.ReactNode
}
export default function IconBlox({ icon, title, content }: IIconBox) {
	return (
		<div className={cn("relative text-center bg-[#1E1E1E] px-8 pb-8 rounded-2xl h-full", icon ? "pt-20" : "pt-8")}>
			{icon ? (
				<div className="bg-black p-2 absolute -top-12 left-1/2 -translate-x-1/2 rounded-full">
					<div className="bg-[#1E1E1E] p-3 rounded-full">
						{typeof icon == "object" || typeof icon == "function" ? (
							icon
						) : (
							<div className="relative w-16 h-16" >
								<Image src={icon as string} alt={title} isFill sizes="30vw" />
							</div>
						)}
					</div>
				</div>
			) : null}
			<p className="text-white text-lg md:text-xl font-secondary font-semibold mb-4">{title}</p>
			{typeof content == "string" ? <p className="text-white text-base md:text-lg font-light">{content}</p> : content}
		</div>
	)
}
