import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const aboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
            <StaticImage alt="Een kat" src="https://scanner.siwalusoftware.com/breed_images/cat/calico_cat/calico_cat.jpg" />
        </Layout>
    )
}

export default aboutPage