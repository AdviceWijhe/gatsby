import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      wpPage(id: { eq: "cG9zdDoxOQ==" }) {
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
