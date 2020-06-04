import styled from "styled-components"
import { Link as gatsby_Link } from "gatsby"
import React from 'react'
import PropTypes from "prop-types"
import tw, { styled as styled_twin } from 'twin.macro'

export const Link = styled(gatsby_Link)`
  color: #006aa6;

  &:hover {
    color: #00aeef;
  }

`

export const H1 = styled.h1`
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  line-height: 1.2;
`

export const H2 = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`

export const H3 = styled.h3`
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`

export const H4 = styled.h4`
  display: block;
  font-size: 1em;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`

export const H5 = styled.h5`
  display: block;
  font-size: .83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`

export const H6 = styled.h6`
  display: block;
  font-size: .67em;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
`

export const P = styled.p`
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  word-wrap: break-word; /* if you want to cut the compconste word */
  white-space: normal;
  line-height: 1.6;
`

export const A_a = styled.a`
  color: #006aa6;

  &:hover, &:link:active, &:visited:active, &:visited:hover {
    color: #00aeef;
  }

  &:visited {
    color: #006aa6;
  }
`

export const A = (props) => {
  return (
    <A_a {...props} target="_blank" rel="noopener noreferrer">
      {props.children}
    </A_a>
  )
}

export const Ol = styled.ol`
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;

  .li {
    list-style-type: square;
  }
`

export const Li = styled.li` 
  display: list-item;
`

export const Ul = styled.ul`
  display: block;
  list-style-type: disc;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;

  .li {
    list-style-type: square;
  }
`

export const Hr = styled.hr`
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: solid;
  border-width: 1px;
  border-color: #eee;
`
export const Del = styled.del`
  text-decoration: line-through;
`
export const Pre = styled.pre`
  display: block;
  font-family: monospace;
  white-space: pre;
  margin: 1em 0;
`

export const BlockQuote = styled.blockquote`
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;

  &:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }

  & p {
    display: inline;
  }
`

export const IMG = styled_twin.img`
  ${tw`my-12`}
`

A.propTypes = {
  children: PropTypes.any,
}