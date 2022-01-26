import { useStaticQuery, graphql } from "gatsby"

export const usePostQuery = () => {
  const data = useStaticQuery(graphql`
    query postQuery {
      posts: allWpPost {
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
                  placeholder: BLURRED
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
