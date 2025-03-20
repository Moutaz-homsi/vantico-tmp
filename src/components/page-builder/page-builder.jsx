import React from "react"
import CtaBlock from "./blocks/cta-block"

export default function PageBuilder({ data }) {
  return (
    <div>
      <div style={{}} className="flex flex-col gap-8">
        {data?.blocks?.length > 0 &&
          data?.blocks.map(({ __typename, ...rest }, index) => {
            switch (__typename) {
              case "cta":
                return <CtaBlock key={index} {...rest} />
              default:
                return <p>Unrecognized component</p>
            }
          })}
      </div>
    </div>
  )
}
