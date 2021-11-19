import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./CallToAction.scss"

const CallToAction = props => {
  return (
    <section className="CallToAction">
      <div className="container">
        <div className="CallToAction__title">
          <div className="CallToAction__title--inner bg-primary pb-8 text-white">
            <h3 className="text-l">{props.subtitle}</h3>
            <h2 className="text-2xl font-bold">{props.title}</h2>
            <Link to={props.link.url} className="mt-5 block">
              {props.link.title}
            </Link>
          </div>
        </div>
        <GatsbyImage
          image={props.image}
          alt="image"
          className="CallToAction__image"
        />
      </div>
    </section>
  )
}

export default CallToAction
