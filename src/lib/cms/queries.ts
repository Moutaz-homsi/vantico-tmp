import { cmsFetch } from "./client"
import type {
	CmsHomepage,
	CmsNews,
	CmsNewsSlug,
	CmsOptions,
	CmsPage,
	CmsPageSlug,
	CmsProperty,
	CmsQuestionInput,
	CmsTeamMember
} from "./types"

const EMPTY_OPTIONS: CmsOptions = {
	id: null,
	menu: [],
	roi_percentage: 0,
	footerVideoUrl: ""
}

/**
 * Global site options (navigation menu, ROI figure, footer video).
 * Requested by the root layout on every render, so it must never throw.
 */
export async function getOptions(): Promise<CmsOptions> {
	return (await cmsFetch<CmsOptions>("option")) ?? EMPTY_OPTIONS
}

export async function getHomepage(): Promise<CmsHomepage | null> {
	return cmsFetch<CmsHomepage>("homepage")
}

interface NewsQuery {
	/** Return only the item with this slug. */
	slug?: string
	/** Omit this slug — used by the related-news list. */
	exclude?: string
	limit?: number
}

export async function getNews(query: NewsQuery = {}): Promise<CmsNews[]> {
	const params = new URLSearchParams()
	if (query.slug) params.set("slug", query.slug)
	if (query.exclude) params.set("exclude", query.exclude)
	if (query.limit) params.set("limit", String(query.limit))

	const search = params.toString()
	return (await cmsFetch<CmsNews[]>(`news${search ? `?${search}` : ""}`)) ?? []
}

export async function getNewsBySlug(slug: string): Promise<CmsNews | null> {
	const items = await getNews({ slug })
	return items[0] ?? null
}

/** Slug-only list for generateStaticParams. */
export async function getNewsSlugs(): Promise<CmsNewsSlug[]> {
	return (await cmsFetch<CmsNewsSlug[]>("news?fields=slug")) ?? []
}

export async function getProperties(): Promise<CmsProperty[]> {
	return (await cmsFetch<CmsProperty[]>("properties")) ?? []
}

export async function getTeams(): Promise<CmsTeamMember[]> {
	return (await cmsFetch<CmsTeamMember[]>("teams")) ?? []
}

export async function getPageSlugs(): Promise<CmsPageSlug[]> {
	return (await cmsFetch<CmsPageSlug[]>("pages/slugs")) ?? []
}

export async function getPageBySlug(slug: string): Promise<CmsPage | null> {
	return cmsFetch<CmsPage>(`pages/slug/${encodeURIComponent(slug)}`)
}

/**
 * Contact/question form submission. Posts from the browser, so it is never
 * cached and returns the created record's id.
 */
export async function submitQuestion(input: CmsQuestionInput): Promise<{ id: number } | null> {
	return cmsFetch<{ id: number }>("questions", {
		method: "POST",
		body: input,
		revalidate: false
	})
}
