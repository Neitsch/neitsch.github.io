/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-5305ae55bc950d91db6f.js"
  },
  {
    "url": "app-9af2441f92091f12f7ca.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7d069dce6a115542aed0.js"
  },
  {
    "url": "index.html",
    "revision": "3782f339b441aab79fa102fdc0c1f783"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e80c7b65778615abf73c4adc3cc05774"
  },
  {
    "url": "1.2caeba53cbfc485f6969.css"
  },
  {
    "url": "component---src-pages-index-jsx.e899d2ee73fa9ad53229.css"
  },
  {
    "url": "0.60dd88e742d8f545bf1a.css"
  },
  {
    "url": "component---src-pages-index-jsx-2b083090f3e3fd7dd615.js"
  },
  {
    "url": "0-8673586a9d876640ce9c.js"
  },
  {
    "url": "1-242b2bff6ad889fc376c.js"
  },
  {
    "url": "2-cce46def3781f3058c95.js"
  },
  {
    "url": "static/d/22/path---index-6a9-QhTuapXVjy2jrNhNZjERFNvaKXI.json",
    "revision": "8897d4fa35d9c0220f10e7dd77533212"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "bc83b38e5d3a0322f3c48a4316255f55"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});