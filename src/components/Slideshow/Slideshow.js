import React from "react"
// import Navigation from "../Navigation/Navigation"
import Flickity from "react-flickity-component"
import CaseItem from "./views/case"

// Import CSS
import "./Slideshow.scss"

const Slideshow = props => {
  const flickityOptions = {
    initialIndex: 3,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    contain: true,
  }
  return (
    <section className="slideshow">
      <div className="md:container">
        <Flickity
          className={"slideshow"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {props.items &&
            props.items.map(post => {
              return <CaseItem item={post} />
            })}{" "}
        </Flickity>
      </div>
    </section>
  )
}

export default Slideshow
