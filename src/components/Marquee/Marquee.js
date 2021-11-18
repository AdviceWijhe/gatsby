import React from "react"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Marquee.scss"

const Marquee = props => {
  return (
    <section className="marquee">
      <marquee loop="-1">{props.text}</marquee>
    </section>
  )
}

export default Marquee
