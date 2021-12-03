import React, { useState } from "react"
import { Link } from "gatsby"
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
                    <div className={`Tabs__tabs--tab ${activeTab === post.id ? "active" : ""}`} data-id={post.id} onClick={() => {onClickTab(post.id);}}>
                      {post.title}
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
                    <div className={`Tabs__tabs--tab__content ${activeTab === post.id ? "active" : ""}`} data-id={post.id}>
                      <h3 className={`text-2xl font-medium`}>{post.title}</h3>
                      {parse(post.excerpt)}

                      <ul>
                    {diensten.nodes &&
                        diensten.nodes.map(dienst => {
                          console.log(post)
                          return (
                            dienst.wpParent && dienst.wpParent.node.id === post.id ? (
                            <li>{dienst.title}</li>
                            ) : null
                          )
                        })}{" "}
                      </ul>

                      <Link to={post.uri}>
                        <div className={`triangle triangle-bottom triangle-small`}><i class="fal fa-long-arrow-right"></i></div>
                      </Link>
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
