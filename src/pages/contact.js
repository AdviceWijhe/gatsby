import Hero from "../components/hero"
import React from "react"
import Seo from 'gatsby-plugin-wpgraphql-seo';
import { graphql } from "gatsby"

const ContactPage = ({ data: {post} }) => {

  return (
    <>
      <Seo post={post} />
       <Hero
      title="Zullen we afspreken?"
      subtitle="Contact"
      layout="noSlideshow text-white"
      />
      <section className={`section pt-0`}>
        <div className={`container border-l`}>
        <div className={`contactInfo lg:w-2/4 text-white`}>
          
          <a href="tel:0570521152" className={`flex  py-5 lg:items-center border-b text-white`}>
            <h3 className={`text-xl lg:text-4xl font-bold mr-10`}>085 029 0100</h3> <i className="fal text-xl fa-long-arrow-right"></i>
          </a>
          <a href="mailto:contact@advice.nl" className={`flex  py-5 lg:items-center text-white`}>
            <h3 className={`text-xl lg:text-4xl font-bold block mr-10`}>contact@advice.nl</h3> <i className="fal text-xl fa-long-arrow-right block"></i>
          </a>
        </div>

        <div className={`text-white mt-10 lg:mt-24 lg:pt-10`}>
          <h3 className={`text-2xl font-bold mb-5`}>Waar kan je ons vinden?</h3>

          <p className={`mb-0`}>Hanzelaan 351</p>
            <p className={`mb-0`}>8017 JM Zwolle</p>
     
        </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query {
    post: wpPage(id: { eq: "cG9zdDoyOQ==" }) {
      id
      title
      slug
      content
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
    }
  }
`
