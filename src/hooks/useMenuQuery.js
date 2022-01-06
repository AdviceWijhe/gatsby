import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query menuQuery {
      wp {
        generalSettings {
          title
          description
        }
        themeGeneralSettings {
          socials {
            facebook {
              url
            }
            instagram {
              url
            }
            linkedin {
              url
            }
          }
        }
      }
      wpMenu(name: { eq: "mainMenu" }) {
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
