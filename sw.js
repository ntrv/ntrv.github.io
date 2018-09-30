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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

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
    "url": "webpack-runtime-a53ea8a454ce69fe8477.js"
  },
  {
    "url": "app-22cf570d37a0994aff11.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6088e82717ab0371c148.js"
  },
  {
    "url": "index.html",
    "revision": "785ddf5aed73930b1f856e584cc97d41"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a4e104cad068023061fceebe45dc8883"
  },
  {
    "url": "1.e5ce1b133e76cde80e82.css"
  },
  {
    "url": "component---src-pages-index-js.0f8909fe84e3230b0b82.css"
  },
  {
    "url": "0.ee7233a59c0a6921fa74.css"
  },
  {
    "url": "component---src-pages-index-js-ab1509d80cd0ed5e7305.js"
  },
  {
    "url": "0-e64efe711dd2a48a3701.js"
  },
  {
    "url": "1-39723404a1dd4d0a91e4.js"
  },
  {
    "url": "2-e2d27e4cbb87af0f9acc.js"
  },
  {
    "url": "static/d/984/path---index-6a9-PRLkNrA7ANuPylQLo8ugsGUK0.json",
    "revision": "4d9225780e427d5a436817448a225568"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "28beec82dbe66f062f6f86ff30db5916"
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