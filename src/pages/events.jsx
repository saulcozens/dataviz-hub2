import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"
import SEO from "../components/shared/seo"
import Header from "../components/shared/header"
import Footer from "../components/shared/footer"
import BackgroundSection from "../components/images/events_background"
import PropTypes from "prop-types"
import UpcomingEvents from "../components/events/upcomingEvents"
import PastEvents from "../components/events/pastEvents"
import PastEventsBlog from "../components/events/pastEventsBlog"
import moment from "moment"

const events = ({data: {eventBrite, pastEvent, pastEventBlog}}) => {

  const [currentDate, setDate] = useState(moment().format('ddd DD MMMM YYYY, hh:mm A'));
  useEffect(() => {
    setDate(moment().format('ddd DD MMMM YYYY, hh:mm A'))
  }, [])

  return (
    <>
      <SEO 
        title="Events" 
        keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "dataviz events", "dataviz.shef"]} 
      />
      <Header />
      <BackgroundSection className="flex flex-wrap flex-grow-0 items-center justify-center min-h-100">
        <div className="flex flex-wrap w-full justify-center my-16 lg:my-24">
          <div className="w-full lg:w-7/12 p-6 text-black overflow-auto border-t-8 border-red-700 min-h-70 lg:rounded-l-xl" style={{background: "rgba(255,255,255,.95)", }}>
            <h1 className="inline-block text-2xl font-semibold">Upcoming Events</h1>
            <div className="text-gray-900 mb-8" >Today: {currentDate}</div>
            <UpcomingEvents allEventbriteEvents={eventBrite} />
          </div>
          <PastEvents pastEvent={pastEvent} />
        </div>
        <PastEventsBlog pastEventBlog={pastEventBlog} /> 
      </BackgroundSection>
      <Footer />
    </>
  )
}

export default events

events.propTypes = {
		data: PropTypes.any
  }
  
  

export const query = graphql`
  query {
    eventBrite: 
    allEventbriteEvents(limit: 4, sort: {fields: start___local, order: ASC}, filter: {id: {ne: "777"}, isFuture: {eq: true}}) {
      ...EventbriteEventsEdge
    }

    pastEvent: 
    allEventbriteEvents(limit: 5, sort: {fields: start___local, order: DESC}, filter: {id: {ne: "777"}, isFuture: {eq: false}}) {
      ...EventbriteEventsEdge
    }

    pastEventBlog: 
    allMdx(limit: 5, filter: {frontmatter: {category: {in: "Events"}, hide: {ne: "true"} }}, sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          id
          frontmatter {
            date(formatString: "dddd, DD MMMM YYYY")
            title
            description
          }
        }
      }
    }
  
  }
`;




