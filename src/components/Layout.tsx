/** @jsxImportSource theme-ui */

import React, { Fragment } from "react"
import styled from "styled-components"

import GlobalStyle from "./global-styles"
import Container from "./Container"
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./Seo"

import { useThemeUI } from "theme-ui"

const theme = {
  color: "yellow",
  background: "green",
}

const Layout: React.FC<{
  title: string
  socialImage?: string
  description?: string
}> = ({ children, title, description = "", socialImage = "" }) => {
  const context = useThemeUI()

  return (
    <Fragment>
      <GlobalStyle />
      <SEO title={title} description={description} socialImage={socialImage} />
      <LayoutWrapper
        theme={
          context.colorMode === "dark"
            ? {
                color: "white",
                background: "black",
              }
            : {
                color: "black",
                background: "white",
              }
        }
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
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};

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
