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
    "url": "webpack-runtime-cf43f7652e5e9cc6d025.js"
  },
  {
    "url": "app-c2125fb895f5854dbddb.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-6088e82717ab0371c148.js"
  },
  {
    "url": "index.html",
    "revision": "b2dfb2bea44e9c1762f4011ce51a5d9a"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1ecf86e1e5e4d16904bdd6534267e71a"
  },
  {
    "url": "1.b4185e14bb4dbb481bbd.css"
  },
  {
    "url": "component---src-pages-index-jsx.0f8909fe84e3230b0b82.css"
  },
  {
    "url": "0.3094971e0ec633215259.css"
  },
  {
    "url": "component---src-pages-index-jsx-0b3c4d9b53d5299c8416.js"
  },
  {
    "url": "0-3bd1af17aefa54914b5c.js"
  },
  {
    "url": "1-1501ec3f4961fe6dcd30.js"
  },
  {
    "url": "2-4007a7e5699b2cf29d03.js"
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