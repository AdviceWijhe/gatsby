import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import "./kernwaarde.scss"
// import Navigation from "../Navigation/Navigation"

const KernItem = props => {
  return (
    <div key={props.item.title} className="slideshow__item--kernwaarde">
      <div className="slideshow__item--kernwaarde--inner">
        <div className="slideshow__item--kernwaarde--inner__content">
          <div className="slideshow__item--kernwaarde--inner__content--title">
            {props.item.title}
          </div>
          <div className="slideshow__item--kernwaarde--inner__content--subtitle">
            {parse(props.item.content)}
          </div>
          <i className="fal fa-long-arrow-right"></i>
        </div>
      </div>
    </div>
  )
}

export default KernItem
