(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{8247:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/author/[slug]",function(){return c(2442)}])},2445:function(f,b,a){"use strict";a.d(b,{R:function(){return k},Z:function(){return l}});var g=a(2086),h=a(689),i=a(4207),c=a(9203),d=a(8011),j=a.n(d);function e(){var a,b,c=(a=["\n  fragment AuthorChip on Author {\n    name\n    slug\n    picture {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 100, height: 100 } }\n        }\n      )\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return e=function(){return c},c}a(3236);var k=(0,c.ZP)(e());function l(c){var b,a=c.author;return(0,g.jsx)(j(),{href:"/author/".concat(a.slug),passHref:!0,children:(0,g.jsx)(h.Z,{avatar:(0,g.jsx)(i.Z,{alt:a.name,src:null===(b=a.picture)|| void 0===b?void 0:b.url}),clickable:!0,label:a.name})})}},3453:function(c,b,a){"use strict";a.d(b,{Z:function(){return f}});var d=a(2086),e=a(3923);function f(a){var b=a.children;return(0,d.jsx)(e.Z,{children:b})}a(3236)},1281:function(d,b,a){"use strict";a.d(b,{Z:function(){return h}});var e=a(2086),f=a(9060),c=a(8011),g=a.n(c);function h(){return(0,e.jsx)(g(),{href:"/",passHref:!0,children:(0,e.jsx)(f.Z,{variant:"h1",children:"Yet another SWE Blog."})})}a(3236)},5812:function(e,b,a){"use strict";a.d(b,{Z:function(){return p}});var f=a(2086),g=a(3453),h=a(9060),i=a(7440),c=a(8011),j=a.n(c),k=a(3236);function l(){var a=(0,f.jsx)(j(),{href:"https://github.com/Neitsch/neitsch.github.io",passHref:!0,children:(0,f.jsx)(h.Z,{underline:"always",children:"here"})});return(0,f.jsx)("footer",{children:(0,f.jsx)(g.Z,{children:(0,f.jsxs)(i.Z,{children:["Built with NextJS. Find the source ",a,"."]})})})}var d=a(6284),m=a.n(d),n=a(9090);function o(){var a=(0,n.useRouter)();(0,k.useEffect)(function(){var b=function(a){window.goatcounter.count({path:a})};return a.events.on("routeChangeComplete",b),function(){a.events.off("routeChangeStart",b)}},[a.events]);var b="https://www.nigel-schuster.de"+(0,n.useRouter)().asPath;return(0,f.jsxs)(m(),{children:[(0,f.jsx)("link",{href:b,rel:"canonical"}),(0,f.jsx)("link",{href:"/favicon/apple-touch-icon.png",sizes:"180x180"}),(0,f.jsx)("link",{href:"/favicon/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,f.jsx)("link",{href:"/favicon/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,f.jsx)("link",{href:"/favicon/site.webmanifest",rel:"manifest"}),(0,f.jsx)("link",{color:"#000000",href:"/favicon/safari-pinned-tab.svg"}),(0,f.jsx)("link",{href:"/favicon/favicon.ico",rel:"icon"}),(0,f.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,f.jsx)("meta",{content:"/favicon/browserconfig.xml",name:"msapplication-config"}),(0,f.jsx)("meta",{content:"#000",name:"theme-color"}),(0,f.jsx)("link",{href:"/feed.xml",rel:"alternate",type:"application/rss+xml"}),(0,f.jsx)("meta",{content:"Personal blog.",name:"description"}),(0,f.jsx)("script",{async:!0,"data-goatcounter":"https://nigel.goatcounter.com/count","data-goatcounter-settings":"{}",src:"//gc.zgo.at/count.js"})]})}function p(a){var b=a.children;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{}),(0,f.jsx)("div",{className:"min-h-screen",children:(0,f.jsx)("main",{children:b})}),(0,f.jsx)(l,{})]})}},1469:function(g,b,a){"use strict";a.d(b,{H:function(){return q},Z:function(){return r}});var h=a(2086),c=a(2445),i=a(600),j=a(7440),k=a(9060),l=a(7366),m=a(6233),n=a(9370),o=a(8678),d=a(9203),e=a(8011),p=a.n(e);function f(){var a,b,c=(a=["\n  ","\n  fragment PostPreview on Post {\n    title\n    slug\n    excerpt\n    coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    author {\n      ...AuthorChip\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return f=function(){return c},c}a(3236);var q=(0,d.ZP)(f(),c.R);function r(e){var a=e.post,f=a.title,b=a.coverImage,g=a.excerpt,d=a.author,q=a.slug,r=(0,h.jsx)(i.Z,{flexGrow:1,children:(0,h.jsx)(j.Z,{variant:"h4",children:f})}),s=(0,h.jsxs)(i.Z,{display:"flex",children:[r,d?(0,h.jsx)(i.Z,{alignSelf:"flex-end",children:(0,h.jsx)(c.Z,{author:d})}):null]}),t=(0,h.jsx)(j.Z,{variant:"body1",children:g}),u=(0,h.jsxs)(h.Fragment,{children:[s,t]}),v=(0,h.jsx)(p(),{href:"/posts/".concat(q),passHref:!0,children:(0,h.jsx)(k.Z,{children:u})});return(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(m.Z,{component:"img",src:null==b?void 0:b.url}),(0,h.jsx)(n.Z,{children:(0,h.jsx)(o.Z,{children:v})})]})}},1723:function(c,b,a){"use strict";a.d(b,{Z:function(){return e}});var d=a(2086);function e(){return(0,d.jsx)("hr",{className:"border-accent-2 mt-28 mb-24"})}a(3236)},2442:function(n,c,a){"use strict";a.r(c),a.d(c,{ALL_AUTHORS:function(){return R},LOOKUP_AUTHOR:function(){return S},"__N_SSG":function(){return Q},"default":function(){return T}});var o=a(2086),p=a(3453),q=a(1281),r=a(5812),f=a(1469),s=a(1723),t=a(9028),u=a(2182),d=a(3236),v=a(1626),w=a(5682),x=a(8008),y=a(9198),g=a(8290),z=a(2876);let h=d.createContext();var A=h,B=a(9771),i=a(8184);function C(a){return(0,B.Z)("MuiGrid",a)}let b=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],j=(0,i.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(a=>`spacing-xs-${a}`),...["column-reverse","column","row-reverse","row"].map(a=>`direction-xs-${a}`),...["nowrap","wrap-reverse","wrap"].map(a=>`wrap-xs-${a}`),...b.map(a=>`grid-xs-${a}`),...b.map(a=>`grid-sm-${a}`),...b.map(a=>`grid-md-${a}`),...b.map(a=>`grid-lg-${a}`),...b.map(a=>`grid-xl-${a}`)]);var D=j;let E=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function F(a){let b=parseFloat(a);return`${b}${String(a).replace(String(b),"")||"px"}`}function G(a,h,b={}){if(!h||!a||a<=0)return[];if("string"==typeof a&&!Number.isNaN(Number(a))||"number"==typeof a)return[b[`spacing-xs-${String(a)}`]||`spacing-xs-${String(a)}`];let{xs:c,sm:d,md:e,lg:f,xl:g}=a;return[Number(c)>0&&(b[`spacing-xs-${String(c)}`]||`spacing-xs-${String(c)}`),Number(d)>0&&(b[`spacing-sm-${String(d)}`]||`spacing-sm-${String(d)}`),Number(e)>0&&(b[`spacing-md-${String(e)}`]||`spacing-md-${String(e)}`),Number(f)>0&&(b[`spacing-lg-${String(f)}`]||`spacing-lg-${String(f)}`),Number(g)>0&&(b[`spacing-xl-${String(g)}`]||`spacing-xl-${String(g)}`)]}let H=(0,g.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver(j,a){let{container:b,direction:c,item:k,lg:d,md:e,sm:f,spacing:l,wrap:g,xl:h,xs:i,zeroMinWidth:m}=j.ownerState;return[a.root,b&&a.container,k&&a.item,m&&a.zeroMinWidth,...G(l,b,a),"row"!==c&&a[`direction-xs-${String(c)}`],"wrap"!==g&&a[`wrap-xs-${String(g)}`],!1!==i&&a[`grid-xs-${String(i)}`],!1!==f&&a[`grid-sm-${String(f)}`],!1!==e&&a[`grid-md-${String(e)}`],!1!==d&&a[`grid-lg-${String(d)}`],!1!==h&&a[`grid-xl-${String(h)}`]]}})(({ownerState:a})=>(0,u.Z)({boxSizing:"border-box"},a.container&&{display:"flex",flexWrap:"wrap",width:"100%"},a.item&&{margin:0},a.zeroMinWidth&&{minWidth:0},"wrap"!==a.wrap&&{flexWrap:a.wrap}),function({theme:a,ownerState:b}){let c=(0,w.P$)({values:b.direction,breakpoints:a.breakpoints.values});return(0,w.k9)({theme:a},c,a=>{let b={flexDirection:a};return 0===a.indexOf("column")&&(b[`& > .${D.item}`]={maxWidth:"none"}),b})},function({theme:a,ownerState:d}){let{container:e,rowSpacing:b}=d,c={};if(e&&0!==b){let f=(0,w.P$)({values:b,breakpoints:a.breakpoints.values});c=(0,w.k9)({theme:a},f,c=>{let b=a.spacing(c);return"0px"!==b?{marginTop:`-${F(b)}`,[`& > .${D.item}`]:{paddingTop:F(b)}}:{}})}return c},function({theme:a,ownerState:d}){let{container:e,columnSpacing:b}=d,c={};if(e&&0!==b){let f=(0,w.P$)({values:b,breakpoints:a.breakpoints.values});c=(0,w.k9)({theme:a},f,c=>{let b=a.spacing(c);return"0px"!==b?{width:`calc(100% + ${F(b)})`,marginLeft:`-${F(b)}`,[`& > .${D.item}`]:{paddingLeft:F(b)}}:{}})}return c},function({theme:a,ownerState:b}){let c;return a.breakpoints.keys.reduce((d,e)=>{let f={};if(b[e]&&(c=b[e]),!c)return d;if(!0===c)f={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===c)f={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let g=(0,w.P$)({values:b.columns,breakpoints:a.breakpoints.values}),i="object"==typeof g?g[e]:g;if(null==i)return d;let h=`${Math.round(c/i*1e8)/1e6}%`,j={};if(b.container&&b.item&&0!==b.columnSpacing){let k=a.spacing(b.columnSpacing);if("0px"!==k){let l=`calc(${h} + ${F(k)})`;j={flexBasis:l,maxWidth:l}}}f=(0,u.Z)({flexBasis:h,flexGrow:0,maxWidth:h},j)}return 0===a.breakpoints.values[e]?Object.assign(d,f):d[a.breakpoints.up(e)]=f,d},{})}),I=i=>{let{classes:j,container:a,direction:b,item:k,lg:c,md:d,sm:e,spacing:l,wrap:f,xl:g,xs:h,zeroMinWidth:m}=i,n={root:["root",a&&"container",k&&"item",m&&"zeroMinWidth",...G(l,a),"row"!==b&&`direction-xs-${String(b)}`,"wrap"!==f&&`wrap-xs-${String(f)}`,!1!==h&&`grid-xs-${String(h)}`,!1!==e&&`grid-sm-${String(e)}`,!1!==d&&`grid-md-${String(d)}`,!1!==c&&`grid-lg-${String(c)}`,!1!==g&&`grid-xl-${String(g)}`]};return(0,y.Z)(n,C,j)},k=d.forwardRef(function(g,h){let i=(0,z.Z)({props:g,name:"MuiGrid"}),a=(0,x.Z)(i),{className:j,columns:k,columnSpacing:l,component:m="div",container:b=!1,direction:n="row",item:p=!1,lg:q=!1,md:r=!1,rowSpacing:s,sm:w=!1,spacing:c=0,wrap:y="wrap",xl:B=!1,xs:C=!1,zeroMinWidth:D=!1}=a,F=(0,t.Z)(a,E),G=d.useContext(A),e=b?k||12:G,f=(0,u.Z)({},a,{columns:e,container:b,direction:n,item:p,lg:q,md:r,sm:w,rowSpacing:s||c,columnSpacing:l||c,wrap:y,xl:B,xs:C,zeroMinWidth:D}),J=I(f);return(0,o.jsx)(A.Provider,{value:e,children:(0,o.jsx)(H,(0,u.Z)({ownerState:f,className:(0,v.Z)(J.root,j),as:m,ref:h},F))})});var J=k,K=a(7366),L=a(9370),M=a(7440),e=a(9203),N=a(3645),O=a(2616);function P(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function l(){var a=P(["\n  query AllAuthors {\n    authors {\n      slug\n      posts {\n        slug\n      }\n    }\n  }\n"]);return l=function(){return a},a}function m(){var a=P(["\n  ","\n  fragment AuthorInfo on Author {\n    name\n    biography\n    title\n  }\n  query LookupAuthor($slug: String!) {\n    postsConnection(where: { author: { slug: $slug } }) {\n      edges {\n        node {\n          ...PostPreview\n        }\n      }\n    }\n    author(where: { slug: $slug }) {\n      ...AuthorInfo\n    }\n  }\n"]);return m=function(){return a},a}var Q=!0,R=(0,e.ZP)(l()),S=(0,e.ZP)(m(),f.H);function T(b){var a=b.author,c=b.postsConnection;if(!a)throw Error("author is null");return(0,o.jsx)(r.Z,{children:(0,o.jsxs)(p.Z,{children:[(0,o.jsx)(q.Z,{}),(0,o.jsx)(K.Z,{children:(0,o.jsxs)(L.Z,{children:[(0,o.jsxs)(M.Z,{component:"h1",variant:"h4",children:[a.name," (",a.title,")"]}),(0,o.jsx)(N.D,{rehypePlugins:[[O.Z]],children:a.biography})]})}),(0,o.jsx)(s.Z,{}),(0,o.jsx)(M.Z,{variant:"h4",children:"Posts by the author"}),(0,o.jsx)(J,{container:!0,spacing:5,children:c.edges.map(function(b){var a=b.node;return(0,o.jsx)(J,{item:!0,md:6,xs:12,children:(0,o.jsx)(f.Z,{post:a})},a.slug)})})]})})}}},function(a){a.O(0,[701,411,774,888,179],function(){return a(a.s=8247)}),_N_E=a.O()}])
//# sourceMappingURL=[slug]-931e6f1a2a782f3a.js.map