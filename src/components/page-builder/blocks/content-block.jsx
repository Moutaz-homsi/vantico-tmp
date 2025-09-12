import { cn } from "@/utils"
import Wysiwyg from "./wysiwyg"
import Title from "@/components/ui/title"
import { Container } from "@/components/layout"
import SectionLabel from "@/components/section-label"

export default function ContentBlock({ data, showTitle = true }) {
	const skin = data?.skin || "light"
	const style = data?.style || "left"

	return (
		<div className={cn(skin == "dark" ? "bg-black" : "bg-white")}>
			<Container>
				<div
					className={cn(
						"relative w-full p-5 md:p-7 !shadow-none",
						skin == "dark" ? "text-white" : "text-black",
						showTitle ? "my-10" : "mb-10",
						style == "right" ? "text-right" : style == "center" ? "text-center" : "text-left"
					)}
				>
					{data?.sub_title ? (
						<div className="mb-6">
							<SectionLabel label={data?.sub_title} variant={skin == "dark" ? "dark" : "light"} />
						</div>
					) : null}

					{showTitle ? (
						<Title
							text={data?.title}
							className={cn("capitalize mb-5", skin == "dark" ? "text-white" : "text-[#151515]")}
						/>
					) : null}
					<Wysiwyg
						data={data?.content}
						className={cn("[&_a]:font-light", skin == "dark" ? "[&_*]:!text-white" : "[&_*]:!text-black")}
					/>
				</div>
			</Container>
		</div>
	)
}
