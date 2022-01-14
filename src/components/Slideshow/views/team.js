import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import "./case.scss"
// import Navigation from "../Navigation/Navigation"

const TeamItem = props => {
  return (
    <div key={props.item.title} className="slideshow__item--team lg:p-3">
      <div className="slideshow__item--team--inner">
        <GatsbyImage
          image={
            props.item.featuredImage?.node?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
          alt="image"
        />
        <div className="slideshow__item--team--inner__content py-5">
          <div className="slideshow__item--team--inner__content--title font-bold text-xl">
            {props.item.title}
          </div>
          <div className="slideshow__item--team--inner__content--subtitle">
            <p>hier komt nog een subtitle</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamItem
