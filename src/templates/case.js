import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "../components/Image/Image"
import Collage from "../components/Collage/Collage"
import TripleImages from "../components/TripleImages/TripleImages"
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

const CaseTemplate = ({ data: { previous, post, next  } }) => {

  const heroBlock = post.posttype_cases.blockHero
  const specialisme = post.posttype_cases.specialisme
  const caseImages = post.posttype_cases?.caseImages
  const caseVideo = post.posttype_cases?.caseVideo
  const doelstelling = post.posttype_cases?.doelstelling
  const resultaat = post.posttype_cases?.resultaat
  const letters = post.posttype_cases?.quote
  const tripleImages = post.posttype_cases.tripleimages

  let resultImageCount = 0;
  let doelImageCount = 0;

  function getVideo() {
    if(caseVideo) {
      return (
      <section className="pb-0">
        <div className="casePlayer">
          <iframe src={caseVideo} frameBorder="0" className={`caseFrame`} allow="autoplay" allowFullScreen title={post.title}></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </section>
      )
    }
    return <Image image={resultaat.images[3]} />
  }

  function getDoelAsset() {
    if(doelstelling.video){
        return (
          <>
            <div className="casePlayer">
              <iframe src={doelstelling.video} frameBorder="0" className={`caseFrame`} allow="autoplay" allowFullScreen title={post.title}></iframe>
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
            <div key={post.localFile} className={`doelstelling__image image_${doelImageCount}`}>
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

      <Collage images={caseImages} />

      {letters && 
        <Quote letters={letters}></Quote>
      }

      <section>
        <div className={``}>
            <h3 className="text-2xl md:text-3xl font-bold mb-5">{doelstelling?.titel}</h3>
          {doelstelling?.content &&
            
            parse(doelstelling?.content)
            
         }
        </div>
      </section>

      <TripleImages images={tripleImages} />

      <section>
         <div className="grid grid-cols-1 lg:grid-cols-2">
           <div className="grid-1 pr-10">
              <div className="grid__title">
                <h2>{resultaat?.titel}</h2>
              </div>
              <div className="grid__content">
                {parse(resultaat?.content)}
              </div>
           </div>
           <div className="grid-2">
               <div className="grid__title">
                <h2>{resultaat?.secondtitle}</h2>
              </div>
              <div className="grid__content">
                {resultaat.secondcontent &&
                parse(resultaat?.secondcontent)
                }
              </div>
           </div>
         </div>
      </section>
        {getVideo()}
      <section className="pt-0">
        <div className="resultaat__image flex flex-wrap">
          {resultaat?.images &&
          resultaat.images.map(post => {
            resultImageCount++;
            if(resultImageCount > 2) {
              return false;
            }            
            return (
            <div key={post.title} className={`resultaat__image--image image_${resultImageCount}`}>
              <GatsbyImage
                image={post.localFile.childImageSharp.gatsbyImageData}
                alt="image"
                className="resultaat__image--image"
              />
            </div>
            )
          })}
          </div>
      </section>


<section className="navigation flex justify-between w-full">
    <AniLink paintDrip to="/cases" className={`flex items-center w-full`}><img src={`/icons/Pijltje_blue_Lang.svg`} className="arrow arrow-small mr-2" alt="Pijl blauw" /> Terug naar overzicht</AniLink>

    {next && (
      <AniLink paintDrip to={next.uri} rel="next" className={`flex w-full justify-end`}>
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
        caseImages {
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
          video
        }
        tripleimages {
           localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
        }
        resultaat {
          titel
          content
          secondtitle
          secondcontent
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
