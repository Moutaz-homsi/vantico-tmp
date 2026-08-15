import { cn } from "@/utils"
import Wysiwyg from "./wysiwyg"
import { Image } from "@/components/ui"
import Title from "@/components/ui/title"
import { Container } from "@/components/layout"
import SectionLabel from "@/components/section-label"
import VideoSection from "@/components/ui/video-section"

export default function ContentBlock({ data, showTitle = true }) {
	const skin = data?.skin || "light"
	const style = data?.style || "left"

	// The heading, sub-heading and body are identical in all three backgrounds
	// below, so they are built once rather than repeated per branch.
	const body = (
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
	)

	if (data?.bg_video_url) {
		return (
			<VideoSection video_url={data?.bg_video_url} className="h-auto min-h-[520px]">
				<Container patternSkin={skin} pattern={data.pattern}>{body}</Container>
			</VideoSection>
		)
	}

	// A background image, as chosen in the CMS. The video above takes precedence
	// when both are set, matching the Banner block.
	if (data?.bg_image?.url) {
		return (
			<div className="relative overflow-hidden">
				<Image src={data.bg_image.url} isFill className="object-cover" alt={data?.title || "section background"} />

				{/* Without this the text is unreadable over most photographs. Lighter
				    on a light skin so the image is not crushed. */}
				<div className={cn("absolute inset-0", skin == "dark" ? "bg-black/60" : "bg-white/70")} />

				<Container className="relative z-10" patternSkin={skin} pattern={data.pattern}>
					{body}
				</Container>
			</div>
		)
	}

	return (
		<div className={cn(skin == "dark" ? "bg-black" : "bg-white")}>
			<Container patternSkin={data?.pattern || "light"} pattern={data.pattern}>
				{body}
			</Container>
		</div>
	)
}
