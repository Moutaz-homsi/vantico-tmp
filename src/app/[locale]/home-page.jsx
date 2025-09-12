import AboutUs from "@/components/page-builder/blocks/AboutUs"
import ConsultationSection from "@/components/page-builder/blocks/consultation-section"
import EcosystemSection from "@/components/page-builder/blocks/ecosystem"
import FAQ from "@/components/page-builder/blocks/FAQ"
import GlobeSection from "@/components/page-builder/blocks/globe-section"
import HeroVideo from "@/components/page-builder/blocks/Hero-video"
import InvestWithPurpose from "@/components/page-builder/blocks/invest-with-purpose"
import NewsSection from "@/components/page-builder/blocks/news-section"
import PropertyTour from "@/components/page-builder/blocks/PropertyTour"
import TenantsSection from "@/components/page-builder/blocks/TenantsSection"
import Testimonials from "@/components/page-builder/blocks/Testimonials"
import VideoSection from "@/components/ui/video-section"
import { mockHomePageData } from "@/data/home-page-data"
import fetchData from "@/utils/api"
import { stringify } from "qs"
// import Hero from "@/components/page-builder/blocks/Hero"
// import InvestmentApproach from "@/components/page-builder/blocks/InvestmentApproach"
// import InvestorsSection from "@/components/page-builder/blocks/InvestorsSection"
// import MeetTheTeam from "@/components/page-builder/blocks/MeetTheTeam"
// import OurHistory from "@/components/page-builder/blocks/OurHistory"
// import Ready from "@/components/page-builder/blocks/Ready"
// import ROICalculator from "@/components/page-builder/blocks/ROICalculator"
// import StrategyAccordion from "@/components/page-builder/blocks/StrategyAccordion"
// import { investmentSteps } from "@/data/investmentData"
// import { fundingProgress, investmentDetails, investorStats } from "@/data/investorData"

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

export default async function HomePage() {
	const homePageData = await getHomePageData()
	// console.log(require("util").inspect(homePageData.tenants, true, 10, true))

	return (
		<main>
			<HeroVideo
				videoId={homePageData.video_id}
				calendlyUrl={homePageData.calendly_url}
				hero_video_url={homePageData.hero_video_url}
				subtitle=""
			/>
			<AboutUs logos={homePageData.logos} />

			{/* <StrategyAccordion
				heading="WHY VANTICO?"
				subheading="PRECISION-DRIVEN"
				title="INVESTMENT STRATEGY"
				items={strategyItems}
			/> */}

			<InvestWithPurpose />

			<GlobeSection/>

			<EcosystemSection slides={homePageData.ecosystem_sliders} />
			{/* <InvestorsSection stats={investorStats} fundingProgress={fundingProgress} investmentDetails={investmentDetails} /> */}

			<PropertyTour properties={homePageData.properties} />

			<TenantsSection tenants={homePageData.tenants} />

			{/* <ROICalculator /> */}

			{/* <Ready /> */}
			{/* <MeetTheTeam members={homePageData.team} /> */}

			{/* <InvestmentApproach steps={investmentSteps} /> */}

			<ConsultationSection calendlyUrl={homePageData.calendly_url} />
			{/* <Testimonials testimonials={homePageData.testimonials} /> */}

			{/* <NewsSection items={homePageData.news} /> */}
			{/* <FAQ items={homePageData.faq} /> */}
		</main>
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

	const [news, team, properties] = await Promise.all([
		fetchData({ route: "news?[populate]=*" }),
		fetchData({ route: "teams?[populate]=*&sort=rank:asc" }),
		fetchData({ route: "properties?[populate]=*&sort=rank:asc" })
	])

	return { ...homePageData, news: news.data, team: team.data, properties: properties.data }
}

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
