import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import InViewMonitor from "react-inview-monitor"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Collage.scss"
import 'animate.css/animate.css';

const Image = props => {
  const images = props.images;

  console.log(images)

  return (
    <section className="Collage pt-0">
      <div className={`grid grid-cols-2 lg:grid-cols-3`}>
        <div className={`small-images grid grid-cols-2 lg:block col-span-2 lg:col-span-1`}>
          <div className="w-full">
            <InViewMonitor
                classNameNotInView='vis-hidden'
                classNameInView='animate__animated animate__fadeInUp animate__fast'
              >
            <div className="ratio ratio--r1-1">
              <div className="ratio__content">
                {images &&
                <img className="ratio__image" alt="" src={images[1]?.localFile.childImageSharp.gatsbyImageData.images.fallback.src} />
                }
              </div>
           </div>
           </InViewMonitor>
          </div>
          <div className="w-full">
            <InViewMonitor
                classNameNotInView='vis-hidden'
                classNameInView='animate__animated animate__fadeInUp animate__fast'
              >
            <div className="ratio ratio--r1-1">
              <div className="ratio__content">
                {images &&
                <img className="ratio__image" src={images[2]?.localFile.childImageSharp.gatsbyImageData.images.fallback.src} />
                }
              </div>
           </div>
           </InViewMonitor>
          </div>
        </div>
        <div className={`col-span-2 relative`}>
          <InViewMonitor
                classNameNotInView='vis-hidden'
                classNameInView='animate__animated animate__fadeInRight animate__fast'
              >
          <div className="collage__image-wrapper">
            {images &&
          <img className="collage__image" src={images[0]?.localFile.childImageSharp.gatsbyImageData.images.fallback.src} />
            }
          </div>
          </InViewMonitor>
        </div>
      </div>
    </section>
  )
}

export default Image
