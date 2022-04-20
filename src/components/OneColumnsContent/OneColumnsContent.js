// Import CSS
import "./OneColumnsContent.scss"

import React from "react"
import parse from "html-react-parser"

// import Navigation from "../Navigation/Navigation"


const OneColumnsContent = props => {

  return (
    <section className={`OneColumnsContent`}>
        <div className={`lg:w-2/3`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-5">{props.title}</h3>
          {props.content &&        
            parse(props.content)        
         }
        </div>
      </section>
  )
}

export default OneColumnsContent
