(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1/Rz":function(e,t,a){"use strict";a("XfO3"),a("HEwt"),a("q1tI");var n=a("Wbzz"),o=a("ma3e"),r=a("qKvR");t.a=function(e){var t=e.numPages,a=e.currentPage,i=e.typePage;return Object(r.b)("div",{className:"flex flex-wrap justify-between"},Object(r.b)("div",{className:"flex flex-wrap items-center mx-auto mt-10 mb-5 md:mt-24 md:mb-16"},Object(r.b)(n.Link,{to:""+(1===t?i+"/page/"+a:[1===a||2===a?""+i:i+"/page/"+(a-1)]),className:(1===t?"hidden":[1===a?"hidden":""])+" flex items-center bg-white hover:bg-highlight_2 hover:text-white text-gray-800 font-semibold py-2 px-12 border border-gray-400 shadow mr-4"},Object(r.b)(o.b,{className:"mr-3"})," Newer posts"),Object(r.b)(n.Link,{to:""+(1===t?i+"/page/"+a:[a===t?i+"/page/"+a:i+"/page/"+(a+1)]),className:(1===t?"hidden":[a===t?"hidden":""])+" flex items-center bg-white hover:bg-highlight_2 hover:text-white text-gray-800 font-semibold py-2 px-12 border border-gray-400 shadow"},"Older posts ",Object(r.b)(o.c,{className:"ml-3"}))),Object(r.b)("div",{className:"flex justify-end px-16 items-center text-base mt-5 mb-5 md:mt-24 md:mb-16 font-semibold"},Object(r.b)("p",null,"Showing page"),Object(r.b)("div",{className:"inline-block relative w-16 mx-2"},Object(r.b)("select",{value:a,onChange:function(e){var t=e.target.value;1!=t?Object(n.navigate)(i+"/page/"+t):Object(n.navigate)(""+i)},className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-3 shadow leading-tight focus:outline-none"},Array.from({length:t}).map((function(e,t){var a=t+1;return Object(r.b)("option",{key:a},a)}))),Object(r.b)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},Object(r.b)("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Object(r.b)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),Object(r.b)("p",null,"of ",t)))}},"2mxO":function(e,t,a){"use strict";a("Z2Ku"),a("L9s1");var n=a("q1tI"),o=a("Wbzz"),r=a("M4XY"),i=a.n(r),l=a("ma3e"),s=a("Tgqd"),c=a("IdFE"),b=a("qKvR");t.a=function(e){var t=e.pageContext,a=Object(n.useState)(t.tags),r=a[0],d=a[1],u=Object(n.useState)(!1),m=u[0],p=u[1];return Object(b.b)("div",{className:"xl:w-1/4 2xl:w-1/5 px-5 py-1 xl:py-3 text-gray-100 shadow-lg text-sm fixed top-0 right-0 min-h-100 hidden xl:flex flex-row border-l-2 border-white transition duration-500 z-50 bg-white",style:{fontFamily:"TUoS Blake",transform:m?"translateX(0%)":"translateX(101%)"}},Object(b.b)("div",{onClick:function(){return p(!m)},className:"absolute left-0 min-h-100 -ml-12 font-bold cursor-pointer flex flex-row items-center transition duration-500 delay-500",style:{transform:"translateY(-5%)",fontFamily:"TUoS Blake"}},Object(b.b)("div",{className:(m?"hidden":"block")+" px-3 py-4 hover:bg-highlight_2 bg-gray-900 transition duration-500 shadow-xl"},"T",Object(b.b)("br",null),"A",Object(b.b)("br",null),"G"),Object(b.b)("div",{className:(m?"block":"hidden")+" px-3 py-4 bg-highlight_2 hover:bg-gray-900 transition duration-500 shadow-xl font-bold"},Object(b.b)(c.b,null))),Object(b.b)("div",{className:"overflow-hidden lg:py-2 xl:py-6"},Object(b.b)("div",null,Object(b.b)("h1",{className:"inline-block text-2xl pb-2 xl:pb-5 font-semibold mr-4 text-gray-900"},Object(b.b)(l.i,{style:{display:"inline-block"}})," ",location.href.includes("/blog/tag/")?Object(b.b)(o.Link,{to:"/blog/#read"},"ALL"):"Tags"),Object(b.b)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-6 xl:ml-2 mb-4"},Object(b.b)(s.a,{className:"inline-block text-center text-xl -mt-2"}),Object(b.b)("input",{id:"tagSearch",onChange:function(e){var a=e.target.value.toLowerCase(),n=t.tags.filter((function(e){return-1!=e.toLowerCase().indexOf(a)}));d(n)},className:"search__input py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600",style:{minWidth:"5vw"},type:"text",name:"search",placeholder:"Search for tags"}))),r.map((function(e){return Object(b.b)(o.Link,{key:e,activeStyle:{color:"white",backgroundColor:"#00aeef"},partiallyActive:!0,to:"/blog/tag/"+i()(e),className:"inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 m-1 bg-gray-100 text-gray-700 rounded-full 2xl:text-sm font-sans font-semibold"},e," (",t.countTags[""+e],")")}))))}},"6GSg":function(e,t,a){"use strict";var n=a("BnfJ"),o=(a("q1tI"),a("Wbzz")),r=a("1eu9"),i=a.n(r),l=a("qKvR");t.a=function(e){var t=e.className,a=e.children,r=e.Height;return Object(l.b)(o.StaticQuery,{query:"2620169608",render:function(e){var n=e.desktop.childImageSharp.fluid;return Object(l.b)(i.a,{className:t,fluid:n,style:{height:r||"100vh",width:"100%",display:"flex"}},Object(l.b)("div",null,a))},data:n})}},BnfJ:function(e){e.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"aspectRatio":1.4285714285714286,"src":"/static/c823d2bf145dd881fe77c9265116b3e8/ca599/no_image_4.png","srcSet":"/static/c823d2bf145dd881fe77c9265116b3e8/88c65/no_image_4.png 480w,\\n/static/c823d2bf145dd881fe77c9265116b3e8/104b3/no_image_4.png 960w,\\n/static/c823d2bf145dd881fe77c9265116b3e8/ca599/no_image_4.png 1920w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}}')},HVRw:function(e,t,a){"use strict";a("q1tI");var n=a("Wbzz"),o=a("M4XY"),r=a.n(o),i=a("bH/k"),l=a.n(i),s=a("qKvR");t.a=function(e){var t=e.pageContext;return Object(s.b)(l.a,{cascade:!0,top:!0,delay:1e3},Object(s.b)("div",{id:"read",className:"flex flex-wrap absolute bottom-0 p-1 mr-2 right-0"},t.categories.map((function(e){return Object(s.b)(n.Link,{key:e,to:"/blog/category/"+r()(e),activeStyle:{color:"white"},partiallyActive:!0,className:"bg-transparent text-gray-500 font-semibold hover:text-white py-2 px-3 hover:border-transparent rounded text-sm xl:text-base transition duration-1300 ease-in-out"},e)}))))}},MwFH:function(e,t,a){"use strict";a("f3/d"),a("KKXr"),a("q1tI");var n=a("Wbzz"),o=a("M4XY"),r=a.n(o),i=a("ZdGz"),l=a.n(i),s=a("qNCg"),c=a.n(s),b=a("sh/8"),d=a.n(b),u=a("uhbi"),m=a.n(u),p=a("iR2b"),f=a.n(p),g=a("ma3e"),h=a("oBNZ"),x=a.n(h),v=a("VonM"),y=a("qKvR");t.a=function(e){var t=e.allMdx;return Object(y.b)("div",{className:"flex flex-wrap w-full"},t.edges.map((function(e){var t,a=e.node;if(a.frontmatter&&a.frontmatter.thumbnail&&a.frontmatter.thumbnail.childImageSharp)t=a.frontmatter.thumbnail.childImageSharp.fluid.src;else{var o=[l.a,c.a,d.a,m.a,f.a];t=o[Math.floor(Math.random()*o.length)]}var i=a.frontmatter.description.split(" ").splice(0,25);i=i.length<25?i.join(" "):i.join(" ").concat(" ...");var s=a.frontmatter.title;return Object(y.b)(x.a,{bottom:!0,key:a.id,duration:400,fraction:.4},Object(y.b)("div",{className:"w-full md:w-1/3 xl:w-1/4 min-h-80 ipadp:min-h-120 2xl:min-h-100 overflow-hidden bg-white relative"},Object(y.b)(n.Link,{className:"group",to:a.fields.slug},"true"===a.frontmatter.featured&&Object(y.b)("div",{className:"flex top-0 left-0 absolute ml-6 mt-6 text-yellow-300 ipadp:text-gray-300 group-hover:bg-black items-center",style:{zIndex:"3"}},Object(y.b)(g.h,{className:"text-yellow-300 text-2xl"}),Object(y.b)("p",{className:"inline-block ipadp:opacity-0 group-hover:opacity-100 text-base font-semibold px-2",style:{fontFamily:"TUoS Blake",textShadow:"#000000 0px 0px 20px"}},"Featured")),Object(y.b)(v.i,{className:"ipadp:greyScale-100 group-hover:greyScale-0 min-h-1/2 lg:min-h-3/5 lg:max-h-3/5"},Object(y.b)(v.h,{style:{backgroundImage:"url("+t+")"}})),Object(y.b)(v.b,{className:"px-6 pt-6 2xl:px-8 2xl:pt-8 leading-none text-gray-600"},Object(y.b)("div",{className:"overflow-hidden fade-box2"},Object(y.b)("h1",{className:"font-bold text-xll xl:text-2xl leading-tight text-black group-hover:text-highlight_2 overflow-y-hidden font-sans"},s),Object(y.b)("p",{className:"my-3 text-sm leading-tight group-hover:text-highlight_2"},i)),Object(y.b)("div",{className:"relative z-10 text-xs"},Object(y.b)("p",{className:"mt-3"},a.frontmatter.author.map((function(e,t){return a.frontmatter.author.length==t+1?e.name:e.name+" · "}))),Object(y.b)("p",{className:"mt-1 mb-2"},a.frontmatter.date," · ",a.fields.readingTime.text)))),Object(y.b)("div",{className:"px-6 2xl:px-8"},a.frontmatter.category.map((function(e){return Object(y.b)(v.f,{key:e,to:"/blog/category/"+r()(e)},e)})),a.frontmatter.tag.map((function(e,t){return t<3&&Object(y.b)(v.j,{key:e,to:"/blog/tag/"+r()(e)},e)})),a.frontmatter.tag.length>3&&Object(y.b)(v.j,{to:a.fields.slug},"+",a.frontmatter.tag.length-3," more"))))})))}},RKBw:function(e,t,a){"use strict";a("Z2Ku"),a("L9s1");var n=a("q1tI"),o=a("Wbzz"),r=a("M4XY"),i=a.n(r),l=a("ma3e"),s=a("Tgqd"),c=a("qKvR");t.a=function(e){var t=e.pageContext,a=Object(n.useState)(t.tags),r=a[0],b=a[1],d=Object(n.useState)(!1),u=d[0],m=d[1];return Object(c.b)("div",{className:"w-full px-5 py-1 xl:py-2 text-gray-100 shadow-lg text-sm xl:hidden relative z-10 bg-white"},Object(c.b)("div",{className:" overflow-hidden pt-1 pb-2"},Object(c.b)("div",null,Object(c.b)("h1",{className:"inline-block text-2xl font-semibold mr-4 text-gray-900"},Object(c.b)(l.i,{style:{display:"inline-block"}})," ",location.href.includes("/blog/tag/")?Object(c.b)(o.Link,{to:"/blog/#read"},"ALL"):"Tags"),Object(c.b)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-2"},Object(c.b)(s.a,{className:"inline-block text-center text-xl -mt-2"}),Object(c.b)("input",{id:"tagSearch",onChange:function(e){var a=e.target.value.toLowerCase(),n=t.tags.filter((function(e){return-1!=e.toLowerCase().indexOf(a)}));b(n)},className:"search__input py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600",style:{maxWidth:"40vw"},type:"text",name:"search",placeholder:"Search for tags"}))),Object(c.b)("div",{className:(u?"":"hidden")+" pt-4"},r.map((function(e){return Object(c.b)(o.Link,{key:e,activeStyle:{color:"white",backgroundColor:"#00aeef"},partiallyActive:!0,to:"/blog/tag/"+i()(e),className:"inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 m-1 bg-gray-100 text-gray-700 rounded-full 2xl:text-sm font-sans font-semibold"},e," (",t.countTags[""+e],")")})))),Object(c.b)("div",{onClick:function(){return m(!u)},className:"text-gray-900 flex justify-center text-2xl absolute top-0 right-0 mr-4 mt-4"},Object(c.b)(l.a,{className:" ",style:{transform:u?"rotate(180deg)":"",transition:"all .5s ease"}})))}},ZdGz:function(e,t,a){e.exports=a.p+"static/no_image_1-cbab1c85fd0b5df4703007ed018da08a.png"},"bH/k":function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function o(e,t){var a=t.left,n=t.right,o=t.top,r=t.bottom,i=t.x,l=t.y,s=t.mirror,c=t.opposite,d=(a?1:0)|(n||l?2:0)|(o||i?4:0)|(r?8:0)|(s?16:0)|(c?32:0)|(e?64:0);if(u.hasOwnProperty(d))return u[d];if(!s!=!(e&&c)){var m=[n,a,r,o,l,i];a=m[0],n=m[1],o=m[2],r=m[3],i=m[4],l=m[5]}var p=void 0;if(i||l||a||n||o||r){var f=i||o||r?(r?"-":"")+"1":"0",g=l||n||a?(a?"-":"")+"1":"0";p=e?"from {\n          transform: perspective(400px);\n        }\n        30% {\n          transform: perspective(400px) rotate3d("+f+", "+g+", 0, -15deg);\n          opacity: 1;\n        }\n        to {\n          transform: perspective(400px) rotate3d("+f+", "+g+", 0, 90deg);\n          opacity: 0;\n        }":"from {\n          transform: perspective(400px) rotate3d("+f+", "+g+", 0, 90deg);\n          animation-timing-function: ease-in;\n          opacity: 0;\n        }\n        40% {\n          transform: perspective(400px) rotate3d("+f+", "+g+", 0, -20deg);\n          animation-timing-function: ease-in;\n        }\n        60% {\n          transform: perspective(400px) rotate3d("+f+", "+g+", 0, 10deg);\n          opacity: 1;\n        }\n        80% {\n          transform: perspective(400px) rotate3d("+f+", "+g+", 0, -5deg);\n        }\n        to {\n          transform: perspective(400px);\n        }"}else p="from {\n          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n          animation-timing-function: ease-out;\n          opacity: "+(e?"1":"0")+";\n        }\n        40% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n          animation-timing-function: ease-out;\n        }\n        50% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n          animation-timing-function: ease-in;\n        }\n        to {\n          transform: perspective(400px);\n          animation-timing-function: ease-in;\n          opacity: "+(e?"0":"1")+";\n        }";return u[d]=(0,b.animation)(p),u[d]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,i=e.duration,l=void 0===i?b.defaults.duration:i,s=e.delay,d=void 0===s?b.defaults.delay:s,u=e.count,m=void 0===u?b.defaults.count:u,p=n(e,["children","out","forever","timeout","duration","delay","count"]),f={make:o,duration:void 0===r?l:r,delay:d,forever:a,count:m,style:{animationFillMode:"both",backfaceVisibility:"visible"}};return(0,c.default)(p,f,f,t)}a("HAE/"),a("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var i,l=a("17x9"),s=a("eH+L"),c=(i=s)&&i.__esModule?i:{default:i},b=a("ar19"),d={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},u={};r.propTypes=d,t.default=r,e.exports=t.default},iR2b:function(e,t,a){e.exports=a.p+"static/no_image_5-0b0b76e89033963a72b34200d192a851.png"},oBNZ:function(e,t,a){"use strict";function n(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}function o(e,t){var a=t.left,n=t.right,o=t.up,r=t.down,i=t.top,l=t.bottom,s=t.big,c=t.mirror,d=t.opposite,m=(a?1:0)|(n?2:0)|(i||r?4:0)|(l||o?8:0)|(c?16:0)|(d?32:0)|(e?64:0)|(s?128:0);if(u.hasOwnProperty(m))return u[m];var p=a||n||o||r||i||l,f=void 0,g=void 0;if(p){if(!c!=!(e&&d)){var h=[n,a,l,i,r,o];a=h[0],n=h[1],i=h[2],l=h[3],o=h[4],r=h[5]}var x=s?"2000px":"100%";f=a?"-"+x:n?x:"0",g=r||i?"-"+x:o||l?x:"0"}return u[m]=(0,b.animation)((e?"to":"from")+" {"+(p?" transform: translate3d("+f+", "+g+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),u[m]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,i=e.duration,l=void 0===i?b.defaults.duration:i,s=e.delay,d=void 0===s?b.defaults.delay:s,u=e.count,m=void 0===u?b.defaults.count:u,p=n(e,["children","out","forever","timeout","duration","delay","count"]),f={make:o,duration:void 0===r?l:r,delay:d,forever:a,count:m,style:{animationFillMode:"both"},reverse:p.left};return(0,c.default)(p,f,f,t)}a("HAE/"),a("nIY7"),a("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var i,l=a("17x9"),s=a("eH+L"),c=(i=s)&&i.__esModule?i:{default:i},b=a("ar19"),d={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,big:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},u={};r.propTypes=d,t.default=r,e.exports=t.default},qNCg:function(e,t,a){e.exports=a.p+"static/no_image_2-8588841d1e101e5cd1794737b8392414.png"},"sh/8":function(e,t,a){e.exports=a.p+"static/no_image_3-5fff908ab0abc7a6edf3a19225c0b9a5.png"},uhbi:function(e,t,a){e.exports=a.p+"static/no_image_4-c823d2bf145dd881fe77c9265116b3e8.png"}}]);
//# sourceMappingURL=ec4fa0e42e6920e5b5e4f3fb8709e75c6bdd83fa-ee8da7e3373ca23056b0.js.map