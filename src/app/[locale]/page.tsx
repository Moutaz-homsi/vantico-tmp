import Home from "@/components/pages/home"
import { notFound } from "next/navigation"
import { getHomepage, getOptions, getProperties } from "@/lib/cms"

export const revalidate = 60 // Revalidate every hour (ISR)

export async function generateStaticParams() {
	return [{ locale: "en" }, { locale: "ar" }]
}

// The Home component renders the philosophy, ecosystem, property tour and
// tenant sections; it has no news section, so news is not fetched here.
async function getHomePageData() {
	const [homeData, properties, options] = await Promise.all([getHomepage(), getProperties(), getOptions()])

	return { homeData, properties, options }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params
	if (!["en", "ar"].includes(locale)) {
		notFound()
	}

	const { homeData, properties, options } = await getHomePageData()

	// The homepage singleton is required; without it the hero and every section
	// below it would render empty.
	if (!homeData) {
		notFound()
	}

	return <Home homeData={homeData} properties={properties} options={options} />
}
