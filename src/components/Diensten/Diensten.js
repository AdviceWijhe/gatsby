import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Diensten.scss"

import { useDienstQuery } from "../../hooks/useDienstQuery"


const Diensten = (props) => {

  const diensten = useDienstQuery().diensten;

  return (
    <section className="com_Diensten">
      <div className="com_Diensten__inner">
        {diensten.nodes.map(post => {
          if(props.currentID === post.id) {
            return false;
          }
          return (
            post.wpParent === null ? (
              <AniLink paintDrip key={post.id} to={post.uri} className={`com_Diensten__Dienst block relative`}>
                <h3 className={`com_Diensten__Dienst--title relative inline`}>{post.title}
                {/* <div className="triangle triangle-arrow triangle-bottom hidden lg:flex"><img src={`/icons/Pijltje_white_Lang.svg`} className="arrow arrow-right arrow-small" alt="Pijl wit lang" /></div> */}
                </h3>
                <ul className={`com_Diensten__subDienst hidden lg:flex`}>
                  {diensten.nodes &&
                    diensten.nodes.map(subDienst => {
                      return (
                        subDienst.wpParent && subDienst.wpParent.node.id === post.id ? (
                          <li key={subDienst.id}>{subDienst.title}</li>
                        ) : null
                      )
                    })}{" "}
                </ul>
              </AniLink>
            ) : null
          )
        })}
      </div>
    </section>
  )
}

export default Diensten
