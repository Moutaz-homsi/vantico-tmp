export interface INewsItem {
	id: number
	title: string
	slug: string
	date: string
	external_url: string
	/** Full article HTML; empty for items that only ever had a summary. */
	content: string
	/** Short summary shown on cards and listings. */
	excerpt?: string
	image?: {
		url: string
	}
}
