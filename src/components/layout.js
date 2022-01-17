import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { usePageQuery } from "../hooks/usePageQuery"

const Layout = ({ isHomePage, children, data: {post} } ) => {
console.log(children);
  const pages = usePageQuery()
  let currentPageID = getCurrentPageID(pages)
    
  function getCurrentPageID(pages) {
    let pageID
    for(let i = 0; i < pages.pages.nodes.length; i++) {
      if(pages.pages.nodes[i].id === children.props.pageContext.id) {
        pageID = pages.pages.nodes[i].id
      }
    }

    return pageID
  }



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

    console.log(siteInfo)

  return (
    <main>
    
    <div className={`global-wrapper ${children.props.data.post?.slug}`} data-is-root-path={isHomePage}>
      <Header siteTitle={siteInfo}></Header>
      {children}

      <Footer options={children.props.data.post?.footer}></Footer>
    </div>
    </main>
  )
}

export default Layout
