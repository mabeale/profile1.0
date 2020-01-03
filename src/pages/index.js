import React from "react"
//import { Link } from "gatsby"
import { SocialIcon } from "react-social-icons"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SocialIcon url="https://github.com/mabeale" />
    <SocialIcon url="https://twitter.com/markbealedev" />
    <SocialIcon url="https://instagram.com/markalanbeale" />
    <SocialIcon url="https://open.spotify.com/user/mabeale" />
    <SocialIcon url="https://dev.to/mabeale" />
    <SocialIcon url="https://www.freecodecamp.org/mabeale" />
  </Layout>
)

export default IndexPage
