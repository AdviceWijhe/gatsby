import { graphql, useStaticQuery } from "gatsby"

export const useLinksQuery = () => {
  const data = useStaticQuery(graphql`
    query linksQuery {
      links: allWpLink(sort: {order: ASC, fields: date}) {
        nodes {
          title
          uri
          id
          categories {
            nodes {
              id
              name
              slug
            }
          }
          postTypeLinks {
            url {
              url
            }
            subLinks {
              link {
                title
                url
              }
            }
          }
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
      allWpCategory(filter: {id: {nin: "dGVybTox"}}) {
        nodes {
          id
          name
          slug
          count
        }
      }
    }
  `)

  return data
}
