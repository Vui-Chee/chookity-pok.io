import React, { Fragment } from "react"
import styled from "styled-components"

import SEO from "./Seo"
import Header from "./Header"
import Footer from "./Footer"
import Container from "./Container"
import GlobalStyle from "./global-styles"

const Layout: React.FC<{
  children: React.ReactChildren
  title: string
  description: string
  socialImage: string
}> = ({ children, title, description, socialImage = "" }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <SEO title={title} description={description} socialImage={socialImage} />
      <LayoutWrapper>
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </LayoutWrapper>
    </Fragment>
  )
}

export default Layout

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & main {
    margin-top: auto;
    margin-bottom: auto;
  }

  & footer {
    margin-top: auto;
  }
`
