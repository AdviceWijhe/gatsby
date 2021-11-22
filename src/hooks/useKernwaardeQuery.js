import { useStaticQuery, graphql } from "gatsby"

export const useKernwaardeQuery = () => {
  const data = useStaticQuery(graphql`
    query kernwaardeQuery {
      kernwaarden: allWpKernwaarde {
        nodes {
          title
          excerpt
          uri
          content
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
