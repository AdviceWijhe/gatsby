// Import CSS
import "./Header.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import FullMenu from "../FullMenu/FullMenu"
// import Navigation from "../Navigation/Navigation"
import Logo from "../../images/logo.svg"
import React from "react"
import parse from "html-react-parser"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { useState } from "react"

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
    buttonText = '<i className="fal fa-times fa-2x"></i>';
  } else {
    classes = ""
    buttonText = "MENU";
  }

  return (
    <section className="header py-0">
      <div className="flex flex-row">
        <div className="branding">
          {isHomePage ? (
            <img src={Logo} alt={wp.generalSettings.title} />
          ) : (
            <AniLink cover bg="#00f" duration={2} className="header-link-home" to="/">
              <img src={Logo} alt={wp.generalSettings.title} />
            </AniLink>
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
      <FullMenu toggle={classes} stateChanger={setOpenMenu}></FullMenu>
    </section>
  )
}

export default Header
