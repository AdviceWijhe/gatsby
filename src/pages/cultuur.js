import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"
import Slideshow from "../components/Slideshow/Slideshow"
import ContentImage from "../components/ContentImage/ContentImage"
import Diensten from "../components/Diensten/Diensten"
import { useKernwaardeQuery } from "../hooks/useKernwaardeQuery"
import { useTeamQuery } from "../hooks/useTeamQuery"
import { useDienstQuery } from "../hooks/useDienstQuery"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import Seo from "../components/seo"

const CultuurTemplate = ({ data: { post } }) => {
  const { kernwaarden } = useKernwaardeQuery()
  const { team } = useTeamQuery()
  const { diensten } = useDienstQuery()
  const heroBlock = post.cultuur.blockHero
  const slideShow = post.cultuur.slideshow
  const TeamSlideShow = post.cultuur.teamSlideshow
  const contentImage = post.cultuur.contentImage
  const DienstSlideshow = post.cultuur.dienstenSlideshow

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

      <section className="">
        <div className="pageContent mt-14">{parse(post.content)}</div>
      </section>

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

      <ContentImage
        settings={contentImage}
      ></ContentImage>

      <div className={`lg:hidden`}><Slideshow
        items={diensten.nodes}
        layout={DienstSlideshow.layout}
        spv={DienstSlideshow.sliderPerView}
        spaceBetween={DienstSlideshow.spaceBetween}
        title={DienstSlideshow.titel}
      ></Slideshow></div>
      <div className={`hidden lg:block`}>
        <Diensten />
      </div>
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
        contentImage {
          title
          content
          image {
            localFile {
              childImageSharp {
              gatsbyImageData
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
    }
  }
`

export default CultuurTemplate
