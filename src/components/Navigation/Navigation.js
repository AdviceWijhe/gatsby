import React from "react"
import { Link } from "gatsby"
import "./Navigation.scss"

const Navigation = ({ menu }) => {
  return (
    <nav className="mainMenu">
      <ul>
        {menu.map(mainItem =>
          !mainItem.parentId ? (
            <li key={mainItem.id}>
              <Link to={mainItem.url} activeClassName="nav-active">
                {mainItem.label}
                {mainItem.childItems.nodes.length !== 0 && (
                  <div className="subMenuIcon">&#8964;</div>
                )}
              </Link>
              {mainItem.childItems.nodes.length > 0 ? (
                <ul class="sub-menu">
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
