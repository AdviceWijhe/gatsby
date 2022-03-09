import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./CallToAction.scss"

const CallToAction = props => {
  return (
    <section className="CallToAction">
      <div className="container flex items-start flex-col-reverse lg:flex-row-reverse">
        <GatsbyImage
          image={props.image}
          alt="image"
          className="CallToAction__image lg:w-2/3 lg:mt-6"
        />

        <div className="CallToAction__title lg:w-3/4 bg-primary pb-10 lg:pb-0">
          <div className="CallToAction__title--inner p-10 lg:p-20 text-white">
            <h3 className="text-xl lg:text-2xl font-medium">{props.subtitle}</h3>
            <h2 className="text-3xl lg:text-6xl font-extrabold">{props.title}</h2>
            <AniLink paintDrip to={props.link.url} className="mt-5 block text-white">
              {props.link.title} <i className="fal fa-lg ml-3 fa-long-arrow-right"></i>
            </AniLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
