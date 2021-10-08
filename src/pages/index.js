import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const indexPage = () => {
  return (
   <Layout pageTitle="Home Page">
     <p>I'm making this by following the Gatsby Tutorial</p>
    <StaticImage alt="Een hond" src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" />
   </Layout>
  )
}

export default indexPage