import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {

  return (
    <>
      <Seo title="404: Not Found" />

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
