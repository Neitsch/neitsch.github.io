(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{7273:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return c(8152)}])},7178:function(a,b,c){"use strict";c.d(b,{R:function(){return j},Z:function(){return k}});var d=c(4637),e=c(6191),f=c(3270),g=c(8676),h=c(3139);function i(){var a,b,c=(a=["\n  fragment AuthorChip on Author {\n    name\n    slug\n    picture {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 100, height: 100 } }\n        }\n      )\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return i=function(){return c},c}c(9496);var j=(0,g.ZP)(i());function k(a){var b,c=a.author;return(0,d.jsx)(h.default,{href:"/author/".concat(c.slug),passHref:!0,children:(0,d.jsx)(e.Z,{avatar:(0,d.jsx)(f.Z,{alt:c.name,src:null===(b=c.picture)|| void 0===b?void 0:b.url}),clickable:!0,label:c.name})})}},9439:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(4637),e=c(7941);function f(a){var b=a.children;return(0,d.jsx)(e.Z,{children:b})}c(9496)},6820:function(a,b,c){"use strict";c.d(b,{Z:function(){return g}});var d=c(4637),e=c(7411),f=c(3139);function g(){return(0,d.jsx)(f.default,{href:"/",passHref:!0,children:(0,d.jsx)(e.Z,{variant:"h1",children:"Yet another SWE Blog."})})}c(9496)},7892:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d=c(4637),e=c(9439),f=c(7411),g=c(6579),h=c(3139),i=c(9496);function j(){var a=(0,d.jsx)(h.default,{href:"https://github.com/Neitsch/neitsch.github.io",passHref:!0,children:(0,d.jsx)(f.Z,{underline:"always",children:"here"})});return(0,d.jsx)("footer",{children:(0,d.jsx)(e.Z,{children:(0,d.jsxs)(g.Z,{children:["Built with NextJS. Find the source ",a,"."]})})})}var k=c(5748),l=c(9633);function m(){var a=(0,l.useRouter)();(0,i.useEffect)(function(){var b=function(a){window.goatcounter.count({path:a})};return a.events.on("routeChangeComplete",b),function(){a.events.off("routeChangeStart",b)}},[a.events]);var b="https://www.nigel-schuster.de"+(0,l.useRouter)().asPath;return(0,d.jsxs)(k.default,{children:[(0,d.jsx)("link",{href:b,rel:"canonical"}),(0,d.jsx)("link",{href:"/favicon/apple-touch-icon.png",sizes:"180x180"}),(0,d.jsx)("link",{href:"/favicon/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,d.jsx)("link",{href:"/favicon/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,d.jsx)("link",{href:"/favicon/site.webmanifest",rel:"manifest"}),(0,d.jsx)("link",{color:"#000000",href:"/favicon/safari-pinned-tab.svg"}),(0,d.jsx)("link",{href:"/favicon/favicon.ico",rel:"icon"}),(0,d.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,d.jsx)("meta",{content:"/favicon/browserconfig.xml",name:"msapplication-config"}),(0,d.jsx)("meta",{content:"#000",name:"theme-color"}),(0,d.jsx)("link",{href:"/feed.xml",rel:"alternate",type:"application/rss+xml"}),(0,d.jsx)("meta",{content:"Personal blog.",name:"description"}),(0,d.jsx)("script",{async:!0,"data-goatcounter":"https://nigel.goatcounter.com/count","data-goatcounter-settings":"{}",src:"//gc.zgo.at/count.js"})]})}function n(a){var b=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{}),(0,d.jsx)("div",{className:"min-h-screen",children:(0,d.jsx)("main",{children:b})}),(0,d.jsx)(j,{})]})}},2668:function(a,b,c){"use strict";c.d(b,{E:function(){return j},Z:function(){return k}});var d=c(4637),e=c(1013),f=c(6579),g=c(6882),h=c(8676);function i(){var a,b,c=(a=["\n  ","\n  fragment MoreStories on Query {\n    moreStories: posts(\n      orderBy: date_DESC\n      first: 2\n      where: { slug_not_in: [$slug] }\n    ) {\n      ...PostPreview\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return i=function(){return c},c}c(9496);var j=(0,h.ZP)(i(),e.H);function k(a){var b=a.moreStories;return(0,d.jsxs)("div",{children:[(0,d.jsx)(f.Z,{variant:"h4",children:"More Stories"}),(0,d.jsx)(g.ZP,{columns:{xs:1,sm:2},spacing:{xs:1,sm:1,md:2},children:b.map(function(a){return(0,d.jsx)("div",{children:(0,d.jsx)(e.Z,{post:a})},a.slug)})})]})}},1013:function(a,b,c){"use strict";c.d(b,{H:function(){return p},Z:function(){return q}});var d=c(4637),e=c(7178),f=c(8689),g=c(6579),h=c(7411),i=c(1568),j=c(6343),k=c(492),l=c(6465),m=c(8676),n=c(3139);function o(){var a,b,c=(a=["\n  ","\n  fragment PostPreview on Post {\n    title\n    slug\n    excerpt\n    coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    author {\n      ...AuthorChip\n    }\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return o=function(){return c},c}c(9496);var p=(0,m.ZP)(o(),e.R);function q(a){var b=a.post,c=b.title,m=b.coverImage,o=b.excerpt,p=b.author,q=b.slug,r=(0,d.jsx)(f.Z,{flexGrow:1,children:(0,d.jsx)(g.Z,{variant:"h4",children:c})}),s=(0,d.jsxs)(f.Z,{display:"flex",children:[r,p?(0,d.jsx)(f.Z,{alignSelf:"flex-end",children:(0,d.jsx)(e.Z,{author:p})}):null]}),t=(0,d.jsx)(g.Z,{variant:"body1",children:o}),u=(0,d.jsxs)(d.Fragment,{children:[s,t]}),v=(0,d.jsx)(n.default,{href:"/posts/".concat(q),passHref:!0,children:(0,d.jsx)(h.Z,{children:u})});return(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(j.Z,{component:"img",src:null==m?void 0:m.url}),(0,d.jsx)(k.Z,{children:(0,d.jsx)(l.Z,{children:v})})]})}},1878:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(4637);function e(){return(0,d.jsx)("hr",{className:"border-accent-2 mt-28 mb-24"})}c(9496)},8152:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return F},POST_FRAGMENT:function(){return G},POST_LOOKUP:function(){return H},"default":function(){return I}});var d=c(4637),e=c(7178),f=c(9439),g=c(6820),h=c(7892),i=c(2668),j=c(1878),k=c(8689),l=c(6579),m=c(1568),n=c(6343),o=c(492),p=c(3145),q=c(8676),r=c(2794),s=c(1799);c.n(s);var t=c(5748),u=c(4752),v=c(2304),w=c(8900),x=c(1299),y=c(22),z=c(5155),A=c(3369),B=c(2616);function C(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}function D(){var a=C(["\n  ","\n  fragment Post on Post {\n    title\n    excerpt\n    slug\n    content\n    date\n    ogImage: coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    author {\n      ...AuthorChip\n    }\n  }\n"]);return D=function(){return a},a}function E(){var a=C(["\n  ","\n  fragment PostLookup on Query {\n    post(stage: $stage, where: { slug: $slug }) {\n      ...Post\n    }\n    ...MoreStories\n  }\n"]);return E=function(){return a},a}var F=!0,G=(0,q.ZP)(D(),e.R),H=(0,q.ZP)(E(),i.E);function I(a){var b=a.post,c=a.moreStories,q=(0,d.jsx)("span",{children:"Something went wrong"});if(b){var s,C,D,E=(0,d.jsxs)(t.default,{children:[(0,d.jsx)("title",{children:b.title}),(0,d.jsx)("meta",{content:null!==(C=b.excerpt)&& void 0!==C?C:"",name:"description"}),(0,d.jsx)("meta",{content:b.title,property:"og:title"}),(0,d.jsx)("meta",{content:null!==(D=b.excerpt)&& void 0!==D?D:"",property:"og:description"}),(0,d.jsx)("meta",{content:"article",property:"og:type"}),(0,d.jsx)("meta",{content:"en_US",property:"og:locale"})]}),F=(0,d.jsx)(k.Z,{flexGrow:1,children:(0,d.jsx)(l.Z,{component:"h1",variant:"h3",children:b.title})}),G=b.author?(0,d.jsx)(k.Z,{alignSelf:"flex-end",children:(0,d.jsx)(e.Z,{author:b.author})}):null,H=(0,d.jsxs)(m.Z,{children:[(0,d.jsx)(n.Z,{component:"img",src:null===(s=b.coverImage)|| void 0===s?void 0:s.url}),(0,d.jsxs)(o.Z,{children:[(0,d.jsxs)(k.Z,{display:"flex",children:[F,G]}),(0,d.jsx)(u.D,{rehypePlugins:[[B.Z,{languages:{x86asm:r.Z}}],],children:b.content}),(0,d.jsxs)(l.Z,{sx:{fontStyle:"italic",paddingBottom:"1.5em"},children:["Published on ",b.date,"."]}),(0,d.jsx)(p.Z,{children:(0,d.jsxs)("div",{children:[(0,d.jsx)(v.Z,{url:window.location.href,children:(0,d.jsx)(w.Z,{round:!0})}),(0,d.jsx)(x.Z,{url:window.location.href,children:(0,d.jsx)(y.Z,{round:!0})}),(0,d.jsx)(z.Z,{url:window.location.href,children:(0,d.jsx)(A.Z,{round:!0})})]})})]})]});q=(0,d.jsxs)(d.Fragment,{children:[E,H]})}return(0,d.jsx)(h.Z,{children:(0,d.jsxs)(f.Z,{children:[(0,d.jsx)(g.Z,{}),(0,d.jsxs)(d.Fragment,{children:[q,(0,d.jsx)(j.Z,{}),(0,d.jsx)(i.Z,{moreStories:c})]})]})})}}},function(a){a.O(0,[715,429,438,774,888,179],function(){return a(a.s=7273)}),_N_E=a.O()}])
//# sourceMappingURL=[slug]-730e04bd4a3cbde5.js.map