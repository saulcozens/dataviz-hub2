(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/eHF":function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){var r=t.distance,n=t.left,a=t.right,o=t.up,i=t.down,u=t.top,c=t.bottom,l=t.big,f=t.mirror,p=t.opposite,h=(r?r.toString():0)+((n?1:0)|(a?2:0)|(u||i?4:0)|(c||o?8:0)|(f?16:0)|(p?32:0)|(e?64:0)|(l?128:0));if(d.hasOwnProperty(h))return d[h];var m=n||a||o||i||u||c,g=void 0,v=void 0;if(m){if(!f!=!(e&&p)){var b=[a,n,c,u,i,o];n=b[0],a=b[1],u=b[2],c=b[3],o=b[4],i=b[5]}var y=r||(l?"2000px":"100%");g=n?"-"+y:a?y:"0",v=i||u?"-"+y:o||c?y:"0"}return d[h]=(0,s.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+g+", "+v+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),d[h]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.children,o=(e.out,e.forever),i=e.timeout,u=e.duration,c=void 0===u?s.defaults.duration:u,f=e.delay,d=void 0===f?s.defaults.delay:f,p=e.count,h=void 0===p?s.defaults.count:p,m=n(e,["children","out","forever","timeout","duration","delay","count"]),g={make:a,duration:void 0===i?c:i,delay:d,forever:o,count:h,style:{animationFillMode:"both"},reverse:m.left};return t?(0,l.default)(m,g,g,r):g}r("HAE/"),r("a1Th"),r("h7Nl"),r("Btvt"),r("nIY7"),r("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var i,u=r("17x9"),s=r("ar19"),c=r("eH+L"),l=(i=c)&&i.__esModule?i:{default:i},f={out:u.bool,left:u.bool,right:u.bool,top:u.bool,bottom:u.bool,big:u.bool,mirror:u.bool,opposite:u.bool,duration:u.number,timeout:u.number,distance:u.string,delay:u.number,count:u.number,forever:u.bool},d={};o.propTypes=f,t.default=o,e.exports=t.default},Muxj:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),o=r("dmsj"),i=r("Rb52"),u=r("NSxh"),s=r("gWZI"),c=r("Wbzz"),l=r("1eu9"),f=r.n(l),d=function(e){var t=e.className,r=e.children;return a.a.createElement(c.StaticQuery,{query:"2955208998",render:function(e){var n=e.desktop.childImageSharp.fluid;return a.a.createElement(f.a,{className:t,fluid:n,style:{backgroundAttachment:"fixed",backgroundSize:"cover",width:"100%",minHeight:"100vh"}},r)},data:s})},p=(r("rE2o"),r("ioFf"),r("a1Th"),r("I5cv"),r("Z2Ku"),r("L9s1"),r("T39b"),r("XfO3"),r("HEwt"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("KKXr"),r("OG14"),r("lGYE")),h=r("Tgqd"),m=r("WG1l"),g=r.n(m),v=r("M4XY"),b=r.n(v),y=r("ZdGz"),x=r.n(y),w=r("qNCg"),E=r.n(w),O=r("sh/8"),j=r.n(O),T=r("uhbi"),N=r.n(T),S=r("iR2b"),_=r.n(S),k=r("hXnw"),I=r.n(k),R=r("/eHF"),P=r.n(R);function C(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var q=function(e){var t,r;r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;!function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}}(n);function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={query:"",results:[]},t.componentDidMount=function(){setTimeout((function(){if(t.props.location.state.searchWord){var e=t.props.location.state.searchWord,r=document.getElementById("pageSearch");t.setState({query:e}),r.setAttribute("value",e),t.searchFromHome(e)}}),100)},t.search=function(e){var r=e.target.value;if(t.state.query.length>1){var n=t.getSearchResults(r);t.setState({results:n,query:r})}else t.setState({results:[],query:r})},t.searchFromHome=function(e){var r=e;if(t.state.query.length>1){var n=t.getSearchResults(r);t.setState({results:n,query:r})}else t.setState({results:[],query:r})},t}var o=n.prototype;return o.render=function(){var e=this,t=function(){if(e.state.results.length>0&&e.state.query.length>2){var t=p.data;return a.a.createElement("div",null,a.a.createElement("div",null,"Found ",e.state.results.length," results"),a.a.createElement("div",{className:"flex flex-wrap my-5 xl:my-8 justify-center"},e.state.results.map((function(r,n){var o;t.allMdx.edges.map((function(e){var t=e.node;if(r.id==t.id)if(t.frontmatter&&t.frontmatter.thumbnail&&t.frontmatter.thumbnail.childImageSharp)o=t.frontmatter.thumbnail.childImageSharp.fluid.src;else{var n=[x.a,E.a,j.a,N.a,_.a];o=n[Math.floor(Math.random()*n.length)]}}));var i=r.description.split(" ").splice(0,30);return i=i.length<30?i.join(" ").concat("."):i.join(" ").concat(" ..."),a.a.createElement("div",{className:"text-gray-800 group relative w-full md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white m-3 xl:m-4 text-left cursor-pointer min-h-60 ipadp:min-h-80 2xl:min-h-55 2xl:max-h-55 hover:shadow-2xl ipadp:overflow-hidden",style:{borderRadius:"1rem"},key:n},a.a.createElement("a",{href:Object(c.withPrefix)(""+r.url),target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{className:"w-full rounded-t-lg min-h-1/2 max-h-1/2 ipadp:min-h-3/5 ipadp:max-h-3/5 group-hover:max-h-1/2 group-hover:min-h-1/2",style:{objectFit:"cover",objectPosition:"center",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem",transition:".3s ease"},src:o}),a.a.createElement("div",{className:"pt-2 pb-2 flex flex-wrap"},a.a.createElement("p",{className:"px-2 ipadp:px-6 mb-2 text-xxs text-gray-400 w-full font-semibold ipadp:hidden group-hover:block"},a.a.createElement(g.a,{highlightClassName:"text-red-500 bg-transparent",textToHighlight:r.url.slice(5).toUpperCase(),searchWords:e.state.query.split()})),a.a.createElement("h1",{className:"px-2 ipadp:px-6 font-bold leading-4 mt-2 mb-3 group-hover:text-gray-800"},a.a.createElement(g.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:r.title,searchWords:e.state.query.split()})),a.a.createElement("h1",{className:"px-2 ipadp:px-6 leading-4 text-xs xl:text-sm group-hover:text-gray-800"},a.a.createElement(g.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:i,searchWords:e.state.query.split()})),a.a.createElement("h1",{className:"text-gray-500 px-2 ipadp:px-6 leading-4 text-xs xl:text-sm mt-2"},a.a.createElement(g.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:r.author.join(" · "),searchWords:e.state.query.split()})),a.a.createElement("div",{className:"border-t-1 border-gray-300 w-full absolute bottom-0 pb-2 bg-white",style:{borderBottomLeftRadius:"1rem",borderBottomRightRadius:"1rem"}},a.a.createElement(c.Link,{className:"inline-block text-gray-700 text-xs hover:text-highlight_2 font-semibold ml-4 mr-2",to:"/blog/category/"+b()(r.category[0])},a.a.createElement(g.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:r.category[0],searchWords:e.state.query.split()})),r.tag.map((function(t){return a.a.createElement(c.Link,{key:t,to:"/blog/tag/"+b()(t),className:"inline-block text-gray-600 text-xs hover:text-highlight_2 mr-2"},a.a.createElement(g.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:t,searchWords:e.state.query.split()}))}))))))}))))}return e.state.query.length>2?"No results for "+e.state.query:e.state.query.length>0?"Please insert at least 3 characters":""};return a.a.createElement("div",{className:this.props.classNames+" mt-16 2xl:mt-20 mb-32 relative text-gray-300 w-full text-center"},a.a.createElement(I.a,{top:!0,duration:1e3,cascade:!0},a.a.createElement("p",{className:"text-2xl xl:text-3xl text-white my-4 xl:my-8"},"what's next? ")),a.a.createElement(P.a,{bottom:!0,duration:1500},a.a.createElement("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow p-3 rounded-lg"},a.a.createElement(h.a,{className:"inline-block text-center text-3xl -mt-1"}),a.a.createElement("input",{id:"pageSearch",onChange:this.search,onInput:this.search,className:"search__input py-1 pl-4 text-lg focus:outline-none pr-5 text-gray-600",style:{minWidth:"25vw"},type:"text",name:"search",placeholder:"Title, description, date..."}))),a.a.createElement("div",{className:"search__list"},a.a.createElement(t,null)))},o.getSearchResults=function(e){var t=window.__FLEXSEARCH__.en.index,r=window.__FLEXSEARCH__.en.store;if(e&&t){var n=[];return console.log(t),Object.keys(t).forEach((function(r){var a;(a=n).push.apply(a,C(t[r].values.search(e)))})),n=Array.from(new Set(n)),r.filter((function(e){return n.includes(e.id)?e:null})).map((function(e){return e.node}))}return[]},n}(n.Component);t.default=function(e){var t=e.location;return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:"Search",keywords:["the university of sheffield","data visualisation","data visualisation hub","research","dataviz.shef","search dataviz"]}),a.a.createElement(i.a,null),a.a.createElement(d,{className:"flex flex-wrap"},a.a.createElement(q,{location:t})),a.a.createElement(u.a,null))}},WG1l:function(e,t,r){r("KKXr"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("f3/d"),r("LK8F"),r("2Spj"),r("rE2o"),r("ioFf"),r("pIFo"),r("8+KV"),r("0l/t"),r("Vd3H"),r("DNiP"),r("bWfx"),r("Oyvg"),r("V+eJ"),r("91GP"),r("HAE/"),e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=r(2),o=(n=a)&&n.__esModule?n:{default:n};t.default=o.default,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};function a(e){return e&&e.__esModule?e:{default:e}}t.default=c;var o=r(3),i=a(r(4)),u=r(14),s=a(r(15));function c(e){var t=e.activeClassName,r=void 0===t?"":t,a=e.activeIndex,i=void 0===a?-1:a,c=e.activeStyle,l=e.autoEscape,f=e.caseSensitive,d=void 0!==f&&f,p=e.className,h=e.findChunks,m=e.highlightClassName,g=void 0===m?"":m,v=e.highlightStyle,b=void 0===v?{}:v,y=e.highlightTag,x=void 0===y?"mark":y,w=e.sanitize,E=e.searchWords,O=e.textToHighlight,j=e.unhighlightClassName,T=void 0===j?"":j,N=e.unhighlightStyle,S=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["activeClassName","activeIndex","activeStyle","autoEscape","caseSensitive","className","findChunks","highlightClassName","highlightStyle","highlightTag","sanitize","searchWords","textToHighlight","unhighlightClassName","unhighlightStyle"]),_=(0,o.findAll)({autoEscape:l,caseSensitive:d,findChunks:h,sanitize:w,searchWords:E,textToHighlight:O}),k=x,I=-1,R="",P=void 0,C=(0,s.default)((function(e){var t={};for(var r in e)t[r.toLowerCase()]=e[r];return t}));return(0,u.createElement)("span",n({className:p},S,{children:_.map((function(e,t){var n=O.substr(e.start,e.end-e.start);if(e.highlight){I++;var a=void 0;a="object"==typeof g?d?g[n]:(g=C(g))[n.toLowerCase()]:g;var o=I===+i;R=a+" "+(o?r:""),P=!0===o&&null!=c?Object.assign({},b,c):b;var s={children:n,className:R,key:t,style:P};return"string"!=typeof k&&(s.highlightIndex=I),(0,u.createElement)(k,s)}return(0,u.createElement)("span",{children:n,className:T,key:t,style:N})}))}))}c.propTypes={activeClassName:i.default.string,activeIndex:i.default.number,activeStyle:i.default.object,autoEscape:i.default.bool,className:i.default.string,findChunks:i.default.func,highlightClassName:i.default.oneOfType([i.default.object,i.default.string]),highlightStyle:i.default.object,highlightTag:i.default.oneOfType([i.default.node,i.default.func,i.default.string]),sanitize:i.default.func,searchWords:i.default.arrayOf(i.default.oneOfType([i.default.string,i.default.instanceOf(RegExp)])).isRequired,textToHighlight:i.default.string.isRequired,unhighlightClassName:i.default.string,unhighlightStyle:i.default.object},e.exports=t.default},function(e,t){e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);Object.defineProperty(t,"combineChunks",{enumerable:!0,get:function(){return n.combineChunks}}),Object.defineProperty(t,"fillInChunks",{enumerable:!0,get:function(){return n.fillInChunks}}),Object.defineProperty(t,"findAll",{enumerable:!0,get:function(){return n.findAll}}),Object.defineProperty(t,"findChunks",{enumerable:!0,get:function(){return n.findChunks}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.findAll=function(e){var t=e.autoEscape,o=e.caseSensitive,i=void 0!==o&&o,u=e.findChunks,s=void 0===u?n:u,c=e.sanitize,l=e.searchWords,f=e.textToHighlight;return a({chunksToHighlight:r({chunks:s({autoEscape:t,caseSensitive:i,sanitize:c,searchWords:l,textToHighlight:f})}),totalLength:f?f.length:0})};var r=t.combineChunks=function(e){var t=e.chunks;return t=t.sort((function(e,t){return e.start-t.start})).reduce((function(e,t){if(0===e.length)return[t];var r=e.pop();if(t.start<=r.end){var n=Math.max(r.end,t.end);e.push({start:r.start,end:n})}else e.push(r,t);return e}),[])},n=function(e){var t=e.autoEscape,r=e.caseSensitive,n=e.sanitize,a=void 0===n?o:n,i=e.searchWords,u=e.textToHighlight;return u=a(u),i.filter((function(e){return e})).reduce((function(e,n){n=a(n),t&&(n=n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"));for(var o=new RegExp(n,r?"g":"gi"),i=void 0;i=o.exec(u);){var s=i.index,c=o.lastIndex;c>s&&e.push({start:s,end:c}),i.index==o.lastIndex&&o.lastIndex++}return e}),[])};t.findChunks=n;var a=t.fillInChunks=function(e){var t=e.chunksToHighlight,r=e.totalLength,n=[],a=function(e,t,r){t-e>0&&n.push({start:e,end:t,highlight:r})};if(0===t.length)a(0,r,!1);else{var o=0;t.forEach((function(e){a(o,e.start,!1),a(e.start,e.end,!0),o=e.end})),a(o,r,!1)}return n};function o(e){return e}}])},function(e,t,r){(function(t){if("production"!==t.env.NODE_ENV){var n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=r(6)((function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}),!0)}else e.exports=r(13)()}).call(t,r(5))},function(e,t){var r,n,a=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,c=[],l=!1,f=-1;function d(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=u(d);l=!0;for(var t=c.length;t;){for(s=c,c=[];++f<t;)s&&s[f].run();f=-1,t=c.length}s=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||l||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,r){(function(t){"use strict";var n=r(7),a=r(8),o=r(9),i=r(10),u=r(11),s=r(12);e.exports=function(e,r){var c="function"==typeof Symbol&&Symbol.iterator;var l={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:p(n.thatReturnsNull),arrayOf:function(e){return p((function(t,r,n,a,o){if("function"!=typeof e)return new d("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var i=t[r];if(!Array.isArray(i))return new d("Invalid "+a+" `"+o+"` of type `"+g(i)+"` supplied to `"+n+"`, expected an array.");for(var s=0;s<i.length;s++){var c=e(i,s,n,a,o+"["+s+"]",u);if(c instanceof Error)return c}return null}))},element:p((function(t,r,n,a,o){var i=t[r];return e(i)?null:new d("Invalid "+a+" `"+o+"` of type `"+g(i)+"` supplied to `"+n+"`, expected a single ReactElement.")})),instanceOf:function(e){return p((function(t,r,n,a,o){if(!(t[r]instanceof e)){var i=e.name||"<<anonymous>>";return new d("Invalid "+a+" `"+o+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return"<<anonymous>>";return e.constructor.name}(t[r])+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}return null}))},node:p((function(e,t,r,n,a){return m(e[t])?null:new d("Invalid "+n+" `"+a+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,r,n,a,o){if("function"!=typeof e)return new d("Property `"+o+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var i=t[r],s=g(i);if("object"!==s)return new d("Invalid "+a+" `"+o+"` of type `"+s+"` supplied to `"+n+"`, expected an object.");for(var c in i)if(i.hasOwnProperty(c)){var l=e(i,c,n,a,o+"."+c,u);if(l instanceof Error)return l}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&o(!1,"Invalid argument supplied to oneOf, expected an instance of array."),n.thatReturnsNull;return p((function(t,r,n,a,o){for(var i=t[r],u=0;u<e.length;u++)if(f(i,e[u]))return null;return new d("Invalid "+a+" `"+o+"` of value `"+i+"` supplied to `"+n+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&o(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),n.thatReturnsNull;for(var r=0;r<e.length;r++){var a=e[r];if("function"!=typeof a)return o(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",b(a),r),n.thatReturnsNull}return p((function(t,r,n,a,o){for(var i=0;i<e.length;i++){if(null==(0,e[i])(t,r,n,a,o,u))return null}return new d("Invalid "+a+" `"+o+"` supplied to `"+n+"`.")}))},shape:function(e){return p((function(t,r,n,a,o){var i=t[r],s=g(i);if("object"!==s)return new d("Invalid "+a+" `"+o+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var l=e[c];if(l){var f=l(i,c,n,a,o+"."+c,u);if(f)return f}}return null}))},exact:function(e){return p((function(t,r,n,a,o){var s=t[r],c=g(s);if("object"!==c)return new d("Invalid "+a+" `"+o+"` of type `"+c+"` supplied to `"+n+"`, expected `object`.");var l=i({},t[r],e);for(var f in l){var p=e[f];if(!p)return new d("Invalid "+a+" `"+o+"` key `"+f+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=p(s,f,n,a,o+"."+f,u);if(h)return h}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){this.message=e,this.stack=""}function p(e){if("production"!==t.env.NODE_ENV)var n={},i=0;function s(s,c,l,f,p,h,m){if(f=f||"<<anonymous>>",h=h||l,m!==u)if(r)a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var g=f+":"+l;!n[g]&&i<3&&(o(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,f),n[g]=!0,i++)}return null==c[l]?s?null===c[l]?new d("The "+p+" `"+h+"` is marked as required in `"+f+"`, but its value is `null`."):new d("The "+p+" `"+h+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(c,l,f,p,h)}var c=s.bind(null,!1);return c.isRequired=s.bind(null,!0),c}function h(e){return p((function(t,r,n,a,o,i){var u=t[r];return g(u)!==e?new d("Invalid "+a+" `"+o+"` of type `"+v(u)+"` supplied to `"+n+"`, expected `"+e+"`."):null}))}function m(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(m);if(null===t||e(t))return!0;var r=function(e){var t=e&&(c&&e[c]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var n,a=r.call(t);if(r!==t.entries){for(;!(n=a.next()).done;)if(!m(n.value))return!1}else for(;!(n=a.next()).done;){var o=n.value;if(o&&!m(o[1]))return!1}return!0;default:return!1}}function g(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function v(e){if(null==e)return""+e;var t=g(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function b(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,l.checkPropTypes=s,l.PropTypes=l,l}}).call(t,r(5))},function(e,t){"use strict";function r(e){return function(){return e}}var n=function(){};n.thatReturns=r,n.thatReturnsFalse=r(!1),n.thatReturnsTrue=r(!0),n.thatReturnsNull=r(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,t,r){(function(t){"use strict";var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=function(e,t,n,a,o,i,u,s){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,a,o,i,u,s],f=0;(c=new Error(t.replace(/%s/g,(function(){return l[f++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}}).call(t,r(5))},function(e,t,r){(function(t){"use strict";var n=r(7);if("production"!==t.env.NODE_ENV){var a=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=0,o="Warning: "+e.replace(/%s/g,(function(){return r[a++]}));"undefined"!=typeof console&&console.error(o);try{throw new Error(o)}catch(i){}};n=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var r=arguments.length,n=Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];a.apply(void 0,[t].concat(n))}}}e.exports=n}).call(t,r(5))},function(e,t){"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var i,u,s=o(e),c=1;c<arguments.length;c++){for(var l in i=Object(arguments[c]))n.call(i,l)&&(s[l]=i[l]);if(r){u=r(i);for(var f=0;f<u.length;f++)a.call(i,u[f])&&(s[u[f]]=i[u[f]])}}return s}},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){(function(t){"use strict";if("production"!==t.env.NODE_ENV)var n=r(8),a=r(9),o=r(11),i={};e.exports=function(e,r,u,s,c){if("production"!==t.env.NODE_ENV)for(var l in e)if(e.hasOwnProperty(l)){var f;try{n("function"==typeof e[l],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",s||"React class",u,l,typeof e[l]),f=e[l](r,l,s,u,null,o)}catch(p){f=p}if(a(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",u,l,typeof f),f instanceof Error&&!(f.message in i)){i[f.message]=!0;var d=c?c():"";a(!1,"Failed %s type: %s%s",u,f.message,null!=d?d:"")}}}}).call(t,r(5))},function(e,t,r){"use strict";var n=r(7),a=r(8),o=r(11);e.exports=function(){function e(e,t,r,n,i,u){u!==o&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t){e.exports=r("q1tI")},function(e,t){"use strict";var r=function(e,t){return e===t};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=void 0,a=[],o=void 0,i=!1,u=function(e,r){return t(e,a[r])},s=function(){for(var t=arguments.length,r=Array(t),s=0;s<t;s++)r[s]=arguments[s];return i&&n===this&&r.length===a.length&&r.every(u)?o:(i=!0,n=this,a=r,o=e.apply(this,r))};return s}}])},ZdGz:function(e,t,r){e.exports=r.p+"static/no_image_1-cbab1c85fd0b5df4703007ed018da08a.png"},gWZI:function(e){e.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"aspectRatio":1.5,"src":"/dataviz-hub2/static/ec0cc4f56043216a42a33efde8da1b8e/097fa/moon2.jpg","srcSet":"/dataviz-hub2/static/ec0cc4f56043216a42a33efde8da1b8e/836e2/moon2.jpg 480w,\\n/dataviz-hub2/static/ec0cc4f56043216a42a33efde8da1b8e/b1cc5/moon2.jpg 960w,\\n/dataviz-hub2/static/ec0cc4f56043216a42a33efde8da1b8e/097fa/moon2.jpg 1920w,\\n/dataviz-hub2/static/ec0cc4f56043216a42a33efde8da1b8e/87d8a/moon2.jpg 2407w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}}')},hXnw:function(e,t,r){"use strict";function n(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){var r=t.left,n=t.right,a=t.up,o=t.down,i=t.top,u=t.bottom,s=t.mirror,c=t.opposite,f=(r?1:0)|(n?2:0)|(i||o?4:0)|(u||a?8:0)|(s?16:0)|(c?32:0)|(e?64:0);if(d.hasOwnProperty(f))return d[f];if(!s!=!(e&&c)){var p=[n,r,u,i,o,a];r=p[0],n=p[1],i=p[2],u=p[3],a=p[4],o=p[5]}var h=r||n,m=i||u||a||o,g=void 0;return h||m?e?g="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(h?(r?"":"-")+"42px":"0")+", "+(m?(o||i?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(h?(n?"":"-")+"2000px":"0")+", "+(m?(a||u?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(m?"center bottom":(r?"left":"right")+" center")+";\n        }":g="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(h?(r?"-":"")+"1000px":"0")+", "+(m?(o||i?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(h?(n?"-":"")+"10px":"0")+", "+(m?(a||u?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":g=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",d[f]=(0,l.animation)(g),d[f]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=e.children,r=(e.out,e.forever),o=e.timeout,i=e.duration,u=void 0===i?l.defaults.duration:i,s=e.delay,f=void 0===s?l.defaults.delay:s,d=e.count,p=void 0===d?l.defaults.count:d,h=n(e,["children","out","forever","timeout","duration","delay","count"]),m={make:a,duration:void 0===o?u:o,delay:f,forever:r,count:p,style:{animationFillMode:"both"},reverse:h.left};return(0,c.default)(h,m,m,t)}r("HAE/"),r("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var i,u=r("17x9"),s=r("eH+L"),c=(i=s)&&i.__esModule?i:{default:i},l=r("ar19"),f={out:u.bool,left:u.bool,right:u.bool,top:u.bool,bottom:u.bool,mirror:u.bool,opposite:u.bool,duration:u.number,timeout:u.number,delay:u.number,count:u.number,forever:u.bool},d={};o.propTypes=f,t.default=o,e.exports=t.default},iR2b:function(e,t,r){e.exports=r.p+"static/no_image_5-719d9205cd776b0cda9f9d883d2efbba.png"},lGYE:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"id":"06309742-6b5f-56d3-bb26-15e9b08c475c","frontmatter":{"date":"Sun, 22 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/501f01c3ad8df6b9cf9bea77af8d084e/14b42/temp.jpg"}}}}}},{"node":{"id":"61c4d0ff-48cd-5544-bffa-ee4dd128e882","frontmatter":{"date":"Sat, 21 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/dbe4e5e4461008360b542a02714ff7a5/14b42/sheffield.jpg"}}}}}},{"node":{"id":"ba345169-e47f-528d-9077-0d680fb22c64","frontmatter":{"date":"Fri, 20 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/afa28dd3acb9b9f69609abe91a798f55/14b42/advice.jpg"}}}}}},{"node":{"id":"03958b89-f7fe-5f8f-ab33-ed0a4115cd2f","frontmatter":{"date":"Sun, 01 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/469e10a2c9d52272b9df060294671312/14b42/nba.jpg"}}}}}},{"node":{"id":"dd6162c5-608b-56c3-b096-afacf7ef357a","frontmatter":{"date":"Sun, 01 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/b500c122c2226f80b16ecd110ff62e48/ee604/flagship.png"}}}}}},{"node":{"id":"9e48e6c9-6e60-54d8-9e69-76f1aa08af53","frontmatter":{"date":"Sun, 01 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/f87efab2a042d1a312b4e66ce9471f96/9e240/award.jpg"}}}}}},{"node":{"id":"d5c1c8c6-db52-5df7-84e3-470251152e94","frontmatter":{"date":"Sun, 01 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/9da8c08ae750717b448e74820f5893b2/14b42/nss.jpg"}}}}}},{"node":{"id":"c5adce5c-f359-56ad-872f-6df403940d06","frontmatter":{"date":"Sun, 01 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/a5f24356802da739ca3b96f45667c2e6/9e240/hear.jpg"}}}}}},{"node":{"id":"eb8fefdf-3caf-521b-8fe9-ebc01f0132b1","frontmatter":{"date":"Thu, 27 Feb 2020","thumbnail":null}}},{"node":{"id":"c126c225-9192-5453-8285-dfa663ec6c40","frontmatter":{"date":"Wed, 26 Feb 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/a3b1ee43e3d647663c4facca99b37aca/14b42/data_has.jpg"}}}}}}]}}}')},qNCg:function(e,t,r){e.exports=r.p+"static/no_image_2-b13c16e972f8b2ad521f01353e4f3531.png"},"sh/8":function(e,t,r){e.exports=r.p+"static/no_image_3-aaf15ad711674c5252f1a4ba244792eb.png"},uhbi:function(e,t,r){e.exports=r.p+"static/no_image_4-fffe700b17d689328c70fc5bbd4ebd96.png"}}]);
//# sourceMappingURL=component---src-pages-search-jsx-37f358c6c5f00f5d4b86.js.map