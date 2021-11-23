import React, { useRef, useState, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import "../../components/Slideshow/views/case.scss"
// import Navigation from "../Navigation/Navigation"

const CaseItem = props => {
  function useOnScreen(ref) {
    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )

    useEffect(() => {
      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect()
      }
    }, [])

    return isIntersecting
  }
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  return (
    <div
      ref={ref}
      key={props.item.title}
      className={`slideshow__item--case mb-8 animate ${
        isVisible && `isVisible`
      }`}
    >
      <div className="block"></div>
      <div className={`slideshow__item--case--inner`}>
        <GatsbyImage
          image={
            props.item.featuredImage?.node?.localFile?.childImageSharp
              ?.gatsbyImageData
          }
          alt="image"
        />
        <div className="slideshow__item--case--inner__content">
          <div className="slideshow__item--case--inner__content--title">
            {props.item.title}
          </div>
          <div className="slideshow__item--case--inner__content--subtitle">
            <p>hier komt nog een subtitle</p>
          </div>
          <i className="fal fa-long-arrow-right"></i>
        </div>
      </div>
    </div>
  )
}

export default CaseItem
