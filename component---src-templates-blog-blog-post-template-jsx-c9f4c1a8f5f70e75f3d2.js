(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{hNyR:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return _}));var l=a("q1tI"),i=a.n(l),n=a("Wbzz"),s=a("gY85"),r=a("7ljp"),c=a("A2+M"),o=a("qhky"),b=a("M4XY"),d=a.n(b),m=(a("vg9a"),a("YwZP")),p=a("HA0E"),x=a("aN7D"),u=a("c6+h"),h=a("R3Wf"),f=a("1oaH"),g=a("SQX1"),j=a("jPax"),O=a("Davl"),v=a.n(O),y=a("/eHF"),k=a.n(y),w=a("dQDb"),N=a.n(w),S=a("e3s2"),E=a("v7au"),L=a("cpGi"),T=a("qKvR");t.default=function(e){var t=e.data.mdx,a=e.pageContext,b=Object(m.useLocation)(),O=t.frontmatter.d3?t.frontmatter.d3:null;O&&O.map((function(e){e.includes("https://")?Object(p.a)(e,"",!1):Object(p.a)(Object(n.withPrefix)("d3/"+e),"",!1)}));var y=t.frontmatter,w=y.title,_=y.date,M=y.author,I=y.category,C=y.tag,A=y.disableTOC,B=a.prev,F=a.next,q="true"===A?null:t.tableOfContents;Object(l.useEffect)((function(){function e(){var e=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target.getAttribute("id"),a=document.querySelector('.TOC li a[href="#'+t+'"]');null!==a&&(e.intersectionRatio>0?a.parentElement.classList.add("active"):a.parentElement.classList.remove("active"))}))}));document.querySelectorAll(".mdxBody h1[id], .mdxBody h2[id], .mdxBody h3[id]").forEach((function(t){e.observe(t)}))}return b.pathname.includes("blog/")&&document.addEventListener("DOMContentLoaded",e()),function(){document.removeEventListener("DOMContentLoaded",e())}}),[b]);var D=function(e){return Object(T.b)("li",{key:e.title,className:"pb-2 list-none"},Object(T.b)("a",{href:e.url,className:"inline-block"},Object(T.b)("p",null,e.title)),e.items?Object(T.b)("ul",{className:"pl-2"},e.items.map(z)):Object(T.b)(i.a.Fragment,null))},z=function e(t){return Object(T.b)("li",{key:t.title,className:"pt-2 list-none"},t.url?Object(T.b)("a",{href:t.url}," ",t.title):Object(T.b)(i.a.Fragment,null),t.items?Object(T.b)("ul",{className:"pl-2"},t.items.map(e)):Object(T.b)(i.a.Fragment,null))},P="https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/blog/"+t.fields.slug.substring(t.fields.slug.lastIndexOf("/")+1)+"/index.mdx",R="https://"+b.host+t.fields.slug,H=t.frontmatter.title+" - "+t.frontmatter.description;return Object(T.b)("div",{className:"relative",key:t.id},Object(T.b)(s.a,{title:w,keywords:["the university of sheffield","data visualisation","data visualisation hub","research","blog"]}),Object(T.b)(x.a,null),Object(T.b)(o.a,null,Object(T.b)("script",null,"\n          var element = document.getElementById(\"headElement\");\n          var title = document.getElementById(\"title\").textContent;\n          var dimensions = element.getClientRects()[0];\n          var pattern = Trianglify({\n            width: dimensions.width, \n            height: dimensions.height,\n            cell_size: 60 + Math.ceil(Math.random() * 100),\n            variance: Math.random(),\n            stroke_width: Math.random() * 5,\n          });\n          pattern.seed = title\n          element.style['background-image'] = 'url(' + pattern.png() + ')';\n        "),Object(T.b)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8",type:"text/javascript"})),Object(T.b)(k.a,{top:!0,delay:300},Object(T.b)("div",{id:"headElement",className:"flex flex-wrap justify-center self-center content-center items-center m-auto shadow-c1",style:{minHeight:"50vh"}},Object(T.b)(N.a,{cascade:!0,delay:2e3,duration:500},Object(T.b)("div",{className:"flex flex-col flex-wrap text-center text-white pt-24 pb-16"},Object(T.b)("div",{className:"px-3 lg:px-48 2xl:px-78 leading-tight"},Object(T.b)("h1",{id:"title",className:"text-4xl xl:text-5xl font-semibold",style:{textShadow:"black 0px 0px 45px"}},w)),Object(T.b)("div",{className:"flex justify-center mt-12 items-center"},M.map((function(e){return Object(T.b)("img",{className:"rounded-full mx-1 h-30px w-30px lg:h-40px lg:w-40px 2xl:h-50px 2xl:w-50px",key:e.name,src:e.avatar.childImageSharp.fluid.src})})),Object(T.b)("div",{className:"inline-block px-2 text-left font-semibold",style:{textShadow:"black 0px 0px 15px"}},Object(T.b)("h1",{className:"text-sm xl:text-base"},M.map((function(e,t){return M.length===t+1?e.name:e.name+" · "}))),Object(T.b)("h1",{className:"text-xs xl:text-sm"},_," · ",t.fields.readingTime.text))),Object(T.b)("div",{className:"mt-4 text-xs 2xl:text-sm mx-auto flex flex-wrap px-2"},I.map((function(e){return Object(T.b)(f.g,{key:e,to:"/blog/category/"+d()(e)},e)})),C.map((function(e){return Object(T.b)(f.k,{key:e,to:"/blog/tag/"+d()(e)},e)}))))))),Object(T.b)("div",{className:"flex flex-wrap relative lg:px-10 2xl:px-48 pt-10"},Object(T.b)("div",{className:"left-0 top-0 sticky hidden lg:block z-10"},Object(T.b)(k.a,{left:!0,cascade:!0,delay:1e3,duration:1300},Object(T.b)("div",{className:"flex flex-col text-xs",style:{maxWidth:"40px",height:"0",overflow:"visible"}},Object(T.b)(S.Twitter,{"data-for":"share_twitter","data-tip":"",className:"greyScale-100 hover:greyScale-0 mt-28 transition duration-500",solid:!0,small:!0,message:H,link:R}),Object(T.b)(S.Facebook,{"data-tip":"","data-for":"share_facebook",className:"greyScale-100 hover:greyScale-0 transition duration-500",solid:!0,small:!0,link:R}),Object(T.b)(S.Mail,{"data-tip":"","data-for":"share_email",className:"hover:bg-red-600 transition duration-500",solid:!0,small:!0,subject:H,link:R}),Object(T.b)(S.Linkedin,{"data-tip":"","data-for":"share_linkedin",className:"greyScale-100 hover:greyScale-0 transition duration-500",solid:!0,small:!0,message:H,link:R}),Object(T.b)("hr",{className:"my-3"}),Object(T.b)("a",{href:P,target:"_blank",rel:"noopener noreferrer","data-tip":"","data-for":"share_editpost",offset:{top:100,left:100}},Object(T.b)("div",{className:"m-2 mt-1 bg-transparent text-black flex justify-center rounded-md text-xl transition duration-500"},Object(T.b)(E.c,null))),Object(T.b)(L.a,{id:"share_twitter"},"Share on Twitter"),Object(T.b)(L.a,{id:"share_facebook"},"Share on Facebook"),Object(T.b)(L.a,{id:"share_email"},"Share on E-Mail"),Object(T.b)(L.a,{id:"share_linkedin"},"Share on Linkedin"),Object(T.b)(L.a,{id:"share_editpost"},"Edit this post on GitHub")))),Object(T.b)("div",{className:"w-full shadow-lg flex flex-wrap justify-center -mt-12 lg:mt-0",style:{backgroundColor:"#f3f3f3"}},Object(T.b)("div",{className:"flex flex-col text-sm justify-center items-center w-1/4 py-2 lg:hidden ml-10",style:{maxWidth:"50px"}},Object(T.b)(S.Twitter,{solid:!0,small:!0,message:H,link:R}),Object(T.b)(S.Facebook,{solid:!0,small:!0,link:R}),Object(T.b)(S.Mail,{solid:!0,small:!0,className:"bg-red-600",subject:H,link:R}),Object(T.b)(S.Linkedin,{solid:!0,small:!0,message:H,link:R}),Object(T.b)("a",{href:P,target:"_blank",rel:"noopener noreferrer"},Object(T.b)("div",{className:"m-2 py-1 px-2 bg-gray-800 hover:bg-highlight_2 text-white flex justify-center rounded-md text-xl"},Object(T.b)(E.c,null)))),Object(T.b)("div",{className:" "+(q&&q.items?"pt-8 pb-5":"")+" mx-auto overflow-auto text-black lg:hidden px-2"},q&&q.items&&Object(T.b)("p",{className:"font-bold mb-3 pb-2 border-b-1 border-gray-300"},"TABLE OF CONTENTS"),q&&q.items&&q.items.map(D))),Object(T.b)("div",{className:" "+(q&&q.items?"lg:w-10/12 lg:pl-44 lg:pr-32 2xl:pl-68 2xl:pr-52 mdxBody":"lg:px-44 xl:px-56 2xl:px-82")+" relative mx-auto container pt-6 pb-16 px-3 leading-8 text-lg 2xl:text-xl",style:{color:"#24292e"}},Object(T.b)(r.MDXProvider,{components:{h1:g.e,h2:g.f,h3:g.g,h4:g.h,h5:g.i,h6:g.j,p:g.r,a:g.a,ol:g.q,li:g.o,hr:g.k,del:g.c,pre:g.s,ul:g.u,blockquote:g.b,Link:g.p,em:g.d,img:g.l,table:g.t,Accordion:j.a,AccordionItem:j.b,AccordionItemHeading:j.d,AccordionItemButton:j.c,AccordionItemPanel:j.e,LPWrap:g.n,LPItem:g.m}},Object(T.b)(c.MDXRenderer,null,t.body))),Object(T.b)("div",{className:" "+(q&&q.items?"lg:w-2/12 lg:block":"")+" hidden noScrollBar lg:sticky lg:top-0 lg:right-0 pt-12 pb-10 mx-auto max-h-100 overflow-auto"},Object(T.b)("p",{className:"font-bold mb-4 pb-2 text-gray-800",style:{borderBottom:"1px solid #eaeaea"}},"TABLE OF CONTENTS"),Object(T.b)("div",{className:"px-1 text-sm TOC"},q&&q.items&&q.items.map(D)))),Object(T.b)(h.a,{mdx:t,prev:B,next:F,share:[H,R],github:P}),"undefined"!=typeof window&&Object(T.b)("div",{className:"relative z-10 pt-5 pb-16 px-5 lg:px-48 2xl:px-64 bg-white"},Object(T.b)(v.a,{options:{clientID:"980d14f081da7aba9610",clientSecret:"00b571be2ccc9865cad705348b9a7d593d4219a6",repo:"dataviz-hub2-comments",owner:"researchdata-sheffield",admin:["ajtag","annakrystalli","GemmaRIT","rosiehigman","yld-weng"],id:t.fields.slug.substr(0,50),title:t.frontmatter.title,body:b.href+" | "+t.frontmatter.description,distractionFreeMode:!1}})),Object(T.b)(u.a,null))};var _="1502072882"}}]);
//# sourceMappingURL=component---src-templates-blog-blog-post-template-jsx-c9f4c1a8f5f70e75f3d2.js.map