// import "./case.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

// import Navigation from "../Navigation/Navigation"

const CaseItem = props => {
  var image =
    props.item.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData
  return (
    <div key={props.item.title} className="slideshow__item--case">
       <div className={`slideshow__item--case--inner`}>
        <div className="block"></div>
        <GatsbyImage image={image} alt="image" />
        <div className="slideshow__item--case--inner__content">
          <div className="slideshow__item--case--inner__content--title">
            <AniLink cover bg="#00f" duration={2} to={props.item.uri} className={`text-outline`}>{props.item.title}</AniLink>
          </div>
          <div className="slideshow__item--case--inner__content--subtitle">
            <p>{props.item.posttype_cases.subtitle}</p>
          </div>
          <AniLink cover bg="#00f" duration={2} to={props.item.uri} className={`text-white`}>
            <img src={`/icons/Pijltje_white_Lang.svg`} className="arrow arrow-right" alt="Pijl wit lang" />
          </AniLink>
        </div>
      </div>
    </div>
  )
}

export default CaseItem
