import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ isHomePage, children } ) => {
  console.log(children)
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
    <main>
    
    <div className={`global-wrapper ${children?.props?.data?.post?.slug}`} data-is-root-path={isHomePage}>
      <Header siteTitle={siteInfo}></Header>
      {children}

      <Footer options={children?.props?.data?.post?.footer}></Footer>
    </div>
    </main>
  )
}

export default Layout
