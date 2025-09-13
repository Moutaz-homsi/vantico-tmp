import { stringify } from "qs"
import fetchData from "@/utils/api"
import Layout from "@/components/layout"
import { mockHomePageData } from "@/data/home-page-data"
import AboutUs from "@/components/page-builder/blocks/AboutUs"
import HeroVideo from "@/components/page-builder/blocks/Hero-video"
import PropertyTour from "@/components/page-builder/blocks/PropertyTour"
import EcosystemSection from "@/components/page-builder/blocks/ecosystem"
import GlobeSection from "@/components/page-builder/blocks/globe-section"
import OurPhilosophy from "@/components/page-builder/blocks/OurPhilosophy"
import TenantsSection from "@/components/page-builder/blocks/TenantsSection"
import InvestWithPurpose from "@/components/page-builder/blocks/invest-with-purpose"
import ConsultationSection from "@/components/page-builder/blocks/consultation-section"
import StrategicPartnerships from "@/components/page-builder/blocks/StrategicPartnerships"

export default async function HomePage({ params }) {
	const homePageData = await getHomePageData()

	return (
		<Layout options={homePageData.options}>
			<HeroVideo
				videoSrc={homePageData?.hero_video_url}
				// videoId={homePageData.video_id}
				calendlyUrl={homePageData.calendly_url}
				hero_video_url={homePageData.hero_video_url}
				subtitle=""
			/>
			<OurPhilosophy founder_image={homePageData.founder_image} founder_philosophy={homePageData.founder_philosophy} />
			<AboutUs logos={homePageData.logos} />

			<InvestWithPurpose />

			<GlobeSection />

			<StrategicPartnerships />

			<EcosystemSection slides={homePageData.ecosystem_sliders} />

			<PropertyTour properties={homePageData.properties} />

			<TenantsSection tenants={homePageData.tenants} />

			<ConsultationSection calendlyUrl={homePageData.calendly_url} />
		</Layout>
	)
}

async function getHomePageData() {
	const isDev = process.env.NODE_ENV === "development"

	let homePageData = isDev ? mockHomePageData : {}
	const query = stringify({
		populate: [
			"testimonials.avatar",
			"history.image",
			"faq",
			"logos.image",
			// TENANTS
			"tenants.first_row_images",
			"tenants.second_row_images",
			"tenants.third_row_images",
			"ecosystem_sliders.first_slider.image",
			"ecosystem_sliders.second_slider.image",
			"ecosystem_sliders.third_slider.image"
		]
	})

	try {
		const responseBody = await fetchData({
			route: "homepage?" + query,
			debug: true
		})

		if (responseBody.data) {
			homePageData = responseBody.data
		}
	} catch (error) {}

	const [news, team, properties, option] = await Promise.all([
		fetchData({ route: "news?[populate]=*" }),
		fetchData({ route: "teams?[populate]=*&sort=rank:asc" }),
		fetchData({ route: "properties?[populate]=*&sort=rank:asc" }),
		fetchData({ route: "option" })
	])

	return { ...homePageData, news: news.data, team: team.data, properties: properties.data, options: option.data }
}

export const historyItems = [
	{
		year: "2000",
		description:
			"Launched Triangle Family Dentistry and Carolina Orthodontics & Children's Dentistry in North Carolina with a vision to redefine patient care.",
		imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
		imageAlt: "Exterior of Triangle Family Dentistry building"
	},
	{
		year: "2010",
		description:
			"Expanded to 20 thriving locations, fueled by relentless dedication, data-driven strategy and operational excellence.",
		imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
		imageAlt: "Interior reception area of dental clinic"
	},
	{
		year: "2020",
		description:
			"Established as the premier dental healthcare provider in the Mid-Atlantic region with innovative treatment protocols and patient-first approach.",
		imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
		imageAlt: "Modern Triangle Family Dentistry facility"
	}
]

// const strategyItems = [
// 	{
// 		icon: "target",
// 		title: "Target Market and Strategy",
// 		content:
// 			"Focused on acquiring high-growth, dental-anchored properties across the Mid-Atlantic, our strategy capitalizes on stable, long-term leases that drive consistent returns."
// 	},
// 	{
// 		icon: "trendingUp",
// 		title: "Opportunistic Growth",
// 		content:
// 			"We identify and capitalize on emerging market opportunities, allowing us to achieve above-market returns through strategic timing and disciplined execution."
// 	},
// 	{
// 		icon: "users",
// 		title: "Proven Leadership Team",
// 		content:
// 			"Our executive team brings decades of combined experience in real estate investment, property management, and financial optimization across multiple market cycles."
// 	},
// 	{
// 		icon: "chartBar",
// 		title: "Compelling Financial Returns",
// 		content:
// 			"Our investment approach has consistently delivered strong risk-adjusted returns, with a focus on both current income and long-term capital appreciation."
// 	},
// 	{
// 		icon: "handshake",
// 		title: "Strategic Partnerships",
// 		content:
// 			"We leverage our extensive network of industry relationships to source exclusive deals and create value-added opportunities for our investment portfolio."
// 	},
// 	{
// 		icon: "fileText",
// 		title: "Risk Mitigation and Alignment",
// 		content:
// 			"Our rigorous due diligence process and conservative underwriting standards help protect investor capital while ensuring our interests remain aligned with our partners."
// 	}
// ]
