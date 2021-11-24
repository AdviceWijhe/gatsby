import React from "react"
import parse from "html-react-parser"
import "./diensten.scss"
// import Navigation from "../Navigation/Navigation"

const DienstItem = props => {
  return (
    <div key={props.item.title} className="slideshow__item--diensten">
      <div className="slideshow__item--diensten--inner py-8 md:p-12">
        <div className="slideshow__item--diensten--inner__content">
          <div className="slideshow__item--diensten--inner__content--title mb-7">
            {props.item.title}
          </div>
          <div className="slideshow__item--diensten--inner__content--subtitle">
            {props.item.content && parse(props.item.content)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DienstItem
