import React, { useRef } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import useIntersection from "../../hooks/useIntersection"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../../css/components/content-vacature.scss"
// import Navigation from "../Navigation/Navigation"

const VacatureItem = props => {
  const ref = useRef() // Trigger as soon as the element becomes visible
  const inViewport = useIntersection(ref, "-50px") // Trigger if 200px is visible from the element


  let image =
    props.item.featuredImage?.node?.localFile?.childImageSharp
      ?.gatsbyImageData

  const diensten = props.item.postTypeVacatures.diensten

  return (
    <div
      ref={ref}
      key={props.item.id}
      className={`vacatureItem mb-8 animate ${
        inViewport && `isVisible`
      }`}
    >
      <div className={`vacatureItem--inner flex items-stretch flex-col lg:flex-row`}>
        <div className="vacatureItem--inner__image lg:w-1/4 relative">
        <GatsbyImage image={image} alt="image" />
         {/* <Link to={props.item.uri} className={`triangle triangle-rotated`}><i className="fal fa-long-arrow-right"></i></Link> */}

                            <AniLink paintDrip to={props.item.uri} className={`triangle triangle-rotated`}><img src={`/icons/Pijltje_white_Lang.svg`} className="arrow arrow-small" alt="Pijl wit lang" /></AniLink>

        </div>
        <div className="vacatureItem--inner__content lg:w-3/4">
          <div className="vacatureItem--inner__content--title lg:mt-5">
            <h2 className={`text-3xl lg:text-5xl font-weight-bold text-outlined`}><AniLink paintDrip to={props.item.uri}>{props.item.title}</AniLink></h2>

            <ul className={`vacatureItem__diensten`}>
              {diensten.map(post => {
                return <li key={post.id}>{post.title}</li>
              })}
            </ul>
          </div>
          
        </div>
       
      </div>
    </div>
  )
}

export default VacatureItem
