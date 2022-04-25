import "../../css/components/content-vacature.scss"

import React, { useRef } from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import useIntersection from "../../hooks/useIntersection"

// import Navigation from "../Navigation/Navigation"

const VacatureItem = props => {
  const ref = useRef() // Trigger as soon as the element becomes visible
  const inViewport = useIntersection(ref, "-50px") // Trigger if 200px is visible from the element

  return (
    <div
      ref={ref}
      key={props.item.id}
      className={`vacatureItem mb-8 animate ${
        inViewport && `isVisible`
      }`}
    >
      <div className={`vacatureItem--inner flex items-stretch flex-col lg:flex-row`}>
        {/* <div className="vacatureItem--inner__image lg:w-1/4 relative">
        <GatsbyImage image={image} alt="image" />

        <AniLink paintDrip to={props.item.uri} className={`triangle triangle-rotated`}><img src={`/icons/Pijltje_white_Lang.svg`} className="arrow arrow-small" alt="Pijl wit lang" /></AniLink>

        </div> */}
        <div className="vacatureItem--inner__content lg:w-3/4">
          <div className="vacatureItem--inner__content--title lg:mt-5">
            <h2 className={`text-3xl lg:text-5xl font-weight-bold text-outlined`}><AniLink cover bg="#00f" duration={2} to={props.item.uri}>{props.item.title}</AniLink></h2>

            {/* <ul className={`vacatureItem__diensten`}>
              {diensten.map(post => {
                return <li key={post.id}>{post.title}</li>
              })}
            </ul> */}
          </div>
          
        </div>
       
      </div>
    </div>
  )
}

export default VacatureItem
