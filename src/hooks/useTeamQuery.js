import { useStaticQuery, graphql } from "gatsby"

export const useTeamQuery = () => {
  const data = useStaticQuery(graphql`
    query teamQuery {
      team: allWpTeam {
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
