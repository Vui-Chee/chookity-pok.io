/** @jsxImportSource theme-ui */

import React, { Fragment } from "react"
import styled from "styled-components"

import GlobalStyle from "./global-styles"
import Container from "./Container"
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./Seo"

import { useThemeUI } from "theme-ui"

const Layout: React.FC<{
  title: string
  socialImage?: string
  description?: string
}> = ({ children, title, description = "", socialImage = "" }) => {
  const context = useThemeUI()
  React.useEffect(() => {
    // testing only
    console.log("on mount", context)
  }, [])

  return (
    <Fragment>
      <GlobalStyle />
      <SEO title={title} description={description} socialImage={socialImage} />
      <LayoutWrapper
        sx={(theme) => {
          console.log(theme.rawColors)
          return {
            ...theme.rawColors,
          }
        }}
      >
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
