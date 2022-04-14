import "./diensten.scss"

import React from "react"
import parse from "html-react-parser"
import { useDienstQuery } from "../../../hooks/useDienstQuery"

// import Navigation from "../Navigation/Navigation"

const DienstItem = props => {

  const { diensten } = useDienstQuery()

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
          <div className={`slideshow__item--diensten--inner__content--subItems`}>
            <ul>
           {diensten.nodes &&
              diensten.nodes.map(post => {
                return (
                  post.wpParent && post.wpParent.node.id === props.item.id ? (
                  <li key={post.id}>{post.title}</li>
                  ) : null
                )
              })}{" "}
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DienstItem
