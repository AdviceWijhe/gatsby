import { graphql, useStaticQuery } from "gatsby"

import CookieBanner from "./CookieBanner/CookieBanner";
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Popup from "./Popup/Popup";
import React from "react"
import { SEOContext } from 'gatsby-plugin-wpgraphql-seo';
import WebsitePopup from "./WebsitePopup/WebsitePopup";
import { useLocation } from '@reach/router';

const Layout = ({ isHomePage, children }) => {
  
  const location = useLocation();
  const isHome = location.pathname === '/';

  let homepageClass = '';

  if (isHome) {
    homepageClass = 'homepage';
  }
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
      <main className={ homepageClass }>
    
    <div className={`global-wrapper ${children?.props?.data?.post?.slug}`} data-is-root-path={isHomePage}>
      {!isHome && <Header siteTitle={siteInfo}></Header>}
      {children}

      {children?.props?.data?.post != null && !isHome && (
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
      {!isHome && <Popup data={themeGeneralSettings} />}
 
    </SEOContext.Provider>
  )
}

export default Layout
