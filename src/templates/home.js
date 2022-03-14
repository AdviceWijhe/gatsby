import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Slideshow from "../components/Slideshow/Slideshow"
import HomeHero from "../components/homeHero"
import MarqueeSlide from "../components/Marquee/Marquee"
import CallToAction from "../components/CallToAction/CallToAction"
import { useCaseQuery } from "../hooks/useCaseQuery"
import { useDienstQuery } from "../hooks/useDienstQuery"
// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
// import Seo from "../components/seo"
import Seo from 'gatsby-plugin-wpgraphql-seo';

const HomePageTemplate = ({ data: { post } }) => {
  const { cases } = useCaseQuery()
  const { diensten } = useDienstQuery()
  const heroBlock = post.homepage.blockHero
  const slideShow = post.homepage.slideshow
  const CTA = post.homepage.callToAction
  const MarqueeBlock = post.homepage.marquee

  return (
    <>
      <Seo post={post} />
      <HomeHero
        title={heroBlock.title}
        subtitle={heroBlock.subtitle}
        content={heroBlock.content}
        letters={heroBlock.letters}
        image={heroBlock.image?.localFile?.childImageSharp?.gatsbyImageData}
        slideshow={diensten.nodes}
        layout="homepage"
      />

      <section className="wrapper">
        <div className="pageContent mt-14 lg:w-3/4">{parse(post.content)}</div>
      </section>
      <Slideshow
        items={cases.nodes}
        layout={slideShow.layout}
        spv={slideShow.sliderPerView}
        spaceBetween={slideShow.spaceBetween}
        container={false}
      />
      <MarqueeSlide text={MarqueeBlock.text} />
      <CallToAction
        title={CTA.title}
        subtitle={CTA.subtitle}
        link={CTA.link}
        image={CTA.image?.localFile?.childImageSharp?.gatsbyImageData}
      />
    </>
  )
}

export const pageQuery = graphql`
  query homePageQuery {
    post: wpPage(id: { eq: "cG9zdDoxOQ==" }) {
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
      seo {
                title
                metaDesc
                focuskw
                metaKeywords
                metaRobotsNoindex
                metaRobotsNofollow
                opengraphTitle
                opengraphDescription
                opengraphImage {
                    altText
                    sourceUrl
                    srcSet
                }
                twitterTitle
                twitterDescription
                twitterImage {
                    altText
                    sourceUrl
                    srcSet
                }
                canonical
                cornerstone
                schema {
                    articleType
                    pageType
                    raw
                }
            }
      homepage {
        blockHero {
          title
          subtitle
          content
          letters
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
