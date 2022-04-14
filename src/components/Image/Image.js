// Import CSS
import "./Image.scss"

import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
// import Navigation from "../Navigation/Navigation"


const Image = props => {
  const image = props.image?.localFile?.childImageSharp?.gatsbyImageData

  return (
    <section className="Image">
        <GatsbyImage
          image={image}
          alt="image"
          className="Image__image lg:w-3/4"
        />
    </section>
  )
}

export default Image
