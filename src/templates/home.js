import React, { useState } from "react";

import $ from 'jquery';
import Logo from "../images/new-logo.svg"
// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import Seo from 'gatsby-plugin-wpgraphql-seo';
import SubscribeForm from "../components/SubscribeForm/SubscribeForm"
import alain from "../images/alain.png"
import branding from "../images/branding.svg"
import digitaal from "../images/digitaal.svg"
import { graphql } from "gatsby"
import marketing from "../images/marketing.svg"
import strategie from "../images/strategie.svg"

const HomePageTemplate = ({ data: { post } }) => {

  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Event handler for click event
  const handleDivClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Remove the class after 2 seconds
  };

  return (
    <>
      <Seo post={post} />
      <div className="bg-sandy p-4">
        <div className="menu">
          <div className="">
            <div className="grid grid-cols-2 rounded-2xl bg-white p-2 pr-4">
              <div className="p-4">
                <img src={Logo} alt="Advice Logo"/>
              </div>
              <div className="flex justify-end items-center ">
                <div className="flex gap-12 items-center">
                  <div className="socials  gap-4 hidden md:flex">
                    <a className="no-underline text-black" href="https://www.linkedin.com/company/1020912/" target="_blank"> <i class="fab fa-lg fa-linkedin"></i></a>
                   <a className="no-underline text-black" href="https://www.facebook.com/Advice.nl/" target="_blank"> <i class="fab fa-lg fa-facebook"></i></a>
                  <a className="no-underline text-black" href="https://www.instagram.com/advice_nl" target="_blank">  <i class="fab fa-lg fa-instagram"></i></a>
                  </div>


                  <a href="/contact" class="btn btn-strategie"><span title="Contact" class="title"></span>

<span class="arrow_circle">
  <span class="arrow">
    <svg id="arrow_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18.6 18">

  <path class="cls-1" d="M8.5,3.8L1.4,10.9l-1.4-1.4L9.5,0l9.2,9.2-1.4,1.4-6.8-6.8v14.2h-2V3.8Z"></path>
</svg>
<svg id="arrow_2" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 18.6 18">

  <path class="cls-1" d="M8.5,3.8L1.4,10.9l-1.4-1.4L9.5,0l9.2,9.2-1.4,1.4-6.8-6.8v14.2h-2V3.8Z"></path>
</svg>
  </span>
</span>
                  </a>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="heading overflow-y-visible">
          <div className="md:container">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="hero__content pt-20">
                <span className="subTitle label label-large"><span className="label-fade">Het is bijna zover</span></span>
                <h1>Binnenkort live!</h1>
                <p className="lead md:w-9/12 mt-5">Wij zijn druk bezig met onze nieuwe website. Binnenkort vertellen we je hier meer over. Houd onze website en socials goed in de gaten!</p>
                <div className="mt-12">
                  <h4>Blijf op de hoogte</h4>
                  <p>Schrijf je in voor onze nieuwsbrief en mis niets.</p>
          

                  <SubscribeForm />
                </div>
              </div>
              <div className={`hero__confetti pt-9 relative flex items-center justify-center ${isClicked ? 'clicked' : ''}`}>



                <div className={`hoedje `}
                  onClick={handleDivClick}>
                  <svg className="w-full h-full" width="560" height="560" viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M280 560C434.64 560 560 434.64 560 280C560 125.36 434.64 0 280 0C125.36 0 0 125.36 0 280C0 434.64 125.36 560 280 560Z" fill="white"/>
<path className="popper" d="M184.329 405.258L245.597 376.021L154.73 375.659C145.727 394.547 165.513 414.246 184.329 405.258Z" fill="#6944EB"/>
<path className="popper" d="M154.734 375.688L245.587 376.05L351.246 325.681L178.92 324.986L154.734 375.688Z" fill="#CB9DFE"/>
<path className="popper" d="M412.005 275.124L203.118 274.299L178.918 324.986L351.243 325.681L426.623 289.757L412.005 275.124Z" fill="#6944EB"/>
<path className="popper" d="M360.969 224.133L227.303 223.597L203.117 274.299L412.004 275.124L360.969 224.133Z" fill="#CB9DFE"/>
<path className="popper" d="M348.469 211.613L309.969 173.127L251.494 172.895L227.309 223.597L360.974 224.133L348.469 211.613Z" fill="#6944EB"/>
<path className="popper" d="M270.304 133.483L251.488 172.895L309.963 173.127L270.304 133.483Z" fill="#CB9DFE"/>
<path className="popper" d="M423.783 288.194C414.172 288.194 379.464 263.443 338.04 222.034C317.241 201.249 298.961 180.465 286.585 163.502C271.851 143.325 271.156 136.175 272.112 135.263C272.432 135.08 272.801 134.999 273.168 135.032C282.779 135.032 317.487 159.782 358.926 201.206C379.71 221.99 398.005 242.76 410.38 259.724C425.115 279.9 425.809 287.05 424.854 287.977C424.53 288.162 424.154 288.238 423.783 288.194Z" fill="#6944EB"/>
<path className="popper" d="M274.577 137.724C284.129 139.88 314.901 160.78 357.078 203.015C374.503 220.187 390.774 238.493 405.782 257.813C418.577 274.762 421.703 282.549 422.384 285.545C412.831 283.388 382.059 262.488 339.883 220.239C320.719 201.09 303.452 181.637 291.236 165.456C278.456 148.492 275.315 140.85 274.649 137.709M273.202 132.513C272.68 132.47 272.155 132.533 271.657 132.697C271.16 132.861 270.701 133.123 270.307 133.468C263.562 140.199 293.103 180.624 336.264 223.785C375.344 262.864 412.136 290.698 423.788 290.698C424.309 290.741 424.835 290.679 425.332 290.515C425.83 290.351 426.289 290.088 426.682 289.742C433.282 283.027 403.727 242.5 360.566 199.411C321.486 160.332 284.708 132.513 273.043 132.513H273.202Z" fill="#CB9DFE"/>
</svg>

                </div>






                <div className="box">
                  <div className="tapperoo"></div>
                  <svg id="tap-gesture" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 70">
                    <path className="hand" fill="#141414" d="M 8 7 L 8 33 C 1 36 0 49 5 57 C 11 65 17 69 27 69 C 49 69 46 34 46 33 C 46 30 43 28 41 28 C 40 28 40 28 39 28 C 39 25 37 23 33 23 C 32 23 30 23 29 25 C 29 22 27 21 24 21 C 23 21 21 21 20 23 L 20 7 C 20 4 17 1 14 1 S 8 4 8 7 Z M 24 50" />
                  </svg>
                </div>



                <div className={`tooltip p-6 rounded-md bg-dark text-white ${isOpen ? 'clicked' : ''}`}>
                  <h5 class="mb-4">Nog heel even geduld!</h5>
                  <p class="mb-0">Binnenkort gaat het feest beginnen. Wij zijn druk bezig met de laatste voorbereidingen te treffen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>





        <div className="diensten pt-36">
          <div className="md:container">
            <span className="label label-large label-marketing">
             <span className="label-fade"> Diensten</span>
            </span>
            <h2 className="mt-0">Ons terrein</h2>
            <p className="md:w-1/3">Waarin wij excelleren? We zetten onze vakgebieden voor je uiteen. Zo weet je precies wat je van ons mag verwachten.  </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              <div className="dienst bg-white rounded-2xl">
                <div className="dienst__image p-6 md:px-12 xl:px-20 2xl:px-24 md:py-16 xl:py-24 2xl:py-28">
                  <img src={strategie} className="w-20 md:w-34 lg:w-64" alt="Advice Strategie"/>
                </div>
                <div className="dienst__title p-8">
                  <h5>Strategie</h5>
                </div>
              </div>

              <div className="dienst bg-white rounded-2xl">
                <div className="dienst__image p-6 md:px-12 xl:px-20 2xl:px-24 md:py-16 xl:py-24 2xl:py-28">
                  <img src={branding} className="w-20 md:w-34 lg:w-64" alt="Advice Strategie"/>
                </div>
                <div className="dienst__title p-8">
                  <h5>Branding</h5>
                </div>
              </div>

              <div className="dienst bg-white rounded-2xl">
                <div className="dienst__image p-6 md:px-12 xl:px-20 2xl:px-24 md:py-16 xl:py-24 2xl:py-28">
                  <img src={digitaal} className="w-20 md:w-34 lg:w-64" alt="Advice Strategie"/>
                </div>
                <div className="dienst__title p-8">
                  <h5>Digitaal</h5>
                </div>
              </div>

              <div className="dienst bg-white rounded-2xl">
                <div className="dienst__image p-6 md:px-12 xl:px-20 2xl:px-24 md:py-16 xl:py-24 2xl:py-28">
                  <img src={marketing} className="w-20 md:w-34 lg:w-64" alt="Advice Strategie"/>
                </div>
                <div className="dienst__title p-8">
                  <h5>Marketing</h5>
                </div>
              </div>
            </div>
          </div>
      </div>

        



        <div className="cta mt-16 md:mt-52">
          <div className="md:container">
            <div className="cta__field bg-strategie p-10 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="cta__content col-start-1 col-end-1">
                <span className="label label-large label-white"><span className="label-fade">Contact</span></span>
                  <h2 className="mt-0">Vragen over Advice? <br />Alain kan je verder helpen.</h2>
                </div>
                
                <div className="cta__contact md:flex items-end gap-6">
                  <img src={alain} alt="Advice Alain" />
                  <div className="content">
                    <div className="inline-flex items-center relative mt-4 md:mt-0">
                      <h4 className="mb-0 mt-0 mr-3">Alain van der Wildt</h4>
                      <a href="https://www.linkedin.com/in/alainvanderwildt/" class="icon-round absolute -right-12"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
                      </div>
                    <p className="mb-0 label label-fade no-bullet">Eigenaar</p>
                    <p className="mb-0"><a className="no-underline text-black" href="tel:+31 (0)85 029 0100">+31 (0)85 029 0100</a></p>
                    <p className="mb-0"><a className="no-underline text-black" href="mailto:alain@advice.nl">alain@advice.nl</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>






        <div className="footer mt-12 md:mt-16 pt-0">
          <div className="">
            <div className="md:grid  rounded-2xl bg-white p-6 items-center pt-8 pb-8">
              <div className=" col-start-1 col-end-2 mb-6 md:mb-0">
                <img src={Logo} alt="Advice Logo"/>
              </div>


              <div className="grid md:grid-cols-3 col-start-3 col-end-5 mb-6 md:mb-0">
                <div>
                  <p className="label label-large no-bullet mb-0">
                    Kantoor
                  </p>
                  <p className="label label-small no-bullet label-fade mb-0">(Newday Office)</p>
                  <p className="mb-0">Hanzelaan 351 <br/> 8017 JM Zwolle</p>
                </div>

                <div className="mt-6 md:mt-0">
                  <p className="label label-large no-bullet mb-0">
                    Contact
                  </p>
                  <p className="label label-small label-green label-fade mb-0">ma t/m vr 08:30 - 17:00</p>
                  <p className="mb-0"><a className="no-underline text-black" href="tel:+31 (0)85 029 0100">+31 (0)85 029 0100</a> <br /><a className="no-underline text-black" href="mailto:contact@advice.nl">contact@advice.nl</a></p>
                </div>

                <div className="mt-6 md:mt-0">
                  <p className="label label-large no-bullet mb-0">
                    Support
                  </p>
                  <p className="label label-small label-green label-fade mb-0">Mail ons</p>
                  <p className="mb-0"><a className="no-underline text-black" href="tel:+31 (0)85 029 0100">+31 (0)85 029 0100</a> <br /><a className="no-underline text-black" href="mailto:support@advice.nl">support@advice.nl</a></p>
                </div>
              </div>


              <div className="flex md:justify-start md:items-end col-start-5 self-end">
                <div className="socials flex gap-4">
                   <a className="no-underline text-black" href="https://www.linkedin.com/company/1020912/" target="_blank"> <i class="fab fa-lg fa-linkedin"></i></a>
                   <a className="no-underline text-black" href="https://www.facebook.com/Advice.nl/" target="_blank"> <i class="fab fa-lg fa-facebook"></i></a>
                  <a className="no-underline text-black" href="https://www.instagram.com/advice_nl" target="_blank">  <i class="fab fa-lg fa-instagram"></i></a>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export const pageQuery = graphql`
  query homePageQuery {
    post: wpPage(id: { eq: "cG9zdDoxOQ==" }) {
      id
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: TRACED_SVG
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
      seo {
                title
                metaDesc
                focuskw
                metaKeywords
                metaRobotsNoindex
                metaRobotsNofollow
                opengraphTitle
                opengraphDescription
                opengraphImage {
                    altText
                    sourceUrl
                    srcSet
                }
                twitterTitle
                twitterDescription
                twitterImage {
                    altText
                    sourceUrl
                    srcSet
                }
                canonical
                cornerstone
                schema {
                    articleType
                    pageType
                    raw
                }
            }
      homepage {
        blockHero {
          title
          titles {
            title
          }
          subtitle
          content
          letters
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        callToAction {
          title
          subtitle
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          link {
            url
            title
          }
        }
        marquee {
          text
        }
        slideshow {
          layout
          spaceBetween
          sliderPerView
        }
      }
      flexible {
        flexibleblocks {
          ... on WpPage_Flexible_Flexibleblocks_Collage {
            fieldGroupName
            collageimages {
              altText
              localFile {
                
                childImageSharp {
                  gatsbyImageData(
                  quality: 100
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
                }
              }
            }
          }
          ... on WpPage_Flexible_Flexibleblocks_VideoOrImage {
            fieldGroupName
            video
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                  quality: 100
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
                }
              }
            }
            otherImages {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                  quality: 100
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
                }
              }
            }
          }
          ... on WpPage_Flexible_Flexibleblocks_Quote {
            content
            fieldGroupName
          }
          ... on WpPage_Flexible_Flexibleblocks_OneColumnsContent {
            content
            fieldGroupName
            title
          }
          ... on WpPage_Flexible_Flexibleblocks_TwoColumnsContent {
            column1 {
              content
              title
            }
            fieldGroupName
            column2 {
              content
              title
            }
          }
          ... on WpPage_Flexible_Flexibleblocks_TripleImages {
            fieldGroupName
            images {
              altText
              localFile {
                url
              }
            }
          }
        }
      }
       footer {
      backgroundColorTop
      title
      content
    }
    }
  }
`

export default HomePageTemplate
