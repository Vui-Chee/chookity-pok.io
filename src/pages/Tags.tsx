import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import { TagsQueryResult } from "../types"

const toKebabCase = (str: string): string => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-")
}

const Tags: React.FC<{ data: TagsQueryResult["data"] }> = ({ data }) => {
  const tags = data.allMarkdownRemark.group

  return (
    <Layout title="All Tags">
      <h1>All Tags</h1>

      <ul>
        {tags.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${toKebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query Tags {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
