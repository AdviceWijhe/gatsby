import React from "react"

// Import CSS
import "./DoubleImages.scss"

const DoubleImages = props => {
  const images = props.images;


  if(images == null) {
    return false
  }

  return (
    <section className="DoubleImages pt-0">
      <div className={`grid grid-cols-1 lg:grid-cols-2`}>
        <div className={`small-images`}>
          <div className="w-full">
            <div className="ratio ratio--r1-1">
              <div className="ratio__content">
                {images &&
                <img className="ratio__image" src={images[0]?.localFile.childImageSharp.gatsbyImageData.images.fallback.src} alt={images[0]?.altText} />
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
                <img className="ratio__image" src={images[1]?.localFile.childImageSharp.gatsbyImageData.images.fallback.src} alt={images[1]?.altText} />
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
