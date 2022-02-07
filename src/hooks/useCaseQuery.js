import { useStaticQuery, graphql } from "gatsby"

export const useCaseQuery = () => {
  const data = useStaticQuery(graphql`
    query caseQuery {
      cases: allWpCase {
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
                    quality: 100
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
                    quality: 100
                  )
                }
              }
            }
            subtitle
          }
        }
      }
    }
  `)

  return data
}
