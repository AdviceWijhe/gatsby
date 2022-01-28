import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"
import Diensten from "../components/Diensten/Diensten"
import Tabs from "../components/Tabs/Tabs"
import { useDienstQuery } from "../hooks/useDienstQuery"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Seo from 'gatsby-plugin-wpgraphql-seo';

const DienstTemplate = ({ data: { previous, post, next  } }) => {

  const heroBlock = post?.posttype_diensten?.blockHero
  const { diensten } = useDienstQuery()

    function getHero() {
      if(heroBlock) {
        return  <Hero
      title={heroBlock?.title}
      subtitle={heroBlock?.subtitle}
      content={heroBlock?.content}
      image={heroBlock?.image?.localFile?.childImageSharp?.gatsbyImageData}
      layout="noSlideshow single"
      />
      }
    }

  return (
    <>
      <Seo post={post} />

        {getHero()}


          <section className="wrapper">
        {post.content &&
          <div className="pageContent mt-14 lg:w-3/4">{parse(post.content)}</div>
        }
      </section>


        <Tabs items={diensten.nodes} currentID={post.id} />
    </>
  )
}

export default DienstTemplate

export const pageQuery = graphql`
  query DienstById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpDienst(id: { eq: $id }) {
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
      posttype_diensten {
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
