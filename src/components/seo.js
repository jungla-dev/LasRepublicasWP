/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${title}` : title}</title>
      
					<title>{title}</title>
					<meta name='description' content={description} />
					<meta property="image" content="https://www.lasrepublicasdelosalvaje.blog/img/og-image.jpg"/>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href={`https://www.lasrepublicasdelosalvaje.blog/img/apple-touch-icon.png`}
					/>
					<link
						rel='icon'
						type='image/png'
						href={`https://www.lasrepublicasdelosalvaje.blog/img/favicon-32x32.png`}
						sizes='32x32'
					/>
					<link
						rel='icon'
						type='image/png'
						href={`https://www.lasrepublicasdelosalvaje.blog/img/favicon-16x16.png`}
						sizes='16x16'
					/>

					<link
						rel='mask-icon'
						href={`https://www.lasrepublicasdelosalvaje.blog/img/safari-pinned-tab.svg`}
					
					/>
					

	
					<meta property="og:type" content="website"/>
					<meta property="og:url" content={`https://www.lasrepublicasdelosalvaje.blog/`}/>
					<meta property="og:title" content={title}/>
					<meta property="og:description" content={description}/>
					<meta property="og:image" content={`https://www.lasrepublicasdelosalvaje.blog/img/og-image.jpg`}/>

			
					<meta property="twitter:card" content="summary_large_image"/>
					<meta property="twitter:url" content="https://www.lasrepublicasdelosalvaje.blog/"/>
					<meta property="twitter:title" content={title}/>
					<meta property="twitter:description" content={description}/>
					<meta property="twitter:image" content="https://www.lasrepublicasdelosalvaje.blog/img/og-image.jpg"/>

      {children}
    </>
  )
}

export default Seo
