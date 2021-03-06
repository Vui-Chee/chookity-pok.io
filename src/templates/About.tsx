import { graphql } from "gatsby"
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import { AboutTemplateQueryResult } from "../types"

const AboutTemplate: React.FC<{ data: AboutTemplateQueryResult["data"] }> = ({
  data,
}) => {
  const { html, frontmatter } = data.markdownRemark
  const profileImage = getImage(frontmatter.profile_image as ImageDataLike)

  return (
    <Layout title={frontmatter.title}>
      <AboutWrapper>
        <AboutImageWrapper image={profileImage} alt="" />
        <br />
        <AboutCopy dangerouslySetInnerHTML={{ __html: html }} />
      </AboutWrapper>
    </Layout>
  )
}

export default AboutTemplate

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  @media screen and (max-width: 1000px) {
    & {
      flex-direction: column;
    }

    & > * {
      margin-top: 2rem;
      width: 100%;
      text-align: center;
    }
  }
`

const AboutImageWrapper = styled(GatsbyImage)`
  display: block;
  height: 300px;
  width: 300px;

  img {
    border-radius: 50%;
  }
`

const AboutCopy = styled.div`
  max-width: 60ch;

  & p {
    font-size: var(--size-400);
  }
`

export const pageQuery = graphql`
  query AboutTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        profile_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: PNG, height: 400)
          }
        }
      }
    }
  }
`
