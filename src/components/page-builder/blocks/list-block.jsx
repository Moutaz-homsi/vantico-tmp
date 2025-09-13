"use client"
import { Typography, Image } from "@/components/ui"
import React from "react"

export default function ListBlock({ title, description, items }) {
	return (
		<section>
			<Typography variant="h2" className="text-2xl font-bold mb-2">
				{title}
			</Typography>
			<Typography className="text-base text-gray-600 mb-4">{description}</Typography>

			<div className="grid grid-cols-3 gap-4">
				{items?.length > 0
					? items?.map((item, index) => (
							<div key={index} className="p-4 border rounded shadow-sm">
								<Typography variant="h6" className="text-lg font-semibold">
									{item.title}
								</Typography>
								<Typography className="text-sm text-gray-600">{item.description}</Typography>
								{item.image && <Image src={"http://localhost:1337" + item.image.url} width={200} height={200} />}
							</div>
					  ))
					: null}
			</div>
		</section>
	)
}
