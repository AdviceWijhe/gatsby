import { useStaticQuery, graphql } from "gatsby"

export const usePageQuery = () => {
  const data = useStaticQuery(graphql`
    query pageQuery {
      pages: allWpPage(sort: {order: ASC, fields: date}) {
        nodes {
          title
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
