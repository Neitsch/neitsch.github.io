(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{7511:function(n,e,r){"use strict";r.d(e,{R:function(){return l},Z:function(){return h}});var t,i=r(168),s=r(461),o=r(7109),c=r(9786),a=r(1664),u=r(5893),l=(0,c.ZP)(t||(t=(0,i.Z)(["\n  fragment AuthorChip on Author {\n    name\n    slug\n    picture {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 100, height: 100 } }\n        }\n      )\n    }\n  }\n"])));function h(n){var e,r=n.author;return(0,u.jsx)(a.default,{href:"/author/".concat(r.slug),passHref:!0,children:(0,u.jsx)(s.Z,{avatar:(0,u.jsx)(o.Z,{alt:r.name,src:null===(e=r.picture)||void 0===e?void 0:e.url}),clickable:!0,label:r.name})})}},7063:function(n,e,r){"use strict";r.d(e,{Z:function(){return s}});var t=r(4065),i=r(5893);function s(n){var e=n.children;return(0,i.jsx)(t.Z,{children:e})}},1655:function(n,e,r){"use strict";r.d(e,{Z:function(){return o}});var t=r(6634),i=r(1664),s=r(5893);function o(){return(0,s.jsx)(i.default,{href:"/",passHref:!0,children:(0,s.jsx)(t.Z,{variant:"h1",children:"Yet another SWE Blog."})})}},9798:function(n,e,r){"use strict";r.d(e,{Z:function(){return d}});var t=r(7063),i=r(6634),s=r(2658),o=r(1664),c=r(5893);function a(){var n=(0,c.jsx)(o.default,{href:"https://github.com/Neitsch/neitsch.github.io",passHref:!0,children:(0,c.jsx)(i.Z,{underline:"always",children:"here"})});return(0,c.jsx)("footer",{children:(0,c.jsx)(t.Z,{children:(0,c.jsxs)(s.Z,{children:["Built with NextJS. Find the source ",n,"."]})})})}var u=r(9008),l=r(1163),h=r(7294);function f(){var n=(0,l.useRouter)();return(0,h.useEffect)((function(){var e=function(n){window.goatcounter.count({path:n})};return n.events.on("routeChangeComplete",e),function(){n.events.off("routeChangeStart",e)}}),[n.events]),(0,c.jsxs)(u.default,{children:[(0,c.jsx)("link",{href:"/favicon/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),(0,c.jsx)("link",{href:"/favicon/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),(0,c.jsx)("link",{href:"/favicon/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),(0,c.jsx)("link",{href:"/favicon/site.webmanifest",rel:"manifest"}),(0,c.jsx)("link",{color:"#000000",href:"/favicon/safari-pinned-tab.svg",rel:"mask-icon"}),(0,c.jsx)("link",{href:"/favicon/favicon.ico",rel:"shortcut icon"}),(0,c.jsx)("meta",{content:"#000000",name:"msapplication-TileColor"}),(0,c.jsx)("meta",{content:"/favicon/browserconfig.xml",name:"msapplication-config"}),(0,c.jsx)("meta",{content:"#000",name:"theme-color"}),(0,c.jsx)("link",{href:"/feed.xml",rel:"alternate",type:"application/rss+xml"}),(0,c.jsx)("meta",{content:"Personal blog.",name:"description"}),(0,c.jsx)("script",{async:!0,"data-goatcounter":"https://nigel.goatcounter.com/count","data-goatcounter-settings":"{}",src:"//gc.zgo.at/count.js"})]})}function d(n){var e=n.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(f,{}),(0,c.jsx)("div",{className:"min-h-screen",children:(0,c.jsx)("main",{children:e})}),(0,c.jsx)(a,{})]})}},8453:function(n,e,r){"use strict";r.d(e,{H:function(){return j},Z:function(){return p}});var t,i=r(168),s=r(7511),o=r(1508),c=r(2658),a=r(6634),u=r(8692),l=r(4962),h=r(2643),f=r(7797),d=r(9786),x=r(1664),g=r(5893),j=(0,d.ZP)(t||(t=(0,i.Z)(["\n  ","\n  fragment PostPreview on Post {\n    title\n    slug\n    excerpt\n    coverImage {\n      url(\n        transformation: {\n          image: { resize: { fit: crop, width: 2000, height: 1000 } }\n        }\n      )\n    }\n    author {\n      ...AuthorChip\n    }\n  }\n"])),s.R);function p(n){var e=n.post,r=e.title,t=e.coverImage,i=e.excerpt,d=e.author,j=e.slug,p=(0,g.jsx)(o.Z,{flexGrow:1,children:(0,g.jsx)(c.Z,{variant:"h4",children:r})}),m=(0,g.jsxs)(o.Z,{display:"flex",children:[p,d?(0,g.jsx)(o.Z,{alignSelf:"flex-end",children:(0,g.jsx)(s.Z,{author:d})}):null]}),v=(0,g.jsx)(c.Z,{variant:"body1",children:i}),Z=(0,g.jsxs)(g.Fragment,{children:[m,v]}),w=(0,g.jsx)(x.default,{href:"/posts/".concat(j),passHref:!0,children:(0,g.jsx)(a.Z,{children:Z})});return(0,g.jsxs)(u.Z,{children:[(0,g.jsx)(l.Z,{component:"img",src:null===t||void 0===t?void 0:t.url}),(0,g.jsx)(h.Z,{children:(0,g.jsx)(f.Z,{children:w})})]})}},5581:function(n,e,r){"use strict";r.d(e,{Z:function(){return i}});var t=r(5893);function i(){return(0,t.jsx)("hr",{className:"border-accent-2 mt-28 mb-24"})}},7390:function(n,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return v},ALL_AUTHORS:function(){return Z},LOOKUP_AUTHOR:function(){return w},default:function(){return P}});var t,i,s=r(168),o=r(7063),c=r(1655),a=r(9798),u=r(8453),l=r(5581),h=r(8692),f=r(2643),d=r(2658),x=r(5725),g=r(9786),j=r(3405),p=r(1788),m=r(5893),v=!0,Z=(0,g.ZP)(t||(t=(0,s.Z)(["\n  query AllAuthors {\n    authors {\n      slug\n      posts {\n        slug\n      }\n    }\n  }\n"]))),w=(0,g.ZP)(i||(i=(0,s.Z)(["\n  ","\n  fragment AuthorInfo on Author {\n    name\n    biography\n    title\n  }\n  query LookupAuthor($slug: String!) {\n    postsConnection(where: { author: { slug: $slug } }) {\n      edges {\n        node {\n          ...PostPreview\n        }\n      }\n    }\n    author(where: { slug: $slug }) {\n      ...AuthorInfo\n    }\n  }\n"])),u.H);function P(n){var e=n.author,r=n.postsConnection;if(!e)throw Error("author is null");return(0,m.jsx)(a.Z,{children:(0,m.jsxs)(o.Z,{children:[(0,m.jsx)(c.Z,{}),(0,m.jsx)(h.Z,{children:(0,m.jsxs)(f.Z,{children:[(0,m.jsxs)(d.Z,{component:"h1",variant:"h4",children:[e.name," (",e.title,")"]}),(0,m.jsx)(j.Z,{rehypePlugins:[[p.Z]],children:e.biography})]})}),(0,m.jsx)(l.Z,{}),(0,m.jsx)(d.Z,{variant:"h4",children:"Posts by the author"}),(0,m.jsx)(x.ZP,{container:!0,spacing:5,children:r.edges.map((function(n){var e=n.node;return(0,m.jsx)(x.ZP,{item:!0,md:6,xs:12,children:(0,m.jsx)(u.Z,{post:e})},e.slug)}))})]})})}},7131:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/author/[slug]",function(){return r(7390)}])}},function(n){n.O(0,[960,666,774,888,179],(function(){return e=7131,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
//# sourceMappingURL=[slug]-b363dd82ea0adcae34e1.js.map