try{self["workbox:core:5.1.4"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.4"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class i extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const r=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class a{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:i}=this.findMatchingRoute({url:s,request:e,event:t});let r,a=i&&i.handler;if(!a&&this.s&&(a=this.s),a){try{r=a.handle({url:s,request:e,event:t,params:n})}catch(e){r=Promise.reject(e)}return r instanceof Promise&&this.i&&(r=r.catch(n=>this.i.handle({url:s,request:e,event:t}))),r}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const i of n){let n;const r=i.match({url:e,request:t,event:s});if(r)return n=r,(Array.isArray(r)&&0===r.length||r.constructor===Object&&0===Object.keys(r).length||"boolean"==typeof r)&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let c;const o=()=>(c||(c=new a,c.addFetchListener(),c.addCacheListener()),c);const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=e=>[h.prefix,e,h.suffix].filter(e=>e&&e.length>0).join("-"),l=e=>e||u(h.precache),f=e=>e||u(h.runtime);function d(e){e.then(()=>{})}const w=new Set;class p{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.h=e,this.u=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.h,this.u);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:i,includeKeys:r=!1}={}){return await this.transaction([e],"readonly",(a,c)=>{const o=a.objectStore(e),h=t?o.index(t):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const e=l.result;e?(u.push(r?e:e.value),i&&u.length>=i?c(u):e.continue()):c(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,i)=>{const r=this.o.transaction(e,t);r.onabort=()=>i(r.error),r.oncomplete=()=>n(),s(r,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,i)=>{const r=s.objectStore(t),a=r[e].apply(r,n);a.onsuccess=()=>i(a.result)})}close(){this.o&&(this.o.close(),this.o=null)}}p.prototype.OPEN_TIMEOUT=2e3;const y={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(y))for(const s of t)s in IDBObjectStore.prototype&&(p.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.4"]&&_()}catch(e){}const g=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class m{constructor(e){this.m=e,this.o=new p("workbox-expiration",1,{onupgradeneeded:e=>this.v(e)})}v(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.m)}async setTimestamp(e,t){const s={url:e=g(e),timestamp:t,cacheName:this.m,id:this.q(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this.q(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let a=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.m&&(e&&n.timestamp<e||t&&a>=t?r.push(s.value):a++),s.continue()}else n(r)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}q(e){return this.m+"|"+g(e)}}class b{constructor(e,t={}){this.R=!1,this._=!1,this.U=t.maxEntries,this.L=t.maxAgeSeconds,this.m=e,this.N=new m(e)}async expireEntries(){if(this.R)return void(this._=!0);this.R=!0;const e=this.L?Date.now()-1e3*this.L:0,t=await this.N.expireEntries(e,this.U),s=await self.caches.open(this.m);for(const e of t)await s.delete(e);this.R=!1,this._&&(this._=!1,d(this.expireEntries()))}async updateTimestamp(e){await this.N.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.L){return await this.N.getTimestamp(e)<Date.now()-1e3*this.L}return!1}async delete(){this._=!1,await this.N.expireEntries(1/0)}}const v=(e,t)=>e.filter(e=>t in e),q=async({request:e,mode:t,plugins:s=[]})=>{const n=v(s,"cacheKeyWillBeUsed");let i=e;for(const e of n)i=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:i}),"string"==typeof i&&(i=new Request(i));return i},R=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:i=[]})=>{const r=await self.caches.open(e),a=await q({plugins:i,request:t,mode:"read"});let c=await r.match(a,n);for(const t of i)if("cachedResponseWillBeUsed"in t){const i=t.cachedResponseWillBeUsed;c=await i.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:c,request:a})}return c},x=async({cacheName:e,request:s,response:n,event:i,plugins:a=[],matchOptions:c})=>{const o=await q({plugins:a,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:r(o.url)});const h=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let i=t,r=!1;for(const t of n)if("cacheWillUpdate"in t){r=!0;const n=t.cacheWillUpdate;if(i=await n.call(t,{request:e,response:i,event:s}),!i)break}return r||(i=i&&200===i.status?i:void 0),i||null})({event:i,plugins:a,response:n,request:o});if(!h)return;const u=await self.caches.open(e),l=v(a,"cacheDidUpdate"),f=l.length>0?await R({cacheName:e,matchOptions:c,request:o}):null;try{await u.put(o,h)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const t of l)await t.cacheDidUpdate.call(t,{cacheName:e,event:i,oldResponse:f,newResponse:h,request:o})},U=R,L=async({request:e,fetchOptions:s,event:n,plugins:i=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=v(i,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of i)if("requestWillFetch"in t){const s=t.requestWillFetch,i=e.clone();e=await s.call(t,{request:i,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of i)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:c,response:t}));return t}catch(e){for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};try{self["workbox:strategies:5.1.4"]&&_()}catch(e){}const N={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let k;async function E(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=t?t(n):n,r=function(){if(void 0===k){const e=new Response("");if("body"in e)try{new Response(e.body),k=!0}catch(e){k=!1}k=!1}return k}()?s.body:await s.blob();return new Response(r,i)}try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}function T(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",s),{cacheKey:i.href,url:r.href}}class K{constructor(e){this.m=l(e),this.k=new Map,this.T=new Map,this.K=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:i}=T(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.k.has(i)&&this.k.get(i)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.k.get(i),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.K.has(e)&&this.K.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:i});this.K.set(e,n.integrity)}if(this.k.set(i,e),this.T.set(i,r),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],i=await self.caches.open(this.m),r=await i.keys(),a=new Set(r.map(e=>e.url));for(const[e,t]of this.k)a.has(t)?n.push(e):s.push({cacheKey:t,url:e});const c=s.map(({cacheKey:s,url:n})=>{const i=this.K.get(s),r=this.T.get(n);return this.O({cacheKey:s,cacheMode:r,event:e,integrity:i,plugins:t,url:n})});await Promise.all(c);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.m),t=await e.keys(),s=new Set(this.k.values()),n=[];for(const i of t)s.has(i.url)||(await e.delete(i),n.push(i.url));return{deletedURLs:n}}async O({cacheKey:e,url:s,cacheMode:n,event:i,plugins:r,integrity:a}){const c=new Request(s,{integrity:a,cache:n,credentials:"same-origin"});let o,h=await L({event:i,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:i,request:c,response:h}):h.status<400))throw new t("bad-precaching-response",{url:s,status:h.status});h.redirected&&(h=await E(h)),await x({event:i,plugins:r,response:h,request:e===s?c:new Request(e),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.k}getCachedURLs(){return[...this.k.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.k.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.m,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),i=new Request(e);return()=>n({request:i})}}let O;const M=()=>(O||(O=new K),O);const j=(e,t)=>{const s=M().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const r=new URL(e,location.href);r.hash="",yield r.href;const a=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(r,t);if(yield a.href,s&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=s,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(i){const e=i({url:r});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let P=!1;function C(e){P||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=l();self.addEventListener("fetch",r=>{const a=j(r.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!a)return;let c=self.caches.open(i).then(e=>e.match(a)).then(e=>e||fetch(a));r.respondWith(c)})})(e),P=!0)}const D=[],I={get:()=>D,add(e){D.push(...e)}},A=e=>{const t=M(),s=I.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},S=e=>{const t=M();e.waitUntil(t.activate())};var B;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),B={},function(e){M().addToCacheList(e),e.length>0&&(self.addEventListener("install",A),self.addEventListener("activate",S))}([{url:"/_next/static/BAnfduI1nKTkCNGBOEO1S/_buildManifest.js",revision:"e9cf7dcdd74d9be98ccb55b2d6326032"},{url:"/_next/static/BAnfduI1nKTkCNGBOEO1S/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/316-9d3837eadcdc632b6aa2.js",revision:"201e346782e727ae7859140e816ddbc9"},{url:"/_next/static/chunks/799-20844999efc25938d359.js",revision:"614dfb29decadb0378b77eaa3115b583"},{url:"/_next/static/chunks/framework-09a88f8e6a8ced89af74.js",revision:"623f3df054c936b95449b10625a9f4fc"},{url:"/_next/static/chunks/main-3406814bfe8b50bda517.js",revision:"9a3a632d727fc6e8359c27efc9b38485"},{url:"/_next/static/chunks/pages/_app-2b27433a0997c4138529.js",revision:"f09628623a6fb66c3cf94c0d7e8c0f1e"},{url:"/_next/static/chunks/pages/_error-309d9e2b31c03cb6149b.js",revision:"072b443b509ec14f7a87b38b73fe5fd3"},{url:"/_next/static/chunks/pages/index-cf887fa4d56073b311e4.js",revision:"3558df57db3ef0977e060bb4cbea9a3d"},{url:"/_next/static/chunks/pages/posts/[slug]-296b9f91d3efe95c4672.js",revision:"b96559773b2ed5b156e891592be5b796"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-5c5c9a38a56b2b88ab7c.js",revision:"e9417233adc061a5481c4d6c70797a41"},{url:"/_next/static/css/4e839cf21ff6bf076b3f.css",revision:"dd8855a1c92786421a10ed4726d12052"},{url:"/_next/static/css/5ea27e5c9dd48442fdad.css",revision:"87c0a81e9d933812bab5d8c2a02c0f9d"}]),C(B),function(e,s,r){let a;if("string"==typeof e){const t=new URL(e,location.href);a=new n(({url:e})=>e.href===t.href,s,r)}else if(e instanceof RegExp)a=new i(e,s,r);else if("function"==typeof e)a=new n(e,s,r);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}o().registerRoute(a)}(/^https?.*/,new class{constructor(e={}){if(this.m=f(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this.M=t?e.plugins:[N,...e.plugins]}else this.M=[N];this.j=e.networkTimeoutSeconds||0,this.P=e.fetchOptions,this.C=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const i=[];let r;if(this.j){const{id:t,promise:a}=this.D({request:s,event:e,logs:n});r=t,i.push(a)}const a=this.I({timeoutId:r,request:s,event:e,logs:n});i.push(a);let c=await Promise.race(i);if(c||(c=await a),!c)throw new t("no-response",{url:s.url});return c}D({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.A({request:e,event:s}))},1e3*this.j)}),id:n}}async I({timeoutId:e,request:t,logs:s,event:n}){let i,r;try{r=await L({request:t,event:n,fetchOptions:this.P,plugins:this.M})}catch(e){i=e}if(e&&clearTimeout(e),i||!r)r=await this.A({request:t,event:n});else{const e=r.clone(),s=x({cacheName:this.m,request:t,response:e,event:n,plugins:this.M});if(n)try{n.waitUntil(s)}catch(e){}}return r}A({event:e,request:t}){return U({cacheName:this.m,request:t,event:e,matchOptions:this.C,plugins:this.M})}}({cacheName:"offlineCache",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.S(n),r=this.B(s);d(r.expireEntries());const a=r.updateTimestamp(t.url);if(e)try{e.waitUntil(a)}catch(e){}return i?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.B(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.W=e,this.L=e.maxAgeSeconds,this.F=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),w.add(t))}B(e){if(e===f())throw new t("expire-custom-caches-only");let s=this.F.get(e);return s||(s=new b(e,this.W),this.F.set(e,s)),s}S(e){if(!this.L)return!0;const t=this.H(e);if(null===t)return!0;return t>=Date.now()-1e3*this.L}H(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.F)await self.caches.delete(e),await t.delete();this.F=new Map}}({maxEntries:200,purgeOnQuotaError:!0})]}),"GET");
//# sourceMappingURL=service-worker.js.map
