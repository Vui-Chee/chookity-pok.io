import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { BlogQueryResult } from "../types"
import Tags from "./Tags"

// Extract types for each post
type MarkdownNodes = BlogQueryResult["data"]["allMarkdownRemark"]["nodes"]
type MarkdownNode = ArrayElement<MarkdownNodes>
type SinglePost = Pick<MarkdownNode["fields"], "slug"> &
  Pick<MarkdownNode["frontmatter"], "title" | "date" | "description" | "tags"> &
  Pick<MarkdownNode, "timeToRead" | "excerpt">

const PostList: React.FC<{
  posts: MarkdownNodes
}> = ({ posts }) => {
  const PostList = posts.map(({ frontmatter, fields, excerpt, timeToRead }) => {
    const { title, tags, date, description } = frontmatter
    const { slug } = fields

    return (
      <PostListItem
        key={slug}
        tags={tags}
        title={title}
        date={date}
        slug={slug}
        timeToRead={timeToRead}
        description={description}
        excerpt={excerpt}
      />
    )
  })

  return <StyledPostList>{PostList}</StyledPostList>
}

export default PostList

const PostListItem: React.FC<SinglePost> = ({
  title,
  date,
  timeToRead,
  tags,
  excerpt,
  description,
  slug,
}) => {
  return (
    <StyledPostListItem>
      <Tags tags={tags} />

      <PostListTitle>
        <Link to={slug}>{title}</Link>
      </PostListTitle>
      <PostListExcerpt
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />
      <PostListMeta>
        <span>{date}</span>

        <span>{timeToRead} mins</span>
      </PostListMeta>
    </StyledPostListItem>
  )
}

const StyledPostList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  grid-gap: var(--size-600);
  grid-template-columns: 1fr;

  @media screen and (max-width: 500px) {
    & {
      display: block;
    }
  }
`

const StyledPostListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: ${(props) => props.theme.postItem.background};
  backdrop-filter: blur(10px);
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.postItem.hover.background};
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }
`

const PostListTitle = styled.h2`
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-size: var(--size-600);
  font-weight: 700;

  & a {
    text-decoration: none;
    color: inherit;
  }

  & a::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

const PostListExcerpt = styled.p`
  margin-top: auto;
  font-size: var(--size-400);
`

const PostListMeta = styled.div`
  margin-top: 2rem;

  font-size: var(--size-300);
  display: flex;
  justify-content: space-between;
`
