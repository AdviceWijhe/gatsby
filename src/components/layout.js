import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo';
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import CookieBanner from "./CookieBanner/CookieBanner";

const Layout = ({ isHomePage, children } ) => {

  const { siteInfo, wp: { seo } } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
        seo {
                    contentTypes {
                        post {
                            title
                            schemaType
                            metaRobotsNoindex
                            metaDesc
                        }
                        page {
                            metaDesc
                            metaRobotsNoindex
                            schemaType
                            title
                        }
                    }
                    webmaster {
                        googleVerify
                        yandexVerify
                        msVerify
                        baiduVerify
                    }
                    schema {
                        companyName
                        personName
                        companyOrPerson
                        wordpressSiteName
                        siteUrl
                        siteName
                        inLanguage
                        logo {
                            sourceUrl
                            mediaItemUrl
                            altText
                        }
                    }
                    social {
                        facebook {
                            url
                            defaultImage {
                                sourceUrl
                                mediaItemUrl
                            }
                        }
                        instagram {
                            url
                        }
                        linkedIn {
                            url
                        }
                        mySpace {
                            url
                        }
                        pinterest {
                            url
                            metaTag
                        }
                        twitter {
                            username
                        }
                        wikipedia {
                            url
                        }
                        youTube {
                            url
                        }
                    }
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
    <SEOContext.Provider value={{ global: seo }}>
    <main>
    
    <div className={`global-wrapper ${children?.props?.data?.post?.slug}`} data-is-root-path={isHomePage}>
      <Header siteTitle={siteInfo}></Header>
      {children}

      <Footer options={children?.props?.data?.post?.footer}></Footer>
      <CookieBanner />
    </div>
    </main>
    </SEOContext.Provider>
  )
}

export default Layout
