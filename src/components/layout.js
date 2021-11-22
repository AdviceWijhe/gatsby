import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ isHomePage, children }) => {
  const { siteInfo } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Header siteTitle={siteInfo}></Header>
      <main>{children}</main>

      <Footer></Footer>
    </div>
  )
}

export default Layout
