import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui"
import { MapPin } from "lucide-react"
import Image from "next/image"

export default function ProjectItem({ name, description = "", location = "", roi = "30%", image }) {
	return (
		<Card className="overflow-hidden">
			<div className="relative h-48">
				{image && <Image src={"http://localhost:1337" + image.url} alt={name} fill className="object-cover" />}
			</div>
			<CardHeader>
				<CardTitle>{name}</CardTitle>
				<CardDescription className="flex items-center gap-1">
					<MapPin className="h-4 w-4" /> {location}
				</CardDescription>
			</CardHeader>
			<CardContent>
				{/* <p className="text-muted-foreground mb-2">{description}</p> */}
				<div className="text-sm font-medium text-primary">ROI: {roi}%</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">View Details</Button>
				<Button>Invest Now</Button>
			</CardFooter>
		</Card>
	)
}
