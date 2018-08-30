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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "22404dc9520951b95c9d088347bf395c"
  },
  {
    "url": "api/connection.html",
    "revision": "d266d40112708bf0230b9b5251330d80"
  },
  {
    "url": "api/index.html",
    "revision": "ed6eee90f98f100384fb96405fe74c0a"
  },
  {
    "url": "api/orango.html",
    "revision": "25ebd54646372389eab7c84d8d2835cf"
  },
  {
    "url": "api/schema.html",
    "revision": "eb3c948786be5a7d880e0b8d66fec44b"
  },
  {
    "url": "assets/css/0.styles.f74fbd4b.css",
    "revision": "9fbb74b75ead94b7dde70d42d7add4b6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3b1cd542.js",
    "revision": "19f29caa713c64a8dc9b162eb0b4fd6c"
  },
  {
    "url": "assets/js/11.1230720d.js",
    "revision": "b10664a276b5e5b2513a3bee0836fac0"
  },
  {
    "url": "assets/js/12.8859b0d9.js",
    "revision": "b3625dd103030dcb48f44ed2208bd6fd"
  },
  {
    "url": "assets/js/13.84a6c62d.js",
    "revision": "61504fa82a59e1eeec6a351de6447e0b"
  },
  {
    "url": "assets/js/14.288f7096.js",
    "revision": "aa04d77c7733d7e1519231c416db1d59"
  },
  {
    "url": "assets/js/15.1a4f1edf.js",
    "revision": "6321af44f04b9cc7678730442f305198"
  },
  {
    "url": "assets/js/16.93a06c86.js",
    "revision": "0c3add7592fed2c967189a929af63a2a"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.1817f8b1.js",
    "revision": "00e732d58a5d06782bef3319d42f22ab"
  },
  {
    "url": "assets/js/4.85789244.js",
    "revision": "a7d6f0dc89e43cb215008ff176fe45ab"
  },
  {
    "url": "assets/js/5.4267c60f.js",
    "revision": "62d48d325b5144bb2934f0bcbb919a73"
  },
  {
    "url": "assets/js/6.946cdb64.js",
    "revision": "617873c7826aa56ffa1589e7dd43e1b3"
  },
  {
    "url": "assets/js/7.3fbc2e0c.js",
    "revision": "a251ad37537a7a4aecd8b2b4e89a3637"
  },
  {
    "url": "assets/js/8.18f000d5.js",
    "revision": "543c568eddf3d6cf2c9748c10cc04c17"
  },
  {
    "url": "assets/js/9.768525f7.js",
    "revision": "421d919c512735d61e62be64a4a92268"
  },
  {
    "url": "assets/js/app.53e61868.js",
    "revision": "cde8e64fe108d53761cfdc552530265e"
  },
  {
    "url": "config/index.html",
    "revision": "ccfc02342347cf60feacef99be39cfde"
  },
  {
    "url": "config/introduction.html",
    "revision": "52efc036f0085ee7218851a9e4e0334d"
  },
  {
    "url": "config/one.html",
    "revision": "14c21cf725525cde5e422100547716cc"
  },
  {
    "url": "config/two.html",
    "revision": "8f016c4da696f4ff2fffe5b082019092"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ec4d43632db8114dca879028c76f334e"
  },
  {
    "url": "guide/index.html",
    "revision": "395a79698fbb945aee546de4fb80c56d"
  },
  {
    "url": "guide/installation.html",
    "revision": "be35c2afbd8b71cde6a028e73175c8d6"
  },
  {
    "url": "hero.png",
    "revision": "752362887128d117b397b5b5038f10b8"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "8527c69777bd5db43ed8ff069debe8df"
  },
  {
    "url": "icons/android-chrome-256x256.png",
    "revision": "9c39d4637ab993a13ed10b5cba7e625b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "fdacf2476bc0557e3e61d6133eb1e190"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "bdfac584d56f5d16658be493831b5c7b"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "e2a1cb3a590e2ae65029b5daa3104ec4"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "e440086e20581d4a13a23d62e198a28d"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "142d4099cba274eaf7a9b546cd93d178"
  },
  {
    "url": "index.html",
    "revision": "dbbdca45b2f2c0a494711cadf3b377d0"
  },
  {
    "url": "logo.png",
    "revision": "6dd9de51405c632bba8f5b392576c7d0"
  },
  {
    "url": "roadmap.html",
    "revision": "f76230c4403b244306f81394a9ac5e99"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
