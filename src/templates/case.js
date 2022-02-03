import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "../components/Image/Image"
import Quote from "../components/Quote/Quote"
import { GatsbyImage } from "gatsby-plugin-image"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Seo from 'gatsby-plugin-wpgraphql-seo';
import ReadMore from "../components/Readmore/Readmore"

const CaseTemplate = ({ data: { previous, post, next  } }) => {

  const heroBlock = post.posttype_cases.blockHero
  const specialisme = post.posttype_cases.specialisme
  const caseImage = post.posttype_cases?.caseImage
  const caseVideo = post.posttype_cases?.caseVideo
  const doelstelling = post.posttype_cases?.doelstelling
  const resultaat = post.posttype_cases?.resultaat
  const letters = post.posttype_cases?.quote

  let resultImageCount = 0;
  let doelImageCount = 0;

  function getVideo() {
    if(caseVideo) {
      console.log(caseVideo)
      return (
      <section>
        <div className="casePlayer">
          <iframe src={caseVideo} frameborder="0" className={`caseFrame`} allow="autoplay" allowFullScreen title={post.title}></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </section>
      )
    }
    return <Image image={caseImage} />
  }

  function getDoelAsset() {
    if(doelstelling.video){
        return (
          <>
            <div className="casePlayer">
              <iframe src={caseVideo} frameborder="0" className={`caseFrame`} allow="autoplay" allowFullScreen title={post.title}></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </>
       )
    }

    return (
      <>
      {doelstelling?.images &&
          doelstelling.images.map(post => {
            doelImageCount++;
            return (
            <div class={`doelstelling__image image_${doelImageCount}`}>
              <GatsbyImage
                image={post.localFile.childImageSharp.gatsbyImageData}
                alt="image"
                style={{marginBottom: 50}}
                className="doelstelling__image--image"
              />
            </div>
            )
          })}
      </>
    )
  }



  return (
    <>
      <Seo post={post} />
      <Hero
      title={heroBlock.title}
      subtitle={heroBlock.subtitle}
      content={heroBlock.content}
      image={heroBlock.image?.localFile?.childImageSharp?.gatsbyImageData}
      specialisme={specialisme}
      layout="noSlideshow single"
      
      />

      <section>
        {post.content &&
          <div className="pageContent mt-14 lg:w-2/4">{parse(post.content)}</div>
        }
      </section>

      {/* {caseImage &&
      <Image image={caseImage} />
      } */}

      <Image image={caseImage} />


      {letters && 
      <Quote letters={letters}></Quote>
      }

      <section className={`doelstelling`}>
        <div class="flex items-center">
          <div className={`xl:pr-10 w-full lg:w-50 pr-5 `}>
            <h3 class="text-2xl md:text-3xl font-bold mb-5">{doelstelling?.titel}</h3>
            {doelstelling?.content &&
            
            parse(doelstelling?.content)
            
            }
          </div>
          <div className="w-full lg:w-50">
          {getDoelAsset()}
          </div>
        </div>
          
      </section>


      
      {getVideo()}

      <section className={`resultaat`}>
        <div className="pt-5 lg:pt-16">
          <div class="lg:w-3/4">
            <h3 class="text-2xl md:text-3xl font-bold mb-5">{resultaat?.titel}</h3>
            {resultaat?.content &&
            parse(resultaat?.content)
            }
          </div>
          <div class="resultaat__image flex flex-wrap lg:mt-10">
          {resultaat?.images &&
          resultaat.images.map(post => {
            resultImageCount++;
            console.log(post.localFile.childImageSharp.gatsbyImageData);
            return (
            <div class={`resultaat__image--image image_${resultImageCount}`}>
              <GatsbyImage
                image={post.localFile.childImageSharp.gatsbyImageData}
                alt="image"
                style={{marginBottom: 20}}
                className="resultaat__image--image"
              />
            </div>
            )
          })}
          </div>
        </div>
          
      </section> 

<section class="navigation flex justify-between w-full">
    <AniLink paintDrip to="/cases" className={`flex items-center w-full`}><img src={`/icons/Pijltje_blue_Lang.svg`} className="arrow arrow-small mr-2" alt="Pijl blauw" /> Terug naar overzicht</AniLink>

    {next && (
      <AniLink paintDrip to={next.uri} rel="next" className={`flex mt-3 w-full justify-end`}>
        Volgende case <img src={`/icons/Pijltje_blue_Lang.svg`} className="arrow arrow-small arrow-right ml-2" alt="Pijl blauw" />
      </AniLink>
    )}
</section>
      
    </>
  )
}

export default CaseTemplate

export const pageQuery = graphql`
  query CaseById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpCase(id: { eq: $id }) {
      id
      excerpt
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
      posttype_cases {
        blockHero {
          title
          subtitle
          content
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        specialisme {
          ... on WpDienst {
            id
            title
            uri
          }
        }
        caseImage {
          localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
        }
        caseVideo
        quote
        doelstelling {
          titel
          content
          images {
          localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          video
        }
        resultaat {
          titel
          content
          images {
          localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      footer {
        backgroundColorTop
      }
    }
    previous: wpCase(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpCase(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
