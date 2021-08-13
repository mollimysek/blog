import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <h1>Senior product designer at Gatsby, co-founder of Lucida, travel photographer, design educator</h1>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/route66.jpg"
      />
    </Layout>
  )
}

export default IndexPage