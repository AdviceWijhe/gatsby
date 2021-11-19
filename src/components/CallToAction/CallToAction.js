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

        <div className="CallToAction__content">
          <h2 className="text-2xl font-bold mb-4">Samen aan de slag?</h2>
          <p>
            Heb je een project of een samenwerking in gedachten? Of wil jij aan
            de slag met je merk? Laat dan van je horen!
          </p>
          <a href="#" className="mt-5 block text-secondary">
            Bellen
          </a>
          <a href="#" className="mt-5 block text-secondary">
            Mail
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
