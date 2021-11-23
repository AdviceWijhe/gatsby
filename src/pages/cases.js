import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import Hero from "../components/hero"
import CaseItem from "../templates/archives/case"
import { useCaseQuery } from "../hooks/useCaseQuery"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data: { post } }) => {
  var { cases } = useCaseQuery()
  const heroBlock = post.cases.blockHero
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />
      <Hero
        title={heroBlock.title}
        subtitle={heroBlock.subtitle}
        content={heroBlock.content}
        image={heroBlock.image?.localFile?.childImageSharp?.gatsbyImageData}
        layout="noSlideshow"
      />

      {!!post.content && (
        <section itemProp="articleBody">
          <div className={`container`}>
            <h1 itemProp="headline">{post.title}</h1>

            <p>{post.date}</p>
            {parse(post.content)}
          </div>
        </section>
      )}

      <section className={`container`}>
        <div className={`grid grid-cols-1 md:grid-cols-2`}>
          {cases.nodes.map(post => {
            return <CaseItem item={post} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    post: wpPage(id: { eq: "cG9zdDoxMTQ=" }) {
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
      cases {
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
  }
`

export default BlogPostTemplate
