// Import CSS
import "./Links.scss"

import React from "react"
import { useLinksQuery } from "../../hooks/useLinksQuery"

// import Navigation from "../Navigation/Navigation"


const Links = props => {

  const data = useLinksQuery();

  return (
    <section className="Links">

      {data.allWpCategory.nodes &&
            data.allWpCategory.nodes.map(post => {
              return (
                post ? (
                  <div>
                    <h3 className={`text-3xl font-bold text-outlined`}>{post.name} {post.count}</h3>
                  {data.links.nodes &&
                  data.links.nodes.map(link => {
                    return (
                      <div>{link.title}</div>
                    )
                  })
                }
                </div>
                  
                ) : null
              )
            })}{" "}

    </section>
  )
}

export default Links
