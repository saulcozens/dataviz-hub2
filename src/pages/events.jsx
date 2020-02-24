import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Events = () => (
  <Layout>
    <SEO 
      title="Events" 
      keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research"]} 
    />
    
    <h1>Hi from the Events page</h1>
    <p>Welcome to page Events</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Events
