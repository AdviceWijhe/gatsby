// Import CSS
// import "./Diensten.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"
import { useDienstQuery } from "../../hooks/useDienstQuery"

// import Navigation from "../Navigation/Navigation"




const Diensten = (props) => {

  const diensten = useDienstQuery().diensten;

  return (
    <section className="com_Diensten pt-0">
      <div className="container container-line">
      <div className="com_Diensten__inner pt-8 lg:pt-16">
        {diensten.nodes.map(post => {
          if(props.currentID === post.id) {
            return false;
          }
          return (
            post.wpParent === null ? (
              <AniLink cover bg="#00f" duration={2} key={post.id} to={post.uri} className={`com_Diensten__Dienst block relative`}>
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
      </div>
    </section>
  )
}

export default Diensten
