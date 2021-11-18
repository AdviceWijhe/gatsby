import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
// import Navigation from "../Navigation/Navigation"

const CaseItem = props => {
  console.log(props)
  return (
    <div key={props.item.title} className="slideshow__item">
      <div className="slideshow__item--inner">
        <GatsbyImage
          image={
            props.item.featuredImage?.node?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
          alt="image"
        />
        {props.item.title}
      </div>
    </div>
  )
}

export default CaseItem