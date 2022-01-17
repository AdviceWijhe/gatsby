import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./CallToAction.scss"

const CallToAction = props => {
  return (
    <section className="CallToAction">
      <div className="container lg:flex">
        <div className="CallToAction__title lg:w-2/4">
          <div className="CallToAction__title--inner bg-primary p-8 lg:p-20 text-white">
            <h3 className="text-l lg:text-xl">{props.subtitle}</h3>
            <h2 className="text-2xl lg:text-5xl font-bold">{props.title}</h2>
            <Link to={props.link.url} className="mt-5 block">
              {props.link.title} <i class="fal fa-lg ml-3 fa-long-arrow-right"></i>
            </Link>
          </div>
        </div>
        <GatsbyImage
          image={props.image}
          alt="image"
          className="CallToAction__image lg:w-2/3 lg:mt-6"
        />
      </div>
    </section>
  )
}

export default CallToAction
