import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"
import "./case.scss"
// import Navigation from "../Navigation/Navigation"

const CaseItem = props => {
  var image =
    props.item.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData
  return (
    <div key={props.item.title} className="slideshow__item--case">
      <div className="slideshow__item--case--inner">
        <GatsbyImage image={image} alt="image" />
        <div className="slideshow__item--case--inner__content">
          <div className="slideshow__item--case--inner__content--title">
            {props.item.title}
          </div>
          <div className="slideshow__item--case--inner__content--subtitle">
            <p>{props.item.posttype_cases.subtitle}</p>
          </div>
          <AniLink to={props.item.uri}><i className="fal fa-long-arrow-right"></i></AniLink>
        </div>
      </div>
    </div>
  )
}

export default CaseItem
