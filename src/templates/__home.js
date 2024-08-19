// import CallToAction from "../components/CallToAction/CallToAction"
// import Flexible from "../components/Flexible/Flexible"
// import HomeHero from "../components/homeHero"
// import MarqueeSlide from "../components/Marquee/Marquee"
// import React from "react"
// // We're using Gutenberg so we need the block styles
// // these are copied into this project due to a conflict in the postCSS
// // version used by the Gatsby and @wordpress packages that causes build
// // failures.
// // @todo update this once @wordpress upgrades their postcss version
// // import Seo from "../components/seo"
// import Seo from 'gatsby-plugin-wpgraphql-seo';
// import Slideshow from "../components/Slideshow/Slideshow"
// import { graphql } from "gatsby"
// import parse from "html-react-parser"
// import { useCaseQuery } from "../hooks/useCaseQuery"
// import { useDienstQuery } from "../hooks/useDienstQuery"

// const HomePageTemplate = ({ data: { post } }) => {
//   const { cases } = useCaseQuery()
//   const { diensten } = useDienstQuery()
//   const heroBlock = post.homepage.blockHero
//   const slideShow = post.homepage.slideshow
//   const CTA = post.homepage.callToAction
//   const MarqueeBlock = post.homepage.marquee
//   const blocks = post.flexible?.flexibleblocks

//   const titles = post.homepage.blockHero.titles
//   var randomTitle = titles[Math.floor(Math.random()*titles.length)];


//   return (
//     <>
//       <Seo post={post} />
//       <HomeHero
//         title={randomTitle.title}
//         subtitle={heroBlock.subtitle}
//         content={heroBlock.content}
//         letters={heroBlock.letters}
//         image={heroBlock.image?.localFile?.childImageSharp?.gatsbyImageData}
//         slideshow={diensten.nodes}
//         layout="homepage"
//       />

//       <section className="wrapper">
//         <div className="pageContent mt-14 lg:w-3/4">{parse(post.content)}</div>
//       </section>
//       <Slideshow
//         items={cases.nodes}
//         layout={slideShow.layout}
//         spv={slideShow.sliderPerView}
//         spaceBetween={slideShow.spaceBetween}
//         container={false}
//       />
//       <MarqueeSlide text={MarqueeBlock.text} />
//       <CallToAction
//         title={CTA.title}
//         subtitle={CTA.subtitle}
//         link={CTA.link}
//         image={CTA.image?.localFile?.childImageSharp?.gatsbyImageData}
//       />

//       { blocks &&
//             blocks.map(post => {
//               return <Flexible data={post} posttype="Page"/>}
//             )
//       }
//     </>
//   )
// }

// export const pageQuery = graphql`
//   query homePageQuery {
//     post: wpPage(id: { eq: "cG9zdDoxOQ==" }) {
//       id
//       content
//       title
//       date(formatString: "MMMM DD, YYYY")
//       featuredImage {
//         node {
//           altText
//           localFile {
//             childImageSharp {
//               gatsbyImageData(
//                 quality: 100
//                 placeholder: TRACED_SVG
//                 layout: FULL_WIDTH
//               )
//             }
//           }
//         }
//       }
//       seo {
//                 title
//                 metaDesc
//                 focuskw
//                 metaKeywords
//                 metaRobotsNoindex
//                 metaRobotsNofollow
//                 opengraphTitle
//                 opengraphDescription
//                 opengraphImage {
//                     altText
//                     sourceUrl
//                     srcSet
//                 }
//                 twitterTitle
//                 twitterDescription
//                 twitterImage {
//                     altText
//                     sourceUrl
//                     srcSet
//                 }
//                 canonical
//                 cornerstone
//                 schema {
//                     articleType
//                     pageType
//                     raw
//                 }
//             }
//       homepage {
//         blockHero {
//           title
//           titles {
//             title
//           }
//           subtitle
//           content
//           letters
//           image {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData
//               }
//             }
//           }
//         }
//         callToAction {
//           title
//           subtitle
//           image {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData
//               }
//             }
//           }
//           link {
//             url
//             title
//           }
//         }
//         marquee {
//           text
//         }
//         slideshow {
//           layout
//           spaceBetween
//           sliderPerView
//         }
//       }
//       flexible {
//         flexibleblocks {
//           ... on WpPage_Flexible_Flexibleblocks_Collage {
//             fieldGroupName
//             collageimages {
//               altText
//               localFile {
                
//                 childImageSharp {
//                   gatsbyImageData(
//                   quality: 100
//                   placeholder: TRACED_SVG
//                   layout: FULL_WIDTH
//                 )
//                 }
//               }
//             }
//           }
//           ... on WpPage_Flexible_Flexibleblocks_VideoOrImage {
//             fieldGroupName
//             video
//             image {
//               altText
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData(
//                   quality: 100
//                   placeholder: TRACED_SVG
//                   layout: FULL_WIDTH
//                 )
//                 }
//               }
//             }
//             otherImages {
//               altText
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData(
//                   quality: 100
//                   placeholder: TRACED_SVG
//                   layout: FULL_WIDTH
//                 )
//                 }
//               }
//             }
//           }
//           ... on WpPage_Flexible_Flexibleblocks_Quote {
//             content
//             fieldGroupName
//           }
//           ... on WpPage_Flexible_Flexibleblocks_OneColumnsContent {
//             content
//             fieldGroupName
//             title
//           }
//           ... on WpPage_Flexible_Flexibleblocks_TwoColumnsContent {
//             column1 {
//               content
//               title
//             }
//             fieldGroupName
//             column2 {
//               content
//               title
//             }
//           }
//           ... on WpPage_Flexible_Flexibleblocks_TripleImages {
//             fieldGroupName
//             images {
//               altText
//               localFile {
//                 url
//               }
//             }
//           }
//         }
//       }
//        footer {
//       backgroundColorTop
//       title
//       content
//     }
//     }
//   }
// `

// export default HomePageTemplate
