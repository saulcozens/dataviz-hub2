(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1/Rz":function(e,t,a){"use strict";a("XfO3"),a("HEwt");var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("ma3e");t.a=function(e){var t=e.numPages,a=e.currentPage,n=e.typePage;return r.a.createElement("div",{className:"flex flex-wrap justify-between"},r.a.createElement("div",{className:"flex justify-center items-center content-center mx-auto mt-5 mb-5 md:mt-24 md:mb-16"},r.a.createElement(o.Link,{to:""+(1===t?n+"/page/"+a:[1===a||2===a?""+n:n+"/page/"+(a-1)]),className:(1===t?"hidden":[1===a?"hidden":""])+" flex items-center bg-white hover:bg-highlight_2 hover:text-white text-gray-800 font-semibold py-2 px-12 border border-gray-400 shadow"},r.a.createElement(i.a,{className:"mr-3"})," Newer posts"),r.a.createElement(o.Link,{to:""+(1===t?n+"/page/"+a:[a===t?n+"/page/"+a:n+"/page/"+(a+1)]),className:(1===t?"hidden":[a===t?"hidden":""])+" flex items-center bg-white hover:bg-highlight_2 hover:text-white text-gray-800 font-semibold py-2 px-12 border border-gray-400 shadow ml-16"},"Older posts ",r.a.createElement(i.b,{className:"ml-3"}))),r.a.createElement("div",{className:"flex justify-end px-16 items-center text-base mt-5 mb-5 md:mt-24 md:mb-16",style:{fontFamily:"Comic Sans MS"}},r.a.createElement("p",null,"Showing page"),r.a.createElement("div",{className:"inline-block relative w-16 mx-2"},r.a.createElement("select",{value:a,onChange:function(e){var t=e.target.value;1!=t?Object(o.navigate)(n+"/page/"+t):Object(o.navigate)(""+n)},className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-3 shadow leading-tight focus:outline-none"},Array.from({length:t}).map((function(e,t){var a=t+1;return r.a.createElement("option",{key:a},a)}))),r.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),r.a.createElement("p",null,"of ",t)))}},"6GSg":function(e,t,a){"use strict";var n=a("qBNH"),r=a("q1tI"),o=a.n(r),i=a("Wbzz"),l=a("1eu9"),s=a.n(l);t.a=function(e){var t=e.className,a=e.children,r=e.Height;return o.a.createElement(i.StaticQuery,{query:"1251993812",render:function(e){var n=e.desktop.childImageSharp.fluid;return o.a.createElement(s.a,{className:t,fluid:n,style:{height:r||"100vh",width:"100%",display:"flex"}},o.a.createElement("div",null,a))},data:n})}},HVRw:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("M4XY"),l=a.n(i),s=a("bH/k"),c=a.n(s);t.a=function(e){var t=e.pageContext;return r.a.createElement(c.a,{cascade:!0,top:!0,delay:1e3},r.a.createElement("div",{id:"read",className:"flex flex-wrap absolute bottom-0 p-1 mr-2 right-0"},t.categories.map((function(e){return r.a.createElement(o.Link,{key:e,to:"/blog/category/"+l()(e),activeStyle:{color:"white"},partiallyActive:!0,className:"bg-transparent text-gray-700 font-semibold hover:text-white py-2 px-3 hover:border-transparent rounded text-sm xl:text-base transition duration-1300 ease-in-out"},e)}))))}},MwFH:function(e,t,a){"use strict";a("KKXr");var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("M4XY"),l=a.n(i),s=a("ZdGz"),c=a.n(s),m=a("qNCg"),d=a.n(m),u=a("sh/8"),p=a.n(u),f=a("uhbi"),g=a.n(f),b=a("iR2b"),h=a.n(b),v=a("oBNZ"),x=a.n(v);t.a=function(e){var t=e.allMdx;return r.a.createElement("div",{className:"flex flex-wrap w-full"},t.edges.map((function(e){var t,a=e.node;if(a.frontmatter&&a.frontmatter.thumbnail&&a.frontmatter.thumbnail.childImageSharp)t=a.frontmatter.thumbnail.childImageSharp.fluid.src;else{var n=[c.a,d.a,p.a,g.a,h.a];t=n[Math.floor(Math.random()*n.length)]}var i=a.frontmatter.description.split(" ").splice(0,30);return i=i.length<30?i.join(" "):i.join(" ").concat(" ..."),r.a.createElement(x.a,{bottom:!0,key:a.id,duration:400,fraction:.45},r.a.createElement("div",{className:"w-full sm:w-1/2 lg:w-1/3 min-h-100 max-h-100 pb-24 overflow-hidden",style:{fontFamily:"TUoS  Blake"}},r.a.createElement(o.Link,{className:"group",to:a.fields.slug},r.a.createElement("img",{className:"w-full blog-image group-hover:border-b-4 group-hover:border-highlight_2 border-solid min-h-3/5 max-h-3/5",style:{objectFit:"cover",objectPosition:"center"},src:t}),r.a.createElement("div",{className:"px-8 py-5 leading-none text-gray-500 pb-36"},r.a.createElement("h1",{className:"font-bold text-2xl leading-tight text-gray-900 group-hover:text-highlight_2 overflow-y-hidden",style:{minHeight:"0vh",maxHeight:"10vh",fontFamily:"TUoS Stephenson"}},a.frontmatter.title),r.a.createElement("p",{className:"my-2 text-sm leading-tight group-hover:text-highlight_2"},i),r.a.createElement("p",{className:" my-2 text-xs pt-2"},a.frontmatter.date),r.a.createElement("p",{className:"my-2 text-xs"},a.frontmatter.author.join(" · ")),r.a.createElement("p",{className:"mt-5 text-base group-hover:text-highlight_2 font-semibold"},a.fields.readingTime.text),r.a.createElement("div",{className:"py-2 text-sm"},a.frontmatter.category.map((function(e){return r.a.createElement(o.Link,{key:e,to:"/blog/category/"+l()(e),className:"inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-500 text-gray-200 rounded-full"},e)})),a.frontmatter.tag.map((function(e){return r.a.createElement(o.Link,{key:e,to:"/blog/tag/"+l()(e),className:"inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 mt-2 mr-2 bg-gray-300 text-gray-500 rounded-full"},e)})))))))})))}},Mwe6:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return g}));var n=a("q1tI"),r=a.n(n),o=a("Rb52"),i=a("NSxh"),l=a("1/Rz"),s=a("MwFH"),c=a("HVRw"),m=a("RKBw"),d=a("dmsj"),u=a("6GSg"),p=a("M4XY"),f=a.n(p);t.default=function(e){var t=e.data.allMdx,a=e.pageContext;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{title:"Blog - "+a.tag,keywords:["the university of sheffield","data visualisation","data visualisation hub","research"]}),r.a.createElement(o.a,null),r.a.createElement(u.a,{className:"flex items-center justify-center text-center",Height:"35vh"},r.a.createElement("div",{className:"text-white"},r.a.createElement("h1",{className:"text-4xl"},"Tag: ",a.tag),r.a.createElement("p",{className:"text-sm"},"scientia potentia est.")),r.a.createElement(c.a,{pageContext:a})),r.a.createElement("div",{className:"flex flex-wrap-reverse"},r.a.createElement("div",{className:"w-full xl:w-3/4 2xl:w-4/5"},r.a.createElement(s.a,{allMdx:t}),r.a.createElement(l.a,{numPages:a.numPages,currentPage:a.currentPage,typePage:"/blog/tag/"+f()(a.tag)})),r.a.createElement(m.a,{pageContext:a})),r.a.createElement(i.a,null))};var g="1662433396"},RKBw:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("M4XY"),l=a.n(i),s=a("ma3e"),c=a("Tgqd");t.a=function(e){var t=e.pageContext,a=Object(n.useState)(t.tags),i=a[0],m=a[1];return r.a.createElement("div",{className:"w-full xl:w-1/4 2xl:w-1/5 px-5 py-1 xl:py-3 text-gray-100 shadow-2xl bg-gray-900 text-sm",style:{fontFamily:"TUoS Blake"}},r.a.createElement("div",{className:"sticky top-0 overflow-hidden lg:py-2 xl:py-6"},r.a.createElement("div",null,r.a.createElement("h1",{className:"inline-block text-2xl pb-2 xl:pb-5 font-semibold mr-4"},r.a.createElement(s.h,{style:{display:"inline-block"}})," Tags"),r.a.createElement("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-6 xl:ml-2 mb-4"},r.a.createElement(c.a,{className:"inline-block text-center text-xl -mt-2"}),r.a.createElement("input",{id:"tagSearch",onChange:function(e){var a=e.target.value.toLowerCase(),n=t.tags.filter((function(e){return-1!=e.toLowerCase().indexOf(a)}));m(n)},className:"search__input py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600",style:{minWidth:"5vw"},type:"text",name:"search",placeholder:"Search for tag"}))),i.map((function(e){return r.a.createElement(o.Link,{key:e,activeStyle:{color:"white",backgroundColor:"#00aeef"},partiallyActive:!0,to:"/blog/tag/"+l()(e),className:"inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 m-1 bg-gray-100 text-gray-700 rounded-full 2xl:text-sm font-sans font-semibold"},e," (",t.countTags[""+e],")")}))))}},ZdGz:function(e,t,a){e.exports=a.p+"static/no_image_1-cbab1c85fd0b5df4703007ed018da08a.png"},"bH/k":function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e,t){var a=t.left,n=t.right,r=t.top,o=t.bottom,i=t.x,l=t.y,s=t.mirror,c=t.opposite,d=(a?1:0)|(n||l?2:0)|(r||i?4:0)|(o?8:0)|(s?16:0)|(c?32:0)|(e?64:0);if(u.hasOwnProperty(d))return u[d];if(!s!=!(e&&c)){var p=[n,a,o,r,l,i];a=p[0],n=p[1],r=p[2],o=p[3],i=p[4],l=p[5]}var f=void 0;if(i||l||a||n||r||o){var g=i||r||o?(o?"-":"")+"1":"0",b=l||n||a?(a?"-":"")+"1":"0";f=e?"from {\n          transform: perspective(400px);\n        }\n        30% {\n          transform: perspective(400px) rotate3d("+g+", "+b+", 0, -15deg);\n          opacity: 1;\n        }\n        to {\n          transform: perspective(400px) rotate3d("+g+", "+b+", 0, 90deg);\n          opacity: 0;\n        }":"from {\n          transform: perspective(400px) rotate3d("+g+", "+b+", 0, 90deg);\n          animation-timing-function: ease-in;\n          opacity: 0;\n        }\n        40% {\n          transform: perspective(400px) rotate3d("+g+", "+b+", 0, -20deg);\n          animation-timing-function: ease-in;\n        }\n        60% {\n          transform: perspective(400px) rotate3d("+g+", "+b+", 0, 10deg);\n          opacity: 1;\n        }\n        80% {\n          transform: perspective(400px) rotate3d("+g+", "+b+", 0, -5deg);\n        }\n        to {\n          transform: perspective(400px);\n        }"}else f="from {\n          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n          animation-timing-function: ease-out;\n          opacity: "+(e?"1":"0")+";\n        }\n        40% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n          animation-timing-function: ease-out;\n        }\n        50% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n          animation-timing-function: ease-in;\n        }\n        to {\n          transform: perspective(400px);\n          animation-timing-function: ease-in;\n          opacity: "+(e?"0":"1")+";\n        }";return u[d]=(0,m.animation)(f),u[d]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.defaults,t=e.children,a=(e.out,e.forever),o=e.timeout,i=e.duration,l=void 0===i?m.defaults.duration:i,s=e.delay,d=void 0===s?m.defaults.delay:s,u=e.count,p=void 0===u?m.defaults.count:u,f=n(e,["children","out","forever","timeout","duration","delay","count"]),g={make:r,duration:void 0===o?l:o,delay:d,forever:a,count:p,style:{animationFillMode:"both",backfaceVisibility:"visible"}};return(0,c.default)(f,g,g,t)}a("HAE/"),a("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var i,l=a("17x9"),s=a("eH+L"),c=(i=s)&&i.__esModule?i:{default:i},m=a("ar19"),d={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},u={};o.propTypes=d,t.default=o,e.exports=t.default},iR2b:function(e,t,a){e.exports=a.p+"static/no_image_5-719d9205cd776b0cda9f9d883d2efbba.png"},oBNZ:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function r(e,t){var a=t.left,n=t.right,r=t.up,o=t.down,i=t.top,l=t.bottom,s=t.big,c=t.mirror,d=t.opposite,p=(a?1:0)|(n?2:0)|(i||o?4:0)|(l||r?8:0)|(c?16:0)|(d?32:0)|(e?64:0)|(s?128:0);if(u.hasOwnProperty(p))return u[p];var f=a||n||r||o||i||l,g=void 0,b=void 0;if(f){if(!c!=!(e&&d)){var h=[n,a,l,i,o,r];a=h[0],n=h[1],i=h[2],l=h[3],r=h[4],o=h[5]}var v=s?"2000px":"100%";g=a?"-"+v:n?v:"0",b=o||i?"-"+v:r||l?v:"0"}return u[p]=(0,m.animation)((e?"to":"from")+" {"+(f?" transform: translate3d("+g+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),u[p]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.defaults,t=e.children,a=(e.out,e.forever),o=e.timeout,i=e.duration,l=void 0===i?m.defaults.duration:i,s=e.delay,d=void 0===s?m.defaults.delay:s,u=e.count,p=void 0===u?m.defaults.count:u,f=n(e,["children","out","forever","timeout","duration","delay","count"]),g={make:r,duration:void 0===o?l:o,delay:d,forever:a,count:p,style:{animationFillMode:"both"},reverse:f.left};return(0,c.default)(f,g,g,t)}a("HAE/"),a("nIY7"),a("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var i,l=a("17x9"),s=a("eH+L"),c=(i=s)&&i.__esModule?i:{default:i},m=a("ar19"),d={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,big:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},u={};o.propTypes=d,t.default=o,e.exports=t.default},qBNH:function(e){e.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"aspectRatio":1.5,"src":"/dataviz-hub2/static/21d74287ad45f8bb3ed575643156ae9d/1a900/arts.jpg","srcSet":"/dataviz-hub2/static/21d74287ad45f8bb3ed575643156ae9d/18e3d/arts.jpg 480w,\\n/dataviz-hub2/static/21d74287ad45f8bb3ed575643156ae9d/c85f0/arts.jpg 960w,\\n/dataviz-hub2/static/21d74287ad45f8bb3ed575643156ae9d/1a900/arts.jpg 1920w,\\n/dataviz-hub2/static/21d74287ad45f8bb3ed575643156ae9d/9af17/arts.jpg 2559w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}}')},qNCg:function(e,t,a){e.exports=a.p+"static/no_image_2-b13c16e972f8b2ad521f01353e4f3531.png"},"sh/8":function(e,t,a){e.exports=a.p+"static/no_image_3-aaf15ad711674c5252f1a4ba244792eb.png"},uhbi:function(e,t,a){e.exports=a.p+"static/no_image_4-fffe700b17d689328c70fc5bbd4ebd96.png"}}]);
//# sourceMappingURL=component---src-templates-blog-tag-template-jsx-9e302ab2a5feea3d4d31.js.map