// Import CSS
// import "./Switch.scss"

import React from "react"
import parse from "html-react-parser"

// import Navigation from "../Navigation/Navigation"


const Switch = props => {

  return (
    <section className="switch">
          <div className="switch__inner flex flex-col flex-lg-row items-stretch">
            
            <div className="switch__content w-full lg:w-2/3 xl:w-2/3 2xl:w-2/3 lg:pr-16 lg:py-8">
              {parse(props.data.content)}
            </div>
            {props.data.image &&
            <div className="switch__image w-full lg:w-1/3 xl:w-1/3 2xl:w-1/2" style={{backgroundImage: `url(${props.data?.image?.localFile.childImageSharp.gatsbyImageData.images.fallback.src})`}}>
              
            </div>
            }
          </div>
        </section>
  )
}

export default Switch
