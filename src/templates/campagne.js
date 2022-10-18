import Collage from "../components/Collage/Collage"
import Hero from "../components/hero"
import Links from "../components/Links/Links"
import Logos from "../components/Logos/Logos"
import MarqueeSlide from "../components/Marquee/Marquee"
import Quote from "../components/Quote/Quote"
import React from "react"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import Switch from "../components/Switch/Switch"
import TripleImages from "../components/TripleImages/TripleImages"
import { graphql } from "gatsby"
import parse from "html-react-parser"

const CampagneTemplate = (data) => {
  const blocks = data.data.wpPage.campagnePages.blocks;

  const getBlock = (layout) => {
    switch(layout.fieldGroupName) {
    case "Page_Campagnepages_Blocks_Hero":
      return <Hero 
      image={layout.image?.localFile?.childImageSharp.gatsbyImageData} 
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
    case "Page_Campagnepages_Blocks_Marquee":
      return <MarqueeSlide text={layout.text} />
    case "Page_Campagnepages_Blocks_Links":
      return <Links links={layout.text} />
    default:
      return false
  }
}


  return (
    <>
    <Seo post={data.data.wpPage} />
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
      {data.data.wpPage.content &&
        <section>
        <div className="container">
          <div className={`lg:w-2/3`}>
      {parse(data.data.wpPage.content)}
      </div>
      </div>
        </section>
      }
    </>
  )
}

export const campaignQuery = graphql`
query campaignById(
    $id: String!
  ) {
    wpPage(id: { eq: $id }) {
      content
      seo {
                title
                metaDesc
                focuskw
                metaKeywords
                metaRobotsNoindex
                metaRobotsNofollow
                opengraphTitle
                opengraphDescription
                opengraphImage {
                    altText
                    sourceUrl
                    srcSet
                }
                twitterTitle
                twitterDescription
                twitterImage {
                    altText
                    sourceUrl
                    srcSet
                }
                canonical
                cornerstone
                schema {
                    articleType
                    pageType
                    raw
                }
            }
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
                    gatsbyImageData(
                      quality: 100
                      placeholder: TRACED_SVG
                      layout: FULL_WIDTH
                    )
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
        ... on WpPage_Campagnepages_Blocks_Marquee {
            fieldGroupName
            text
          }
          ... on WpPage_Campagnepages_Blocks_Links {
            fieldGroupName
            titel
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