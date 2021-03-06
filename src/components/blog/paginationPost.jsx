import React from 'react'
import PropTypes from "prop-types"
import kebabCase from "lodash.kebabcase"
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti"
import {CatBtn, TagBtn} from "../style/styled"
import { Twitter, Facebook, Mail, Linkedin } from "react-social-sharing"
import { RiEditBoxLine } from "react-icons/ri"
import RelatedPost from "./relatedPost"
import { shortenText } from "../../utils/shared"


class PaginationPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mdx, share, github, prev, next } = this.props
    let template = mdx.frontmatter.template
    let prevTitle = prev ? shortenText(prev.node.frontmatter.title, 6) : ""
    let nextTitle = next ? shortenText(next.node.frontmatter.title, 6) : ""

    let linkStyle = "flex items-center pl-6 hover:text-highlight_2 text-gray-900 min-w-20" 

    return(
      <div className="relative z-20 mt-16" style={{backgroundColor: '#fafafa'}}>
        <RelatedPost currentPost={mdx} />  
        
        {/* social media share buttons */}
        <div className={`${template === "custom" ? '' : 'lg:hidden'} flex flex-wrap text-sm justify-center w-full pt-5`}>
          <Twitter className="greyScale-100 hover:greyScale-0" solid small message={share[0]} link={share[1]} />
          <Facebook className="greyScale-100 hover:greyScale-0" solid small link={share[1]} />
          <Mail className="hover:bg-red-600" solid small subject={share[0]} link={share[1]} />
          <Linkedin className="greyScale-100 hover:greyScale-0" solid small message={share[0]} link={share[1]} />
          <a href={github} target="_blank" rel="noopener noreferrer">
              <div className="m-2 py-1 px-2 bg-black hover:bg-highlight_2 text-white flex justify-center rounded-md text-xl cursor-pointer"><RiEditBoxLine /></div>
            </a>
        </div> 
        {/* category and tags */}
        <div className="pt-5 flex flex-wrap text-gray-900 justify-center items-center content-center mx-auto text-sm">
          {mdx.frontmatter.category.map((cat) => (
            <CatBtn key={cat} to={`/blog/category/${kebabCase(cat)}`}>{cat}</CatBtn>
          ))}
          {mdx.frontmatter.tag.map((tag) => (
            <TagBtn key={tag} to={`/blog/tag/${kebabCase(tag)}`}>{tag}</TagBtn>
          ))}
        </div>  

        {/* previous & next post */}
        <div className="flex justify-center py-8 px-3 mx-auto font-semibold text-sm" >
          {prev && (
            <a value="prev" className={linkStyle} href={prev.node.fields.slug}>
              <TiArrowLeftThick className="mr-3 text-base" /> {prevTitle}
            </a>
          )}
          {next && (
            <a value="next" className={linkStyle} href={next.node.fields.slug}>
              {nextTitle} <TiArrowRightThick className="ml-3 text-base" />
            </a>
          )}
        </div>
      </div>

    )
  }
}

export default PaginationPost

PaginationPost.propTypes = {
  mdx: PropTypes.any,
  prev: PropTypes.any,
  next: PropTypes.any,
  share: PropTypes.array,
  github: PropTypes.string
}