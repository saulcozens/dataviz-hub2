(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Muxj:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("L12J"),o=n("dmsj"),s=n("gWZI"),c=n("Wbzz"),u=n("1eu9"),l=n.n(u),f=function(e){var t=e.className,n=e.children;return a.a.createElement(c.StaticQuery,{query:"2955208998",render:function(e){var r=e.desktop.childImageSharp.fluid;return a.a.createElement(l.a,{className:t,fluid:r,style:{backgroundAttachment:"fixed",backgroundSize:"cover",width:"100%",minHeight:"100vh"}},n)},data:s})},d=(n("rE2o"),n("ioFf"),n("a1Th"),n("I5cv"),n("Z2Ku"),n("L9s1"),n("T39b"),n("XfO3"),n("HEwt"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("KKXr"),n("OG14"),n("lGYE")),p=n("Tgqd"),h=n("WG1l"),g=n.n(h),m=n("M4XY"),b=n.n(m),v=n("ZdGz"),y=n.n(v),x=n("qNCg"),w=n.n(x),E=n("sh/8"),O=n.n(E),j=n("uhbi"),N=n.n(j),T=n("iR2b"),S=n.n(T);function k(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var _=function(e){var t,n;n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;!function(e){function t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}}(r);function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={query:"",results:[]},t.search=function(e){var n=e.target.value;if(t.state.query.length>1){var r=t.getSearchResults(n);t.setState({results:r,query:n})}else t.setState({results:[],query:n})},t}var i=r.prototype;return i.render=function(){var e=this,t=function(){if(e.state.results.length>0&&e.state.query.length>2){var t=d.data;return a.a.createElement("div",null,a.a.createElement("div",null,"Found ",e.state.results.length," results"),a.a.createElement("div",{className:"flex flex-wrap my-5 xl:my-8 justify-center"},e.state.results.map((function(n,r){var i;t.allMdx.edges.map((function(e){var t=e.node;if(n.id==t.id)if(t.frontmatter&&t.frontmatter.thumbnail&&t.frontmatter.thumbnail.childImageSharp)i=t.frontmatter.thumbnail.childImageSharp.fluid.src;else{var r=[y.a,w.a,O.a,N.a,S.a];i=r[Math.floor(Math.random()*r.length)]}}));var o=n.description.split(" ").splice(0,30);return o=o.length<30?o.join(" ").concat("."):o.join(" ").concat(" ..."),a.a.createElement("div",{className:"text-gray-800 group relative w-full md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white m-3 xl:m-4 text-left cursor-pointer min-h-60 ipadp:min-h-80 2xl:min-h-55 2xl:max-h-55 hover:shadow-2xl ipadp:overflow-hidden",style:{borderRadius:"1rem"},key:r,onClick:function(){window.open(""+n.url,"_blank","noopener","noreferrer")}},a.a.createElement("img",{className:"w-full rounded-t-lg min-h-1/2 max-h-1/2 ipadp:min-h-3/5 ipadp:max-h-3/5 group-hover:max-h-1/2 group-hover:min-h-1/2",style:{objectFit:"cover",objectPosition:"center",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem",transition:".3s ease"},src:i}),a.a.createElement("div",{className:"pt-2 pb-2 flex flex-wrap"},a.a.createElement("p",{className:"px-6 mb-2 text-xs text-gray-500 w-full"},a.a.createElement(g.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:n.date,searchWords:e.state.query.split()})),a.a.createElement("h1",{className:"px-6 font-bold leading-4 mb-3"},a.a.createElement(g.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:n.title,searchWords:e.state.query.split()})),a.a.createElement("h1",{className:"px-6 leading-4 text-xs xl:text-sm"},a.a.createElement(g.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:o,searchWords:e.state.query.split()})),a.a.createElement("h1",{className:"text-gray-500 px-6 leading-4 text-xs xl:text-sm mt-2"},a.a.createElement(g.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:n.author.join(" · "),searchWords:e.state.query.split()})),a.a.createElement("div",{className:"border-t-1 border-gray-300 w-full absolute bottom-0 pb-2 bg-white",style:{borderBottomLeftRadius:"1rem",borderBottomRightRadius:"1rem"}},a.a.createElement(c.Link,{className:"inline-block text-gray-700 text-xs hover:text-highlight_2 font-semibold ml-4 mr-2",to:"/blog/category/"+b()(n.category[0])},a.a.createElement(g.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:n.category[0],searchWords:e.state.query.split()})),n.tag.map((function(t){return a.a.createElement(c.Link,{key:t,to:"/blog/tag/"+b()(t),className:"inline-block text-gray-600 text-xs hover:text-highlight_2 mr-2"},a.a.createElement(g.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:t,searchWords:e.state.query.split()}))})))))}))))}return e.state.query.length>2?"No results for "+e.state.query:e.state.query.length>0?"Please insert at least 3 characters":""};return a.a.createElement("div",{className:this.props.classNames+" mt-16 2xl:mt-20 mb-32 relative text-gray-300 w-full text-center"},a.a.createElement("p",{className:"text-3xl xl:text-4xl text-white my-4 xl:my-8"},"What's next? "),a.a.createElement("div",{className:"bg-white inline-block focus:outline-none rounded-l-lg text-gray-600",style:{boxShadow:"-10px 5px 40px -11px rgba(0, 0, 0, 0.25)",padding:"0.9rem",paddingTop:"1.1rem"}},a.a.createElement(p.a,{className:"inline-block text-center text-3xl -mt-2"})),a.a.createElement("input",{id:"homeSearch",onChange:this.search,className:"search__input bg-white pl-2 text-lg focus:outline-none shadow-2xl pr-5 rounded-r-lg text-gray-600",style:{boxShadow:"10px 5px 40px -17px rgba(0, 0, 0, 0.25)",height:"3.59rem",minWidth:"26.3vw",maxWidth:"100vw"},type:"search",name:"search",placeholder:"What are you looking for?"}),a.a.createElement("div",{className:"search__list"},a.a.createElement(t,null)))},i.getSearchResults=function(e){var t=window.__FLEXSEARCH__.en.index,n=window.__FLEXSEARCH__.en.store;if(e&&t){var r=[];return Object.keys(t).forEach((function(n){var a;(a=r).push.apply(a,k(t[n].values.search(e)))})),r=Array.from(new Set(r)),n.filter((function(e){return r.includes(e.id)?e:null})).map((function(e){return e.node}))}return[]},r}(r.Component);t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Events",keywords:["the university of sheffield","data visualisation","data visualisation hub","research","events"]}),a.a.createElement(f,{className:"flex flex-wrap"},a.a.createElement(_,null)))}},WG1l:function(e,t,n){n("KKXr"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("f3/d"),n("LK8F"),n("2Spj"),n("rE2o"),n("ioFf"),n("pIFo"),n("8+KV"),n("0l/t"),n("Vd3H"),n("DNiP"),n("bWfx"),n("Oyvg"),n("V+eJ"),n("91GP"),n("HAE/"),e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(2),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function a(e){return e&&e.__esModule?e:{default:e}}t.default=u;var i=n(3),o=a(n(4)),s=n(14),c=a(n(15));function u(e){var t=e.activeClassName,n=void 0===t?"":t,a=e.activeIndex,o=void 0===a?-1:a,u=e.activeStyle,l=e.autoEscape,f=e.caseSensitive,d=void 0!==f&&f,p=e.className,h=e.findChunks,g=e.highlightClassName,m=void 0===g?"":g,b=e.highlightStyle,v=void 0===b?{}:b,y=e.highlightTag,x=void 0===y?"mark":y,w=e.sanitize,E=e.searchWords,O=e.textToHighlight,j=e.unhighlightClassName,N=void 0===j?"":j,T=e.unhighlightStyle,S=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["activeClassName","activeIndex","activeStyle","autoEscape","caseSensitive","className","findChunks","highlightClassName","highlightStyle","highlightTag","sanitize","searchWords","textToHighlight","unhighlightClassName","unhighlightStyle"]),k=(0,i.findAll)({autoEscape:l,caseSensitive:d,findChunks:h,sanitize:w,searchWords:E,textToHighlight:O}),_=x,I=-1,R="",C=void 0,P=(0,c.default)((function(e){var t={};for(var n in e)t[n.toLowerCase()]=e[n];return t}));return(0,s.createElement)("span",r({className:p},S,{children:k.map((function(e,t){var r=O.substr(e.start,e.end-e.start);if(e.highlight){I++;var a=void 0;a="object"==typeof m?d?m[r]:(m=P(m))[r.toLowerCase()]:m;var i=I===+o;R=a+" "+(i?n:""),C=!0===i&&null!=u?Object.assign({},v,u):v;var c={children:r,className:R,key:t,style:C};return"string"!=typeof _&&(c.highlightIndex=I),(0,s.createElement)(_,c)}return(0,s.createElement)("span",{children:r,className:N,key:t,style:T})}))}))}u.propTypes={activeClassName:o.default.string,activeIndex:o.default.number,activeStyle:o.default.object,autoEscape:o.default.bool,className:o.default.string,findChunks:o.default.func,highlightClassName:o.default.oneOfType([o.default.object,o.default.string]),highlightStyle:o.default.object,highlightTag:o.default.oneOfType([o.default.node,o.default.func,o.default.string]),sanitize:o.default.func,searchWords:o.default.arrayOf(o.default.oneOfType([o.default.string,o.default.instanceOf(RegExp)])).isRequired,textToHighlight:o.default.string.isRequired,unhighlightClassName:o.default.string,unhighlightStyle:o.default.object},e.exports=t.default},function(e,t){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);Object.defineProperty(t,"combineChunks",{enumerable:!0,get:function(){return r.combineChunks}}),Object.defineProperty(t,"fillInChunks",{enumerable:!0,get:function(){return r.fillInChunks}}),Object.defineProperty(t,"findAll",{enumerable:!0,get:function(){return r.findAll}}),Object.defineProperty(t,"findChunks",{enumerable:!0,get:function(){return r.findChunks}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.findAll=function(e){var t=e.autoEscape,i=e.caseSensitive,o=void 0!==i&&i,s=e.findChunks,c=void 0===s?r:s,u=e.sanitize,l=e.searchWords,f=e.textToHighlight;return a({chunksToHighlight:n({chunks:c({autoEscape:t,caseSensitive:o,sanitize:u,searchWords:l,textToHighlight:f})}),totalLength:f?f.length:0})};var n=t.combineChunks=function(e){var t=e.chunks;return t=t.sort((function(e,t){return e.start-t.start})).reduce((function(e,t){if(0===e.length)return[t];var n=e.pop();if(t.start<=n.end){var r=Math.max(n.end,t.end);e.push({start:n.start,end:r})}else e.push(n,t);return e}),[])},r=function(e){var t=e.autoEscape,n=e.caseSensitive,r=e.sanitize,a=void 0===r?i:r,o=e.searchWords,s=e.textToHighlight;return s=a(s),o.filter((function(e){return e})).reduce((function(e,r){r=a(r),t&&(r=r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"));for(var i=new RegExp(r,n?"g":"gi"),o=void 0;o=i.exec(s);){var c=o.index,u=i.lastIndex;u>c&&e.push({start:c,end:u}),o.index==i.lastIndex&&i.lastIndex++}return e}),[])};t.findChunks=r;var a=t.fillInChunks=function(e){var t=e.chunksToHighlight,n=e.totalLength,r=[],a=function(e,t,n){t-e>0&&r.push({start:e,end:t,highlight:n})};if(0===t.length)a(0,n,!1);else{var i=0;t.forEach((function(e){a(i,e.start,!1),a(e.start,e.end,!0),i=e.end})),a(i,n,!1)}return r};function i(e){return e}}])},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=n(6)((function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}),!0)}else e.exports=n(13)()}).call(t,n(5))},function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++f<t;)c&&c[f].run();f=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=g,a.addListener=g,a.once=g,a.off=g,a.removeListener=g,a.removeAllListeners=g,a.emit=g,a.prependListener=g,a.prependOnceListener=g,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,n){(function(t){"use strict";var r=n(7),a=n(8),i=n(9),o=n(10),s=n(11),c=n(12);e.exports=function(e,n){var u="function"==typeof Symbol&&Symbol.iterator;var l={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:p(r.thatReturnsNull),arrayOf:function(e){return p((function(t,n,r,a,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var o=t[n];if(!Array.isArray(o))return new d("Invalid "+a+" `"+i+"` of type `"+m(o)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<o.length;c++){var u=e(o,c,r,a,i+"["+c+"]",s);if(u instanceof Error)return u}return null}))},element:p((function(t,n,r,a,i){var o=t[n];return e(o)?null:new d("Invalid "+a+" `"+i+"` of type `"+m(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return p((function(t,n,r,a,i){if(!(t[n]instanceof e)){var o=e.name||"<<anonymous>>";return new d("Invalid "+a+" `"+i+"` of type `"+function(e){if(!e.constructor||!e.constructor.name)return"<<anonymous>>";return e.constructor.name}(t[n])+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}return null}))},node:p((function(e,t,n,r,a){return g(e[t])?null:new d("Invalid "+r+" `"+a+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,n,r,a,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var o=t[n],c=m(o);if("object"!==c)return new d("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var u in o)if(o.hasOwnProperty(u)){var l=e(o,u,r,a,i+"."+u,s);if(l instanceof Error)return l}return null}))},oneOf:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull;return p((function(t,n,r,a,i){for(var o=t[n],s=0;s<e.length;s++)if(f(o,e[s]))return null;return new d("Invalid "+a+" `"+i+"` of value `"+o+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return"production"!==t.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var n=0;n<e.length;n++){var a=e[n];if("function"!=typeof a)return i(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",v(a),n),r.thatReturnsNull}return p((function(t,n,r,a,i){for(var o=0;o<e.length;o++){if(null==(0,e[o])(t,n,r,a,i,s))return null}return new d("Invalid "+a+" `"+i+"` supplied to `"+r+"`.")}))},shape:function(e){return p((function(t,n,r,a,i){var o=t[n],c=m(o);if("object"!==c)return new d("Invalid "+a+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var u in e){var l=e[u];if(l){var f=l(o,u,r,a,i+"."+u,s);if(f)return f}}return null}))},exact:function(e){return p((function(t,n,r,a,i){var c=t[n],u=m(c);if("object"!==u)return new d("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var f in l){var p=e[f];if(!p)return new d("Invalid "+a+" `"+i+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=p(c,f,r,a,i+"."+f,s);if(h)return h}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){this.message=e,this.stack=""}function p(e){if("production"!==t.env.NODE_ENV)var r={},o=0;function c(c,u,l,f,p,h,g){if(f=f||"<<anonymous>>",h=h||l,g!==s)if(n)a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var m=f+":"+l;!r[m]&&o<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,f),r[m]=!0,o++)}return null==u[l]?c?null===u[l]?new d("The "+p+" `"+h+"` is marked as required in `"+f+"`, but its value is `null`."):new d("The "+p+" `"+h+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(u,l,f,p,h)}var u=c.bind(null,!1);return u.isRequired=c.bind(null,!0),u}function h(e){return p((function(t,n,r,a,i,o){var s=t[n];return m(s)!==e?new d("Invalid "+a+" `"+i+"` of type `"+b(s)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function g(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(g);if(null===t||e(t))return!0;var n=function(e){var t=e&&(u&&e[u]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var r,a=n.call(t);if(n!==t.entries){for(;!(r=a.next()).done;)if(!g(r.value))return!1}else for(;!(r=a.next()).done;){var i=r.value;if(i&&!g(i[1]))return!1}return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function b(e){if(null==e)return""+e;var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function v(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,l.checkPropTypes=c,l.PropTypes=l,l}}).call(t,n(5))},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){(function(t){"use strict";var n=function(e){};"production"!==t.env.NODE_ENV&&(n=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=function(e,t,r,a,i,o,s,c){if(n(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,a,i,o,s,c],f=0;(u=new Error(t.replace(/%s/g,(function(){return l[f++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}}).call(t,n(5))},function(e,t,n){(function(t){"use strict";var r=n(7);if("production"!==t.env.NODE_ENV){var a=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=0,i="Warning: "+e.replace(/%s/g,(function(){return n[a++]}));"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(o){}};r=function(e,t){if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==t.indexOf("Failed Composite propType: ")&&!e){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];a.apply(void 0,[t].concat(r))}}}e.exports=r}).call(t,n(5))},function(e,t){"use strict";var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var o,s,c=i(e),u=1;u<arguments.length;u++){for(var l in o=Object(arguments[u]))r.call(o,l)&&(c[l]=o[l]);if(n){s=n(o);for(var f=0;f<s.length;f++)a.call(o,s[f])&&(c[s[f]]=o[s[f]])}}return c}},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){(function(t){"use strict";if("production"!==t.env.NODE_ENV)var r=n(8),a=n(9),i=n(11),o={};e.exports=function(e,n,s,c,u){if("production"!==t.env.NODE_ENV)for(var l in e)if(e.hasOwnProperty(l)){var f;try{r("function"==typeof e[l],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",c||"React class",s,l,typeof e[l]),f=e[l](n,l,c,s,null,i)}catch(p){f=p}if(a(!f||f instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",s,l,typeof f),f instanceof Error&&!(f.message in o)){o[f.message]=!0;var d=u?u():"";a(!1,"Failed %s type: %s%s",s,f.message,null!=d?d:"")}}}}).call(t,n(5))},function(e,t,n){"use strict";var r=n(7),a=n(8),i=n(11);e.exports=function(){function e(e,t,n,r,o,s){s!==i&&a(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t){e.exports=n("q1tI")},function(e,t){"use strict";var n=function(e,t){return e===t};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,r=void 0,a=[],i=void 0,o=!1,s=function(e,n){return t(e,a[n])},c=function(){for(var t=arguments.length,n=Array(t),c=0;c<t;c++)n[c]=arguments[c];return o&&r===this&&n.length===a.length&&n.every(s)?i:(o=!0,r=this,a=n,i=e.apply(this,n))};return c}}])},ZdGz:function(e,t,n){e.exports=n.p+"static/no_image_1-cbab1c85fd0b5df4703007ed018da08a.png"},gWZI:function(e){e.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"aspectRatio":1.5,"src":"/dataviz-hub2/static/ec0cc4f56043216a42a33efde8da1b8e/097fa/moon2.jpg","srcSet":"/dataviz-hub2/static/ec0cc4f56043216a42a33efde8da1b8e/836e2/moon2.jpg 480w,\\n/dataviz-hub2/static/ec0cc4f56043216a42a33efde8da1b8e/b1cc5/moon2.jpg 960w,\\n/dataviz-hub2/static/ec0cc4f56043216a42a33efde8da1b8e/097fa/moon2.jpg 1920w,\\n/dataviz-hub2/static/ec0cc4f56043216a42a33efde8da1b8e/87d8a/moon2.jpg 2407w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}}')},iR2b:function(e,t,n){e.exports=n.p+"static/no_image_5-719d9205cd776b0cda9f9d883d2efbba.png"},lGYE:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"id":"4be0bfd8-bbf3-5a0e-912d-631bd809d95f","frontmatter":{"date":"Sun, 22 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/501f01c3ad8df6b9cf9bea77af8d084e/14b42/temp.jpg"}}}}}},{"node":{"id":"81405a6c-f3d1-518b-a569-0d53b78fca80","frontmatter":{"date":"Sat, 21 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/dbe4e5e4461008360b542a02714ff7a5/14b42/sheffield.jpg"}}}}}},{"node":{"id":"ba345169-e47f-528d-9077-0d680fb22c64","frontmatter":{"date":"Fri, 20 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/afa28dd3acb9b9f69609abe91a798f55/14b42/advice.jpg"}}}}}},{"node":{"id":"9e48e6c9-6e60-54d8-9e69-76f1aa08af53","frontmatter":{"date":"Sun, 01 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/f87efab2a042d1a312b4e66ce9471f96/9e240/award.jpg"}}}}}},{"node":{"id":"dd6162c5-608b-56c3-b096-afacf7ef357a","frontmatter":{"date":"Sun, 01 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/b500c122c2226f80b16ecd110ff62e48/ee604/flagship.png"}}}}}},{"node":{"id":"221a26ca-3bea-5ec4-af37-e71f7b325c0d","frontmatter":{"date":"Sun, 01 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/469e10a2c9d52272b9df060294671312/14b42/nba.jpg"}}}}}},{"node":{"id":"c4759653-b01f-5cd1-94ba-eb9500d0121a","frontmatter":{"date":"Sun, 01 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/a5f24356802da739ca3b96f45667c2e6/9e240/hear.jpg"}}}}}},{"node":{"id":"d5c1c8c6-db52-5df7-84e3-470251152e94","frontmatter":{"date":"Sun, 01 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/9da8c08ae750717b448e74820f5893b2/14b42/nss.jpg"}}}}}},{"node":{"id":"eb8fefdf-3caf-521b-8fe9-ebc01f0132b1","frontmatter":{"date":"Thu, 27 Feb 2020","thumbnail":null}}},{"node":{"id":"c126c225-9192-5453-8285-dfa663ec6c40","frontmatter":{"date":"Wed, 26 Feb 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/dataviz-hub2/static/a3b1ee43e3d647663c4facca99b37aca/14b42/data_has.jpg"}}}}}}]}}}')},qNCg:function(e,t,n){e.exports=n.p+"static/no_image_2-b13c16e972f8b2ad521f01353e4f3531.png"},"sh/8":function(e,t,n){e.exports=n.p+"static/no_image_3-aaf15ad711674c5252f1a4ba244792eb.png"},uhbi:function(e,t,n){e.exports=n.p+"static/no_image_4-fffe700b17d689328c70fc5bbd4ebd96.png"}}]);
//# sourceMappingURL=component---src-pages-search-jsx-89fe99c3a0d10a4f659c.js.map