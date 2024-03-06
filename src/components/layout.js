import { graphql, useStaticQuery } from "gatsby"

import CookieBanner from "./CookieBanner/CookieBanner";
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Popup from "./Popup/Popup";
import React from "react"
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo';
import WebsitePopup from "./WebsitePopup/WebsitePopup";

const Layout = ({ isHomePage, children } ) => {

  const { siteInfo, wp: { seo, themeGeneralSettings } } = useStaticQuery(graphql`
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
            adres
            postcode
            email
            telefoon
          }
        }
      }
    }
  `)
  console.log(themeGeneralSettings);
  return (
    <SEOContext.Provider value={{ global: seo }}>
    <main>
    
    <div className={`global-wrapper ${children?.props?.data?.post?.slug}`} data-is-root-path={isHomePage}>
      <Header siteTitle={siteInfo}></Header>
      {children}

      {children?.props?.data?.post != null && (
      <Footer options={children?.props?.data?.post?.footer}></Footer>
      )}
      {children?.props?.data?.wpPage != null && (
      <Footer options={children?.props?.data?.wpPage?.footer}></Footer>
      )}
      {children?.props?.data?.allWpCase != null && (
      <Footer options={children?.props?.data?.wpPage?.footer}></Footer>
      )}
      {children?.props?.data?.allWpPost != null && (
      <Footer options={children?.props?.data?.wpPage?.footer}></Footer>
      )}

      {children?.props?.data?.allWpVacature != null && (
      <Footer options={children?.props?.data?.wpPage?.footer}></Footer>
      )}
      <CookieBanner />
    </div>
    </main>
      <Popup data={themeGeneralSettings} />
       <WebsitePopup  />
    </SEOContext.Provider>
  )
}

export default Layout
