import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"
import MarqueeSlide from "../components/Marquee/Marquee"
import Slideshow from "../components/Slideshow/Slideshow"
import CallToAction from "../components/CallToAction/CallToAction"
import { useCaseQuery } from "../hooks/useCaseQuery"
import { useDienstQuery } from "../hooks/useDienstQuery"
// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const HomePageTemplate = ({ data: { post } }) => {
  const { cases } = useCaseQuery()
  const { diensten } = useDienstQuery()
  const heroBlock = post.homepage.blockHero
  const slideShow = post.homepage.slideshow
  const CTA = post.homepage.callToAction
  const MarqueeBlock = post.homepage.marquee

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
      <Slideshow items={cases.nodes} layout={slideShow.layout} />
      <MarqueeSlide text={MarqueeBlock.text} />
      <CallToAction
        title={CTA.title}
        subtitle={CTA.subtitle}
        link={CTA.link}
        image={CTA.image?.localFile?.childImageSharp?.gatsbyImageData}
      />
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
        callToAction {
          title
          subtitle
          image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          link {
            url
            title
          }
        }
        marquee {
          text
        }
        slideshow {
          layout
          spaceBetween
          sliderPerView
        }
      }
    }
  }
`

export default HomePageTemplate
