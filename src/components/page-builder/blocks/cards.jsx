import { Container } from "@/components/layout"
import IconBlox from "@/components/ui/boxes/icon-box"

export default function Cards({ data }) {
	return (
		<Container>
			<div className="flex flex-wrap items-stretch justify-center gap-5">
				{data?.cards?.length > 0
					? data?.cards.map((item) => (
							<div key={item.id} className="flex-1 min-w-[250px]">
								<IconBlox {...item} />
							</div>
					  ))
					: null}
			</div>
		</Container>
	)
}
