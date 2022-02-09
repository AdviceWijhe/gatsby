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
            <p className="mb-0">{props.item.postType_Team.functie}</p>
            <p><span><a href={`${props.item.postType_Team.linkedin}`} className={`text-dark`} aria-label="Linkedin"><i className="fab fa-linkedin-in"></i></a></span><span className={`ml-3`}><a href={`mailto:${props.item.postType_Team.email}`} className={`text-dark`} aria-label="mailto"><i className="fal fa-envelope"></i></a></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamItem
