(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/eHF":function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){var n=t.distance,i=t.left,o=t.right,a=t.up,r=t.down,s=t.top,c=t.bottom,d=t.big,u=t.mirror,h=t.opposite,f=(n?n.toString():0)+((i?1:0)|(o?2:0)|(s||r?4:0)|(c||a?8:0)|(u?16:0)|(h?32:0)|(e?64:0)|(d?128:0));if(p.hasOwnProperty(f))return p[f];var m=i||o||a||r||s||c,v=void 0,b=void 0;if(m){if(!u!=!(e&&h)){var y=[o,i,c,s,r,a];i=y[0],o=y[1],s=y[2],c=y[3],a=y[4],r=y[5]}var g=n||(d?"2000px":"100%");v=i?"-"+g:o?g:"0",b=r||s?"-"+g:a||c?g:"0"}return p[f]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),p[f]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,a=(e.out,e.forever),r=e.timeout,s=e.duration,c=void 0===s?l.defaults.duration:s,u=e.delay,p=void 0===u?l.defaults.delay:u,h=e.count,f=void 0===h?l.defaults.count:h,m=i(e,["children","out","forever","timeout","duration","delay","count"]),v={make:o,duration:void 0===r?c:r,delay:p,forever:a,count:f,style:{animationFillMode:"both"},reverse:m.left};return t?(0,d.default)(m,v,v,n):v}n("HAE/"),n("a1Th"),n("h7Nl"),n("Btvt"),n("nIY7"),n("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var r,s=n("17x9"),l=n("ar19"),c=n("eH+L"),d=(r=c)&&r.__esModule?r:{default:r},u={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},p={};a.propTypes=u,t.default=a,e.exports=t.default},"28nh":function(e,t,n){"use strict";n("KKXr"),n("bWfx"),n("2Spj"),n("91GP"),n("LK8F"),n("rGqo"),n("rE2o"),n("ioFf"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n("q1tI"),c=(i=l)&&i.__esModule?i:{default:i},d=n("17x9"),u=n("ar19"),p=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),h={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:p.isRequired,outEffect:(0,d.oneOfType)([p,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},f={transitionGroup:d.object},m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,u.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,o=n.forever,a=n.count,r=n.delay,s=n.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))}),r+(s+(t?s:0)*a))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),o=this.isOn?this.getDimensionValue():0,a=void 0,r=void 0;if(t.collapseOnly)a=n.duration/3,r=n.delay;else{var s=i>>2,l=s>>1;a=s,r=n.delay+(this.isOn?0:i-s-l),e.style.animationDuration=i-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:o,transition:"height "+a+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(o,e,n):o),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){a(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],a=i.duration,s=i.reverse,l=n.length,d=2*a;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),a=d/2);var p=s?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?c.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(s?p--:p++,0,l,a,d))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,o=i.style,a=i.className,s=i.children,l=this.props.disabled?a:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(a?" "+a:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),d=r({},o,{opacity:1})):d=this.props.disabled?o:r({},o,this.state.style);var p=r({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:d},this.props.refProp,this.saveRef)),h=c.default.cloneElement(t,p,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),o=Math.min(n,window.innerHeight)*(u.globalHide?e.fraction:0);return i>o-window.innerHeight&&i<n-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);m.propTypes=h,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=f,m.displayName="RevealBase",t.default=m,e.exports=t.default},"6Y4m":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),o=n.n(i),a=n("Rb52"),r=n("NSxh"),s=n("dmsj"),l=n("gpv/"),c=n("Wbzz"),d=n("1eu9"),u=n.n(d),p=function(e){var t=e.className,n=e.children;return o.a.createElement(c.StaticQuery,{query:"2538406912",render:function(e){var i=e.desktop.childImageSharp.fluid;return o.a.createElement(u.a,{className:t,fluid:i,style:{height:"100vh",width:"100%",display:"flex"}},o.a.createElement("div",null,n))},data:l})},h=n("Y5TB"),f=n.n(h),m=n("zrqB"),v=n.n(m),b=n("CG/e"),y=n.n(b),g=n("boqk"),w=n.n(g),x=n("IFRj"),E=n.n(x),O=n("/eHF"),k=n.n(O),S=n("hXnw"),R=n.n(S);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:"Community",keywords:["the university of sheffield","data visualisation","data visualisation hub","research","dataviz community","dataviz.shef"]}),o.a.createElement(a.a,null),o.a.createElement(p,{className:"items-center justify-center text-center"},o.a.createElement(E.a,{cascade:!0,delay:700,duration:2e3},o.a.createElement("div",{className:"text-white",style:{fontFamily:"TUoS Blake"}},o.a.createElement("h1",{className:"text-5xl font-bold leading-tight"},"Community at Dataviz.Shef"),o.a.createElement("h1",{className:"text-xl mt-3 text-gray-100",style:{textShadow:"#000000 0px 0px 1px"}},"knowledge | connection | inspiration | resources | support")),o.a.createElement("div",{onClick:function(){return w()("#discover")},className:"inline-block"},o.a.createElement("button",{className:"mt-16 mr-10 bg-gray-300 hover:bg-highlight_2 text-center hover:text-white text-gray-700 font-semibold py-2 px-5 border border-transparent shadow"},"Discover")),o.a.createElement("div",{onClick:function(){return w()("#joinus")},className:"inline-block"},o.a.createElement("button",{className:"mt-16 bg-gray-300 hover:bg-highlight_2 text-center hover:text-white text-gray-700 font-semibold py-2 px-5 border border-transparent shadow"},"Join community")))),o.a.createElement("div",{id:"discover",className:"container mx-auto py-32 text-gray-800 flex flex-wrap",style:{fontFamily:"TUoS Blake"}},o.a.createElement("div",{className:"flex flex-wrap lg:mx-16"},o.a.createElement("div",{className:"text-2xl w-full xs:w-full md:w-full lg:w-1/2 px-4"},o.a.createElement(k.a,{cascade:!0,duration:2e3},o.a.createElement("p",{className:"text-highlight_2 text-6xl text-center py-12"},"Stay tuned!"),o.a.createElement("p",{className:"pb-12 text-gray-600"},"The most important part of the initiative is to build community around data visualisation, we hope to achieve this in a number of ways."),o.a.createElement("p",{className:"font-semibold pb-8"},"We’re working on developing a community communication framework, expanding and diversifying communication channels."),o.a.createElement("img",{className:"my-24",src:v.a,style:{borderRadius:"50%",minHeight:"45vh",maxHeight:"55vh",objectFit:"cover",objectPosition:"center"}}))),o.a.createElement("div",{className:"w-full xs:w-full md:w-full lg:w-1/2 text-gray-600 text-xl px-4"},o.a.createElement(k.a,{cascade:!0,duration:2e3},o.a.createElement("img",{src:f.a,style:{borderRadius:"20%",minHeight:"45vh",maxHeight:"55vh",objectFit:"cover",objectPosition:"center"}}),o.a.createElement("p",{className:"pt-24"}," We’ve started with a ",o.a.createElement(c.Link,{to:"/community/#joinus"},o.a.createElement("b",null,"TUoS google group"))," which can be joined through a TUoS google account. ",o.a.createElement("br",null),"We have also added ",o.a.createElement(c.Link,{to:"/community/#joinus"},o.a.createElement("b",null,"slack channel"))," for more informal communication and chat. Remember to say hello in our ",o.a.createElement("i",null,"#welcome channel"),"."),o.a.createElement("p",{className:"text-highlight_2 text-2xl py-12"},"Events: We’ll be hosting a variety of events including talks & symposia, workshops, vis-coding clubs and data visualisation hackathons!"),o.a.createElement("p",{className:"text-gray-500"},"But just to give an idea, here's a selection of workshops in the pipeline: ",o.a.createElement("br",null),o.a.createElement("p",{className:"pl-4"}," ",o.a.createElement("br",null),"~ Data visualisation in R ",o.a.createElement("br",null),"~ R, htmlwidgets & Shiny  ",o.a.createElement("br",null),"~ Dataviz using vegalite  ",o.a.createElement("br",null)," "))))),o.a.createElement("div",{id:"joinus",className:"lg:p-16 flex flex-wrap justify-center content-center mx-auto transition ease-in-out duration-2000"},o.a.createElement("div",{className:"text-highlight_2 text-6xl w-full p-12 lg:px-16"},"Join us."),o.a.createElement(R.a,null,o.a.createElement("div",{className:"max-w-md rounded overflow-hidden shadow-lg mx-6 xl:mx-16 my-4 hover:shadow-2xl group flex relative"},o.a.createElement("a",{href:"https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group",target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-25"},o.a.createElement("img",{className:"w-full",src:y.a,alt:"Google Group"}),o.a.createElement("div",{className:"px-6 pt-8"},o.a.createElement("div",{className:"font-semibold text-xl mb-2 text-center text-gray-500"},"Google group"),o.a.createElement("p",{className:"text-gray-700 text-base px-4 lg:px-10 py-4 text-center"},"Sign in use your Sheffield Google account, Join the TUoS google group."))),o.a.createElement("a",{href:"https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group",target:"_blank",rel:"noopener noreferrer",className:"hidden group-hover:block absolute justify-center content-center text-center py-1 px-10 shadow-sm text-xl text-white bg-black hover:bg-highlight_2",style:{position:"absolute",top:"74%",left:"50%",transform:"translateX(-50%) translateY(-50%)"}},"Join group"))),o.a.createElement(R.a,null,o.a.createElement("div",{className:"max-w-md rounded overflow-hidden shadow-lg mx-6 xl:mx-16 my-4 hover:shadow-2xl group flex relative"},o.a.createElement("a",{href:"https://groups.google.com/a/sheffield.ac.uk/forum/?hl=en#!forum/shef_dataviz-group",target:"_blank",rel:"noopener noreferrer",className:"hover:opacity-25"},o.a.createElement("img",{className:"w-full py-24 px-12",src:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",alt:"Slack"}),o.a.createElement("div",{className:"px-6"},o.a.createElement("div",{className:"font-semibold text-xl text-center text-gray-500 mb-2"},"shef-dataviz.slack"),o.a.createElement("p",{className:"text-gray-700 text-base p-4 text-center"},"Sign in use your Sheffield University email, Say hello in our ",o.a.createElement("b",null,"#welcome channel"),"."))),o.a.createElement("a",{href:"https://shef-dataviz.slack.com/join/signup",target:"_blank",rel:"noopener noreferrer",className:"hidden group-hover:block absolute justify-center content-center text-center py-1 px-16 shadow-sm text-xl text-white bg-black hover:bg-highlight_2",style:{position:"absolute",top:"74%",left:"50%",transform:"translateX(-50%) translateY(-50%)"}},"Sign up")))),o.a.createElement("div",{className:"lg:px-16 pt-24 pb-16 text-gray-600 text-2xl"},o.a.createElement("p",{className:"text-highlight_2 text-5xl px-2"},"Contributing!"),o.a.createElement("p",{className:"p-6"},"We are constantly looking for new ideas and suggestions for events, workshops or tutorials. Feel free to get in touch with us through the google group or slack team with any suggestions. We will also be putting together more formal contributing guidance should you wish to contribute to our online resources directly through ",o.a.createElement("a",{className:"text-highlight_2 font-semibold",href:"https://github.com/researchdata-sheffield/dataviz-hub2",target:"_blank",rel:"noopener noreferrer"},"github")," including blogposts and turtorials."))),o.a.createElement(r.a,null))}},"CG/e":function(e,t,n){e.exports=n.p+"static/google-6f52b93ba7863140c2badef18ed17a97.png"},IFRj:function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){var n=t.left,i=t.right,o=t.up,a=t.down,r=t.top,s=t.bottom,l=t.mirror,c=t.opposite,u=(n?1:0)|(i?2:0)|(r||a?4:0)|(s||o?8:0)|(l?16:0)|(c?32:0)|(e?64:0);if(p.hasOwnProperty(u))return p[u];if(!l!=!(e&&c)){var h=[i,n,s,r,a,o];n=h[0],i=h[1],r=h[2],s=h[3],o=h[4],a=h[5]}var f,m=n||i,v=r||s||o||a,b=void 0,y=void 0,g=void 0,w=void 0,x=void 0,E=void 0,O=void 0,k=void 0,S=void 0,R=void 0,N=void 0,j=void 0,_=void 0;return e?(g=m?(i?"-":"")+"20px":0,w=v?(o||s?"":"-")+"10px":"0",x=(a||r?"":"-")+"20px",j=m?(n?"-":"")+"2000px":"0",_=v?(a||r?"-":"")+"2000px":"0"):(b=m?(n?"-":"")+"3000px":"0",y=v?(a||r?"-":"")+"3000px":"0",E=m?(i?"-":"")+"25px":"0",O=v?(o||s?"-":"")+"25px":"0",k=m?(n?"-":"")+"10px":"0",S=v?(a||r?"-":"")+"10px":"0",R=m?(i?"-":"")+"5px":"0",N=v?(o||s?"-":"")+"5px":"0"),f=m||v?e?"\n        20% {\n          transform: translate3d("+g+", "+w+", 0);\n          }\n        "+(v?"40%, 45% {\n            opacity: 1;\n            transform: translate3d(0, "+x+", 0);\n          }":"")+"\n          to {\n            opacity: 0;\n            transform: translate3d("+j+", "+_+", 0);\n        }\n      ":"from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      from {\n        opacity: 0;\n        transform: translate3d("+b+", "+y+", 0);\n      }\n      60% {\n        opacity: 1;\n        transform: translate3d("+E+", "+O+", 0);\n      }\n      75% {\n        transform: translate3d("+k+", "+S+", 0);\n      }\n      90% {\n        transform: translate3d("+R+", "+N+", 0);\n      }\n      to {\n        transform: none;\n      }":e?"20% {\n          transform: scale3d(.9, .9, .9);\n        }\n        50%, 55% {\n          opacity: 1;\n          transform: scale3d(1.1, 1.1, 1.1);\n        }\n        to {\n          opacity: 0;\n          transform: scale3d(.3, .3, .3);\n      }":"from, 20%, 40%, 60%, 80%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      0% {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n      }\n      20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n      }\n      40% {\n        transform: scale3d(.9, .9, .9);\n      }\n      60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n      }\n      80% {\n        transform: scale3d(.97, .97, .97);\n      }\n      to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }",p[u]=(0,d.animation)(f),p[u]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,n=(e.out,e.forever),a=e.timeout,r=e.duration,s=void 0===r?d.defaults.duration:r,l=e.delay,u=void 0===l?d.defaults.delay:l,p=e.count,h=void 0===p?d.defaults.count:p,f=i(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===a?s:a,delay:u,forever:n,count:h,style:{animationFillMode:"both"},reverse:f.left};return(0,c.default)(f,m,m,t)}n("HAE/"),n("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var r,s=n("17x9"),l=n("eH+L"),c=(r=l)&&r.__esModule?r:{default:r},d=n("ar19"),u={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},p={};a.propTypes=u,t.default=a,e.exports=t.default},Y5TB:function(e,t,n){e.exports=n.p+"static/com_1-a0e4c0689c63024715127c5e741bd8a6.jpg"},ar19:function(e,t,n){"use strict";function i(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",o,!0),i("."+a+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}n("eM6i"),n("V+eJ"),n("f3/d"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,o){var a=Math.log(i),r=(Math.log(o)-a)/(n-t);return Math.exp(a+r*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(m+p)+"{"+e+"}",n=h[e];return n?""+m+n:(f.insertRule(t,f.cssRules.length),h[e]=p,""+m+p++)},t.hideAll=o,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var a=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=r=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,m=a+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(c,1500),s||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},boqk:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i=function(e){var t=document.querySelector(e);return!!t&&(t.scrollIntoView({behavior:"smooth",block:"start"}),!0)};t.default=i},"eH+L":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}n("91GP"),n("HAE/"),n("bWfx"),Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),a.default.Children.count(i)<2?a.default.createElement(r.default,o({},e,{inEffect:t,outEffect:n,children:i})):(i=a.default.Children.map(i,(function(i){return a.default.createElement(r.default,o({},e,{inEffect:t,outEffect:n,children:i}))})),"Fragment"in a.default?a.default.createElement(a.default.Fragment,null,i):a.default.createElement("span",null,i))};var a=i(n("q1tI")),r=i(n("28nh"));e.exports=t.default},"gpv/":function(e){e.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"aspectRatio":1.5,"src":"/dataviz-hub2/static/1576c9b5502a3814d7f87f98eb8a0089/b1e91/community.jpg","srcSet":"/dataviz-hub2/static/1576c9b5502a3814d7f87f98eb8a0089/ce222/community.jpg 480w,\\n/dataviz-hub2/static/1576c9b5502a3814d7f87f98eb8a0089/39fae/community.jpg 960w,\\n/dataviz-hub2/static/1576c9b5502a3814d7f87f98eb8a0089/b1e91/community.jpg 1920w,\\n/dataviz-hub2/static/1576c9b5502a3814d7f87f98eb8a0089/34f1d/community.jpg 2880w,\\n/dataviz-hub2/static/1576c9b5502a3814d7f87f98eb8a0089/8fb7e/community.jpg 3840w,\\n/dataviz-hub2/static/1576c9b5502a3814d7f87f98eb8a0089/1df11/community.jpg 6720w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}}')},hXnw:function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){var n=t.left,i=t.right,o=t.up,a=t.down,r=t.top,s=t.bottom,l=t.mirror,c=t.opposite,u=(n?1:0)|(i?2:0)|(r||a?4:0)|(s||o?8:0)|(l?16:0)|(c?32:0)|(e?64:0);if(p.hasOwnProperty(u))return p[u];if(!l!=!(e&&c)){var h=[i,n,s,r,a,o];n=h[0],i=h[1],r=h[2],s=h[3],o=h[4],a=h[5]}var f=n||i,m=r||s||o||a,v=void 0;return f||m?e?v="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(f?(n?"":"-")+"42px":"0")+", "+(m?(a||r?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(f?(i?"":"-")+"2000px":"0")+", "+(m?(o||s?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(m?"center bottom":(n?"left":"right")+" center")+";\n        }":v="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(f?(n?"-":"")+"1000px":"0")+", "+(m?(a||r?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(f?(i?"-":"")+"10px":"0")+", "+(m?(o||s?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":v=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",p[u]=(0,d.animation)(v),p[u]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,n=(e.out,e.forever),a=e.timeout,r=e.duration,s=void 0===r?d.defaults.duration:r,l=e.delay,u=void 0===l?d.defaults.delay:l,p=e.count,h=void 0===p?d.defaults.count:p,f=i(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===a?s:a,delay:u,forever:n,count:h,style:{animationFillMode:"both"},reverse:f.left};return(0,c.default)(f,m,m,t)}n("HAE/"),n("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var r,s=n("17x9"),l=n("eH+L"),c=(r=l)&&r.__esModule?r:{default:r},d=n("ar19"),u={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},p={};a.propTypes=u,t.default=a,e.exports=t.default},nIY7:function(e,t,n){"use strict";n("OGtf")("big",(function(e){return function(){return e(this,"big","","")}}))},zrqB:function(e,t,n){e.exports=n.p+"static/com_2-e649ff42b2d4ee96bdbc1606d1308a65.jpg"}}]);
//# sourceMappingURL=component---src-pages-community-jsx-ed9bcfdf40b39f91d7be.js.map