import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./Navigation.scss"

const Navigation = ({ menu, menuName }) => {
  return (
    <nav className={`nav-menu ${menuName}`}>
      <ul>
        {menu.map(mainItem =>
          !mainItem.parentId ? (
            <li key={mainItem.id}>
              <Link to={mainItem.url} activeClassName="nav-active" >
                {mainItem.label}
                {/* {mainItem.childItems.nodes.length !== 0 && (
                  <div className="subMenuIcon">&#8964;</div>
                )} */}
              </Link>
              {mainItem.childItems.nodes.length > 0 ? (
                <ul className="sub-menu">
                  {mainItem.childItems.nodes.map(childItem => (
                    <li key={childItem.id}>
                      <Link to={childItem.url} activeClassName="nav-active">
                        {childItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ) : null
        )}
      </ul>
    </nav>
  )
}

export default Navigation
