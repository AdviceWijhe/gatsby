// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import { Link, graphql } from "gatsby"

import Hero from "../components/hero"
import React from "react"
import Seo from "../components/seo"
import parse from "html-react-parser"

const VacatureTemplate = ({ data: { previous, next, post } }) => {
  const hero = post?.postTypeVacatures?.blockHero

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />

      <Hero
      title={hero?.title}
      image={hero?.image.localFile.childImageSharp.gatsbyImageData}
      subtitle={hero?.subtitle}
      content={hero?.content}
      layout="noSlideshow single"
      />
<section className={`lg:w-3/4`} itemProp="articleBody">
        {!!post.content && (
          parse(post.content)
        )}

        <div className="container container-line mt-16">
            {
              parse(post.postTypeVacatures.wijBieden)
            }
        
        </div>
</section>
      <section>
        <nav className="blog-post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.uri} rel="prev">
                  ← {parse(previous.title)}
                </Link>
              )}
            </li>

            <li>
              {next && (
                <Link to={next.uri} rel="next">
                  {parse(next.title)} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default VacatureTemplate

export const pageQuery = graphql`
  query VacatureById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpVacature(id: { eq: $id }) {
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
      postTypeVacatures {
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
        wijBieden
      }
      footer {
        backgroundColorTop
      }
    }
    
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
