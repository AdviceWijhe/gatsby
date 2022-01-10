import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Layout from "../components/layout"
import Seo from "../components/seo"

const CaseTemplate = ({ data: { previous, post, next  } }) => {

  const heroBlock = post.posttype_cases.blockHero
  const specialisme = post.posttype_cases.specialisme

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />
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
          <div className="pageContent mt-14 lg:w-3/4">{parse(post.content)}</div>
        }
      </section>
    </Layout>
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
