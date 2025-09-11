import { Typography } from "@/components/ui"
import React from "react"

export default function TextContent({ title, content }) {
    return (
        <section>
            <Typography variant="h2" className="text-2xl font-bold mb-2">
                {title}
            </Typography>

            <div dangerouslySetInnerHTML={{ __html: content }} />
            
        </section>
    )
}
