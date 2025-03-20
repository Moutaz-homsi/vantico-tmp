import AccordionWrapper from "./wrappers/accordion-wrapper"

export default function JsonPreview({ title, object }) {
  if (!process.env.NODE_ENV) return null

  return (
    <div>
      <AccordionWrapper parent={title}>
        <pre
          style={{
            direction: "ltr",
            textAlign: "left",
            overflow: "auto",
            background: "#292d3d",
            color: "white",
            borderRadius: 12,
            padding: 8,
          }}
          dir="ltr"
        >
          {JSON.stringify(object, null, 4)}
        </pre>
      </AccordionWrapper>
    </div>
  )
}
