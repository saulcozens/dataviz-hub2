import React from "react"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
//import BackgroundSection from "../components_images/search_background"
import PropTypes from "prop-types"
import Search from "../components/search"
import { StaticQuery, graphql } from "gatsby"

const searchPage = ({location}) => {

  return (
    
    <>
      <SEO 
        title="Search" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "dataviz.shef", "search dataviz"]} 
      />
      <Header />
      <div className="flex flex-wrap min-h-100">
        <StaticQuery
          query={graphql`
            query SearchIndexQuery {
              siteSearchIndex {
                index
              }
            }
          `}
          render={(data) => (
            <Search location={location} searchIndex={data.siteSearchIndex.index} />
          )}
        />
  
      </div>
      <Footer />
    </>
  )
}

export default searchPage

searchPage.propTypes = {
    data: PropTypes.any,
    location: PropTypes.any
  }
  
  