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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b331037c44a7ea87a989ef3ed0dc5bb6"
  },
  {
    "url": "assets/css/0.styles.3cb8d2af.css",
    "revision": "c9a6b801e69d8d99bcc285ab67bef27d"
  },
  {
    "url": "assets/js/1.94462f59.js",
    "revision": "fde06c3c4602054a7bbb6695ce87bc7e"
  },
  {
    "url": "assets/js/10.b84a5328.js",
    "revision": "debe443f9950df9d25d907708e5ef100"
  },
  {
    "url": "assets/js/3.4ba58fc7.js",
    "revision": "e52f305caadef8b128aded937000cfa4"
  },
  {
    "url": "assets/js/4.5dd5972a.js",
    "revision": "10383702047fc7118ff41df84a10a295"
  },
  {
    "url": "assets/js/5.aeb71cca.js",
    "revision": "70fd7054e806d8b91448ebb8300cce51"
  },
  {
    "url": "assets/js/6.866350b9.js",
    "revision": "66783dc52ca51438a561876d0c87467e"
  },
  {
    "url": "assets/js/7.abdd374c.js",
    "revision": "98ef219618a8566eeb70c069924621a9"
  },
  {
    "url": "assets/js/8.4b6596b7.js",
    "revision": "f46477850d2358420b59dbb0d145783e"
  },
  {
    "url": "assets/js/9.97432178.js",
    "revision": "181e116cd75d723491f3b702532250dd"
  },
  {
    "url": "assets/js/app.82cd20dd.js",
    "revision": "50205b719920027535fe00b9cce2a331"
  },
  {
    "url": "Document/index.html",
    "revision": "ba04da336dd2d9a1df90eaaa090cdd81"
  },
  {
    "url": "img/logo.jpeg",
    "revision": "4c0bf5085c37b9d07deced2db988dfdd"
  },
  {
    "url": "img/pay.jpg",
    "revision": "266a3fa78455ba2ce31ce89e13a008df"
  },
  {
    "url": "index.html",
    "revision": "cecf691a197059ae8c86dcc5f0b772bc"
  },
  {
    "url": "Pay/index.html",
    "revision": "02655857725cb504418a659df9d5fcce"
  },
  {
    "url": "Usage/index.html",
    "revision": "189b63bafdee69f8efbb6f2afd5f4489"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
