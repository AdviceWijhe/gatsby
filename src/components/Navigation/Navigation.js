import "./Navigation.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import React from "react"

const Navigation = ({ stateChanger, menu, menuName }) => {
  return (
    <nav className={`nav-menu ${menuName}`}>
      <ul>
        {menu.map(mainItem =>
          !mainItem.parentId ? (
            <li key={mainItem.id}>
              <AniLink cover bg="#00f" duration={2} to={mainItem.url} activeClassName="nav-active" onClick={() => stateChanger(false)} >
                {mainItem.label}
                {/* {mainItem.childItems.nodes.length !== 0 && (
                  <div className="subMenuIcon">&#8964;</div>
                )} */}
              </AniLink>
              {mainItem.childItems.nodes.length > 0 ? (
                <ul className="sub-menu">
                  {mainItem.childItems.nodes.map(childItem => (
                    <li key={childItem.id}>
                      <AniLink cover bg="#00f" duration={2} to={childItem.url} activeClassName="nav-active" onClick={() => stateChanger(false)}>
                        {childItem.label}
                      </AniLink>
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
