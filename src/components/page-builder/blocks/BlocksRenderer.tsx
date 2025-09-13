"use client"

import { BlocksRenderer as StrapiBlocksRenderer } from "@strapi/blocks-react-renderer"
import Image from "next/image"
import React from "react"

import { Link } from "@/i18n/navigation"
import { getStrapiImageUrl } from "@/utils/strapi"

interface BlocksRendererProps {
	content: any
	className?: string
}

export function BlocksRenderer({ content, className = "max-w-none" }: BlocksRendererProps) {
	const modifiers = {
		bold: ({ children }: { children: any }) => <strong className="font-semibold">{children}</strong>,
		italic: ({ children }: { children: any }) => <em className="italic">{children}</em>,
		underline: ({ children }: { children: any }) => <u className="underline">{children}</u>,
		strikethrough: ({ children }: { children: any }) => <s className="line-through">{children}</s>,
		code: ({ children }: { children: any }) => (
			<code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">{children}</code>
		)
	}
	return (
		<div className={className}>
			<StrapiBlocksRenderer
				content={content}
				blocks={{
					// Paragraph block
					paragraph: ({ children }) => <p className="text-lg text-text-800 leading-7 mb-4">{children}</p>,

					// Heading blocks
					heading: ({ children, level }) => {
						const headingClasses = {
							1: "text-4xl font-bold mb-6 text-gray-900",
							2: "text-2xl leading-8 md:text-3xl md:leading-[2.375rem] font-semibold mb-4 md:mb-5 text-text-900",
							3: "text-xl leading-[1.875rem] md:text-2xl md:leading-8 font-semibold mb-3 md:mb-4 text-text-900",
							4: "text-lg leading-7 md:text-xl md:leading-[1.875rem] font-semibold mb-2 sm:mb-3 text-text-900",
							5: "text-lg font-medium mb-2 text-gray-900",
							6: "text-base font-medium mb-2 text-gray-900"
						}

						const className = headingClasses[level as keyof typeof headingClasses] || headingClasses[1]

						return React.createElement(`h${level}`, { className }, children)
					},

					// List blocks
					list: ({ children, format }) => {
						const listClasses =
							format === "ordered" ? "list-decimal list-inside mb-4 ps-4" : "list-disc list-inside mb-4 ps-4"

						const tagName = format === "ordered" ? "ol" : "ul"

						return React.createElement(tagName, { className: listClasses }, children)
					},

					"list-item": ({ children }) => <li className="text-lg text-text-800 leading-7 list-inside ">{children}</li>,

					// Quote block
					quote: ({ children }) => (
						<blockquote className="text-xl leading-[1.875rem] md:text-2xl md:leading-8 font-medium border-s-2 border-primary-500 ps-4 md:ps-5 py-2 text-text-900 mb-12">
							{children}
						</blockquote>
					),

					// Code block
					code: ({ children }) => (
						<pre className="bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto">
							<code className="text-sm font-mono text-gray-800">{children}</code>
						</pre>
					),

					// Image block
					image: ({ image }) => (
						<figure className="mb-10 md:mb-12">
							<Image
								src={getStrapiImageUrl(image.url)}
								alt={image.alternativeText || image.name || ""}
								className="w-full h-auto rounded-lg object-cover"
								width={720}
								height={480}
							/>
							{image.caption && (
								<figcaption className="text-sm text-gray-500 mt-2 text-center">{image.caption}</figcaption>
							)}
						</figure>
					),

					// Link
					link: ({ children, url }) => (
						<Link href={url} className="text-primary-600 !no-underline" target="_blank" rel="noopener noreferrer">
							{children}
						</Link>
					)
				}}
				modifiers={modifiers}
			/>
		</div>
	)
}
