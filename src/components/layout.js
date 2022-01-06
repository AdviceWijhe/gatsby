import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ isHomePage, children, footer }) => {
  const { siteInfo } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
        themeGeneralSettings {
          socials {
            facebook {
              url
            }
            instagram {
              url
            }
            linkedin {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <Header siteTitle={siteInfo}></Header>
      <main>{children}</main>

      <Footer options={footer}></Footer>
    </div>
  )
}

export default Layout
