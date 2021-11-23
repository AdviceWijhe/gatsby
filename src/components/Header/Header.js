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
    <section className="header">
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
      <div className="controls">
        <div
          className={`lg:container  flex justify-between items-center lg:h-full lg:justify-end lg:flex-col`}
        >
          <div
            className={`controls__socials flex flex-col justify-center ${classes}`}
          >
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className={`controls__menuButton ${classes}`}>
            <button
              className={`controls__menuButton__inner ${classes}`}
              onClick={toggleOpenMenu}
            >
              <p>MENU</p>
            </button>
          </div>
        </div>
      </div>
      <FullMenu toggle={classes}></FullMenu>
    </section>
  )
}

export default Header
