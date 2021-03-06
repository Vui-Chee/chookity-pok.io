import React from "react"
import styled from "styled-components"

import Container from "./Container"
import SocialLinks from "./SocialLinks"

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <SocialLinks />

        <FooterAttribution>
          Hand-crafted with love by Vui Chee
        </FooterAttribution>
      </FooterWrapper>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  padding-top: var(--size-300);
  padding-bottom: var(--size-300);
  z-index: 1;
`

const FooterAttribution = styled.p`
  font-size: var(--size-300);

  & a {
    color: inherit;
  }
`

const FooterWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`
