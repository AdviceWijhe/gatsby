import { useStaticQuery, graphql } from "gatsby"

export const useDienstQuery = () => {
  const data = useStaticQuery(graphql`
    query dienstQuery {
      diensten: allWpDienst {
        nodes {
          title
          excerpt
          uri
          id
          wpParent {
            node {
              id
            }
          }
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
