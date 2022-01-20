import React from "react"
import { graphql } from "gatsby"
import CaseItem from "./archives/case"
import Hero from "../components/hero"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Bio from "../components/bio"
import Seo from "../components/seo"

const CaseIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpCase.nodes

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
          return <CaseItem key={post.id} item={post} />
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

export default CaseIndex

export const caseQuery = graphql`
  query WordPressCaseArchive($offset: Int!, $postsPerPage: Int!) {
    allWpCase(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
              nodes {
          title
          excerpt
          uri
          id
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    aspectRatio: 0.60
                  )
                }
              }
            }
          }
          posttype_cases {
            archiveimage {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    aspectRatio: 1.5
                  )
                }
              }
            }
            subtitle
          }
        }
      }
    }

`
