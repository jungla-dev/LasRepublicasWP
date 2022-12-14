import * as React from "react"
import { useLocation } from "@reach/router"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import {
	TwitterShareButton,
	TwitterIcon,
	FacebookShareButton,
	FacebookIcon,
	WhatsappShareButton,
	WhatsappIcon,
} from "react-share"
import {
	iconMontana2,
	iconBisonte,
	iconHojitas,
	iconMontana,
	iconPulpo,
	iconHongos,
	iconVibora,
	iconArbol,
	iconLobo,
} from "../../site/img/iconos"

const IndexPage = ({ data }) => {
  const location = useLocation()

  const postUrl = `https://www.lasrepublicasdelosalvaje.blog/${location}`
  const postData = data?.allWpPost?.nodes[0]
  const { title, date, featuredImage, author, categories, content } = postData

  const { mediaItemUrl: image } = featuredImage?.node
  const {name: autor} = author?.node
  const tags = categories?.nodes

  return (
    <Layout>
      <section className="section">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <div className="hero-post-wrapper">
            <figure className="blog-post-img">
              <img src={image} alt={title} />
            </figure>

            <div className="hero-post-wrapper-box-header">
              <div className="hero-post-wrapper-box">
                <div className="hero-post-wrapper-header">
                  <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                    {title}
                  </h1>
                  <div className="hero-post-wrapper-header-author">
                    {/* <div className="flag">
                      <div>
                        <img src={findIcon[icon] || iconMontana2} alt="icon" />
                      </div>
                    </div> */}
                    <span>{autor}</span>
                    <div className="date">{date}</div>
                    <div className="tags">
                      {!!tags?.length ? (
                        tags?.map((tag, key) => {
                          return (
                            <Link
                              key={key}
                              to={`/tags/${tag.slug}/`}
                              itemProp="url"
                            >
                              <span className="tag">{tag.name}</span>
                            </Link>
                          )
                        })
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="global-wrapper">
				<div className="articleBody">
          <div
							dangerouslySetInnerHTML={{
								__html: content,
							}}></div>
				</div>

				<hr />
				<div className="socialmedia-footer">
					<TwitterShareButton url={postUrl} title={title}>
						<TwitterIcon
							size={30}
							round={true}
							iconFillColor="#6484a1"
							bgStyle={{ fill: "transparent" }}
						/>
					</TwitterShareButton>

					<FacebookShareButton url={postUrl}>
						<FacebookIcon
							size={30}
							round={true}
							iconFillColor="#6484a1"
							bgStyle={{ fill: "transparent" }}
						/>
					</FacebookShareButton>
					<WhatsappShareButton url={postUrl} title={title}>
						<WhatsappIcon
							size={26}
							round={true}
							iconFillColor="#6484a1"
							bgStyle={{ fill: "transparent" }}
						/>
					</WhatsappShareButton>
				</div>
				{/* {author && (
					<footer>
						<Bio
							author={author?.frontmatter?.author}
							descripcion={author?.frontmatter?.description}
							image={author?.frontmatter?.image}
							post
						/>
					</footer>
				)} */}
			</div>
      </section>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const location = useLocation()
  const slug = location?.pathname.replace("blog/", "").replaceAll("/", "")
  const postData = data?.allWpPost?.nodes[0]

  const { title, excerpt } = postData

  return (
    <Seo title={title} description={excerpt}>
      <meta
        property="image"
        content="https://www.lasrepublicasdelosalvaje.blog/img/og-image.jpg"
      />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://www.lasrepublicasdelosalvaje.blog/blog/${slug}`}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={`https://www.lasrepublicasdelosalvaje.blog/blog/${slug}`}
      />
    </Seo>
  )
}

export const query = async () =>
  await graphql`
    query Entradas {
      allWpPost(filter: { slug: { eq: "axkan-kema-asi-mero2" } }) {
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
          excerpt
        }
      }
    }
  `

export default IndexPage
