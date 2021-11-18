import React from "react"
import { Link } from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery"
// import Navigation from "../Navigation/Navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "../../images/logo.svg"

// Import CSS
import "./Header.scss"

const Header = ({ isHomePage }) => {
  const { wp, wpMenu } = useMenuQuery()

  return (
    <header>
      <div className="container mx-auto flex flex-row">
        <div className="branding">
          {isHomePage ? (
            <img src={Logo} alt={wp.generalSettings.title} />
          ) : (
            <Link className="header-link-home" to="/">
              <img src={Logo} alt={wp.generalSettings.title} />
            </Link>
          )}
        </div>
        {/* <Navigation menu={wpMenu.menuItems.nodes} /> */}
      </div>
      <div className="controls flex justify-between items-center">
        <div className="controls__socials flex flex-col justify-center">
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin-in"></i>
        </div>
        <div className="controls__menuButton">
          <div className="controls__menuButton__inner">
            <p>MENU</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
