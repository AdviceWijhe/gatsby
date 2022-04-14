import Carousel from "../components/Carousel/Carousel"
import ContentImage from "../components/ContentImage/ContentImage"
import Hero from "../components/hero"
import MarqueeSlide from "../components/Marquee/Marquee"
import React from "react"
// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import Seo from 'gatsby-plugin-wpgraphql-seo';
import Slideshow from "../components/Slideshow/Slideshow"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { useKernwaardeQuery } from "../hooks/useKernwaardeQuery"
import { useTeamQuery } from "../hooks/useTeamQuery"

const CultuurTemplate = ({ data: { post } }) => {
  const { kernwaarden } = useKernwaardeQuery()
  const { team } = useTeamQuery()
  const heroBlock = post.cultuur.blockHero
  const slideShow = post.cultuur.slideshow
  const TeamSlideShow = post.cultuur.teamSlideshow
  const contentImage = post.cultuur.contentImage
  const MarqueeBlock = post.cultuur.marquee

  return (
    <>
      <Seo post={post} />
      <Hero
        title={heroBlock.title}
        subtitle={heroBlock.subtitle}
        content={heroBlock.content}
        image={heroBlock.image?.localFile?.childImageSharp?.gatsbyImageData}
        layout="noSlideshow"
      />

      <section className="">
        <div className="pageContent mt-14 lg:w-2/3">{parse(post.content)}</div>
      </section>

       <MarqueeSlide text={MarqueeBlock.text} />

      <Carousel
        items={kernwaarden.nodes}
        layout={slideShow.layout}
        spv={slideShow.sliderPerView}
        spaceBetween={slideShow.spaceBetween}
        title={slideShow.titel}
      ></Carousel>

      <ContentImage
        settings={contentImage}
      ></ContentImage>

      <Slideshow
        items={team.nodes}
        layout={TeamSlideShow.layout}
        spv={TeamSlideShow.sliderPerView}
        spaceBetween={TeamSlideShow.spaceBetween}
        title={TeamSlideShow.titel}
      ></Slideshow>

      

        {/* <Diensten /> */}

    </>
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
        marquee {
          text
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
        contentImage {
          title
          content
          image {
            localFile {
              childImageSharp {
              gatsbyImageData(
                quality: 100
              )
            }
          }
        }
      }
       dienstenSlideshow {
        titel
        layout
        sliderPerView
        spaceBetween
      }
      }
      footer {
      backgroundColorTop
      title
      content
    }
    }
  }
`

export default CultuurTemplate
