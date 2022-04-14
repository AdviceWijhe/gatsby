import AniLink from "gatsby-plugin-transition-link/AniLink"
import Bio from "../components/bio"
import BlogItem from "./archives/blog"
import Hero from "../components/hero"
import React from "react"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { graphql } from "gatsby"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes

  if (!posts.length) {
    return (
      <>
        <Hero />
        <Seo
                title="Blog Advice | Advice Creëert Impact"
                postSchema={JSON.parse(
                    data.wp.seo.contentTypes.post.schema.raw
                )}
            />
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
      <Seo
                title="Blog Advice | Advice Creëert Impact"
                postSchema={JSON.parse(
                    data.wp.seo.contentTypes.post.schema.raw
                )}
            />
      <Hero
      title="Vergroot je kennis met onze blogs!"
      subtitle="Blogs"
      content="<p>Ons vak is volop in beweging, waarover wij graag schrijven.</p>"
      layout="noSlideshow single"
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
    wp {
      seo {
        contentTypes {
          post {
            metaDesc
            metaRobotsNoindex
            schemaType
            title
            schema {
                    raw
                }
            archive {
                    fullHead
                    archiveLink
                    breadcrumbTitle
                    hasArchive
                    metaDesc
                    metaRobotsNoindex
                    title
                }
          }
        }
      }
    }
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
