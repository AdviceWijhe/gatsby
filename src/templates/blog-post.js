import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Hero from "../components/hero"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BlogItem from "./archives/blog"

import { usePostQuery } from "../hooks/usePostQuery"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Seo from 'gatsby-plugin-wpgraphql-seo';

const BlogPostTemplate = ({ data: { previous, next, post } }) => {
  const hero = post?.postTypePosts?.blockHero

  let { posts } = usePostQuery();

  let postCount = 0;

  return (
    <>
      <Seo post={post} />

      <Hero
      title={hero?.title}
      image={hero?.image?.localFile?.childImageSharp?.gatsbyImageData}
      subtitle={hero?.subtitle}
      content={hero?.content}
      layout="noSlideshow single"
      />

        {!!post.content && (
          <section className={`lg:w-3/4`} itemProp="articleBody">{parse(post.content)}</section>
        )}

      <section>
        <AniLink paintDrip to="/blog" className={`flex items-center w-full`}><img src={`/icons/Pijltje_blue_Lang.svg`} className="arrow arrow-small mr-2" alt="Pijl blauw" /> Terug naar overzicht</AniLink>
      </section>

      <section>
        <p className="text-secondary"><b>Vond je dit interessant?</b> Laat je inspireren door onze andere blogs.</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {posts.nodes.map(otherPost => {
            console.log(otherPost);
            if(otherPost.id === post.id) {
              return false;
            }
              postCount++
              return postCount < 3 ? <BlogItem item={otherPost} /> : null
              
          }
          )}
          </div>
      </section>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
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
      postTypePosts {
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
