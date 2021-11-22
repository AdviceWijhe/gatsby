import { useStaticQuery, graphql } from "gatsby"

export const useTopMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query topMenuQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
      topMenu: wpMenu(name: { eq: "topMenu" }) {
        id
        name
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
