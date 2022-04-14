import "../../components/Slideshow/views/case.scss"

import React, { useRef } from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"
import useIntersection from "../../hooks/useIntersection"

// import Navigation from "../Navigation/Navigation"

const CaseItem = props => {
  const ref = useRef() // Trigger as soon as the element becomes visible
  const inViewport = useIntersection(ref, "-50px") // Trigger if 200px is visible from the element

  let image =
    props.item.posttype_cases?.archiveimage?.localFile?.childImageSharp
      ?.gatsbyImageData
  return (
    <div
      ref={ref}
      key={props.item.title}
      className={`slideshow__item--case archive mb-5 lg:mb-0 animate ${
        inViewport && `isVisible`
      }`}
    >
      <div className={`slideshow__item--case--inner`}>
        <div className="block"></div>
        <GatsbyImage image={image} alt="image" />
        <div className="slideshow__item--case--inner__content">
          <div className="slideshow__item--case--inner__content--title">
            <AniLink paintDrip to={props.item.uri} className={`text-outline`}>{props.item.title}</AniLink>
          </div>
          <div className="slideshow__item--case--inner__content--subtitle">
            <p>{props.item.posttype_cases.subtitle}</p>
          </div>
          <AniLink paintDrip to={props.item.uri} className={`text-white`}>
            <img src={`/icons/Pijltje_white_Lang.svg`} className="arrow arrow-right" alt="Pijl wit lang" />
          </AniLink>
        </div>
      </div>
    </div>
  )
}

export default CaseItem
