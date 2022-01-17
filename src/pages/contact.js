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
      <section className={`section pt-0`}>
        <div className={`container border-l`}>
        <div className={`contactInfo lg:w-2/4 text-white`}>
          <div className={`flex py-5 items-center border-b text-white`}>
            <p className={`block mb-0 mr-10`}>Email</p> <h3 className={`text-3xl lg:text-4xl font-bold block mr-10`}>contact@advice.nl</h3> <i class="fal fa-2x fa-long-arrow-right block"></i>
          </div>
          <div className={`flex py-5 items-center`}>
            <p className={`block mb-0 mr-10`}>Telefoon</p> <h3 className={`text-3xl lg:text-4xl font-bold mr-10`}>0570 52 11 52</h3> <i class="fal fa-2x fa-long-arrow-right"></i>
          </div>
        </div>

        <div className={`text-white mt-10`}>
          <h3 className={`text-2xl font-bold mb-5`}>Waar kan je ons vinden?</h3>
          <p className={`mb-0`}>Villa Waterloo</p>
          <p className={`mb-0`}>Stationsweg 25</p>
          <p className={`mb-0`}>8131 DG Wijhe</p>
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
    }
  }
`
