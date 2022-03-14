import React from "react"
import parse from "html-react-parser"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Hero from "../components/hero"
import Quote from "../components/Quote/Quote"
import Collage from "../components/Collage/Collage"
import Logos from "../components/Logos/Logos"
import TripleImages from "../components/TripleImages/TripleImages"


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
      return(
        <section className="switch">
          <div className="switch__inner flex flex-col lg:flex-row-reverse items-center">
            <div className="switch__image w-full lg:w-1/3">
              <GatsbyImage
                  image={layout.image.localFile.childImageSharp.gatsbyImageData}
                  alt="image"
                  className="Image__image"
                />
            </div>
            <div className="switch__content w-full lg:w-2/3 lg:pr-16">
              {parse(layout.content)}
            </div>
          </div>
        </section>
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
      }
}
`

export default CampagneTemplate