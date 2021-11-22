import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      wpPage {
        homepage {
          fieldGroupName
          blockHero {
            fieldGroupName
            title
            subtitle
            content
            image {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  return data
}
