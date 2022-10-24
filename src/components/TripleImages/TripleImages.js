// Import CSS
// import "./TripleImages.scss"

import React from "react"

// import Navigation from "../Navigation/Navigation"


const tripleImages = props => {
  const images = props.images;


  return (
    <section className="TripleImages">
      <div className={`grid grid-cols-1 lg:grid-cols-3`}>
        <div className={`small-images`}>
          <div className="w-full">
            <div className="ratio ratio--r1-1">
              <div className="ratio__content">
                {images &&
                  <img className="ratio__image" src={images[0]?.localFile.url} alt={images[0]?.altText} />
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
                  <img className="ratio__image" src={images[1]?.localFile.url} alt={images[1]?.altText} />
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
                  <img className="ratio__image" src={images[2]?.localFile.url} alt={images[2]?.altText} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default tripleImages
