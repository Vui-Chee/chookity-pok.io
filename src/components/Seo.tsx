import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO: React.FC<{
  description: string
  title: string
  socialImage: string
  lang?: string
  meta?: {
    name: string
    content: string
  }[]
}> = ({ description, title, lang = "en", meta = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - ${defaultTitle}`}
      defaultTitle={defaultTitle}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
