import Image from "../image"

interface IIconBox {
	icon: React.ReactNode
	title: string
	content: string | React.ReactNode
}
export default function IconBlox({ icon, title, content }: IIconBox) {
	return (
		<div className="relative text-center bg-[#1E1E1E] px-8 pb-8 pt-20 rounded-2xl h-full">
			<div className="bg-black p-2 absolute -top-12 left-1/2 -translate-x-1/2 rounded-full">
				<div className="bg-[#1E1E1E] p-3 rounded-full">{icon}</div>
			</div>
			<p className="text-lg md:text-xl font-secondary font-semibold mb-4">{title}</p>
			{typeof content == "string" ? <p className="text-base md:text-lg font-light">{content}</p> : content}
		</div>
	)
}
