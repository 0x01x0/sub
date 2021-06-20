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
    "revision": "69c44cd776e5543ec6edecabd9d949da"
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
    "url": "assets/js/app.c2b99ada.js",
    "revision": "9a1a18f2ddc3b77a141bd2b79d5b5783"
  },
  {
    "url": "Document/index.html",
    "revision": "2dd69e93a94724295a809f0bfa9f9c53"
  },
  {
    "url": "img/jellyfin.css",
    "revision": "4f882f225caa9912c3c3219c5bc949f3"
  },
  {
    "url": "img/jellyfin.png",
    "revision": "a1f673e7df715f16dae49f4874009082"
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
    "revision": "8442e25409b663b7a0e5aa8df9d463b7"
  },
  {
    "url": "Pay/index.html",
    "revision": "7f9f3c5f9c27b0f829fa7087a309b357"
  },
  {
    "url": "Usage/index.html",
    "revision": "f157f54785d211222be2f43efc0c95df"
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
