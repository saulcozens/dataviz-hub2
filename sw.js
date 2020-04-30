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
    "url": "252f366e-52b589c53c6d55d17c96.js"
  },
  {
    "url": "252f366e-52b589c53c6d55d17c96.js.map",
    "revision": "738dbad29c4a63d0563fe403fc093dcf"
  },
  {
    "url": "2d6d976b34659ebc657e42907ecf5fb066d46945-82bc272790926a2cccfd.js"
  },
  {
    "url": "2d6d976b34659ebc657e42907ecf5fb066d46945-82bc272790926a2cccfd.js.map",
    "revision": "44f20deac16c89dbe042d50cbebce49b"
  },
  {
    "url": "404.html",
    "revision": "c929ae69c0f297b562e4d1f5da9077e4"
  },
  {
    "url": "404/index.html",
    "revision": "dbb21e600924e6330b7b1b0449966db9"
  },
  {
    "url": "5e2a4920-5917321259284f7110f5.js"
  },
  {
    "url": "5e2a4920-5917321259284f7110f5.js.map",
    "revision": "70ca2e7b22f5829df6ca9181341d4944"
  },
  {
    "url": "8b83c7fd7bd4899a36c68f9e6766c9a6/index.mdx",
    "revision": "8b83c7fd7bd4899a36c68f9e6766c9a6"
  },
  {
    "url": "95b64a6e-72faca4f3982379a287f.js"
  },
  {
    "url": "95b64a6e-72faca4f3982379a287f.js.map",
    "revision": "c14418ec185c4464f9432f683fdcf5a9"
  },
  {
    "url": "about/index.html",
    "revision": "bf4b1c7bb57683543fcc5b6b8c4961fe"
  },
  {
    "url": "app-17de4a1790a7ff12c7e7.js"
  },
  {
    "url": "app-17de4a1790a7ff12c7e7.js.map",
    "revision": "f9b4e86fa60dff2adf5ca7ee1dd46fe4"
  },
  {
    "url": "blog/01/03/2020/award/index.html",
    "revision": "b8fc52221ef070c99ee7777bca32d483"
  },
  {
    "url": "blog/01/03/2020/dynamic_factor_model_chap1/index.html",
    "revision": "e35f9453410b525958702557c7f33a81"
  },
  {
    "url": "blog/01/03/2020/flag/index.html",
    "revision": "b2659aca5cf3119aa9d26194af018bd0"
  },
  {
    "url": "blog/01/03/2020/scientists_awarded_funding/index.html",
    "revision": "f9586e816497a30811cd9ad57d3b34e3"
  },
  {
    "url": "blog/01/03/2020/student_survey/index.html",
    "revision": "9cb882cd9c5b25927a623aed19fb4e7d"
  },
  {
    "url": "blog/06/04/2020/chart_choice/index.html",
    "revision": "041913841ef3407d4e2495bc6d67a05d"
  },
  {
    "url": "blog/20/03/2020/test/index.html",
    "revision": "e72060384dce7dda85072de0d0325172"
  },
  {
    "url": "blog/21/03/2020/novel_coronavirus_information/index.html",
    "revision": "5da066fc2cebba7d6c88cfcfc59276f7"
  },
  {
    "url": "blog/22/03/2020/how_to_write_blog_post/index.html",
    "revision": "41e0398db1742df5899ec79e5cc31222"
  },
  {
    "url": "blog/26/02/2020/new_dataviz/index.html",
    "revision": "3789c9dea4561c6fa342b406f2fc140a"
  },
  {
    "url": "blog/27/02/2020/second_test/index.html",
    "revision": "b01d446c049808b2c4857d9e1ffe9c11"
  },
  {
    "url": "blog/category/articles/index.html",
    "revision": "2f336e00c279ce25a7bff599348e0cfd"
  },
  {
    "url": "blog/category/events/index.html",
    "revision": "c6c59e4ad0cc5ebec5426c57627efb20"
  },
  {
    "url": "blog/category/news/index.html",
    "revision": "4bccabf5da79ec62ee86b01243da90b2"
  },
  {
    "url": "blog/category/tutorial/index.html",
    "revision": "ceb81692b90f9a3ea3c04a9df4e2387a"
  },
  {
    "url": "blog/index.html",
    "revision": "f1cd85276f6b8f0a2a3b5621349731d1"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "2cd9bb1d60a3ff737d05ab83752f0638"
  },
  {
    "url": "blog/tag/award/index.html",
    "revision": "aabc4781ba16860035284d6903cddf21"
  },
  {
    "url": "blog/tag/blog/index.html",
    "revision": "1dec090ce0427d46e95476730e5e17e5"
  },
  {
    "url": "blog/tag/dataviz/index.html",
    "revision": "e896ffb2790b03109410936575934b3d"
  },
  {
    "url": "blog/tag/neuroscience/index.html",
    "revision": "00dcdeaa7000122ed6a9aaf241a31946"
  },
  {
    "url": "blog/tag/orda/index.html",
    "revision": "e92cc33b1df241083f219600eb6124a0"
  },
  {
    "url": "blog/tag/science/index.html",
    "revision": "78f2ff49052a3317e7bcc68caadb6522"
  },
  {
    "url": "blog/tag/staff/index.html",
    "revision": "3ef8fc79d45a58feec09581cb466c5bb"
  },
  {
    "url": "blog/tag/statistics/index.html",
    "revision": "2c61004dd4244fe92f202d3dd06c179b"
  },
  {
    "url": "blog/tag/test/index.html",
    "revision": "2eb22f0513aaa6dab7f146fa44ddf1b1"
  },
  {
    "url": "blog/tag/the-university-of-sheffield/index.html",
    "revision": "1da36f9882749e4cf9fdfca673d03a28"
  },
  {
    "url": "chunk-map.json",
    "revision": "954a8fb9b57762f53d7e35dcd10d80c9"
  },
  {
    "url": "community/index.html",
    "revision": "77b8d5aa5881895079a859393515d9f3"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a68127634f725ba5d352.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a68127634f725ba5d352.js.map",
    "revision": "50508f211cd981ede63eceda0abf2c63"
  },
  {
    "url": "component---src-pages-404-jsx-3a9b4a0dc1d49713cf32.js"
  },
  {
    "url": "component---src-pages-404-jsx-3a9b4a0dc1d49713cf32.js.map",
    "revision": "de7d7877b86175c9b7055f97871549eb"
  },
  {
    "url": "component---src-pages-about-jsx-5bfe543cf92a3d115571.js"
  },
  {
    "url": "component---src-pages-about-jsx-5bfe543cf92a3d115571.js.map",
    "revision": "44498262ab1874484dcd7b277492107f"
  },
  {
    "url": "component---src-pages-community-jsx-64bbe7c056a08bc2f51a.js"
  },
  {
    "url": "component---src-pages-community-jsx-64bbe7c056a08bc2f51a.js.map",
    "revision": "1edda3be1fa24c435e0b13e8a59e0e5e"
  },
  {
    "url": "component---src-pages-events-jsx-ff702f4540f42d6c15cf.js"
  },
  {
    "url": "component---src-pages-events-jsx-ff702f4540f42d6c15cf.js.map",
    "revision": "66fa55292e27b1e442e676c07f19fae3"
  },
  {
    "url": "component---src-pages-index-jsx-87ca90bad52118820412.js"
  },
  {
    "url": "component---src-pages-index-jsx-87ca90bad52118820412.js.map",
    "revision": "495640ad770c8011d37e4c570454dc34"
  },
  {
    "url": "component---src-pages-search-jsx-e6e9e9fcbb96c71a6657.js"
  },
  {
    "url": "component---src-pages-search-jsx-e6e9e9fcbb96c71a6657.js.map",
    "revision": "9e54573f27f02f64a0c1199b2b233370"
  },
  {
    "url": "component---src-templates-blog-category-template-jsx-3bb5f2c2e5885cb557a6.js"
  },
  {
    "url": "component---src-templates-blog-category-template-jsx-3bb5f2c2e5885cb557a6.js.map",
    "revision": "dbef592ba16447a048b7ffe9e41dc003"
  },
  {
    "url": "component---src-templates-blog-post-template-custom-jsx-2bbd133791f38168c9bc.js"
  },
  {
    "url": "component---src-templates-blog-post-template-custom-jsx-2bbd133791f38168c9bc.js.map",
    "revision": "38c57bda9ba34d41068a198fcaf4e734"
  },
  {
    "url": "component---src-templates-blog-post-template-jsx-0a88bd32d4264fcf1389.js"
  },
  {
    "url": "component---src-templates-blog-post-template-jsx-0a88bd32d4264fcf1389.js.map",
    "revision": "da67f65a258ac3076db5b93ac52854c4"
  },
  {
    "url": "component---src-templates-blog-tag-template-jsx-ddd4a916b0d8623e6d38.js"
  },
  {
    "url": "component---src-templates-blog-tag-template-jsx-ddd4a916b0d8623e6d38.js.map",
    "revision": "d184813a28135d82143dcc13949093d7"
  },
  {
    "url": "component---src-templates-blog-template-jsx-b3b6667c1cdbb9468a95.js"
  },
  {
    "url": "component---src-templates-blog-template-jsx-b3b6667c1cdbb9468a95.js.map",
    "revision": "8114420f94be263366728673222db5da"
  },
  {
    "url": "de71a805-fd3a08fe68b32e6521a0.js"
  },
  {
    "url": "de71a805-fd3a08fe68b32e6521a0.js.map",
    "revision": "1bca908c557b539d7fa22bd2da075543"
  },
  {
    "url": "events/index.html",
    "revision": "20185347f7be4109cc4c7e40da00dafa"
  },
  {
    "url": "f1dc00f90147fedcafefffd9495881f75716b132-14c4b2dbdecaad41a1e4.js"
  },
  {
    "url": "f1dc00f90147fedcafefffd9495881f75716b132-14c4b2dbdecaad41a1e4.js.map",
    "revision": "5eaa7c016a0e4c6f82dfc1b4a58238af"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "b3ce05f343aecae60fbeb68d36f04bd0"
  },
  {
    "url": "flexsearch_index.json",
    "revision": "b17c0347d5accb4948cb9759a79beb32"
  },
  {
    "url": "framework-9f17982936948b7bdb42.js"
  },
  {
    "url": "framework-9f17982936948b7bdb42.js.map",
    "revision": "db17299be1e93b9f2faf243fec17e402"
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
    "revision": "734334f5f64814173f94331a19654541"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "53e6a63f6bbc11141bb746a0ce7993f8"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6af5df1e2373ce7ff62e86992322b8bb"
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
    "revision": "a55f6794bf352c976ba4d712cb517f79"
  },
  {
    "url": "page-data/blog/01/03/2020/award/page-data.json",
    "revision": "6ba0b9b821b71c57777302bc2cfd3da7"
  },
  {
    "url": "page-data/blog/01/03/2020/dynamic_factor_model_chap1/page-data.json",
    "revision": "9f3d33e5e47c1b6856710d0694b4039b"
  },
  {
    "url": "page-data/blog/01/03/2020/flag/page-data.json",
    "revision": "4d02bea52191a2e3314ae03c60d09618"
  },
  {
    "url": "page-data/blog/01/03/2020/scientists_awarded_funding/page-data.json",
    "revision": "70bac82441c88346d33ba632b540ca17"
  },
  {
    "url": "page-data/blog/01/03/2020/student_survey/page-data.json",
    "revision": "14c43a43e06238741fee3c2620e453ef"
  },
  {
    "url": "page-data/blog/06/04/2020/chart_choice/page-data.json",
    "revision": "240bcc89b8d8edb0d9da9ac8f33f294f"
  },
  {
    "url": "page-data/blog/20/03/2020/test/page-data.json",
    "revision": "648777a1d6bef3ad883018e9e9bfc044"
  },
  {
    "url": "page-data/blog/21/03/2020/novel_coronavirus_information/page-data.json",
    "revision": "492eb357a4d56555153fac0d6b1b00c1"
  },
  {
    "url": "page-data/blog/22/03/2020/how_to_write_blog_post/page-data.json",
    "revision": "37813fde7d4573d86b0b85ff2c2d4451"
  },
  {
    "url": "page-data/blog/26/02/2020/new_dataviz/page-data.json",
    "revision": "3b7ac770c196eae09ab84871ddc83fe3"
  },
  {
    "url": "page-data/blog/27/02/2020/second_test/page-data.json",
    "revision": "6ff275d2951ca93af77dc331381794c2"
  },
  {
    "url": "page-data/blog/category/articles/page-data.json",
    "revision": "b04818525773b0e5f0d9bd236076e7bd"
  },
  {
    "url": "page-data/blog/category/events/page-data.json",
    "revision": "004795c9042ee92d8ff3858936b3fa67"
  },
  {
    "url": "page-data/blog/category/news/page-data.json",
    "revision": "bfd9b7c1790238424294c3a7a4e186de"
  },
  {
    "url": "page-data/blog/category/tutorial/page-data.json",
    "revision": "1be74ea511169eea1b573b878c92e56a"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "ae1e1ee37264722517d38c56cf4dd7dd"
  },
  {
    "url": "page-data/blog/page/2/page-data.json",
    "revision": "edca26d9bcbe53963c8a6e03e8cfa5ae"
  },
  {
    "url": "page-data/blog/tag/award/page-data.json",
    "revision": "d10e3ab17d69665bf3b46e3c2eb0f4d0"
  },
  {
    "url": "page-data/blog/tag/blog/page-data.json",
    "revision": "c94e2387ca32d304d9465578b9c78a38"
  },
  {
    "url": "page-data/blog/tag/dataviz/page-data.json",
    "revision": "f55b2b2b007a0109bb3dce883dd79cc7"
  },
  {
    "url": "page-data/blog/tag/neuroscience/page-data.json",
    "revision": "650b1140ba8e20cff5bb2558384768ad"
  },
  {
    "url": "page-data/blog/tag/orda/page-data.json",
    "revision": "8a5aa85a7446ce9fd5150956ea753bd7"
  },
  {
    "url": "page-data/blog/tag/science/page-data.json",
    "revision": "3fee06760771ea158ed44ff17c95ba22"
  },
  {
    "url": "page-data/blog/tag/staff/page-data.json",
    "revision": "211345d76ec6a2741abe0ffd4e754fc2"
  },
  {
    "url": "page-data/blog/tag/statistics/page-data.json",
    "revision": "1c4cb043240b18626b463c8f951675c2"
  },
  {
    "url": "page-data/blog/tag/test/page-data.json",
    "revision": "275b5b913a4949cc0b0c7a2c06296d6e"
  },
  {
    "url": "page-data/blog/tag/the-university-of-sheffield/page-data.json",
    "revision": "0b9b7100d2b2b93f4e2de5f2028fd147"
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
    "revision": "ed3428591a1984f28ea3ae4f854b296c"
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
    "revision": "1a1f16cbcf54bb3affa7bde649cd14db"
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
    "url": "static/501f01c3ad8df6b9cf9bea77af8d084e/0e329/temp.jpg"
  },
  {
    "url": "static/501f01c3ad8df6b9cf9bea77af8d084e/14b42/temp.jpg"
  },
  {
    "url": "static/501f01c3ad8df6b9cf9bea77af8d084e/1faac/temp.jpg"
  },
  {
    "url": "static/501f01c3ad8df6b9cf9bea77af8d084e/2244e/temp.jpg"
  },
  {
    "url": "static/501f01c3ad8df6b9cf9bea77af8d084e/47498/temp.jpg"
  },
  {
    "url": "static/501f01c3ad8df6b9cf9bea77af8d084e/f836f/temp.jpg"
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
    "url": "styles-eed063c50106d4d85432.js"
  },
  {
    "url": "styles-eed063c50106d4d85432.js.map",
    "revision": "1a983fa4b6c999a6dc0aa375ba02383d"
  },
  {
    "url": "styles.8f7a7e0ad78592c41551.css"
  },
  {
    "url": "webpack-runtime-9e75b2c323c93809a6c4.js"
  },
  {
    "url": "webpack-runtime-9e75b2c323c93809a6c4.js.map",
    "revision": "b72ae7283c811117dfe5a839d4ba17fb"
  },
  {
    "url": "webpack.stats.json",
    "revision": "b610a41c2181be546e213772555fd1f2"
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
  if (!resources || !(await caches.match(`/dataviz-hub2/app-17de4a1790a7ff12c7e7.js`))) {
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
