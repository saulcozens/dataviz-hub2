(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Dtc0:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return le}));var r=a("q1tI"),o=a.n(r),l=a("Rb52"),n=a("NSxh"),s=a("dmsj"),i=a("Wbzz"),c=(a("f3/d"),a("KKXr"),a("ma3e")),b=a("wd/R"),d=a.n(b),m=a("/eHF"),u=a.n(m),x=a("qKvR"),p=function(e){var t=e.eventBrite,a=Object(r.useState)(d()().format("ddd DD MMMM YYYY, hh:mm A")),o=a[0],l=a[1];return Object(r.useEffect)((function(){l(d()().format("ddd DD MMMM YYYY, hh:mm A"))}),[]),Object(x.b)("div",{className:"bg-black w-full"},Object(x.b)(u.a,{duration:1e3},Object(x.b)("div",{id:"eventNotice",className:"w-full text-white text-gray-800 flex-col flex-wrap overflow-auto  bg-white"},t.edges.map((function(e){var t=e.node,a=t.description.text.split(" ").splice(0,15);return a=a.length<15?a.join(" "):a.join(" ").concat(" ..."),Object(x.b)("div",{key:t.id,className:"border-white border-t-4 border-l-6 border-r-6 border-b-8"},Object(x.b)("div",{className:"text-gray-700 text-sm w-full bg-white font-bold px-2 py-2"},"Today: ",o),Object(x.b)("a",{className:"flex flex-wrap w-full overflow-hidden max-h-80 md:max-h-25 xl:max-h-20 bg-white text-gray-700 group",style:{fontFamily:"TUoS Blake"},href:t.url,target:"_blank",rel:"noopener noreferrer"},Object(x.b)("img",{className:"w-full md:w-3/12 overflow-hidden self-center md:min-h-25 xl:min-h-15",src:t.logo.original.url,style:{objectFit:"cover",objectPosition:"center"}}),Object(x.b)("div",{className:"w-full md:w-9/12 py-1 px-4"},Object(x.b)("h1",{className:"inline-block font-semibold xl:text-xl"},Object(x.b)("p",{className:"text-highlight_2 text-2xl xl:text-4xl inline-block"},"NEXT")," event:  ",Object(x.b)("p",{className:"inline-block text-lg xl:text-2xl font-bold"},t.name.text?t.name.text:"No next event")),Object(x.b)("p",{className:"text-gray-500 hidden md:flex lg:flex xl:flex leading-tight text-sm xl:text-lg"},a),Object(x.b)("p",{className:"flex pt-2 group-hover:text-highlight_2 text-sm xl:text-lg"},Object(x.b)(c.e,{className:"mr-1"}),t.start.local),Object(x.b)("div",{className:"flex flex-wrap"},Object(x.b)("div",{className:"w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 text-sm xl:text-lg"},Object(x.b)("p",{className:"flex group-hover:text-highlight_2"},t.online_event&&Object(x.b)(c.g,{className:"mr-1 mt-1"})," ",t.online_event&&"Online Event"),Object(x.b)("p",{className:"flex group-hover:text-highlight_2"},t.venue&&Object(x.b)(c.g,{className:"mr-1 mt-1"}),t.venue&&t.venue.name&&t.venue.name+", ",t.venue&&t.venue.address.address_1&&t.venue.address.address_1+", ",t.venue&&t.venue.address.city&&t.venue.address.city+", ",t.venue&&t.venue.address.postal_code&&t.venue.address.postal_code)),Object(x.b)("div",{className:"flex flex-wrap w-full sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 content-center justify-center hidden-xs hidden-md"},Object(x.b)("button",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"hidden group-hover:flex shadow-sm -mt-4 py-1 px-3 text-md bg-gray-800 text-white hover:bg-highlight_2"},"Register"))))))})))))},f=a("M4XY"),h=a.n(f),g=a("VonM"),y=a("ZdGz"),v=a.n(y),j=a("qNCg"),O=a.n(j),w=a("sh/8"),N=a.n(w),k=a("uhbi"),S=a.n(k),_=a("iR2b"),C=a.n(_),T=function(e){var t=e.featuredPost;if(t&&t.edges)return Object(x.b)("div",{className:"w-full flex flex-wrap bg-black"},t.edges.map((function(e){var t,a=e.node;if(a.frontmatter&&a.frontmatter.thumbnail&&a.frontmatter.thumbnail.childImageSharp)t=a.frontmatter.thumbnail.childImageSharp.fluid.src;else{var r=[v.a,O.a,N.a,S.a,C.a];t=r[Math.floor(Math.random()*r.length)]}var o=a.frontmatter.description.split(" ").splice(0,30);o=o.length<30?o.join(" "):o.join(" ").concat(" ...");var l=a.frontmatter.title.split(" ").splice(0,11);return l=l.length<11?l.join(" "):l.join(" ").concat(" ..."),Object(x.b)(u.a,{key:a.id,duration:2e3,fraction:.3},Object(x.b)("div",{className:"w-full sm:w-1/2 min-h-100 pb-28 overflow-hidden bg-black relative leading-none text-gray-500 flex-grow"},Object(x.b)(i.Link,{className:"group",to:a.fields.slug},Object(x.b)("div",{className:"flex top-0 left-0 absolute ml-6 mt-6 text-gray-900 ipadp:text-gray-300 group-hover:bg-black items-center",style:{zIndex:"3"}},Object(x.b)(c.i,{className:"text-yellow-300 text-2xl"}),Object(x.b)("p",{className:"inline-block ipadp:opacity-0 group-hover:opacity-100 text-base font-semibold px-2",style:{fontFamily:"TUoS Blake",textShadow:"#000000 0px 0px 20px"}},"Featured")),Object(x.b)(g.i,{className:"ipadp:greyScale-100 group-hover:greyScale-0 min-h-3/5 max-h-3/5"},Object(x.b)(g.h,{style:{backgroundImage:"url("+t+")"}})),Object(x.b)(g.c,{className:"pt-6 px-8"},Object(x.b)("h1",{className:"font-bold text-2xl 2xl:text-3xl leading-tight text-gray-200 group-hover:text-highlight_2 overflow-y-hidden",style:{fontFamily:"TUoS Stephenson"}},l),Object(x.b)("p",{className:"my-2 text-sm 2xl:text-lg leading-tight group-hover:text-gray-500"},o),Object(x.b)("p",{className:"my-2 text-xs 2xl:text-base pt-2 group-hover:text-gray-500"},a.frontmatter.author.map((function(e,t){return a.frontmatter.author.length==t+1?e.name:e.name+" · "}))),Object(x.b)("p",{className:"my-2 text-xs 2xl:text-base text-gray-500"},a.frontmatter.date," · ",a.fields.readingTime.text))),Object(x.b)("div",{className:"px-8 pt-6 pb-24 text-sm 2xl:text-sm"},a.frontmatter.category.map((function(e){return Object(x.b)(g.f,{key:e,to:"/blog/category/"+h()(e)},e)})),a.frontmatter.tag.map((function(e,t){return t<3&&Object(x.b)(g.j,{key:e,to:"/blog/tag/"+h()(e)},e)})),a.frontmatter.tag.length>3&&Object(x.b)(g.j,{to:a.fields.slug},"+",a.frontmatter.tag.length-3," more"))))})))},D=a("NIcq"),A=function(e){var t=e.latestPost;return Object(x.b)("div",{className:"w-full flex flex-wrap border-l-1 xl:border-l-2 border-black bg-black"},t.edges.map((function(e){var t,a=e.node;if(a.frontmatter&&a.frontmatter.thumbnail&&a.frontmatter.thumbnail.childImageSharp)t=a.frontmatter.thumbnail.childImageSharp.fluid.src;else{var r=[v.a,O.a,N.a,S.a,C.a];t=r[Math.floor(Math.random()*r.length)]}var o=a.frontmatter.description.split(" ").splice(0,20);return o=o.length<20?o.join(" "):o.join(" ").concat(" ..."),Object(x.b)(u.a,{key:a.id,duration:2e3,fraction:.3},Object(x.b)("div",{onClick:function(){Object(i.navigate)(""+a.fields.slug)},className:"rounded-lg border-1 ipadp:border-2 border-black flex-auto flex-wrap ipadp:greyScale-100 hover:greyScale-0 min-h-50 ipadp:min-h-60 max-h-60 overflow-hidden group relative min-w-20 ipadp:w-1/3 2xl:w-1/4 cursor-pointer",style:{backgroundImage:"url("+t+")",backgroundSize:"cover",backgroundPosition:"center"}},Object(x.b)("div",{className:"h-full w-full bg-light_black group-hover:bg-transparent transition ease-in-out duration-700"},Object(x.b)("div",{className:"flex top-0 left-0 absolute ml-3 mt-3"},Object(x.b)(D.a,{className:"text-red-700 ipadp:text-white group-hover:text-red-700 text-3xl"})),Object(x.b)(i.Link,{className:"px-4 opacity-0 ipadp:opacity-100 font-bold text-2xl 2xl:text-3xl leading-tight text-white group-hover:hidden overflow-y-hidden absolute",to:""+a.fields.slug,style:{textShadow:"#000000 0px 0px 15px",paddingTop:"8vh",paddingBottom:"20vh"}},a.frontmatter.title,Object(x.b)("p",{className:"text-sm xl:text-lg font-semibold pt-4",style:{textShadow:"#000000 0px 0px 5px"}},a.frontmatter.date),Object(x.b)("p",{className:"text-sm xl:text-lg font-bold pt-1",style:{textShadow:"#000000 0px 0px 5px"}},a.fields.readingTime.text)),Object(x.b)("div",{className:"px-4 xl:px-8 leading-none text-gray-500 min-h-50 ipadp:min-h-60 max-h-60 ipadp:opacity-0 group-hover:opacity-100",style:{paddingTop:"9vh",paddingBottom:"20vh",backgroundColor:"rgba(0,0,0, .67)"}},Object(x.b)("h1",{className:"ipadp:hidden font-bold text-xl leading-tight text-white overflow-y-hidden"},a.frontmatter.title),Object(x.b)("p",{className:"my-3 text-sm leading-tight group-hover:text-highlight_2 xl:text-xl",style:{textShadow:"#000000 0px 0px 8px"}},o),Object(x.b)("p",{className:"my-2 text-xs pt-2",style:{textShadow:"#000000 0px 0px 5px"}},a.frontmatter.author.map((function(e,t){return a.frontmatter.author.length==t+1?e.name:e.name+" · "}))),Object(x.b)("p",{className:"my-2 text-xs",style:{textShadow:"#000000 0px 0px 5px"}},a.frontmatter.date," · ",a.fields.readingTime.text),Object(x.b)("div",{className:"py-2 text-sm"},a.frontmatter.category.map((function(e){return Object(x.b)(g.f,{key:e,to:"/blog/category/"+h()(e)},e)})),a.frontmatter.tag.map((function(e,t){return t<3&&Object(x.b)(g.j,{key:e,to:"/blog/tag/"+h()(e)},e)})),a.frontmatter.tag.length>3&&Object(x.b)(g.j,{to:a.fields.slug},"+",a.frontmatter.tag.length-3," more"))))))})))},R=a("hXnw"),B=a.n(R),I=function(){return Object(x.b)("div",{id:"learning_path",className:"ipadp:min-h-100 flex flex-wrap justify-center items-center py-10 bg-gray-900"},Object(x.b)(u.a,null,Object(x.b)("div",{className:"container mx-auto justify-center flex flex-wrap text-center"},Object(x.b)("div",{className:"text-6xl font-semibold text-highlight_2 w-full leading-tight",style:{fontFamily:"TUoS Stephenson"}},"Learning paths."),Object(x.b)("p",{className:"mt-3 text-gray-100 px-2"},"Discover how to get the most out of statistics, visualisation and tool sets."))),Object(x.b)("div",{className:"flex flex-wrap text-gray-800 pt-10 pb-20 justify-center"},Object(x.b)("h1",{className:"w-full text-white text-center"},"We are working on it, please come back later. ",Object(x.b)("br",null)," Why not share your suggestions on our ",Object(x.b)("a",{className:"text-gray-500 hover:text-highlight_2",href:"https://join.slack.com/t/shef-dataviz/signup",target:"_blank",rel:"noopener noreferrer"},"slack channel"),"."),Object(x.b)("div",{className:"md:w-1/4 mx-5 p-3 mt-10 transform hover:-translate-y-6 transition duration-500 bg-highlight_2 shadow-xs hover:shadow-2xl rounded-lg"},Object(x.b)(B.a,{bottom:!0,duration:700,delay:500})),Object(x.b)("div",{className:"md:w-1/4 mx-5 p-3 mt-10 transform hover:-translate-y-6 transition duration-500 bg-gray-500 shadow-xs hover:shadow-2xl rounded-lg"},Object(x.b)(B.a,{bottom:!0,duration:700,delay:750})),Object(x.b)("div",{className:"md:w-1/4 mx-5 p-3 mt-10 transform hover:-translate-y-6 transition duration-500 bg-white shadow-xs hover:shadow-2xl rounded-lg"},Object(x.b)(B.a,{bottom:!0,duration:700,delay:1e3}))))},L=a("v7au"),M=a("cpGi"),F=function(){return Object(x.b)("div",{id:"home_community",className:"ipadp:min-h-100 flex flex-wrap justify-center items-center py-10"},Object(x.b)(u.a,null,Object(x.b)("div",{className:"container mx-auto justify-center flex flex-wrap"},Object(x.b)("div",{className:"text-6xl font-semibold text-gray-800 w-full text-center",style:{fontFamily:"TUoS Stephenson"}},"Your community."),Object(x.b)(i.Link,{to:"/community",className:" mt-2 text-gray-500 hover:underline"},"Learn more ",Object(x.b)(D.b,{className:"inline-block"}),"🎉"))),Object(x.b)("div",{className:"flex flex-wrap text-gray-800 pt-10 pb-20 justify-center"},Object(x.b)("div",{className:"md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 group"},Object(x.b)(B.a,{bottom:!0,duration:700,delay:500},Object(x.b)(L.b,{className:"text-5xl"}),Object(x.b)("p",{className:"text-xl font-bold py-3"},"Events"),Object(x.b)("div",{className:"border-t-4 border-gray-700 py-3 text-gray-600 group-hover:text-gray-900"},"Discover a variety of events including talks and symposia, workshops, vis-coding clubs and data visualisation hackathons!"),Object(x.b)(i.Link,{to:"/events"},Object(x.b)(g.e,{type:"BlackButton"},"Upcoming events")))),Object(x.b)("div",{className:"md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 group"},Object(x.b)(B.a,{bottom:!0,duration:700,delay:750},Object(x.b)(L.a,{className:"text-5xl"}),Object(x.b)("p",{className:"text-xl font-bold py-3"},"Training"),Object(x.b)("div",{className:"border-t-4 border-gray-700 py-3 text-gray-600 group-hover:text-gray-900"},"Discover different training courses organised by the dedicated dataviz team to help you make the most of your data."),Object(x.b)(g.e,{type:"BlackButton","data-tip":"","data-for":"ReactTooltip1"},"Coming soon"))),Object(x.b)("div",{className:"md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 group"},Object(x.b)(B.a,{bottom:!0,duration:700,delay:1e3},Object(x.b)(D.c,{className:"text-5xl"}),Object(x.b)("p",{className:"text-xl font-bold py-3"},"Support"),Object(x.b)("div",{className:"border-t-4 border-gray-700 py-3 text-gray-600 group-hover:text-gray-900"},"Get in touch with us. It is natural that you have found something diffcult to understand or need more specific guidance and direction."),Object(x.b)(g.e,{type:"BlackButton","data-tip":"","data-for":"ReactTooltip1"},"Coming soon"),Object(x.b)(M.a,{id:"ReactTooltip1",delayShow:500,delayHide:1e3,effect:"float"},"Why not join our slack channel and get live updates?"))),Object(x.b)("div",{className:"md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-6 transition duration-500 group"},Object(x.b)(B.a,{bottom:!0,duration:700,delay:1250},Object(x.b)("div",null,Object(x.b)(L.d,{className:"text-5xl"}),Object(x.b)("p",{className:"text-xl font-bold py-3"},"Contribution"),Object(x.b)("div",{className:"border-t-4 border-gray-700 py-3 text-gray-600 group-hover:text-gray-900"},"We love to see people actively sharing their thought and creativity. We have prepared a tutorial for you to upload your own blog posts.")),Object(x.b)("a",{href:"https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"},Object(x.b)(g.e,{type:"BlackButton"},"Our repository"))))))},q=a("pU9V"),P=a("1eu9"),W=a.n(P),U=function(e){var t=e.className,a=e.children;return Object(x.b)(i.StaticQuery,{query:"2509862688",render:function(e){var r=e.desktop.childImageSharp.fluid;return Object(x.b)(W.a,{className:t,fluid:r,style:{backgroundAttachment:"fixed",backgroundSize:"cover",width:"100%"}},Object(x.b)("div",null,a))},data:q})},z=a("kD9K"),E=a.n(z),H=a("dQDb"),Y=a.n(H),G=function(){return Object(x.b)("div",{className:"relative overflow-x-hidden bg-gray-800"},Object(x.b)("h1",{className:"absolute left-0 text-white text-2xl font-semibold transform -rotate-90 -ml-8 mt-44"},"Showcase"),Object(x.b)("div",{id:"home_showcase"}),Object(x.b)(U,{className:"ipadp:min-h-40 flex flex-wrap items-center justify-end py-5 transform hover:translate-x-12 transition duration-500"},Object(x.b)("div",{className:"flex flex-wrap justify-end"},Object(x.b)("div",{className:"lg:w-1/2 py-10 flex flex-wrap px-3 ipadp:pr-20 ipadp:pl-6"},Object(x.b)(u.a,{duration:1300,right:!0},Object(x.b)("div",{className:"text-5xl 2xl:text-6xl font-semibold text-white",style:{textShadow:"#000000 0px 0px 0px",fontFamily:"TUoS Stephenson"}},"SHOWCASE"),Object(x.b)("div",{className:"2xl:text-lg my-4 text-white font-semibold",style:{textShadow:"#8d8d8d 0px 0px 3px"}},"ORDA (Online Research Data) is the University of Sheffield's hub for sharing data, code, and other non-traditional research artefacts. ORDA includes a showcase of visual representations of data built by staff and students at the University of Sheffield."),Object(x.b)("a",{className:"mt-8",href:"https://orda.shef.ac.uk/visualisations",target:"_blank",rel:"noopener noreferrer"},Object(x.b)(g.e,{external:!0,type:"GreyButton"},"Discover")))))),Object(x.b)("div",{className:"ipadp:min-h-40 flex flex-wrap py-6 ipadp:py-12 items-center justify-center bg-gray-100"},Object(x.b)("div",{className:"md:w-6/12 px-3 md:pl-8 transform hover:scale-110 transition duration-500"},Object(x.b)(Y.a,{delay:2200},Object(x.b)("img",{src:E.a,className:"max-h-50"}))),Object(x.b)(B.a,{cascade:!0,duration:1300},Object(x.b)("div",{className:"md:w-5/12 px-3 lg:px-5 2xl:px-24 flex flex-wrap justify-center"},Object(x.b)("h1",{className:"text-2xl ipadp:text-4xl text-gray-700 text-center py-5",style:{fontFamily:"TUoS Stephenson"}},"ORDA User Regions"),Object(x.b)("p",{className:"text- gray-600"},"ORDA has welcomed visitors from over 148 countries and regions worldwide, providing a research data repository for storing and publishing research data in the long term, and enabled university research data to be preseved, discovered, and accessed."),Object(x.b)("a",{className:"mt-8",href:"https://orda.shef.ac.uk",target:"_blank",rel:"noopener noreferrer"},Object(x.b)(g.e,{external:!0,className:"hover:bg-white hover:shadow-2xl hover:text-highlight_2 transition duration-500 ease-in-out"},"Go to ORDA"))))))},V=(a("a1Th"),a("rE2o"),a("ioFf"),a("Z2Ku"),a("L9s1"),a("T39b"),a("XfO3"),a("HEwt"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("OG14"),a("Tgqd")),J=a("WG1l"),X=a.n(J);function K(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Q(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Q(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var Z=function(e){var t,a;function r(){for(var t,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={query:"",results:[]},t.search=function(e){var a=e.target.value;if(t.state.query.length>1){var r=t.getSearchResults(a);t.setState({results:r,query:a})}else t.setState({results:[],query:a})},t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=r.prototype;return o.render=function(){var e=this;return Object(x.b)("div",{className:this.props.classNames+" mt-16 2xl:mt-20 relative text-gray-700 w-full text-center"},Object(x.b)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white p-3 rounded-lg",style:{boxShadow:"#4e4e4e 0px 5px 20px -16px"}},Object(x.b)(V.a,{className:"inline-block text-center text-3xl -mt-1"}),Object(x.b)("input",{id:"homeSearch",onChange:this.search,onInput:this.search,autoComplete:"off",className:"search__input py-1 pl-4 text-lg focus:outline-none pr-5 text-gray-700",style:{minWidth:"21vw"},type:"text",name:"search",placeholder:"What are you looking for?"})),Object(x.b)("div",{className:"search__list"},Object(x.b)((function(){return e.state.results.length>0&&e.state.query.length>2?Object(x.b)("div",{className:"z-30 text-left overflow-auto max-h-50 xl:max-h-55 mx-auto ipadp:max-w-30 2xl:max-w-30 border-1 border-gray-200 shadow-2xl noScrollBar rounded-lg"},e.state.results.slice(0,5).map((function(t,a){var r=t.description.split(" ").splice(0,28);r=r.length<28?r.join(" ").concat("."):r.join(" ").concat(" ...");var o=t.category;return Object(x.b)("div",{className:"text-gray-800 group",key:a,style:{fontFamily:"TUoS Blake"}},Object(x.b)("a",{href:""+t.url,target:"_blank",rel:"noopener noreferrer"},Object(x.b)("div",{className:"flex bg-gray-900 self-center items-center justify-end"},Object(x.b)("div",{className:"w-5/6"},Object(x.b)("h1",{className:"font-bold text-sm xl:text-lg w-full px-1 py-1 text-white"},Object(x.b)(X.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:t.title,searchWords:e.state.query.split()}))),Object(x.b)("div",{className:"flex w-1/6 justify-end"},Object(x.b)(i.Link,{className:"inline-block hover:bg-highlight_2 hover:text-white mx-2 px-1 py-1 bg-black rounded-lg text-white text-xs",to:"/blog/category/"+h()(o)},Object(x.b)("p",{className:"text-xs"},o)))),Object(x.b)("div",{className:"flex py-1 group-hover:bg-light_grey group-hover:text-gray-900"},Object(x.b)("div",{className:"w-3/12 text-xs py-1 px-1"},t.tag.map((function(t){return Object(x.b)(i.Link,{key:t,to:"/blog/tag/"+h()(t),className:"inline-block text-gray-600 text-xxs hover:text-highlight_2 mr-1"},Object(x.b)(X.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:t,searchWords:e.state.query.split()}))}))),Object(x.b)("div",{className:"w-9/12"},Object(x.b)("h1",{className:"text-xs xl:text-med px-2 py-1 leading-4 xl:leading-6 border-l-1 border-gray-300",style:{borderWidth:"20%"}},Object(x.b)(X.a,{highlightClassName:"text-red-600 bg-transparent",textToHighlight:r,searchWords:e.state.query.split()}))))))})),Object(x.b)("div",{className:"text-center py-2 bg-gray-800 text-white font-semibold hover:bg-white hover:text-highlight_2 border-t-1 cursor-pointer",onClick:function(){Object(i.navigate)("/search",{state:{searchWord:e.state.query}})}},"Full search result")):e.state.query.length>2?"No results for "+e.state.query:e.state.query.length>0?"Please insert at least 3 characters":""}),null)))},o.getSearchResults=function(e){var t=window.__FLEXSEARCH__.en.index,a=window.__FLEXSEARCH__.en.store;if(e&&t){var r=[];return Object.keys(t).forEach((function(a){var o;(o=r).push.apply(o,K(t[a].values.search(e)))})),r=Array.from(new Set(r)),a.filter((function(e){return r.includes(e.id)?e:null})).map((function(e){return e.node}))}return[]},r}(r.Component),$=a("oBNZ"),ee=a.n($),te=a("yJcu"),ae=a.n(te),re=a("jh3v"),oe=function(e){var t=e.className,a=e.children;return Object(x.b)(i.StaticQuery,{query:"522342103",render:function(e){var r=e.desktop.childImageSharp.fluid;return Object(x.b)(W.a,{className:t,fluid:r,style:{backgroundAttachment:"fixed",backgroundSize:"cover",width:"100%"}},Object(x.b)("div",null,a))},data:re})},le=(t.default=function(e){var t=e.data,a=t.featuredPost,c=t.latestPost,b=t.eventBrite,m=d()(),f=["Colour","What are you looking for?","how to write a blog post","slack","dataset","Chart","visualisation","Python","DD/MM/YYYY"];return Object(r.useEffect)((function(){var e=document.getElementById("homeSearch"),t=setInterval((function(){if(d()()-m>6e3){m=d()();var t=Math.floor(Math.random()*f.length);e.setAttribute("placeholder",f[t])}}),5e3);return function(){clearInterval(t)}}),[f]),Object(x.b)(o.a.Fragment,null,Object(x.b)(s.a,{title:"Home",keywords:["the university of sheffield","data visualisation","data visualisation hub","research"]}),Object(x.b)(l.a,null),Object(x.b)("div",null,Object(x.b)("div",{className:"flex flex-wrap"},Object(x.b)("div",{id:"homeBar",className:"sm:sticky sm:top-0 sm:left-0 flex flex-wrap w-full lg:w-4/12 text-white text-gray-600 overflow-hidden lg:min-h-100 lg:max-h-100 justify-center",style:{transition:".4s ease",background:"rgba(255,255,255, 1)",zIndex:"1"}},Object(x.b)("div",{className:"px-8 text-center pt-28 ipadp:pt-10vh",style:{fontFamily:"TUoS Blake"}},Object(x.b)("p",{className:"text-gray-800 text-lg ipadp:text-3xl 2xl:text-4xl font-bold"},"Data Visualisation Hub"),Object(x.b)("p",{className:"text-gray-700 text-base 2xl:text-lg mt-2 px-6 xl:px-16"},"Building community around data visualisation at the University of Sheffield.")),Object(x.b)(Z,null),Object(x.b)(ee.a,{left:!0},Object(x.b)("div",{className:"hidden md:flex justify-center py-4 xl:py-8 z-10 w-full"},Object(x.b)("div",{className:"w-1/7 mr-24"},Object(x.b)("div",{className:"mb-1 text-gray-800 font-semibold text-xs xl:text-base 2xl:text-lg"},"Dataviz.Shef"),Object(x.b)("ul",{className:"list-reset leading-normal text-xs xl:text-sm 2xl:text-base"},Object(x.b)("li",null,Object(x.b)(i.Link,{className:"text-gray-700 hover:underline",to:"/#explore","data-tip":"#Data and visualisation"},"Data visualisation")),Object(x.b)("li",null,Object(x.b)(i.Link,{className:"text-gray-700 hover:underline",to:"/#learning_path","data-tip":"Coming soon"},"Learning path")),Object(x.b)("li",null,Object(x.b)(i.Link,{className:"text-gray-700 hover:underline",to:"/#home_community","data-tip":"#Community"},"Community")),Object(x.b)("li",null,Object(x.b)(i.Link,{className:"text-gray-700 hover:underline",to:"/#home_showcase","data-tip":"#Showcase"},"Showcase")),Object(x.b)("li",null,Object(x.b)(i.Link,{className:"text-gray-700 hover:underline",to:"/#collaboration","data-tip":"Coming soon"},"Collaboration")),Object(x.b)(M.a,null))),Object(x.b)("div",{className:"w-1/7"},Object(x.b)("div",{className:"mb-1 text-gray-800 font-semibold text-xs xl:text-base 2xl:text-lg"},"Trending searches"),Object(x.b)("ul",{className:"list-reset leading-normal text-xs xl:text-sm 2xl:text-base"},Object(x.b)("li",null,Object(x.b)("a",{className:"text-gray-700 hover:underline",onClick:function(){Object(i.navigate)("/search",{state:{searchWord:"Chart"}})}},"Chart")),Object(x.b)("li",null,Object(x.b)("a",{className:"text-gray-700 hover:underline",onClick:function(){Object(i.navigate)("/search",{state:{searchWord:"Colour"}})}},"Colour")),Object(x.b)("li",null,Object(x.b)("a",{className:"text-gray-700 hover:underline",onClick:function(){Object(i.navigate)("/search",{state:{searchWord:"Python"}})}},"Python")),Object(x.b)("li",null,Object(x.b)("a",{className:"text-gray-700 hover:underline",onClick:function(){Object(i.navigate)("/search",{state:{searchWord:"Statistics"}})}},"Statistics")))))),Object(x.b)(u.a,{bottom:!0,delay:700},Object(x.b)(i.Link,{to:"#explore"},Object(x.b)(g.d,{className:"py-2 px-10",link:!0},"Get Started"))),Object(x.b)("div",{className:"flex text-xs text-gray-500 mt-12 xl:mt-28 2xl:mt-32 mb-1 mx-auto justify-center w-full"})),Object(x.b)("div",{className:"flex flex-wrap text-gray-100 lg:w-8/12",style:{marginLeft:"auto",transition:".5s ease",zIndex:"2"}},"  ",Object(x.b)("div",{className:"min-h-100 justify-center relative w-full brightness-40 hover:brightness-100",style:{transition:".6s ease"}},Object(x.b)("div",{className:"flex flex-col flex-wrap min-h-100 justify-center text-center items-center greyScale-100 hover:greyScale-0",style:{transition:".8s ease",backgroundImage:"url("+ae.a+")",backgroundSize:"cover",backgroundPosition:"center"}},Object(x.b)("h1",{className:"px-10 ipadp:px-24 text-3xl 2xl:text-5xl font-bold",style:{textShadow:"#000 0 0 10px",backgroundColor:"rgba(0,0,0, 0.8)"}},"CoVid Plots and Analysis",Object(x.b)("p",{className:"text-lg font-normal"},"by Colin Angus at ScHARR, University of Sheffield")),Object(x.b)("div",{className:"mt-10"},Object(x.b)("a",{href:"https://figshare.shef.ac.uk/articles/CoVid_Plots_and_Analysis/12328226",target:"_blank",rel:"noopener noreferrer"},Object(x.b)(g.a,{external:!0,className:"rounded-full"},"Data Repository")),Object(x.b)(i.Link,{className:"ml-8 inline-block",to:"/blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality"},Object(x.b)(g.a,{className:"mt-0 rounded-full"},"Blog post")))),Object(x.b)(i.Link,{to:"#eventNotice"},Object(x.b)("div",{id:"scrollDown-btn",className:"hidden md:block absolute bottom-0 left-0 mb-8 text-center cursor-pointer group pt-14",style:{left:"45%",right:"45%"}},Object(x.b)("span",{style:{marginLeft:"-7px",width:"18px",height:"18px"}}),Object(x.b)("p",{className:"text-black font-bold text-center",style:{textShadow:"#fff 0px 0px 10px"}}," Scroll")))),Object(x.b)(p,{eventBrite:b}),Object(x.b)(T,{featuredPost:a}),Object(x.b)(A,{latestPost:c}),Object(x.b)("div",{className:"flex flex-wrap w-full bg-gray-900 py-10 px-3 shadow-lg justify-center items-center self-center",style:{transition:".3s ease"}},Object(x.b)("div",{className:"text-gray-200 mr-10"},"Discover a range of articles and posts at our blog."),Object(x.b)(i.Link,{to:"/blog"},Object(x.b)(g.g,{className:"bg-black px-5 py-2 text-gray-400 hover:text-white mt-0"},"Read more")))))),Object(x.b)("div",{id:"explore"}),Object(x.b)(oe,{className:"ipadp:min-h-100 flex flex-wrap items-center text-left"},Object(x.b)(u.a,{cascade:!0,delay:700,duration:1500},Object(x.b)("div",{className:"px-3 md:px-24 xl:px-36 2xl:px-52 py-10"},Object(x.b)("div",{className:"text-white"},Object(x.b)("h1",{className:"text-5xl 2xl:text-6xl font-semibold",style:{textShadow:"#000 0px 0px 4px",fontFamily:"TUoS Stephenson"}},"Data and visualisation"),Object(x.b)("p",{className:"2xl:text-lg my-4 text-gray-100 font-semibold md:w-3/5",style:{textShadow:"#000000 0px 2px 5px"}},"Data visualisation is currently an extremely active and critical aspect in research, teaching, and development. The main purpose of data visualisation is to communicate information clearly and effectively by means of graphical representation. However, this does not mean that data visualisation must be boring for its functional purpose, or extremely complicated ...")),Object(x.b)(i.Link,{to:"/blog/22/03/2020/datavizhub_guide"},Object(x.b)(g.e,{type:"GreyButton"},"Read more"))))),Object(x.b)(I,null),Object(x.b)(F,null),Object(x.b)(G,null),Object(x.b)("div",{id:"collaboration",className:"container mx-auto min-h-40 flex flex-wrap py-20 justify-center"},Object(x.b)("h1",{className:"text-3xl ipadp:text-4xl 2xl:text-5xl font-semibold text-gray-800 text-center py-5 w-full",style:{fontFamily:"TUoS Stephenson"}},"Collaboration and Partnership."),Object(x.b)("p",{className:"text-gray-500"},"Further details to come.")),Object(x.b)(n.a,null))},"1399476852")},dQDb:function(e,t,a){"use strict";function r(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}function o(){return u||(u=(0,b.animation)(m))}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.defaults,t=e.children,a=(e.out,e.timeout),l=e.duration,n=void 0===l?b.defaults.duration:l,s=e.delay,i=void 0===s?b.defaults.delay:s,d=e.count,m=void 0===d?b.defaults.count:d,u=e.forever,x=r(e,["children","out","timeout","duration","delay","count","forever"]),p={make:o,duration:void 0===a?n:a,delay:i,forever:u,count:m,style:{animationFillMode:"both"}};return(0,c.default)(x,p,!1,t,!0)}a("HAE/"),a("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var n,s=a("17x9"),i=a("eH+L"),c=(n=i)&&n.__esModule?n:{default:n},b=a("ar19"),d={duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},m="\n\tfrom {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n}\n",u=!1;l.propTypes=d,t.default=l,e.exports=t.default},jh3v:function(e){e.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"aspectRatio":1.7766497461928934,"src":"/static/78b7b1bc6fd2375b8ceca48c0fea6f3a/a327c/earth.jpg","srcSet":"/static/78b7b1bc6fd2375b8ceca48c0fea6f3a/596f3/earth.jpg 700w,\\n/static/78b7b1bc6fd2375b8ceca48c0fea6f3a/e88eb/earth.jpg 1400w,\\n/static/78b7b1bc6fd2375b8ceca48c0fea6f3a/a327c/earth.jpg 2800w,\\n/static/78b7b1bc6fd2375b8ceca48c0fea6f3a/9d920/earth.jpg 3840w","sizes":"(max-width: 2800px) 100vw, 2800px"}}}}}')},kD9K:function(e,t,a){e.exports=a.p+"static/user1-dc7c51f98d395f38d7b70e2962cb5329.png"},oBNZ:function(e,t,a){"use strict";function r(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}function o(e,t){var a=t.left,r=t.right,o=t.up,l=t.down,n=t.top,s=t.bottom,i=t.big,c=t.mirror,d=t.opposite,u=(a?1:0)|(r?2:0)|(n||l?4:0)|(s||o?8:0)|(c?16:0)|(d?32:0)|(e?64:0)|(i?128:0);if(m.hasOwnProperty(u))return m[u];var x=a||r||o||l||n||s,p=void 0,f=void 0;if(x){if(!c!=!(e&&d)){var h=[r,a,s,n,l,o];a=h[0],r=h[1],n=h[2],s=h[3],o=h[4],l=h[5]}var g=i?"2000px":"100%";p=a?"-"+g:r?g:"0",f=l||n?"-"+g:o||s?g:"0"}return m[u]=(0,b.animation)((e?"to":"from")+" {"+(x?" transform: translate3d("+p+", "+f+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),m[u]}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.defaults,t=e.children,a=(e.out,e.forever),l=e.timeout,n=e.duration,s=void 0===n?b.defaults.duration:n,i=e.delay,d=void 0===i?b.defaults.delay:i,m=e.count,u=void 0===m?b.defaults.count:m,x=r(e,["children","out","forever","timeout","duration","delay","count"]),p={make:o,duration:void 0===l?s:l,delay:d,forever:a,count:u,style:{animationFillMode:"both"},reverse:x.left};return(0,c.default)(x,p,p,t)}a("HAE/"),a("nIY7"),a("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var n,s=a("17x9"),i=a("eH+L"),c=(n=i)&&n.__esModule?n:{default:n},b=a("ar19"),d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},m={};l.propTypes=d,t.default=l,e.exports=t.default},pU9V:function(e){e.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"aspectRatio":1.4989293361884368,"src":"/static/e6284f4a692a348fb674512f0220b915/1a900/paper.jpg","srcSet":"/static/e6284f4a692a348fb674512f0220b915/21302/paper.jpg 700w,\\n/static/e6284f4a692a348fb674512f0220b915/801b3/paper.jpg 1400w,\\n/static/e6284f4a692a348fb674512f0220b915/1a900/paper.jpg 1920w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}}')},yJcu:function(e,t,a){e.exports=a.p+"static/COVID1-52aab9efaa2c6d9d7649619b1f99cae3.png"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-ce06c1c4b8686c7f62be.js.map