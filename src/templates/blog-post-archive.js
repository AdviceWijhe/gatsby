import React from "react"
import { graphql } from "gatsby"
import BlogItem from "./archives/blog"
import Hero from "../components/hero"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Bio from "../components/bio"
import Seo from "../components/seo"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <>
        <Hero />
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </>
    )
  }

  return (
    <>

      <Hero
      title="Vergroot je kennis met onze blogs!"
      subtitle="Blog"
      content="<p>Ons vak is volop in beweging, waarover wij graag schrijven.</p>"
      layout="noSlideshow"
      />

        <section>
        <div className={`grid lg:grid-cols-2 gap-5`}>
        {posts.map(post => {
          return <BlogItem key={post.id} item={post} />
        })}
      </div>
      </section>
      {previousPagePath && (
        <>
          <AniLink to={previousPagePath}>Previous page</AniLink>
          <br />
        </>
      )}
      {nextPagePath && <AniLink to={nextPagePath}>Next page</AniLink>}
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "DD MMMM YYYY")
        title
        excerpt
        featuredImage {
        node {
          localFile {
            childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  aspectRatio: 1.5
                )
              }
            }
          }
        }
      }
      }
    }

`
