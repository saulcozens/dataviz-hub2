(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{Dtc0:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return oe}));var l=a("q1tI"),r=a("Rb52"),o=a("NSxh"),s=a("dmsj"),n=a("Wbzz"),i=(a("f3/d"),a("KKXr"),a("ma3e")),c=a("wd/R"),b=a.n(c),d=a("/eHF"),m=a.n(d),u=a("qKvR"),x=function(e){var t=e.eventBrite,a=Object(l.useState)(b()().format("ddd DD MMMM YYYY, hh:mm A")),r=a[0],o=a[1];return Object(l.useEffect)((function(){o(b()().format("ddd DD MMMM YYYY, hh:mm A"))}),[]),Object(u.b)("div",{className:"bg-black w-full"},Object(u.b)(m.a,{duration:1e3},Object(u.b)("div",{id:"eventNotice",className:"w-full text-white text-gray-800 flex-col flex-wrap overflow-auto  bg-white"},t.edges.map((function(e){var t=e.node,a=t.description.text.split(" ").splice(0,15);return a=a.length<15?a.join(" "):a.join(" ").concat(" ..."),Object(u.b)("div",{key:t.id,className:"border-white border-t-4 border-l-6 border-r-6 border-b-8"},Object(u.b)("div",{className:"text-gray-700 text-sm w-full bg-white font-bold px-2 py-2"},"Today: ",r),Object(u.b)("a",{className:"flex flex-wrap w-full overflow-hidden max-h-80 md:max-h-25 xl:max-h-20 bg-white text-gray-700 group",style:{fontFamily:"TUoS Blake"},href:t.url,target:"_blank",rel:"noopener noreferrer"},Object(u.b)("img",{className:"w-full md:w-3/12 overflow-hidden self-center md:min-h-25 xl:min-h-15",src:t.logo.original.url,style:{objectFit:"cover",objectPosition:"center"}}),Object(u.b)("div",{className:"w-full md:w-9/12 py-1 px-4"},Object(u.b)("h1",{className:"inline-block font-semibold xl:text-xl"},Object(u.b)("p",{className:"text-highlight_2 text-2xl xl:text-4xl inline-block"},"NEXT")," event:  ",Object(u.b)("p",{className:"inline-block text-lg xl:text-2xl font-bold"},t.name.text?t.name.text:"No next event")),Object(u.b)("p",{className:"text-gray-500 hidden md:flex lg:flex xl:flex leading-tight text-sm xl:text-lg"},a),Object(u.b)("p",{className:"flex pt-2 group-hover:text-highlight_2 text-sm xl:text-lg"},Object(u.b)(i.d,{className:"mr-1"}),t.start.local),Object(u.b)("div",{className:"flex flex-wrap"},Object(u.b)("div",{className:"w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 text-sm xl:text-lg"},Object(u.b)("p",{className:"flex group-hover:text-highlight_2"},t.online_event&&Object(u.b)(i.f,{className:"mr-1 mt-1"})," ",t.online_event&&"Online Event"),Object(u.b)("p",{className:"flex group-hover:text-highlight_2"},t.venue&&Object(u.b)(i.f,{className:"mr-1 mt-1"}),t.venue&&t.venue.name&&t.venue.name+", ",t.venue&&t.venue.address.address_1&&t.venue.address.address_1+", ",t.venue&&t.venue.address.city&&t.venue.address.city+", ",t.venue&&t.venue.address.postal_code&&t.venue.address.postal_code)),Object(u.b)("div",{className:"flex flex-wrap w-full sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 content-center justify-center hidden-xs hidden-md"},Object(u.b)("button",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"hidden group-hover:flex shadow-sm -mt-4 py-1 px-3 text-md bg-gray-800 text-white hover:bg-highlight_2"},"Register"))))))})))))},f=a("M4XY"),p=a.n(f),h=a("VonM"),g=a("ZdGz"),v=a.n(g),j=a("qNCg"),y=a.n(j),O=a("sh/8"),w=a.n(O),N=a("uhbi"),k=a.n(N),S=a("iR2b"),C=a.n(S),_=function(e){var t=e.featuredPost;if(t&&t.edges)return Object(u.b)("div",{className:"w-full flex flex-wrap bg-black"},t.edges.map((function(e){var t,a=e.node;if(a.frontmatter&&a.frontmatter.thumbnail&&a.frontmatter.thumbnail.childImageSharp)t=a.frontmatter.thumbnail.childImageSharp.fluid.src;else{var l=[v.a,y.a,w.a,k.a,C.a];t=l[Math.floor(Math.random()*l.length)]}var r=a.frontmatter.description.split(" ").splice(0,20);r=r.length<20?r.join(" "):r.join(" ").concat(" ...");var o=a.frontmatter.title.split(" ").splice(0,11);return o=o.length<11?o.join(" "):o.join(" ").concat(" ..."),Object(u.b)(m.a,{key:a.id,duration:2e3,fraction:.3},Object(u.b)("div",{className:"w-full sm:w-1/2 min-h-100 pb-28 overflow-hidden bg-black relative leading-none text-gray-500 flex-grow"},Object(u.b)(n.Link,{className:"group",to:a.fields.slug},Object(u.b)("div",{className:"flex top-0 left-0 absolute ml-6 mt-6 text-gray-900 ipadp:text-gray-300 group-hover:bg-black items-center",style:{zIndex:"3"}},Object(u.b)(i.j,{className:"text-yellow-300 text-2xl"}),Object(u.b)("p",{className:"inline-block ipadp:opacity-0 group-hover:opacity-100 text-base font-semibold px-2",style:{fontFamily:"TUoS Blake",textShadow:"#000000 0px 0px 20px"}},"Featured")),Object(u.b)(h.i,{className:"ipadp:greyScale-100 group-hover:greyScale-0 min-h-3/5 max-h-3/5"},Object(u.b)(h.h,{style:{backgroundImage:"url("+t+")"}})),Object(u.b)(h.c,{className:"pt-6 px-8"},Object(u.b)("h1",{className:"font-bold text-2xl 2xl:text-3xl leading-tight text-gray-200 group-hover:text-highlight_2 overflow-y-hidden"},o),Object(u.b)("p",{className:"my-2 text-sm 2xl:text-lg leading-tight group-hover:text-gray-500"},r),Object(u.b)("p",{className:"my-2 text-xs 2xl:text-base pt-2 group-hover:text-gray-500"},a.frontmatter.author.map((function(e,t){return a.frontmatter.author.length==t+1?e.name:e.name+" · "}))),Object(u.b)("p",{className:"my-2 text-xs 2xl:text-base text-gray-500"},a.frontmatter.date," · ",a.fields.readingTime.text))),Object(u.b)("div",{className:"px-8 pt-6 pb-24 text-sm 2xl:text-sm"},a.frontmatter.category.map((function(e){return Object(u.b)(h.f,{key:e,to:"/blog/category/"+p()(e)},e)})),a.frontmatter.tag.map((function(e,t){return t<3&&Object(u.b)(h.j,{key:e,to:"/blog/tag/"+p()(e)},e)})),a.frontmatter.tag.length>3&&Object(u.b)(h.j,{to:a.fields.slug},"+",a.frontmatter.tag.length-3," more"))))})))},L=a("NIcq"),D=function(e){var t=e.latestPost;return Object(u.b)("div",{className:"w-full flex flex-wrap pt-6 bg-black"},t.edges.map((function(e){var t,a=e.node;if(a.frontmatter&&a.frontmatter.thumbnail&&a.frontmatter.thumbnail.childImageSharp)t=a.frontmatter.thumbnail.childImageSharp.fluid.src;else{var l=[v.a,y.a,w.a,k.a,C.a];t=l[Math.floor(Math.random()*l.length)]}var r=a.frontmatter.description.split(" ").splice(0,40);return r=r.length<40?r.join(" "):r.join(" ").concat(" ..."),Object(u.b)("div",{key:a.id,className:"group w-full relative z-20"},Object(u.b)(m.a,{key:a.id,duration:2e3,fraction:.3},Object(u.b)("div",{className:"flex flex-wrap w-full bg-black text-white border-t-1 first:border-t-0 border-gray-800 font-semibold hover:bg-white hover:text-black 2xl:text-xl"},Object(u.b)(n.Link,{to:a.fields.slug,className:"flex flex-wrap flex-col md:flex-row justify-between w-full hover:text-black px-6 py-4"},Object(u.b)("div",{className:"flex flex-wrap items-center"},Object(u.b)(L.b,{className:"text-red-700 ipadp:text-gray-300 group-hover:text-red-700 text-3xl"}),a.frontmatter.category.map((function(e){return Object(u.b)(h.f,{key:e,to:"/blog/category/"+p()(e),className:"rounded-sm py-0 my-0 mx-2 border-none bg-black text-black group-hover:bg-gray-400"},e)}))),Object(u.b)("div",{className:"inline-block"},a.frontmatter.title),Object(u.b)("div",{className:"inline-block"},a.frontmatter.date)))),Object(u.b)("div",{className:"hidden lg:block fixed left-0 top-0 opacity-0 group-hover:opacity-100 transform -translate-x-110% group-hover:translate-x-0 transition duration-500 shadow-xl",style:{width:"33.333333%"}},Object(u.b)("img",{src:t,className:"min-h-50 max-h-50 w-full"}),Object(u.b)("div",{className:"flex flex-col bg-white min-h-50 py-6 px-8"},Object(u.b)("p",{className:"text-sm text-gray-500 font-normal 2xl:text-lg"},a.frontmatter.author.map((function(e,t){return a.frontmatter.author.length==t+1?e.name:e.name+" · "})),"   |   ",a.fields.readingTime.text),Object(u.b)("p",{className:"mt-2 text-gray-500"},a.frontmatter.tag.map((function(e,t){return t<3&&Object(u.b)(h.j,{className:"text-xs py-0 mr-1 my-0",key:e,to:"/blog/tag/"+p()(e)},e)})),a.frontmatter.tag.length>3&&Object(u.b)(h.j,{className:"text-xs py-0 mx-1 my-0",to:a.fields.slug},"+",a.frontmatter.tag.length-3," more")),Object(u.b)("p",{className:"mt-4 2xl:text-2xl text-black"},r))))})))},R=a("hXnw"),A=a.n(R),M=a("29yR"),z=function(){var e="transform transition duration-300 ease-in-out",t=e+" w-4/5 lg:w-1/5 flex flex-wrap group justify-center mx-5 p-6 text-center mt-10 hover:-translate-y-1 shadow-xs hover:shadow-2xl rounded-lg",a=e+" group-hover:invisible translate-y-0 group-hover:-translate-y-40 opacity-100 group-hover:opacity-0",l=e+" fixed top-0 left-0 p-6 text-left group-hover:translate-y-0 translate-y-40 invisible group-hover:visible group-hover:opacity-100 opacity-0",r="mt-3 py-1 px-4 bg-black hover:bg-highlight_2";return Object(u.b)("div",{id:"learning_path",className:"ipadp:min-h-100 flex flex-wrap justify-center items-center relative pb-10",style:{backgroundColor:"#1d1d1d"}},Object(u.b)(m.a,null,Object(u.b)("div",{className:"container mx-auto justify-center flex flex-wrap text-center"},Object(u.b)("div",{className:"text-6xl font-bold text-white w-full leading-tight",style:{fontFamily:"TUoS Stephenson"}},"Learning paths."),Object(u.b)("p",{className:"mt-3 text-gray-100 px-2"},"Discover how to get the most out of statistics, visualisations and tool sets."))),Object(u.b)("div",{className:"flex flex-wrap text-gray-800 pt-10 pb-64 justify-center"},Object(u.b)(A.a,{bottom:!0,duration:700,delay:500},Object(u.b)("div",{className:t+" bg-gray-800 text-white"},Object(u.b)("div",{className:a},Object(u.b)(i.l,{className:"w-full text-4xl"}),Object(u.b)("div",{className:"text-xl mt-5 font-bold"},"Dataviz Concept"),Object(u.b)("div",{className:"text-sm mt-1"},"New to data visualisation and programming.")),Object(u.b)("div",{className:l},Object(u.b)("h1",{className:"font-bold"},"Concept"),Object(u.b)("p",{className:"text-sm"},"Explore data visualisations through definitions, examples, videos, and relevant resources."),Object(u.b)(h.e,{className:r},"Underway")))),Object(u.b)(A.a,{bottom:!0,duration:700,delay:750},Object(u.b)("div",{className:t+" bg-blue-700 text-white"},Object(u.b)("div",{className:a},Object(u.b)("div",{className:"flex flex-wrap justify-around text-4xl w-full"},Object(u.b)("div",null,Object(u.b)(i.g,null)),Object(u.b)("div",null,Object(u.b)(i.h,null))),Object(u.b)("h1",{className:"text-xl mt-5 font-bold"},"Dataviz Lab"),Object(u.b)("p",{className:"text-sm mt-1"},"Knowledge of programming languages Python / R.")),Object(u.b)("div",{className:l},Object(u.b)("h1",{className:"font-bold"},"Practice"),Object(u.b)("p",{className:"text-sm"},"Step by step tutorials on create data visualisations using different tools and languages."),Object(u.b)(h.e,{className:r},"Underway")))),Object(u.b)(A.a,{bottom:!0,duration:700,delay:750},Object(u.b)("div",{className:t+" bg-white"},Object(u.b)("div",{className:a},Object(u.b)(M.a,{className:"w-full text-4xl"}),Object(u.b)("h1",{className:"text-xl mt-5 font-bold"},"Dataviz workflows"),Object(u.b)("p",{className:"text-sm mt-1"},"Experienced in producing data visualisations.")),Object(u.b)("div",{className:l},Object(u.b)("h1",{className:"font-bold"},"Dataviz workflows"),Object(u.b)("p",{className:"text-sm"},"Maximise your research impact through reproducible data visualisation workflows."),Object(u.b)(h.e,{className:r},"Coming soon")))),Object(u.b)("h1",{className:"w-full text-white text-center mt-10 px-2"},"We are working on it, why not share your suggestions on our ",Object(u.b)("a",{className:"text-gray-200 hover:text-highlight_2 a-inline",href:"https://join.slack.com/t/shef-dataviz/signup",target:"_blank",rel:"noopener noreferrer"},"slack channel"),".")),Object(u.b)("div",{className:"w-full absolute bottom-0 -mb-1"},Object(u.b)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},Object(u.b)("path",{fill:"#ffffff",fillOpacity:"1",d:"M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,181.3C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"}))))},B=a("v7au"),T=a("cpGi"),I=function(){var e="w-4/5 md:w-1/3 ipadp:w-1/5 mx-5 p-3 2xl:p-12 mt-10 transform hover:-translate-y-3 transition duration-500 group",t="text-sm border-t-1 border-gray-300 py-3 text-gray-600 group-hover:text-gray-900";return Object(u.b)("div",{id:"home_community",className:"ipadp:min-h-100 flex flex-wrap justify-center items-center relative pb-20"},Object(u.b)(m.a,null,Object(u.b)("div",{className:"container mx-auto justify-center flex flex-wrap"},Object(u.b)("div",{className:"text-2xl lg:text-5xl font-bold text-gray-900 w-full text-center"},Object(u.b)("h1",{style:{background:"linear-gradient(to right, #30CFD0 0%, #330867 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontFamily:"TUoS Stephenson"}},"YOUR COMMUNITY.")),Object(u.b)(n.Link,{to:"/community",className:"mt-1 text-med text-gray-500 hover:underline"},"Learn more ",Object(u.b)(L.c,{className:"inline-block"})))),Object(u.b)("div",{className:"flex flex-wrap text-gray-700 pt-10 pb-20 justify-center"},Object(u.b)("div",{className:e},Object(u.b)(A.a,{bottom:!0,duration:700,delay:500},Object(u.b)(B.b,{className:"text-3xl group-hover:text-red-700"}),Object(u.b)("p",{className:"font-bold py-3"},"Events"),Object(u.b)("div",{className:t},"Discover a variety of events including talks and symposia, workshops, vis-coding clubs and data visualisation hackathons!"),Object(u.b)(n.Link,{to:"/events"},Object(u.b)(h.e,{className:"rounded-full text-sm group-hover:bg-red-700",type:"BlackButton"},"Upcoming events")))),Object(u.b)("div",{className:e},Object(u.b)(A.a,{bottom:!0,duration:700,delay:750},Object(u.b)(B.a,{className:"text-3xl group-hover:text-highlight_2"}),Object(u.b)("p",{className:"font-bold py-3"},"Training"),Object(u.b)("div",{className:t},"Discover different training courses organised by the dedicated dataviz team to help you make the most of your data."),Object(u.b)(h.e,{className:"rounded-full text-sm group-hover:bg-highlight_2",type:"BlackButton","data-tip":"","data-for":"ReactTooltip1"},"Coming soon"))),Object(u.b)("div",{className:e},Object(u.b)(A.a,{bottom:!0,duration:700,delay:1e3},Object(u.b)(L.d,{className:"text-3xl group-hover:text-green-500"}),Object(u.b)("p",{className:"font-bold py-3"},"Support"),Object(u.b)("div",{className:t},"Get in touch with us. It is natural that you have found something diffcult to understand or need more specific guidance and direction."),Object(u.b)(h.e,{className:"rounded-full text-sm group-hover:bg-green-500",type:"BlackButton","data-tip":"","data-for":"ReactTooltip1"},"Coming soon"),Object(u.b)(T.a,{id:"ReactTooltip1",delayShow:500,delayHide:1e3,effect:"float"},"Why not join our slack channel and get live updates?"))),Object(u.b)("div",{className:e},Object(u.b)(A.a,{bottom:!0,duration:700,delay:1250},Object(u.b)("div",null,Object(u.b)(B.d,{className:"text-3xl group-hover:text-yellow-600"}),Object(u.b)("p",{className:"font-bold py-3"},"Contribution"),Object(u.b)("div",{className:t},"We love to see people actively sharing their thought and creativity. We have prepared a tutorial for you to upload your own blog posts.")),Object(u.b)("a",{href:"https://github.com/researchdata-sheffield/dataviz-hub2/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"},Object(u.b)(h.e,{className:"rounded-full text-sm group-hover:bg-yellow-600",type:"BlackButton"},"Our repository"))))))},E=a("fiGh"),P=a("1eu9"),U=a.n(P),q=function(e){var t=e.className,a=e.children;return Object(u.b)(n.StaticQuery,{query:"1404961848",render:function(e){var l=e.desktop.childImageSharp.fluid;return Object(u.b)(U.a,{className:t,fluid:l,style:{backgroundSize:"cover",backgroundAttachment:"fixed",width:"100%"}},Object(u.b)("div",null,a))},data:E})},F=a("kD9K"),W=a.n(F),Y=a("dQDb"),H=a.n(Y),G=function(){return Object(u.b)("div",{className:"relative overflow-hidden bg-black w-full"},Object(u.b)("h1",{className:"absolute left-0 text-white text-2xl font-semibold transform -rotate-90 -ml-20 mt-60"},"ORDA.SHEF.AC.UK"),Object(u.b)("div",{id:"home_showcase"}),Object(u.b)(q,{className:"ipadp:min-h-40 flex flex-wrap items-center justify-end py-5 transform hover:translate-x-12 transition duration-500"},Object(u.b)("div",{className:"flex flex-wrap justify-start"},Object(u.b)("div",{className:"lg:w-1/2 py-24 flex flex-wrap px-3 ipadp:pr-20 ipadp:pl-10"},Object(u.b)(m.a,{duration:1300,right:!0},Object(u.b)("div",{className:"text-5xl 2xl:text-6xl font-semibold text-white",style:{textShadow:"#000000 0px 0px 0px",fontFamily:"TUoS Stephenson"}},"SHOWCASE"),Object(u.b)("div",{className:"2xl:text-lg my-4 text-white font-semibold",style:{textShadow:"#8d8d8d 0px 0px 3px"}},"ORDA (Online Research Data) is the University of Sheffield's hub for sharing data, code, and other non-traditional research artefacts. ORDA includes a showcase of visual representations of data built by staff and students at the University of Sheffield."),Object(u.b)("a",{className:"mt-8",href:"https://orda.shef.ac.uk/visualisations",target:"_blank",rel:"noopener noreferrer"},Object(u.b)(h.e,{external:!0,type:"GreyButton"},"Discover")))))),Object(u.b)("div",{className:"ipadp:min-h-40 flex flex-wrap pt-8 ipadp:pt-24 pb-64 items-center justify-center",style:{background:"#fcfcfc"}},Object(u.b)("div",{className:"md:w-6/12 px-3 md:pl-8 transform hover:scale-110 transition duration-500"},Object(u.b)(H.a,{delay:2200},Object(u.b)("img",{src:W.a,className:"max-h-50"}))),Object(u.b)(A.a,{cascade:!0,duration:1300},Object(u.b)("div",{className:"md:w-5/12 px-3 lg:px-5 2xl:px-24 flex flex-wrap justify-center"},Object(u.b)("h1",{className:"text-2xl ipadp:text-4xl text-gray-700 text-center py-5",style:{fontFamily:"TUoS Stephenson"}},"ORDA User Regions"),Object(u.b)("p",{className:"text- gray-600"},"ORDA has welcomed visitors from over 148 countries and regions worldwide, providing a research data repository for storing and publishing research data in the long term, and enabled university research data to be preseved, discovered, and accessed."),Object(u.b)("a",{className:"mt-8",href:"https://orda.shef.ac.uk",target:"_blank",rel:"noopener noreferrer"},Object(u.b)(h.e,{external:!0,className:"hover:bg-white hover:shadow-2xl hover:text-highlight_2 transition duration-500 ease-in-out"},"Go to ORDA"))))),Object(u.b)("div",{className:"w-full absolute bottom-0 -mb-1"},Object(u.b)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},Object(u.b)("path",{fill:"#fff",fillOpacity:"1",d:"M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,181.3C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"}))))},K=(a("a1Th"),a("rE2o"),a("ioFf"),a("Z2Ku"),a("L9s1"),a("T39b"),a("XfO3"),a("HEwt"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("OG14"),a("Tgqd")),V=a("WG1l"),X=a.n(V);function Z(e){return function(e){if(Array.isArray(e))return J(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return J(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return J(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}var Q=function(e){var t,a;function l(){for(var t,a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=e.call.apply(e,[this].concat(l))||this).state={query:"",results:[]},t.search=function(e){var a=e.target.value;if(t.state.query.length>-1){var l=t.getSearchResults(a);t.setState({results:l,query:a})}else t.setState({results:[],query:a})},t}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=l.prototype;return r.render=function(){var e=this;return Object(u.b)("div",{className:this.props.classNames+" mt-16 2xl:mt-20 relative text-gray-700 w-full text-center"},Object(u.b)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white p-3 rounded-lg",style:{boxShadow:"#4e4e4e 0px 5px 20px -16px"}},Object(u.b)(K.a,{className:"inline-block text-center text-3xl -mt-1"}),Object(u.b)("input",{id:"homeSearch",onChange:this.search,onInput:this.search,autoComplete:"off",className:"search__input py-1 pl-4 text-lg focus:outline-none pr-5 text-gray-700",style:{minWidth:"21vw"},type:"text",name:"search",placeholder:"What are you looking for?"})),Object(u.b)("div",{className:"search__list"},Object(u.b)((function(){return e.state.results.length>0&&e.state.query.length>0?Object(u.b)("div",{className:"z-30 text-left overflow-auto max-h-50 xl:max-h-55 mx-auto ipadp:max-w-25 2xl:max-w-30 border-1 border-gray-200 shadow-2xl noScrollBar"},e.state.results.slice(0,5).map((function(t,a){var l=t.description.split(" ").splice(0,28);return l=l.length<28?l.join(" "):l.join(" ").concat(" ..."),Object(u.b)("div",{className:"text-gray-800 group border-b-1 border-gray-200 hover:bg-gray-200",key:a},Object(u.b)("a",{href:""+t.url,target:"_blank",rel:"noopener noreferrer"},Object(u.b)("div",{className:"flex self-center items-center justify-end"},Object(u.b)("div",{className:"w-full"},Object(u.b)("h1",{className:"font-bold text-sm xl:text-lg w-full px-3 py-3 text-gray-900"},Object(u.b)(X.a,{highlightClassName:"text-blue-500 bg-transparent",textToHighlight:t.title,searchWords:e.state.query.split()}))))))})),e.state.results.length>6?Object(u.b)("div",{className:"text-center py-2 bg-gray-800 text-white font-semibold hover:bg-white hover:text-highlight_2 border-t-1 cursor-pointer",onClick:function(){Object(n.navigate)("/search",{state:{searchWord:e.state.query}})}},e.state.results.length-6," more results"):Object(u.b)("div",{className:"text-center py-2 bg-gray-800 text-white font-semibold border-t-1"},"End of results")):e.state.query.length>0?"No results for "+e.state.query:""}),null)))},r.getSearchResults=function(e){var t=window.__FLEXSEARCH__.en.index,a=window.__FLEXSEARCH__.en.store;if(e&&t){var l=[];return Object.keys(t).forEach((function(a){var r;(r=l).push.apply(r,Z(t[a].values.search(e)))})),l=Array.from(new Set(l)),a.filter((function(e){return l.includes(e.id)?e:null})).map((function(e){return e.node}))}return[]},l}(l.Component),$=a("oBNZ"),ee=a.n($),te=a("yJcu"),ae=a.n(te),le=a("SCSq"),re=a.n(le),oe=(t.default=function(e){var t=e.data,a=t.featuredPost,i=t.latestPost,c=t.eventBrite,d=b()(),f=["Colour","What are you looking for?","blog post","Dash","dataset","Shiny","Chart","visualisation","Python","DD/MM/YYYY"];return Object(l.useEffect)((function(){var e=document.getElementById("homeSearch"),t=setInterval((function(){if(b()()-d>6e3){d=b()();var t=Math.floor(Math.random()*f.length);e.setAttribute("placeholder",f[t])}}),5e3);return function(){clearInterval(t)}}),[f]),Object(u.b)("div",{className:"bg-white"},Object(u.b)(s.a,{title:"Home",keywords:["the university of sheffield","data visualisation","data visualisation hub","research"]}),Object(u.b)(r.a,null),Object(u.b)("div",null,Object(u.b)("div",{className:"flex flex-wrap relative"},Object(u.b)("div",{id:"homeBar",className:"shadow-lg z-10 sm:sticky sm:top-0 sm:left-0 flex flex-wrap w-full lg:w-4/12 text-gray-800 overflow-hidden lg:min-h-100 lg:max-h-100 justify-center",style:{transition:".4s ease",background:"rgba(255,255,255, 1)",zIndex:"1"}},Object(u.b)("div",{className:"px-8 text-center pt-28 ipadp:pt-10vh font-sans"},Object(u.b)("p",{className:"text-gray-800 text-lg ipadp:text-3xl 2xl:text-4xl font-bold"},"Data Visualisation Hub"),Object(u.b)("p",{className:"text-gray-700 text-base 2xl:text-lg mt-2 px-6 xl:px-12"},"Building community around data visualisation at the University of Sheffield.")),Object(u.b)(Q,null),Object(u.b)(ee.a,{left:!0},Object(u.b)("div",{className:"hidden md:flex justify-center py-4 xl:py-8 z-10 w-full"},Object(u.b)("div",{className:"w-1/7 mr-24"},Object(u.b)("div",{className:"mb-1 text-gray-800 font-semibold text-xs xl:text-base 2xl:text-lg"},"Dataviz.Shef"),Object(u.b)("ul",{className:"list-reset leading-normal text-xs xl:text-sm 2xl:text-base"},Object(u.b)("li",null,Object(u.b)(n.Link,{className:"text-gray-700 hover:underline",to:"/#explore","data-tip":"#Data and visualisation"},"Data visualisation")),Object(u.b)("li",null,Object(u.b)(n.Link,{className:"text-gray-700 hover:underline",to:"/#learning_path","data-tip":"Coming soon"},"Learning path")),Object(u.b)("li",null,Object(u.b)(n.Link,{className:"text-gray-700 hover:underline",to:"/#home_community","data-tip":"#Community"},"Community")),Object(u.b)("li",null,Object(u.b)(n.Link,{className:"text-gray-700 hover:underline",to:"/#home_showcase","data-tip":"#Showcase"},"Showcase")),Object(u.b)("li",null,Object(u.b)(n.Link,{className:"text-gray-700 hover:underline",to:"/#collaboration","data-tip":"Coming soon"},"Collaboration")),Object(u.b)(T.a,null))),Object(u.b)("div",{className:"w-1/7"},Object(u.b)("div",{className:"mb-1 text-gray-800 font-semibold text-xs xl:text-base 2xl:text-lg"},"Trending searches"),Object(u.b)("ul",{className:"list-reset leading-normal text-xs xl:text-sm 2xl:text-base"},Object(u.b)("li",null,Object(u.b)("a",{className:"text-gray-700 hover:underline",onClick:function(){Object(n.navigate)("/search",{state:{searchWord:"Chart"}})}},"Chart")),Object(u.b)("li",null,Object(u.b)("a",{className:"text-gray-700 hover:underline",onClick:function(){Object(n.navigate)("/search",{state:{searchWord:"Colour"}})}},"Colour")),Object(u.b)("li",null,Object(u.b)("a",{className:"text-gray-700 hover:underline",onClick:function(){Object(n.navigate)("/search",{state:{searchWord:"Python"}})}},"Python")),Object(u.b)("li",null,Object(u.b)("a",{className:"text-gray-700 hover:underline",onClick:function(){Object(n.navigate)("/search",{state:{searchWord:"Statistics"}})}},"Statistics")))))),Object(u.b)(n.Link,{to:"#explore"},Object(u.b)(m.a,{bottom:!0,delay:700},Object(u.b)(h.d,{className:"py-2 px-10",link:!0},"Get Started"))),Object(u.b)("div",{className:"flex text-xs text-gray-500 mt-12 xl:mt-28 2xl:mt-32 mb-1 mx-auto justify-center w-full"})),Object(u.b)("div",{className:"flex flex-wrap text-gray-100 lg:w-8/12",style:{marginLeft:"auto",transition:".5s ease"}},"  ",Object(u.b)("div",{className:"min-h-100 justify-center relative w-full ",style:{transition:".6s ease"}},Object(u.b)("div",{className:"flex flex-col flex-wrap min-h-100 justify-center text-center items-center greyScale-100 hover:greyScale-0",style:{transition:".8s ease",backgroundImage:"url("+ae.a+")",backgroundSize:"cover",backgroundPosition:"center"}},Object(u.b)("h1",{className:"px-5 ipadp:px-24 text-3xl 2xl:text-5xl font-bold py-2",style:{textShadow:"#000 0 0 10px",backgroundColor:"rgba(0,0,0, 0.6)"}},"CoVid Plots and Analysis",Object(u.b)("p",{className:"text-lg font-normal"},"by Colin Angus at ScHARR, University of Sheffield")),Object(u.b)("div",{className:"mt-10"},Object(u.b)("a",{href:"https://figshare.shef.ac.uk/articles/CoVid_Plots_and_Analysis/12328226",target:"_blank",rel:"noopener noreferrer"},Object(u.b)(h.a,{external:!0,className:"rounded-full"},"Data Repository")),Object(u.b)(n.Link,{className:"ml-8 inline-block",to:"/blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality"},Object(u.b)(h.a,{className:"mt-0 rounded-full"},"Blog post")))),Object(u.b)(n.Link,{to:"#eventNotice"},Object(u.b)("div",{id:"scrollDown-btn",className:"hidden md:block absolute bottom-0 left-0 mb-8 text-center cursor-pointer group pt-14",style:{left:"45%",right:"45%"}},Object(u.b)("span",{style:{marginLeft:"-7px",width:"18px",height:"18px"}}),Object(u.b)("p",{className:"text-black font-bold text-center",style:{textShadow:"#fff 0px 0px 10px"}}," Scroll")))),Object(u.b)(x,{eventBrite:c}),Object(u.b)(_,{featuredPost:a}),Object(u.b)(D,{latestPost:i}),Object(u.b)("div",{className:"flex flex-wrap w-full bg-white py-10 px-3 shadow-lg justify-center items-center self-center relative z-20",style:{transition:".3s ease"}},Object(u.b)("div",{className:"text-gray-800 mr-10"},"Discover a range of articles and posts at our blog."),Object(u.b)(n.Link,{to:"/blog"},Object(u.b)(h.g,{className:"hover:bg-gray-900 px-5 py-2  hover:text-gray-100 text-black bg-gray-100 mt-0 border-gray-900 border-1"},"Read more")))))),Object(u.b)("div",{id:"explore"}),Object(u.b)("div",{className:"ipadp:min-h-120 flex flex-wrap items-center text-left relative ",style:{backgroundImage:"url("+re.a+")",backgroundPosition:"center",backgroundSize:"cover"}},Object(u.b)(m.a,{cascade:!0,delay:200,duration:1500},Object(u.b)("div",{className:"px-3 md:px-24 xl:px-36 2xl:px-52 mt-48 mb-72"},Object(u.b)("div",{className:"text-white"},Object(u.b)("h1",{className:"text-5xl 2xl:text-6xl font-semibold",style:{textShadow:"#000 0px 0px 4px",fontFamily:"TUoS Stephenson"}},"Data and visualisation"),Object(u.b)("p",{className:"text-base 2xl:text-xl my-4 text-gray-100 font-semibold md:w-3/5",style:{textShadow:"#000000 0px 2px 5px"}},"Data visualisation is currently an extremely active and critical aspect in research, teaching, and development. The main purpose of data visualisation is to communicate information clearly and effectively by means of graphical representation. However, this does not mean that data visualisation must be boring for its functional purpose, or extremely complicated ...")),Object(u.b)(n.Link,{to:"/blog/22/03/2020/datavizhub_guide"},Object(u.b)(h.e,{type:"GreyButton"},"Read more")))),Object(u.b)("div",{className:"w-full absolute bottom-0 -mb-1"},Object(u.b)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},Object(u.b)("path",{fill:"#1d1d1d",fillOpacity:"1",d:"M0,128L48,128C96,128,192,128,288,138.7C384,149,480,171,576,181.3C672,192,768,192,864,186.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})))),Object(u.b)(z,null),Object(u.b)(I,null),Object(u.b)(G,null),Object(u.b)("div",{id:"collaboration",className:"container mx-auto min-h-40 flex flex-wrap pb-20 justify-center"},Object(u.b)("h1",{className:"text-3xl ipadp:text-4xl 2xl:text-5xl font-semibold text-gray-800 text-center py-5 w-full",style:{fontFamily:"TUoS Stephenson"}},"Collaboration and Partnership."),Object(u.b)("p",{className:"text-gray-500"},"Further details to come.")),Object(u.b)(o.a,null))},"1399476852")},SCSq:function(e,t,a){e.exports=a.p+"static/earth-76d2f3fe9fe8b243615b08363c395d3d.jpg"},fiGh:function(e){e.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"aspectRatio":1.7766497461928934,"src":"/static/02beed7ac46f390d93fba01e5ea4a1c1/cd873/dataviz.jpg","srcSet":"/static/02beed7ac46f390d93fba01e5ea4a1c1/21302/dataviz.jpg 700w,\\n/static/02beed7ac46f390d93fba01e5ea4a1c1/801b3/dataviz.jpg 1400w,\\n/static/02beed7ac46f390d93fba01e5ea4a1c1/cd873/dataviz.jpg 2080w","sizes":"(max-width: 2080px) 100vw, 2080px"}}}}}')},kD9K:function(e,t,a){e.exports=a.p+"static/user1-dc7c51f98d395f38d7b70e2962cb5329.png"},oBNZ:function(e,t,a){"use strict";function l(e,t){var a={};for(var l in e)t.indexOf(l)>=0||Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l]);return a}function r(e,t){var a=t.left,l=t.right,r=t.up,o=t.down,s=t.top,n=t.bottom,i=t.big,c=t.mirror,d=t.opposite,u=(a?1:0)|(l?2:0)|(s||o?4:0)|(n||r?8:0)|(c?16:0)|(d?32:0)|(e?64:0)|(i?128:0);if(m.hasOwnProperty(u))return m[u];var x=a||l||r||o||s||n,f=void 0,p=void 0;if(x){if(!c!=!(e&&d)){var h=[l,a,n,s,o,r];a=h[0],l=h[1],s=h[2],n=h[3],r=h[4],o=h[5]}var g=i?"2000px":"100%";f=a?"-"+g:l?g:"0",p=o||s?"-"+g:r||n?g:"0"}return m[u]=(0,b.animation)((e?"to":"from")+" {"+(x?" transform: translate3d("+f+", "+p+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),m[u]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b.defaults,t=e.children,a=(e.out,e.forever),o=e.timeout,s=e.duration,n=void 0===s?b.defaults.duration:s,i=e.delay,d=void 0===i?b.defaults.delay:i,m=e.count,u=void 0===m?b.defaults.count:m,x=l(e,["children","out","forever","timeout","duration","delay","count"]),f={make:r,duration:void 0===o?n:o,delay:d,forever:a,count:u,style:{animationFillMode:"both"},reverse:x.left};return(0,c.default)(x,f,f,t)}a("HAE/"),a("nIY7"),a("V+eJ"),Object.defineProperty(t,"__esModule",{value:!0});var s,n=a("17x9"),i=a("eH+L"),c=(s=i)&&s.__esModule?s:{default:s},b=a("ar19"),d={out:n.bool,left:n.bool,right:n.bool,top:n.bool,bottom:n.bool,big:n.bool,mirror:n.bool,opposite:n.bool,duration:n.number,timeout:n.number,delay:n.number,count:n.number,forever:n.bool},m={};o.propTypes=d,t.default=o,e.exports=t.default},yJcu:function(e,t,a){e.exports=a.p+"static/COVID1-52aab9efaa2c6d9d7649619b1f99cae3.png"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-73e01deb1526dca9a614.js.map