import React from "react"
import { Link, graphql } from "gatsby"
import BlogItem from "./archives/blog"

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
      <Seo title="Free Advice" />

<section className={`container mt-20`}>
        <div className={`grid grid-cols-1 md:grid-cols-2`}>
        {posts.map(post => {
          return <BlogItem key={post.id} item={post} />
        })}
        </div>
      </section>
      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
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
      }
    }
  }
`
