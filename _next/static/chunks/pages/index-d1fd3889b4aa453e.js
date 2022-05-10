(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3941:function(g,b,a){"use strict";a.d(b,{ZP:function(){return x}});var h=a(9028),i=a(2182),j=a(5607),c=a(947),k=a(8034),l=a(8011),m=a(7986),n=a(9536),o=a(7029),p=a(1626),d=a(3236),q=a(5360),e=a(9413);function r(a){return(0,q.Z)("MuiMasonry",a)}(0,e.Z)("MuiMasonry",["root"]);var s=a(2086);let t=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],u=a=>Number(a.replace("px","")),v=a=>{let{classes:b}=a;return(0,j.Z)({root:["root"]},r,b)},w=(0,c.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(b,a)=>[a.root]})(({ownerState:a,theme:c})=>{let b={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},d={};if(a.isSSR){let h={},f=Number(c.spacing(a.defaultSpacing).replace("px",""));for(let e=1;e<=a.defaultColumns;e+=1)h[`&:nth-of-type(${a.defaultColumns}n+${e%a.defaultColumns})`]={order:e};return d.height=a.defaultHeight,d.margin=-(f/2),d["& > *"]=(0,i.Z)({},b["& > *"],h,{margin:f/2,width:`calc(${(100/a.defaultColumns).toFixed(2)}% - ${f}px)`}),(0,i.Z)({},b,d)}let g=(0,l.P$)({values:a.spacing,breakpoints:c.breakpoints.values}),k=(0,m.hB)(c);b=(0,n.Z)(b,(0,l.k9)({theme:c},g,c=>{let d=Number(c),b=Number((0,m.NA)(k,d).replace("px",""));return(0,i.Z)({margin:-(b/2),"& > *":{margin:b/2}},a.maxColumnHeight&&{height:Math.ceil(a.maxColumnHeight+b)})}));let j=(0,l.P$)({values:a.columns,breakpoints:c.breakpoints.values});return b=(0,n.Z)(b,(0,l.k9)({theme:c},j,a=>{let b=Number(a),c=`${(100/b).toFixed(2)}%`,d="object"!=typeof g?(0,m.NA)(k,Number(g)):"0px";return{"& > *":{width:`calc(${c} - ${d})`}}})),"object"==typeof g&&(b=(0,n.Z)(b,(0,l.k9)({theme:c},g,(b,a)=>{if(a){let c=Number(b),d=Object.keys(j).pop(),e=(0,m.NA)(k,c),f="object"==typeof j?j[a]||j[d]:j,g=`${(100/f).toFixed(2)}%`;return{"& > *":{width:`calc(${g} - ${e})`}}}return null}))),b}),f=d.forwardRef(function(q,r){let a=(0,k.Z)({props:q,name:"MuiMasonry"}),{children:c,className:x,component:y="div",columns:e=4,spacing:f=1,defaultColumns:b,defaultHeight:g,defaultSpacing:j}=a,z=(0,h.Z)(a,t),A=d.useRef(),[l,F]=d.useState(),m=!l&&g&& void 0!==b&& void 0!==j,[B,G]=d.useState(m?b-1:0),n=(0,i.Z)({},a,{spacing:f,columns:e,maxColumnHeight:l,defaultColumns:b,defaultHeight:g,defaultSpacing:j,isSSR:m}),C=v(n),H=d.useRef("undefined"==typeof ResizeObserver?void 0:new ResizeObserver(b=>{if(!A.current||!b||0===b.length)return;let c=A.current,d=A.current.firstChild,e=c.clientWidth,f=d.clientWidth;if(0===e||0===f)return;let g=window.getComputedStyle(d),h=u(g.marginLeft),i=u(g.marginRight),a=Math.round(e/(f+h+i)),j=new Array(a).fill(0),k=!1;if(c.childNodes.forEach(a=>{if(a.nodeType!==Node.ELEMENT_NODE||"line-break"===a.dataset.class||k)return;let b=window.getComputedStyle(a),g=u(b.marginTop),h=u(b.marginBottom),d=u(b.height)?Math.ceil(u(b.height))+g+h:0;if(0===d){k=!0;return}for(let c=0;c<a.childNodes.length;c+=1){let e=a.childNodes[c];if("IMG"===e.tagName&&0===e.clientHeight){k=!0;break}}if(!k){let f=j.indexOf(Math.min(...j));j[f]+=d;let i=f+1;a.style.order=i}}),!k){F(Math.max(...j));let l=a>0?a-1:0;G(l)}}));d.useEffect(()=>{let a=H.current;if(void 0!==a)return A.current&&A.current.childNodes.forEach(b=>{a.observe(b)}),()=>a?a.disconnect():{}},[e,f,c]);let D=(0,o.Z)(r,A),I={flexBasis:"100%",width:0,margin:0,padding:0},E=new Array(B).fill("").map((b,a)=>(0,s.jsx)("span",{"data-class":"line-break",style:(0,i.Z)({},I,{order:a+1})},a));return(0,s.jsxs)(w,(0,i.Z)({as:y,className:(0,p.Z)(C.root,x),ref:D,ownerState:n},z,{children:[c,E]}))});var x=f},9819:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(2466)}])},2049:function(f,b,a){"use strict";a.d(b,{R:function(){return k},Z:function(){return l}});var g=a(2086),h=a(8685),i=a(7545),c=a(9203),d=a(7434),j=a.n(d);function e(){var a,b,c=(a=["\n  fragment AuthorChip on Author {\n    name\n    slug\n    picture {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 100, height: 100 } }\n        }\n      )\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return e=function(){return c},c}a(3236);var k=(0,c.ZP)(e());function l(c){var b,a=c.author;return(0,g.jsx)(j(),{href:"/author/".concat(a.slug),passHref:!0,children:(0,g.jsx)(h.Z,{avatar:(0,g.jsx)(i.Z,{alt:a.name,src:null===(b=a.picture)|| void 0===b?void 0:b.url}),clickable:!0,label:a.name})})}},1089:function(c,b,a){"use strict";a.d(b,{Z:function(){return f}});var d=a(2086),e=a(4826);function f(a){var b=a.children;return(0,d.jsx)(e.Z,{children:b})}a(3236)},5304:function(d,b,a){"use strict";a.d(b,{Z:function(){return h}});var e=a(2086),f=a(8702),c=a(7434),g=a.n(c);function h(){return(0,e.jsx)(g(),{href:"/",passHref:!0,children:(0,e.jsx)(f.Z,{variant:"h1",children:"Yet another SWE Blog."})})}a(3236)},6324:function(e,b,a){"use strict";a.d(b,{Z:function(){return p}});var f=a(2086),g=a(1089),h=a(8702),i=a(7463),c=a(7434),j=a.n(c),k=a(3236);function l(){var a=(0,f.jsx)(j(),{href:"https://github.com/Neitsch/neitsch.github.io",passHref:!0,children:(0,f.jsx)(h.Z,{underline:"always",children:"here"})});return(0,f.jsx)("footer",{children:(0,f.jsx)(g.Z,{children:(0,f.jsxs)(i.Z,{children:["Built with NextJS. Find the source ",a,"."]})})})}var d=a(1413),m=a.n(d),n=a(4047);function o(){var a=(0,n.useRouter)();(0,k.useEffect)(function(){var b=function(a){window.goatcounter.count({path:a})};return a.events.on("routeChangeComplete",b),function(){a.events.off("routeChangeStart",b)}},[a.events]);var b="https://www.nigel-schuster.de"+(0,n.useRouter)().asPath;return(0,f.jsxs)(m(),{children:[(0,f.jsx)("link",{href:b,rel:"canonical"}),(0,f.jsx)("link",{href:"/favicon/apple-touch-icon.png",sizes:"180x180"}),(0,f.jsx)("link",{href:"/favicon/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,f.jsx)("link",{href:"/favicon/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,f.jsx)("link",{href:"/favicon/site.webmanifest",rel:"manifest"}),(0,f.jsx)("link",{color:"#000000",href:"/favicon/safari-pinned-tab.svg"}),(0,f.jsx)("link",{href:"/favicon/favicon.ico",rel:"icon"}),(0,f.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,f.jsx)("meta",{content:"/favicon/browserconfig.xml",name:"msapplication-config"}),(0,f.jsx)("meta",{content:"#000",name:"theme-color"}),(0,f.jsx)("link",{href:"/feed.xml",rel:"alternate",type:"application/rss+xml"}),(0,f.jsx)("meta",{content:"Personal blog.",name:"description"}),(0,f.jsx)("script",{async:!0,"data-goatcounter":"https://nigel.goatcounter.com/count","data-goatcounter-settings":"{}",src:"//gc.zgo.at/count.js"})]})}function p(a){var b=a.children;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{}),(0,f.jsx)("div",{className:"min-h-screen",children:(0,f.jsx)("main",{children:b})}),(0,f.jsx)(l,{})]})}},6404:function(f,b,a){"use strict";a.d(b,{E:function(){return j},Z:function(){return k}});var g=a(2086),c=a(2445),h=a(7463),i=a(3941),d=a(9203);function e(){var a,b,c=(a=["\n  ","\n  fragment MoreStories on Query {\n    moreStories: posts(\n      orderBy: date_DESC\n      first: 2\n      where: { slug_not_in: [$slug] }\n    ) {\n      ...PostPreview\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return e=function(){return c},c}a(3236);var j=(0,d.ZP)(e(),c.H);function k(a){var b=a.moreStories;return(0,g.jsxs)("div",{children:[(0,g.jsx)(h.Z,{variant:"h4",children:"More Stories"}),(0,g.jsx)(i.ZP,{columns:{xs:1,sm:2},spacing:{xs:1,sm:1,md:2},children:b.map(function(a){return(0,g.jsx)("div",{children:(0,g.jsx)(c.Z,{post:a})},a.slug)})})]})}},2445:function(g,b,a){"use strict";a.d(b,{H:function(){return q},Z:function(){return r}});var h=a(2086),c=a(2049),i=a(1454),j=a(7463),k=a(8702),l=a(4615),m=a(9490),n=a(2763),o=a(9862),d=a(9203),e=a(7434),p=a.n(e);function f(){var a,b,c=(a=["\n  ","\n  fragment PostPreview on Post {\n    title\n    slug\n    excerpt\n    coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    author {\n      ...AuthorChip\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return f=function(){return c},c}a(3236);var q=(0,d.ZP)(f(),c.R);function r(e){var a=e.post,f=a.title,b=a.coverImage,g=a.excerpt,d=a.author,q=a.slug,r=(0,h.jsx)(i.Z,{flexGrow:1,children:(0,h.jsx)(j.Z,{variant:"h4",children:f})}),s=(0,h.jsxs)(i.Z,{display:"flex",children:[r,d?(0,h.jsx)(i.Z,{alignSelf:"flex-end",children:(0,h.jsx)(c.Z,{author:d})}):null]}),t=(0,h.jsx)(j.Z,{variant:"body1",children:g}),u=(0,h.jsxs)(h.Fragment,{children:[s,t]}),v=(0,h.jsx)(p(),{href:"/posts/".concat(q),passHref:!0,children:(0,h.jsx)(k.Z,{children:u})});return(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(m.Z,{component:"img",src:null==b?void 0:b.url}),(0,h.jsx)(n.Z,{children:(0,h.jsx)(o.Z,{children:v})})]})}},2466:function(k,b,a){"use strict";a.r(b),a.d(b,{INDEX_LOOKUP:function(){return D},"__N_SSG":function(){return C},"default":function(){return E}});var l=a(2086),m=a(1089),d=a(2049),n=a(1454),o=a(7463),p=a(4615),q=a(9490),r=a(2763),s=a(9862),t=a(8702),c=a(9203),e=a(7434),u=a.n(e);function f(){var a,b,c=(a=["\n  ","\n  fragment HeroPost on Post {\n    title\n    slug\n    excerpt\n    coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    author {\n      ...AuthorChip\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return f=function(){return c},c}a(3236);var g=(0,c.ZP)(f(),d.R);function v(e){var a=e.post,f=a.title,b=a.coverImage,c=a.author,g=a.slug,h=a.excerpt,i=(0,l.jsx)(n.Z,{flexGrow:1,children:(0,l.jsx)(o.Z,{variant:"h4",children:f})}),j=(0,l.jsxs)(n.Z,{display:"flex",children:[i,c?(0,l.jsx)(n.Z,{alignSelf:"flex-end",children:(0,l.jsx)(d.Z,{author:c})}):null]}),k=(0,l.jsx)(o.Z,{variant:"body1",children:h});return(0,l.jsxs)(p.Z,{children:[(0,l.jsx)(q.Z,{component:"img",src:null==b?void 0:b.url}),(0,l.jsx)(r.Z,{children:(0,l.jsx)(s.Z,{children:(0,l.jsx)(u(),{href:"/posts/".concat(g),passHref:!0,children:(0,l.jsxs)(t.Z,{children:[j,k]})})})})]})}var w=a(5304);function x(){return(0,l.jsx)(n.Z,{display:"flex",children:(0,l.jsx)(n.Z,{flexGrow:1,children:(0,l.jsx)(w.Z,{})})})}var y=a(6324),z=a(6404),h=a(2445),i=a(1413),A=a.n(i);function B(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function j(){var a,b,c=(a=["\n  ","\n  ","\n\n  query IndexLookup {\n    posts(orderBy: date_DESC, first: 20) {\n      ...PostPreview\n      ...HeroPost\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return j=function(){return c},c}var C=!0,D=(0,c.ZP)(j(),h.H,g);function E(d){var a,b=function(a){if(Array.isArray(a))return B(a)}(a=d.posts)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||function(a,c){if(a){if("string"==typeof a)return B(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return B(a,c)}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=b.shift(),e=c?(0,l.jsx)(v,{post:c}):null;return(0,l.jsxs)(y.Z,{children:[(0,l.jsx)(A(),{children:(0,l.jsx)("title",{children:"Nigel Schuster's blog"})}),(0,l.jsxs)(m.Z,{children:[(0,l.jsx)(x,{}),e,(0,l.jsx)(z.Z,{moreStories:b})]})]})}}},function(a){a.O(0,[112,774,888,179],function(){return a(a.s=9819)}),_N_E=a.O()}])
//# sourceMappingURL=index-d1fd3889b4aa453e.js.map