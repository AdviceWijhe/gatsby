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
        }
      }
    }
  `)

  return data
}
