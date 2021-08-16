import "react-toggle/style.css"
import "./styles.css"

import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Toggle from "react-toggle"
import styled from "styled-components"

import moon from "../../images/moon.png"
import sun from "../../images/sun.png"
import Container from "../Container"

const SwitchIcon: React.FC<{
  imageUrl: string
  width?: number
  height?: number
}> = ({ imageUrl, width = 16, height = 16 }) => (
  <img
    src={imageUrl}
    width={width}
    height={height}
    role="presentation"
    style={{ pointerEvents: "none" }}
  />
)

const Header: React.FC<{
  toggleTheme?: () => void
}> = ({ toggleTheme }) => {
  const { site } = useStaticQuery(
    graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <StyledHeader>
      <HeaderWrapper>
        <HeaderTitle>
          <Link to="/">{site.siteMetadata.title}</Link>
        </HeaderTitle>

        <HeaderNavList>
          <HeaderNavListItem>
            <Link to="/blog">Blog</Link>
          </HeaderNavListItem>

          <HeaderNavListItem>
            <Link to="/about">About</Link>
          </HeaderNavListItem>

          <HeaderNavListItem>
            <Link to="/contact">Contact</Link>
          </HeaderNavListItem>

          <HeaderNavListItem>
            <Toggle
              checked={localStorage.theme === "dark"}
              className="theme-switcher"
              icons={{
                checked: <SwitchIcon imageUrl={moon} />,
                unchecked: <SwitchIcon imageUrl={sun} />,
              }}
              onChange={toggleTheme}
            />
          </HeaderNavListItem>
        </HeaderNavList>
      </HeaderWrapper>
    </StyledHeader>
  )
}

export default Header

const HeaderNavList: React.FC = ({ children }) => {
  return (
    <StyledNav>
      <StyledNavList>{children}</StyledNavList>
    </StyledNav>
  )
}

const HeaderNavListItem: React.FC = ({ children }) => {
  return <StyledNavListItem>{children}</StyledNavListItem>
}

const StyledHeader = styled.header`
  padding-top: var(--size-300);
`

const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderTitle = styled.div`
  & a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: var(--size-400);
    color: inherit;
  }
`

const StyledNav = styled.nav`
  position: static;
  padding: 0;
  background: transparent;
  backdrop-filter: unset;
`

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  list-style-type: none;
`

const StyledNavListItem = styled.li`
  line-height: 0;
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
  @media screen and (max-width: 700px) {
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  & a {
    color: inherit;
    text-transform: uppercase;
    font-size: var(--size-300);
    text-decoration: none;
    letter-spacing: 0.1rem;
  }
  @media screen and (max-width: 700px) {
    & a {
      font-size: 0.7rem;
    }
  }
`
