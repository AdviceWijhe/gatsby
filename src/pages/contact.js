import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Hero from "../components/hero"

const NotFoundPage = ({ data, location }) => {

  return (
    <>
      <Seo title="Contact" />
      <Hero></Hero>
    </>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
