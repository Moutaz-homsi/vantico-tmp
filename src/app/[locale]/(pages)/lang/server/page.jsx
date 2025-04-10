import { Container } from "@/components/layout"
import { Typography } from "@/components/ui"
import { useTranslations } from "next-intl"
import { getTranslations } from "next-intl/server"
import Link from "next/link"
import React from "react"

export default async function Lang({ params, metadata }) {
	const { locale } = await params
	const t = await getTranslations({ locale })
	const s = locale === "ar" ? "en" : "ar"

	return (
		<Container className="my-8 min-h-screen">
			<Typography variant="h3">Lang: {locale}</Typography>
			<Typography variant="h3">message: {t("welcome")}</Typography>

			<Link href={`/${s}/lang/server`}>switch to {s}</Link>
		</Container>
	)
}
