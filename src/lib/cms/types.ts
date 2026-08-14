/**
 * Shapes returned by the WordPress `vantico/v1` REST namespace.
 *
 * They intentionally match the shapes the components were already written
 * against (the previous Strapi API), so components take these unchanged.
 */

export interface CmsMediaFormat {
	url: string
	width: number
	height: number
}

export interface CmsMedia {
	id: number
	url: string
	name: string
	/** Both keys carry the same value; components read one or the other. */
	alt: string
	alternativeText: string
	caption: string | null
	mime: string | null
	width: number | null
	height: number | null
	formats: Record<string, CmsMediaFormat> | null
}

export interface CmsMenuItem {
	id: number
	title: string
	link: string
}

export interface CmsOptions {
	id: number | null
	menu: CmsMenuItem[]
	roi_percentage: number
	footerVideoUrl: string
}

export interface CmsFaq {
	id: number
	question: string
	answer: string
}

export interface CmsTestimonial {
	id: number
	author: string
	author_role: string
	comment: string
	avatar: CmsMedia | null
}

export interface CmsListItem {
	id: number
	title: string
	description: string
	image: CmsMedia | null
}

export interface CmsSlide {
	id: number
	image: CmsMedia | null
	link: string | null
	apply_mask: boolean
}

export interface CmsHomepage {
	id: number | null
	video_id: string
	calendly_url: string
	home_video_url: string
	/** Empty unless set in WordPress; the philosophy section falls back to its own copy. */
	founder_image: string
	founder_philosophy: string
	faq: CmsFaq[]
	history: CmsListItem[]
	testimonials: CmsTestimonial[]
	logos: CmsListItem[]
	tenants: {
		first_row_images: CmsMedia[]
		second_row_images: CmsMedia[]
		third_row_images: CmsMedia[]
	}
	ecosystem_sliders: {
		first_slider: CmsSlide[]
		second_slider: CmsSlide[]
		third_slider: CmsSlide[]
	}
}

export interface CmsNews {
	id: number
	/** The full article as ready-to-render HTML. Empty until someone writes one. */
	content: string
	/** Short summary for listings and cards. */
	excerpt: string
	title: string
	slug: string
	date: string
	external_url: string | null
	image: CmsMedia | null
}

export interface CmsNewsSlug {
	id: number
	slug: string
}

export interface CmsProperty {
	id: number
	name: string
	description: string
	rank: number
	image: CmsMedia | null
}

export interface CmsTeamMember {
	id: number
	name: string
	role: string
	position: string
	bio: string
	link: string
	rank: number
	image: CmsMedia | null
	mobile_image: CmsMedia | null
}

/** Blocks keep Strapi's `__component` naming, which page-builder.jsx switches on. */
export interface CmsBlock {
	__component: string
	id: number
	title: string | null
	[key: string]: unknown
}

export interface CmsPage {
	id: number
	title: string
	slug: string
	blocks: CmsBlock[]
}

export interface CmsPageSlug {
	id: number
	slug: string
	title: string
}

export interface CmsQuestionInput {
	name: string
	email: string
	question: string
}
