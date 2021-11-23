import React from "react"
import { Link, graphql } from "gatsby"
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
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />
      <Hero />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          {/* if we have a featured image for this post let's display it */}
          {featuredImage?.data && (
            <GatsbyImage
              image={featuredImage.data}
              alt={featuredImage.alt}
              style={{ marginBottom: 50 }}
            />
          )}
        </header>

        {!!post.content && (
          <section itemProp="articleBody">
            <div className={`container`}>
              <h1 itemProp="headline">{post.title}</h1>

              <p>{post.date}</p>
              {parse(post.content)}
            </div>
          </section>
        )}

        <div className={`container`}>
          <div className={`grid grid-cols-1 md:grid-cols-2`}>
            {cases.nodes.map(post => {
              return <CaseItem item={post} />
            })}
          </div>
        </div>
      </article>
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
    }
  }
`

export default BlogPostTemplate
