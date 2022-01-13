import React from "react"
import { Link } from "gatsby"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Diensten.scss"

import { useDienstQuery } from "../../hooks/useDienstQuery"


const Diensten = props => {

  const diensten = useDienstQuery().diensten;

  console.log(diensten);

  return (
    <section className="com_Diensten">
        {diensten.nodes.map(post => {
          return(
            post.wpParent === null ? (
              <Link to={post.uri} className={`com_Diensten__Dienst block`}>
                <h3 className={`com_Diensten__Dienst--title`}>{post.title}</h3>
                <ul className={`com_Diensten__subDienst`}>
                    {diensten.nodes &&
                      diensten.nodes.map(subDienst => {
                        return (
                          subDienst.wpParent && subDienst.wpParent.node.id === post.id ? (
                          <li key={subDienst.id}>{subDienst.title}</li>
                          ) : null
                        )
                    })}{" "}
                </ul>
              </Link>
            ) : null
          )
          })}
    </section>
  )
}

export default Diensten
