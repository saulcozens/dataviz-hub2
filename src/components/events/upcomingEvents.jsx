import React from 'react'
import PropTypes from "prop-types"
import { FaMapMarkerAlt, FaClock } from "react-icons/fa"
import { shortenText } from "../../utils/shared"

const UpcomingEvents = ({allEventbriteEvents}) => {
  let size = allEventbriteEvents.edges.length
  
  if(allEventbriteEvents && (size > 0)) {
    return (
      <> 
      {allEventbriteEvents.edges.map(({node}) => {
        //moment(node.start.local, "DD-MMMM-YYYY hh:mm") >= moment() && 
        let description = shortenText(node.description.text, 20)

        return (
          <a className="flex flex-wrap w-full overflow-y-hidden shadow-lg hover:shadow-2xl bg-white my-3 lg:my-1 text-gray-700 group border-solid" 
            style={{fontFamily: "TUoS Blake", transition: ".5s ease"}} href={node.url} key={node.id} target="_blank" rel="noopener noreferrer"
          >
            <div className="w-full md:w-9/12 py-4 px-4">
              <p className="font-semibold text-lg text-black group-hover:text-highlight_2 leading-5">{node.name.text}</p>
              <p className="text-gray-700 mt-1 leading-tight text-sm group-hover:text-black">{description}</p>
              <p className="flex pt-4 text-sm"><FaClock className="mr-1" />{node.start.local}</p>
              
              <div className="flex flex-wrap text-sm">
                  <p className="flex">{node.online_event && (<FaMapMarkerAlt className="mr-1 mt-1" />)} {node.online_event && ("Online Event") }</p>
                  <p className="flex">
                    {node.venue && ( <FaMapMarkerAlt className="mr-1 mt-1" /> )} 
                    {node.venue && node.venue.name && (node.venue.name + ", ")} 
                    {node.venue && node.venue.address.address_1 && (node.venue.address.address_1 + ", ")} 
                    {node.venue && node.venue.address.city && (node.venue.address.city + ", ")}
                    {node.venue && node.venue.address.postal_code && (node.venue.address.postal_code)}
                  </p>
              </div>
            </div>
            <div className="w-full md:w-3/12 overflow-hidden relative min-h-20 2xl:min-h-15" style={{backgroundImage: `url(${node.logo.original.url})`, backgroundPosition: 'center', backgroundSize: 'cover', transition: '.5s ease'}}>
              <button href={node.url} target="_blank" rel="noopener noreferrer" className="hidden group-hover:flex py-1 px-3 font-bold text-md bg-black text-white hover:bg-blue-700 absolute" style={{bottom: '0%', right: '0%', }}>
                Register
              </button>
            </div>
          </a> 
        )
        
      })}
      </>
    )
  } else {
    return (
      <div className="mt-16 text-blue-800">No upcoming events can be found, please come back later.</div>
    )
  }
}

export default UpcomingEvents

UpcomingEvents.propTypes = {
  allEventbriteEvents: PropTypes.any,
}

