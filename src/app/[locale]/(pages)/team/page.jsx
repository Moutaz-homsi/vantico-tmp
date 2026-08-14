import { getOptions, getTeams } from "@/lib/cms"
import MeetTheTeam from "@/components/page-builder/blocks/MeetTheTeam"
import Layout from "@/components/layout"

export default async function TeamPage() {
	const [team, options] = await Promise.all([getTeams(), getOptions()])

	return (
		<Layout options={options}>
			<div>
				<MeetTheTeam members={team} />
			</div>
		</Layout>
	)
}

export const revalidate = 60
