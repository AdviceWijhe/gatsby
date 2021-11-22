import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery"
// import Navigation from "../Navigation/Navigation"
import Logo from "../../images/logo.svg"

// Import CSS
import "./Header.scss"
import FullMenu from "../FullMenu/FullMenu"

const Header = ({ isHomePage }) => {
  const { wp } = useMenuQuery()
  const [openMenu, setOpenMenu] = useState(false)

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  let classes = ""

  if (openMenu) {
    classes = "menuOpen"
  } else {
    classes = ""
  }

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
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
        <div className="controls__menuButton">
          <button
            className={`controls__menuButton__inner ${classes}`}
            onClick={toggleOpenMenu}
          >
            <p>MENU</p>
          </button>
        </div>
      </div>
      <FullMenu toggle={classes}></FullMenu>
    </header>
  )
}

export default Header
