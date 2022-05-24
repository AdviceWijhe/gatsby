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

     
                  {data.links.nodes &&
                  data.links.nodes.map(link => {
                    return (
                      <div className={`py-4 Links__item`}>
                        <span class="flex items-start"><img src={`/icons/Pijltje_red_Lang.svg`} className="arrow rotate arrow-small mr-3 mt-1" alt="Pijl wit lang" /><a href={link.postTypeLinks.url.url} className={`text-lg`}>{parse(link.title)}</a></span>
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
                    )
                  })
                }

    </section>
  )
}

export default Links
