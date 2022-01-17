import { useStaticQuery, graphql } from "gatsby"

export const useVacatureQuery = () => {
  const data = useStaticQuery(graphql`
    query vacatureQuery {
      vacatures: allWpVacature {
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
                    aspectRatio: 1.5
                  )
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
