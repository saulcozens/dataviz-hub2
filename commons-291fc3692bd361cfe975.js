(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var a=r("q1tI"),o=n(a),i=n(r("Gytx"));function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function f(){s=e(u.map((function(e){return e.props}))),d.canUseDOM?t(s):r&&(s=r(s))}var d=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var l=a.prototype;return l.shouldComponentUpdate=function(e){return!i(e,this.props)},l.componentWillMount=function(){u.push(this),f()},l.componentDidUpdate=function(){f()},l.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},l.render=function(){return o.createElement(n,this.props)},a}(a.Component);return l(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),l(d,"canUseDOM",c),d}}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Data Visualisation Hub - The University of Sheffield ","description":"Promoting and building community around data visualisation at the University of Sheffield.","author":"Yu Liang Weng <y.weng@sheffield.ac.uk>"}}}}')},Gytx:function(e,t,r){r("2Spj"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var s=o[c];if(!l(s))return!1;var u=e[s],f=t[s];if(!1===(a=r?r.call(n,u,f,s):void 0)||void 0===a&&u!==f)return!1}return!0}},NSxh:function(e,t,r){"use strict";var n=r("Wbzz"),a=(r("q1tI"),r("QFKg")),o=r.n(a),i=r("ma3e"),l=r("qKvR");t.a=function(){return Object(l.b)("div",{className:"bg-black px-10 py-8 text-sm relative z-10"},Object(l.b)("div",{className:"sm:flex mb-4"},Object(l.b)("div",{className:"sm:w-2/12 h-auto"},Object(l.b)("div",{className:"mb-2"},Object(l.b)(n.Link,{className:"text-gray-100 font-semibold text-md",to:"/"},"Dataviz.Shef")),Object(l.b)("ul",{className:"list-reset leading-normal"},Object(l.b)("li",null,Object(l.b)(n.Link,{className:"text-gray-500 hover:text-highlight_2",to:"/blog"},"Blog")),Object(l.b)("li",null,Object(l.b)(n.Link,{className:"text-gray-500 hover:text-highlight_2",to:"/events"},"Events")),Object(l.b)("li",null,Object(l.b)(n.Link,{className:"text-gray-500 hover:text-highlight_2",to:"/community"},"Community")),Object(l.b)("li",null,Object(l.b)("a",{className:"text-gray-500 hover:text-highlight_2",href:"https://orda.shef.ac.uk/visualisations/",target:"_blank",rel:"noopener noreferrer"},"Showcase")),Object(l.b)("li",null,Object(l.b)(n.Link,{className:"text-gray-500 hover:text-highlight_2",to:"/about"},"About")),Object(l.b)("li",null,Object(l.b)("a",{className:"text-gray-500 hover:text-highlight_2",href:"mailto:rdm@sheffield.ac.uk",target:"_blank",rel:"noopener noreferrer"},"Contact us")))),Object(l.b)("div",{className:"sm:w-3/12 h-auto sm:mt-0 mt-8"},Object(l.b)("div",{className:"text-gray-100 text-md mb-2 font-semibold"},Object(l.b)("a",{href:"https://orda.shef.ac.uk"},"Online Research Data")),Object(l.b)("ul",{className:"list-reset leading-normal"},Object(l.b)("li",null,Object(l.b)("a",{className:"text-gray-500 hover:text-highlight_2",href:"https://orda.shef.ac.uk/articles/list/desc/published_date/all",target:"_blank",rel:"noopener noreferrer"},"Datasets")),Object(l.b)("li",null,Object(l.b)("a",{className:"text-gray-500 hover:text-highlight_2",href:"https://orda.shef.ac.uk/#orda-fac",target:"_blank",rel:"noopener noreferrer"},"Faculties")),Object(l.b)("li",null,Object(l.b)("a",{className:"text-gray-500 hover:text-highlight_2",href:"https://figshare.shef.ac.uk/collections/University_of_Sheffield_visualisation_showcase/3879643",target:"_blank",rel:"noopener noreferrer"},"Visualised datasets"))),Object(l.b)("div",{className:"mb-2 mt-4"},Object(l.b)("a",{className:"text-gray-100 text-md font-semibold",href:"https://orda.shef.ac.uk/#orda-fac",target:"_blank",rel:"noopener noreferrer"},"The University of Sheffield")),Object(l.b)("ul",{className:"list-reset leading-normal"},Object(l.b)("li",null,Object(l.b)("a",{className:"text-gray-500 hover:text-highlight_2",href:"http://sheffield.ac.uk/library/rdm",target:"_blank",rel:"noopener noreferrer"},"Research Data Management support")),Object(l.b)("li",null,Object(l.b)("a",{className:"text-gray-500 hover:text-highlight_2",href:"https://www.sheffield.ac.uk/it-services",target:"_blank",rel:"noopener noreferrer"},"IT Services")),Object(l.b)("li",null,Object(l.b)("a",{className:"text-gray-500 hover:text-highlight_2",href:"http://rse.shef.ac.uk/",target:"_blank",rel:"noopener noreferrer"},"Research Software Engineering")))),Object(l.b)("div",{className:"sm:w-2/12 h-auto sm:mt-0 mt-8"},Object(l.b)("div",{className:"text-gray-100 text-md mb-2 font-semibold"},"Latest News"),Object(l.b)("ul",{className:"list-reset leading-normal"},Object(l.b)("li",{className:"text-gray-500 hover:text-highlight_2"},"Coming soon"),Object(l.b)("li",{className:"text-gray-500 hover:text-highlight_2"},"Coming soon"),Object(l.b)("li",{className:"text-gray-500 hover:text-highlight_2"},"Coming soon"))),Object(l.b)("div",{className:"sm:w-5/12 sm:flex sm:mt-0 mt-8 h-auto justify-center flex-wrap"},Object(l.b)("div",{className:"sm:w-2/3 text-gray-100 text-lg mb-2 pr-8"},Object(l.b)("div",{className:"font-semibold text-highlight_2"},"Data Visualisation Hub "),Object(l.b)("div",{className:"text-gray-100 text-lg mb-2 font-medium"},"The University of Sheffield."),Object(l.b)("p",{className:"text-gray-500 leading-normal text-sm"},"To help our researchers make the most of their data and take advantage of tools, we have been working on Dataviz.Shef, a multi-pronged initiative to provide tools, training and build a community around interactive data visualisation at TUoS.")),Object(l.b)("div",{className:"sm:w-1/3 pl-8"},Object(l.b)("a",{className:"p-20",href:"https://www.sheffield.ac.uk/",target:"_blank",rel:"noopener noreferrer"},Object(l.b)("img",{className:"w-11/12",src:o.a})),Object(l.b)("div",{className:"text-center justify-between w-11/12"},Object(l.b)("button",{className:"mx-2 hover:text-highlight_2 text-gray-500"},Object(l.b)("a",{href:"https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group",target:"_blank",rel:"noopener noreferrer"},Object(l.b)(i.d,null))),Object(l.b)("button",{className:"mx-2 hover:text-highlight_2 text-gray-500 "},Object(l.b)("a",{href:"https://join.slack.com/t/shef-dataviz/signup",target:"_blank",rel:"noopener noreferrer"},Object(l.b)(i.f,null))))))),Object(l.b)("p",{className:"text-gray-500 leading-normal text-center text-sm pt-8"}," © 2020  The University of Sheffield"))}},QFKg:function(e,t,r){e.exports=r.p+"static/TUOSlogo-b500c122c2226f80b16ecd110ff62e48.png"},Rb52:function(e,t,r){"use strict";var n=r("Wbzz"),a=r("q1tI"),o=r("QFKg"),i=r.n(o),l=r("Tgqd"),c=r("ma3e"),s=r("qKvR"),u=function(){var e=Object(a.useState)(!1),t=e[0],r=e[1],o=Object(a.useState)(!1),u=o[0],f=o[1];if(Object(a.useEffect)((function(){function e(){var e=window.scrollY>10;u!==e&&f(!u)}return document.addEventListener("scroll",e,{passive:!0}),function(){document.removeEventListener("scroll",e)}}),[f,u]),"undefined"!=typeof window){var d=window.pageYOffset;window.onscroll=function(){var e=document.body.clientHeight-window.innerHeight,t=window.pageYOffset;e>0&&d>t&&d<=e||e<=0&&d>t||d<=0&&t<=0?document.getElementById("navbar").style.top="0":(document.getElementById("navbar").style.top="-300px",document.getElementById("navbar").style.paddingTop="1px",document.getElementById("navbar").style.paddingBottom="1px"),d=t}}return Object(s.b)("header",{className:"font-semibold z-50 relative"},Object(s.b)("nav",{id:"navbar",className:(u?"shadow-2xl":"")+" flex items-center justify-between flex-wrap px-5 fixed w-full z-10",style:{backgroundColor:""+(u?"rgba(34,34,34,0.9)":[(window.location.pathname,"")]),transition:"top 0.8s",overflow:"hidden"}},Object(s.b)("div",{className:"flex items-center flex-shrink-0 text-white mr-5"},Object(s.b)("a",{className:(u?"":["/"===window.location.pathname?"hidden":""])+" ",href:"https://www.sheffield.ac.uk/",target:"_blank",rel:"noopener noreferrer"},Object(s.b)("img",{style:{width:"11.6vh"},src:""+i.a})),Object(s.b)("div",{className:(u?["/"===window.location.pathname?"text-gray-300":""]:["/"===window.location.pathname?"hidden":"text-white"])+" ml-4 text-lg transition duration-1000 ease-in-out"},Object(s.b)(n.Link,{className:"textanimate",to:"/"},"Dataviz.Shef"))),Object(s.b)("div",{onClick:function(){return r(!t)},className:"block lg:hidden"},Object(s.b)("button",{className:"flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"},Object(s.b)("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(s.b)("title",null,"Menu"),Object(s.b)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),Object(s.b)("div",{className:(t?"block flex-col":"hidden")+" lg:block py-2 flex items-center w-full lg:w-auto text-xs xl:text-sm",style:{backgroundColor:""+(t?[u?"":"rgba(34,34,34,0.9)"]:"")}},Object(s.b)("div",{className:"justify-end flex flex-wrap items-center"},[{route:"/community",title:"Community"},{route:"/events",title:"Events"},{route:"/blog",title:"Blog"},{route:"https://orda.shef.ac.uk/visualisations/",title:"Showcase"},{route:"/about",title:"About"}].map((function(e){return"Showcase"!=e.title?Object(s.b)(n.Link,{activeStyle:{color:u?"#00aeef":"white",fontWeight:"bold"},partiallyActive:!0,className:(u?"text-white hover:text-highlight_2t":" text-gray-300 hover:text-white")+" transition duration-500 ease-in-out md:mr-2 inline-block no-underline px-4 py-1",key:e.title,to:e.route},e.title):Object(s.b)("a",{className:(u?"text-white hover:text-highlight_2t":" text-gray-300 hover:text-white")+" transition duration-500 ease-in-out md:mr-2 inline-block no-underline px-4 py-1",href:e.route,target:"_blank",rel:"noopener noreferrer",key:e.title},e.title)})),Object(s.b)("button",{className:"text-md transition duration-500 ease-in-out inline-block no-underline pl-4 pr-2"},Object(s.b)("a",{className:(u?"text-white hover:text-highlight_2t":" text-gray-300 hover:text-white")+" ",href:"https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group",target:"_blank",rel:"noopener noreferrer"},Object(s.b)(c.d,null))),Object(s.b)("button",{className:"text-md transition duration-500 ease-in-out inline-block no-underline pl-2 pr-2"},Object(s.b)("a",{className:(u?"text-white hover:text-highlight_2t":" text-gray-300 hover:text-white")+" ",href:"https://join.slack.com/t/shef-dataviz/signup",target:"_blank",rel:"noopener noreferrer"},Object(s.b)(c.f,null))),Object(s.b)("button",{className:"pl-2 pr-4 text-sm xl:text-lg transition duration-500 ease-in-out md:mr-2 inline-block no-underline"},Object(s.b)(n.Link,{className:(u?"text-white hover:text-highlight_2t":" text-gray-300 hover:text-white")+" ",to:"/search"},Object(s.b)(l.a,null)))))))};u.defaultProps={siteTitle:""},t.a=u},TJpk:function(e,t,r){r("LK8F"),r("dZ+Y"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("/SS/"),r("hHhE"),r("V+eJ"),r("HAE/"),r("91GP"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=f(r("q1tI")),i=f(r("17x9")),l=f(r("8+s/")),c=f(r("bmMU")),s=r("v1p5"),u=r("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,p,m,E=(0,l.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),g=(T=E,m=p=function(e){function t(){return h(this,t),b(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,o=e.newProps,i=e.newChildProps,l=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return n({},o,((t={})[a.type]=l,t.titleAttributes=n({},i),t));case u.TAG_NAMES.BODY:return n({},o,{bodyAttributes:n({},i)});case u.TAG_NAMES.HTML:return n({},o,{htmlAttributes:n({},i)})}return n({},o,((r={})[a.type]=n({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=d(a,["children"]),l=(0,s.convertReactPropstoHtmlAttributes)(i);switch(r.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:l,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=d(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(T,a)},a(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(o.default.Component),p.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=T.peek,p.rewind=function(){var e=T.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var l,c,s,u=n(t),f=n(r);if(u&&f){if((c=t.length)!=r.length)return!1;for(l=c;0!=l--;)if(!e(t[l],r[l]))return!1;return!0}if(u!=f)return!1;var d=t instanceof Date,h=r instanceof Date;if(d!=h)return!1;if(d&&h)return t.getTime()==r.getTime();var b=t instanceof RegExp,T=r instanceof RegExp;if(b!=T)return!1;if(b&&T)return t.toString()==r.toString();var p=a(t);if((c=p.length)!==a(r).length)return!1;for(l=c;0!=l--;)if(!o.call(r,p[l]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(l=c;0!=l--;)if(!("_owner"===(s=p[l])&&t.$$typeof||e(t[s],r[s])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},dmsj:function(e,t,r){"use strict";var n=r("EH9Q"),a=(r("q1tI"),r("TJpk")),o=r.n(a),i=r("qKvR"),l=function(e){var t=e.description,r=e.lang,a=e.meta,l=e.title,c=e.keywords,s=n.data.site,u=t||s.siteMetadata.description;return Object(i.b)(o.a,{defer:!1,htmlAttributes:{lang:r},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(a).concat(c.length>0?{name:"keywords",content:c.join(",")}:[])})};l.defaultProps={lang:"en",meta:[],description:"",keywords:[]},t.a=l},"hFT/":function(e,t,r){r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,r){(function(e){r("dZ+Y"),r("KKXr"),r("eM6i"),r("8+KV"),r("LK8F"),r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("bWfx"),r("DNiP"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=c(r("q1tI")),i=c(r("MgzW")),l=r("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=p(e,l.TAG_NAMES.TITLE),r=p(e,l.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=p(e,l.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},d=function(e){return p(e,l.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},h=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},b=function(e,t){return t.filter((function(e){return void 0!==e[l.TAG_NAMES.BASE]})).map((function(e){return e[l.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},T=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&v("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],s=c.toLowerCase();-1===t.indexOf(s)||r===l.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||s===l.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==l.TAG_PROPERTIES.INNER_HTML&&c!==l.TAG_PROPERTIES.CSS_TEXT&&c!==l.TAG_PROPERTIES.ITEM_PROP||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][u]&&(n[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(n),c=0;c<o.length;c++){var s=o[c],u=(0,i.default)({},a[s],n[s]);a[s]=u}return e}),[]).reverse()},p=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},m=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){m(e)}),0)}),E=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||E:e.cancelAnimationFrame||E,v=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},A=null,O=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,d=e.title,h=e.titleAttributes;w(l.TAG_NAMES.BODY,n),w(l.TAG_NAMES.HTML,a),_(d,h);var b={baseTag:N(l.TAG_NAMES.BASE,r),linkTags:N(l.TAG_NAMES.LINK,o),metaTags:N(l.TAG_NAMES.META,i),noscriptTags:N(l.TAG_NAMES.NOSCRIPT,c),scriptTags:N(l.TAG_NAMES.SCRIPT,u),styleTags:N(l.TAG_NAMES.STYLE,f)},T={},p={};Object.keys(b).forEach((function(e){var t=b[e],r=t.newTags,n=t.oldTags;r.length&&(T[e]=r),n.length&&(p[e]=b[e].oldTags)})),t&&t(),s(e,T,p)},S=function(e){return Array.isArray(e)?e.join(""):e},_=function(e,t){void 0!==e&&document.title!==e&&(document.title=S(e)),w(l.TAG_NAMES.TITLE,t)},w=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(l.HELMET_ATTRIBUTE),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var f=o.indexOf(s);-1!==f&&o.splice(f,1)}for(var d=o.length-1;d>=0;d--)r.removeAttribute(o[d]);a.length===o.length?r.removeAttribute(l.HELMET_ATTRIBUTE):r.getAttribute(l.HELMET_ATTRIBUTE)!==i.join(",")&&r.setAttribute(l.HELMET_ATTRIBUTE,i.join(","))}},N=function(e,t){var r=document.head||document.querySelector(l.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+l.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===l.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===l.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(l.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},x=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.REACT_TAG_MAP[r]||r]=e[r],t}),t)},R=function(e,t,r){switch(e){case l.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[l.HELMET_ATTRIBUTE]=!0,a=j(r,n),[o.default.createElement(l.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=x(r),o=S(t);return a?"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,n)+"</"+e+">":"<"+e+" "+l.HELMET_ATTRIBUTE+'="true">'+u(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case l.ATTRIBUTE_NAMES.BODY:case l.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return j(t)},toString:function(){return x(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[l.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=l.REACT_TAG_MAP[e]||e;if(r===l.TAG_PROPERTIES.INNER_HTML||r===l.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===l.TAG_PROPERTIES.INNER_HTML||e===l.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+u(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===l.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+l.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[l.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){A&&y(A),e.defer?A=g((function(){O(e,(function(){A=null}))})):(O(e),A=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,f=e.title,d=void 0===f?"":f,h=e.titleAttributes;return{base:R(l.TAG_NAMES.BASE,t,n),bodyAttributes:R(l.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:R(l.ATTRIBUTE_NAMES.HTML,a,n),link:R(l.TAG_NAMES.LINK,o,n),meta:R(l.TAG_NAMES.META,i,n),noscript:R(l.TAG_NAMES.NOSCRIPT,c,n),script:R(l.TAG_NAMES.SCRIPT,s,n),style:R(l.TAG_NAMES.STYLE,u,n),title:R(l.TAG_NAMES.TITLE,{title:d,titleAttributes:h},n)}},t.reducePropsToState=function(e){return{baseTag:b([l.TAG_PROPERTIES.HREF],e),bodyAttributes:h(l.ATTRIBUTE_NAMES.BODY,e),defer:p(e,l.HELMET_PROPS.DEFER),encode:p(e,l.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:h(l.ATTRIBUTE_NAMES.HTML,e),linkTags:T(l.TAG_NAMES.LINK,[l.TAG_PROPERTIES.REL,l.TAG_PROPERTIES.HREF],e),metaTags:T(l.TAG_NAMES.META,[l.TAG_PROPERTIES.NAME,l.TAG_PROPERTIES.CHARSET,l.TAG_PROPERTIES.HTTPEQUIV,l.TAG_PROPERTIES.PROPERTY,l.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(l.TAG_NAMES.NOSCRIPT,[l.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:T(l.TAG_NAMES.SCRIPT,[l.TAG_PROPERTIES.SRC,l.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(l.TAG_NAMES.STYLE,[l.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:h(l.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=v}).call(this,r("yLpj"))},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=commons-291fc3692bd361cfe975.js.map