import React from "react"
import styled, { ThemeProvider } from "styled-components"

import GlobalStyle from "./global-styles"
import Container from "./Container"
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./Seo"

export interface GlobalTheme {
  [key: string]: {}
}

export const themes: GlobalTheme = {
  light: {
    color: "#000",
    background: "linear-gradient(315deg,#d9e4f5 0%,#f5e3e6 74%)",
  },
  dark: {
    color: "#ffa7c4",
    background: "#282c35",
  },
}

const Layout: React.FC<{
  title: string
  socialImage?: string
  description?: string
}> = ({ children, title, description = "", socialImage = "" }) => {
  const [colorMode, setColorMode] = React.useState("light")

  React.useEffect(() => {
    const mode = localStorage.getItem("theme")
    if (!mode) {
      localStorage.setItem("theme", colorMode)
    } else {
      setColorMode(mode)
    }
  }, [])

  const toggleTheme = () => {
    if (colorMode === "dark") {
      setColorMode("light")
      localStorage.setItem("theme", "light")
    } else {
      setColorMode("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  return typeof window !== "undefined" ? (
    <ThemeProvider theme={themes[localStorage.theme]}>
      <GlobalStyle />
      <SEO title={title} description={description} socialImage={socialImage} />
      <LayoutWrapper>
        <Header toggleTheme={toggleTheme} />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  ) : null
}

export default Layout

const LayoutWrapper = styled.div`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background};
  transition: color 0.2s ease-out, background 0.2s ease-out;

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
