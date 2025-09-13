import fetchData from "@/utils/api"
import MeetTheTeam from "@/components/page-builder/blocks/MeetTheTeam"
import Layout from "@/components/layout"

export default async function TeamPage({ options }) {
	const pageData = await getPageData()
	return (
		<Layout options={options}>
			<div>
				<MeetTheTeam members={pageData.team} />
			</div>
		</Layout>
	)
}

const getPageData = async () => {
	const res = await fetchData({ route: "teams?[populate]=*&sort=rank:asc" })
	const options = await fetchData({ route: "option" })
	return {
		team: res.data || [],
		options: options.data
	}
}
