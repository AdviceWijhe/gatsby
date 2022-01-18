import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"
import VacatureItem from "../templates/archives/vacature"
import { useVacatureQuery } from "../hooks/useVacatureQuery"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import Seo from "../components/seo"

const CasesTemplate = ({ data: { post } }) => {
  var { vacatures } = useVacatureQuery()
  const heroBlock = post.vacatures.blockHero

  return (
    <>
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

      <section className={` mt-10 md:mt-0 lg:mt-5`}>
        <div className={`grid grid-cols-1`}>
          {vacatures.nodes.map(post => {
            return <VacatureItem item={post} />
          })}
        </div>
      </section>
    </>
  )
}

export const pageQuery = graphql`
  query {
    post: wpPage(id: { eq: "cG9zdDo3MQ==" }) {
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
      vacatures {
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
      footer {
        backgroundColorTop
      }
    }
  }
`

export default CasesTemplate
