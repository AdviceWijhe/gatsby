import React, { useEffect, useRef } from "react"
import parse from "html-react-parser"
import Marquee from "react-fast-marquee"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Marquee.scss"

const MarqueeSlide = props => {
  return (
    <section className="marquee">
      <Marquee loop="1" gradient="false" speed="150">
        {parse(props.text)}
      </Marquee>
    </section>
  )
}

export default MarqueeSlide
