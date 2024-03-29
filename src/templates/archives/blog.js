import React, { useRef } from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"
import useIntersection from "../../hooks/useIntersection"

// import Navigation from "../Navigation/Navigation"

const BlogItem = props => {
  const ref = useRef() // Trigger as soon as the element becomes visible
  const inViewport = useIntersection(ref, "-50px") // Trigger if 200px is visible from the element


  let image =
    props.item.featuredImage?.node?.localFile?.childImageSharp
      ?.gatsbyImageData
  return (
    <div
      ref={ref}
      key={props.item.id}
      className={`blogItem mb-8 animate ${
        inViewport && `isVisible`
      }`}
    >
      <div className={`blogItem--inner`}>
        <div className="block"></div>
        <div className="blogItem__image relative">
        <GatsbyImage image={image} alt="image" />
                  <AniLink cover bg="#00f" duration={2} to={props.item.uri} className={`triangle triangle-rotated`}><img src={`/icons/Pijltje_white_Lang.svg`} className="arrow arrow-small" alt="Pijl wit lang" /></AniLink>
        </div>
        <div className="blogItem--inner__content relative">
          <div className="blogItem--inner__content--title w-3/4 mt-5">
            <AniLink cover bg="#00f" duration={2} to={props.item.uri} class="text-black"><h2 className={`text-xl lg:text-2xl font-weight-bold mt-0`}>{props.item.title}</h2></AniLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
