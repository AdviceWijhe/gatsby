import React from "react"
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Switch.scss"

const Switch = props => {
  const image = props.image?.localFile?.childImageSharp?.gatsbyImageData

  return (
    <section className="switch">
          <div className="switch__inner flex flex-col lg:flex-row-reverse items-stretch">
            <div className="switch__image w-full lg:w-1/3" style={{backgroundImage: `url(${props.data.image.localFile.childImageSharp.gatsbyImageData.images.fallback.src})`}}>
              
            </div>
            <div className="switch__content w-full lg:w-2/3 lg:pr-16 lg:py-16">
              {parse(props.data.content)}
            </div>
          </div>
        </section>
  )
}

export default Switch
