import React from "react"
import parse from "html-react-parser"
import "./kernwaarde.scss"
// import Navigation from "../Navigation/Navigation"

const KernItem = props => {
  return (
    <div key={props.item.title} className="slideshow__item--kernwaarde">
      <div className="slideshow__item--kernwaarde--inner py-8 md:p-12">
        <div className="slideshow__item--kernwaarde--inner__content">
          <div className="slideshow__item--kernwaarde--inner__content--title mb-7">
            {props.item.title}
          </div>
          <div className="slideshow__item--kernwaarde--inner__content--subtitle">
            {parse(props.item.content)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KernItem
