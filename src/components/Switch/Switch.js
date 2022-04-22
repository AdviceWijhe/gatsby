// Import CSS
import "./Switch.scss"

import React from "react"
import parse from "html-react-parser"

// import Navigation from "../Navigation/Navigation"


const Switch = props => {

  return (
    <section className="switch">
          <div className="switch__inner flex flex-col-reverse lg:flex-row-reverse items-stretch">
            <div className="switch__image w-full lg:w-1/2 xl:w-1/3 2xl:w-1/2" style={{backgroundImage: `url(${props.data?.image?.localFile.childImageSharp.gatsbyImageData.images.fallback.src})`}}>
              
            </div>
            <div className="switch__content w-full lg:w-1/2 xl:w-2/3 2xl:w-1/2 lg:pr-16 lg:py-8">
              {parse(props.data.content)}
            </div>
          </div>
        </section>
  )
}

export default Switch
