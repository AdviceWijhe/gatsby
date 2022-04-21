// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Flexible from "../components/Flexible/Flexible"
import Hero from "../components/hero"
import React from "react"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { graphql } from "gatsby"
import parse from "html-react-parser"
import { useDienstQuery } from "../hooks/useDienstQuery"

const DienstTemplate = ({ data: { previous, post, next  } }) => {

  const heroBlock = post?.posttype_diensten?.blockHero
  const blocks = post.flexible?.blocks
  const { diensten } = useDienstQuery()


    function getHero() {
      if(heroBlock) {
        return  <Hero
      title={heroBlock?.title}
      subtitle={heroBlock?.subtitle}
      content={heroBlock?.content}
      image={heroBlock?.image?.localFile?.childImageSharp?.gatsbyImageData}
      layout="noSlideshow single"
      />
      }
    }

    function hasSubDienst() {
      let hasSub = false;
      
      diensten.nodes.map(dienst => {
        if(dienst.wpParent?.node.id === post.id) {

          hasSub = true;
        }
      })

      if(hasSub) {
        return  <p className="text-secondary"><b>Vond je dit interessant?</b> Bekijk onze andere diensten.</p>
      }

      return <AniLink paintDrip to={post.wpParent.node.uri} className={`flex items-center w-full`}><img src={`/icons/Pijltje_blue_Lang.svg`} className="arrow arrow-small mr-2" alt="Pijl blauw" /> Terug naar {post.wpParent.node.title}</AniLink>
    }

  return (
    <>
      <Seo post={post} />

        {getHero()}


        {post.content &&
          <section className="wrapper  mt-14">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
                <div className="pageContent lg:pr-10">{parse(post.content)}</div>
              
              {post.posttype_diensten.kolom2 &&
                <div className="pageContent">{parse(post.posttype_diensten.kolom2)}</div>
              }
            </div>

      </section>
      }

      { blocks &&
            blocks.map(post => {
              return <Flexible data={post} posttype="Dienst" />}
            )
      }

 <section className={`moreDiensten`}>
        { hasSubDienst() }
        {diensten &&
          diensten.nodes.map(dienst => {
            console.log(dienst)
            if(dienst.wpParent == null) {
              return false;
            }
          
            if(dienst.id === post.id ) {
              return false;
            }
            if(dienst.wpParent.node.id !== post.id) {
              return false;
            }
            return (
            <div key={dienst.title} className={``}>
              <h2><AniLink paintDrip className="text-outlined" to={dienst.uri}>{dienst.title}</AniLink></h2>
            </div>
            )
          })}
      </section>

    </>
  )
}

export default DienstTemplate

export const pageQuery = graphql`
  query DienstById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpDienst(id: { eq: $id }) {
      id
      wpParent {
        node {
          uri
          slug
          ... on WpDienst {
            title
          }
        }
      }
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
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
            flexible {
              blocks {
                ... on WpDienst_Flexible_Blocks_Collage {
                  fieldGroupName
                  collageimages {
                    altText
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
                ... on WpDienst_Flexible_Blocks_VideoOrImage {
                  fieldGroupName
                  video
                  image {
                    altText
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
                  otherImages {
                    altText
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
                ... on WpDienst_Flexible_Blocks_Quote {
                  content
                  fieldGroupName
                }
                ... on WpDienst_Flexible_Blocks_OneColumnsContent {
                  content
                  fieldGroupName
                  title
                }
                ... on WpDienst_Flexible_Blocks_TwoColumnsContent {
                  column1 {
                    content
                    title
                  }
                  fieldGroupName
                  column2 {
                    content
                    title
                  }
                }
                ... on WpDienst_Flexible_Blocks_TripleImages {
                  fieldGroupName
                  images {
                    altText
                    localFile {
                      url
                    }
                  }
                }
              }
            }
      posttype_diensten {
        blockHero {
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
        kolom2
      }
       footer {
      backgroundColorTop
      title
      content
    }
    }
    previous: wpCase(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpCase(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
