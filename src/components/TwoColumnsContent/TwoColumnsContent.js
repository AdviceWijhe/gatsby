// Import CSS
import "./TwoColumnsContent.scss"

import React from "react"
import parse from "html-react-parser"

// import Navigation from "../Navigation/Navigation"


const TwoColumnsContent = props => {

  return (
    <section className={`TwoColumnsContent`}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
           <div className="grid-1 pr-10">
             {props.title1 &&
              <div className="grid__title">
                
                <h2 className="mt-0">{props.title1}</h2>
                
              </div>
              }
              <div className="grid__content">
                {props.content1 &&
                parse(props.content1)
                }
              </div>
           </div>
           <div className="grid-2">
             {props.title2 &&
               <div className="grid__title">
                 
                <h2 className="mt-0">{props.title2}</h2>
                 
              </div>
              }
              <div className="grid__content">
                {props.content2 &&
                parse(props.content2)
                }
              </div>
           </div>
         </div>
      </section>
  )
}

export default TwoColumnsContent
