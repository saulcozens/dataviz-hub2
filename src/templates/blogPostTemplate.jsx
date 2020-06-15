import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import kebabCase from "lodash.kebabcase"
import Helmet from "react-helmet"
import { H1, H2, H3, H4, H5, H6, P, A, Ol, Li, Hr, Del, Pre, Ul, BlockQuote, Link, IMG, Table } from "../components_style/blogPostStyle"
import PaginationPost from "../components_blog/paginationPost"
import {CatBtn, TagBtn} from "../components_style/styled"
import Scrollspy from 'react-scrollspy'
import "katex/dist/katex.min.css"
import { Twitter, Facebook, Mail, Linkedin } from "react-social-sharing"
import Fade from "react-reveal/Fade"
import Bounce from 'react-reveal/Bounce'
import { RiEditBoxLine } from "react-icons/ri"
import ReactTooltip from "react-tooltip";

const blogPostTemplate = ({ data: { mdx }, pageContext }) => {

  const { title, date, author, category, tag } = mdx.frontmatter
  const {prev, next} = pageContext
  const tableOfContent = mdx.tableOfContents 

  //Redering table of content
  const renderItem = (item) => (
    <li key={item.title} className="pb-2">
      {/* Heading */}
      <a href={item.url}><p>{item.title}</p></a>
      {/* Sub-heading */}
      { item.items ? (<ul className="pl-2">{item.items.map(renderSubItem)}</ul>) : <a></a> }
    </li>
  ); 

  const renderSubItem = (item) => (
    <li key={item.title} className="pt-2">
      { item.url ? <a href={item.url}>&bull; {item.title}</a> : <p></p> }
      { item.items ? ( <ul className="pl-2">{item.items.map(renderSubItem)}</ul>) : <a></a> }
    </li>
  ); 

  //Return an list of toc items 
  const tocHighlight = (toc) => {
    const itemList = [];
    const scrollItem = (item) => ( item.items ? item.items.map(scrollItem) : itemList.push(`${item.url.substring(1,)}`) );
    toc.items.map(scrollItem)
    return itemList
  };

  const folderName = mdx.fields.slug.substring(mdx.fields.slug.lastIndexOf("/")+1,)
  const githubLink = `https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/blog/${folderName}/index.mdx`
  const shareLink = `https://${window.location.host}${mdx.fields.slug}`
  const shareMessage = `${mdx.frontmatter.title} - ${mdx.frontmatter.description}`

    
  return (
    <div className="relative">
      <SEO title={title} keywords={["the university of sheffield", "data visualisation", "data visualisation hub", "research", "blog"]} />
      <Header />
      <Helmet >
        <script >{`
          var element = document.getElementById("headElement");
          var dimensions = element.getClientRects()[0];
          var pattern = Trianglify({
            width: dimensions.width, 
            height: dimensions.height
          });
          element.style['background-image'] = 'url(' + pattern.png() + ')';
        `}</script>
        
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" /> 
      </Helmet>
      
      {/* Top background, title and author etc. */}
      <div id="headElement" className="flex flex-wrap justify-center self-center content-center items-center m-auto shadow-c1" style={{minHeight: "50vh", }}>
        <Bounce cascade delay={500} duration={1300}>
        <div className="flex flex-col flex-wrap text-center text-white pt-24 pb-16">
          <div className="px-3 lg:px-48 2xl:px-78 leading-tight">
            <h1 className="text-4xl xl:text-5xl font-semibold" style={{textShadow: "black 0px 0px 45px"}}>{title}</h1>
          </div>
          
          <div className="flex justify-center mt-12 items-center">
            {author.map((authors) => (
              <img className="rounded-full mx-1 h-30px w-30px lg:h-40px lg:w-40px 2xl:h-50px 2xl:w-50px" key={authors.name} src={authors.avatar.childImageSharp.fluid.src}  />
            ))}
            <div className="inline-block px-2 text-left font-bold" style={{textShadow: "#000 0px 0px 5px"}}>
              <h1 className="text-sm xl:text-base pb-1">
                {author.map((authors, idx) => ( (author.length === idx + 1) ? authors.name : authors.name + " · " ))}
              </h1>
              <h1 className="text-xs xl:text-sm">{date} · {mdx.fields.readingTime.text}</h1>
            </div>
          </div> 

          <div className="mt-4 text-xs 2xl:text-sm mx-auto flex flex-wrap px-2">
            {category.map((cat) => ( <CatBtn key={cat} to={`/blog/category/${kebabCase(cat)}`}>{cat}</CatBtn> ))}
            {tag.map((tag) => ( <TagBtn key={tag} to={`/blog/tag/${kebabCase(tag)}`}>{tag}</TagBtn> ))}
          </div>
        </div>
        </Bounce>
      </div>

      <div className="flex flex-wrap relative lg:px-10 2xl:px-64 pt-10">
        
        {/* desktop share buttons */}
        <div className="absolute left-0 top-0 sticky hidden lg:block">
          <Fade left cascade delay={1500} duration={1300}>   
            <div className="flex flex-col text-sm" style={{maxWidth: "49px", height: "0", overflow: "visible"}}>
              <Twitter data-for="share_twitter" data-tip="" title="" className="greyScale-100 hover:greyScale-0 mt-24 transition duration-500" style={{boxShadow: "#dddddd 0px 5px 10px"}} solid small message={shareMessage} link={shareLink} />
              <Facebook data-tip="" data-for="share_facebook" title="" className="greyScale-100 hover:greyScale-0 transition duration-500" style={{boxShadow: "#dddddd 0px 5px 10px"}} solid small link={shareLink} />
              <Mail data-tip="" data-for="share_email" title="" className="hover:bg-red-600 transition duration-500" style={{boxShadow: "#dddddd 0px 5px 10px"}} solid small subject={shareMessage} link={shareLink} />
              <Linkedin data-tip="" data-for="share_linkedin" title="" className="greyScale-100 hover:greyScale-0 transition duration-500" style={{boxShadow: "#dddddd 0px 5px 10px"}} solid small message={shareMessage} link={shareLink} />
              <hr className="my-3" />
              <a href={githubLink} target="_blank" rel="noopener noreferrer" data-tip="" data-for="share_editpost" offset={{top: 100, left: 100}}>
                <div className="m-2 py-1 bg-white hover:bg-black hover:text-white text-gray-800 flex justify-center rounded-md text-xl transition duration-500" style={{boxShadow: "#dddddd 0px 5px 10px"}}><RiEditBoxLine /></div>
              </a>

              <ReactTooltip id="share_twitter">Share on Twitter</ReactTooltip>
              <ReactTooltip id="share_facebook">Share on Facebook</ReactTooltip>
              <ReactTooltip id="share_email">Share on E-Mail</ReactTooltip>
              <ReactTooltip id="share_linkedin">Share on Linkedin</ReactTooltip>
              <ReactTooltip id="share_editpost">Edit this post 😎</ReactTooltip>
            </div>
          </Fade> 
        </div>   


        {/* mobile: toc & share buttons */}
        <div className="w-full bg-gray-900 shadow-xl flex flex-wrap justify-center -mt-12 lg:mt-0">
          <div className="flex flex-wrap text-sm justify-center w-full py-2 lg:hidden">
            <Twitter solid small message={shareMessage} link={shareLink} />
            <Facebook solid small link={shareLink} />
            <Mail solid small subject={shareMessage} link={shareLink} />
            <Linkedin solid small message={shareMessage} link={shareLink} />
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <div className="m-2 py-1 px-2 bg-gray-100 hover:bg-highlight_2 text-gray-800 flex justify-center rounded-md text-xl"><RiEditBoxLine /></div>
            </a>
          </div>    
          <div className={` ${ tableOfContent.items ? `pt-10 pb-5`: ``} mx-auto overflow-auto text-white lg:hidden px-2`}>
              {tableOfContent && tableOfContent.items && <p className="font-bold mb-5">TABLE OF CONTENTS</p>}
              { tableOfContent && tableOfContent.items && 
                <Scrollspy className="text-gray-300" currentClassName="" scrolledPastClassName="" items={tocHighlight(tableOfContent)}>
                  {tableOfContent.items.map(renderItem)}
                </Scrollspy>
              }      
          </div>       
        </div>   
  
        {/* main mdx content  */}
        <div className={` ${ tableOfContent && tableOfContent.items ? `lg:w-10/12 lg:pl-44 lg:pr-32 2xl:pl-60 2xl:pr-52`: `lg:px-44 2xl:px-72`} mx-auto container pt-6 pb-16 px-3  leading-7 text-xl`} style={{fontFamily: "Helvetica"}}>
          <MDXProvider components={{h1: H1, h2: H2, h3: H3, h4: H4, h5: H5, h6: H6, p: P, a: A, ol: Ol, li: Li, hr: Hr, del: Del, pre: Pre, ul: Ul, blockquote: BlockQuote, Link: Link, img: IMG, table: Table, }}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>

        {/* sidebar toc: hidden in mobile */}
        <div className={` ${ tableOfContent.items ? `lg:w-2/12 lg:block`: ``} hidden noScrollBar lg:sticky lg:top-0 lg:right-0 pt-12 pb-10 mx-auto max-h-100 overflow-auto`}>
          { tableOfContent && tableOfContent.items && <p className="font-bold mb-5 text-gray-700">TABLE OF CONTENTS</p>}
          { tableOfContent && 
            tableOfContent.items && 
            <Scrollspy className="text-gray-500" currentClassName="underline" scrolledPastClassName="" items={tocHighlight(tableOfContent)}>
              {tableOfContent.items.map(renderItem)}
            </Scrollspy>
          }      
        </div>  
      </div>       
           
      <PaginationPost mdx={mdx} prev={prev} next={next} share={[shareMessage, shareLink]} />
      <Footer />
    </div>
  )
}

export default blogPostTemplate

blogPostTemplate.propTypes = {
  data: PropTypes.any,
  pageContext: PropTypes.any,
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      fields {
        slug
        readingTime {
          text
        }
      }
      body
      tableOfContents
      frontmatter {
        title
        author {
          name
          avatar {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        date(formatString: "D MMMM YYYY")
        description
        tag
        category
        thumbnail {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
