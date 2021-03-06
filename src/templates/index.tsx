import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import PostList from "../components/PostList"
import StyledLink from "../components/styled-link"
import { MainTemplateQueryResult } from "../types"

const HomePage: React.FC<{ data: MainTemplateQueryResult["data"] }> = ({
  data,
}) => {
  const posts = data.allMarkdownRemark.nodes
  const intro = data.markdownRemark.html
  const title = data.markdownRemark.frontmatter.title

  return (
    <Layout title={title}>
      <Intro
        dangerouslySetInnerHTML={{
          __html: intro,
        }}
      />

      <PostList posts={posts} />
      <StyledLink
        css={`
          display: block;
          margin-top: var(--size-800);
          margin-bottom: var(--size-800);
          margin-left: auto;
          margin-right: auto;
          width: fit-content;
        `}
        to="/blog"
      >
        View All posts
      </StyledLink>
    </Layout>
  )
}

export default HomePage

const Intro = styled.div`
  display: block;
  text-align: left
  max-width: 60ch;
  margin-right: auto;
  margin-left: auto;
  margin-top: var(--size-800);
  margin-bottom: var(--size-900);

  > h1 {
    ${(props) => props.theme.text}
  }

  & p {
    text-transform: capitalize;
    font-size: var(--size-400);
  }

  @media screen and (max-width: 700px) {
    & h1 {
      font-size: var(--size-700);
    }
  }
`

export const pageQuery = graphql`
  query MainTemplate($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 9
    ) {
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          tags
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
