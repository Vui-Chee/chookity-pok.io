import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import PostList from "../components/PostList"
import StyledLink from "../components/styled-link"
import { SitePageContext, TagsTemplateQueryResult } from "../types"

const TagsTemplate: React.FC<{
  pageContext: SitePageContext
  data: TagsTemplateQueryResult["data"]
}> = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const posts = data.allMarkdownRemark.nodes
  const title = `Posts tagged ${tag}`

  return (
    <Layout title={title}>
      <TagsTemplateWrapper>
        <Title>
          {totalCount} posts tagged "{tag}"
        </Title>
        <Link
          css={`
            margin-top: var(--size-400);
            display: inline-block;
            color: inherit;
            text-transform: uppercase;
          `}
          to="/tags"
        >
          view all tags
        </Link>
        <PostList posts={posts} />

        <StyledLink
          css={`
            margin-top: var(--size-400);
            display: inline-block;
          `}
          to="/tags"
        >
          View All tags
        </StyledLink>
      </TagsTemplateWrapper>
    </Layout>
  )
}

export default TagsTemplate

const TagsTemplateWrapper = styled.div`
  padding-top: var(--size-900);
`

const Title = styled.h1`
  font-size: var(--size-700);
`

export const pageQuery = graphql`
  query TagsTemplate($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { contentType: { eq: "posts" } }
      }
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          tags
          title
        }
        timeToRead
        excerpt
      }
    }
  }
`
