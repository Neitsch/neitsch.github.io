(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3339:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(4620)}])},1855:function(a,b,c){"use strict";c.d(b,{R:function(){return j},Z:function(){return k}});var d=c(4637),e=c(8477),f=c(189),g=c(7724),h=c(2177);function i(){var a,b,c=(a=["\n  fragment AuthorChip on Author {\n    name\n    slug\n    picture {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 100, height: 100 } }\n        }\n      )\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return i=function(){return c},c}c(9496);var j=(0,g.ZP)(i());function k(a){var b,c=a.author;return(0,d.jsx)(h.default,{href:"/author/".concat(c.slug),passHref:!0,children:(0,d.jsx)(e.Z,{avatar:(0,d.jsx)(f.Z,{alt:c.name,src:null===(b=c.picture)|| void 0===b?void 0:b.url}),clickable:!0,label:c.name})})}},1627:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(4637),e=c(7306);function f(a){var b=a.children;return(0,d.jsx)(e.Z,{children:b})}c(9496)},1444:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(4637),e=c(257),f=c(2177);function g(){return(0,d.jsx)(f.default,{href:"/",passHref:!0,children:(0,d.jsx)(e.Z,{variant:"h1",children:"Yet another SWE Blog."})})}c(9496)},2394:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d=c(4637),e=c(1627),f=c(257),g=c(7939),h=c(2177),i=c(9496);function j(){var a=(0,d.jsx)(h.default,{href:"https://github.com/Neitsch/neitsch.github.io",passHref:!0,children:(0,d.jsx)(f.Z,{underline:"always",children:"here"})});return(0,d.jsx)("footer",{children:(0,d.jsx)(e.Z,{children:(0,d.jsxs)(g.Z,{children:["Built with NextJS. Find the source ",a,"."]})})})}var k=c(6194),l=c(7784);function m(){var a=(0,l.useRouter)();return(0,i.useEffect)(function(){var b=function(a){window.goatcounter.count({path:a})};return a.events.on("routeChangeComplete",b),function(){a.events.off("routeChangeStart",b)}},[a.events]),(0,d.jsxs)(k.default,{children:[(0,d.jsx)("link",{href:"/favicon/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,d.jsx)("link",{href:"/favicon/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,d.jsx)("link",{href:"/favicon/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,d.jsx)("link",{href:"/favicon/site.webmanifest",rel:"manifest"}),(0,d.jsx)("link",{color:"#000000",href:"/favicon/safari-pinned-tab.svg",rel:"mask-icon"}),(0,d.jsx)("link",{href:"/favicon/favicon.ico",rel:"shortcut icon"}),(0,d.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,d.jsx)("meta",{content:"/favicon/browserconfig.xml",name:"msapplication-config"}),(0,d.jsx)("meta",{content:"#000",name:"theme-color"}),(0,d.jsx)("link",{href:"/feed.xml",rel:"alternate",type:"application/rss+xml"}),(0,d.jsx)("meta",{content:"Personal blog.",name:"description"}),(0,d.jsx)("script",{async:!0,"data-goatcounter":"https://nigel.goatcounter.com/count","data-goatcounter-settings":"{}",src:"//gc.zgo.at/count.js"})]})}function n(a){var b=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{}),(0,d.jsx)("div",{className:"min-h-screen",children:(0,d.jsx)("main",{children:b})}),(0,d.jsx)(j,{})]})}},1752:function(a,b,c){"use strict";c.d(b,{E:function(){return j},Z:function(){return k}});var d=c(4637),e=c(8004),f=c(7939),g=c(3611),h=c(7724);function i(){var a,b,c=(a=["\n  ","\n  fragment MoreStories on Query {\n    moreStories: posts(\n      orderBy: date_DESC\n      first: 2\n      where: { slug_not_in: [$slug] }\n    ) {\n      ...PostPreview\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return i=function(){return c},c}c(9496);var j=(0,h.ZP)(i(),e.H);function k(a){var b=a.moreStories;return(0,d.jsxs)("div",{children:[(0,d.jsx)(f.Z,{variant:"h4",children:"More Stories"}),(0,d.jsx)(g.ZP,{container:!0,spacing:5,children:b.map(function(a){return(0,d.jsx)(g.ZP,{item:!0,md:6,xs:12,children:(0,d.jsx)(e.Z,{post:a})},a.slug)})})]})}},8004:function(a,b,c){"use strict";c.d(b,{H:function(){return p},Z:function(){return q}});var d=c(4637),e=c(1855),f=c(5920),g=c(7939),h=c(257),i=c(8386),j=c(269),k=c(9475),l=c(5540),m=c(7724),n=c(2177);function o(){var a,b,c=(a=["\n  ","\n  fragment PostPreview on Post {\n    title\n    slug\n    excerpt\n    coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    author {\n      ...AuthorChip\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return o=function(){return c},c}c(9496);var p=(0,m.ZP)(o(),e.R);function q(a){var b=a.post,c=b.title,m=b.coverImage,o=b.excerpt,p=b.author,q=b.slug,r=(0,d.jsx)(f.Z,{flexGrow:1,children:(0,d.jsx)(g.Z,{variant:"h4",children:c})}),s=(0,d.jsxs)(f.Z,{display:"flex",children:[r,p?(0,d.jsx)(f.Z,{alignSelf:"flex-end",children:(0,d.jsx)(e.Z,{author:p})}):null]}),t=(0,d.jsx)(g.Z,{variant:"body1",children:o}),u=(0,d.jsxs)(d.Fragment,{children:[s,t]}),v=(0,d.jsx)(n.default,{href:"/posts/".concat(q),passHref:!0,children:(0,d.jsx)(h.Z,{children:u})});return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(j.Z,{component:"img",src:null==m?void 0:m.url}),(0,d.jsx)(k.Z,{children:(0,d.jsx)(l.Z,{children:v})})]})}},4620:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return w},"default":function(){return x}});var d=c(4637),e=c(1627),f=c(1855),g=c(5920),h=c(7939),i=c(8386),j=c(269),k=c(9475),l=c(5540),m=c(257),n=c(7724),o=c(2177);function p(){var a,b,c=(a=["\n  ","\n  fragment HeroPost on Post {\n    title\n    slug\n    excerpt\n    coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    author {\n      ...AuthorChip\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return p=function(){return c},c}function q(a){var b=a.post,c=b.title,e=b.coverImage,n=b.author,p=b.slug,q=b.excerpt,r=(0,d.jsx)(g.Z,{flexGrow:1,children:(0,d.jsx)(h.Z,{variant:"h4",children:c})}),s=(0,d.jsxs)(g.Z,{display:"flex",children:[r,n?(0,d.jsx)(g.Z,{alignSelf:"flex-end",children:(0,d.jsx)(f.Z,{author:n})}):null]}),t=(0,d.jsx)(h.Z,{variant:"body1",children:q});return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(j.Z,{component:"img",src:null==e?void 0:e.url}),(0,d.jsx)(k.Z,{children:(0,d.jsx)(l.Z,{children:(0,d.jsx)(o.default,{href:"/posts/".concat(p),passHref:!0,children:(0,d.jsxs)(m.Z,{children:[s,t]})})})})]})}c(9496),(0,n.ZP)(p(),f.R);var r=c(1444);function s(){return(0,d.jsxs)(g.Z,{display:"flex",children:[(0,d.jsx)(g.Z,{flexGrow:1,children:(0,d.jsx)(r.Z,{})}),(0,d.jsx)(g.Z,{alignSelf:"flex-end",children:(0,d.jsx)(h.Z,{variant:"h4",children:"Software engineering notes."})})]})}var t=c(2394),u=c(1752),v=c(6194),w=!0;function x(a){var b,c=function(a){if(Array.isArray(a)){for(var b=0,c=new Array(a.length);b<a.length;b++)c[b]=a[b];return c}}(b=a.posts)||function(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}(b)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}(),f=c.shift(),g=f?(0,d.jsx)(q,{post:f}):null;return(0,d.jsxs)(t.Z,{children:[(0,d.jsx)(v.default,{children:(0,d.jsx)("title",{children:"Nigel Schuster's blog"})}),(0,d.jsxs)(e.Z,{children:[(0,d.jsx)(s,{}),g,(0,d.jsx)(u.Z,{moreStories:c})]})]})}}},function(a){a.O(0,[535,888,179],function(){return a(a.s=3339)}),_N_E=a.O()}])
//# sourceMappingURL=index-bb52fcc83ec37ea7.js.map