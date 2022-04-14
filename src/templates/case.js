// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import CaseHero from "../components/caseHero"
import Collage from "../components/Collage/Collage"
import DoubleImages from "../components/DoubleImages/DoubleImages"
import Image from "../components/Image/Image"
import Quote from "../components/Quote/Quote"
import React from "react"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import TripleImages from "../components/TripleImages/TripleImages"
import { graphql } from "gatsby"
import parse from "html-react-parser"

const CaseTemplate = ({ data: { previous, post, next  } }) => {

  const heroBlock = post.posttype_cases.blockHero
  const blocks = post.posttype_cases.blocks
  const specialisme = post.posttype_cases.specialisme


  const getBlock = (layout) => {
    switch(layout.fieldGroupName) {
    case "Case_PosttypeCases_Blocks_Collage":
      return <Collage images={layout.collageimages} />

    case "Case_PosttypeCases_Blocks_VideoOrImage":
      if(layout.video) {
      return (
        <>
      <section className="pb-0">
        <div className="casePlayer">
          <iframe src={layout.video} frameBorder="0" className={`caseFrame`} allow="autoplay" allowFullScreen title={post.title}></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>
        
      </section>
      <DoubleImages images={layout.otherImages} />
      </>
      )
    }
    return (
      <>
    <Image image={layout.image} />
    <DoubleImages images={layout.otherImages} />
    </>
    )

    case "Case_PosttypeCases_Blocks_Quote":
      return <Quote letters={layout.content} />

    case "Case_PosttypeCases_Blocks_OneColumnsContent":
      return (
        <section>
        <div className={`lg:w-2/3`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-5">{layout.title}</h3>
          {layout.content &&
            
            parse(layout.content)
            
         }
        </div>
      </section>
      )

    case "Case_PosttypeCases_Blocks_TwoColumnsContent":
      return (
      <section>
         <div className="grid grid-cols-1 lg:grid-cols-2">
           <div className="grid-1 pr-10">
              <div className="grid__title">
                <h2 className="mt-0">{layout?.column1.title}</h2>
              </div>
              <div className="grid__content">
                {parse(layout?.column1.content)}
              </div>
           </div>
           <div className="grid-2">
               <div className="grid__title">
                 {layout.column2.title &&
                <h2 className="mt-0">{layout.column2.title}</h2>
                 }
              </div>
              <div className="grid__content">
                {layout.column2.content &&
                parse(layout.column2.content)
                }
              </div>
           </div>
         </div>
      </section>
      )

    case "Case_PosttypeCases_Blocks_TripleImages":
      return <TripleImages images={layout.images} />
      
      
    default:
      return false
  }

  }

  return (
    <>
      <Seo post={post} />
      <CaseHero
      title={heroBlock.title}
      subtitle={heroBlock.subtitle}
      content={heroBlock.content}
      image={heroBlock.image?.localFile?.childImageSharp?.gatsbyImageData}
      specialisme={specialisme}
      layout="noSlideshow single"
      
      />

      <section>
        {post.content &&
          <div className="pageContent mt-14 lg:mb-10 lg:w-2/4">{parse(post.content)}</div>
        }
      </section>

      { blocks &&
        blocks.map(post => {
          return getBlock(post)}
         )
      }


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
            altText
            localFile {
              childImageSharp {
                gatsbyImageData (
                  quality: 100
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
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
        blocks {
          ... on WpCase_PosttypeCases_Blocks_Collage {
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
          ... on WpCase_PosttypeCases_Blocks_VideoOrImage {
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
          ... on WpCase_PosttypeCases_Blocks_Quote {
            content
            fieldGroupName
          }
          ... on WpCase_PosttypeCases_Blocks_OneColumnsContent {
            content
            fieldGroupName
            title
          }
          ... on WpCase_PosttypeCases_Blocks_TwoColumnsContent {
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
          ... on WpCase_PosttypeCases_Blocks_TripleImages {
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
