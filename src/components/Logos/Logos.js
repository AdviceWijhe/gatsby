import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Logos.scss"

const Logos = props => {
  const images = props.images;

  return (
    <section className="logos py-8 lg:py-16">
      <div className="container container-line">
        <div className="logos__content">
          <h2>{props.title}</h2>
          {parse(props.content)}
        </div>
        <div className="logos__images flex flex-wrap mt-8">
          {images &&
            images.map(image => {
              return (
              <div className="w-1/2 lg:w-1/5">
                <GatsbyImage
                  image={image.localFile.childImageSharp.gatsbyImageData}
                  alt="image"
                  className="logos__image"
                />
              </div>
              )
            })
          }
        </div>
        
      </div>
    </section>
  )
}

export default Logos
