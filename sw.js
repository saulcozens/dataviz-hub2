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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1bfc9850-37c71addd7dbe502309e.js"
  },
  {
    "url": "1bfc9850-37c71addd7dbe502309e.js.map",
    "revision": "ec431fda341598e0067aee3d73cd4846"
  },
  {
    "url": "23-e12f69247275c932b997.js"
  },
  {
    "url": "23-e12f69247275c932b997.js.map",
    "revision": "eeeb301e2d1e98de0de2a742dee89e61"
  },
  {
    "url": "252f366e-a5b51b8fd25fe565fbe4.js"
  },
  {
    "url": "252f366e-a5b51b8fd25fe565fbe4.js.map",
    "revision": "a5dd4d43054d99e5323f4f202a3f7fbe"
  },
  {
    "url": "2d6d976b34659ebc657e42907ecf5fb066d46945-12627e5cf2fa5c72622b.js"
  },
  {
    "url": "2d6d976b34659ebc657e42907ecf5fb066d46945-12627e5cf2fa5c72622b.js.map",
    "revision": "c57456a2e354e6227448d4242630c535"
  },
  {
    "url": "404.html",
    "revision": "c653fae74881a140a474ae0347090a38"
  },
  {
    "url": "404/index.html",
    "revision": "24719a301bb9c1c798a175a8e80775ec"
  },
  {
    "url": "5e2a4920-5917321259284f7110f5.js"
  },
  {
    "url": "5e2a4920-5917321259284f7110f5.js.map",
    "revision": "70ca2e7b22f5829df6ca9181341d4944"
  },
  {
    "url": "646aa94d9498a2d5ab1c0f2633cc95a8/img_3.svg",
    "revision": "646aa94d9498a2d5ab1c0f2633cc95a8"
  },
  {
    "url": "95b64a6e-366e6e9cd84aa74ede2a.js"
  },
  {
    "url": "95b64a6e-366e6e9cd84aa74ede2a.js.map",
    "revision": "5c8d67b0e7bb67e83f5085ec84a569d6"
  },
  {
    "url": "about/index.html",
    "revision": "2b31b7b3891bf458710ae5ee35a1f856"
  },
  {
    "url": "ad42c497974ba4aaca3a0f60ff2a8581/index.mdx",
    "revision": "ad42c497974ba4aaca3a0f60ff2a8581"
  },
  {
    "url": "app-2e4f42362def51043b04.js"
  },
  {
    "url": "app-2e4f42362def51043b04.js.map",
    "revision": "b60cf71d97165fb8671bc202294bc588"
  },
  {
    "url": "blog/01/03/2020/award/index.html",
    "revision": "c8caaa06ab7e08ac86be9ad1f85aa05e"
  },
  {
    "url": "blog/01/03/2020/dynamic_factor_model_chap1/index.html",
    "revision": "ee74f450b4d636eb20eae0038437fedb"
  },
  {
    "url": "blog/01/03/2020/flag/index.html",
    "revision": "289c5058b23dd01574cb0405ee132702"
  },
  {
    "url": "blog/01/03/2020/scientists_awarded_funding/index.html",
    "revision": "93808e3bc2c66ab072e960c85d7b3eaa"
  },
  {
    "url": "blog/01/03/2020/student_survey/index.html",
    "revision": "14facc860bc780f5f6a619e4621bbf55"
  },
  {
    "url": "blog/02/05/2020/dataviz_statistics_1/index.html",
    "revision": "b9f1bab6640aaadb008f4a27b10cbc0d"
  },
  {
    "url": "blog/06/04/2020/chart_choice/index.html",
    "revision": "01f6cd9326179fe39a713f1dae7733aa"
  },
  {
    "url": "blog/20/03/2020/test/index.html",
    "revision": "1130f4343a54ed182a5bd247234ce2f2"
  },
  {
    "url": "blog/21/03/2020/novel_coronavirus_information/index.html",
    "revision": "e66944e2840cf58046c129652950b84c"
  },
  {
    "url": "blog/22/03/2020/how_to_write_blog_post/index.html",
    "revision": "ae1938472a8246d9720dc2652d7ee781"
  },
  {
    "url": "blog/26/02/2020/new_dataviz/index.html",
    "revision": "bcca8477fc4d1ea691ea9612d2c75c5d"
  },
  {
    "url": "blog/27/02/2020/second_test/index.html",
    "revision": "633df3cef9d302da1bc7b71a11b205bc"
  },
  {
    "url": "blog/category/articles/index.html",
    "revision": "7a80673be3cbbac85c79acd684b79747"
  },
  {
    "url": "blog/category/events/index.html",
    "revision": "f14e56b2377f892316efaf800322f0d6"
  },
  {
    "url": "blog/category/news/index.html",
    "revision": "bc239f613dc7ef00333ac0cad6a9f209"
  },
  {
    "url": "blog/category/tutorial/index.html",
    "revision": "0cad7c4e4f6993cdfbcaa2cffa73f962"
  },
  {
    "url": "blog/index.html",
    "revision": "56f7bc1f05f5a1a9e4cdde66f2362b0d"
  },
  {
    "url": "blog/tag/award/index.html",
    "revision": "1b1732e4e809633d903775e842185136"
  },
  {
    "url": "blog/tag/blog/index.html",
    "revision": "4b204728269e78ff0caedcf9b036796e"
  },
  {
    "url": "blog/tag/dataviz/index.html",
    "revision": "befeca23a109f7119755b4ed3fd8a0f0"
  },
  {
    "url": "blog/tag/markdown/index.html",
    "revision": "08efff083e14bf7086e94e626b87912c"
  },
  {
    "url": "blog/tag/neuroscience/index.html",
    "revision": "b5ad12f5105d68361d344ebe1d1583b2"
  },
  {
    "url": "blog/tag/orda/index.html",
    "revision": "f647a8560e27a717929f3358d50472fb"
  },
  {
    "url": "blog/tag/science/index.html",
    "revision": "081bc4493eae4f19f89e29d5278aa7f1"
  },
  {
    "url": "blog/tag/staff/index.html",
    "revision": "70e87aa5292a8df6c9abf7a0450e5bb7"
  },
  {
    "url": "blog/tag/statistics/index.html",
    "revision": "65ffdd8a4eaf42b5c15c1186536bc373"
  },
  {
    "url": "blog/tag/test/index.html",
    "revision": "c82bbd95cd0e7de6fd63df5ab58b9ea0"
  },
  {
    "url": "blog/tag/the-university-of-sheffield/index.html",
    "revision": "93be44f0dc218c4db37492e8a1fe92cb"
  },
  {
    "url": "chunk-map.json",
    "revision": "6f6d58bb7c0fc9db33de495bb8674aaf"
  },
  {
    "url": "community/index.html",
    "revision": "0e66c2cfaa79bc7a782f726a25812d4d"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b0d6f039fb321560c31e.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b0d6f039fb321560c31e.js.map",
    "revision": "2b547ad8b63d43b7b6be12dc5463b64f"
  },
  {
    "url": "component---src-pages-404-jsx-74cbb9cead2e5f1a63d5.js"
  },
  {
    "url": "component---src-pages-404-jsx-74cbb9cead2e5f1a63d5.js.map",
    "revision": "32068badbf26e7b57e66cc5f1a880f9c"
  },
  {
    "url": "component---src-pages-about-jsx-d4da108f24e244798f3b.js"
  },
  {
    "url": "component---src-pages-about-jsx-d4da108f24e244798f3b.js.map",
    "revision": "f4ce96ce2fa101c027fc839e79e12bc7"
  },
  {
    "url": "component---src-pages-community-jsx-c6c37d2994998f583a46.js"
  },
  {
    "url": "component---src-pages-community-jsx-c6c37d2994998f583a46.js.map",
    "revision": "7a4312c21bb679ab97709c1b07eefda7"
  },
  {
    "url": "component---src-pages-events-jsx-c7c8fc6bd0f85868c5bf.js"
  },
  {
    "url": "component---src-pages-events-jsx-c7c8fc6bd0f85868c5bf.js.map",
    "revision": "e6df75d07be131c073ab7c7e456c889e"
  },
  {
    "url": "component---src-pages-index-jsx-1a16cd017b8c6d9d847a.js"
  },
  {
    "url": "component---src-pages-index-jsx-1a16cd017b8c6d9d847a.js.map",
    "revision": "38682bd5fcc911b0fde2e4d16cb96d4e"
  },
  {
    "url": "component---src-pages-search-jsx-eb621294e702c01bab0b.js"
  },
  {
    "url": "component---src-pages-search-jsx-eb621294e702c01bab0b.js.map",
    "revision": "5a786a0093068b33c7a75c16ea52b9c0"
  },
  {
    "url": "component---src-templates-blog-category-template-jsx-edd95b4fe7c9e6b8de32.js"
  },
  {
    "url": "component---src-templates-blog-category-template-jsx-edd95b4fe7c9e6b8de32.js.map",
    "revision": "80334336b7da3205f8724157a31e0458"
  },
  {
    "url": "component---src-templates-blog-post-template-custom-jsx-990788065237c88e1da8.js"
  },
  {
    "url": "component---src-templates-blog-post-template-custom-jsx-990788065237c88e1da8.js.map",
    "revision": "eb7ae1b69a613ba12a39abce11616713"
  },
  {
    "url": "component---src-templates-blog-post-template-jsx-1f163d6b128dee02697b.js"
  },
  {
    "url": "component---src-templates-blog-post-template-jsx-1f163d6b128dee02697b.js.map",
    "revision": "29a390c43a09b6cd18362630f9515b24"
  },
  {
    "url": "component---src-templates-blog-tag-template-jsx-5aeebc9e0048324199ef.js"
  },
  {
    "url": "component---src-templates-blog-tag-template-jsx-5aeebc9e0048324199ef.js.map",
    "revision": "4309c899918d00b5c73b51061face370"
  },
  {
    "url": "component---src-templates-blog-template-jsx-ac8de555b84695d26d37.js"
  },
  {
    "url": "component---src-templates-blog-template-jsx-ac8de555b84695d26d37.js.map",
    "revision": "d24d149892a99ff0399262b202b88582"
  },
  {
    "url": "de71a805-e111cfcebd9bdeaa8bf8.js"
  },
  {
    "url": "de71a805-e111cfcebd9bdeaa8bf8.js.map",
    "revision": "64d78508681f5f0ddd0492f8c19e3f6f"
  },
  {
    "url": "e5b93ec7fbfd3279934ee6206faa61a6313a699e-7bceb67076fe3a7b3205.js"
  },
  {
    "url": "e5b93ec7fbfd3279934ee6206faa61a6313a699e-7bceb67076fe3a7b3205.js.map",
    "revision": "148a127df4b5c7621dd3bd7bba07d1be"
  },
  {
    "url": "events/index.html",
    "revision": "d9bd22bac3a98ccb7883e4f01df75a8f"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "b3ce05f343aecae60fbeb68d36f04bd0"
  },
  {
    "url": "flexsearch_index.json",
    "revision": "a9445fac7f90c3a61fc4364c17c2f5bb"
  },
  {
    "url": "framework-10a9839e3a7f539f43b6.js"
  },
  {
    "url": "framework-10a9839e3a7f539f43b6.js.map",
    "revision": "e60fc336288cea20a493850f4865121d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "2091b3b60559c118de5858f74ef1a8ec"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "46792e6bed4f3dc3b5e22c9056a8f23f"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "5009087d9ae45c23d51f7e3cdf5774b9"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "6daf448f06e922ccc5fb4b19a2ca3f8c"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "c8fe6877ce281395ede5fa3efa531e68"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "2dd2b149131cf4210a625c59d0b0ab0d"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "2b91d19ffefe934ef7f3a316395d0d94"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "27779f3acac8644ad8ffe38fad2d0ed1"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "5302582e7f110a5197dcaa87599b5b69"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "53e6a63f6bbc11141bb746a0ce7993f8"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "44dd8439dcdac19054381309423e121f"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2956e8129a28d1ca1b63ec8374ee3b4f"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "b3e7121ad8ab5b516db5e90df2370fe2"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "2a4e7bac0a7963d57c837623a3aaf64c"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "eeed8c7c6feb2730c2090f263ccd49b1"
  },
  {
    "url": "page-data/blog/01/03/2020/award/page-data.json",
    "revision": "b2922c557a40c7e4262694b9b6134074"
  },
  {
    "url": "page-data/blog/01/03/2020/dynamic_factor_model_chap1/page-data.json",
    "revision": "1cb900b79c6116ccd1a89062af3309aa"
  },
  {
    "url": "page-data/blog/01/03/2020/flag/page-data.json",
    "revision": "53714ae2e2de1ef6a58470d06b92ea78"
  },
  {
    "url": "page-data/blog/01/03/2020/scientists_awarded_funding/page-data.json",
    "revision": "7da5968904ed61454914ec4931c0df2f"
  },
  {
    "url": "page-data/blog/01/03/2020/student_survey/page-data.json",
    "revision": "630ed79a529e0b515bc3b2b0d9bb40a2"
  },
  {
    "url": "page-data/blog/02/05/2020/dataviz_statistics_1/page-data.json",
    "revision": "a556e0c2ee3f309f82e0e14fa3212843"
  },
  {
    "url": "page-data/blog/06/04/2020/chart_choice/page-data.json",
    "revision": "59bcdcbbf40c568b001f34dc280255fe"
  },
  {
    "url": "page-data/blog/20/03/2020/test/page-data.json",
    "revision": "73e575c69cbe08d58611560ca74dda78"
  },
  {
    "url": "page-data/blog/21/03/2020/novel_coronavirus_information/page-data.json",
    "revision": "ac93f9450d22303c13173ec93cf06cdd"
  },
  {
    "url": "page-data/blog/22/03/2020/how_to_write_blog_post/page-data.json",
    "revision": "a6d109d35d1c6283fdc93838230c8d92"
  },
  {
    "url": "page-data/blog/26/02/2020/new_dataviz/page-data.json",
    "revision": "2add72d2c252732757364ce142b4c9f1"
  },
  {
    "url": "page-data/blog/27/02/2020/second_test/page-data.json",
    "revision": "6ff275d2951ca93af77dc331381794c2"
  },
  {
    "url": "page-data/blog/category/articles/page-data.json",
    "revision": "c8e26515fa216d05057022251aea3c88"
  },
  {
    "url": "page-data/blog/category/events/page-data.json",
    "revision": "f76f9889af093f7a6f351ef0e0919d68"
  },
  {
    "url": "page-data/blog/category/news/page-data.json",
    "revision": "3262668fe54f8dd036cfcdbeb02b2df1"
  },
  {
    "url": "page-data/blog/category/tutorial/page-data.json",
    "revision": "dbde0dd0d7ae293f01f02ea23378761b"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "0e6c7eb347f43278a4734430af9a3ebb"
  },
  {
    "url": "page-data/blog/tag/award/page-data.json",
    "revision": "7855c30de478bcaf068af2917eff4e1d"
  },
  {
    "url": "page-data/blog/tag/blog/page-data.json",
    "revision": "8d303a4f8cac47c3d27ca5d48eb44fb5"
  },
  {
    "url": "page-data/blog/tag/dataviz/page-data.json",
    "revision": "be0b952d9e4d098280451578e2d25823"
  },
  {
    "url": "page-data/blog/tag/markdown/page-data.json",
    "revision": "fe4dabdd86c12117eae43e1eecc7f903"
  },
  {
    "url": "page-data/blog/tag/neuroscience/page-data.json",
    "revision": "de0cc90ba58e023b670ca651cdd3ba32"
  },
  {
    "url": "page-data/blog/tag/orda/page-data.json",
    "revision": "944ee4763f1db4c428fadbd6d41e66d6"
  },
  {
    "url": "page-data/blog/tag/science/page-data.json",
    "revision": "3dc87c6bc69f2e7f8fd96eea604d4475"
  },
  {
    "url": "page-data/blog/tag/staff/page-data.json",
    "revision": "e0aa7a58ad76c19287ea4aae7690fe92"
  },
  {
    "url": "page-data/blog/tag/statistics/page-data.json",
    "revision": "20b3a8b517a68420fb9f5ff0328c994e"
  },
  {
    "url": "page-data/blog/tag/test/page-data.json",
    "revision": "6f0620667d6cd7fe80c75a71e0ba3cdb"
  },
  {
    "url": "page-data/blog/tag/the-university-of-sheffield/page-data.json",
    "revision": "e20d6b224622d84caded99f9f1c22ff7"
  },
  {
    "url": "page-data/community/page-data.json",
    "revision": "e0d15d2a7bd1ba0d7301c5f33152a0ca"
  },
  {
    "url": "page-data/events/page-data.json",
    "revision": "954b9dedcdd4894ba95407207a51ad92"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "e12192efd498eed93c08cae8bb251eed"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/search/page-data.json",
    "revision": "7ea7c58ab21e889294068afe87aca2b6"
  },
  {
    "url": "search/index.html",
    "revision": "3a0d92a9ccec07d70cf72b392ac635b7"
  },
  {
    "url": "static/00ada3a0b7909c3685e5f3ee618354a7/0eb09/SixCharts.png"
  },
  {
    "url": "static/00ada3a0b7909c3685e5f3ee618354a7/1263b/SixCharts.png"
  },
  {
    "url": "static/00ada3a0b7909c3685e5f3ee618354a7/348c4/SixCharts.png"
  },
  {
    "url": "static/00ada3a0b7909c3685e5f3ee618354a7/6ffd1/SixCharts.png"
  },
  {
    "url": "static/00ada3a0b7909c3685e5f3ee618354a7/86700/SixCharts.png"
  },
  {
    "url": "static/00ada3a0b7909c3685e5f3ee618354a7/f97d7/SixCharts.png"
  },
  {
    "url": "static/0b4fd531c4d7e2b13cad834b37cad1fc/2244e/Y.L_Weng.jpg"
  },
  {
    "url": "static/0b4fd531c4d7e2b13cad834b37cad1fc/2e97c/Y.L_Weng.jpg"
  },
  {
    "url": "static/0b4fd531c4d7e2b13cad834b37cad1fc/f836f/Y.L_Weng.jpg"
  },
  {
    "url": "static/149608de9fc4542e544b764dfcec8754/596f3/earth.jpg"
  },
  {
    "url": "static/149608de9fc4542e544b764dfcec8754/e88eb/earth.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/1df11/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/34f1d/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/39fae/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/8fb7e/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/b1e91/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/ce222/community.jpg"
  },
  {
    "url": "static/1ea7fc799268df65540669aeb5292dd9/39fae/event.jpg"
  },
  {
    "url": "static/1ea7fc799268df65540669aeb5292dd9/b1e91/event.jpg"
  },
  {
    "url": "static/1ea7fc799268df65540669aeb5292dd9/ce222/event.jpg"
  },
  {
    "url": "static/1ea7fc799268df65540669aeb5292dd9/e99d1/event.jpg"
  },
  {
    "url": "static/21d74287ad45f8bb3ed575643156ae9d/18e3d/arts.jpg"
  },
  {
    "url": "static/21d74287ad45f8bb3ed575643156ae9d/1a900/arts.jpg"
  },
  {
    "url": "static/21d74287ad45f8bb3ed575643156ae9d/9af17/arts.jpg"
  },
  {
    "url": "static/21d74287ad45f8bb3ed575643156ae9d/c85f0/arts.jpg"
  },
  {
    "url": "static/25fffed93c38f0fc849f23da47ea66ae/0eb09/Deviation2.png"
  },
  {
    "url": "static/25fffed93c38f0fc849f23da47ea66ae/1263b/Deviation2.png"
  },
  {
    "url": "static/25fffed93c38f0fc849f23da47ea66ae/86700/Deviation2.png"
  },
  {
    "url": "static/25fffed93c38f0fc849f23da47ea66ae/a0a10/Deviation2.png"
  },
  {
    "url": "static/3e5c819d98181d0f0d3a619b42137200/0eb09/TypesofData.png"
  },
  {
    "url": "static/3e5c819d98181d0f0d3a619b42137200/1263b/TypesofData.png"
  },
  {
    "url": "static/3e5c819d98181d0f0d3a619b42137200/6ffd1/TypesofData.png"
  },
  {
    "url": "static/3e5c819d98181d0f0d3a619b42137200/86700/TypesofData.png"
  },
  {
    "url": "static/3e5c819d98181d0f0d3a619b42137200/8d3c2/TypesofData.png"
  },
  {
    "url": "static/3e5c819d98181d0f0d3a619b42137200/f97d7/TypesofData.png"
  },
  {
    "url": "static/469e10a2c9d52272b9df060294671312/0a251/nba.jpg"
  },
  {
    "url": "static/469e10a2c9d52272b9df060294671312/0e329/nba.jpg"
  },
  {
    "url": "static/469e10a2c9d52272b9df060294671312/14b42/nba.jpg"
  },
  {
    "url": "static/469e10a2c9d52272b9df060294671312/2244e/nba.jpg"
  },
  {
    "url": "static/469e10a2c9d52272b9df060294671312/47498/nba.jpg"
  },
  {
    "url": "static/469e10a2c9d52272b9df060294671312/953fe/nba.jpg"
  },
  {
    "url": "static/469e10a2c9d52272b9df060294671312/bce2d/nba.jpg"
  },
  {
    "url": "static/469e10a2c9d52272b9df060294671312/d8255/nba.jpg"
  },
  {
    "url": "static/469e10a2c9d52272b9df060294671312/f836f/nba.jpg"
  },
  {
    "url": "static/603e72ea82932164d1edff27806072a2/0eb09/Relationship1.png"
  },
  {
    "url": "static/603e72ea82932164d1edff27806072a2/1263b/Relationship1.png"
  },
  {
    "url": "static/603e72ea82932164d1edff27806072a2/69083/Relationship1.png"
  },
  {
    "url": "static/603e72ea82932164d1edff27806072a2/86700/Relationship1.png"
  },
  {
    "url": "static/677d3abf75ddc6139ac411467c792eef/14b42/test1.jpg"
  },
  {
    "url": "static/677d3abf75ddc6139ac411467c792eef/2244e/test1.jpg"
  },
  {
    "url": "static/677d3abf75ddc6139ac411467c792eef/4e6cd/test1.jpg"
  },
  {
    "url": "static/677d3abf75ddc6139ac411467c792eef/f836f/test1.jpg"
  },
  {
    "url": "static/749188996e1d4d10ce4d9c75c7d709b3/78a35/moon.jpg"
  },
  {
    "url": "static/749188996e1d4d10ce4d9c75c7d709b3/e66c2/moon.jpg"
  },
  {
    "url": "static/749188996e1d4d10ce4d9c75c7d709b3/f01d2/moon.jpg"
  },
  {
    "url": "static/808a8868105aeeb501fb6c30cae89ca0/2244e/test2.jpg"
  },
  {
    "url": "static/808a8868105aeeb501fb6c30cae89ca0/3d7ec/test2.jpg"
  },
  {
    "url": "static/808a8868105aeeb501fb6c30cae89ca0/f836f/test2.jpg"
  },
  {
    "url": "static/873350e406407b3316da2e9a12713b2e/497c6/Charts_Thumb.png"
  },
  {
    "url": "static/873350e406407b3316da2e9a12713b2e/69585/Charts_Thumb.png"
  },
  {
    "url": "static/873350e406407b3316da2e9a12713b2e/7dac8/Charts_Thumb.png"
  },
  {
    "url": "static/8df2d8c7fa72b24df31c141700f56dbe/0eb09/Compare.png"
  },
  {
    "url": "static/8df2d8c7fa72b24df31c141700f56dbe/51f47/Compare.png"
  },
  {
    "url": "static/8df2d8c7fa72b24df31c141700f56dbe/86700/Compare.png"
  },
  {
    "url": "static/8f09fab6cb79bc5f33f737ffdac49453/0eb09/img_2.png"
  },
  {
    "url": "static/8f09fab6cb79bc5f33f737ffdac49453/0f09e/img_2.png"
  },
  {
    "url": "static/8f09fab6cb79bc5f33f737ffdac49453/86700/img_2.png"
  },
  {
    "url": "static/98f53e94125f8b6b49696d5765f9c537/2244e/img_1.jpg"
  },
  {
    "url": "static/98f53e94125f8b6b49696d5765f9c537/f422e/img_1.jpg"
  },
  {
    "url": "static/98f53e94125f8b6b49696d5765f9c537/f836f/img_1.jpg"
  },
  {
    "url": "static/9da8c08ae750717b448e74820f5893b2/14b42/nss.jpg"
  },
  {
    "url": "static/9da8c08ae750717b448e74820f5893b2/2244e/nss.jpg"
  },
  {
    "url": "static/9da8c08ae750717b448e74820f5893b2/953fe/nss.jpg"
  },
  {
    "url": "static/9da8c08ae750717b448e74820f5893b2/a24e6/nss.jpg"
  },
  {
    "url": "static/9da8c08ae750717b448e74820f5893b2/bce2d/nss.jpg"
  },
  {
    "url": "static/9da8c08ae750717b448e74820f5893b2/f836f/nss.jpg"
  },
  {
    "url": "static/a3b1ee43e3d647663c4facca99b37aca/0a251/data_has.jpg"
  },
  {
    "url": "static/a3b1ee43e3d647663c4facca99b37aca/0e329/data_has.jpg"
  },
  {
    "url": "static/a3b1ee43e3d647663c4facca99b37aca/10a43/data_has.jpg"
  },
  {
    "url": "static/a3b1ee43e3d647663c4facca99b37aca/14b42/data_has.jpg"
  },
  {
    "url": "static/a3b1ee43e3d647663c4facca99b37aca/2244e/data_has.jpg"
  },
  {
    "url": "static/a3b1ee43e3d647663c4facca99b37aca/47498/data_has.jpg"
  },
  {
    "url": "static/a3b1ee43e3d647663c4facca99b37aca/953fe/data_has.jpg"
  },
  {
    "url": "static/a3b1ee43e3d647663c4facca99b37aca/bce2d/data_has.jpg"
  },
  {
    "url": "static/a3b1ee43e3d647663c4facca99b37aca/e3932/data_has.jpg"
  },
  {
    "url": "static/a3b1ee43e3d647663c4facca99b37aca/f836f/data_has.jpg"
  },
  {
    "url": "static/a5f24356802da739ca3b96f45667c2e6/12c12/hear.jpg"
  },
  {
    "url": "static/a5f24356802da739ca3b96f45667c2e6/2244e/hear.jpg"
  },
  {
    "url": "static/a5f24356802da739ca3b96f45667c2e6/953fe/hear.jpg"
  },
  {
    "url": "static/a5f24356802da739ca3b96f45667c2e6/9e240/hear.jpg"
  },
  {
    "url": "static/a5f24356802da739ca3b96f45667c2e6/bce2d/hear.jpg"
  },
  {
    "url": "static/a5f24356802da739ca3b96f45667c2e6/f836f/hear.jpg"
  },
  {
    "url": "static/afa28dd3acb9b9f69609abe91a798f55/0e329/advice.jpg"
  },
  {
    "url": "static/afa28dd3acb9b9f69609abe91a798f55/14b42/advice.jpg"
  },
  {
    "url": "static/afa28dd3acb9b9f69609abe91a798f55/2244e/advice.jpg"
  },
  {
    "url": "static/afa28dd3acb9b9f69609abe91a798f55/47498/advice.jpg"
  },
  {
    "url": "static/afa28dd3acb9b9f69609abe91a798f55/545e0/advice.jpg"
  },
  {
    "url": "static/afa28dd3acb9b9f69609abe91a798f55/f836f/advice.jpg"
  },
  {
    "url": "static/b35659b84c41c4f894d576a4dc178f20/0eb09/Distribution1.png"
  },
  {
    "url": "static/b35659b84c41c4f894d576a4dc178f20/2d709/Distribution1.png"
  },
  {
    "url": "static/b35659b84c41c4f894d576a4dc178f20/86700/Distribution1.png"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/0a251/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/0e329/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/14b42/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/2244e/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/47498/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/953fe/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/aaf92/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/bce2d/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/d8255/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/e3932/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/f836f/temp.jpg"
  },
  {
    "url": "static/b500c122c2226f80b16ecd110ff62e48/497c6/flagship.png"
  },
  {
    "url": "static/b500c122c2226f80b16ecd110ff62e48/69585/flagship.png"
  },
  {
    "url": "static/b500c122c2226f80b16ecd110ff62e48/95330/flagship.png"
  },
  {
    "url": "static/b500c122c2226f80b16ecd110ff62e48/ee604/flagship.png"
  },
  {
    "url": "static/c8d0f44f49a0c2ce38d557f5b9070c49/497c6/PPCirc.png"
  },
  {
    "url": "static/c8d0f44f49a0c2ce38d557f5b9070c49/69585/PPCirc.png"
  },
  {
    "url": "static/c8d0f44f49a0c2ce38d557f5b9070c49/c6e25/PPCirc.png"
  },
  {
    "url": "static/com_1-a0e4c0689c63024715127c5e741bd8a6.jpg"
  },
  {
    "url": "static/com_2-e649ff42b2d4ee96bdbc1606d1308a65.jpg"
  },
  {
    "url": "static/covid-19-95a833485279e96b55c06baf2cd19267.jpg"
  },
  {
    "url": "static/d/1251993812.json"
  },
  {
    "url": "static/d/2417117884.json"
  },
  {
    "url": "static/d/2538406912.json"
  },
  {
    "url": "static/d/2955208998.json"
  },
  {
    "url": "static/d/3011060359.json"
  },
  {
    "url": "static/d/3155470302.json"
  },
  {
    "url": "static/d/3173261936.json"
  },
  {
    "url": "static/d/3904747727.json"
  },
  {
    "url": "static/d/522342103.json"
  },
  {
    "url": "static/d/63374147.json"
  },
  {
    "url": "static/d1b3607045b93bc9f47f2edab8393a23/39fae/about.jpg"
  },
  {
    "url": "static/d1b3607045b93bc9f47f2edab8393a23/b1e91/about.jpg"
  },
  {
    "url": "static/d1b3607045b93bc9f47f2edab8393a23/ce222/about.jpg"
  },
  {
    "url": "static/d1b3607045b93bc9f47f2edab8393a23/e99d1/about.jpg"
  },
  {
    "url": "static/dbe4e5e4461008360b542a02714ff7a5/14b42/sheffield.jpg"
  },
  {
    "url": "static/dbe4e5e4461008360b542a02714ff7a5/2244e/sheffield.jpg"
  },
  {
    "url": "static/dbe4e5e4461008360b542a02714ff7a5/47498/sheffield.jpg"
  },
  {
    "url": "static/dbe4e5e4461008360b542a02714ff7a5/f836f/sheffield.jpg"
  },
  {
    "url": "static/ec0cc4f56043216a42a33efde8da1b8e/097fa/moon2.jpg"
  },
  {
    "url": "static/ec0cc4f56043216a42a33efde8da1b8e/836e2/moon2.jpg"
  },
  {
    "url": "static/ec0cc4f56043216a42a33efde8da1b8e/87d8a/moon2.jpg"
  },
  {
    "url": "static/ec0cc4f56043216a42a33efde8da1b8e/b1cc5/moon2.jpg"
  },
  {
    "url": "static/f5113049c1e439a1a6db9efecae10d3c/34d5a/blog_p.jpg"
  },
  {
    "url": "static/f5113049c1e439a1a6db9efecae10d3c/34f1d/blog_p.jpg"
  },
  {
    "url": "static/f5113049c1e439a1a6db9efecae10d3c/39fae/blog_p.jpg"
  },
  {
    "url": "static/f5113049c1e439a1a6db9efecae10d3c/8fb7e/blog_p.jpg"
  },
  {
    "url": "static/f5113049c1e439a1a6db9efecae10d3c/b1e91/blog_p.jpg"
  },
  {
    "url": "static/f5113049c1e439a1a6db9efecae10d3c/ce222/blog_p.jpg"
  },
  {
    "url": "static/f87efab2a042d1a312b4e66ce9471f96/12c12/award.jpg"
  },
  {
    "url": "static/f87efab2a042d1a312b4e66ce9471f96/2244e/award.jpg"
  },
  {
    "url": "static/f87efab2a042d1a312b4e66ce9471f96/953fe/award.jpg"
  },
  {
    "url": "static/f87efab2a042d1a312b4e66ce9471f96/9e240/award.jpg"
  },
  {
    "url": "static/f87efab2a042d1a312b4e66ce9471f96/bce2d/award.jpg"
  },
  {
    "url": "static/f87efab2a042d1a312b4e66ce9471f96/f836f/award.jpg"
  },
  {
    "url": "static/google-6f52b93ba7863140c2badef18ed17a97.png"
  },
  {
    "url": "static/how-8184eccdb1d063c9d19127aeab061003.jpg"
  },
  {
    "url": "static/its-bf42e10ede6fc9096548ea038be6d3ec.png"
  },
  {
    "url": "static/KaTeX_AMS-Regular-7f06b4e30317f784d61d26686aed0ab2.woff"
  },
  {
    "url": "static/KaTeX_AMS-Regular-aaf4eee9fba9907d61c3935e0b6a54ae.ttf"
  },
  {
    "url": "static/KaTeX_AMS-Regular-e78e28b4834954df047e4925e9dbf354.woff2"
  },
  {
    "url": "static/KaTeX_Caligraphic-Bold-021dd4dc61ee5f5cdf315f43b48c094b.ttf"
  },
  {
    "url": "static/KaTeX_Caligraphic-Bold-1e802ca9dedc4ed4e3c6f645e4316128.woff"
  },
  {
    "url": "static/KaTeX_Caligraphic-Bold-4ec58befa687e9752c3c91cd9bcf1bcb.woff2"
  },
  {
    "url": "static/KaTeX_Caligraphic-Regular-7edb53b6693d75b8a2232481eea1a52c.woff2"
  },
  {
    "url": "static/KaTeX_Caligraphic-Regular-d3b46c3a530116933081d9d74e3e9fe8.woff"
  },
  {
    "url": "static/KaTeX_Caligraphic-Regular-d49f2d55ce4f40f982d8ba63d746fbf9.ttf"
  },
  {
    "url": "static/KaTeX_Fraktur-Bold-a31e7cba7b7221ebf1a2ae545fb306b2.ttf"
  },
  {
    "url": "static/KaTeX_Fraktur-Bold-c4c8cab7d5be97b2bb283e531c077355.woff"
  },
  {
    "url": "static/KaTeX_Fraktur-Bold-d5b59ec9764e10f4a82369ae29f3ac58.woff2"
  },
  {
    "url": "static/KaTeX_Fraktur-Regular-32a5339eb809f381a7357ba56f82aab3.woff2"
  },
  {
    "url": "static/KaTeX_Fraktur-Regular-a48dad4f58c82e38a10da0ceebb86370.ttf"
  },
  {
    "url": "static/KaTeX_Fraktur-Regular-b7d9c46bff5d51da6209e355cc4a235d.woff"
  },
  {
    "url": "static/KaTeX_Main-Bold-22086eb5d97009c3e99bcc1d16ce6865.woff"
  },
  {
    "url": "static/KaTeX_Main-Bold-8e1e01c4b1207c0a383d9a2b4f86e637.woff2"
  },
  {
    "url": "static/KaTeX_Main-Bold-9ceff51b3cb7ce6eb4e8efa8163a1472.ttf"
  },
  {
    "url": "static/KaTeX_Main-BoldItalic-284a17fe5baf72ff8217d4c7e70c0f82.woff2"
  },
  {
    "url": "static/KaTeX_Main-BoldItalic-4c57dbc44bfff1fdf08a59cf556fdab3.woff"
  },
  {
    "url": "static/KaTeX_Main-BoldItalic-e8b44b990516dab7937bf240fde8b46a.ttf"
  },
  {
    "url": "static/KaTeX_Main-Italic-29c86397e75cdcb3135af8295f1c2e28.ttf"
  },
  {
    "url": "static/KaTeX_Main-Italic-99be0e10c38cd42466e6fe1665ef9536.woff"
  },
  {
    "url": "static/KaTeX_Main-Italic-e533d5a2506cf053cd671b335ec04dde.woff2"
  },
  {
    "url": "static/KaTeX_Main-Regular-5c734d78610fa35282f3379f866707f2.woff2"
  },
  {
    "url": "static/KaTeX_Main-Regular-5c94aef490324b0925dbe5f643e8fd04.ttf"
  },
  {
    "url": "static/KaTeX_Main-Regular-b741441f6d71014d0453ca3ebc884dd4.woff"
  },
  {
    "url": "static/KaTeX_Math-BoldItalic-9a2834a9ff8ab411153571e0e55ac693.ttf"
  },
  {
    "url": "static/KaTeX_Math-BoldItalic-b13731ef4e2bfc3d8d859271e39550fc.woff"
  },
  {
    "url": "static/KaTeX_Math-BoldItalic-d747bd1e7a6a43864285edd73dcde253.woff2"
  },
  {
    "url": "static/KaTeX_Math-Italic-291e76b8871b84560701bd29f9d1dcc7.ttf"
  },
  {
    "url": "static/KaTeX_Math-Italic-4ad08b826b8065e1eab85324d726538c.woff2"
  },
  {
    "url": "static/KaTeX_Math-Italic-f0303906c2a67ac63bf1e8ccd638a89e.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Bold-3fb419559955e3ce75619f1a5e8c6c84.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Bold-6e0830bee40435e72165345e0682fbfc.woff2"
  },
  {
    "url": "static/KaTeX_SansSerif-Bold-7dc027cba9f7b11ec92af4a311372a85.ttf"
  },
  {
    "url": "static/KaTeX_SansSerif-Italic-4059868e460d2d2e6be18e180d20c43d.ttf"
  },
  {
    "url": "static/KaTeX_SansSerif-Italic-727a9b0d97d72d2fc0228fe4e07fb4d8.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Italic-fba01c9c6fb2866a0f95bcacb2c187a5.woff2"
  },
  {
    "url": "static/KaTeX_SansSerif-Regular-2555754a67062cac3a0913b715ab982f.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Regular-5c58d168c0b66d2c32234a6718e74dfb.ttf"
  },
  {
    "url": "static/KaTeX_SansSerif-Regular-d929cd671b19f0cfea55b6200fb47461.woff2"
  },
  {
    "url": "static/KaTeX_Script-Regular-755e2491f13b5269f0afd5a56f7aa692.woff2"
  },
  {
    "url": "static/KaTeX_Script-Regular-d12ea9efb375f9dc331f562e69892638.ttf"
  },
  {
    "url": "static/KaTeX_Script-Regular-d524c9a5b62a17f98f4a97af37fea735.woff"
  },
  {
    "url": "static/KaTeX_Size1-Regular-7342d45b052c3a2abc21049959fbab7f.ttf"
  },
  {
    "url": "static/KaTeX_Size2-Regular-eb130dcc661de766c999c60ba1525a88.ttf"
  },
  {
    "url": "static/KaTeX_Size4-Regular-ad7672524b64b730dfd176140a8945cb.ttf"
  },
  {
    "url": "static/KaTeX_Typewriter-Regular-257023560753aeb0b89b7e434d3da17f.ttf"
  },
  {
    "url": "static/KaTeX_Typewriter-Regular-3fe216d2a5f736c560cde71984554b64.woff"
  },
  {
    "url": "static/KaTeX_Typewriter-Regular-6cc31ea5c223c88705a13727a71417fa.woff2"
  },
  {
    "url": "static/no_image_1-cbab1c85fd0b5df4703007ed018da08a.png"
  },
  {
    "url": "static/no_image_2-b13c16e972f8b2ad521f01353e4f3531.png"
  },
  {
    "url": "static/no_image_3-aaf15ad711674c5252f1a4ba244792eb.png"
  },
  {
    "url": "static/no_image_4-fffe700b17d689328c70fc5bbd4ebd96.png"
  },
  {
    "url": "static/no_image_5-719d9205cd776b0cda9f9d883d2efbba.png"
  },
  {
    "url": "static/orda_logo-d4442f31f9acafdb4dc5c2b1bc509071.png"
  },
  {
    "url": "static/rse-6449112d7c9c5b6e83469baf7a3071fc.png"
  },
  {
    "url": "static/TUOSlogo-b500c122c2226f80b16ecd110ff62e48.png"
  },
  {
    "url": "static/why-51bd2c332c8538727b131ab20a57c5eb.jpg"
  },
  {
    "url": "styles-499c5cd0519b74e85245.js"
  },
  {
    "url": "styles-499c5cd0519b74e85245.js.map",
    "revision": "6b5a725d18007293b14f36296ba26093"
  },
  {
    "url": "styles.c280d485a8570fa4384a.css"
  },
  {
    "url": "webpack-runtime-0530d3f781cfe76e7583.js"
  },
  {
    "url": "webpack-runtime-0530d3f781cfe76e7583.js.map",
    "revision": "f5d6bf2ce8888fff99b0fc604bc6f428"
  },
  {
    "url": "webpack.stats.json",
    "revision": "19b45ea27f92457b9442088eccda9e9c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/dataviz-hub2`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/dataviz-hub2/app-2e4f42362def51043b04.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/dataviz-hub2/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
