import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useDienstQuery } from "../hooks/useDienstQuery"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Seo from 'gatsby-plugin-wpgraphql-seo';

const DienstTemplate = ({ data: { previous, post, next  } }) => {

  const heroBlock = post?.posttype_diensten?.blockHero
  const { diensten } = useDienstQuery()

    function getHero() {
      if(heroBlock) {
        return  <Hero
      title={heroBlock?.title}
      subtitle={heroBlock?.subtitle}
      content={heroBlock?.content}
      image={heroBlock?.image?.localFile?.childImageSharp?.gatsbyImageData}
      layout="noSlideshow single"
      />
      }
    }

  return (
    <>
      <Seo post={post} />

        {getHero()}


          <section className="wrapper  mt-14">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {post.content &&
                <div className="pageContent lg:pr-10">{parse(post.content)}</div>
              }
              {post.posttype_diensten.kolom2 &&
                <div className="pageContent">{parse(post.posttype_diensten.kolom2)}</div>
              }
            </div>

      </section>

 <section className={`moreDiensten`}>
        <p className="text-secondary"><b>Vond je dit interessant?</b> Bekijk onze andere diensten.</p>
        {diensten &&
          diensten.nodes.map(dienst => {
            if(dienst.wpParent != null) {
              return false;
            }
            if(dienst.id === post.id ) {
              return false;
            }
            return (
            <div key={dienst.title} className={``}>
              <h2><AniLink paintDrip className="text-outlined" to={dienst.uri}>{dienst.title}</AniLink></h2>
            </div>
            )
          })}
      </section>

    </>
  )
}

export default DienstTemplate

export const pageQuery = graphql`
  query DienstById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpDienst(id: { eq: $id }) {
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
      posttype_diensten {
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
        kolom2
      }
    }
    previous: wpCase(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpCase(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
