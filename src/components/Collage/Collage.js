import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Collage.scss"

const Image = props => {
  const images = props.images;

  console.log(images)

  return (
    <section className="Collage">
      <div className={`grid grid-cols-1 lg:grid-cols-3`}>
        <div className={`small-images`}>
          <div className="w-full">
            <div className="ratio ratio--r1-1">
              <div className="ratio__content">
                <img className="ratio__image" src={images[1].localFile.childImageSharp.gatsbyImageData.images.fallback.src} />
              </div>
           </div>
          </div>
          <div className="w-full">
            <div className="ratio ratio--r1-1">
              <div className="ratio__content">
                <img className="ratio__image" src={images[2].localFile.childImageSharp.gatsbyImageData.images.fallback.src} />
              </div>
           </div>
          </div>
        </div>
        <div className={`lg:col-span-2 relative`}>
          <div className="collage__image-wrapper">
          <img className="collage__image" src={images[0].localFile.childImageSharp.gatsbyImageData.images.fallback.src} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Image
