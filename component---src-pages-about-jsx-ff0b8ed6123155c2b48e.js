(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"28nh":function(e,t,n){"use strict";n("KKXr"),n("bWfx"),n("2Spj"),n("91GP"),n("LK8F"),n("rGqo"),n("rE2o"),n("ioFf"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var i,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n("q1tI"),d=(i=l)&&i.__esModule?i:{default:i},u=n("17x9"),c=n("ar19"),f=(0,u.shape)({make:u.func,duration:u.number.isRequired,delay:u.number.isRequired,forever:u.bool,count:u.number.isRequired,style:u.object.isRequired,reverse:u.bool}),p={collapse:u.bool,collapseEl:u.element,cascade:u.bool,wait:u.number,force:u.bool,disabled:u.bool,appear:u.bool,enter:u.bool,exit:u.bool,fraction:u.number,refProp:u.string,innerRef:u.func,onReveal:u.func,unmountOnExit:u.bool,mountOnEnter:u.bool,inEffect:f.isRequired,outEffect:(0,u.oneOfType)([f,(0,u.oneOf)([!1])]).isRequired,ssrReveal:u.bool,collapseOnly:u.bool,ssrFadeout:u.bool},h={transitionGroup:u.object},m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,c.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!c.observerMode&&this.props.collapse&&window.document.dispatchEvent(c.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,o=n.forever,a=n.count,r=n.delay,s=n.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))}),r+(s+(t?s:0)*a))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),o=this.isOn?this.getDimensionValue():0,a=void 0,r=void 0;if(t.collapseOnly)a=n.duration/3,r=n.delay;else{var s=i>>2,l=s>>1;a=s,r=n.delay+(this.isOn?0:i-s-l),e.style.animationDuration=i-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:o,transition:"height "+a+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(o,e,n):o),t?(this.savedChild=d.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),c.ssr&&(0,c.disableSsr)()}},{key:"handleObserve",value:function(e,t){a(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&c.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c.globalHide||(0,c.hideAll)(),this&&this.el&&(e||(e=this.props),c.ssr&&(0,c.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):c.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||c.ssr&&!c.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):c.ssr&&(c.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return d.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):d.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],a=i.duration,s=i.reverse,l=n.length,u=2*a;this.props.collapse&&(u=parseInt(this.state.style.animationDuration,10),a=u/2);var f=s?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?d.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,c.cascade)(s?f--:f++,0,l,a,u))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=d.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:d.default.createElement("div",null,e)}return d.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,o=i.style,a=i.className,s=i.children,l=this.props.disabled?a:(this.props.outEffect?c.namespace:"")+(this.state.className?" "+this.state.className:"")+(a?" "+a:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),u=r({},o,{opacity:1})):u=this.props.disabled?o:r({},o,this.state.style);var f=r({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:u},this.props.refProp,this.saveRef)),p=d.default.cloneElement(t,f,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?d.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):d.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,c.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),o=Math.min(n,window.innerHeight)*(c.globalHide?e.fraction:0);return i>o-window.innerHeight&&i<n-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){c.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!c.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(d.default.Component);m.propTypes=p,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=h,m.displayName="RevealBase",t.default=m,e.exports=t.default},"3cLY":function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){var n=t.left,i=t.right,o=t.up,a=t.down,r=t.top,s=t.bottom,l=t.big,d=t.mirror,c=t.opposite,p=(n?1:0)|(i?2:0)|(r||a?4:0)|(s||o?8:0)|(d?16:0)|(c?32:0)|(e?64:0)|(l?128:0);if(f.hasOwnProperty(p))return f[p];if(!d!=!(e&&c)){var h=[i,n,s,r,a,o];n=h[0],i=h[1],r=h[2],s=h[3],o=h[4],a=h[5]}var m=l?"2000px":"100%",v=n?"-"+m:i?m:"0",b=a||r?"-"+m:o||s?m:"0";return f[p]=(0,u.animation)("\n    "+(e?"to":"from")+" {opacity: 0;transform: translate3d("+v+", "+b+", 0) rotate3d(0, 0, 1, -120deg);}\n\t  "+(e?"from":"to")+" {opacity: 1;transform: none}\n  "),f[p]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,n=(e.out,e.forever),a=e.timeout,r=e.duration,s=void 0===r?u.defaults.duration:r,d=e.delay,c=void 0===d?u.defaults.delay:d,f=e.count,p=void 0===f?u.defaults.count:f,h=i(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===a?s:a,delay:c,forever:n,count:p,style:{animationFillMode:"both"}};return(0,l.default)(h,m,m,t)}n("HAE/"),n("nIY7"),n("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var r,s=n("eH+L"),l=(r=s)&&r.__esModule?r:{default:r},d=n("17x9"),u=n("ar19"),c={out:d.bool,left:d.bool,right:d.bool,top:d.bool,bottom:d.bool,big:d.bool,mirror:d.bool,opposite:d.bool,duration:d.number,timeout:d.number,delay:d.number,count:d.number,forever:d.bool},f={};a.propTypes=c,t.default=a,e.exports=t.default},A0fD:function(e,t,n){e.exports=n.p+"static/its-bf42e10ede6fc9096548ea038be6d3ec.png"},IFRj:function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){var n=t.left,i=t.right,o=t.up,a=t.down,r=t.top,s=t.bottom,l=t.mirror,d=t.opposite,c=(n?1:0)|(i?2:0)|(r||a?4:0)|(s||o?8:0)|(l?16:0)|(d?32:0)|(e?64:0);if(f.hasOwnProperty(c))return f[c];if(!l!=!(e&&d)){var p=[i,n,s,r,a,o];n=p[0],i=p[1],r=p[2],s=p[3],o=p[4],a=p[5]}var h,m=n||i,v=r||s||o||a,b=void 0,y=void 0,w=void 0,g=void 0,E=void 0,x=void 0,O=void 0,k=void 0,R=void 0,S=void 0,T=void 0,j=void 0,_=void 0;return e?(w=m?(i?"-":"")+"20px":0,g=v?(o||s?"":"-")+"10px":"0",E=(a||r?"":"-")+"20px",j=m?(n?"-":"")+"2000px":"0",_=v?(a||r?"-":"")+"2000px":"0"):(b=m?(n?"-":"")+"3000px":"0",y=v?(a||r?"-":"")+"3000px":"0",x=m?(i?"-":"")+"25px":"0",O=v?(o||s?"-":"")+"25px":"0",k=m?(n?"-":"")+"10px":"0",R=v?(a||r?"-":"")+"10px":"0",S=m?(i?"-":"")+"5px":"0",T=v?(o||s?"-":"")+"5px":"0"),h=m||v?e?"\n        20% {\n          transform: translate3d("+w+", "+g+", 0);\n          }\n        "+(v?"40%, 45% {\n            opacity: 1;\n            transform: translate3d(0, "+E+", 0);\n          }":"")+"\n          to {\n            opacity: 0;\n            transform: translate3d("+j+", "+_+", 0);\n        }\n      ":"from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      from {\n        opacity: 0;\n        transform: translate3d("+b+", "+y+", 0);\n      }\n      60% {\n        opacity: 1;\n        transform: translate3d("+x+", "+O+", 0);\n      }\n      75% {\n        transform: translate3d("+k+", "+R+", 0);\n      }\n      90% {\n        transform: translate3d("+S+", "+T+", 0);\n      }\n      to {\n        transform: none;\n      }":e?"20% {\n          transform: scale3d(.9, .9, .9);\n        }\n        50%, 55% {\n          opacity: 1;\n          transform: scale3d(1.1, 1.1, 1.1);\n        }\n        to {\n          opacity: 0;\n          transform: scale3d(.3, .3, .3);\n      }":"from, 20%, 40%, 60%, 80%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      0% {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n      }\n      20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n      }\n      40% {\n        transform: scale3d(.9, .9, .9);\n      }\n      60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n      }\n      80% {\n        transform: scale3d(.97, .97, .97);\n      }\n      to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }",f[c]=(0,u.animation)(h),f[c]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,n=(e.out,e.forever),a=e.timeout,r=e.duration,s=void 0===r?u.defaults.duration:r,l=e.delay,c=void 0===l?u.defaults.delay:l,f=e.count,p=void 0===f?u.defaults.count:f,h=i(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===a?s:a,delay:c,forever:n,count:p,style:{animationFillMode:"both"},reverse:h.left};return(0,d.default)(h,m,m,t)}n("HAE/"),n("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var r,s=n("17x9"),l=n("eH+L"),d=(r=l)&&r.__esModule?r:{default:r},u=n("ar19"),c={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},f={};a.propTypes=c,t.default=a,e.exports=t.default},"TpB+":function(e,t,n){e.exports=n.p+"static/rse-6449112d7c9c5b6e83469baf7a3071fc.png"},Wasm:function(e,t,n){e.exports=n.p+"static/orda_logo-d4442f31f9acafdb4dc5c2b1bc509071.png"},ahhm:function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function o(e,t){var n=t.left,i=t.right,o=t.mirror,a=t.opposite,r=(n?1:0)|(i?2:0)|(o?16:0)|(a?32:0)|(e?64:0);if(f.hasOwnProperty(r))return f[r];if(!o!=!(e&&a)){var s=[i,n];n=s[0],i=s[1]}var l=n?"-100%":i?"100%":"0",d=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+l+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+l+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return f[r]=(0,u.animation)(d),f[r]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,n=(e.out,e.forever),a=e.timeout,r=e.duration,s=void 0===r?u.defaults.duration:r,d=e.delay,c=void 0===d?u.defaults.delay:d,f=e.count,p=void 0===f?u.defaults.count:f,h=i(e,["children","out","forever","timeout","duration","delay","count"]),m={make:o,duration:void 0===a?s:a,delay:c,forever:n,count:p,style:{animationFillMode:"both"}};return h.left,h.right,h.mirror,h.opposite,(0,l.default)(h,m,m,t)}n("HAE/"),n("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var r,s=n("eH+L"),l=(r=s)&&r.__esModule?r:{default:r},d=n("17x9"),u=n("ar19"),c={out:d.bool,left:d.bool,right:d.bool,mirror:d.bool,opposite:d.bool,duration:d.number,timeout:d.number,delay:d.number,count:d.number,forever:d.bool},f={};a.propTypes=c,t.default=a,e.exports=t.default},ar19:function(e,t,n){"use strict";function i(e){try{return h.insertRule(e,h.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",o,!0),i("."+a+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}n("eM6i"),n("V+eJ"),n("f3/d"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,o){var a=Math.log(i),r=(Math.log(o)-a)/(n-t);return Math.exp(a+r*(e-t))},t.animation=function(e){if(!h)return"";var t="@keyframes "+(m+f)+"{"+e+"}",n=p[e];return n?""+m+n:(h.insertRule(t,h.cssRules.length),p[e]=f,""+m+f++)},t.hideAll=o,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var a=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},d=t.disableSsr=function(){return t.ssr=r=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),c=(t.ie10=!1,t.collapseend=void 0),f=1,p={},h=!1,m=a+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(d,1500),s||(t.collapseend=c=document.createEvent("Event"),c.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(h=v.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},bT9l:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),o=n.n(i),a=n("Wbzz"),r=n("Rb52"),s=n("NSxh"),l=n("ehlT"),d=n("1eu9"),u=n.n(d),c=function(e){var t=e.className,n=e.children;return o.a.createElement(a.StaticQuery,{query:"3011060359",render:function(e){var i=e.desktop.childImageSharp.fluid;return o.a.createElement(u.a,{className:t,fluid:i,style:{height:"100vh",width:"100%",display:"flex"}},o.a.createElement("div",null,n))},data:l})},f=n("dmsj"),p=n("TpB+"),h=n.n(p),m=n("A0fD"),v=n.n(m),b=n("Wasm"),y=n.n(b),w=n("boqk"),g=n.n(w),E=n("IFRj"),x=n.n(E),O=n("3cLY"),k=n.n(O),R=n("ahhm"),S=n.n(R);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{title:"About",keywords:["the university of sheffield","data visualisation","data visualisation hub","research","about dataviz"]}),o.a.createElement(r.a,null),o.a.createElement(c,{className:"items-center justify-center text-center"},o.a.createElement(x.a,{cascade:!0,delay:700,duration:2e3},o.a.createElement("div",{className:"text-white",style:{fontFamily:"TUoS Blake"}},o.a.createElement("h1",{className:"text-5xl font-bold ",style:{textShadow:"#000000 0px 0px 10px"}},"Library · IT Services · RSE"),o.a.createElement("p",{className:"text-lg my-4 text-gray-100 font-semibold px-2",style:{textShadow:"#000000 0px 2px 10px"}},"Dataviz.Shef is a joint initiative between three partners.")),o.a.createElement("div",{onClick:function(){return g()("#more")}},o.a.createElement("button",{className:"mt-16 bg-gray-300 hover:bg-highlight_2 text-center hover:text-white text-gray-700 font-semibold py-2 px-6 border-2 border-transparent shadow"},"Learn more")))),o.a.createElement("div",{id:"more",className:"container pt-12 pb-24 text-gray-800 mx-auto flex flex-wrap",style:{fontFamily:"TUoS Blake"}},o.a.createElement("div",{className:"flex flex-wrap mx-auto justify-center content-center border-solid border-gray-100 border-b-2"},o.a.createElement(k.a,null,o.a.createElement("a",{className:"max-w-xs rounded overflow-hidden my-4 p-6 flex flex-wrap justify-center content-center w-full sm:w-1/3",href:"https://www.sheffield.ac.uk/library/index",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("p",{className:"font-medium text-4xl leading-tight",style:{fontFamily:"TUoS Stephenson"}},"The",o.a.createElement("br",null),"University",o.a.createElement("br",null),"Library.")),o.a.createElement("a",{className:"max-w-xs rounded overflow-hidden my-4 p-6 flex flex-wrap justify-center content-center w-full sm:w-1/3",href:"https://www.sheffield.ac.uk/it-services",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:v.a})),o.a.createElement("a",{className:"max-w-xs rounded overflow-hidden my-4 p-6 flex flex-wrap justify-center content-center w-full sm:w-1/3",href:"https://rse.shef.ac.uk/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:h.a})))),o.a.createElement("div",{className:"flex flex-wrap text-gray-600 text-xl px-3 lg:px-48 py-16"},o.a.createElement(S.a,null,o.a.createElement("p",{className:"text-2xl"},o.a.createElement("b",{className:"text-highlight_2"},"Dataviz.Shef")," is a joint initiative between ",o.a.createElement("b",null,"The University Library"),", ",o.a.createElement("b",null,"IT Services"),", and ",o.a.createElement("b",null,"Research Software Engineering (RSE)"),". This community website exists to provide research staff and students at the University of Sheffield with information and inspiration about the visual presentation of data."),o.a.createElement("p",{className:"pt-8 pb-16 text-gray-600"},"Visualisation has always been at the core of extracting understanding from data, but powerful, modern, open source, interactive and web-based visualisation tools have revolutionised the potential for research data impact. We are here to help to unlock the potential of your data."),o.a.createElement("div",{className:"pb-16 text-xl"},o.a.createElement("p",{className:"pb-16"},"In 2017, ",o.a.createElement("b",null,"ORDA (Online Research Data)")," was launched, a free platform for all University of Sheffield research staff and students to share their datasets, code, presentations, posters, grey literature and other non-traditional research outputs. As part of ORDA, we've developed a data visualisation showcase site where researchers are able to host interactive data visualisations and also link them to reposited data in ORDA."),o.a.createElement("a",{href:"https://orda.shef.ac.uk/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:y.a,className:"shadow-lg mx-auto",style:{maxWidth:"35vh"}}))),o.a.createElement("p",{className:"text-highlight_2 text-4xl py-8"},"Contribute"),o.a.createElement("p",null,"From ideas to content for the ORDA showcase, our blog or Dataviz documentation, contributions are open to all. For the moment just get in touch with us through the ",o.a.createElement("a",{href:"mailto:rdm@sheffield.ac.uk",target:"_blank",rel:"noopener noreferrer"},"email"),", ",o.a.createElement(a.Link,{to:"/community/#joinus"},"google group")," or ",o.a.createElement(a.Link,{to:"/community/#joinus"},"slack team"),".")))),o.a.createElement(s.a,null))}},boqk:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i=function(e){var t=document.querySelector(e);return!!t&&(t.scrollIntoView({behavior:"smooth",block:"start"}),!0)};t.default=i},"eH+L":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}n("91GP"),n("HAE/"),n("bWfx"),Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),a.default.Children.count(i)<2?a.default.createElement(r.default,o({},e,{inEffect:t,outEffect:n,children:i})):(i=a.default.Children.map(i,(function(i){return a.default.createElement(r.default,o({},e,{inEffect:t,outEffect:n,children:i}))})),"Fragment"in a.default?a.default.createElement(a.default.Fragment,null,i):a.default.createElement("span",null,i))};var a=i(n("q1tI")),r=i(n("28nh"));e.exports=t.default},ehlT:function(e){e.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"aspectRatio":1.5,"src":"/dataviz-hub2/static/d1b3607045b93bc9f47f2edab8393a23/b1e91/about.jpg","srcSet":"/dataviz-hub2/static/d1b3607045b93bc9f47f2edab8393a23/ce222/about.jpg 480w,\\n/dataviz-hub2/static/d1b3607045b93bc9f47f2edab8393a23/39fae/about.jpg 960w,\\n/dataviz-hub2/static/d1b3607045b93bc9f47f2edab8393a23/b1e91/about.jpg 1920w,\\n/dataviz-hub2/static/d1b3607045b93bc9f47f2edab8393a23/e99d1/about.jpg 2559w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}}')},nIY7:function(e,t,n){"use strict";n("OGtf")("big",(function(e){return function(){return e(this,"big","","")}}))}}]);
//# sourceMappingURL=component---src-pages-about-jsx-ff0b8ed6123155c2b48e.js.map