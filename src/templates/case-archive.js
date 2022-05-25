import AniLink from "gatsby-plugin-transition-link/AniLink"
import Bio from "../components/bio"
import CaseItem from "./archives/case"
import Hero from "../components/hero"
import React from "react"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { graphql } from "gatsby"

const CaseIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpCase.nodes

  if (!posts.length) {
    return (
      <>
      <Seo
                title="Case Advice | Advice Creëert Impact"
                postSchema={JSON.parse(
                    data.wp.seo.contentTypes.case.schema.raw
                )}
            />
        <Hero />
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
                title="Case Advice | Advice Creëert Impact"
                postSchema={JSON.parse(
                    data.wp.seo.contentTypes.case.schema.raw
                )}
            />
      <Hero
      title="Een succesverhaal word je niet zomaar."
      subtitle="Cases"
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
          <AniLink cover bg="#00f" duration={2} to={previousPagePath}>Previous page</AniLink>
          <br />
        </>
      )}
      {nextPagePath && <AniLink cover bg="#00f" duration={2} to={nextPagePath}>Next page</AniLink>}
    </>
  )
}

export default CaseIndex

export const caseQuery = graphql`
  query WordPressCaseArchive($offset: Int!, $postsPerPage: Int!) {
      wp {
      seo {
        contentTypes {
          case {
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
