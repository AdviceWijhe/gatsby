import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { useMenuQuery } from "../../hooks/useMenuQuery"
// import Navigation from "../Navigation/Navigation"
import Logo from "../../images/logo.svg"
import parse from "html-react-parser"

// Import CSS
import "./Header.scss"
import FullMenu from "../FullMenu/FullMenu"

const Header = ({ isHomePage, siteTitle }) => {
  const { wp } = useMenuQuery()
  const [openMenu, setOpenMenu] = useState(false)

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  let classes = "";
  let buttonText = "";

  if (openMenu) {
    classes = "menuOpen";
    buttonText = '<i class="fal fa-times fa-2x"></i>';
  } else {
    classes = ""
    buttonText = "MENU";
  }

  return (
    <section className="header">
      <div className="flex flex-row">
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
            <a href={wp.themeGeneralSettings.socials.facebook.url} target="_blank" aria-label="Facebook" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href={wp.themeGeneralSettings.socials.instagram.url} target="_blank" aria-label="instagram" rel="noreferrer"><i className="fab fa-instagram"></i></a>
            <a href={wp.themeGeneralSettings.socials.linkedin.url} target="_blank" aria-label="linkedin" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className={`controls__menuButton ${classes}`}>
            <button
              className={`controls__menuButton__inner ${classes}`}
              onClick={toggleOpenMenu}
            >
              <p>{parse(buttonText)}</p>
            </button>
          </div>
        </div>
      </div>
      <FullMenu toggle={classes}></FullMenu>
    </section>
  )
}

export default Header
