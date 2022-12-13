import * as React from "react"
import { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const IndexPage = ({ data }) => {
 
  return (
    <Layout>
      <div className="global-wrapper">
        blog
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Las Repúblicas de lo Salvaje" />



export default IndexPage
