import MeetTheTeam from "@/components/page-builder/blocks/MeetTheTeam"
import fetchData from "@/utils/api"
import React from "react"

export default async function page() {
	const pageData = await getPageData()
	return (
		<div>
			<MeetTheTeam members={pageData.team} />
		</div>
	)
}

const getPageData = async () => {
	const res = await fetchData({ route: "teams?[populate]=*&sort=rank:asc" })
	return {
		team: res.data || []
	}
}
