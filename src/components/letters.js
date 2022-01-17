import React, { useRef } from "react"
import useIntersection from "../hooks/useIntersection"
// import Navigation from "../Navigation/Navigation"

const Letters = props => {
  const ref = useRef() // Trigger as soon as the element becomes visible
  const inViewport = useIntersection(ref, "-100px") // Trigger if 200px is visible from the element

  return (
    <span
      ref={ref}
      key={props.count}
      className={`hero__letter animate ${
        inViewport && `isVisible`
      }`}
    >
      {props.letter}
    </span>
  )
}

export default Letters
