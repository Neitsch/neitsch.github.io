try{self["workbox:core:5.1.4"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.4"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class i extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const a=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class c{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:i}=this.findMatchingRoute({url:s,request:e,event:t});let a,c=i&&i.handler;if(!c&&this.s&&(c=this.s),c){try{a=c.handle({url:s,request:e,event:t,params:n})}catch(e){a=Promise.reject(e)}return a instanceof Promise&&this.i&&(a=a.catch(n=>this.i.handle({url:s,request:e,event:t}))),a}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const i of n){let n;const a=i.match({url:e,request:t,event:s});if(a)return n=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let r;const o=()=>(r||(r=new c,r.addFetchListener(),r.addCacheListener()),r);const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=e=>[h.prefix,e,h.suffix].filter(e=>e&&e.length>0).join("-"),l=e=>e||u(h.precache),f=e=>e||u(h.runtime);function d(e){e.then(()=>{})}const w=new Set;class p{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.h=e,this.u=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.h,this.u);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:i,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",(c,r)=>{const o=c.objectStore(e),h=t?o.index(t):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(u.push(a?e:e.value),i&&u.length>=i?r(u):e.continue()):r(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,i)=>{const a=this.o.transaction(e,t);a.onabort=()=>i(a.error),a.oncomplete=()=>n(),s(a,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,i)=>{const a=s.objectStore(t),c=a[e].apply(a,n);c.onsuccess=()=>i(c.result)})}close(){this.o&&(this.o.close(),this.o=null)}}p.prototype.OPEN_TIMEOUT=2e3;const y={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(y))for(const s of t)s in IDBObjectStore.prototype&&(p.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}const g=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class m{constructor(e){this.m=e,this.o=new p("workbox-expiration",1,{onupgradeneeded:e=>this.v(e)})}v(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.m)}async setTimestamp(e,t){const s={url:e=g(e),timestamp:t,cacheName:this.m,id:this.q(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this.q(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),a=[];let c=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.m&&(e&&n.timestamp<e||t&&c>=t?a.push(s.value):c++),s.continue()}else n(a)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}q(e){return this.m+"|"+g(e)}}class v{constructor(e,t={}){this.R=!1,this._=!1,this.U=t.maxEntries,this.L=t.maxAgeSeconds,this.m=e,this.N=new m(e)}async expireEntries(){if(this.R)return void(this._=!0);this.R=!0;const e=this.L?Date.now()-1e3*this.L:0,t=await this.N.expireEntries(e,this.U),s=await self.caches.open(this.m);for(const e of t)await s.delete(e);this.R=!1,this._&&(this._=!1,d(this.expireEntries()))}async updateTimestamp(e){await this.N.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.L){return await this.N.getTimestamp(e)<Date.now()-1e3*this.L}return!1}async delete(){this._=!1,await this.N.expireEntries(1/0)}}const b=(e,t)=>e.filter(e=>t in e),q=async({request:e,mode:t,plugins:s=[]})=>{const n=b(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},R=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const a=await self.caches.open(e),c=await q({plugins:i,request:t,mode:"read"});let r=await a.match(c,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;r=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:r,request:c})}return r},x=async({cacheName:e,request:s,response:n,event:i,plugins:c=[],matchOptions:r})=>{const o=await q({plugins:c,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:a(o.url)});const h=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,a=!1;for(const t of n)if("cacheWillUpdate"in t){a=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return a||(i=i&&200===i.status?i:void 0),i||null})({event:i,plugins:c,response:n,request:o});if(!h)return;const u=await self.caches.open(e),l=b(c,"cacheDidUpdate"),f=l.length>0?await R({cacheName:e,matchOptions:r,request:o}):null;try{await u.put(o,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const t of l)await t.cacheDidUpdate.call(t,{cacheName:e,event:i,oldResponse:f,newResponse:h,request:o})},U=R,L=async({request:e,fetchOptions:s,event:n,plugins:i=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const a=b(i,"fetchDidFail"),c=a.length>0?e.clone():null;try{for(const t of i)if("requestWillFetch"in t){const s=t.requestWillFetch,i=e.clone();e=await s.call(t,{request:i,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of i)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:r,response:t}));return t}catch(e){for(const t of a)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:c.clone(),request:r.clone()});throw e}};try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}const N={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let k;async function j(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=t?t(n):n,a=function(){if(void 0===k){const e=new Response("");if("body"in e)try{new Response(e.body),k=!0}catch(e){k=!1}k=!1}return k}()?s.body:await s.blob();return new Response(a,i)}try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}function E(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),a=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:a.href}}class M{constructor(e){this.m=l(e),this.k=new Map,this.j=new Map,this.M=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=E(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this.k.has(i)&&this.k.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.k.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.M.has(e)&&this.M.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.M.set(e,n.integrity)}if(this.k.set(i,e),this.j.set(i,a),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],i=await self.caches.open(this.m),a=await i.keys(),c=new Set(a.map(e=>e.url));for(const[e,t]of this.k)c.has(t)?n.push(e):s.push({cacheKey:t,url:e});const r=s.map(({cacheKey:s,url:n})=>{const i=this.M.get(s),a=this.j.get(n);return this.T({cacheKey:s,cacheMode:a,event:e,integrity:i,plugins:t,url:n})});await Promise.all(r);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.m),t=await e.keys(),s=new Set(this.k.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}async T({cacheKey:e,url:s,cacheMode:n,event:i,plugins:a,integrity:c}){const r=new Request(s,{integrity:c,cache:n,credentials:"same-origin"});let o,h=await L({event:i,plugins:a,request:r});for(const e of a||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:i,request:r,response:h}):h.status<400))throw new t("bad-precaching-response",{url:s,status:h.status});h.redirected&&(h=await j(h)),await x({event:i,plugins:a,response:h,request:e===s?r:new Request(e),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.k}getCachedURLs(){return[...this.k.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.k.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.m,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),i=new Request(e);return()=>n({request:i})}}let T;const K=()=>(T||(T=new M),T);const P=(e,t)=>{const s=K().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const c=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(a,t);if(yield c.href,s&&c.pathname.endsWith("/")){const e=new URL(c.href);e.pathname+=s,yield e.href}if(n){const e=new URL(c.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:a});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let C=!1;function O(e){C||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=l();self.addEventListener("fetch",a=>{const c=P(a.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!c)return;let r=self.caches.open(i).then(e=>e.match(c)).then(e=>e||fetch(c));a.respondWith(r)})})(e),C=!0)}const D=[],S={get:()=>D,add(e){D.push(...e)}},I=e=>{const t=K(),s=S.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},A=e=>{const t=K();e.waitUntil(t.activate())};var W;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),W={},function(e){K().addToCacheList(e),e.length>0&&(self.addEventListener("install",I),self.addEventListener("activate",A))}([{url:"/_next/server/middleware-manifest.json",revision:"4f5ca87a6870c96ad6fb0f65adfdac9b"},{url:"/_next/static/QyYma2N3zlo7n5aC6nuSy/_buildManifest.js",revision:"fb600007cf0cd9ea669a3e67c823dbc2"},{url:"/_next/static/QyYma2N3zlo7n5aC6nuSy/_middlewareManifest.js",revision:"468e9a0ecca0c65bcb0ee673b762445d"},{url:"/_next/static/QyYma2N3zlo7n5aC6nuSy/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/716-edf57120a84ba103.js",revision:"7a3b1aa95ccc57d5e1a18cf12e4e7870"},{url:"/_next/static/chunks/756-3e474c157f7881a6.js",revision:"504e4a1fe1e89899335ad1b63a922fcf"},{url:"/_next/static/chunks/782-50ee22c310ebd2e4.js",revision:"d33f673e9c598b452bd3f075d19106cf"},{url:"/_next/static/chunks/framework-b2e4119a90b05e32.js",revision:"7e64a17315fac594320ebedcef1f075c"},{url:"/_next/static/chunks/main-8023383319e187c7.js",revision:"15a9ebce07684250c1fd604f80e7808b"},{url:"/_next/static/chunks/pages/_app-ccfbb7952a673a64.js",revision:"86d054fa3fced5bba048146ccdbe38c0"},{url:"/_next/static/chunks/pages/_error-2639ab0f6c868a81.js",revision:"a6e2189a5f1c007d393744fd6386fef1"},{url:"/_next/static/chunks/pages/author/[slug]-b9d7997a68b9e3ce.js",revision:"056465c41226df69da11ea45004f9c78"},{url:"/_next/static/chunks/pages/index-702545bf7052fae0.js",revision:"fd1dea0e3665b952bae31f6d13953ec4"},{url:"/_next/static/chunks/pages/posts/[slug]-bb593f843b27bd4a.js",revision:"6af09bb46e3e136ed000438f1ddd2c4a"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-7a31c9011b982f4e.js",revision:"71f6012a14367bf5d8dc75b00814e9ee"},{url:"/_next/static/css/2aec7fdc1f1ca4ae.css",revision:"293289d6118b371b98acc1c56c33d156"},{url:"/_next/static/css/727973242bb33abd.css",revision:"bc87ab844091738a456424aeb83543e5"}]),O(W),function(e,s,a){let c;if("string"==typeof e){const t=new URL(e,location.href);c=new n(({url:e})=>e.href===t.href,s,a)}else if(e instanceof RegExp)c=new i(e,s,a);else if("function"==typeof e)c=new n(e,s,a);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=e}o().registerRoute(c)}(/^https?.*/,new class{constructor(e={}){if(this.m=f(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this.K=t?e.plugins:[N,...e.plugins]}else this.K=[N];this.P=e.networkTimeoutSeconds||0,this.C=e.fetchOptions,this.O=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const i=[];let a;if(this.P){const{id:t,promise:c}=this.D({request:s,event:e,logs:n});a=t,i.push(c)}const c=this.S({timeoutId:a,request:s,event:e,logs:n});i.push(c);let r=await Promise.race(i);if(r||(r=await c),!r)throw new t("no-response",{url:s.url});return r}D({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.I({request:e,event:s}))},1e3*this.P)}),id:n}}async S({timeoutId:e,request:t,logs:s,event:n}){let i,a;try{a=await L({request:t,event:n,fetchOptions:this.C,plugins:this.K})}catch(e){i=e}if(e&&clearTimeout(e),i||!a)a=await this.I({request:t,event:n});else{const e=a.clone(),s=x({cacheName:this.m,request:t,response:e,event:n,plugins:this.K});if(n)try{n.waitUntil(s)}catch(e){}}return a}I({event:e,request:t}){return U({cacheName:this.m,request:t,event:e,matchOptions:this.O,plugins:this.K})}}({cacheName:"offlineCache",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.A(n),a=this.W(s);d(a.expireEntries());const c=a.updateTimestamp(t.url);if(e)try{e.waitUntil(c)}catch(e){}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.W(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.B=e,this.L=e.maxAgeSeconds,this.F=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),w.add(t))}W(e){if(e===f())throw new t("expire-custom-caches-only");let s=this.F.get(e);return s||(s=new v(e,this.B),this.F.set(e,s)),s}A(e){if(!this.L)return!0;const t=this.H(e);if(null===t)return!0;return t>=Date.now()-1e3*this.L}H(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.F)await self.caches.delete(e),await t.delete();this.F=new Map}}({maxEntries:200,purgeOnQuotaError:!0})]}),"GET");
//# sourceMappingURL=service-worker.js.map
