import { Container } from "@/components/layout"
import { Typography } from "@/components/ui"
import { Link } from "@/i18n/navigation"
import { useTranslations } from "next-intl"
import { use } from "react"

export default function Lang({ params, metadata }) {
	const t = useTranslations()
	const { locale } = use(params)

	const s = locale === "ar" ? "en" : "ar"
	return (
		<Container className="my-8 min-h-screen">
			<Typography variant="h3">Lang: {locale}</Typography>
			<Typography variant="h3">message: {t("welcome")}</Typography>

			<Link locale={s} href={`/lang/client`}>
				switch to {s}
			</Link>
		</Container>
	)
}
