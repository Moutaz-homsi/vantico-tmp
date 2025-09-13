import { cn } from "@/utils"
import Wysiwyg from "./wysiwyg"
import Title from "@/components/ui/title"
import { Container } from "@/components/layout"
import SectionLabel from "@/components/section-label"
import VideoSection from "@/components/ui/video-section"

export default function ContentBlock({ data, showTitle = true }) {
	const skin = data?.skin || "light"
	const style = data?.style || "left"

	if (data?.bg_video_url) {
		return (
			<VideoSection video_url={data?.bg_video_url} className="h-auto min-h-[520px]">
				<Container patternSkin={skin} pattern={data.pattern}>
					<div
						className={cn(
							"relative w-full",
							skin == "dark" ? "text-white" : "text-black",
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
								className={cn("capitalize mb-6", skin == "dark" ? "text-white" : "text-[#151515]")}
							/>
						) : null}
						<Wysiwyg data={data?.content} />
					</div>
				</Container>
			</VideoSection>
		)
	}

	return (
		<div className={cn(skin == "dark" ? "bg-black" : "bg-white")}>
			<Container patternSkin={data?.pattern || "light"} pattern={data.pattern}>
				<div
					className={cn(
						"relative w-full",
						skin == "dark" ? "text-white" : "text-black",
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
							className={cn("capitalize mb-6", skin == "dark" ? "text-white" : "text-[#151515]")}
						/>
					) : null}
					<Wysiwyg data={data?.content} />
				</div>
			</Container>
		</div>
	)
}
