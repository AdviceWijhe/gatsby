// Import CSS
// import "./Switch.scss"

import React from "react"
import parse from "html-react-parser"
import Logo from "../../images/onderwijs.svg"

// import Navigation from "../Navigation/Navigation"


const Switch = props => {
  console.log(props.data);

  return (
    <section className="switch">
      <div className="switch__inner flex flex-col lg:flex-row items-stretch">

        <div className="switch__content w-full lg:w-2/3 xl:w-2/3 2xl:w-2/3 lg:pr-16 lg:py-8">
          {parse(props.data.content)}
        </div>

        {props.data.button &&
          <div className=" w-full lg:w-1/3 2xl:w-1/3 lg:flex lg:justify-end pt-6 lg:pt-0"><a href="https://advice.nl/cases/" target="_blank">{<img src={Logo} style={{ height: `300px` }} />}</a></div>
        }

        {props.data.image &&
          <div className="switch__image w-full lg:w-1/3 xl:w-1/3 2xl:w-1/2" style={{ backgroundImage: `url(${props.data?.image?.localFile.childImageSharp.gatsbyImageData.images.fallback.src})` }}>

          </div>
        }
      </div>
    </section>
  )
}

export default Switch
