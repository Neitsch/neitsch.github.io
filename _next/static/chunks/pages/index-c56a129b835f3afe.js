(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5745:function(a,b,c){"use strict";c.d(b,{ZP:function(){return x}});var d=c(4750),e=c(5900),f=c(3402),g=c(7170),h=c(1374),i=c(842),j=c(3906),k=c(1275),l=c(4823),m=c(1626);c(9036);var n=c(9496),o=c(700),p=c(441);function q(a){return(0,o.Z)("MuiMasonry",a)}(0,p.Z)("MuiMasonry",["root"]);var r=c(4637);const s=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],t=a=>Number(a.replace("px","")),u=a=>{const{classes:b}=a;return(0,f.Z)({root:["root"]},q,b)},v=(0,g.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:(a,b)=>[b.root]})(({ownerState:a,theme:b})=>{let c={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}};const d={};if(a.isSSR){const f={},g=Number(b.spacing(a.defaultSpacing).replace("px",""));for(let h=1;h<=a.defaultColumns;h+=1)f[`&:nth-of-type(${a.defaultColumns}n+${h%a.defaultColumns})`]={order:h};return d.height=a.defaultHeight,d.margin=-(g/2),d["& > *"]=(0,e.Z)({},c["& > *"],f,{margin:g/2,width:`calc(${(100/a.defaultColumns).toFixed(2)}% - ${g}px)`}),(0,e.Z)({},c,d)}const l=(0,i.P$)({values:a.spacing,breakpoints:b.breakpoints.values}),m=(0,j.hB)(b);c=(0,k.Z)(c,(0,i.k9)({theme:b},l,b=>{const c=Number(b),d=Number((0,j.NA)(m,c).replace("px",""));return(0,e.Z)({margin:-(d/2),"& > *":{margin:d/2}},a.maxColumnHeight&&{height:Math.ceil(a.maxColumnHeight+d)})}));const n=(0,i.P$)({values:a.columns,breakpoints:b.breakpoints.values});return c=(0,k.Z)(c,(0,i.k9)({theme:b},n,a=>{const b=Number(a),c=`${(100/b).toFixed(2)}%`,d="object"!=typeof l?(0,j.NA)(m,Number(l)):"0px";return{"& > *":{width:`calc(${c} - ${d})`}}})),"object"==typeof l&&(c=(0,k.Z)(c,(0,i.k9)({theme:b},l,(a,b)=>{if(b){const c=Number(a),d=Object.keys(n).pop(),e=(0,j.NA)(m,c),f="object"==typeof n?n[b]||n[d]:n,g=`${(100/f).toFixed(2)}%`;return{"& > *":{width:`calc(${g} - ${e})`}}}return null}))),c}),w=n.forwardRef(function(a,b){const c=(0,h.Z)({props:a,name:"MuiMasonry"}),{children:f,className:g,component:i="div",columns:j=4,spacing:k=1,defaultColumns:o,defaultHeight:p,defaultSpacing:q}=c,w=(0,d.Z)(c,s),x=n.useRef(),[y,z]=n.useState(),A=!y&&p&& void 0!==o&& void 0!==q,[B,C]=n.useState(A?o-1:0),D=(0,e.Z)({},c,{spacing:k,columns:j,maxColumnHeight:y,defaultColumns:o,defaultHeight:p,defaultSpacing:q,isSSR:A}),E=u(D),F=n.useRef("undefined"==typeof ResizeObserver?void 0:new ResizeObserver(a=>{var b,c,d,e,f,g;if(a){let h,i,j,k;if(a[0].target.className.includes(E.root)?(h=a[0].target,j=a[0].contentRect.width,i=(null==(b=a[1])?void 0:b.target)||h.firstChild,k=(null==(c=i)?void 0:null==(d=c.contentRect)?void 0:d.width)||(null==(e=i)?void 0:e.clientWidth)||0):(i=a[0].target,k=a[0].contentRect.width,h=(null==(f=a[1])?void 0:f.target)||i.parentElement,j=(null==(g=h.contentRect)?void 0:g.width)||h.clientWidth),0!==j&&0!==k&&h&&i){const l=window.getComputedStyle(i),m=t(l.marginLeft),n=t(l.marginRight),o=Math.round(j/(k+m+n)),p=new Array(o).fill(0);let q=!1;if(h.childNodes.forEach(a=>{if(a.nodeType===Node.ELEMENT_NODE&&"line-break"!==a.dataset.class&&!q){const b=window.getComputedStyle(a),c=t(b.marginTop),d=t(b.marginBottom),e=t(b.height)?Math.ceil(t(b.height))+c+d:0;if(0===e){q=!0;return}for(let f=0;f<a.childNodes.length;f+=1){const g=a.childNodes[f];if("IMG"===g.tagName&&0===g.clientHeight){q=!0;break}}if(!q){const h=p.indexOf(Math.min(...p));p[h]+=e;const i=h+1;a.style.order=i}}}),!q){z(Math.max(...p));const r=o>0?o-1:0;C(r)}}}}));n.useEffect(()=>{const a=F.current;if(void 0!==a){const b=x.current;return b&&a&&(a.observe(b),b.firstChild&&a.observe(b.firstChild)),()=>a?a.disconnect():{}}},[j,k,f]);const G=(0,l.Z)(b,x),H={flexBasis:"100%",width:0,margin:0,padding:0},I=new Array(B).fill("").map((a,b)=>(0,r.jsx)("span",{"data-class":"line-break",style:(0,e.Z)({},H,{order:b+1})},b));return(0,r.jsxs)(v,(0,e.Z)({as:i,className:(0,m.Z)(E.root,g),ref:G,ownerState:D},w,{children:[f,I]}))});var x=w},3164:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(5401)}])},3522:function(a,b,c){"use strict";c.d(b,{R:function(){return j},Z:function(){return k}});var d=c(4637),e=c(1437),f=c(4696),g=c(4973),h=c(3502);function i(){var a,b,c=(a=["\n  fragment AuthorChip on Author {\n    name\n    slug\n    picture {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 100, height: 100 } }\n        }\n      )\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return i=function(){return c},c}c(9496);var j=(0,g.ZP)(i());function k(a){var b,c=a.author;return(0,d.jsx)(h.default,{href:"/author/".concat(c.slug),passHref:!0,children:(0,d.jsx)(e.Z,{avatar:(0,d.jsx)(f.Z,{alt:c.name,src:null===(b=c.picture)|| void 0===b?void 0:b.url}),clickable:!0,label:c.name})})}},4062:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(4637),e=c(8406);function f(a){var b=a.children;return(0,d.jsx)(e.Z,{children:b})}c(9496)},8806:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(4637),e=c(5700),f=c(3502);function g(){return(0,d.jsx)(f.default,{href:"/",passHref:!0,children:(0,d.jsx)(e.Z,{variant:"h1",children:"Yet another SWE Blog."})})}c(9496)},6845:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d=c(4637),e=c(4062),f=c(5700),g=c(1784),h=c(3502),i=c(9496);function j(){var a=(0,d.jsx)(h.default,{href:"https://github.com/Neitsch/neitsch.github.io",passHref:!0,children:(0,d.jsx)(f.Z,{underline:"always",children:"here"})});return(0,d.jsx)("footer",{children:(0,d.jsx)(e.Z,{children:(0,d.jsxs)(g.Z,{children:["Built with NextJS. Find the source ",a,"."]})})})}var k=c(6464),l=c(7043);function m(){var a=(0,l.useRouter)();(0,i.useEffect)(function(){var b=function(a){window.goatcounter.count({path:a})};return a.events.on("routeChangeComplete",b),function(){a.events.off("routeChangeStart",b)}},[a.events]);var b="https://www.nigel-schuster.de"+(0,l.useRouter)().asPath;return(0,d.jsxs)(k.default,{children:[(0,d.jsx)("link",{href:b,rel:"canonical"}),(0,d.jsx)("link",{href:"/favicon/apple-touch-icon.png",sizes:"180x180"}),(0,d.jsx)("link",{href:"/favicon/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,d.jsx)("link",{href:"/favicon/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,d.jsx)("link",{href:"/favicon/site.webmanifest",rel:"manifest"}),(0,d.jsx)("link",{color:"#000000",href:"/favicon/safari-pinned-tab.svg"}),(0,d.jsx)("link",{href:"/favicon/favicon.ico",rel:"icon"}),(0,d.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,d.jsx)("meta",{content:"/favicon/browserconfig.xml",name:"msapplication-config"}),(0,d.jsx)("meta",{content:"#000",name:"theme-color"}),(0,d.jsx)("link",{href:"/feed.xml",rel:"alternate",type:"application/rss+xml"}),(0,d.jsx)("meta",{content:"Personal blog.",name:"description"}),(0,d.jsx)("script",{async:!0,"data-goatcounter":"https://nigel.goatcounter.com/count","data-goatcounter-settings":"{}",src:"//gc.zgo.at/count.js"})]})}function n(a){var b=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{}),(0,d.jsx)("div",{className:"min-h-screen",children:(0,d.jsx)("main",{children:b})}),(0,d.jsx)(j,{})]})}},2292:function(a,b,c){"use strict";c.d(b,{E:function(){return j},Z:function(){return k}});var d=c(4637),e=c(8195),f=c(1784),g=c(5745),h=c(4973);function i(){var a,b,c=(a=["\n  ","\n  fragment MoreStories on Query {\n    moreStories: posts(\n      orderBy: date_DESC\n      first: 2\n      where: { slug_not_in: [$slug] }\n    ) {\n      ...PostPreview\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return i=function(){return c},c}c(9496);var j=(0,h.ZP)(i(),e.H);function k(a){var b=a.moreStories;return(0,d.jsxs)("div",{children:[(0,d.jsx)(f.Z,{variant:"h4",children:"More Stories"}),(0,d.jsx)(g.ZP,{columns:{xs:1,sm:2},spacing:{xs:1,sm:1,md:2},children:b.map(function(a){return(0,d.jsx)("div",{children:(0,d.jsx)(e.Z,{post:a})},a.slug)})})]})}},8195:function(a,b,c){"use strict";c.d(b,{H:function(){return p},Z:function(){return q}});var d=c(4637),e=c(3522),f=c(4658),g=c(1784),h=c(5700),i=c(3552),j=c(607),k=c(7876),l=c(2555),m=c(4973),n=c(3502);function o(){var a,b,c=(a=["\n  ","\n  fragment PostPreview on Post {\n    title\n    slug\n    excerpt\n    coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    author {\n      ...AuthorChip\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return o=function(){return c},c}c(9496);var p=(0,m.ZP)(o(),e.R);function q(a){var b=a.post,c=b.title,m=b.coverImage,o=b.excerpt,p=b.author,q=b.slug,r=(0,d.jsx)(f.Z,{flexGrow:1,children:(0,d.jsx)(g.Z,{variant:"h4",children:c})}),s=(0,d.jsxs)(f.Z,{display:"flex",children:[r,p?(0,d.jsx)(f.Z,{alignSelf:"flex-end",children:(0,d.jsx)(e.Z,{author:p})}):null]}),t=(0,d.jsx)(g.Z,{variant:"body1",children:o}),u=(0,d.jsxs)(d.Fragment,{children:[s,t]}),v=(0,d.jsx)(n.default,{href:"/posts/".concat(q),passHref:!0,children:(0,d.jsx)(h.Z,{children:u})});return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(j.Z,{component:"img",src:null==m?void 0:m.url}),(0,d.jsx)(k.Z,{children:(0,d.jsx)(l.Z,{children:v})})]})}},5401:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return w},"default":function(){return x}});var d=c(4637),e=c(4062),f=c(3522),g=c(4658),h=c(1784),i=c(3552),j=c(607),k=c(7876),l=c(2555),m=c(5700),n=c(4973),o=c(3502);function p(){var a,b,c=(a=["\n  ","\n  fragment HeroPost on Post {\n    title\n    slug\n    excerpt\n    coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    author {\n      ...AuthorChip\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return p=function(){return c},c}function q(a){var b=a.post,c=b.title,e=b.coverImage,n=b.author,p=b.slug,q=b.excerpt,r=(0,d.jsx)(g.Z,{flexGrow:1,children:(0,d.jsx)(h.Z,{variant:"h4",children:c})}),s=(0,d.jsxs)(g.Z,{display:"flex",children:[r,n?(0,d.jsx)(g.Z,{alignSelf:"flex-end",children:(0,d.jsx)(f.Z,{author:n})}):null]}),t=(0,d.jsx)(h.Z,{variant:"body1",children:q});return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(j.Z,{component:"img",src:null==e?void 0:e.url}),(0,d.jsx)(k.Z,{children:(0,d.jsx)(l.Z,{children:(0,d.jsx)(o.default,{href:"/posts/".concat(p),passHref:!0,children:(0,d.jsxs)(m.Z,{children:[s,t]})})})})]})}c(9496),(0,n.ZP)(p(),f.R);var r=c(8806);function s(){return(0,d.jsx)(g.Z,{display:"flex",children:(0,d.jsx)(g.Z,{flexGrow:1,children:(0,d.jsx)(r.Z,{})})})}var t=c(6845),u=c(2292),v=c(6464),w=!0;function x(a){var b,c=function(a){if(Array.isArray(a)){for(var b=0,c=new Array(a.length);b<a.length;b++)c[b]=a[b];return c}}(b=a.posts)||function(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}(b)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),f=c.shift(),g=f?(0,d.jsx)(q,{post:f}):null;return(0,d.jsxs)(t.Z,{children:[(0,d.jsx)(v.default,{children:(0,d.jsx)("title",{children:"Nigel Schuster's blog"})}),(0,d.jsxs)(e.Z,{children:[(0,d.jsx)(s,{}),g,(0,d.jsx)(u.Z,{moreStories:c})]})]})}}},function(a){a.O(0,[349,774,888,179],function(){return a(a.s=3164)}),_N_E=a.O()}])
//# sourceMappingURL=index-c56a129b835f3afe.js.map