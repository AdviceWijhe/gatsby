import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query menuQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
      wpMenu(name: { eq: "mainMenu" }) {
        id
        menuItems {
          nodes {
            id
            label
            url
            target
            parentId
            childItems {
              nodes {
                id
                label
                url
                target
              }
            }
          }
        }
      }
    }
  `)

  return data
}
