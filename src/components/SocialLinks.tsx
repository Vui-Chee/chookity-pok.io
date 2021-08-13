import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import { SiteSiteMetadataSocialLinks } from "../types"

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    query SocialLinksQuery {
      site {
        siteMetadata {
          socialLinks {
            name
            url
          }
        }
      }
    }
  `)

  const socialLinks = data.site.siteMetadata.socialLinks.map(
    (link: SiteSiteMetadataSocialLinks) => {
      return (
        <SocialLinkItem key={link.name}>
          <a href={link.url}>{link.name}</a>
        </SocialLinkItem>
      )
    }
  )

  return <SocialLinkList>{socialLinks}</SocialLinkList>
}

export default SocialLinks

const SocialLinkList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
`

const SocialLinkItem = styled.li`
  margin-right: var(--size-400);
  text-transform: uppercase;

  & a {
    color: inherit;
    font-size: var(--size-300);
  }
`
