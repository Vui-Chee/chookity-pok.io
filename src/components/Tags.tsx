import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const toKebabCase = (str: string): string => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-")
}

const Tags: React.FC<{ tags: Array<string> }> = ({ tags }) => {
  return (
    <div>
      {tags &&
        tags.map((tag) => {
          return (
            <Tag key={tag}>
              <Link to={`/tags/${toKebabCase(tag)}`}>{tag}</Link>
            </Tag>
          )
        })}
    </div>
  )
}

export default Tags

const Tag = styled.span`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  font-size: var(--size-300);

  & a {
    position: relative;
    z-index: 2;
    text-decoration: none;
    color: inherit;
    padding: 0.2rem 0.6rem;
    border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 4px;
  }

  & a:hover {
    background-color: ${(props) => props.theme.postItem.a.hover.background};
  }
`
