import Layout from "@/components/layout"
import AboutUs from "@/components/page-builder/blocks/AboutUs"
import HeroVideo from "@/components/page-builder/blocks/Hero-video"
import PropertyTour, { Property } from "@/components/page-builder/blocks/PropertyTour"
import EcosystemSection, { Ecosystem } from "@/components/page-builder/blocks/ecosystem"
import GlobeSection from "@/components/page-builder/blocks/globe-section"
import OurPhilosophy from "@/components/page-builder/blocks/OurPhilosophy"
import TenantsSection, { Tenant } from "@/components/page-builder/blocks/TenantsSection"
import InvestWithPurpose from "@/components/page-builder/blocks/invest-with-purpose"
import ConsultationSection from "@/components/page-builder/blocks/consultation-section"
import StrategicPartnerships from "@/components/page-builder/blocks/StrategicPartnerships"

interface HomeProps {
	homeData: {
		video_id: string
		calendly_url: string
		hero_video_url: string
		founder_image: string
		founder_philosophy: string
		ecosystem_sliders: {
			first_slider: Ecosystem[]
			second_slider: Ecosystem[]
			third_slider: Ecosystem[]
		}
		tenants: {
			first_row_images: Tenant[]
			second_row_images: Tenant[]
			third_row_images: Tenant[]
		}
	}
	properties: Property[]
	options: any
}

export default async function Home({ homeData, properties, options }: HomeProps) {
	return (
		<Layout options={options}>
			<HeroVideo videoId={homeData.video_id} hero_video_url={homeData.hero_video_url} subtitle="" />
			<OurPhilosophy founder_image={homeData.founder_image} founder_philosophy={homeData.founder_philosophy} />
			<AboutUs />

			<InvestWithPurpose />

			<GlobeSection />

			<StrategicPartnerships />

			<EcosystemSection slides={homeData.ecosystem_sliders} />

			<PropertyTour properties={properties} />

			<TenantsSection tenants={homeData.tenants} />

			<ConsultationSection calendlyUrl={homeData.calendly_url} />
		</Layout>
	)
}
