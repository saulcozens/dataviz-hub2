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
    "url": "00ada3a0b7909c3685e5f3ee618354a7/SixCharts.png",
    "revision": "00ada3a0b7909c3685e5f3ee618354a7"
  },
  {
    "url": "0e5fc84217eed1acad88e7b3ede67db4/output_12_0.png",
    "revision": "0e5fc84217eed1acad88e7b3ede67db4"
  },
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
    "url": "252f366e-e8f7bfb184b9c23bb433.js"
  },
  {
    "url": "252f366e-e8f7bfb184b9c23bb433.js.map",
    "revision": "5832b58d958b90d123a802c3a97c733c"
  },
  {
    "url": "25fffed93c38f0fc849f23da47ea66ae/Deviation2.png",
    "revision": "25fffed93c38f0fc849f23da47ea66ae"
  },
  {
    "url": "2d6d976b34659ebc657e42907ecf5fb066d46945-0ae74338b7cc02a931dc.js"
  },
  {
    "url": "2d6d976b34659ebc657e42907ecf5fb066d46945-0ae74338b7cc02a931dc.js.map",
    "revision": "799054e9d9c17c2efeebf7f757d504a9"
  },
  {
    "url": "33ff4d58f81a9ab1b3bdc1992b7a54b4/img_3.svg",
    "revision": "33ff4d58f81a9ab1b3bdc1992b7a54b4"
  },
  {
    "url": "355459c0a3aefbf39ca1dd9825f3cfcd/output_18_0.png",
    "revision": "355459c0a3aefbf39ca1dd9825f3cfcd"
  },
  {
    "url": "3e5c819d98181d0f0d3a619b42137200/TypesofData.png",
    "revision": "3e5c819d98181d0f0d3a619b42137200"
  },
  {
    "url": "404.html",
    "revision": "dc2469bc527a240a929b734b229c069f"
  },
  {
    "url": "404/index.html",
    "revision": "3475d0517d0de389ddaab8ce2549e2cf"
  },
  {
    "url": "57c336a98a9423d616752f3480dbb538/FrenchWine2.png",
    "revision": "57c336a98a9423d616752f3480dbb538"
  },
  {
    "url": "57c35a5e477247a7420e0dbe29395223/output_30_0.png",
    "revision": "57c35a5e477247a7420e0dbe29395223"
  },
  {
    "url": "59ef11ce06c4d4c45a11483da891845d/output_28_1.png",
    "revision": "59ef11ce06c4d4c45a11483da891845d"
  },
  {
    "url": "5e1f724a34e4fbbf340dba4410840a49/output_26_1.png",
    "revision": "5e1f724a34e4fbbf340dba4410840a49"
  },
  {
    "url": "5e2a4920-5917321259284f7110f5.js"
  },
  {
    "url": "5e2a4920-5917321259284f7110f5.js.map",
    "revision": "70ca2e7b22f5829df6ca9181341d4944"
  },
  {
    "url": "603e72ea82932164d1edff27806072a2/Relationship1.png",
    "revision": "603e72ea82932164d1edff27806072a2"
  },
  {
    "url": "651e450bdd6e9a3effad19a09a8f3d51/index.mdx",
    "revision": "651e450bdd6e9a3effad19a09a8f3d51"
  },
  {
    "url": "78e521c3-8aeaa9c5afcd988ebd17.js"
  },
  {
    "url": "78e521c3-8aeaa9c5afcd988ebd17.js.map",
    "revision": "6a8fd4bb105707eb4c47723862ca96f8"
  },
  {
    "url": "7a10acfa924e70cf856c7190addf70b6/output_20_1.png",
    "revision": "7a10acfa924e70cf856c7190addf70b6"
  },
  {
    "url": "8df2d8c7fa72b24df31c141700f56dbe/Compare.png",
    "revision": "8df2d8c7fa72b24df31c141700f56dbe"
  },
  {
    "url": "8f09fab6cb79bc5f33f737ffdac49453/img_2.png",
    "revision": "8f09fab6cb79bc5f33f737ffdac49453"
  },
  {
    "url": "95b64a6e-366e6e9cd84aa74ede2a.js"
  },
  {
    "url": "95b64a6e-366e6e9cd84aa74ede2a.js.map",
    "revision": "5c8d67b0e7bb67e83f5085ec84a569d6"
  },
  {
    "url": "99697d4401da93ee66ffc2a8aaa815b1/output_10_1.png",
    "revision": "99697d4401da93ee66ffc2a8aaa815b1"
  },
  {
    "url": "a644408106b079620ca4a349f4cc66e5/Kickstarter2.png",
    "revision": "a644408106b079620ca4a349f4cc66e5"
  },
  {
    "url": "about/index.html",
    "revision": "92395f247d6ca82d112af2b00903cf38"
  },
  {
    "url": "acc11559c25bce5ee3d9a689a3c602a8/output_14_1.png",
    "revision": "acc11559c25bce5ee3d9a689a3c602a8"
  },
  {
    "url": "app-4111a6ec11b39f5b1f34.js"
  },
  {
    "url": "app-4111a6ec11b39f5b1f34.js.map",
    "revision": "d25fbcb7b3aaf774c6f35bb59d70bd41"
  },
  {
    "url": "b06b83e0afecc264170eb629af8026bd/WrongColors2.png",
    "revision": "b06b83e0afecc264170eb629af8026bd"
  },
  {
    "url": "b35659b84c41c4f894d576a4dc178f20/Distribution1.png",
    "revision": "b35659b84c41c4f894d576a4dc178f20"
  },
  {
    "url": "b4cbf28e22e521e30c82125257f309ca/temp.jpg",
    "revision": "b4cbf28e22e521e30c82125257f309ca"
  },
  {
    "url": "blog/02/05/2020/dataviz_stats_1/index.html",
    "revision": "583ae6b2cbcdc62bf0319e916de06e23"
  },
  {
    "url": "blog/06/04/2020/chart_choice/index.html",
    "revision": "85747fa69138a55a082a1e5c669d1138"
  },
  {
    "url": "blog/06/05/2020/Colour_Schemes/index.html",
    "revision": "9ed9a048a44e1c0d0d412ce30786512d"
  },
  {
    "url": "blog/07/05/2020/dataviz_stats_2/index.html",
    "revision": "bc9a6631880ea5fe6c6e8e5319c182ba"
  },
  {
    "url": "blog/22/03/2020/datavizhub_guide/index.html",
    "revision": "1b949ecfcbad85af402c9f856fba64d2"
  },
  {
    "url": "blog/22/03/2020/how_to_write_blog_post/index.html",
    "revision": "2aa961b85f2296666c06d4edc591fbc8"
  },
  {
    "url": "blog/category/articles/index.html",
    "revision": "f9b545b11d2754c9376a8485d0be6c67"
  },
  {
    "url": "blog/category/events/index.html",
    "revision": "371fa975634322d708799f954eeb442b"
  },
  {
    "url": "blog/category/news/index.html",
    "revision": "cca6bfca9cc1ac8c1086243a642187ca"
  },
  {
    "url": "blog/category/tutorial/index.html",
    "revision": "2120c4f74d77e1880b1d6e917758f161"
  },
  {
    "url": "blog/index.html",
    "revision": "a23555e506f02f66082d180e6104a885"
  },
  {
    "url": "blog/tag/blog/index.html",
    "revision": "f20512a479fe8ffdfd2370afff57b526"
  },
  {
    "url": "blog/tag/dataviz/index.html",
    "revision": "51ed2cf2a86596e9706c0688b5c8ecae"
  },
  {
    "url": "blog/tag/markdown/index.html",
    "revision": "04d24b3a91983a52d173571aab27ec28"
  },
  {
    "url": "blog/tag/python/index.html",
    "revision": "797baa1cb609de82f6eae240db1aa083"
  },
  {
    "url": "blog/tag/statistics/index.html",
    "revision": "a9a79ce2a7b5ca0c0e73348e67e1a5ef"
  },
  {
    "url": "chunk-map.json",
    "revision": "132e78de2728c4b12df08451b1e4dfde"
  },
  {
    "url": "community/index.html",
    "revision": "0558be56f34149f5beb99cfd77d0b8f6"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b0d6f039fb321560c31e.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b0d6f039fb321560c31e.js.map",
    "revision": "2b547ad8b63d43b7b6be12dc5463b64f"
  },
  {
    "url": "component---src-pages-404-jsx-2faa0420acfb91103db9.js"
  },
  {
    "url": "component---src-pages-404-jsx-2faa0420acfb91103db9.js.map",
    "revision": "9fb61b4d32edec4272f1e211895941a5"
  },
  {
    "url": "component---src-pages-about-jsx-3658eefe2888b386e8c7.js"
  },
  {
    "url": "component---src-pages-about-jsx-3658eefe2888b386e8c7.js.map",
    "revision": "5fb5beb2e8b6cfb9fe9a2044e1d51aa1"
  },
  {
    "url": "component---src-pages-community-jsx-acc2fde35614826a127d.js"
  },
  {
    "url": "component---src-pages-community-jsx-acc2fde35614826a127d.js.map",
    "revision": "b7fd0ae5ffeda9d035ec721c5142af5c"
  },
  {
    "url": "component---src-pages-events-jsx-3869ec929accb701177d.js"
  },
  {
    "url": "component---src-pages-events-jsx-3869ec929accb701177d.js.map",
    "revision": "7d06145f647a5d0a14c4fcd4fc2a7ea6"
  },
  {
    "url": "component---src-pages-index-jsx-fa8d1761d1dba1ded286.js"
  },
  {
    "url": "component---src-pages-index-jsx-fa8d1761d1dba1ded286.js.map",
    "revision": "02d40670104fb8f0248a2958b860e2dd"
  },
  {
    "url": "component---src-pages-search-jsx-4b2c1c27e05fc1eb5d19.js"
  },
  {
    "url": "component---src-pages-search-jsx-4b2c1c27e05fc1eb5d19.js.map",
    "revision": "086f885a689fdedd281b06e70af32832"
  },
  {
    "url": "component---src-templates-blog-category-template-jsx-31dbc8a826e5a933842f.js"
  },
  {
    "url": "component---src-templates-blog-category-template-jsx-31dbc8a826e5a933842f.js.map",
    "revision": "b3290c400e01a151e372ec923afa2196"
  },
  {
    "url": "component---src-templates-blog-post-template-jsx-7cd83d69782953858419.js"
  },
  {
    "url": "component---src-templates-blog-post-template-jsx-7cd83d69782953858419.js.map",
    "revision": "d3425946396ea534c142523b36249fd0"
  },
  {
    "url": "component---src-templates-blog-tag-template-jsx-c2918cee80435dad149d.js"
  },
  {
    "url": "component---src-templates-blog-tag-template-jsx-c2918cee80435dad149d.js.map",
    "revision": "28360d071de02e347826e4ad84870672"
  },
  {
    "url": "component---src-templates-blog-template-jsx-59f21610a5e63b4f9943.js"
  },
  {
    "url": "component---src-templates-blog-template-jsx-59f21610a5e63b4f9943.js.map",
    "revision": "c40bfca8af3e0611de87b34950a494b8"
  },
  {
    "url": "dba3324f4142f375d19268a54c60e915/output_32_1.png",
    "revision": "dba3324f4142f375d19268a54c60e915"
  },
  {
    "url": "de71a805-569c14fe753c0adb1a46.js"
  },
  {
    "url": "de71a805-569c14fe753c0adb1a46.js.map",
    "revision": "8c7ad2743c4eafa1db43bdd6e764c8cc"
  },
  {
    "url": "e30e471cc42b0550ad39ff8c40d6c078/output_16_1.png",
    "revision": "e30e471cc42b0550ad39ff8c40d6c078"
  },
  {
    "url": "ec4fa0e42e6920e5b5e4f3fb8709e75c6bdd83fa-39afc513ed4d00869ed5.js"
  },
  {
    "url": "ec4fa0e42e6920e5b5e4f3fb8709e75c6bdd83fa-39afc513ed4d00869ed5.js.map",
    "revision": "f0b3edba704b134e4daee8289b30bc73"
  },
  {
    "url": "events/index.html",
    "revision": "6fe44e12906060298505733a62c2655f"
  },
  {
    "url": "f89ccb1bcb05aa1b57c2bb6f965ea322/Colour Scales.png",
    "revision": "f89ccb1bcb05aa1b57c2bb6f965ea322"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "b3ce05f343aecae60fbeb68d36f04bd0"
  },
  {
    "url": "flexsearch_index.json",
    "revision": "50dcc1571808bc09cc485420ec11d557"
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
    "revision": "e7e5cbfb885b4c94534046a559597f9f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "c47ec57e751a987f6edc7c59f1e53dc7"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "2239bdb5e388a6d7de72a16b0b34d565"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "7958ec927e7ce3ca3899e9ed0ad8e48c"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "8acf4ff1f9e2f076dda9be0a291a8698"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "e3e7181ae750d4cff3be976326135222"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "c59e1c263dfac592107430eab5959325"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "2d37636aa138bf198d388f36bf9e7aaf"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "6d0717a113e3aa7376089bbcfde8b2f3"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "53e6a63f6bbc11141bb746a0ce7993f8"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c1f8d5ed50fc5e46afdab90526cceee8"
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
    "revision": "3b037064bcb7df2638d24b5ca70508cc"
  },
  {
    "url": "page-data/blog/02/05/2020/dataviz_stats_1/page-data.json",
    "revision": "5fc605741e50591803e3646c9bf60023"
  },
  {
    "url": "page-data/blog/06/04/2020/chart_choice/page-data.json",
    "revision": "193f9ef01e8f0c5b260c15169eec8f43"
  },
  {
    "url": "page-data/blog/06/05/2020/Colour_Schemes/page-data.json",
    "revision": "0245bf6dedf749e8f6349ed7533d7675"
  },
  {
    "url": "page-data/blog/07/05/2020/dataviz_stats_2/page-data.json",
    "revision": "6c1d4e1879b670d91ca5cc070505ff5a"
  },
  {
    "url": "page-data/blog/22/03/2020/datavizhub_guide/page-data.json",
    "revision": "c887c49c26ef9f3892de47d5de9b8510"
  },
  {
    "url": "page-data/blog/22/03/2020/how_to_write_blog_post/page-data.json",
    "revision": "927400a3d017476dec8a2ab5cf186519"
  },
  {
    "url": "page-data/blog/category/articles/page-data.json",
    "revision": "b283163673b7657df8b5e627a69e47a7"
  },
  {
    "url": "page-data/blog/category/events/page-data.json",
    "revision": "2ad21ee1681faa12696062742f144b7a"
  },
  {
    "url": "page-data/blog/category/news/page-data.json",
    "revision": "5849445fc417c4c635b9a2642747130b"
  },
  {
    "url": "page-data/blog/category/tutorial/page-data.json",
    "revision": "30ddf57b96b5a521d4255c521f7d17a1"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "b3a63280b7fe2d82d918e5d0fecb0935"
  },
  {
    "url": "page-data/blog/tag/blog/page-data.json",
    "revision": "fe846597cec06500785b9ad57401d506"
  },
  {
    "url": "page-data/blog/tag/dataviz/page-data.json",
    "revision": "f6b3743752bd53ef909cd3af1e4d208d"
  },
  {
    "url": "page-data/blog/tag/markdown/page-data.json",
    "revision": "105447ef03ef52fc1ad471a0f64d6907"
  },
  {
    "url": "page-data/blog/tag/python/page-data.json",
    "revision": "93594d8f2c224aa696bd2294813ba309"
  },
  {
    "url": "page-data/blog/tag/statistics/page-data.json",
    "revision": "18c8c848f29d93594c3fa0b4589319d4"
  },
  {
    "url": "page-data/community/page-data.json",
    "revision": "e0d15d2a7bd1ba0d7301c5f33152a0ca"
  },
  {
    "url": "page-data/events/page-data.json",
    "revision": "142c6d25cc9adbdf01a534a356ed3f5d"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "f89df5732bf5b5b48791c3bdf50f42b8"
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
    "revision": "2b8d09a11d7852cd677cf899723b75ae"
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
    "url": "static/60ba455c8b7bfe10273483665a3c9cf6/1a900/yellow.jpg"
  },
  {
    "url": "static/60ba455c8b7bfe10273483665a3c9cf6/21302/yellow.jpg"
  },
  {
    "url": "static/60ba455c8b7bfe10273483665a3c9cf6/801b3/yellow.jpg"
  },
  {
    "url": "static/7027d7240015bcf3adbc0b1b3d1963da/097fa/light-bulb.jpg"
  },
  {
    "url": "static/7027d7240015bcf3adbc0b1b3d1963da/596f3/light-bulb.jpg"
  },
  {
    "url": "static/7027d7240015bcf3adbc0b1b3d1963da/e88eb/light-bulb.jpg"
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
    "url": "static/871859109b0659b0d6a48ae540cb439e/46991/dataviz.png"
  },
  {
    "url": "static/871859109b0659b0d6a48ae540cb439e/69585/dataviz.png"
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
    "url": "static/93bb7bf89089bb255fa67456854e0db3/2244e/img_1.jpg"
  },
  {
    "url": "static/93bb7bf89089bb255fa67456854e0db3/f422e/img_1.jpg"
  },
  {
    "url": "static/93bb7bf89089bb255fa67456854e0db3/f836f/img_1.jpg"
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
    "url": "static/b4cbf28e22e521e30c82125257f309ca/d8255/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/f836f/temp.jpg"
  },
  {
    "url": "static/c77d3d7688082caba4911daa24a0a8b9/0f3a1/8389.jpg"
  },
  {
    "url": "static/c77d3d7688082caba4911daa24a0a8b9/2244e/8389.jpg"
  },
  {
    "url": "static/c77d3d7688082caba4911daa24a0a8b9/f836f/8389.jpg"
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
    "url": "static/d/3438288823.json"
  },
  {
    "url": "static/d/3904747727.json"
  },
  {
    "url": "static/d/404439809.json"
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
    "url": "styles-499c5cd0519b74e85245.js"
  },
  {
    "url": "styles-499c5cd0519b74e85245.js.map",
    "revision": "6b5a725d18007293b14f36296ba26093"
  },
  {
    "url": "styles.ee4542426000d46cf62d.css"
  },
  {
    "url": "webpack-runtime-fac6c755566cad55f605.js"
  },
  {
    "url": "webpack-runtime-fac6c755566cad55f605.js.map",
    "revision": "446feb4b3cb0040e2d492fee0332223c"
  },
  {
    "url": "webpack.stats.json",
    "revision": "4cda3d45f77f9741b1d568b32b4fceff"
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
  if (!resources || !(await caches.match(`/dataviz-hub2/app-4111a6ec11b39f5b1f34.js`))) {
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
