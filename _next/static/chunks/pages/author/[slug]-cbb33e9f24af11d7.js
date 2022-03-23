(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{7401:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/author/[slug]",function(){return c(9745)}])},7178:function(a,b,c){"use strict";c.d(b,{R:function(){return j},Z:function(){return k}});var d=c(4637),e=c(8773),f=c(3675),g=c(8676),h=c(3139);function i(){var a,b,c=(a=["\n  fragment AuthorChip on Author {\n    name\n    slug\n    picture {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 100, height: 100 } }\n        }\n      )\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return i=function(){return c},c}c(9496);var j=(0,g.ZP)(i());function k(a){var b,c=a.author;return(0,d.jsx)(h.default,{href:"/author/".concat(c.slug),passHref:!0,children:(0,d.jsx)(e.Z,{avatar:(0,d.jsx)(f.Z,{alt:c.name,src:null===(b=c.picture)|| void 0===b?void 0:b.url}),clickable:!0,label:c.name})})}},9439:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(4637),e=c(7692);function f(a){var b=a.children;return(0,d.jsx)(e.Z,{children:b})}c(9496)},6820:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(4637),e=c(3621),f=c(3139);function g(){return(0,d.jsx)(f.default,{href:"/",passHref:!0,children:(0,d.jsx)(e.Z,{variant:"h1",children:"Yet another SWE Blog."})})}c(9496)},7892:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d=c(4637),e=c(9439),f=c(3621),g=c(7235),h=c(3139),i=c(9496);function j(){var a=(0,d.jsx)(h.default,{href:"https://github.com/Neitsch/neitsch.github.io",passHref:!0,children:(0,d.jsx)(f.Z,{underline:"always",children:"here"})});return(0,d.jsx)("footer",{children:(0,d.jsx)(e.Z,{children:(0,d.jsxs)(g.Z,{children:["Built with NextJS. Find the source ",a,"."]})})})}var k=c(5748),l=c(9633);function m(){var a=(0,l.useRouter)();(0,i.useEffect)(function(){var b=function(a){window.goatcounter.count({path:a})};return a.events.on("routeChangeComplete",b),function(){a.events.off("routeChangeStart",b)}},[a.events]);var b="https://www.nigel-schuster.de"+(0,l.useRouter)().asPath;return(0,d.jsxs)(k.default,{children:[(0,d.jsx)("link",{href:b,rel:"canonical"}),(0,d.jsx)("link",{href:"/favicon/apple-touch-icon.png",sizes:"180x180"}),(0,d.jsx)("link",{href:"/favicon/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,d.jsx)("link",{href:"/favicon/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,d.jsx)("link",{href:"/favicon/site.webmanifest",rel:"manifest"}),(0,d.jsx)("link",{color:"#000000",href:"/favicon/safari-pinned-tab.svg"}),(0,d.jsx)("link",{href:"/favicon/favicon.ico",rel:"icon"}),(0,d.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,d.jsx)("meta",{content:"/favicon/browserconfig.xml",name:"msapplication-config"}),(0,d.jsx)("meta",{content:"#000",name:"theme-color"}),(0,d.jsx)("link",{href:"/feed.xml",rel:"alternate",type:"application/rss+xml"}),(0,d.jsx)("meta",{content:"Personal blog.",name:"description"}),(0,d.jsx)("script",{async:!0,"data-goatcounter":"https://nigel.goatcounter.com/count","data-goatcounter-settings":"{}",src:"//gc.zgo.at/count.js"})]})}function n(a){var b=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{}),(0,d.jsx)("div",{className:"min-h-screen",children:(0,d.jsx)("main",{children:b})}),(0,d.jsx)(j,{})]})}},1013:function(a,b,c){"use strict";c.d(b,{H:function(){return p},Z:function(){return q}});var d=c(4637),e=c(7178),f=c(9131),g=c(7235),h=c(3621),i=c(7974),j=c(5648),k=c(3549),l=c(757),m=c(8676),n=c(3139);function o(){var a,b,c=(a=["\n  ","\n  fragment PostPreview on Post {\n    title\n    slug\n    excerpt\n    coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    author {\n      ...AuthorChip\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return o=function(){return c},c}c(9496);var p=(0,m.ZP)(o(),e.R);function q(a){var b=a.post,c=b.title,m=b.coverImage,o=b.excerpt,p=b.author,q=b.slug,r=(0,d.jsx)(f.Z,{flexGrow:1,children:(0,d.jsx)(g.Z,{variant:"h4",children:c})}),s=(0,d.jsxs)(f.Z,{display:"flex",children:[r,p?(0,d.jsx)(f.Z,{alignSelf:"flex-end",children:(0,d.jsx)(e.Z,{author:p})}):null]}),t=(0,d.jsx)(g.Z,{variant:"body1",children:o}),u=(0,d.jsxs)(d.Fragment,{children:[s,t]}),v=(0,d.jsx)(n.default,{href:"/posts/".concat(q),passHref:!0,children:(0,d.jsx)(h.Z,{children:u})});return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(j.Z,{component:"img",src:null==m?void 0:m.url}),(0,d.jsx)(k.Z,{children:(0,d.jsx)(l.Z,{children:v})})]})}},1878:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(4637);function e(){return(0,d.jsx)("hr",{className:"border-accent-2 mt-28 mb-24"})}c(9496)},9745:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return M},"default":function(){return N}});var d=c(4637),e=c(9439),f=c(6820),g=c(7892),h=c(1013),i=c(1878),j=c(42),k=c(9624),l=c(9496);c(9036);var m=c(1626),n=c(2613),o=c(3413),p=c(3570),q=c(5774),r=c(6431);const s=l.createContext();var t=s,u=c(4121),v=c(4833);function w(a){return(0,u.Z)("MuiGrid",a)}const x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],y=(0,v.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(a=>`spacing-xs-${a}`),...["column-reverse","column","row-reverse","row"].map(a=>`direction-xs-${a}`),...["nowrap","wrap-reverse","wrap"].map(a=>`wrap-xs-${a}`),...x.map(a=>`grid-xs-${a}`),...x.map(a=>`grid-sm-${a}`),...x.map(a=>`grid-md-${a}`),...x.map(a=>`grid-lg-${a}`),...x.map(a=>`grid-xl-${a}`)]);var z=y;const A=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function B(a){const b=parseFloat(a);return`${b}${String(a).replace(String(b),"")||"px"}`}function C(a,b,c={}){if(!b||!a||a<=0)return[];if("string"==typeof a&&!Number.isNaN(Number(a))||"number"==typeof a)return[c[`spacing-xs-${String(a)}`]||`spacing-xs-${String(a)}`];const{xs:d,sm:e,md:f,lg:g,xl:h}=a;return[Number(d)>0&&(c[`spacing-xs-${String(d)}`]||`spacing-xs-${String(d)}`),Number(e)>0&&(c[`spacing-sm-${String(e)}`]||`spacing-sm-${String(e)}`),Number(f)>0&&(c[`spacing-md-${String(f)}`]||`spacing-md-${String(f)}`),Number(g)>0&&(c[`spacing-lg-${String(g)}`]||`spacing-lg-${String(g)}`),Number(h)>0&&(c[`spacing-xl-${String(h)}`]||`spacing-xl-${String(h)}`)]}const D=(0,q.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(a,b)=>{const{container:c,direction:d,item:e,lg:f,md:g,sm:h,spacing:i,wrap:j,xl:k,xs:l,zeroMinWidth:m}=a.ownerState;return[b.root,c&&b.container,e&&b.item,m&&b.zeroMinWidth,...C(i,c,b),"row"!==d&&b[`direction-xs-${String(d)}`],"wrap"!==j&&b[`wrap-xs-${String(j)}`],!1!==l&&b[`grid-xs-${String(l)}`],!1!==h&&b[`grid-sm-${String(h)}`],!1!==g&&b[`grid-md-${String(g)}`],!1!==f&&b[`grid-lg-${String(f)}`],!1!==k&&b[`grid-xl-${String(k)}`]]}})(({ownerState:a})=>(0,k.Z)({boxSizing:"border-box"},a.container&&{display:"flex",flexWrap:"wrap",width:"100%"},a.item&&{margin:0},a.zeroMinWidth&&{minWidth:0},"wrap"!==a.wrap&&{flexWrap:a.wrap}),function({theme:a,ownerState:b}){const c=(0,n.P$)({values:b.direction,breakpoints:a.breakpoints.values});return(0,n.k9)({theme:a},c,a=>{const b={flexDirection:a};return 0===a.indexOf("column")&&(b[`& > .${z.item}`]={maxWidth:"none"}),b})},function({theme:a,ownerState:b}){const{container:c,rowSpacing:d}=b;let e={};if(c&&0!==d){const f=(0,n.P$)({values:d,breakpoints:a.breakpoints.values});e=(0,n.k9)({theme:a},f,b=>{const c=a.spacing(b);return"0px"!==c?{marginTop:`-${B(c)}`,[`& > .${z.item}`]:{paddingTop:B(c)}}:{}})}return e},function({theme:a,ownerState:b}){const{container:c,columnSpacing:d}=b;let e={};if(c&&0!==d){const f=(0,n.P$)({values:d,breakpoints:a.breakpoints.values});e=(0,n.k9)({theme:a},f,b=>{const c=a.spacing(b);return"0px"!==c?{width:`calc(100% + ${B(c)})`,marginLeft:`-${B(c)}`,[`& > .${z.item}`]:{paddingLeft:B(c)}}:{}})}return e},function({theme:a,ownerState:b}){let c;return a.breakpoints.keys.reduce((d,e)=>{let f={};if(b[e]&&(c=b[e]),!c)return d;if(!0===c)f={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===c)f={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const g=(0,n.P$)({values:b.columns,breakpoints:a.breakpoints.values}),h="object"==typeof g?g[e]:g;if(null==h)return d;const i=`${Math.round(c/h*1e8)/1e6}%`;let j={};if(b.container&&b.item&&0!==b.columnSpacing){const l=a.spacing(b.columnSpacing);if("0px"!==l){const m=`calc(${i} + ${B(l)})`;j={flexBasis:m,maxWidth:m}}}f=(0,k.Z)({flexBasis:i,flexGrow:0,maxWidth:i},j)}return 0===a.breakpoints.values[e]?Object.assign(d,f):d[a.breakpoints.up(e)]=f,d},{})}),E=a=>{const{classes:b,container:c,direction:d,item:e,lg:f,md:g,sm:h,spacing:i,wrap:j,xl:k,xs:l,zeroMinWidth:m}=a,n={root:["root",c&&"container",e&&"item",m&&"zeroMinWidth",...C(i,c),"row"!==d&&`direction-xs-${String(d)}`,"wrap"!==j&&`wrap-xs-${String(j)}`,!1!==l&&`grid-xs-${String(l)}`,!1!==h&&`grid-sm-${String(h)}`,!1!==g&&`grid-md-${String(g)}`,!1!==f&&`grid-lg-${String(f)}`,!1!==k&&`grid-xl-${String(k)}`]};return(0,p.Z)(n,w,b)},F=l.forwardRef(function(a,b){var c;const e=(0,r.Z)({props:a,name:"MuiGrid"}),f=(0,o.Z)(e),{className:g,columns:h,columnSpacing:i,component:n="div",container:p=!1,direction:q="row",item:s=!1,lg:u=!1,md:v=!1,rowSpacing:w,sm:x=!1,spacing:y=0,wrap:z="wrap",xl:B=!1,xs:C=!1,zeroMinWidth:F=!1}=f,G=(0,j.Z)(f,A),H=l.useContext(t),I=h||H||12,J=(0,k.Z)({},f,{columns:I,container:p,direction:q,item:s,lg:u,md:v,sm:x,rowSpacing:w||y,columnSpacing:i||y,wrap:z,xl:B,xs:C,zeroMinWidth:F}),K=E(J);return c=(0,d.jsx)(D,(0,k.Z)({ownerState:J,className:(0,m.Z)(K.root,g),as:n,ref:b},G)),12!==I?(0,d.jsx)(t.Provider,{value:I,children:c}):c});var G=F,H=c(7974),I=c(3549),J=c(7235),K=c(7829),L=c(2616),M=!0;function N(a){var b=a.author,c=a.postsConnection;if(!b)throw Error("author is null");return(0,d.jsx)(g.Z,{children:(0,d.jsxs)(e.Z,{children:[(0,d.jsx)(f.Z,{}),(0,d.jsx)(H.Z,{children:(0,d.jsxs)(I.Z,{children:[(0,d.jsxs)(J.Z,{component:"h1",variant:"h4",children:[b.name," (",b.title,")"]}),(0,d.jsx)(K.D,{rehypePlugins:[[L.Z]],children:b.biography})]})}),(0,d.jsx)(i.Z,{}),(0,d.jsx)(J.Z,{variant:"h4",children:"Posts by the author"}),(0,d.jsx)(G,{container:!0,spacing:5,children:c.edges.map(function(a){var b=a.node;return(0,d.jsx)(G,{item:!0,md:6,xs:12,children:(0,d.jsx)(h.Z,{post:b})},b.slug)})})]})})}}},function(a){a.O(0,[656,756,774,888,179],function(){return a(a.s=7401)}),_N_E=a.O()}])
//# sourceMappingURL=[slug]-cbb33e9f24af11d7.js.map