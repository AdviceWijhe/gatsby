import React from "react"
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
            <h3 className="text-l">Onze cultuur</h3>
            <h2 className="text-2xl font-bold">
              Club van creatieve specialisten.
            </h2>
            <a href="#" className="mt-5 block">
              Lees meer
            </a>
          </div>
        </div>
        <GatsbyImage
          image={props.image}
          alt="image"
          style={{ marginBottom: 50 }}
          className="CallToAction__image"
        />
      </div>
    </section>
  )
}

export default CallToAction
