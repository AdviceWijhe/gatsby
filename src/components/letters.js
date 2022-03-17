import React, { useRef } from "react"
import useIntersection from "../hooks/useIntersection"

const Letters = props => {
  const ref = useRef() // Trigger as soon as the element becomes visible
  const inViewport = useIntersection(ref, "-250px 0px") // Trigger if 200px is visible from the element

  

  return (
    <span
      ref={ref}
      key={props.count}
      className={`hero__letter text-outlined animate ${
        inViewport && `isVisible`
      }`}
    >
      {props.letter}
    </span>
  )
}

export default Letters
