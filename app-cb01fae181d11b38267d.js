webpackJsonp([0xd2a57dc1d883],{144:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(544),options:{plugins:[]}},{plugin:t(540),options:{plugins:[],trackingId:"UA-113900394-1"}},{plugin:t(541),options:{plugins:[],color:"#c62828"}},{plugin:t(539),options:{plugins:[]}},{plugin:t(543),options:{plugins:[]}}]},387:function(n,e,t){"use strict";var o;e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(510),"component---src-templates-post-jsx":t(516),"component---src-templates-tag-jsx":t(517),"component---src-templates-category-jsx":t(515),"component---src-pages-about-jsx":t(512),"component---src-pages-index-jsx":t(513),"component---src-pages-search-jsx":t(514)},e.json=(o={"layout-index.json":t(7),"offline-plugin-app-shell-fallback.json":t(527)},o["layout-index.json"]=t(7),o["articles-trying-to-build-a-good-web-app.json"]=t(521),o["layout-index.json"]=t(7),o["articles-capsule-networks.json"]=t(519),o["layout-index.json"]=t(7),o["articles-messaging-analysis-and-visualization.json"]=t(520),o["layout-index.json"]=t(7),o["articles-welcome-to-my-blog.json"]=t(522),o["layout-index.json"]=t(7),o["tags-programming.json"]=t(535),o["layout-index.json"]=t(7),o["tags-software-engineering.json"]=t(536),o["layout-index.json"]=t(7),o["tags-past-project.json"]=t(534),o["layout-index.json"]=t(7),o["tags-neural-networks.json"]=t(531),o["layout-index.json"]=t(7),o["tags-machine-learning.json"]=t(530),o["layout-index.json"]=t(7),o["tags-nlp.json"]=t(533),o["layout-index.json"]=t(7),o["tags-visualization.json"]=t(537),o["layout-index.json"]=t(7),o["tags-blog.json"]=t(529),o["layout-index.json"]=t(7),o["tags-nigel-schuster.json"]=t(532),o["layout-index.json"]=t(7),o["categories-software-engineering.json"]=t(524),o["layout-index.json"]=t(7),o["categories-machine-learning.json"]=t(523),o["layout-index.json"]=t(7),o["categories-tech.json"]=t(525),o["layout-index.json"]=t(7),o["about.json"]=t(518),o["layout-index.json"]=t(7),o["index.json"]=t(526),o["layout-index.json"]=t(7),o["search.json"]=t(528),o),e.layouts={"layout---index":t(511)}},388:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},s=t(1),c=o(s),l=t(2),p=o(l),f=t(226),d=o(f),m=t(96),g=o(m),h=t(144),y=t(894),x=o(y),v=function(n){var e=n.children;return c.default.createElement("div",null,e())},j=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,x.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=j,n.exports=e.default},96:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(694),a=o(r),u=(0,a.default)();n.exports=u},389:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(109),a=t(227),u=o(a),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return s=n,i[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return s=n,i[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return s=n,i[a]=n,!0}return!1}),s}}},390:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(175),a=o(r),u=t(144),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,a.default)();n.exports=c},518:function(n,e,t){t(4),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(567)})})}},519:function(n,e,t){t(4),n.exports=function(n){return t.e(0x8cab687c3304,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(568)})})}},520:function(n,e,t){t(4),n.exports=function(n){return t.e(0x9234eb2f4827,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(569)})})}},521:function(n,e,t){t(4),n.exports=function(n){return t.e(0x8b7129a8fcf0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(570)})})}},522:function(n,e,t){t(4),n.exports=function(n){return t.e(58504858360733,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(571)})})}},523:function(n,e,t){t(4),n.exports=function(n){return t.e(0xaacc3b1fc183,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(572)})})}},524:function(n,e,t){t(4),n.exports=function(n){return t.e(0xd36fa0654391,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(573)})})}},525:function(n,e,t){t(4),n.exports=function(n){return t.e(86242794778721,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(574)})})}},526:function(n,e,t){t(4),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(575)})})}},7:function(n,e,t){t(4),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(178)})})}},527:function(n,e,t){t(4),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(576)})})}},528:function(n,e,t){t(4),n.exports=function(n){return t.e(0xe7884ae5879b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(577)})})}},529:function(n,e,t){t(4),n.exports=function(n){return t.e(17976388717192,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(578)})})}},530:function(n,e,t){t(4),n.exports=function(n){return t.e(0xe140ce5a49d5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(579)})})}},531:function(n,e,t){t(4),n.exports=function(n){return t.e(0xa202de9c0910,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(580)})})}},532:function(n,e,t){t(4),n.exports=function(n){return t.e(0x8594a440a6fb,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(581)})})}},533:function(n,e,t){t(4),n.exports=function(n){return t.e(49809841224506,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(582)})})}},534:function(n,e,t){t(4),n.exports=function(n){return t.e(0x977fa2b44452,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(583)})})}},535:function(n,e,t){t(4),n.exports=function(n){return t.e(20956934260092,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(584)})})}},536:function(n,e,t){t(4),n.exports=function(n){return t.e(81309768047879,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(585)})})}},537:function(n,e,t){t(4),n.exports=function(n){return t.e(0xb82aa187f9ed,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(586)})})}},511:function(n,e,t){t(4),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(391)})})}},226:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),a=(o(r),t(389)),u=o(a),i=t(96),s=o(i),c=t(227),l=o(c),p=void 0,f={},d={},m={},g={},h={},y=[],x=[],v={},j="",b=[],w={},R=function(n){return n&&n.default||n},k=void 0,C=!0,N=[],_={},P={},E=5;k=t(392)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){b=b.filter(function(e){return e!==n}),k.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){k.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){k.onPostLoadPageResources(n)});var S=function(n,e){return w[n]>w[e]?1:w[n]<w[e]?-1:0},O=function(n,e){return v[n]>v[e]?1:v[n]<v[e]?-1:0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){t(null,g[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){g[e]=o,N.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),N=N.slice(-E),t(n,o)})}},T=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):P[e]?n.nextTick(function(){t(P[e])}):L(e,function(n,o){if(n)t(n);else{var r=R(o());h[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=N.find(function(n){return n.succeeded});return!!e},U=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,D={empty:function(){x=[],v={},w={},b=[],y=[],j=""},addPagesArray:function(n){y=n,p=(0,u.default)(n,j)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return x.pop()},enqueue:function(n){var e=(0,l.default)(n,j);if(!y.some(function(n){return n.path===e}))return!1;var t=1/M;M+=1,v[e]?v[e]+=1:v[e]=1,D.has(e)||x.unshift(e),x.sort(O);var o=p(e);return o.jsonName&&(w[o.jsonName]?w[o.jsonName]+=1+t:w[o.jsonName]=1+t,b.indexOf(o.jsonName)!==-1||g[o.jsonName]||b.unshift(o.jsonName)),o.componentChunkName&&(w[o.componentChunkName]?w[o.componentChunkName]+=1+t:w[o.componentChunkName]=1+t,b.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||b.unshift(o.componentChunkName)),b.sort(S),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:w}},getPages:function(){return{pathArray:x,pathCount:v}},getPage:function(n){return p(n)},has:function(n){return x.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),C=!1;if(_[e])return U(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return U(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];s.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),s.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return T(o.componentChunkName,function(n,e){n&&U(o.path,"Loading the component for "+o.path+" failed"),r=e,i()}),T(o.jsonName,function(n,e){n&&U(o.path,"Loading the JSON for "+o.path+" failed"),a=e,i()}),void(o.layoutComponentChunkName&&T(o.layout,function(n,e){n&&U(o.path,"Loading the Layout for "+o.path+" failed"),u=e,i()}))},peek:function(n){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(n){return x.length-x.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:D.getResourcesForPathname};e.default=D}).call(e,t(33))},587:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"articles-trying-to-build-a-good-web-app.json",path:"/articles/trying-to-build-a-good-web-app"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"articles-capsule-networks.json",path:"/articles/capsule-networks"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"articles-messaging-analysis-and-visualization.json",path:"/articles/messaging-analysis-and-visualization"},{componentChunkName:"component---src-templates-post-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"articles-welcome-to-my-blog.json",path:"/articles/welcome-to-my-blog"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-programming.json",path:"/tags/programming/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-software-engineering.json",path:"/tags/software-engineering/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-past-project.json",path:"/tags/past-project/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-neural-networks.json",path:"/tags/neural-networks/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-machine-learning.json",path:"/tags/machine-learning/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-nlp.json",path:"/tags/nlp/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-visualization.json",path:"/tags/visualization/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-blog.json",path:"/tags/blog/"},{componentChunkName:"component---src-templates-tag-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-nigel-schuster.json",path:"/tags/nigel-schuster/"},{componentChunkName:"component---src-templates-category-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-software-engineering.json",path:"/categories/software-engineering/"},{componentChunkName:"component---src-templates-category-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-machine-learning.json",path:"/categories/machine-learning/"},{componentChunkName:"component---src-templates-category-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-tech.json",path:"/categories/tech/"},{componentChunkName:"component---src-pages-about-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-search-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"search.json",path:"/search/"}]},392:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(144),u=t(1),i=o(u),s=t(10),c=o(s),l=t(109),p=t(548),f=t(497),d=o(f),m=t(177),g=t(390),h=o(g),y=t(96),x=o(y),v=t(587),j=o(v),b=t(588),w=o(b),R=t(388),k=o(R),C=t(387),N=o(C),_=t(226),P=o(_);t(419),window.___history=h.default,window.___emitter=x.default,P.default.addPagesArray(j.default),P.default.addProdRequires(N.default),window.asyncRequires=N.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=w.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),S=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};S(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){S(n.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(393);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(x.default.off("onPostLoadPageResources",e),clearTimeout(a),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,h.default.location),o=t.pathname,r=E[o];if(r&&(o=r.toPath),window.location.pathname!==o){var a=setTimeout(function(){x.default.off("onPostLoadPageResources",e),x.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(a),window.___history.push(t)):x.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var s=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return i.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(k.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:g,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(k.default,r({page:!0},o)):(0,u.createElement)(k.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},588:function(n,e){n.exports=[]},393:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(96),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},227:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},497:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},4:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,s=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,n(function(){i||(i=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},538:function(n,e){"use strict";n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,o=n.target;o.parentNode;o=o.parentNode)if("A"===o.nodeName){t=o;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var a=document.createElement("a");return a.href=window.location.href,r.host!==a.host||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},539:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(43),a=t(538),u=o(a);(0,u.default)(window,function(n){(0,r.navigateTo)(n)})},540:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",(e||{}).pathname),window.ga("send","pageview"))}},541:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(76),a=o(r),u=t(695),i=o(u),s={color:"#29d"};e.onClientEntry=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,a.default)({},s,e);window.___emitter.on("onDelayedLoadPageResources",function(){i.default.configure(t),i.default.start()}),window.___emitter.on("onPostLoadPageResources",function(){i.default.done()});var o="\n    #nprogress {\n     pointer-events: none;\n    }\n    #nprogress .bar {\n      background: "+t.color+";\n      position: fixed;\n      z-index: 1031;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 2px;\n    }\n    #nprogress .peg {\n      display: block;\n      position: absolute;\n      right: 0px;\n      width: 100px;\n      height: 100%;\n      box-shadow: 0 0 10px "+t.color+", 0 0 5px "+t.color+";\n      opacity: 1.0;\n      -webkit-transform: rotate(3deg) translate(0px, -4px);\n      -ms-transform: rotate(3deg) translate(0px, -4px);\n      transform: rotate(3deg) translate(0px, -4px);\n    }\n    #nprogress .spinner {\n      display: block;\n      position: fixed;\n      z-index: 1031;\n      top: 15px;\n      right: 15px;\n    }\n    #nprogress .spinner-icon {\n      width: 18px;\n      height: 18px;\n      box-sizing: border-box;\n      border: solid 2px transparent;\n      border-top-color: "+t.color+";\n      border-left-color: "+t.color+";\n      border-radius: 50%;\n      -webkit-animation: nprogress-spinner 400ms linear infinite;\n      animation: nprogress-spinner 400ms linear infinite;\n    }\n    .nprogress-custom-parent {\n      overflow: hidden;\n      position: relative;\n    }\n    .nprogress-custom-parent #nprogress .spinner,\n    .nprogress-custom-parent #nprogress .bar {\n      position: absolute;\n    }\n    @-webkit-keyframes nprogress-spinner {\n      0% {\n        -webkit-transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n    @keyframes nprogress-spinner {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n",r=document.createElement("style");r.id="nprogress-styles",r.innerHTML=o,document.head.appendChild(r)}},510:function(n,e,t){t(4),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(542)})})}},543:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},544:function(n,e,t){"use strict";var o=function(n){setTimeout(function(){var e=window.decodeURI(window.location.hash.replace("#",""));if(""!==e){var t=document.getElementById(e);if(t){var o=t.offsetTop;window.scrollTo(0,o-n)}}},10)};e.onClientEntry=function(n,e){var t=0;e.offsetY&&(t=e.offsetY)},e.onRouteUpdate=function(n,e){var t=0;e.offsetY&&(t=e.offsetY),o(t)}},694:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},695:function(n,e,t){var o,r;!function(a,u){o=u,r="function"==typeof o?o.call(e,t,e,n):o,!(void 0!==r&&(n.exports=r))}(this,function(){function n(n,e,t){return n<e?e:n>t?t:n}function e(n){return 100*(-1+n)}function t(n,t,o){var r;return r="translate3d"===c.positionUsing?{transform:"translate3d("+e(n)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(n)+"%,0)"}:{"margin-left":e(n)+"%"},r.transition="all "+t+"ms "+o,r}function o(n,e){var t="string"==typeof n?n:u(n);return t.indexOf(" "+e+" ")>=0}function r(n,e){var t=u(n),r=t+e;o(t,e)||(n.className=r.substring(1))}function a(n,e){var t,r=u(n);o(n,e)&&(t=r.replace(" "+e+" "," "),n.className=t.substring(1,t.length-1))}function u(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function i(n){n&&n.parentNode&&n.parentNode.removeChild(n)}var s={};s.version="0.2.0";var c=s.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};s.configure=function(n){var e,t;for(e in n)t=n[e],void 0!==t&&n.hasOwnProperty(e)&&(c[e]=t);return this},s.status=null,s.set=function(e){var o=s.isStarted();e=n(e,c.minimum,1),s.status=1===e?null:e;var r=s.render(!o),a=r.querySelector(c.barSelector),u=c.speed,i=c.easing;return r.offsetWidth,l(function(n){""===c.positionUsing&&(c.positionUsing=s.getPositioningCSS()),p(a,t(e,u,i)),1===e?(p(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){p(r,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){s.remove(),n()},u)},u)):setTimeout(n,u)}),this},s.isStarted=function(){return"number"==typeof s.status},s.start=function(){s.status||s.set(0);var n=function(){setTimeout(function(){s.status&&(s.trickle(),n())},c.trickleSpeed)};return c.trickle&&n(),this},s.done=function(n){return n||s.status?s.inc(.3+.5*Math.random()).set(1):this},s.inc=function(e){var t=s.status;return t?("number"!=typeof e&&(e=(1-t)*n(Math.random()*t,.1,.95)),t=n(t+e,0,.994),s.set(t)):s.start()},s.trickle=function(){return s.inc(Math.random()*c.trickleRate)},function(){var n=0,e=0;s.promise=function(t){return t&&"resolved"!==t.state()?(0===e&&s.start(),n++,e++,t.always(function(){e--,0===e?(n=0,s.done()):s.set((n-e)/n)}),this):this}}(),s.render=function(n){if(s.isRendered())return document.getElementById("nprogress");r(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=c.template;var o,a=t.querySelector(c.barSelector),u=n?"-100":e(s.status||0),l=document.querySelector(c.parent);return p(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),c.showSpinner||(o=t.querySelector(c.spinnerSelector),o&&i(o)),l!=document.body&&r(l,"nprogress-custom-parent"),l.appendChild(t),t},s.remove=function(){a(document.documentElement,"nprogress-busy"),a(document.querySelector(c.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&i(n)},s.isRendered=function(){return!!document.getElementById("nprogress")},s.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";
return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var l=function(){function n(){var t=e.shift();t&&t(n)}var e=[];return function(t){e.push(t),1==e.length&&n()}}(),p=function(){function n(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(n,e){return e.toUpperCase()})}function e(n){var e=document.body.style;if(n in e)return n;for(var t,o=r.length,a=n.charAt(0).toUpperCase()+n.slice(1);o--;)if(t=r[o]+a,t in e)return t;return n}function t(t){return t=n(t),a[t]||(a[t]=e(t))}function o(n,e,o){e=t(e),n.style[e]=o}var r=["Webkit","O","Moz","ms"],a={};return function(n,e){var t,r,a=arguments;if(2==a.length)for(t in e)r=e[t],void 0!==r&&e.hasOwnProperty(t)&&o(n,t,r);else o(n,a[1],a[2])}}();return s})},894:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},512:function(n,e,t){t(4),n.exports=function(n){return t.e(0x83323ebd9d39,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(406)})})}},513:function(n,e,t){t(4),n.exports=function(n){return t.e(0xc23565d713b7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(407)})})}},514:function(n,e,t){t(4),n.exports=function(n){return t.e(71337070933838,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(408)})})}},515:function(n,e,t){t(4),n.exports=function(n){return t.e(0x7600c7af1a80,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(409)})})}},516:function(n,e,t){t(4),n.exports=function(n){return t.e(0xc1d74b0851a0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(410)})})}},517:function(n,e,t){t(4),n.exports=function(n){return t.e(0xa6cd3c51205b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(411)})})}}});
//# sourceMappingURL=app-cb01fae181d11b38267d.js.map