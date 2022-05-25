// Import CSS
// import "./Logos.scss"

import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import parse from "html-react-parser"
// import Navigation from "../Navigation/Navigation"


const Logos = props => {
  const images = props.images;

  return (
    <section className="logos">
      <div className="container container-line">
        <div className="logos__content lg:w-2/3">
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
