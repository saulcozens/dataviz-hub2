(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{F2w4:function(t,e,a){t.exports=a.p+"static/bg-d2e315389be310ad1df988334939fa79.jpg"},Muxj:function(t,e,a){"use strict";a.r(e);var r=a("q1tI"),n=a.n(r),i=a("dmsj"),c=a("Rb52"),o=a("NSxh"),l=(a("f3/d"),a("a1Th"),a("rE2o"),a("ioFf"),a("Z2Ku"),a("L9s1"),a("T39b"),a("XfO3"),a("HEwt"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("KKXr"),a("OG14"),a("lGYE")),s=a("Tgqd"),d=a("WG1l"),b=a.n(d),u=a("ZdGz"),h=a.n(u),f=a("qNCg"),g=a.n(f),m=a("sh/8"),p=a.n(m),y=a("uhbi"),x=a.n(y),v=a("iR2b"),j=a.n(v),S=a("hXnw"),O=a.n(S),w=a("/eHF"),N=a.n(w),I=a("F2w4"),q=a.n(I),_=a("qKvR");function k(t){return function(t){if(Array.isArray(t))return T(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return T(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return T(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var C=function(t){var e,a;function r(){for(var e,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).state={query:"",results:[]},e.componentDidMount=function(){setTimeout((function(){if(void 0!==e.props.location.state.searchWord){var t=e.props.location.state.searchWord,a=document.getElementById("pageSearch");e.setState({query:t}),a.setAttribute("value",t),e.searchFromHome(t)}}),100)},e.search=function(t){var a=t.target.value;if(e.state.query.length>-1){var r=e.getSearchResults(a);e.setState({results:r,query:a})}else e.setState({results:[],query:a})},e.searchFromHome=function(t){var a=t;if(e.state.query.length>-1){var r=e.getSearchResults(a);e.setState({results:r,query:a})}else e.setState({results:[],query:a})},e}a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var n=r.prototype;return n.render=function(){var t=this;return Object(_.b)("div",{className:this.props.classNames+" relative text-gray-700 w-full text-center"},Object(_.b)("div",{className:"min-h-90 pt-40 pb-10",style:{backgroundImage:"url("+q.a+")",backgroundSize:"cover",width:"100%"}},Object(_.b)(O.a,{top:!0,duration:1e3,cascade:!0},Object(_.b)("p",{className:"text-2xl xl:text-3xl text-white mb-3 font-semibold"},"Search@dataviz.shef")),Object(_.b)(N.a,{bottom:!0,duration:1500},Object(_.b)("div",{className:"inline-block focus:outline-none text-gray-600 bg-white shadow p-3 rounded-lg"},Object(_.b)(s.a,{className:"inline-block text-center text-3xl -mt-1"}),Object(_.b)("input",{id:"pageSearch",onChange:this.search,onInput:this.search,autoComplete:"off",className:"search__input py-0 pl-4 text-lg focus:outline-none pr-5 text-gray-600",style:{minWidth:"25vw"},type:"text",name:"search",placeholder:"Title, description, date..."})))),Object(_.b)("div",{className:"search__list bg-gray-100"},Object(_.b)((function(){if(t.state.results.length>0&&t.state.query.length>0){var e=l.data;return Object(_.b)("div",null,Object(_.b)("div",{className:"bg-orange-700 text-gray-100 py-2"},"Found ",t.state.results.length," results for you."),Object(_.b)("div",{className:"flex flex-wrap py-10 xl:pt-32 xl:pb-64 justify-center bg-gray-100"},t.state.results.map((function(a,r){var n;e.allMdx.edges.map((function(t){var e=t.node;if(a.id==e.id)if(e.frontmatter&&e.frontmatter.thumbnail&&e.frontmatter.thumbnail.childImageSharp)n=e.frontmatter.thumbnail.childImageSharp.fluid.src;else{var r=[h.a,g.a,p.a,x.a,j.a];n=r[Math.floor(Math.random()*r.length)]}}));var i=a.title.split(" ").splice(0,8);i=i.length<8?i.join(" "):i.join(" ").concat(" ...");var c=a.description.split(" ").splice(0,30);c=c.length<30?c.join(" "):c.join(" ").concat(" ...");var o="text-blue-400 bg-black";return Object(_.b)("a",{href:""+a.url,target:"_blank",rel:"noopener noreferrer",key:r},Object(_.b)("div",{style:{width:"363px",backgroundImage:"url("+n+")",backgroundSize:"cover",backgroundPosition:"center",borderRadius:"15px"},className:"group text-left relative shadow-c1 hover:shadow-c2 rounded-lg min-h-50 2xl:min-h-40 mx-6 my-6 transform hover:scale-105 transition duration-500"},Object(_.b)("div",{className:"min-h-60 2xl:min-h-40 max-h-60 w-full p-6 transition duration-700 bg-black-45 group-hover:bg-black-85",style:{borderRadius:"15px"}},Object(_.b)("div",{className:"absolute pt-8 lg:pt-16 2xl:pt-24 overflow-hidden",style:{maxWidth:"320px"}},Object(_.b)("h1",{className:"group-hover:-translate-y-8 text-white font-bold leading-7 text-2xl transform transition duration-100"},Object(_.b)(b.a,{highlightClassName:o,textToHighlight:i,searchWords:t.state.query.split()})),Object(_.b)("h1",{className:"group-hover:hidden text-gray-400 leading-7 my-4 font-bold text-lg transition duration-500",style:{textShadow:"#000 0px 0px 30px"}},a.author.map((function(e,a,r){return Object(_.b)(b.a,{className:"text-white",highlightClassName:o,textToHighlight:r.length-1===a?e:e.concat(", "),searchWords:t.state.query.split(),key:e})}))),Object(_.b)("h1",{className:"group-hover:hidden text-gray-400 font-bold transition duration-500"},"CAT:  ",Object(_.b)(b.a,{className:"text-white",highlightClassName:o,textToHighlight:a.category[0].toUpperCase(),searchWords:t.state.query.split()})),Object(_.b)("h1",{className:"group-hover:hidden text-gray-400 font-bold transition duration-500"},"TAG:  ",a.tag.map((function(e,a,r){return a<3&&Object(_.b)(b.a,{className:"text-white",highlightClassName:o,textToHighlight:r.length-1===a?e.toUpperCase():e.toUpperCase().concat(", "),searchWords:t.state.query.split(),key:e})})),a.tag.length>3&&Object(_.b)("p",{className:"inline-block text-white"}," +",a.tag.length-3," more")),Object(_.b)("p",{className:"hidden group-hover:block my-4 text-xxs text-gray-500 w-full font-semibold transform group-hover:-translate-y-12 transition duration-500"},Object(_.b)(b.a,{highlightClassName:o,textToHighlight:a.url.slice(5).toUpperCase(),searchWords:t.state.query.split()})),Object(_.b)("h1",{className:"hidden group-hover:block text-white leading-5 text-lg py-3 transform group-hover:-translate-y-12 transition duration-500"},Object(_.b)(b.a,{highlightClassName:o,textToHighlight:c,searchWords:t.state.query.split()}))))))}))))}return t.state.query.length>0?Object(_.b)("div",{className:"bg-orange-700 text-gray-100 py-2"},"No results for ",t.state.query):Object(_.b)("div",{className:"bg-orange-700 text-gray-100 py-2"},"Awaiting for your input ...")}),null)))},n.getSearchResults=function(t){var e=window.__FLEXSEARCH__.en.index,a=window.__FLEXSEARCH__.en.store;if(t&&e){var r=[];return Object.keys(e).forEach((function(a){var n;(n=r).push.apply(n,k(e[a].values.search({query:t,suggest:!0})))})),r=Array.from(new Set(r)),a.filter((function(t){return r.includes(t.id)?t:null})).map((function(t){return t.node}))}return[]},r}(r.Component);e.default=function(t){var e=t.location;return Object(_.b)(n.a.Fragment,null,Object(_.b)(i.a,{title:"Search",keywords:["the university of sheffield","data visualisation","data visualisation hub","research","dataviz.shef","search dataviz"]}),Object(_.b)(c.a,null),Object(_.b)("div",{className:"flex flex-wrap"},Object(_.b)(C,{location:e})),Object(_.b)(o.a,null))}},lGYE:function(t){t.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"id":"013a9f21-da46-58e6-b7ae-b7478e2b22d8","frontmatter":{"date":"Thu, 16 Jul 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/a5274f179b0d1633e06b1b506a25dee7/ee604/bg1.png"}}}}}},{"node":{"id":"82cb25b9-7812-5cbc-9037-4df388588488","frontmatter":{"date":"Mon, 13 Jul 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/3676fcf950513776ee47b6d96c06bfb1/ee604/ShinyThumb.png"}}}}}},{"node":{"id":"fba59bab-51ca-5e1a-8667-ba16bfd96b2e","frontmatter":{"date":"Sat, 04 Jul 2020","thumbnail":null}}},{"node":{"id":"9ac0bb0b-ee2d-593f-b984-913a93b4794c","frontmatter":{"date":"Fri, 03 Jul 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/7e6512bc55228b80a2bfcbdff165add2/3ee52/Fig1.png"}}}}}},{"node":{"id":"f3a392b9-3bd9-591d-9b2f-23332a2655b5","frontmatter":{"date":"Fri, 03 Jul 2020","thumbnail":null}}},{"node":{"id":"fe2db601-ceea-55f9-a9fd-5bb0188e201b","frontmatter":{"date":"Wed, 24 Jun 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/c6a9247fe67e7f8875418f51942a0305/ee604/thumb.png"}}}}}},{"node":{"id":"a0dba176-7264-5ffc-900e-d715c4ef1b3c","frontmatter":{"date":"Tue, 16 Jun 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/784fd2b169434bda6ce4440a901eb7ca/14b42/bg.jpg"}}}}}},{"node":{"id":"c18685ef-f78f-56a1-aeff-3fc6c01c784f","frontmatter":{"date":"Fri, 12 Jun 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/3cda13cd4a0d1370ed8e128035832649/ee604/Fig1.png"}}}}}},{"node":{"id":"84adb104-9cca-55c5-b103-20877895be2f","frontmatter":{"date":"Thu, 11 Jun 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/6f3ed93fe3e6ea21b26c15df4b34c525/09a85/Fig1.png"}}}}}},{"node":{"id":"5a800acd-0c8b-5793-aa3b-b0952fbeb163","frontmatter":{"date":"Thu, 04 Jun 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/b705fcaaa8477708ca1c07cf535113f4/14b42/Dash1.jpg"}}}}}},{"node":{"id":"bfd9278d-890c-59b4-99d9-07faa5921b98","frontmatter":{"date":"Mon, 01 Jun 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/ed944f0c528d5f27cc4098896dc80c99/ee604/thumb1.png"}}}}}},{"node":{"id":"ef4305d8-f474-56e3-ba82-7b76640c63be","frontmatter":{"date":"Wed, 20 May 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/1900c2032227e4775232aec94b867b8c/ee604/LetterIcon.png"}}}}}},{"node":{"id":"f9e5739b-3570-5528-8322-8e373ae5621b","frontmatter":{"date":"Thu, 07 May 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/93bb7bf89089bb255fa67456854e0db3/f422e/img_1.jpg"}}}}}},{"node":{"id":"d8962d26-6264-5a66-a91c-b70d9a5f8316","frontmatter":{"date":"Wed, 06 May 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/c77d3d7688082caba4911daa24a0a8b9/0f3a1/8389.jpg"}}}}}},{"node":{"id":"858a4753-8a09-5356-acf6-9110ad9e30e6","frontmatter":{"date":"Sat, 02 May 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/98f53e94125f8b6b49696d5765f9c537/f422e/img_1.jpg"}}}}}},{"node":{"id":"e7851b2b-0f4b-5aa2-bdbe-6388e8e26cc0","frontmatter":{"date":"Mon, 06 Apr 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/873350e406407b3316da2e9a12713b2e/7dac8/Charts_Thumb.png"}}}}}},{"node":{"id":"1f554381-d4ee-55b2-9d63-e603c7048056","frontmatter":{"date":"Sun, 22 Mar 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/b4cbf28e22e521e30c82125257f309ca/14b42/temp.jpg"}}}}}},{"node":{"id":"e2b8d507-d5c5-5a8c-b230-9eb1a476f4f0","frontmatter":{"date":"Sun, 22 Mar 2020","thumbnail":null}}},{"node":{"id":"5963537f-10f6-5e3d-90df-2adf366fc17d","frontmatter":{"date":"Fri, 28 Feb 2020","thumbnail":{"childImageSharp":{"fluid":{"src":"/static/fdb1e2f7472aa185ca0212ced955456e/ee604/Sheffield_Hackathon_Map_Output.png"}}}}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-search-jsx-315dea5f3addbc61c23c.js.map