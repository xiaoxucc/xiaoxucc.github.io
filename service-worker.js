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
    "revision": "cc3fa97f14ca40475690b911d2f4e6c7"
  },
  {
    "url": "api/cli.html",
    "revision": "2af65f7773ea8411e8b26588962ba3bb"
  },
  {
    "url": "api/node.html",
    "revision": "2e39bc951dc30274ed62b3c8224e6d27"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/1.9-lang.png",
    "revision": "9a95306985d4954fe54bc8de5512d3ba"
  },
  {
    "url": "assets/1.9-official-plugin-options.png",
    "revision": "55243b507656a5c36b45b7d4b27c1cab"
  },
  {
    "url": "assets/1.9-official-plugin-tuple-usage.png",
    "revision": "252870643841d8bac56aac10d1a9d91f"
  },
  {
    "url": "assets/1.9-overview.png",
    "revision": "f3534cdf12b0474265fd296bdc82c225"
  },
  {
    "url": "assets/css/0.styles.47627679.css",
    "revision": "fe67d20c28e34fae8c7b6bf6ee482da5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.57d5ec5e.js",
    "revision": "a4f2b97bb73c1fe14fa709de7c758b93"
  },
  {
    "url": "assets/js/100.dcf46ab8.js",
    "revision": "7b3d99d14dd3c4e2800250f83c705d76"
  },
  {
    "url": "assets/js/101.1c999ac5.js",
    "revision": "b18aa5bfc364b6bac787870ddc224c08"
  },
  {
    "url": "assets/js/102.e7bca083.js",
    "revision": "acd56e757fee03fe788348e5fea1f365"
  },
  {
    "url": "assets/js/103.c8458123.js",
    "revision": "ee91b3e837c68908f157383c7a91eb08"
  },
  {
    "url": "assets/js/104.5d681e2c.js",
    "revision": "773393d04139b08f4061d2fc4442c430"
  },
  {
    "url": "assets/js/105.bc121b31.js",
    "revision": "9fe1cdf6c7cf620132fdcc81c54aeed6"
  },
  {
    "url": "assets/js/106.6b460a8f.js",
    "revision": "022e3ea62f79862be2fe7e2abf2bf650"
  },
  {
    "url": "assets/js/107.e1c70b6b.js",
    "revision": "43666fc9613a6c5399b6d5ae9b7f679e"
  },
  {
    "url": "assets/js/108.3ca3fe84.js",
    "revision": "f834e694351545a5f762c52bfb3a77d6"
  },
  {
    "url": "assets/js/109.dd871c34.js",
    "revision": "b382b9759f8a6e19898c181c71f7a06e"
  },
  {
    "url": "assets/js/11.d406b511.js",
    "revision": "63ca61e45a6a114491443f944dff2679"
  },
  {
    "url": "assets/js/110.cac27508.js",
    "revision": "98b9a051811d5fc58fb51ae0e8d8a408"
  },
  {
    "url": "assets/js/12.2cb4bc00.js",
    "revision": "6aa64d7f4ae9e8a22286a9233f316f60"
  },
  {
    "url": "assets/js/13.2886f8fd.js",
    "revision": "7a77a74444612aa53599629d7d26250f"
  },
  {
    "url": "assets/js/14.030cfb73.js",
    "revision": "52893b96be321b7bd4d8ee169fcd34f2"
  },
  {
    "url": "assets/js/15.5125d77f.js",
    "revision": "720bc9538cc657a1b3be3a58b54e981b"
  },
  {
    "url": "assets/js/16.65fcf53a.js",
    "revision": "d27db9c86294c9fb22ddcca7dcc5b0cf"
  },
  {
    "url": "assets/js/17.7f9ff09a.js",
    "revision": "ec56c8f6f91ecaa0f418f328460c04eb"
  },
  {
    "url": "assets/js/18.12801bc1.js",
    "revision": "b68ee6c95a8613e023dfd53dc18af210"
  },
  {
    "url": "assets/js/19.dfba2c1e.js",
    "revision": "cfb8ee2842b3a984f6bf935b435e3157"
  },
  {
    "url": "assets/js/20.c8b58753.js",
    "revision": "77624df41fd55cf38dee5526162ece46"
  },
  {
    "url": "assets/js/21.099bd038.js",
    "revision": "9ab4edf0f912c9cd0de1a79654155b68"
  },
  {
    "url": "assets/js/22.ce864247.js",
    "revision": "d717bde2d39eebcbb9e3d442cc29e704"
  },
  {
    "url": "assets/js/23.4a34b24e.js",
    "revision": "c20c8388aeea08d4c708c2bd77b484c2"
  },
  {
    "url": "assets/js/24.c2998dd6.js",
    "revision": "95713c95d01f8252987b5b9af0284c9b"
  },
  {
    "url": "assets/js/25.df1eb4f7.js",
    "revision": "329ea681825e9414198c7ce74bf11fdf"
  },
  {
    "url": "assets/js/26.8a6ba046.js",
    "revision": "506c19911475251c3ac12e9264edb339"
  },
  {
    "url": "assets/js/27.70e6854c.js",
    "revision": "1bd5f718f51fed605114b16d2e34f1dc"
  },
  {
    "url": "assets/js/28.ca6b1d98.js",
    "revision": "dc3c5bfe100f60951fd6528f66387ea0"
  },
  {
    "url": "assets/js/29.ae2caab5.js",
    "revision": "443cf1e3a92a30e69e7783101a006103"
  },
  {
    "url": "assets/js/30.80e78b9e.js",
    "revision": "69aabb6fc48f991389b236e908253556"
  },
  {
    "url": "assets/js/31.7c4880ed.js",
    "revision": "004ece7cd57c1c72c7f3012660ae3000"
  },
  {
    "url": "assets/js/32.f854d807.js",
    "revision": "32800fa6072151660a22c0d051dc3dfb"
  },
  {
    "url": "assets/js/33.8775d6e8.js",
    "revision": "dfb95605cdf9d1f4633a28c5ccf0b7a9"
  },
  {
    "url": "assets/js/34.862f1971.js",
    "revision": "6892187c0bcdac828d6c16448bb9ac18"
  },
  {
    "url": "assets/js/35.088db68c.js",
    "revision": "36b9fecefaa743cab70ddaa7d8ee1ccd"
  },
  {
    "url": "assets/js/36.b300186e.js",
    "revision": "f94fb239fbf45f06dabb802adb28347b"
  },
  {
    "url": "assets/js/37.1348f206.js",
    "revision": "aaed43e1fc651349155c8d5ad3f663fb"
  },
  {
    "url": "assets/js/38.6c0827c3.js",
    "revision": "b0eb3ac7c8dde4626037e39229dd7e9d"
  },
  {
    "url": "assets/js/39.b7fbba9c.js",
    "revision": "0c559f1689b66de4bb61c334d76be6b1"
  },
  {
    "url": "assets/js/40.8dec8c92.js",
    "revision": "b8d62912387f7c732263c4799807c5dd"
  },
  {
    "url": "assets/js/41.0d2ec8d4.js",
    "revision": "c45e722be0b3639de95c5c6a8764fdb8"
  },
  {
    "url": "assets/js/42.6904218f.js",
    "revision": "57172f91e5893e273a33c5600fdcb19c"
  },
  {
    "url": "assets/js/43.f283b6a5.js",
    "revision": "7fc3574c76f07319c67b8fbd7bd54ddb"
  },
  {
    "url": "assets/js/44.270011c5.js",
    "revision": "602cf52628e05b473a05d9591d07a1af"
  },
  {
    "url": "assets/js/45.db6d8463.js",
    "revision": "f6eba28b94f1fbe7d248624cfdb23adf"
  },
  {
    "url": "assets/js/46.8450d72d.js",
    "revision": "0e53d47d7e31aff56efd1aab364156d1"
  },
  {
    "url": "assets/js/47.0c134ed7.js",
    "revision": "09343ff1ec040bacd0ad8f38942a57e3"
  },
  {
    "url": "assets/js/48.627a1e2b.js",
    "revision": "c45b681f32604b9e893a1b739662db64"
  },
  {
    "url": "assets/js/49.12f940a3.js",
    "revision": "67f66642009cd3d4aa7dd146b2f11016"
  },
  {
    "url": "assets/js/5.ee7ee247.js",
    "revision": "7f68985ab06f11f8722afa8773623a5e"
  },
  {
    "url": "assets/js/50.3c079254.js",
    "revision": "b40c21e7a01e3d72c2f64d2bcd0b77f3"
  },
  {
    "url": "assets/js/51.237611a7.js",
    "revision": "4fc3dc33e589c27652f69ca8d83eeb41"
  },
  {
    "url": "assets/js/52.38da682b.js",
    "revision": "b5c9cf94bcc7acf06fe1d7c657d6e433"
  },
  {
    "url": "assets/js/53.5cf0f0b3.js",
    "revision": "752004e4861c310a5251a4d6109b6d54"
  },
  {
    "url": "assets/js/54.ac2e6686.js",
    "revision": "8c75305c718391d0f04dbbf5ef8bc923"
  },
  {
    "url": "assets/js/55.0af390bf.js",
    "revision": "be553e480953660ddcc83c13fc76b75f"
  },
  {
    "url": "assets/js/56.4d838e68.js",
    "revision": "5f79484568db008c4123e0274dc04b46"
  },
  {
    "url": "assets/js/57.62198de2.js",
    "revision": "2c6468e8996c49a03805b592d7abe031"
  },
  {
    "url": "assets/js/58.21e11266.js",
    "revision": "9e55714053a137d0fe84d7ae08d38f27"
  },
  {
    "url": "assets/js/59.538883af.js",
    "revision": "dd673d62db0ff6ab2d64704d3f5e24bf"
  },
  {
    "url": "assets/js/6.84811f60.js",
    "revision": "a3d263a1b0568e302f34d38fe6953e05"
  },
  {
    "url": "assets/js/60.a5f22637.js",
    "revision": "474044e22869f1296c7cf62e26c87adf"
  },
  {
    "url": "assets/js/61.dd67f0e1.js",
    "revision": "7a3402677e8926c1b0fe61f3b0f75342"
  },
  {
    "url": "assets/js/62.afa5b679.js",
    "revision": "e7959068247a88a72bde1c89ed9ae69b"
  },
  {
    "url": "assets/js/63.8d0deace.js",
    "revision": "c73ffdfeae8a5db7e01eb7defde98c7a"
  },
  {
    "url": "assets/js/64.e6c31ed0.js",
    "revision": "50c9c72a3d3c1ce9a7096abf60f8c995"
  },
  {
    "url": "assets/js/65.dc0c6dad.js",
    "revision": "30d2a0df2990ef5d5dc6644e89a09548"
  },
  {
    "url": "assets/js/66.70ab83e2.js",
    "revision": "b810d442e676a998d3f090d5e3a4db45"
  },
  {
    "url": "assets/js/67.8fa73551.js",
    "revision": "275e405a6d516ec6914e4d134280e7d4"
  },
  {
    "url": "assets/js/68.01db5821.js",
    "revision": "2b5b397428e587303e24cb6908f538f4"
  },
  {
    "url": "assets/js/69.dcf8fa54.js",
    "revision": "f6f890ce5d87207c2b7128f312491b6e"
  },
  {
    "url": "assets/js/7.933b3593.js",
    "revision": "ef4d69da4af5183f38ae8ad40f07de8f"
  },
  {
    "url": "assets/js/70.81311c68.js",
    "revision": "756e409b33d97ac0c4ff49fd623b94f7"
  },
  {
    "url": "assets/js/71.dbb3404d.js",
    "revision": "50e19ede1b70bd3bb0573636b1fb91ca"
  },
  {
    "url": "assets/js/72.5089a964.js",
    "revision": "e4cd80ff62f9f0d6b5e5f96f947e79f2"
  },
  {
    "url": "assets/js/73.d7261850.js",
    "revision": "91d5420f095facc977763b46d0c50a57"
  },
  {
    "url": "assets/js/74.2b68e09a.js",
    "revision": "ffca24792873319ea15991a896567b3e"
  },
  {
    "url": "assets/js/75.62e2e9ed.js",
    "revision": "2df1b05df059bed0e6298774d2c6d74c"
  },
  {
    "url": "assets/js/76.bdf83f3a.js",
    "revision": "34da44936b142956063df043209c1229"
  },
  {
    "url": "assets/js/77.54346b09.js",
    "revision": "53e7692281c517d46f305456eafaf473"
  },
  {
    "url": "assets/js/78.13d0b35b.js",
    "revision": "5812bfb48b08666036cf84bbbcbc94e2"
  },
  {
    "url": "assets/js/79.2b295018.js",
    "revision": "6675f1da18d35a9360ab015b2334f6b7"
  },
  {
    "url": "assets/js/8.7f1d50f3.js",
    "revision": "4882be89ad3df1ce9dd73313a2072d55"
  },
  {
    "url": "assets/js/80.bd6ad5f1.js",
    "revision": "7fd799085f8ecb0a34811eb5b466d84c"
  },
  {
    "url": "assets/js/81.0d786d64.js",
    "revision": "f4a38ea4afd0b2c99ed469cc951cfa2e"
  },
  {
    "url": "assets/js/82.4b2c3561.js",
    "revision": "acee83981d45ef2837755ac2f2f32716"
  },
  {
    "url": "assets/js/83.b019280e.js",
    "revision": "fb88c31c68dd95402f7bd980f5239330"
  },
  {
    "url": "assets/js/84.87639ade.js",
    "revision": "74fc77073d4ae21f77fbf193735789e1"
  },
  {
    "url": "assets/js/85.533357b7.js",
    "revision": "7318cd0116a2f993aea3349e7edfa87b"
  },
  {
    "url": "assets/js/86.59149503.js",
    "revision": "4eea26d913b78495cac69b5c881dfb10"
  },
  {
    "url": "assets/js/87.ba9eaf4d.js",
    "revision": "9dc99fc43d98f74ccea08e5f3f0452f3"
  },
  {
    "url": "assets/js/88.9f248d21.js",
    "revision": "f5cee5fcb9583bd6f4758b81a7c5f333"
  },
  {
    "url": "assets/js/89.efac4920.js",
    "revision": "7ef0a5357c67876ee2b4a1d354ecc74f"
  },
  {
    "url": "assets/js/9.fadabe8d.js",
    "revision": "4f2252a13e8b6da09b9aa8747be2fc49"
  },
  {
    "url": "assets/js/90.10658cb4.js",
    "revision": "72b32100b67f8ef5c9063be4b60ddb33"
  },
  {
    "url": "assets/js/91.00a7ecdb.js",
    "revision": "4e2ba5b45fb3bb06f62c2c530f5b777f"
  },
  {
    "url": "assets/js/92.9cb6af59.js",
    "revision": "b6dc596fd45f20a6a0592c0b33b9041c"
  },
  {
    "url": "assets/js/93.2c399905.js",
    "revision": "272019c4c1c29147868d746f7e674464"
  },
  {
    "url": "assets/js/94.71ac675c.js",
    "revision": "3f9c7b2f9907be7d25c9ebaa729e33b6"
  },
  {
    "url": "assets/js/95.8f40d413.js",
    "revision": "7ebfe946fb7ea41e27759e535292c6ab"
  },
  {
    "url": "assets/js/96.be0965ca.js",
    "revision": "7f3552e595265594efac5ae5e6d0dab6"
  },
  {
    "url": "assets/js/97.bc26050d.js",
    "revision": "9b95f5c8ca931a91e9e198554c5f128a"
  },
  {
    "url": "assets/js/98.468bb4ad.js",
    "revision": "0d1bb98939f9f625bc15628ed21284e9"
  },
  {
    "url": "assets/js/99.5aa5d3ed.js",
    "revision": "9c117f7a814f0dcc00313c408be6dc59"
  },
  {
    "url": "assets/js/app.35bc7d2e.js",
    "revision": "d8582ae7c478750c2fe5864b91c34046"
  },
  {
    "url": "assets/js/vendors~docsearch.e0c00185.js",
    "revision": "7032f0387eda3c3cd075a2be354f4e8f"
  },
  {
    "url": "assets/js/vendors~flowchart.4d811a74.js",
    "revision": "5c4afe1847726abffdba010302bc0d6d"
  },
  {
    "url": "assets/js/vendors~notification.29f11cd4.js",
    "revision": "ed2eb05acd21b5ef4ef08408c5ea3733"
  },
  {
    "url": "config/index.html",
    "revision": "873e843ebec490c5d76eb42ec4f2296f"
  },
  {
    "url": "faq/index.html",
    "revision": "a98063bd65d7f075ec207afbf2975d36"
  },
  {
    "url": "guide/assets.html",
    "revision": "2cddd318a4100695c8c0955a17c88fd8"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "18241f67ee65643a2691c4285e31bb3b"
  },
  {
    "url": "guide/deploy.html",
    "revision": "ab9e8c395556b3b7d06fc63701eaa206"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "cd82cf3c833f522ff637e8b66a591131"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "08b75838f067d0621e59e7e86a4dca9e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d79bd8ca43e90aa085ef7a2425018853"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "75e58f50a081b2613064da2ce608edfb"
  },
  {
    "url": "guide/i18n.html",
    "revision": "8304a1a66686daaac4e4913068f25781"
  },
  {
    "url": "guide/index.html",
    "revision": "346d2a8a57af3ca08c9d7841b52e8f54"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "9e932cbb1594c27e0ed45bf041c7c4ed"
  },
  {
    "url": "guide/markdown.html",
    "revision": "375b1ff98a1d3168dc8b02c4a9a49455"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "8e809daa016e58085621b781dde2bac9"
  },
  {
    "url": "guide/typescript-as-config.html",
    "revision": "e44b3ed064ecc75f804b7577c798b22d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "ff6723177001455cac98c8e7ca48ae04"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "9117235dd2676ce3ffe774166e2285e4"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "72273bc99c245e5f999e18ff488abab5"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "a8806b164d0fb310b03fefb91801d5fb"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "5cab30d593fa783095145635453af588"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "5f9e9825e3cd994a57ceab632d1076fb"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "0dfe74df0e1223dd236173ede1c92d37"
  },
  {
    "url": "plugin/index.html",
    "revision": "fbedaf2d21c9d5c0406ee1fe3fcd0d20"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "01db871fcf64be8fe6b24ff5e07b7227"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "2a29327845aed6c6b26a01ff12e0cb96"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "e9b7d67864ce6147707b88276a16c4e9"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "182503c797638eed13c40d2d6517806f"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "142136dd9e5bcc09b20550ac69524d29"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "2418d78536a8c35662d658b823ddac42"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "81b9cc20d3caedbbdf68031397c946d5"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "256e494fa86dc71bc4a9c1494409937f"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "2f635040761f0868b1dcacbea4ba261b"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "f6f26b08ac33545d86440df27d446568"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "21ca8c3a53e88f1ef2a0a5d6dc98dd08"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "d435f280dbf2697cf9697dc1e90791e3"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "a2f917991cc2fe1bfb83f517d3aed7c8"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "0738ff2a828a67e330177b86ac3ded51"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "8728acab0847173dcb299eae1b47b6f6"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "c4903d7ef292c925f2f2c00ed11b3223"
  },
  {
    "url": "theme/index.html",
    "revision": "0628065dd19b50efb46c3d351847b6e6"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "e02fe00f2bb1a1c64b8ea056b3ba5795"
  },
  {
    "url": "theme/option-api.html",
    "revision": "67bd0db596b7ffc95b5b923eec6afede"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "82db99487a58020bb24977afbfde42c7"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "e0f40c465adf3168b8ae3b0c2c1c898d"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "0f6695ee1b55e7656f8ff8616a5c6eef"
  },
  {
    "url": "zh/api/node.html",
    "revision": "db2668512c842c759ab3c323fcb361d4"
  },
  {
    "url": "zh/config/index.html",
    "revision": "fa5d488e2cf3049e2ab7a05e5aba388c"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "b765e519046be58be8a9d95fee49c17f"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "8057a23cec36f11ae44efb2585da6ada"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "319c9f32483884bea5f01f78752d8161"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "24ed71f135c8af33828645690fa4dd9d"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "c9709b88c681ffcbfbf8e2689cd0fe46"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "9515f885f4956c2c43e4502e09516dc3"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "f82847266232faeaf1352b559347780c"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "c2262fa0cf03b359c653e72c0e9d7695"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "bcb5f73cd657555f0bc9b78dcd44f8b9"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "bb86aebd3ab6787a27b90f904d4225a6"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "f4c9f138006d6eb51ca5b8a292c8ee74"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "b4692fd22b0a527fbfdd095676138208"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "b172e92a4b349edcfe28de949b3d408e"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "311a3855ca83d7bcdb796bdecf962ae5"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "be950dd6f4999a99b34746f6361a694f"
  },
  {
    "url": "zh/index.html",
    "revision": "d511606382f69cb908c4afe019d152ff"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "480e90817c9b61489f52c4a21547d683"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "5a418bf1c4d8eb8cfe73db59926b1305"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "c881bf1da55c704d37ba98cf38a040dc"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "290f3bb1a6ee5d5ef7a859bf2d8ad1ed"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "097b8b45c36495f6c558ff64500c332a"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "9332ce07c223b21e43f6900104d871c8"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "2f8c8233f0fb8238367e5d7fcc6531dc"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "1758e90b1b326b9c17edd6c09ea6248d"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "19acfaca527505e631e3543999b6a3fa"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "08be3ae752e625b27b8c2b6ddfb72b42"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "08076cc01e99eeaae260af7a1d7a22ac"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "45e0fa6368d2297817731ae94025e6dc"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "0df1391d04c07a538e9555c23d309f8b"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "efb03c89528607162f170d50fb81c511"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "e7b68e7e64ac61d4895c36244faf340c"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "ce58456beef3a429d87260dc3b31373e"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "fbba3d3b3a0f0fb87071516a658cdc56"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "1e13a310af1a94b967bf9435513c211e"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "5309a217b732f2a984dfcf113cab2260"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "54dc09cf111c77406807d34fbd00128b"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "f070f21c5d816373319f91e39a3abfb6"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "78ad952483adec3af88ebf42afd8613f"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "66eb1c51127b0a5ae84172b13cf3ac5c"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "8eed5618ced50ff9377684702aafaa49"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "baddf0b56a22f49d67cbbdb06d0b4409"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "8f4d9aaec74980bcb44dc1e3ffbabffa"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "fc43b4b675756fad52ab9ed3ac068c14"
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
