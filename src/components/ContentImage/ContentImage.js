import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./ContentImage.scss"

const ContentImage = props => {
  const image = props.settings.image?.localFile?.childImageSharp?.gatsbyImageData

  return (
    <section className="contentimage">
      <div className="container container-line">
        <div className={`contentimage-title text-2xl font-bold mb-5`}>{props.settings.title}</div>
        <div className="mb-10">{props.settings.content}</div>
        <GatsbyImage
          image={image}
          alt="image"
          style={{ marginBottom: 50 }}
          className="contentimage-image"
        />
      </div>
    </section>
  )
}

export default ContentImage