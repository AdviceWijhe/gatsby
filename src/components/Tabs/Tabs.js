import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import parse from "html-react-parser"
import { useDienstQuery } from "../../hooks/useDienstQuery"
// import Navigation from "../Navigation/Navigation"

// Import CSS
import "./Tabs.scss"

const Tabs = props => {
  const { diensten } = useDienstQuery()
  const [activeTab, setActiveTab] = useState("cG9zdDo4OA==");
  const onClickTab = (id) => {
    setActiveTab(id);
  }
  
  return (
    <section className="Tabs">
      <div className={`Tabs__inner lg:flex`}>
        <div className={`Tabs__tabs`}>
          {props.items &&
              props.items.map(post => {
                return (
                  post.wpParent == null ? (
                    <div key={post.id} className={`Tabs__tabs--tab ${activeTab === post.id ? "active" : ""}`} data-id={post.id} onClick={() => {onClickTab(post.id);}}>
                      <img src={`/icons/Pijltje_blue_Lang.svg`} className="arrow arrow-right arrow-small" alt="Pijl wit lang" />{post.title}
                    </div>
                  ) : null
                )
              })}{" "}
        </div>

        <div className={`Tabs__tabs--content`}>
          {props.items &&
              props.items.map(post => {
                return (
                  post.wpParent == null ? (
                    <div key={post.title} className={`Tabs__tabs--tab__content ${activeTab === post.id ? "active" : ""}`} data-id={post.id}>
                      <h3 className={`text-2xl font-bold lg:hidden mb-5`}>{post.title}</h3>
                      {parse(post.excerpt)}

                      <ul>
                    {diensten.nodes &&
                        diensten.nodes.map(dienst => {
                          return (
                            dienst.wpParent && dienst.wpParent.node.id === post.id ? (
                            <li key={dienst.id}>{dienst.title}</li>
                            ) : null
                          )
                        })}{" "}
                      </ul>

                      <AniLink to={post.uri}>
                        <div className={`triangle triangle-bottom triangle-small`}><img src={`/icons/Pijltje_white_Lang.svg`} className="arrow arrow-small" alt="Pijl wit lang" /></div>
                      </AniLink>
                    </div>
                  ) : null
                )
              })}{" "}
        </div>
      </div>
    </section>
  )
}

export default Tabs
