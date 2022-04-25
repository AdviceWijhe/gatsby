import AniLink from "gatsby-plugin-transition-link/AniLink"
import Bio from "../components/bio"
import Hero from "../components/hero"
import React from "react"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import VacatureItem from "./archives/vacature"
import { graphql } from "gatsby"

const VacatureIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpVacature.nodes

  
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
                title="Vacatures | Advice Creëert Impact"
                postSchema={JSON.parse(
                    data.wp.seo.contentTypes.vacature.schema.raw
                )}
            />
      <Hero
      title="Kom jij ons team versterken?"
      subtitle="Vacatures"
      layout="noSlideshow"
      />

        <section class="pt-0">
        <div className={`container container-line vacatures`}>
        {posts.map(post => {
          return <VacatureItem key={post.id} item={post} />
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

export default VacatureIndex

export const caseQuery = graphql`
  query WordPressVacatureArchive($offset: Int!, $postsPerPage: Int!) {
      wp {
      seo {
        contentTypes {
          vacature {
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
    allWpVacature(
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
                    aspectRatio: 1
                  )
                }
              }
            }
          }
          postTypeVacatures {
        diensten {
          ... on WpDienst {
            id
            title
          }
        }
      }
        }
      }
    }

`
