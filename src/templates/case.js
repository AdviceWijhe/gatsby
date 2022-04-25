// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import CaseHero from "../components/caseHero"
import Flexible from "../components/Flexible/Flexible"
import React from "react"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { graphql } from "gatsby"
import parse from "html-react-parser"

const CaseTemplate = ({ data: { previous, post, next  } }) => {

  const heroBlock = post.posttype_cases.blockHero
  const blocks = post.flexible?.flexibleblocks
  const specialisme = post.posttype_cases.specialisme


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
              return <Flexible data={post} posttype="Case"/>}
            )
      }


<section className="navigation flex justify-between w-full">
    <AniLink cover bg="#00f" duration={2} to="/cases" className={`flex items-center w-full`}><img src={`/icons/Pijltje_blue_Lang.svg`} className="arrow arrow-small mr-2" alt="Pijl blauw" /> Terug naar overzicht</AniLink>

    {next && (
      <AniLink cover bg="#00f" duration={2} to={next.uri} rel="next" className={`flex w-full justify-end`}>
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
      flexible {
        flexibleblocks {
          ... on WpCase_Flexible_Flexibleblocks_Collage {
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
          ... on WpCase_Flexible_Flexibleblocks_VideoOrImage {
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
          ... on WpCase_Flexible_Flexibleblocks_Quote {
            content
            fieldGroupName
          }
          ... on WpCase_Flexible_Flexibleblocks_OneColumnsContent {
            content
            fieldGroupName
            title
          }
          ... on WpCase_Flexible_Flexibleblocks_TwoColumnsContent {
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
          ... on WpCase_Flexible_Flexibleblocks_TripleImages {
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
