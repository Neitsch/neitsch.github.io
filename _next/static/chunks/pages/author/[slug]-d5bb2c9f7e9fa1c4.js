(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{1195:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/author/[slug]",function(){return c(3172)}])},8847:function(a,b,c){"use strict";c.d(b,{R:function(){return j},Z:function(){return k}});var d=c(4637),e=c(2693),f=c(1447),g=c(7724),h=c(9944);function i(){var a,b,c=(a=["\n  fragment AuthorChip on Author {\n    name\n    slug\n    picture {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 100, height: 100 } }\n        }\n      )\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return i=function(){return c},c}c(9496);var j=(0,g.ZP)(i());function k(a){var b,c=a.author;return(0,d.jsx)(h.default,{href:"/author/".concat(c.slug),passHref:!0,children:(0,d.jsx)(e.Z,{avatar:(0,d.jsx)(f.Z,{alt:c.name,src:null===(b=c.picture)|| void 0===b?void 0:b.url}),clickable:!0,label:c.name})})}},8581:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(4637),e=c(6685);function f(a){var b=a.children;return(0,d.jsx)(e.Z,{children:b})}c(9496)},9494:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(4637),e=c(6030),f=c(9944);function g(){return(0,d.jsx)(f.default,{href:"/",passHref:!0,children:(0,d.jsx)(e.Z,{variant:"h1",children:"Yet another SWE Blog."})})}c(9496)},2869:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d=c(4637),e=c(8581),f=c(6030),g=c(7214),h=c(9944),i=c(9496);function j(){var a=(0,d.jsx)(h.default,{href:"https://github.com/Neitsch/neitsch.github.io",passHref:!0,children:(0,d.jsx)(f.Z,{underline:"always",children:"here"})});return(0,d.jsx)("footer",{children:(0,d.jsx)(e.Z,{children:(0,d.jsxs)(g.Z,{children:["Built with NextJS. Find the source ",a,"."]})})})}var k=c(8587),l=c(5213);function m(){var a=(0,l.useRouter)();(0,i.useEffect)(function(){var b=function(a){window.goatcounter.count({path:a})};return a.events.on("routeChangeComplete",b),function(){a.events.off("routeChangeStart",b)}},[a.events]);var b="https://www.nigel-schuster.de"+(0,l.useRouter)().asPath;return(0,d.jsxs)(k.default,{children:[(0,d.jsx)("link",{href:b,rel:"canonical"}),(0,d.jsx)("link",{href:"/favicon/apple-touch-icon.png",sizes:"180x180"}),(0,d.jsx)("link",{href:"/favicon/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,d.jsx)("link",{href:"/favicon/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,d.jsx)("link",{href:"/favicon/site.webmanifest",rel:"manifest"}),(0,d.jsx)("link",{color:"#000000",href:"/favicon/safari-pinned-tab.svg"}),(0,d.jsx)("link",{href:"/favicon/favicon.ico",rel:"icon"}),(0,d.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,d.jsx)("meta",{content:"/favicon/browserconfig.xml",name:"msapplication-config"}),(0,d.jsx)("meta",{content:"#000",name:"theme-color"}),(0,d.jsx)("link",{href:"/feed.xml",rel:"alternate",type:"application/rss+xml"}),(0,d.jsx)("meta",{content:"Personal blog.",name:"description"}),(0,d.jsx)("script",{async:!0,"data-goatcounter":"https://nigel.goatcounter.com/count","data-goatcounter-settings":"{}",src:"//gc.zgo.at/count.js"})]})}function n(a){var b=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{}),(0,d.jsx)("div",{className:"min-h-screen",children:(0,d.jsx)("main",{children:b})}),(0,d.jsx)(j,{})]})}},3321:function(a,b,c){"use strict";c.d(b,{H:function(){return p},Z:function(){return q}});var d=c(4637),e=c(8847),f=c(37),g=c(7214),h=c(6030),i=c(645),j=c(4697),k=c(6639),l=c(5027),m=c(7724),n=c(9944);function o(){var a,b,c=(a=["\n  ","\n  fragment PostPreview on Post {\n    title\n    slug\n    excerpt\n    coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    author {\n      ...AuthorChip\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return o=function(){return c},c}c(9496);var p=(0,m.ZP)(o(),e.R);function q(a){var b=a.post,c=b.title,m=b.coverImage,o=b.excerpt,p=b.author,q=b.slug,r=(0,d.jsx)(f.Z,{flexGrow:1,children:(0,d.jsx)(g.Z,{variant:"h4",children:c})}),s=(0,d.jsxs)(f.Z,{display:"flex",children:[r,p?(0,d.jsx)(f.Z,{alignSelf:"flex-end",children:(0,d.jsx)(e.Z,{author:p})}):null]}),t=(0,d.jsx)(g.Z,{variant:"body1",children:o}),u=(0,d.jsxs)(d.Fragment,{children:[s,t]}),v=(0,d.jsx)(n.default,{href:"/posts/".concat(q),passHref:!0,children:(0,d.jsx)(h.Z,{children:u})});return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(j.Z,{component:"img",src:null==m?void 0:m.url}),(0,d.jsx)(k.Z,{children:(0,d.jsx)(l.Z,{children:v})})]})}},6383:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(4637);function e(){return(0,d.jsx)("hr",{className:"border-accent-2 mt-28 mb-24"})}c(9496)},3172:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return L},"default":function(){return M}});var d=c(4637),e=c(8581),f=c(9494),g=c(2869),h=c(3321),i=c(6383),j=c(4750),k=c(5900),l=c(9496);c(9036);var m=c(1626),n=c(9784),o=c(1139),p=c(8374),q=c(8653),r=c(1029);const s=l.createContext();var t=s,u=c(5534),v=c(95);function w(a){return(0,u.Z)("MuiGrid",a)}const x=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],y=(0,v.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(a=>`spacing-xs-${a}`),...["column-reverse","column","row-reverse","row"].map(a=>`direction-xs-${a}`),...["nowrap","wrap-reverse","wrap"].map(a=>`wrap-xs-${a}`),...x.map(a=>`grid-xs-${a}`),...x.map(a=>`grid-sm-${a}`),...x.map(a=>`grid-md-${a}`),...x.map(a=>`grid-lg-${a}`),...x.map(a=>`grid-xl-${a}`)]);var z=y;const A=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function B(a){const b=parseFloat(a);return`${b}${String(a).replace(String(b),"")||"px"}`}const C=(0,q.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(a,b)=>{const{container:c,direction:d,item:e,lg:f,md:g,sm:h,spacing:i,wrap:j,xl:k,xs:l,zeroMinWidth:m}=a.ownerState;return[b.root,c&&b.container,e&&b.item,m&&b.zeroMinWidth,c&&0!==i&&b[`spacing-xs-${String(i)}`],"row"!==d&&b[`direction-xs-${String(d)}`],"wrap"!==j&&b[`wrap-xs-${String(j)}`],!1!==l&&b[`grid-xs-${String(l)}`],!1!==h&&b[`grid-sm-${String(h)}`],!1!==g&&b[`grid-md-${String(g)}`],!1!==f&&b[`grid-lg-${String(f)}`],!1!==k&&b[`grid-xl-${String(k)}`]]}})(({ownerState:a})=>(0,k.Z)({boxSizing:"border-box"},a.container&&{display:"flex",flexWrap:"wrap",width:"100%"},a.item&&{margin:0},a.zeroMinWidth&&{minWidth:0},"nowrap"===a.wrap&&{flexWrap:"nowrap"},"reverse"===a.wrap&&{flexWrap:"wrap-reverse"}),function({theme:a,ownerState:b}){const c=(0,n.P$)({values:b.direction,breakpoints:a.breakpoints.values});return(0,n.k9)({theme:a},c,a=>{const b={flexDirection:a};return 0===a.indexOf("column")&&(b[`& > .${z.item}`]={maxWidth:"none"}),b})},function({theme:a,ownerState:b}){const{container:c,rowSpacing:d}=b;let e={};if(c&&0!==d){const f=(0,n.P$)({values:d,breakpoints:a.breakpoints.values});e=(0,n.k9)({theme:a},f,b=>{const c=a.spacing(b);return"0px"!==c?{marginTop:`-${B(c)}`,[`& > .${z.item}`]:{paddingTop:B(c)}}:{}})}return e},function({theme:a,ownerState:b}){const{container:c,columnSpacing:d}=b;let e={};if(c&&0!==d){const f=(0,n.P$)({values:d,breakpoints:a.breakpoints.values});e=(0,n.k9)({theme:a},f,b=>{const c=a.spacing(b);return"0px"!==c?{width:`calc(100% + ${B(c)})`,marginLeft:`-${B(c)}`,[`& > .${z.item}`]:{paddingLeft:B(c)}}:{}})}return e},({theme:a,ownerState:b})=>a.breakpoints.keys.reduce((c,d)=>(!function(a,b,c,d){const e=d[c];if(e){let f={};if(!0===e)f={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)f={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const g=(0,n.P$)({values:d.columns,breakpoints:b.breakpoints.values}),h="object"==typeof g?g[c]:g,i=`${Math.round(e/h*10e7)/10e5}%`;let j={};if(d.container&&d.item&&0!==d.columnSpacing){const l=b.spacing(d.columnSpacing);if("0px"!==l){const m=`calc(${i} + ${B(l)})`;j={flexBasis:m,maxWidth:m}}}f=(0,k.Z)({flexBasis:i,flexGrow:0,maxWidth:i},j)}0===b.breakpoints.values[c]?Object.assign(a,f):a[b.breakpoints.up(c)]=f}}(c,a,d,b),c),{})),D=a=>{const{classes:b,container:c,direction:d,item:e,lg:f,md:g,sm:h,spacing:i,wrap:j,xl:k,xs:l,zeroMinWidth:m}=a,n={root:["root",c&&"container",e&&"item",m&&"zeroMinWidth",c&&0!==i&&`spacing-xs-${String(i)}`,"row"!==d&&`direction-xs-${String(d)}`,"wrap"!==j&&`wrap-xs-${String(j)}`,!1!==l&&`grid-xs-${String(l)}`,!1!==h&&`grid-sm-${String(h)}`,!1!==g&&`grid-md-${String(g)}`,!1!==f&&`grid-lg-${String(f)}`,!1!==k&&`grid-xl-${String(k)}`]};return(0,p.Z)(n,w,b)},E=l.forwardRef(function(a,b){var c;const e=(0,r.Z)({props:a,name:"MuiGrid"}),f=(0,o.Z)(e),{className:g,columns:h,columnSpacing:i,component:n="div",container:p=!1,direction:q="row",item:s=!1,lg:u=!1,md:v=!1,rowSpacing:w,sm:x=!1,spacing:y=0,wrap:z="wrap",xl:B=!1,xs:E=!1,zeroMinWidth:F=!1}=f,G=(0,j.Z)(f,A),H=l.useContext(t),I=h||H||12,J=(0,k.Z)({},f,{columns:I,container:p,direction:q,item:s,lg:u,md:v,sm:x,rowSpacing:w||y,columnSpacing:i||y,wrap:z,xl:B,xs:E,zeroMinWidth:F}),K=D(J);return c=(0,d.jsx)(C,(0,k.Z)({ownerState:J,className:(0,m.Z)(K.root,g),as:n,ref:b},G)),12!==I?(0,d.jsx)(t.Provider,{value:I,children:c}):c});var F=E,G=c(645),H=c(6639),I=c(7214),J=c(1638),K=c(945),L=!0;function M(a){var b=a.author,c=a.postsConnection;if(!b)throw Error("author is null");return(0,d.jsx)(g.Z,{children:(0,d.jsxs)(e.Z,{children:[(0,d.jsx)(f.Z,{}),(0,d.jsx)(G.Z,{children:(0,d.jsxs)(H.Z,{children:[(0,d.jsxs)(I.Z,{component:"h1",variant:"h4",children:[b.name," (",b.title,")"]}),(0,d.jsx)(J.Z,{rehypePlugins:[[K.Z]],children:b.biography})]})}),(0,d.jsx)(i.Z,{}),(0,d.jsx)(I.Z,{variant:"h4",children:"Posts by the author"}),(0,d.jsx)(F,{container:!0,spacing:5,children:c.edges.map(function(a){var b=a.node;return(0,d.jsx)(F,{item:!0,md:6,xs:12,children:(0,d.jsx)(h.Z,{post:b})},b.slug)})})]})})}}},function(a){a.O(0,[713,960,774,888,179],function(){return a(a.s=1195)}),_N_E=a.O()}])
//# sourceMappingURL=[slug]-d5bb2c9f7e9fa1c4.js.map