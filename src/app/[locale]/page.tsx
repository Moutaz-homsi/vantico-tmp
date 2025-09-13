import { stringify } from "qs"
import fetchData from "@/utils/api"
import Home from "@/components/pages/home"
import { notFound } from "next/navigation"

export const revalidate = 3600 // Revalidate every hour (ISR)

export async function generateStaticParams() {
	return [{ locale: "en" }, { locale: "ar" }]
}

async function getHomePageData(locale: string) {
	const query = stringify({
		populate: [
			"testimonials.avatar",
			"history.image",
			"faq",
			"logos.image",
			"tenants.first_row_images",
			"tenants.second_row_images",
			"tenants.third_row_images",
			"ecosystem_sliders.first_slider.image",
			"ecosystem_sliders.second_slider.image",
			"ecosystem_sliders.third_slider.image"
		],
		locale
	})

	try {
		const [homeResponse, news, team, properties, option] = await Promise.all([
			fetchData({ route: `homepage?${query}` }),
			fetchData({ route: `news?populate=*&locale=${locale}` }),
			fetchData({ route: `teams?populate=*&sort=rank:asc&locale=${locale}` }),
			fetchData({ route: `properties?populate=*&sort=rank:asc&locale=${locale}` }),
			fetchData({ route: `option?locale=${locale}` })
		])

		return {
			homeData: homeResponse.data,
			news: news.data,
			team: team.data,
			properties: properties.data,
			options: option.data
		}
	} catch (error) {
		console.error("Error fetching data:", error)
		throw error
	}
}

export default async function HomePage({ params }: { params: { locale: string } }) {
	const { locale } = await params
	if (!["en", "ar"].includes(locale)) {
		notFound()
	}

	const pageData = await getHomePageData(locale)

	return <Home {...pageData} />
}
