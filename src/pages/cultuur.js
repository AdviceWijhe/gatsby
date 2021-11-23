import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"
import Slideshow from "../components/Slideshow/Slideshow"
import { useKernwaardeQuery } from "../hooks/useKernwaardeQuery"
import { useTeamQuery } from "../hooks/useTeamQuery"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import Layout from "../components/layout"
import Seo from "../components/seo"

const CultuurTemplate = ({ data: { post } }) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }
  const { kernwaarden } = useKernwaardeQuery()
  const { team } = useTeamQuery()
  const heroBlock = post.cultuur.blockHero
  const slideShow = post.cultuur.slideshow
  const TeamSlideShow = post.cultuur.teamSlideshow

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

      <div className="container">
        <div className="pageContent mt-14">{parse(post.content)}</div>
      </div>

      <Slideshow
        items={kernwaarden.nodes}
        layout={slideShow.layout}
        spv={slideShow.sliderPerView}
        spaceBetween={slideShow.spaceBetween}
        title={slideShow.titel}
      ></Slideshow>

      <Slideshow
        items={team.nodes}
        layout={TeamSlideShow.layout}
        spv={TeamSlideShow.sliderPerView}
        spaceBetween={TeamSlideShow.spaceBetween}
        title={TeamSlideShow.titel}
      ></Slideshow>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    post: wpPage(id: { eq: "cG9zdDozOA==" }) {
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
      cultuur {
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
        slideshow {
          titel
          layout
          spaceBetween
          sliderPerView
        }
        teamSlideshow {
          titel
          layout
          spaceBetween
          sliderPerView
        }
      }
    }
  }
`

export default CultuurTemplate
