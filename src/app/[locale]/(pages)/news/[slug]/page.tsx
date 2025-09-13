// /src/app/[locale]/(pages)/news/[slug]/page.tsx
import { notFound } from "next/navigation"
import Image from "next/image"
import fetchData from "@/utils/api"
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
	params: { slug: string; locale: string }
}

export const revalidate = 60 // ISR every 60 seconds

export async function generateStaticParams() {
	const res = await fetchData({ route: "news?fields=slug&pagination[limit]=100" })
	return res?.data?.map((item: any) => ({ slug: item.slug })) || []
}

export default async function NewsDetailPage({ params }: Props) {
	const { slug, locale } = await params

	const detailRes = await fetchData({
		route: `news?filters[slug][$eq]=${slug}&populate=image`
	})

	const news: NewsItem | undefined = detailRes?.data?.[0]
	if (!news) return notFound()

	const relatedRes = await fetchData({
		route: `news?filters[slug][$ne]=${slug}&pagination[limit]=3&sort[0]=date:desc&populate=image`
	})

	const [options] = await Promise.all([fetchData({ route: "option" })])

	const relatedNews: NewsItem[] = relatedRes?.data || []

	return (
		<Layout options={options?.data}>
			<div className="min-h-screen bg-white text-black">
				<div className="max-w-3xl mx-auto px-4 pt-20 pb-12">
					{news.image?.url && (
						<div className="mb-8 aspect-video relative rounded-xl overflow-hidden">
							<Image
								src={`${process.env.NEXT_PUBLIC_API_URL}${news.image.url}`}
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

					<div className="prose prose-lg prose-neutral max-w-none">
						{news.content.split("\n").map((p, i) => (
							<p key={i}>{p}</p>
						))}
					</div>
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
													src={`${process.env.NEXT_PUBLIC_API_URL}${item.image.url}`}
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

// import { notFound } from "next/navigation"
// import Image from "next/image"
// import fetchData from "@/utils/api" // adjust path as needed

// interface NewsItem {
// 	id: number
// 	title: string
// 	content: string
// 	date: string
// 	slug: string
// 	image?: {
// 		url: string
// 		alternativeText?: string
// 	}
// }

// interface NewsData {
// 	id: number
// 	title: string
// 	content: string
// 	date: string
// 	slug: string
// 	image?: {
// 		url: string
// 		alternativeText?: string
// 	}
// }

// interface Props {
// 	params: { slug: string; locale: string }
// }

// export default async function NewsDetailPage({ params }: Props) {
// 	const { slug } = params

// 	// Fetch single news item by slug
// 	const detailRes = await fetchData({
// 		route: `news?filters[slug][$eq]=${slug}&populate=image`
// 	})

// 	const newsData: NewsData | undefined = detailRes?.data?.[0]
// 	console.log("newsData: ", newsData)
// 	const news = newsData

// 	if (!news) return notFound()

// 	// Fetch related news
// 	const relatedRes = await fetchData({
// 		route: `news?filters[slug][$ne]=${slug}&pagination[limit]=3&sort[0]=date:desc&populate=image`
// 	})

// 	const relatedNews = (relatedRes?.data || []) as NewsItem[]

// 	return (
// 		<div className="min-h-screen bg-white text-black">
// 			<div className="max-w-3xl mx-auto px-4 pt-20 pb-12">
// 				{news.image?.url && (
// 					<div className="mb-8">
// 						<Image
// 							src={`${process.env.NEXT_PUBLIC_API_URL}${news.image.url}`}
// 							alt={news.image.alternativeText || news.title}
// 							width={1200}
// 							height={600}
// 							className="rounded-xl object-cover w-full h-auto"
// 						/>
// 					</div>
// 				)}

// 				<h1 className="text-4xl md:text-5xl font-bold mb-4">{news.title}</h1>

// 				<p className="text-sm text-gray-500 mb-8">
// 					{new Date(news.date).toLocaleDateString(params.locale, {
// 						year: "numeric",
// 						month: "long",
// 						day: "numeric"
// 					})}
// 				</p>

// 				<div className="prose prose-lg prose-neutral max-w-none">
// 					{news.content.split("\n").map((p, i) => (
// 						<p key={i}>{p}</p>
// 					))}
// 				</div>
// 			</div>

// 			{relatedNews.length > 0 && (
// 				<div className="bg-gray-100 py-12 px-4">
// 					<div className="max-w-5xl mx-auto">
// 						<h2 className="text-2xl font-bold mb-6">Related News</h2>
// 						<div className="grid md:grid-cols-3 gap-6">
// 							{relatedNews.map((attributes) => (
// 								<a
// 									key={attributes.id}
// 									href={`/news/${attributes.slug}`}
// 									className="block bg-white shadow-sm hover:shadow-md transition rounded-xl overflow-hidden"
// 								>
// 									{attributes.image?.url && (
// 										<Image
// 											src={`${process.env.NEXT_PUBLIC_API_URL}${attributes.image.url}`}
// 											alt={attributes.image.alternativeText || attributes.title}
// 											width={400}
// 											height={200}
// 											className="w-full h-48 object-cover"
// 										/>
// 									)}
// 									<div className="p-4">
// 										<h3 className="text-lg font-semibold mb-2">{attributes.title}</h3>
// 										<p className="text-sm text-gray-500">
// 											{new Date(attributes.date).toLocaleDateString(params.locale, {
// 												year: "numeric",
// 												month: "short",
// 												day: "numeric"
// 											})}
// 										</p>
// 									</div>
// 								</a>
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	)
// }
