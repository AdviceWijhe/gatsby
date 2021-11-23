import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import "./case.scss"
// import Navigation from "../Navigation/Navigation"

const CaseItem = props => {
  var image =
    props.item.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData

  console.log(image)
  return (
    <div key={props.item.title} className="slideshow__item--case">
      <div className="slideshow__item--case--inner">
        <GatsbyImage image={image} alt="image" />
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
