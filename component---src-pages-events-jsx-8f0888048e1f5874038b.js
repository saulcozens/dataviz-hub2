(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"4fMs":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return v}));var r=a("q1tI"),l=a.n(r),s=a("dmsj"),n=a("Rb52"),c=a("NSxh"),d=a("aVga"),o=a("Wbzz"),b=a("1eu9"),i=a.n(b),m=a("qKvR"),f=function(e){var t=e.className,a=e.children;return Object(m.b)(o.StaticQuery,{query:"738643199",render:function(e){var r=e.desktop.childImageSharp.fluid;return Object(m.b)(i.a,{className:t,fluid:r,style:{backgroundAttachment:"fixed"}},a)},data:d})},u=(a("f3/d"),a("ma3e")),g=function(e){var t=e.allEventbriteEvents,a=0;return t&&t.edges.legnth>0?Object(m.b)(l.a.Fragment,null,t.edges.map((function(e){var t=e.node;if(a<4){a+=1;var r=t.description.text;return r.length>=130&&(r=r.substring(0,130).concat(" ...")),Object(m.b)("a",{className:"flex flex-wrap w-full overflow-y-hidden max-h-80 md:max-h-25 xl:max-h-20 shadow-lg hover:shadow-2xl bg-white my-1 text-gray-700 group border-solid ",style:{fontFamily:"TUoS Blake",transition:".5s ease"},href:t.url,key:t.id,target:"_blank",rel:"noopener noreferrer"},Object(m.b)("img",{className:"w-full md:w-3/12 overflow-hidden self-center md:min-h-25 xl:min-h-15",src:t.logo.original.url,style:{objectFit:"cover",objectPosition:"center"}}),Object(m.b)("div",{className:"w-full md:w-9/12 py-4 px-4"},Object(m.b)("p",{className:"font-semibold text-lg text-gray-900 group-hover:text-highlight_2"},t.name.text),Object(m.b)("p",{className:"text-gray-500 hidden md:flex lg:flex xl:flex leading-tight text-sm"},r),Object(m.b)("p",{className:"flex pt-4 text-sm"},Object(m.b)(u.d,{className:"mr-1"}),t.start.local),Object(m.b)("div",{className:"flex flex-wrap"},Object(m.b)("div",{className:"w-full sm:w-full md:w-5/6 lg:w-5/6 xl:w-5/6 text-sm"},Object(m.b)("p",{className:"flex"},t.online_event&&Object(m.b)(u.f,{className:"mr-1 mt-1"})," ",t.online_event&&"Online Event"),Object(m.b)("p",{className:"flex"},t.venue&&Object(m.b)(u.f,{className:"mr-1 mt-1"}),t.venue&&t.venue.name&&t.venue.name+", ",t.venue&&t.venue.address.address_1&&t.venue.address.address_1+", ",t.venue&&t.venue.address.city&&t.venue.address.city+", ",t.venue&&t.venue.address.postal_code&&t.venue.address.postal_code)),Object(m.b)("div",{className:"flex flex-wrap w-full sm:w-full md:w-1/6 lg:w-1/6 xl:w-1/6 content-center justify-center"},Object(m.b)("button",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:"hidden group-hover:flex shadow-sm -mt-4 py-1 px-3 text-md bg-gray-800 text-white hover:bg-highlight_2"},"Register")))))}}))):Object(m.b)("div",{className:"mt-16 text-blue-800"},"No upcoming events can be found, please come back later.")},h=function(e){var t=e.pastEvent;return Object(m.b)("div",{className:"w-full sm:w-full md:w-full lg:w-3/12 xl:w-3/12 2xl:w-2/12 text-gray-100 px-6 lg:mt-16 pb-16 lg:py-6 border-t-4 border-gray-800 min-h-50",style:{background:"rgba(0,0,0,.6)"}},Object(m.b)("h1",{className:"text-xl pt-2 pb-6 font-semibold"},"Past Events"),t.edges.map((function(e){var t=e.node,a=t.frontmatter.description?t.frontmatter.description:"";return a.length>=85&&(a=a.substring(0,85).concat(" ...")),Object(m.b)("div",{className:"flex flex-wrap transition duration-500 p-3 w-full overflow-auto shadow-md hover:shadow-xl bg-white group border-t-2 border-solid border-r-8 border-gray-700 hover:border-r-8 hover:border-highlight_2",key:t.id},Object(m.b)(o.Link,{to:t.fields.slug},Object(m.b)("p",{style:{fontFamily:"TUoS Stephenson"},className:"font-bold text-sm text-black"},t.frontmatter.title),Object(m.b)("p",{className:"text-gray-700 hidden md:flex text-sm leading-4"},a),Object(m.b)("p",{className:"mt-2 text-sm text-black"},t.frontmatter.date)))})))},x=a("wd/R"),p=a.n(x),v=(t.default=function(e){var t=e.data,a=t.eventBrite,d=t.pastEvent,o=Object(r.useState)(p()().format("ddd DD MMMM YYYY, hh:mm A")),b=o[0],i=o[1];return Object(r.useEffect)((function(){i(p()().format("ddd DD MMMM YYYY, hh:mm A"))}),[]),Object(m.b)(l.a.Fragment,null,Object(m.b)(s.a,{title:"Events",keywords:["the university of sheffield","data visualisation","data visualisation hub","research","dataviz events","dataviz.shef"]}),Object(m.b)(n.a,null),Object(m.b)(f,{className:"flex flex-wrap flex-grow-0 items-center justify-center content-center min-h-100"},Object(m.b)("div",{className:"w-full lg:w-8/12 px-12 lg:pt-6 pt-16 text-black lg:my-24 pb-16 overflow-auto border-t-8 border-red-700 min-h-70",style:{background:"rgba(255,255,255,.95)"}},Object(m.b)("h1",{className:"inline-block text-2xl font-semibold"},"Upcoming Events"),Object(m.b)("div",{className:"text-gray-900 mb-8"},"Today: ",b),Object(m.b)(g,{allEventbriteEvents:a})),Object(m.b)(h,{pastEvent:d})),Object(m.b)(c.a,null))},"314654684")},aVga:function(e){e.exports=JSON.parse('{"data":{"desktop":{"childImageSharp":{"fluid":{"aspectRatio":1.3333333333333333,"src":"/static/48da9e4fe0f5ea7a532420147131e5e3/b1e91/chair.jpg","srcSet":"/static/48da9e4fe0f5ea7a532420147131e5e3/ce222/chair.jpg 480w,\\n/static/48da9e4fe0f5ea7a532420147131e5e3/39fae/chair.jpg 960w,\\n/static/48da9e4fe0f5ea7a532420147131e5e3/b1e91/chair.jpg 1920w","sizes":"(max-width: 1920px) 100vw, 1920px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-events-jsx-8f0888048e1f5874038b.js.map