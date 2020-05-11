/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import ScrollTopBtn from "./scrollTop"

const Layout = ({ children, location }) => {

  return (

    <div id="website" className="flex flex-col font-sans min-h-screen text-gray-900 high-specificity">
      <ScrollTopBtn />
      <TransitionProvider 
        location={location}
        enter={{
          opacity: 0,
          config: {
            duration: 200
          }
        }}
        usual={{
          opacity: 1,

        }}
        leave={{
          opacity: 0,
          config: {
            duration: 200
          }
        }}
      >
        <TransitionViews>
          {children}
        </TransitionViews>
      </TransitionProvider>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.any
}

export default Layout

