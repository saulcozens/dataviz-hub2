(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{AphP:function(e,t,a){"use strict";var l=a("XKFU"),n=a("S/j/"),i=a("apmT");l(l.P+l.F*a("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=n(this),a=i(t);return"number"!=typeof a||isFinite(a)?t.toISOString():null}})},FlsD:function(e,t,a){var l=a("0/R4");a("Xtr8")("isExtensible",(function(e){return function(t){return!!l(t)&&(!e||e(t))}}))},NO8f:function(e,t,a){a("7DDg")("Uint8",1,(function(e){return function(t,a,l){return e(this,t,a,l)}}))},jqX0:function(e,t,a){var l=a("XKFU"),n=a("jtBr");l(l.P+l.F*(Date.prototype.toISOString!==n),"Date",{toISOString:n})},jtBr:function(e,t,a){"use strict";var l=a("eeVq"),n=Date.prototype.getTime,i=Date.prototype.toISOString,r=function(e){return e>9?e:"0"+e};e.exports=l((function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-50000000000001))}))||!l((function(){i.call(new Date(NaN))}))?function(){if(!isFinite(n.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),a=e.getUTCMilliseconds(),l=t<0?"-":t>9999?"+":"";return l+("00000"+Math.abs(t)).slice(l?-6:-4)+"-"+r(e.getUTCMonth()+1)+"-"+r(e.getUTCDate())+"T"+r(e.getUTCHours())+":"+r(e.getUTCMinutes())+":"+r(e.getUTCSeconds())+"."+(a>99?a:"0"+r(a))+"Z"}:i},mura:function(e,t,a){var l=a("0/R4"),n=a("Z6vF").onFreeze;a("Xtr8")("preventExtensions",(function(e){return function(t){return e&&l(t)?e(n(t)):t}}))},"zbd/":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return T}));a("f3/d"),a("q1tI");var l=a("dmsj"),n=a("Rb52"),i=a("NSxh"),r=a("7ljp"),s=a("A2+M"),c=a("M4XY"),o=a.n(c),b=a("TJpk"),d=a.n(b),m=a("Dotr"),p=a("McXN"),u=a("VonM"),x=a("YIkO"),f=a.n(x),h=(a("vg9a"),a("e3s2")),g=a("/eHF"),j=a.n(g),O=a("dQDb"),v=a.n(O),y=a("v7au"),w=a("cpGi"),N=a("Davl"),k=a.n(N),S=a("qKvR");t.default=function(e){var t=e.data.mdx,a=e.pageContext,c=t.frontmatter,b=c.title,x=c.date,g=c.author,O=c.category,N=c.tag,T=c.disableTOC,D=a.prev,C=a.next,F="true"===T?null:t.tableOfContents,M=function(e){return Object(S.b)("li",{key:e.title,className:"pb-2"},Object(S.b)("a",{href:e.url},Object(S.b)("p",null,e.title)),e.items?Object(S.b)("ul",{className:"pl-2"},e.items.map(_)):Object(S.b)("a",null))},_=function e(t){return Object(S.b)("li",{key:t.title,className:"pt-2"},t.url?Object(S.b)("a",{href:t.url},"• ",t.title):Object(S.b)("p",null),t.items?Object(S.b)("ul",{className:"pl-2"},t.items.map(e)):Object(S.b)("a",null))},E=function(e){var t=[];return e.items.map((function e(a){return a.items?a.items.map(e):t.push(""+a.url.substring(1))})),t},I="https://github.com/researchdata-sheffield/dataviz-hub2/tree/development/content/blog/"+t.fields.slug.substring(t.fields.slug.lastIndexOf("/")+1)+"/index.mdx",U="https://"+window.location.host+t.fields.slug,X=t.frontmatter.title+" - "+t.frontmatter.description;return Object(S.b)("div",{className:"relative",key:t.id},Object(S.b)(l.a,{title:b,keywords:["the university of sheffield","data visualisation","data visualisation hub","research","blog"]}),Object(S.b)(n.a,null),Object(S.b)(d.a,null,Object(S.b)("script",null,"\n          var element = document.getElementById(\"headElement\");\n          var title = document.getElementById(\"title\").textContent;\n          var dimensions = element.getClientRects()[0];\n          var pattern = Trianglify({\n            width: dimensions.width, \n            height: dimensions.height,\n            cell_size: 60 + Math.ceil(Math.random() * 100),\n            variance: Math.random(),\n            stroke_width: Math.random() * 5,\n          });\n          pattern.seed = title\n          \n          element.style['background-image'] = 'url(' + pattern.png() + ')';\n        "),Object(S.b)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"})),Object(S.b)(j.a,{top:!0,delay:300},Object(S.b)("div",{id:"headElement",className:"flex flex-wrap justify-center self-center content-center items-center m-auto shadow-c1",style:{minHeight:"50vh"}},Object(S.b)(v.a,{cascade:!0,delay:2e3,duration:500},Object(S.b)("div",{className:"flex flex-col flex-wrap text-center text-white pt-24 pb-16"},Object(S.b)("div",{className:"px-3 lg:px-48 2xl:px-78 leading-tight"},Object(S.b)("h1",{id:"title",className:"text-4xl xl:text-5xl font-semibold",style:{textShadow:"black 0px 0px 45px"}},b)),Object(S.b)("div",{className:"flex justify-center mt-12 items-center"},g.map((function(e){return Object(S.b)("img",{className:"rounded-full mx-1 h-30px w-30px lg:h-40px lg:w-40px 2xl:h-50px 2xl:w-50px",key:e.name,src:e.avatar.childImageSharp.fluid.src})})),Object(S.b)("div",{className:"inline-block px-2 text-left font-bold",style:{textShadow:"#000 0px 0px 5px"}},Object(S.b)("h1",{className:"text-sm xl:text-base pb-1"},g.map((function(e,t){return g.length===t+1?e.name:e.name+" · "}))),Object(S.b)("h1",{className:"text-xs xl:text-sm"},x," · ",t.fields.readingTime.text))),Object(S.b)("div",{className:"mt-4 text-xs 2xl:text-sm mx-auto flex flex-wrap px-2"},O.map((function(e){return Object(S.b)(u.f,{key:e,to:"/blog/category/"+o()(e)},e)})),N.map((function(e){return Object(S.b)(u.j,{key:e,to:"/blog/tag/"+o()(e)},e)}))))))),Object(S.b)(j.a,{cascade:!0,bottom:!0,delay:300,duration:1e3},Object(S.b)("div",{className:"flex flex-wrap relative lg:px-10 2xl:px-64 pt-10"},Object(S.b)("div",{className:"left-0 top-0 sticky hidden lg:block z-10"},Object(S.b)(j.a,{left:!0,cascade:!0,delay:1e3,duration:1300},Object(S.b)("div",{className:"flex flex-col text-sm",style:{maxWidth:"45px",height:"0",overflow:"visible"}},Object(S.b)(h.Twitter,{"data-for":"share_twitter","data-tip":"",title:"",className:"greyScale-100 hover:greyScale-0 mt-28 transition duration-500",style:{boxShadow:"#dddddd 0px 5px 10px"},solid:!0,small:!0,message:X,link:U}),Object(S.b)(h.Facebook,{"data-tip":"","data-for":"share_facebook",title:"",className:"greyScale-100 hover:greyScale-0 transition duration-500",style:{boxShadow:"#dddddd 0px 5px 10px"},solid:!0,small:!0,link:U}),Object(S.b)(h.Mail,{"data-tip":"","data-for":"share_email",title:"",className:"hover:bg-red-600 transition duration-500",style:{boxShadow:"#dddddd 0px 5px 10px"},solid:!0,small:!0,subject:X,link:U}),Object(S.b)(h.Linkedin,{"data-tip":"","data-for":"share_linkedin",title:"",className:"greyScale-100 hover:greyScale-0 transition duration-500",style:{boxShadow:"#dddddd 0px 5px 10px"},solid:!0,small:!0,message:X,link:U}),Object(S.b)("hr",{className:"my-3"}),Object(S.b)("a",{href:I,target:"_blank",rel:"noopener noreferrer","data-tip":"","data-for":"share_editpost",offset:{top:100,left:100}},Object(S.b)("div",{className:"m-2 py-1 bg-white hover:bg-black hover:text-white text-gray-800 flex justify-center rounded-md text-xl transition duration-500",style:{boxShadow:"#dddddd 0px 5px 10px"}},Object(S.b)(y.c,null))),Object(S.b)(w.a,{id:"share_twitter"},"Share on Twitter"),Object(S.b)(w.a,{id:"share_facebook"},"Share on Facebook"),Object(S.b)(w.a,{id:"share_email"},"Share on E-Mail"),Object(S.b)(w.a,{id:"share_linkedin"},"Share on Linkedin"),Object(S.b)(w.a,{id:"share_editpost"},"Edit this post 😎")))),Object(S.b)("div",{className:"w-full bg-gray-900 shadow-xl flex flex-wrap justify-center -mt-12 lg:mt-0"},Object(S.b)("div",{className:"flex flex-wrap text-sm justify-center w-full py-2 lg:hidden"},Object(S.b)(h.Twitter,{solid:!0,small:!0,message:X,link:U}),Object(S.b)(h.Facebook,{solid:!0,small:!0,link:U}),Object(S.b)(h.Mail,{solid:!0,small:!0,subject:X,link:U}),Object(S.b)(h.Linkedin,{solid:!0,small:!0,message:X,link:U}),Object(S.b)("a",{href:I,target:"_blank",rel:"noopener noreferrer"},Object(S.b)("div",{className:"m-2 py-1 px-2 bg-gray-100 hover:bg-highlight_2 text-gray-800 flex justify-center rounded-md text-xl"},Object(S.b)(y.c,null)))),Object(S.b)("div",{className:" "+(F&&F.items?"pt-10 pb-5":"")+" mx-auto overflow-auto text-white lg:hidden px-2"},F&&F.items&&Object(S.b)("p",{className:"font-bold mb-5"},"TABLE OF CONTENTS"),F&&F.items&&Object(S.b)(f.a,{className:"text-gray-300",currentClassName:"",scrolledPastClassName:"",items:E(F)},F.items.map(M)))),Object(S.b)("div",{className:" "+(F&&F.items?"lg:w-10/12 lg:pl-44 lg:pr-32 2xl:pl-60 2xl:pr-52":"lg:px-44 2xl:px-72")+" mx-auto container pt-6 pb-16 px-3  leading-7 text-xl",style:{fontFamily:"Helvetica"}},Object(S.b)(r.MDXProvider,{components:{h1:m.d,h2:m.e,h3:m.f,h4:m.g,h5:m.h,h6:m.i,p:m.o,a:m.a,ol:m.n,li:m.l,hr:m.j,del:m.c,pre:m.p,ul:m.r,blockquote:m.b,Link:m.m,img:m.k,table:m.q}},Object(S.b)(s.MDXRenderer,null,t.body))),Object(S.b)("div",{className:" "+(F&&F.items?"lg:w-2/12 lg:block":"")+" hidden noScrollBar lg:sticky lg:top-0 lg:right-0 pt-12 pb-10 mx-auto max-h-100 overflow-auto"},F&&F.items&&Object(S.b)("p",{className:"font-bold mb-5 text-gray-700"},"TABLE OF CONTENTS"),F&&F.items&&Object(S.b)(f.a,{className:"text-gray-700",currentClassName:"",scrolledPastClassName:"",items:E(F)},F.items.map(M)))),Object(S.b)(p.a,{mdx:t,prev:D,next:C,share:[X,U]}),Object(S.b)("div",{className:"relative z-10 pt-5 pb-16 px-5 lg:px-24 xl:px-48 bg-white"},Object(S.b)(k.a,{options:{clientID:"980d14f081da7aba9610",clientSecret:"00b571be2ccc9865cad705348b9a7d593d4219a6",repo:"dataviz-hub2-comments",owner:"researchdata-sheffield",admin:["yld-weng"],id:t.fields.slug.substr(0,50),title:t.frontmatter.title,body:location.href+t.frontmatter.description,distractionFreeMode:!1}}))),Object(S.b)(i.a,null))};var T="2174023026"}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-jsx-68c65ecf0961b8ccb500.js.map