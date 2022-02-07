import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./DoubleImages.scss"

const DoubleImages = props => {
  const images = props.images;

  console.log(images)

  if(images == null) {
    return false
  }

  return (
    <section className="DoubleImages">
      <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        <div className={`small-images`}>
          <div className="w-full">
            <div className="ratio ratio--r1-1">
              <div className="ratio__content">
                {images &&
                <img className="ratio__image" src={images[0]?.localFile.childImageSharp.gatsbyImageData.images.fallback.src} />
                }
              </div>
           </div>
          </div>
        </div>
        <div className={`small-images`}>
          <div className="w-full">
            <div className="ratio ratio--r1-1">
              <div className="ratio__content">
                {images &&
                <img className="ratio__image" src={images[1]?.localFile.childImageSharp.gatsbyImageData.images.fallback.src} />
}
              </div>
           </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoubleImages
