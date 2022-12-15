import * as React from "react"
import { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostDetails from "../components/PostDetails"

const IndexPage = ({ data }) => {
  const [entradas, setEntradas] = useState([])

  useEffect(() => {
    if (data) {
      setEntradas(data?.allWpPost?.nodes)
    }
  }, [data])
console.log(entradas)
  return (
    <Layout>
      <div className="global-wrapper">
        {entradas.map((entrada, key) => {
          return <PostDetails key={key} post={entrada} />
        })}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Las Repúblicas de lo Salvaje" />

export const query = graphql`
  query Entradas {
    allWpPost {
      nodes {
        author {
          node {
            avatar {
              url
            }
            description
            name
            nickname
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        title
        featuredImage {
          node {
            sourceUrl
            mediaItemUrl
          }
        }
        slug
        content
        date
        id
      }
    }

   
  }
`

export default IndexPage
