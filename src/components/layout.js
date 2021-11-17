import React from "react"
import {useStaticQuery, graphql } from "gatsby"
import Header from "./Header/Header"

const Layout = ({ isHomePage, children }) => {
  const {
  } = useStaticQuery(graphql`
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
      <Header></Header>
      <main>{children}</main>

      <footer>
        <div className="container mx-auto text-sm">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
          And <a href="https://wordpress.org/">WordPress</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
