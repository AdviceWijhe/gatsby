import React, { useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import "../../components/Slideshow/views/case.scss"
import useIntersection from "../../hooks/useIntersection"
// import Navigation from "../Navigation/Navigation"

const CaseItem = props => {
  const ref = useRef() // Trigger as soon as the element becomes visible
  const inViewport = useIntersection(ref, "-200px") // Trigger if 200px is visible from the element

  if (inViewport) {
    console.log("in viewport:", ref.current)
  }
  return (
    <div
      ref={ref}
      key={props.item.title}
      className={`slideshow__item--case mb-8 animate ${
        inViewport && `isVisible`
      }`}
    >
      <div className="block"></div>
      <div className={`slideshow__item--case--inner`}>
        <GatsbyImage
          image={
            props.item.featuredImage?.node?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
          alt="image"
        />
        <div className="slideshow__item--case--inner__content">
          <div className="slideshow__item--case--inner__content--title">
            {props.item.title}
          </div>
          <div className="slideshow__item--case--inner__content--subtitle">
            <p>hier komt nog een subtitle</p>
          </div>
          <i className="fal fa-long-arrow-right"></i>
        </div>
      </div>
    </div>
  )
}

export default CaseItem
