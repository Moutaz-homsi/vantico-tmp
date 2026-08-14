// /src/app/[locale]/(pages)/news/[slug]/page.tsx
import { notFound } from "next/navigation"
import Image from "next/image"
import { getNews, getNewsBySlug, getNewsSlugs, getOptions, getMediaUrl } from "@/lib/cms"
import Layout from "@/components/layout"

interface NewsItem {
	id: number
	title: string
	content: string
	date: string
	slug: string
	image?: {
		url: string
		alternativeText?: string
	}
}

interface Props {
	// Next 15 hands route params in asynchronously.
	params: Promise<{ slug: string; locale: string }>
}

export const revalidate = 60 // ISR every 60 seconds

export async function generateStaticParams() {
	const slugs = await getNewsSlugs()
	return slugs.map((item) => ({ slug: item.slug }))
}

export default async function NewsDetailPage({ params }: Props) {
	const { slug, locale } = await params

	const news = await getNewsBySlug(slug)
	if (!news) return notFound()

	const [relatedNews, options] = await Promise.all([getNews({ exclude: slug, limit: 3 }), getOptions()])

	return (
		<Layout options={options}>
			<div className="min-h-screen bg-white text-black">
				<div className="max-w-3xl mx-auto px-4 pt-20 pb-12">
					{news.image?.url && (
						<div className="mb-8 aspect-video relative rounded-xl overflow-hidden">
							<Image
								src={getMediaUrl(news.image)}
								alt={news.image.alternativeText || news.title}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 768px"
								priority
							/>
						</div>
					)}

					<h1 className="text-4xl md:text-5xl font-bold mb-4">{news.title}</h1>

					<p className="text-sm text-gray-500 mb-8">
						{new Date(news.date).toLocaleDateString(locale, {
							year: "numeric",
							month: "long",
							day: "numeric"
						})}
					</p>

					{/*
					 * The body is HTML written in WordPress, already sanitised on the
					 * way in. Articles migrated from the old CMS have no body yet —
					 * they only ever had a teaser — so fall back to the summary
					 * rather than showing an empty page.
					 */}
					<div className="prose prose-lg prose-neutral max-w-none">
						{news.content ? (
							<div dangerouslySetInnerHTML={{ __html: news.content }} />
						) : (
							<p className="lead">{news.excerpt}</p>
						)}
					</div>

					{news.external_url && (
						<p className="mt-10">
							<a
								href={news.external_url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 font-medium underline underline-offset-4"
							>
								Read the full article
							</a>
						</p>
					)}
				</div>

				{/* Related News */}
				{relatedNews.length > 0 && (
					<div className="bg-gray-100 py-12 px-4">
						<div className="max-w-5xl mx-auto">
							<h2 className="text-2xl font-bold mb-6">Related News</h2>
							<div className="grid md:grid-cols-3 gap-6">
								{relatedNews.map((item) => (
									<a
										key={item.id}
										href={`/news/${item.slug}`}
										className="block bg-white shadow-sm hover:shadow-md transition rounded-xl overflow-hidden"
									>
										{item.image?.url && (
											<div className="relative aspect-[4/3]">
												<Image
													src={getMediaUrl(item.image)}
													alt={item.image.alternativeText || item.title}
													fill
													className="object-cover"
													sizes="(max-width: 768px) 100vw, 33vw"
												/>
											</div>
										)}
										<div className="p-4">
											<h3 className="text-lg font-semibold mb-2">{item.title}</h3>
											<p className="text-sm text-gray-500">
												{new Date(item.date).toLocaleDateString(locale, {
													year: "numeric",
													month: "short",
													day: "numeric"
												})}
											</p>
										</div>
									</a>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</Layout>
	)
}
