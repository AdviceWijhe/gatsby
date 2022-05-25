// Import CSS
// import "./Marquee.scss"

import Marquee from "react-fast-marquee"
import React from "react"
import parse from "html-react-parser"

// import Navigation from "../Navigation/Navigation"


const MarqueeSlide = props => {
  return (
    <section className="marquee">
      <Marquee gradient="false" speed="300">
        {parse(props.text)}
      </Marquee>
    </section>
  )
}

export default MarqueeSlide
