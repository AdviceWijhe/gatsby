// Import CSS
// import "./Quote.scss"

import Letters from "../letters"
import React from "react"

// import Navigation from "../Navigation/Navigation"


const Quote = props => {

  let count = 0;
  let separatedLetters = [];

  if(props.letters) {
    separatedLetters = props?.letters?.split('')
  }

  return (
    <section className="quote">
      <div className={`quote__inner lg:py-20`}>
     {props.letters && 
        <div className="lg:w-3/4">
        {separatedLetters.map(post => {
          count++
          return (
            <Letters key={count} letter={post} count={count} />
          )
        })}
        </div>
      }
      </div>
    </section>
  )
}

export default Quote
