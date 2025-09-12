export default function Wysiwyg({ data, className = "" }: { data: any; className?: string }) {
	return <div className={`wysiwyg ${className}`} {...(data ? { dangerouslySetInnerHTML: { __html: data } } : {})} />
}
