import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Hero from "../components/hero"

const ContactPage = ({ data: {post} }) => {

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />
       <Hero
      title="Zullen we afspreken?"
      subtitle="Contact"
      layout="noSlideshow text-white"
      />
      <section></section>
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
    }
  }
`
