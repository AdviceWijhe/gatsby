import React, { useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import useIntersection from "../../hooks/useIntersection"
import { Link } from "gatsby"
// import Navigation from "../Navigation/Navigation"

const BlogItem = props => {
  const ref = useRef() // Trigger as soon as the element becomes visible
  const inViewport = useIntersection(ref, "-50px") // Trigger if 200px is visible from the element

  if (inViewport) {
    console.log("in viewport:", ref.current)
  }

  let image =
    props.item.posttype_cases?.archiveimage?.localFile?.childImageSharp
      ?.gatsbyImageData
  return (
    <div
      ref={ref}
      key={props.item.title}
      className={`blogItem mb-8 animate ${
        inViewport && `isVisible`
      }`}
    >
      <div className={`blogItem--inner`}>
        <div className="block"></div>
        <GatsbyImage image={image} alt="image" />
        <div className="blogItem--inner__content">
          <div className="blogItem--inner__content--title">
            {props.item.title}
          </div>
          <div className="blogItem--inner__content--subtitle">
            <p>hier komt nog een subtitle</p>
          </div>
          <Link to={props.item.uri}><i className="fal fa-long-arrow-right"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
