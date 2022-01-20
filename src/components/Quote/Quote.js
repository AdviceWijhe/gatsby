import React from "react"
import Letters from "../letters"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Quote.scss"

const Quote = props => {

  let count = 0;
  let separatedLetters = [];

  if(props.letters) {
    separatedLetters = props?.letters?.split('')
  }

  return (
    <section className="quote">
     {props.letters && 
        <div className="lg:w-2/4">
        {separatedLetters.map(post => {
          count++
          return (
            <Letters key={count} letter={post} count={count} />
          )
        })}
        </div>
      }
    </section>
  )
}

export default Quote