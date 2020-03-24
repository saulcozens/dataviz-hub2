/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {

  return (
    <div id="website" className="flex flex-col font-sans min-h-screen text-gray-900 high-specificity">
      <Header />
        <div>{children}</div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

