import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"
import Image from "../components/Image/Image"
import Tabs from "../components/Tabs/Tabs"
import { useDienstQuery } from "../hooks/useDienstQuery"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import Seo from 'gatsby-plugin-wpgraphql-seo';

const DienstenTemplate = ({ data: { post } }) => {
  // const heroBlock = post.cases.blockHero
  const { diensten } = useDienstQuery()
  const heroBlock = post.diensten.blockHero
  const imageData = post.diensten.image.image
  // const footer = post.footer

  return (
    <>
      <Seo post={post} />
      
      <Hero
      title={heroBlock.title}
      subtitle={heroBlock.subtitle}
      content={heroBlock.content}
      image={heroBlock.image?.localFile?.childImageSharp?.gatsbyImageData}
      layout="noSlideshow"
      />

      <section className="wrapper">
        <div className="pageContent lg:mt-14 lg:w-3/4">{parse(post.content)}</div>
      </section>

      {/* <Image image={imageData} /> */}

      <Tabs items={diensten.nodes} />

    </>
  )
}

export const pageQuery = graphql`
  query dienstenPage {
    post: wpPage(id: { eq: "cG9zdDoxNDk=" }) {
           id
      title
      content
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
      diensten {
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
        image {
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                )
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

export default DienstenTemplate
