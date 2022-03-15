import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Quote from "../components/Quote/Quote"
import Collage from "../components/Collage/Collage"
import Logos from "../components/Logos/Logos"
import TripleImages from "../components/TripleImages/TripleImages"
import Switch from "../components/Switch/Switch"


const CampagneTemplate = (data) => {
  const blocks = data.data.wpPage.campagnePages.blocks;

  const getBlock = (layout) => {
    switch(layout.fieldGroupName) {
    case "Page_Campagnepages_Blocks_Hero":
      return <Hero 
      image={layout.image.localFile.childImageSharp.gatsbyImageData} 
      title={layout.title}
      subtitle={layout.subtitle}
      content={layout.content}
      layout="noSlideshow single"
      />

    case "Page_Campagnepages_Blocks_Switch":
      console.log(layout.image)
      return(
        <Switch data={layout}></Switch>
      )
    case "Page_Campagnepages_Blocks_Quote":
      return <Quote letters={layout.quote}></Quote>

    case "Page_Campagnepages_Blocks_Collage":
        return <Collage images={layout.images}></Collage>
    case "Page_Campagnepages_Blocks_Logos":
      return <Logos images={layout.logos} title={layout.title} content={layout.content}></Logos>
    case "Page_Campagnepages_Blocks_TripleImages":
      return <TripleImages images={layout.images}></TripleImages>
    default:
      return false
  }
}


  return (
    <>
    { blocks &&
        blocks.map(post => {

          return (
            < >
            {getBlock(post)}
            </>
          )
        }
         )
      }
    </>
  )
}

export const campaignQuery = graphql`
query campaignById(
    $id: String!
  ) {
    wpPage(id: { eq: $id }) {
        campagnePages {
          blocks {
            ... on WpPage_Campagnepages_Blocks_Hero {
              fieldGroupName
              title
              subtitle
              content
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            ... on WpPage_Campagnepages_Blocks_Switch {
              content
              fieldGroupName
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            ... on WpPage_Campagnepages_Blocks_Quote {
              fieldGroupName
              quote
            }
            ... on WpPage_Campagnepages_Blocks_Collage {
              fieldGroupName
              images {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            ... on WpPage_Campagnepages_Blocks_Logos {
          content
          fieldGroupName
          title
          logos {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        ... on WpPage_Campagnepages_Blocks_TripleImages {
          fieldGroupName
          images {
              localFile {
              url
            }
            altText
            }
        }
          }
        }
              title
               footer {
      backgroundColorTop
      title
      content
    }
      }
}
`

export default CampagneTemplate