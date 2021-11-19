import React from "react"
import parse from "html-react-parser"
import Marquee from "react-fast-marquee"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Marquee.scss"

const MarqueeSlide = props => {
  return (
    <section className="marquee">
      <Marquee gradient="false" speed="100">
        {parse(props.text)}
      </Marquee>
    </section>
  )
}

export default MarqueeSlide
