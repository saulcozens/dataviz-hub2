(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3fwO":function(e,t,n){"use strict";n("XfO3"),n("HEwt"),n("q1tI");var a=n("Wbzz"),o=n("ma3e"),r=n("qKvR");t.a=function(e){var t=e.numPages,n=e.currentPage,i=e.pageType;return Object(r.b)("div",{className:"flex flex-wrap justify-between"},Object(r.b)("div",{className:"flex flex-wrap items-center mx-auto mt-10 mb-5 md:mt-16 md:mb-16"},Object(r.b)(a.Link,{to:""+(1===t?i+"/page/"+n:[1===n||2===n?""+i:i+"/page/"+(n-1)]),className:(1===t?"hidden":[1===n?"hidden":""])+" flex items-center bg-white hover:bg-highlight_2 hover:text-white text-gray-800 font-semibold py-2 px-12 border border-gray-400 shadow mr-4"},Object(r.b)(o.b,{className:"mr-3"})," Newer posts"),Object(r.b)(a.Link,{to:""+(1===t?i+"/page/"+n:[n===t?i+"/page/"+n:i+"/page/"+(n+1)]),className:(1===t?"hidden":[n===t?"hidden":""])+" flex items-center bg-white hover:bg-highlight_2 hover:text-white text-gray-800 font-semibold py-2 px-12 border border-gray-400 shadow"},"Older posts ",Object(r.b)(o.c,{className:"ml-3"}))),Object(r.b)("div",{className:"flex justify-end px-16 items-center text-base mt-5 mb-5 md:mt-16 md:mb-16 font-semibold"},Object(r.b)("p",null,"Showing page"),Object(r.b)("div",{className:"inline-block relative w-16 mx-2"},Object(r.b)("select",{value:n,onChange:function(e){var t=e.target.value;1!=t?Object(a.navigate)(i+"/page/"+t):Object(a.navigate)(""+i)},className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-3 shadow leading-tight focus:outline-none"},Array.from({length:t}).map((function(e,t){var n=t+1;return Object(r.b)("option",{key:n},n)}))),Object(r.b)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},Object(r.b)("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Object(r.b)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),Object(r.b)("p",null,"of ",t)))}},"3wDW":function(e,t,n){"use strict";n("q1tI");var a=n("Wbzz"),o=n("M4XY"),r=n.n(o),i=n("bH/k"),l=n.n(i),c=n("qKvR");t.a=function(e){var t=e.pageContext;return Object(c.b)(l.a,{cascade:!0,top:!0,delay:1e3},Object(c.b)("div",{id:"read",className:"flex flex-wrap absolute bottom-0 p-1 mr-2 right-0"},t.categories.map((function(e){return Object(c.b)(a.Link,{key:e,to:"/blog/category/"+r()(e),activeStyle:{color:"white"},partiallyActive:!0,className:"bg-transparent text-gray-500 font-semibold hover:text-white py-2 px-3 hover:border-transparent rounded text-sm xl:text-base transition duration-1300 ease-in-out"},e)}))))}},B7NH:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("Wbzz"),i=n("M4XY"),l=n.n(i),c=n("ma3e"),s=n("oBNZ"),u=n.n(s),b=n("1oaH"),d=n("x/DL"),f=n("qKvR");t.a=function(e){var t=e.allMdx;return Object(f.b)("div",{className:"flex flex-wrap w-full"},t.edges.map((function(e){var t=e.node,n=Object(d.a)(t),a=Object(d.b)(t.frontmatter.description,25),i=t.frontmatter.title,s=t.frontmatter.tag;return Object(f.b)(u.a,{bottom:!0,key:t.id,duration:400,fraction:.3},Object(f.b)("div",{className:"w-full md:w-1/3 xl:w-1/4 min-h-90 lg:min-h-110 2xl:max-h-90 overflow-hidden bg-white relative pb-10 2xl:pb-0"},Object(f.b)(r.Link,{className:"group",to:t.fields.slug},"true"===t.frontmatter.featured&&Object(f.b)("div",{className:"flex top-0 left-0 absolute ml-6 mt-6 text-yellow-300 ipadp:text-gray-300 group-hover:bg-black items-center",style:{zIndex:"3"}},Object(f.b)(c.j,{className:"text-yellow-300 text-2xl"}),Object(f.b)("p",{className:"inline-block ipadp:opacity-0 group-hover:opacity-100 text-base font-semibold px-2",style:{fontFamily:"TUoS Blake",textShadow:"#000000 0px 0px 20px"}},"Featured")),Object(f.b)(b.j,{className:"ipadp:greyScale-100 group-hover:greyScale-0 min-h-1/2 lg:min-h-3/5 lg:max-h-3/5 xl:min-h-1/2 xl:max-h-1/2"},Object(f.b)(b.i,{style:{backgroundImage:"url("+n+")"}})),Object(f.b)(b.c,{className:"px-6 pt-6 2xl:px-8 2xl:pt-8 leading-none"},Object(f.b)("div",{className:"overflow-hidden fade-box2"},Object(f.b)("h1",{className:"font-extrabold text-2xl xl:text-3xl leading-tight text-black group-hover:text-highlight_2 overflow-y-hidden font-sans"},i),Object(f.b)("p",{className:"my-3 text-base leading-tight group-hover:text-highlight_2 text-gray-800"},a)),Object(f.b)("div",{className:"relative z-10 text-xs",style:{color:"#848484",fontWeight:"400"}},Object(f.b)("p",{className:"mt-4 mb-1"},t.frontmatter.date," · ",t.fields.readingTime.text)))),Object(f.b)("div",{className:"px-6 2xl:px-8 text-xs",style:{color:"#848484",fontWeight:"400"}},t.frontmatter.category.map((function(e){return Object(f.b)(o.a.Fragment,null,Object(f.b)(r.Link,{className:"font-semibold hover:underline",key:e,to:"/blog/category/"+l()(e)},e),Object(f.b)(o.a.Fragment,null," · "))})),s.map((function(e,t){return t<3&&Object(f.b)(o.a.Fragment,null,Object(f.b)(r.Link,{key:e,className:"hover:underline",to:"/blog/tag/"+l()(e)},e),s.length===t+1?"":[2===t?" ":" · "])})),s.length>3&&Object(f.b)(r.Link,{className:"hover:underline",to:t.fields.slug},"+",s.length-3," more"))))})))}},BnfJ:function(e){e.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"aspectRatio":1.4285714285714286,"src":"/static/c823d2bf145dd881fe77c9265116b3e8/ca599/no_image_4.png","srcSet":"/static/c823d2bf145dd881fe77c9265116b3e8/88c65/no_image_4.png 480w,\\n/static/c823d2bf145dd881fe77c9265116b3e8/104b3/no_image_4.png 960w,\\n/static/c823d2bf145dd881fe77c9265116b3e8/ca599/no_image_4.png 1920w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}}')},M4XY:function(e,t,n){(function(t){n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt"),n("SRfc"),n("Oyvg");var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+r+"]",l="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",c="\\d+",s="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",b="[^\\ud800-\\udfff"+r+c+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",p="[A-Z\\xc0-\\xd6\\xd8-\\xde]",m="(?:"+u+"|"+b+")",g="(?:"+p+"|"+b+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",h="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,f].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),v="(?:"+[s,d,f].join("|")+")"+h,y=RegExp("['’]","g"),O=RegExp(l,"g"),j=RegExp([p+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[i,p,"$"].join("|")+")",g+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[i,p+m,"$"].join("|")+")",p+"?"+m+"+(?:['’](?:d|ll|m|re|s|t|ve))?",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",c,v].join("|"),"g"),w=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,N="object"==typeof t&&t&&t.Object===Object&&t,k="object"==typeof self&&self&&self.Object===Object&&self,L=N||k||Function("return this")();var _,S=(_={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==_?void 0:_[e]});var z=Object.prototype.toString,A=L.Symbol,I=A?A.prototype:void 0,C=I?I.toString:void 0;function T(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==z.call(e)}(e))return C?C.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function E(e){return null==e?"":T(e)}var R,q=(R=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,a){var o=-1,r=e?e.length:0;for(a&&r&&(n=e[++o]);++o<r;)n=t(n,e[o],o,e);return n}(function(e,t,n){return e=E(e),void 0===(t=n?void 0:t)?function(e){return w.test(e)}(e)?function(e){return e.match(j)||[]}(e):function(e){return e.match(a)||[]}(e):e.match(t)||[]}(function(e){return(e=E(e))&&e.replace(o,S).replace(O,"")}(e).replace(y,"")),R,"")});e.exports=q}).call(this,n("yLpj"))},T099:function(e,t,n){"use strict";n("Z2Ku"),n("L9s1");var a=n("q1tI"),o=n("Wbzz"),r=n("M4XY"),i=n.n(r),l=n("ma3e"),c=n("Tgqd"),s=n("qKvR");t.a=function(e){var t=e.pageContext,n=Object(a.useState)(t.tags),r=n[0],u=n[1],b=Object(a.useState)(!1),d=b[0],f=b[1];return Object(s.b)("div",{className:"w-full px-5 py-1 xl:py-2 text-gray-100 shadow-lg text-sm xl:hidden relative z-10 bg-white"},Object(s.b)("div",{className:" overflow-hidden pt-1 pb-2"},Object(s.b)("div",null,Object(s.b)("h1",{className:"inline-block text-2xl font-semibold mr-4 text-gray-900"},Object(s.b)(l.k,{style:{display:"inline-block"}})," ",location.href.includes("/blog/tag/")?Object(s.b)(o.Link,{to:"/blog/#read"},"ALL"):"Tags"),Object(s.b)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-2"},Object(s.b)(c.a,{className:"inline-block text-center text-xl -mt-2"}),Object(s.b)("input",{id:"tagSearch",onChange:function(e){!1===d&&f(!d);var n=e.target.value.toLowerCase(),a=t.tags.filter((function(e){return-1!=e.toLowerCase().indexOf(n)}));u(a)},className:"search__input py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600",style:{maxWidth:"40vw"},type:"text",name:"search",placeholder:"Search for tags"}))),Object(s.b)("div",{className:(d?"":"hidden")+" pt-4"},r.map((function(e){return Object(s.b)(o.Link,{key:e,activeStyle:{color:"white",backgroundColor:"#00aeef"},partiallyActive:!0,to:"/blog/tag/"+i()(e),className:"inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 m-1 bg-gray-100 text-gray-700 rounded-full 2xl:text-sm font-sans font-semibold"},e," (",t.countTags[""+e],")")})))),Object(s.b)("div",{onClick:function(){return f(!d)},className:"text-gray-900 flex justify-center text-2xl absolute top-0 right-0 mr-4 mt-4"},Object(s.b)(l.a,{className:" ",style:{transform:d?"rotate(180deg)":"",transition:"all .5s ease"}})))}},ZdGz:function(e,t,n){e.exports=n.p+"static/no_image_1-cbab1c85fd0b5df4703007ed018da08a.png"},"bH/k":function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){var n=t.left,a=t.right,o=t.top,r=t.bottom,i=t.x,l=t.y,c=t.mirror,s=t.opposite,b=(n?1:0)|(a||l?2:0)|(o||i?4:0)|(r?8:0)|(c?16:0)|(s?32:0)|(e?64:0);if(d.hasOwnProperty(b))return d[b];if(!c!=!(e&&s)){var f=[a,n,r,o,l,i];n=f[0],a=f[1],o=f[2],r=f[3],i=f[4],l=f[5]}var p=void 0;if(i||l||n||a||o||r){var m=i||o||r?(r?"-":"")+"1":"0",g=l||a||n?(n?"-":"")+"1":"0";p=e?"from {\n          transform: perspective(400px);\n        }\n        30% {\n          transform: perspective(400px) rotate3d("+m+", "+g+", 0, -15deg);\n          opacity: 1;\n        }\n        to {\n          transform: perspective(400px) rotate3d("+m+", "+g+", 0, 90deg);\n          opacity: 0;\n        }":"from {\n          transform: perspective(400px) rotate3d("+m+", "+g+", 0, 90deg);\n          animation-timing-function: ease-in;\n          opacity: 0;\n        }\n        40% {\n          transform: perspective(400px) rotate3d("+m+", "+g+", 0, -20deg);\n          animation-timing-function: ease-in;\n        }\n        60% {\n          transform: perspective(400px) rotate3d("+m+", "+g+", 0, 10deg);\n          opacity: 1;\n        }\n        80% {\n          transform: perspective(400px) rotate3d("+m+", "+g+", 0, -5deg);\n        }\n        to {\n          transform: perspective(400px);\n        }"}else p="from {\n          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n          animation-timing-function: ease-out;\n          opacity: "+(e?"1":"0")+";\n        }\n        40% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n          animation-timing-function: ease-out;\n        }\n        50% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n          animation-timing-function: ease-in;\n        }\n        to {\n          transform: perspective(400px);\n          animation-timing-function: ease-in;\n          opacity: "+(e?"0":"1")+";\n        }";return d[b]=(0,u.animation)(p),d[b]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,n=(e.out,e.forever),r=e.timeout,i=e.duration,l=void 0===i?u.defaults.duration:i,c=e.delay,b=void 0===c?u.defaults.delay:c,d=e.count,f=void 0===d?u.defaults.count:d,p=a(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===r?l:r,delay:b,forever:n,count:f,style:{animationFillMode:"both",backfaceVisibility:"visible"}};return(0,s.default)(p,m,m,t)}n("HAE/"),n("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var i,l=n("17x9"),c=n("eH+L"),s=(i=c)&&i.__esModule?i:{default:i},u=n("ar19"),b={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},d={};r.propTypes=b,t.default=r,e.exports=t.default},iR2b:function(e,t,n){e.exports=n.p+"static/no_image_5-0b0b76e89033963a72b34200d192a851.png"},iXBm:function(e,t,n){"use strict";var a=n("BnfJ"),o=(n("q1tI"),n("Wbzz")),r=n("1eu9"),i=n.n(r),l=n("qKvR");t.a=function(e){var t=e.className,n=e.children,r=e.Height;return Object(l.b)(o.StaticQuery,{query:"2620169608",render:function(e){var a=e.desktop.childImageSharp.fluid;return Object(l.b)(i.a,{className:t,fluid:a,style:{height:r||"100vh",width:"100%",display:"flex"}},Object(l.b)("div",null,n))},data:a})}},oBNZ:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function o(e,t){var n=t.left,a=t.right,o=t.up,r=t.down,i=t.top,l=t.bottom,c=t.big,s=t.mirror,b=t.opposite,f=(n?1:0)|(a?2:0)|(i||r?4:0)|(l||o?8:0)|(s?16:0)|(b?32:0)|(e?64:0)|(c?128:0);if(d.hasOwnProperty(f))return d[f];var p=n||a||o||r||i||l,m=void 0,g=void 0;if(p){if(!s!=!(e&&b)){var x=[a,n,l,i,r,o];n=x[0],a=x[1],i=x[2],l=x[3],o=x[4],r=x[5]}var h=c?"2000px":"100%";m=n?"-"+h:a?h:"0",g=r||i?"-"+h:o||l?h:"0"}return d[f]=(0,u.animation)((e?"to":"from")+" {"+(p?" transform: translate3d("+m+", "+g+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),d[f]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,n=(e.out,e.forever),r=e.timeout,i=e.duration,l=void 0===i?u.defaults.duration:i,c=e.delay,b=void 0===c?u.defaults.delay:c,d=e.count,f=void 0===d?u.defaults.count:d,p=a(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===r?l:r,delay:b,forever:n,count:f,style:{animationFillMode:"both"},reverse:p.left};return(0,s.default)(p,m,m,t)}n("HAE/"),n("nIY7"),n("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var i,l=n("17x9"),c=n("eH+L"),s=(i=c)&&i.__esModule?i:{default:i},u=n("ar19"),b={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,big:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},d={};r.propTypes=b,t.default=r,e.exports=t.default},qNCg:function(e,t,n){e.exports=n.p+"static/no_image_2-8588841d1e101e5cd1794737b8392414.png"},"sh/8":function(e,t,n){e.exports=n.p+"static/no_image_3-5fff908ab0abc7a6edf3a19225c0b9a5.png"},uhbi:function(e,t,n){e.exports=n.p+"static/no_image_4-c823d2bf145dd881fe77c9265116b3e8.png"},"x/DL":function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p}));n("KKXr");var a=n("ZdGz"),o=n.n(a),r=n("qNCg"),i=n.n(r),l=n("sh/8"),c=n.n(l),s=n("uhbi"),u=n.n(s),b=n("iR2b"),d=n.n(b);function f(e,t){var n=e.split(" ").splice(0,t);return n=n.length<t?n.join(" "):n.join(" ").concat(" ...")}function p(e){var t;if(e.frontmatter&&e.frontmatter.thumbnail&&e.frontmatter.thumbnail.childImageSharp)t=e.frontmatter.thumbnail.childImageSharp.fluid.src;else{var n=[o.a,i.a,c.a,u.a,d.a];t=n[Math.floor(Math.random()*n.length)]}return t}},xVa7:function(e,t,n){"use strict";n("Z2Ku"),n("L9s1");var a=n("q1tI"),o=n("Wbzz"),r=n("M4XY"),i=n.n(r),l=n("ma3e"),c=n("Tgqd"),s=n("IdFE"),u=n("qKvR");t.a=function(e){var t=e.pageContext,n=Object(a.useState)(t.tags),r=n[0],b=n[1],d=Object(a.useState)(!1),f=d[0],p=d[1];return Object(u.b)("div",{className:"xl:w-1/4 2xl:w-1/5 px-5 py-1 xl:py-3 text-gray-100 shadow-lg text-sm fixed top-0 right-0 min-h-100 hidden xl:flex flex-row border-l-2 border-white transition duration-500 z-50 bg-white",style:{fontFamily:"TUoS Blake",transform:f?"translateX(0%)":"translateX(101%)"}},Object(u.b)("div",{onClick:function(){return p(!f)},className:"absolute left-0 min-h-100 -ml-10 font-bold cursor-pointer flex flex-row items-center transition duration-500 delay-500",style:{transform:"translateY(-5%)",fontFamily:"TUoS Blake"}},Object(u.b)("div",{className:(f?"hidden":"block")+" px-3 py-4 hover:bg-highlight_2 bg-gray-900 transition duration-500 shadow-xl"},"T",Object(u.b)("br",null),"A",Object(u.b)("br",null),"G"),Object(u.b)("div",{className:(f?"block":"hidden")+" px-3 py-4 bg-highlight_2 hover:bg-gray-900 transition duration-500 shadow-xl font-bold"},Object(u.b)(s.b,null))),Object(u.b)("div",{className:"overflow-hidden lg:py-2 xl:py-6"},Object(u.b)("div",null,Object(u.b)("h1",{className:"inline-block text-2xl pb-2 xl:pb-5 font-semibold mr-4 text-gray-900"},Object(u.b)(l.k,{style:{display:"inline-block"}})," ",location.href.includes("/blog/tag/")?Object(u.b)(o.Link,{to:"/blog/#read"},"ALL"):"Tags"),Object(u.b)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow px-2 rounded-lg ml-6 xl:ml-2 mb-4"},Object(u.b)(c.a,{className:"inline-block text-center text-xl -mt-2"}),Object(u.b)("input",{id:"tagSearch",onChange:function(e){var n=e.target.value.toLowerCase(),a=t.tags.filter((function(e){return-1!=e.toLowerCase().indexOf(n)}));b(a)},className:"search__input py-1 pl-2 text-base focus:outline-none pr-3 text-gray-600",style:{minWidth:"5vw"},type:"text",name:"search",placeholder:"Search for tags"}))),r.map((function(e){return Object(u.b)(o.Link,{key:e,activeStyle:{color:"white",backgroundColor:"#00aeef"},partiallyActive:!0,to:"/blog/tag/"+i()(e),className:"inline-block hover:bg-highlight_2 hover:text-white py-1 px-2 m-1 bg-gray-100 text-gray-700 rounded-full 2xl:text-sm font-sans font-semibold"},e," (",t.countTags[""+e],")")}))))}}}]);
//# sourceMappingURL=ec4fa0e42e6920e5b5e4f3fb8709e75c6bdd83fa-b3702859210bd8c365b3.js.map