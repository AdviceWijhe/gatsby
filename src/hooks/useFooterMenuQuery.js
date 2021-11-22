import { useStaticQuery, graphql } from "gatsby"

export const useFooterMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query FooterMenuQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
      wpMenu(name: { eq: "footerMenu" }) {
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
