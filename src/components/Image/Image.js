import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Image.scss"

const Image = props => {
  const image = props.image.image.localFile.childImageSharp.gatsbyImageData

  return (
    <section className="Image">
        <GatsbyImage
          image={image}
          alt="image"
          className="Image__image"
        />
    </section>
  )
}

export default Image
