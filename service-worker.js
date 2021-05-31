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
    "revision": "973109736155929b50e2c7779fe23b28"
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
    "url": "assets/js/7.2c3e5a9b.js",
    "revision": "12ef9d76e5f91f5dda301b3e7398015a"
  },
  {
    "url": "assets/js/8.00f7af42.js",
    "revision": "d29497a7d05b58304474c23bb8002eb3"
  },
  {
    "url": "assets/js/9.97432178.js",
    "revision": "181e116cd75d723491f3b702532250dd"
  },
  {
    "url": "assets/js/app.63ab7a85.js",
    "revision": "f1f57f4db59015774814def874570f14"
  },
  {
    "url": "Document/index.html",
    "revision": "ee1ebc4f682105cc3b45c377251f10a8"
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
    "revision": "7bdab4c7fa46783036f5d1b1f911ae8f"
  },
  {
    "url": "Pay/index.html",
    "revision": "3e7285016f5e41c96b92c951d49dc005"
  },
  {
    "url": "Usage/index.html",
    "revision": "eea6dad03bb35a0166525c7eb36129f0"
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
