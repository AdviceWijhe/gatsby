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
                  gatsbyImageData
                }
              }
            }
          }
          posttype_cases {
            archiveimage {
              localFile {
                childImageSharp {
                  gatsbyImageData
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
