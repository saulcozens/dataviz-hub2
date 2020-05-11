import styled from "styled-components"
import tw from 'twin.macro'
import { Link } from "gatsby"
import styled_emotion from '@emotion/styled/macro'

export const ArrowBox = styled.div`
  position: relative;
  background-color: #fff;
  border-top: 0px solid white;
  transition: .3s ease;
  
  &:before, &:after {
    bottom: 100%;
    left: 18%;
    border: solid white;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    transition: .5s ease;
  }

  &:before {
    border-color: transparent;
    ${'' /* triangle border */}
    border-bottom-color: transparent;  
    border-width: 30px;   
    margin-left: -30px;
  }

  &:after {
    border-color: transparent;
    ${'' /* triangle inside color */}
    border-bottom-color: #fff;
    ${'' /* 4px less than :before */}
    border-width: 24px;
    margin-left: -24px;
  }

  .group:hover > & {
    border-top: 0px solid #00aeef;
  }

  .group:hover > &:before {
    border-bottom-color: #00aeef;
  }

`

export const ArrowBox_featured = styled(ArrowBox)`
  background-color: #000;

  &:before, &:after {
    border-bottom-color: #000;
  }

`

export const IMG = styled.div`
  background-size: cover;
  background-position: center;

  .group:hover > & {
    -webkit-box-shadow: inset 0 -4px 0 #00aeef;
    -moz-box-shadow: inset 0 -4px 0 #00aeef;
    box-shadow: inset 0 -4px 0 #00aeef;
  }
`

export const CatBtn = styled_emotion(Link)([
  tw`inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-800 text-gray-100 border-gray-800 border-1 hover:border-transparent`
])

export const TagBtn = styled_emotion(Link)([
  tw`inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-white text-gray-700 border-1 border-gray-300 hover:border-transparent`
])