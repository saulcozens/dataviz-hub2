(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"1/Rz":function(e,t,a){"use strict";a("XfO3"),a("HEwt");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("ma3e");t.a=function(e){var t=e.numPages,a=e.currentPage,n=e.typePage;return r.a.createElement("div",{className:"flex flex-wrap justify-between"},r.a.createElement("div",{className:"flex justify-center items-center content-center mx-auto mt-4 mb-8"},r.a.createElement(l.Link,{to:""+(1===t?n+"/page/"+a:[1===a||2===a?""+n:n+"/page/"+(a-1)]),className:(1===t?"hidden":[1===a?"hidden":""])+" flex items-center bg-white hover:bg-highlight_2 hover:text-white text-gray-800 font-semibold py-2 px-12 border border-gray-400 rounded shadow"},r.a.createElement(i.a,{className:"mr-3"})," Newer posts"),r.a.createElement(l.Link,{to:""+(1===t?n+"/page/"+a:[a===t?n+"/page/"+a:n+"/page/"+(a+1)]),className:(1===t?"hidden":[a===t?"hidden":""])+" flex items-center bg-white hover:bg-highlight_2 hover:text-white text-gray-800 font-semibold py-2 px-12 border border-gray-400 rounded shadow ml-16"},"Older posts ",r.a.createElement(i.b,{className:"ml-3"}))),r.a.createElement("div",{className:"flex justify-end mt-4 mb-8 px-16 items-center text-base",style:{fontFamily:"Comic Sans MS"}},r.a.createElement("p",null,"Showing page"),r.a.createElement("div",{className:"inline-block relative w-16 mx-2"},r.a.createElement("select",{value:a,onChange:function(e){var t=e.target.value;1!=t?Object(l.navigate)(n+"/page/"+t):Object(l.navigate)(""+n)},className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-3 rounded shadow leading-tight focus:outline-none"},Array.from({length:t}).map((function(e,t){var a=t+1;return r.a.createElement("option",{key:a},a)}))),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),r.a.createElement("p",null,"of ",t)))}},"6GSg":function(e,t,a){"use strict";var n=a("qBNH"),r=a("q1tI"),l=a.n(r),i=a("Wbzz"),s=a("1eu9"),o=a.n(s);t.a=function(e){var t=e.className,a=e.children,r=e.Height;return l.a.createElement(i.StaticQuery,{query:"1251993812",render:function(e){var n=e.desktop.childImageSharp.fluid;return l.a.createElement(o.a,{className:t,fluid:n,style:{height:r||"55vh",width:"100%",display:"flex"}},l.a.createElement("div",null,a))},data:n})}},HVRw:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("M4XY"),s=a.n(i);t.a=function(e){var t=e.pageContext;return r.a.createElement("div",{className:"flex flex-wrap absolute bottom-0 p-1 mr-2 right-0",style:{fontFamily:"TUoS Blake"}},t.categories.map((function(e){return r.a.createElement(l.Link,{key:e,to:"/blog/category/"+s()(e),activeStyle:{color:"white"},partiallyActive:!0,className:"bg-transparent text-gray-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded text-base transition duration-1300 ease-in-out"},e)})))}},MwFH:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("M4XY"),s=a.n(i),o=a("ZdGz"),c=a.n(o),m=a("qNCg"),d=a.n(m),g=a("sh/8"),p=a.n(g),u=a("uhbi"),f=a.n(u),h=a("iR2b"),b=a.n(h);t.a=function(e){var t=e.allMdx;return r.a.createElement("div",{className:"flex flex-wrap"},t.edges.map((function(e){var t,a=e.node;if(a.frontmatter&&a.frontmatter.thumbnail&&a.frontmatter.thumbnail.childImageSharp)t=a.frontmatter.thumbnail.childImageSharp.fluid.src;else{var n=[c.a,d.a,p.a,f.a,b.a];t=n[Math.floor(Math.random()*n.length)]}var i=a.frontmatter.description;return i.length>=120&&(i=i.substring(0,120).concat(" ...")),r.a.createElement("div",{key:a.id,className:"w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 min-h-100 pb-24",style:{fontFamily:"TUoS  Blake"}},r.a.createElement(l.Link,{className:"group",to:a.fields.slug},r.a.createElement("img",{className:"w-full blog-image",style:{minHeight:"60%",maxHeight:"60%",objectFit:"cover",objectPosition:"center"},src:t}),r.a.createElement("div",{className:"px-8 py-5 leading-none text-gray-500 pb-36"},r.a.createElement("h1",{className:"font-bold text-2xl leading-tight text-gray-900 group-hover:text-highlight_2 max-h-12 overflow-y-hidden",style:{fontFamily:"TUoS Stephenson"}},a.frontmatter.title),r.a.createElement("p",{className:"my-2 text-sm leading-tight group-hover:text-highlight_2"},i),r.a.createElement("p",{className:" my-2 text-xs pt-2"},a.frontmatter.date),r.a.createElement("p",{className:"my-2 text-xs"},a.frontmatter.author.join(" · ")),r.a.createElement("p",{className:"mt-5 text-base group-hover:text-highlight_2 font-semibold"},a.fields.readingTime.text),r.a.createElement("div",{className:"py-2 text-sm"},a.frontmatter.category.map((function(e){return r.a.createElement(l.Link,{key:e,to:"/blog/category/"+s()(e),className:"inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-500 text-gray-200 rounded-md"},e)})),a.frontmatter.tag.map((function(e){return r.a.createElement(l.Link,{key:e,to:"/blog/tag/"+s()(e),className:"inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-300 text-gray-500 rounded-md"},e)}))))))})))}},Mwe6:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return u}));var n=a("q1tI"),r=a.n(n),l=a("L12J"),i=a("1/Rz"),s=a("MwFH"),o=a("HVRw"),c=a("RKBw"),m=a("dmsj"),d=a("6GSg"),g=a("M4XY"),p=a.n(g);t.default=function(e){var t=e.data.allMdx,a=e.pageContext;return r.a.createElement(l.a,null,r.a.createElement(m.a,{title:"Blog - "+a.tag,keywords:["the university of sheffield","data visualisation","data visualisation hub","research"]}),r.a.createElement(d.a,{className:"flex items-center justify-center text-center",Height:"55vh"},r.a.createElement("div",{className:"text-white"},r.a.createElement("h1",{className:"text-4xl"},"Tag: ",a.tag),r.a.createElement("p",{className:"text-sm"},"scientia potentia est.")),r.a.createElement(o.a,{pageContext:a})),r.a.createElement("div",{className:"flex flex-wrap-reverse"},r.a.createElement("div",{className:"w-full xs:w-full sm:w-full lg:w-full laptop:w-4/5"},r.a.createElement(s.a,{allMdx:t}),r.a.createElement(i.a,{numPages:a.numPages,currentPage:a.currentPage,typePage:"/blog/tag/"+p()(a.tag)})),r.a.createElement("div",{className:"w-full xs:w-full sm:w-full lg:w-full laptop:w-1/5 px-8 pt-6 pb-6 text-gray-100 shadow-2xl bg-gray-900 text-sm",style:{fontFamily:"TUoS Blake"}},r.a.createElement(c.a,{pageContext:a}))))};var u="1662433396"},RKBw:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),i=a("M4XY"),s=a.n(i),o=a("ma3e");t.a=function(e){var t=e.pageContext;return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-2xl pb-4 font-semibold"},r.a.createElement(o.g,{style:{display:"inline-block"}})," Tags"),t.tags.map((function(e){return r.a.createElement(l.Link,{key:e,activeStyle:{color:"white",backgroundColor:"#00aeef"},partiallyActive:!0,to:"/blog/tag/"+s()(e),className:"inline-block hover:bg-highlight_2 hover:text-white py-1 px-3 m-1 bg-gray-100 text-gray-700 rounded-md"},e)})))}},ZdGz:function(e,t,a){e.exports=a.p+"static/no_image_1-d045d4ce3802778d22f4dbed02c4d9da.png"},iR2b:function(e,t,a){e.exports=a.p+"static/no_image_5-719d9205cd776b0cda9f9d883d2efbba.png"},qBNH:function(e){e.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"aspectRatio":1.5,"src":"/static/21d74287ad45f8bb3ed575643156ae9d/1a900/arts.jpg","srcSet":"/static/21d74287ad45f8bb3ed575643156ae9d/18e3d/arts.jpg 480w,\\n/static/21d74287ad45f8bb3ed575643156ae9d/c85f0/arts.jpg 960w,\\n/static/21d74287ad45f8bb3ed575643156ae9d/1a900/arts.jpg 1920w,\\n/static/21d74287ad45f8bb3ed575643156ae9d/9af17/arts.jpg 2559w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}}')},qNCg:function(e,t,a){e.exports=a.p+"static/no_image_2-b13c16e972f8b2ad521f01353e4f3531.png"},"sh/8":function(e,t,a){e.exports=a.p+"static/no_image_3-aaf15ad711674c5252f1a4ba244792eb.png"},uhbi:function(e,t,a){e.exports=a.p+"static/no_image_4-fffe700b17d689328c70fc5bbd4ebd96.png"}}]);
//# sourceMappingURL=component---src-templates-blog-tag-template-jsx-64851085f37c0300c93c.js.map