import React from "react"
import { Link } from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import Navigation from "../Navigation/Navigation"

const Header = ({ isHomePage }) => {
  const { wp, wpMenu } = useMenuQuery()
  return (
    <header className="container mx-auto">
      {isHomePage ? (
        <h1 className="main-heading">{wp.generalSettings.title}</h1>
      ) : (
        <Link className="header-link-home" to="/">
          {wp.generalSettings.title}
        </Link>
      )}
      <Navigation menu={wpMenu.menuItems.nodes} />
    </header>
  )
}

export default Header
