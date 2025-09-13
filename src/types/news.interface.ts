export interface INewsItem {
	id: number
	title: string
	slug: string
	date: string
	external_url: string
	content: string
	image?: {
		url: string
	}
}
