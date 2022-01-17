import React, { useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import useIntersection from "../../hooks/useIntersection"
import { Link } from "gatsby"
// import Navigation from "../Navigation/Navigation"

const VacatureItem = props => {
  const ref = useRef() // Trigger as soon as the element becomes visible
  const inViewport = useIntersection(ref, "-50px") // Trigger if 200px is visible from the element

  if (inViewport) {
    console.log("in viewport:", ref.current)
  }

  let image =
    props.item.featuredImage?.node?.localFile?.childImageSharp
      ?.gatsbyImageData
  return (
    <div
      ref={ref}
      key={props.item.id}
      className={`vacatureItem mb-8 animate ${
        inViewport && `isVisible`
      }`}
    >
      <div className={`vacatureItem--inner`}>
        <div className="block"></div>
        <GatsbyImage image={image} alt="image" />
        <div className="vacatureItem--inner__content relative">
          <div className="vacatureItem--inner__content--title mt-5">
            <h2 className={`text-xl lg:text-3xl font-weight-bold text-outlined`}>{props.item.title}</h2>
          </div>
          <Link to={props.item.uri} className={`triangle triangle-rotated`}><i className="fal fa-long-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default VacatureItem
