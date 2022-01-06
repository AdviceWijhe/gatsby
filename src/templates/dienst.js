import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import Hero from "../components/hero"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const DienstTemplate = ({ data: { previous, post, next  } }) => {
  console.log(post);
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

     const heroBlock = post?.posttype_diensten?.blockHero


    function getHero() {
      if(heroBlock) {
        return  <Hero
      title={heroBlock?.title}
      subtitle={heroBlock?.subtitle}
      content={heroBlock?.content}
      image={heroBlock?.image?.localFile?.childImageSharp?.gatsbyImageData}
      layout="noSlideshow"
      />
      }
    }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

        {getHero()}


          <section className="wrapper">
        {post.content &&
          <div className="pageContent mt-14 lg:w-3/4">{parse(post.content)}</div>
        }
      </section>


    </Layout>
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
