import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"
import CaseItem from "../templates/archives/case"
import { useCaseQuery } from "../hooks/useCaseQuery"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import Layout from "../components/layout"
import Seo from "../components/seo"

const DienstenTemplate = ({ data: { post } }) => {
  var { cases } = useCaseQuery()
  // const heroBlock = post.cases.blockHero

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />
      <Hero
      // title={heroBlock.title}
      // subtitle={heroBlock.subtitle}
      // content={heroBlock.content}
      // image={heroBlock.image?.localFile?.childImageSharp?.gatsbyImageData}
      // layout="noSlideshow"
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

      <section className={`container mt-20`}>
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
  query dienstenPage($id: String) {
    post: wpPage(id: { eq: $id }) {
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

export default DienstenTemplate
