import React, { Component } from 'react'
//import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from "prop-types"
import {FiSearch} from "react-icons/fi"
//import Highlighter from 'react-highlight-words';
//import kebabCase from "lodash.kebabcase"

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import bg from "../images/search/bg.jpg"
import { Index } from "elasticlunr"


// Search component
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      if(this.props.location.state.searchWord !== undefined) {
        var queryHome = this.props.location.state.searchWord
        var input = document.getElementById("pageSearch")
        this.setState({query: queryHome})
        input.setAttribute("value", queryHome)
        this.searchFromHome(queryHome)
      }
    }, 100);
  }

  render() {

    const ResultList = () => {

      return (
        <div>
          <div className="bg-orange-700 text-gray-100 py-2">Found {this.state.results.length} results</div>
          {this.state.results.map((item) => {
            <div className='text-gray-900'>{item.title}</div>
          })}
        </div>
      )
    }

    return (
      <div className={`${this.props.classNames} relative text-gray-700 w-full text-center`}>
        <div className="min-h-50 pt-24 pb-10" style={{backgroundImage: `url(${bg})`, backgroundSize: "cover", width: "100%",}}>
          <Zoom top duration={1000} cascade><p className="text-2xl xl:text-3xl text-white mb-3 font-semibold">Search@dataviz.shef</p></Zoom>
          <Fade bottom duration={1500}>
            <div className="inline-block focus:outline-none text-gray-600 bg-white shadow p-3 rounded-lg">
              <FiSearch className="inline-block text-center text-3xl -mt-1" />
              <input id="pageSearch" onChange={this.search} autoComplete="off" className="search__input py-0 pl-4 text-lg focus:outline-none pr-5 text-gray-600" style={{minWidth: "25vw"}} type="text" name="search" placeholder="Title, description, date..." />
            </div>  
          </Fade>
        </div>
        <div className="bg-gray-100">
          <ResultList />
        </div>
      </div>
    )
  }

  getOrCreateIndex = () => {
    return this.index ? this.index : Index.load(this.props.searchIndex)
  }

  search = (event) => {
    const query = event.target.value
    this.index = this.getOrCreateIndex()
    this.setState({      
      query,
      results: this.index
        .search(query, { expand: true })
        .map(({ ref }) => this.index.documentStore.getDoc(ref))
    })
    console.log(this.state.results)
  }

  searchFromHome = (homeQuery) => {
    const query = homeQuery
    if (query.length > 1) {
      this.setState({      
        query,
        results: this.index
          .search(query, { expand: true })
          .map(({ ref }) => this.index.documentStore.getDoc(ref))
      })
    } else {
      this.setState({ results: [], query: query })
    }
  }
}

export default Search



Search.propTypes = {
  classNames: PropTypes.any,
  data: PropTypes.any,
  location: PropTypes.any,
  searchIndex: PropTypes.any,
}


