import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"

import "./header.css"
import tw from "tailwind.macro"
import styled from "@emotion/styled"

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles>
    <InnerWrapper>
      <Logo>
        <Link to="/">{siteTitle}</Link>
      </Logo>
      <Nav>
        <Link activeClassName="active" to="/blog/">
          Blog
        </Link>
        <Link activeClassName="active" to="/categorias/">
          Categorias
        </Link>
        <Link activeClassName="active" to="/etiquetas/">
          Etiquetas
        </Link>
        <Link activeClassName="active" to="/licencia/">
          Licencia
        </Link>
      </Nav>
    </InnerWrapper>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const InnerWrapper = styled.div`
  ${tw`flex items-center justify-between max-w-6xl px-3 py-5 m-auto `}
`

const Logo = styled.div`
  ${tw`font-mono text-xl font-bold tracking-wider uppercase`}
`

const Nav = styled.nav`
  ${tw`hidden md:block`}

  a {
    ${tw`ml-6 font-mono text-base`}
    &.active {
      ${tw`text-indigo-500`}
    }
  }
`

export default Header
