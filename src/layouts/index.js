import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import Offcanvas from "../components/Offcanvas/offcanvas"
import Header from "../components/Header/header"
const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <TransitionProvider location={location}>
        <Offcanvas />
        <Header siteTitle={data.site.siteMetadata.title} />
        <TransitionViews>{children}</TransitionViews>
      </TransitionProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
