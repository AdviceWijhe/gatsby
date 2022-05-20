// Import CSS
import "./Links.scss"

import React from "react"
import parse from "html-react-parser"
import { useLinksQuery } from "../../hooks/useLinksQuery"

// import Navigation from "../Navigation/Navigation"


const Links = props => {

  const data = useLinksQuery();

  return (
    <section className="Links">

      {data.allWpCategory.nodes &&
            data.allWpCategory.nodes.map(post => {
              return (
                post.count ? (
                  <div>
                    <h3 className={`text-3xl font-bold text-outlined`}>{parse(post.name)}</h3>
                  {data.links.nodes &&
                  data.links.nodes.map(link => {
                    return (
                      link.categories.nodes[0].id == post.id ? (
                      <div className={`mb-4`}>
                        <a href={link.postTypeLinks.url.url} className={`text-xl font-bold`}>{parse(link.title)}</a>
                        <ul className={`subLink__list flex`}>
                          {link.postTypeLinks.subLinks &&
                            link.postTypeLinks.subLinks.map(subLink => {
                              return(
                                <li><a href={subLink.link.url} className="text-sm">{parse(subLink.link.title)}</a></li>
                              )
                            })
                          }
                        </ul>
                      </div>
                      ) : null
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
