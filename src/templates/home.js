import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"
import Marquee from "../components/Marquee/Marquee"
import Slideshow from "../components/Slideshow/Slideshow"
// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePageTemplate = ({ data: { post, diensten, cases } }) => {
  const heroBlock = post.homepage.blockHero

  console.log("Diensten: " + diensten)

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />
      <Hero
        title={heroBlock.title}
        subtitle={heroBlock.subtitle}
        content={heroBlock.content}
        image={heroBlock.image?.localFile?.childImageSharp?.gatsbyImageData}
        slideshow={diensten.nodes}
      />

      <div className="container">
        <div className="pageContent mt-14">{parse(post.content)}</div>
      </div>
      <Slideshow items={cases.nodes} />
      <Marquee text="Synergie Aandacht Inspiratie" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query homePageQuery($id: String) {
    post: wpPage(id: { eq: $id }) {
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
      homepage {
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
    diensten: allWpDienst {
      nodes {
        title
        excerpt
        uri
      }
    }

    cases: allWpCase {
      nodes {
        title
        excerpt
        uri
        id
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default HomePageTemplate
