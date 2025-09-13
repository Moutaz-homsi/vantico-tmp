import { Container } from "@/components/layout"
import { NewsCard } from "@/components/ui/news/card"
import { NewsCard_v2 } from "@/components/ui/news/card-v2"
import Title from "@/components/ui/title"
import { INewsItem } from "@/types/news.interface"

export default function NewsBlock({ news, title }: { news: INewsItem[]; title: string }) {
	return (
		<Container fluid pattern="hidden">
			<div className="mx-auto w-full max-w-[1526px]">
				{/* <div className="mx-auto w-full max-w-7xl"> */}
				{title ? <Title className="mb-8">{title}</Title> : null}
				{/* </div> */}
				{news?.length > 0 && (
					// lg:grid-cols-3
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
						{news.map((item) => (
							<NewsCard_v2 key={item.id} item={item} />
						))}
					</div>
				)}
			</div>
		</Container>
	)
}
