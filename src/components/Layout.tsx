import React from "react"
import styled, { ThemeProvider, DefaultTheme } from "styled-components"

import GlobalStyle from "./global-styles"
import Container from "./Container"
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./Seo"

export interface GlobalTheme extends DefaultTheme {
  [key: string]: {}
}

export const themes: GlobalTheme = {
  light: {
    color: "#000",
    background: "linear-gradient(360deg, #c44499, #fa6732)",
    postItem: {
      background: "rgba(255, 255, 255, 0.3)",
      hover: {
        background: "rgba(255, 255, 255, 0.5)",
      },
      a: {
        hover: {
          background: "rgba(255,255,255,0.9)",
        },
      },
    },
  },
  dark: {
    color: "#ffc09f",
    background: "linear-gradient(#240940, #281036, #622b6a)",
    postItem: {
      background: "rgba(42,11,61,0.2)",
      hover: {
        background: "rgba(42,11,61,0.5)",
      },
      a: {
        hover: {
          background: "rgba(42,11,61,1)",
        },
      },
    },
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
    <ThemeProvider theme={themes[localStorage.theme || "light"]}>
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
