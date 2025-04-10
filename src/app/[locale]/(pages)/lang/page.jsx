import React from "react"

export default async function Lang({ params }) {
	const { locale } = await params
	return <div>Lang: {locale}</div>
}
