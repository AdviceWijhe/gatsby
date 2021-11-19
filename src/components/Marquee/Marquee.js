import React, { useEffect, useRef } from "react"
import $ from "jquery"
import "jquery.marquee"
import parse from "html-react-parser"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Marquee.scss"

const Marquee = props => {
  const el = useRef()

  useEffect(function () {
    const $el = $(el.current)

    $el.marquee({
      duration: 5000,
      gap: 30,
      delayBeforeStart: 0,
      direction: "left",
      duplicated: true,
    })
  })

  return (
    <section className="marquee">
      <div className="marquee__slide" ref={el}>
        {parse(props.text)}
      </div>
    </section>
  )
}

export default Marquee
