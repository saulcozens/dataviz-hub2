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
    "url": "01280ce09d34e642e3613698063693cc/dash_example.py",
    "revision": "01280ce09d34e642e3613698063693cc"
  },
  {
    "url": "03add7995000b7d9481edf50fcf4db44/Fig5.png",
    "revision": "03add7995000b7d9481edf50fcf4db44"
  },
  {
    "url": "0412015cc95239518bd5b737cb1a95e8/solution_2.png",
    "revision": "0412015cc95239518bd5b737cb1a95e8"
  },
  {
    "url": "063685adcac7fa42b8d4541c215a191d/distPlot.png",
    "revision": "063685adcac7fa42b8d4541c215a191d"
  },
  {
    "url": "0cd46bd50718bbf6d7affeef5e4ead0e/Fig6.png",
    "revision": "0cd46bd50718bbf6d7affeef5e4ead0e"
  },
  {
    "url": "0e5fc84217eed1acad88e7b3ede67db4/output_12_0.png",
    "revision": "0e5fc84217eed1acad88e7b3ede67db4"
  },
  {
    "url": "11630fecaaf89cc47d3f52781145af09/Helen-Kennedy.jpg",
    "revision": "11630fecaaf89cc47d3f52781145af09"
  },
  {
    "url": "1215f4af5f5515e9b936876cd4b8a4ef/Fig1.png",
    "revision": "1215f4af5f5515e9b936876cd4b8a4ef"
  },
  {
    "url": "1603883dc8ae140f22adf5bc4b78c3a7/Fig6.png",
    "revision": "1603883dc8ae140f22adf5bc4b78c3a7"
  },
  {
    "url": "1a73ca4ce2a3b95a68d9595f4234a6fe/Fig3.png",
    "revision": "1a73ca4ce2a3b95a68d9595f4234a6fe"
  },
  {
    "url": "1bfc9850-9b53e5afc7d65ce2b192.js"
  },
  {
    "url": "1bfc9850-9b53e5afc7d65ce2b192.js.map",
    "revision": "db60d0d821cea2711d24bcbf4937b346"
  },
  {
    "url": "252f366e-d92828dac3ebd402255a.js"
  },
  {
    "url": "252f366e-d92828dac3ebd402255a.js.map",
    "revision": "d6062150600a5a785f7738cdca4c6491"
  },
  {
    "url": "25fffed93c38f0fc849f23da47ea66ae/Deviation2.png",
    "revision": "25fffed93c38f0fc849f23da47ea66ae"
  },
  {
    "url": "33-c0d90c7821eed27283e7.js"
  },
  {
    "url": "33-c0d90c7821eed27283e7.js.map",
    "revision": "e1c0972cd07ab68ff912e4e668f4b0fe"
  },
  {
    "url": "355459c0a3aefbf39ca1dd9825f3cfcd/output_18_0.png",
    "revision": "355459c0a3aefbf39ca1dd9825f3cfcd"
  },
  {
    "url": "3a0a47071faee2b02596b6414cb67d1c/scatterPlot.png",
    "revision": "3a0a47071faee2b02596b6414cb67d1c"
  },
  {
    "url": "3cda13cd4a0d1370ed8e128035832649/Fig1.png",
    "revision": "3cda13cd4a0d1370ed8e128035832649"
  },
  {
    "url": "3d980ef5e583bbb3a8c271f16a7b8847/barPlot.png",
    "revision": "3d980ef5e583bbb3a8c271f16a7b8847"
  },
  {
    "url": "3e5c819d98181d0f0d3a619b42137200/TypesofData.png",
    "revision": "3e5c819d98181d0f0d3a619b42137200"
  },
  {
    "url": "404.html",
    "revision": "9ccf52daf8dab9de8380eaed28534c05"
  },
  {
    "url": "404/index.html",
    "revision": "1d2606ae51c1cfb5c1fdf38eb5366209"
  },
  {
    "url": "45b10ed8990621b80e20eb4dac89e4b3/thumb1.png",
    "revision": "45b10ed8990621b80e20eb4dac89e4b3"
  },
  {
    "url": "45e9eea1cb6ade247b97083786de51ac/img1.jpg",
    "revision": "45e9eea1cb6ade247b97083786de51ac"
  },
  {
    "url": "48c5cb70039984134e6f5b953d14daf5/Fig2.png",
    "revision": "48c5cb70039984134e6f5b953d14daf5"
  },
  {
    "url": "52d4677e3ba0379f6160744cf6d82782/Fig7.jpg",
    "revision": "52d4677e3ba0379f6160744cf6d82782"
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
    "url": "58045623acf68358ed63be86cba585d7/Fig1.png",
    "revision": "58045623acf68358ed63be86cba585d7"
  },
  {
    "url": "58e9e33dad5576b13b6314440053cc6b/Fig3.png",
    "revision": "58e9e33dad5576b13b6314440053cc6b"
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
    "url": "5e2a4920-28e0dfa664c65a2dc86c.js"
  },
  {
    "url": "5e2a4920-28e0dfa664c65a2dc86c.js.map",
    "revision": "8e801716391211329552a52aaa5ee37c"
  },
  {
    "url": "603e72ea82932164d1edff27806072a2/Relationship1.png",
    "revision": "603e72ea82932164d1edff27806072a2"
  },
  {
    "url": "609a3532cf7668b40f575f5c8a8f377b/index.mdx",
    "revision": "609a3532cf7668b40f575f5c8a8f377b"
  },
  {
    "url": "646aa94d9498a2d5ab1c0f2633cc95a8/img_3.svg",
    "revision": "646aa94d9498a2d5ab1c0f2633cc95a8"
  },
  {
    "url": "65ff790df8b54fe3fd536b5477c1dccd/boxPlot.png",
    "revision": "65ff790df8b54fe3fd536b5477c1dccd"
  },
  {
    "url": "6f3ed93fe3e6ea21b26c15df4b34c525/Fig1.png",
    "revision": "6f3ed93fe3e6ea21b26c15df4b34c525"
  },
  {
    "url": "78e521c3-529e300254cd56163bc5.js"
  },
  {
    "url": "78e521c3-529e300254cd56163bc5.js.map",
    "revision": "75ba0b0caf174e4ac032d96bf6566ba7"
  },
  {
    "url": "7a10acfa924e70cf856c7190addf70b6/output_20_1.png",
    "revision": "7a10acfa924e70cf856c7190addf70b6"
  },
  {
    "url": "877f6d0fb7b8bec8f1028e050ed35dc6/Fig4.png",
    "revision": "877f6d0fb7b8bec8f1028e050ed35dc6"
  },
  {
    "url": "8ae492f912e3fc4c59b0e2bb6816e688/Fig3.png",
    "revision": "8ae492f912e3fc4c59b0e2bb6816e688"
  },
  {
    "url": "8cde48887f50e3ccc99105b48fffcac23eee5e7d-d03371371b9bc646a23d.js"
  },
  {
    "url": "8cde48887f50e3ccc99105b48fffcac23eee5e7d-d03371371b9bc646a23d.js.map",
    "revision": "0ae40bddfe673a994d474006f72c2d77"
  },
  {
    "url": "8df2d8c7fa72b24df31c141700f56dbe/Compare.png",
    "revision": "8df2d8c7fa72b24df31c141700f56dbe"
  },
  {
    "url": "8e700d79fa76b0cb5e6e610b99b79488/edward_itineraryCUMULATIVE.gif",
    "revision": "8e700d79fa76b0cb5e6e610b99b79488"
  },
  {
    "url": "8f09fab6cb79bc5f33f737ffdac49453/img_2.png",
    "revision": "8f09fab6cb79bc5f33f737ffdac49453"
  },
  {
    "url": "8f5182aa0891f286cffa20a6e1851192/map_visualisation_presentation.jpg",
    "revision": "8f5182aa0891f286cffa20a6e1851192"
  },
  {
    "url": "95b64a6e-c804ffc5a5da90e62227.js"
  },
  {
    "url": "95b64a6e-c804ffc5a5da90e62227.js.map",
    "revision": "1c428b25c74d77ae7cc86a3399fcd0af"
  },
  {
    "url": "98a599ca4a0880f25a77b618bc1ed9da/participants.jpg",
    "revision": "98a599ca4a0880f25a77b618bc1ed9da"
  },
  {
    "url": "99697d4401da93ee66ffc2a8aaa815b1/output_10_1.png",
    "revision": "99697d4401da93ee66ffc2a8aaa815b1"
  },
  {
    "url": "9bed7912d99f2b67ca7f100b1e8864fc/Fig3.png",
    "revision": "9bed7912d99f2b67ca7f100b1e8864fc"
  },
  {
    "url": "9d39dad6821a410ef10e99ccf9b6f625619b2449-145cdf085d1c489bdf63.js"
  },
  {
    "url": "9d39dad6821a410ef10e99ccf9b6f625619b2449-145cdf085d1c489bdf63.js.map",
    "revision": "113b8624c4ff0e269fe08d203f2f6372"
  },
  {
    "url": "a0f1a88da99c38bdb88ff0985519a90a/Fig2.png",
    "revision": "a0f1a88da99c38bdb88ff0985519a90a"
  },
  {
    "url": "a3632cb3fa18b04fe50a788dfd73d3afe878b2b6-9d1e7611d076a1439400.js"
  },
  {
    "url": "a3632cb3fa18b04fe50a788dfd73d3afe878b2b6-9d1e7611d076a1439400.js.map",
    "revision": "7f2ce7e248454b85784c41da3a3481df"
  },
  {
    "url": "a44240697a5f55109c51dfebab7b3395/Fig2.png",
    "revision": "a44240697a5f55109c51dfebab7b3395"
  },
  {
    "url": "a644408106b079620ca4a349f4cc66e5/Kickstarter2.png",
    "revision": "a644408106b079620ca4a349f4cc66e5"
  },
  {
    "url": "a8e5249bdeab577fdedce16e359f5195/Fig4.png",
    "revision": "a8e5249bdeab577fdedce16e359f5195"
  },
  {
    "url": "about/index.html",
    "revision": "7d28670b6973fd0a1b97e100259b6ff9"
  },
  {
    "url": "acc11559c25bce5ee3d9a689a3c602a8/output_14_1.png",
    "revision": "acc11559c25bce5ee3d9a689a3c602a8"
  },
  {
    "url": "adb95786ee5c22fc51746113cb541f06/Fig4.png",
    "revision": "adb95786ee5c22fc51746113cb541f06"
  },
  {
    "url": "app-bb287f60984ca71be21d.js"
  },
  {
    "url": "app-bb287f60984ca71be21d.js.map",
    "revision": "d8891c1d57205a138404684541584cb6"
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
    "url": "b38b55a587a6ad5f4a06b666c9e255c7/requirements.txt",
    "revision": "b38b55a587a6ad5f4a06b666c9e255c7"
  },
  {
    "url": "b4cbf28e22e521e30c82125257f309ca/temp.jpg",
    "revision": "b4cbf28e22e521e30c82125257f309ca"
  },
  {
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-5d53482339133333ec13.js"
  },
  {
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-5d53482339133333ec13.js.map",
    "revision": "d0bba488152232c7020dde714807cf3c"
  },
  {
    "url": "b6f2fe82a2458ef1e089e6f3cdacff6a/Fig4.png",
    "revision": "b6f2fe82a2458ef1e089e6f3cdacff6a"
  },
  {
    "url": "b98bc7c3-5fa9d1a8c83bfbad3d62.js"
  },
  {
    "url": "b98bc7c3-5fa9d1a8c83bfbad3d62.js.map",
    "revision": "38328c19441c5bde219173aca94d5d9c"
  },
  {
    "url": "bab4896a-3ff237acb369fd3dfdf6.js"
  },
  {
    "url": "bab4896a-3ff237acb369fd3dfdf6.js.map",
    "revision": "18f95f76c9d6d5d56baaa3a4b6ff57d1"
  },
  {
    "url": "blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality/index.html",
    "revision": "13ae6b63fa6d3cbd5b8004655fb72650"
  },
  {
    "url": "blog/02/05/2020/dataviz_stats_1/index.html",
    "revision": "f9f6a2e731bf0cafb6e5d70c191b8184"
  },
  {
    "url": "blog/03/07/2020/Deploy_Your_Dash_App/index.html",
    "revision": "f106cf887d78b4cb8017b9ae0b6e24d1"
  },
  {
    "url": "blog/03/07/2020/LearningPath_Concept/index.html",
    "revision": "fe31391263b46a19385aa78f13c45e1c"
  },
  {
    "url": "blog/04/06/2020/dash_tutorial/index.html",
    "revision": "31d39e9e2f509590fe0a566287226db9"
  },
  {
    "url": "blog/04/07/2020/LearningPath_Lab/index.html",
    "revision": "415ccda15a09183bf9ca6796fb4233cb"
  },
  {
    "url": "blog/05/07/2020/LearningPath_Workflow/index.html",
    "revision": "a9b6ebafdfe763835fea96da17f16a2f"
  },
  {
    "url": "blog/06/04/2020/chart_choice/index.html",
    "revision": "c049ed23b82864d10325d7de996c13cf"
  },
  {
    "url": "blog/06/05/2020/Colour_Schemes/index.html",
    "revision": "5cdf65b1a468211b668073c6a79cc90b"
  },
  {
    "url": "blog/07/05/2020/dataviz_stats_2/index.html",
    "revision": "0a0488f732ad44be1c59545c62da5f3d"
  },
  {
    "url": "blog/08/09/2020/challenges_in_visualising_data/index.html",
    "revision": "083f50ce17f5436f70187f37fcd46ed6"
  },
  {
    "url": "blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/index.html",
    "revision": "eb350a2815740a70eac15538a080c86f"
  },
  {
    "url": "blog/12/06/2020/dash_tutorial_2/index.html",
    "revision": "fc38a6dcc3e2679aec7175d812c90d32"
  },
  {
    "url": "blog/13/07/2020/Shiny_Template/index.html",
    "revision": "35c6869a8d3ed4da5cc466a35d34d067"
  },
  {
    "url": "blog/16/06/2020/Jupyter_Widgets/index.html",
    "revision": "80a9323fe44b953355a7214a2cfc74ee"
  },
  {
    "url": "blog/16/07/2020/python_visualisation_templates/index.html",
    "revision": "cdf52d51b1e73fdb396cdc1db7f52c24"
  },
  {
    "url": "blog/18/08/2020/GM/index.html",
    "revision": "6913cbac0b9d8e81d149135352e7a140"
  },
  {
    "url": "blog/20/05/2020/Non_Numeric/index.html",
    "revision": "cbe4dc54f8cea45b5ff644b8a2c5f785"
  },
  {
    "url": "blog/22/03/2020/contribute_blog_post/index.html",
    "revision": "8bfd2dd856e52fcaf0b34b2ce9fee56c"
  },
  {
    "url": "blog/22/03/2020/datavizhub_guide/index.html",
    "revision": "7aaec8a4af85b741b8d1650ddbc77540"
  },
  {
    "url": "blog/24/06/2020/host_jupyter_notebook/index.html",
    "revision": "0b36e10a3e02f429f615f48dd0c7f53b"
  },
  {
    "url": "blog/26/08/2020/D3js_for_data_visualisation/index.html",
    "revision": "2acd099dbf129adb90151e606306154f"
  },
  {
    "url": "blog/28/02/2020/Urban_Observatories_hackathon/index.html",
    "revision": "87bed30228c7619d5074c0f6a7bde3dd"
  },
  {
    "url": "blog/category/articles/index.html",
    "revision": "83571ba9012681767e1fe688d7aca192"
  },
  {
    "url": "blog/category/articles/page/2/index.html",
    "revision": "521da9c6ebc2a2fd4527854874b614ac"
  },
  {
    "url": "blog/category/events/index.html",
    "revision": "05aa9389bb16fab1912c7ae6bbd3d70c"
  },
  {
    "url": "blog/category/tutorial/index.html",
    "revision": "b6a254ef745c896cb30c8c690ef06a7c"
  },
  {
    "url": "blog/category/tutorials/index.html",
    "revision": "5af65e5faff9c59d565fa5646a4fd78a"
  },
  {
    "url": "blog/index.html",
    "revision": "48b1b2906ff3e0417364317eac3f6488"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "4bc50ed5d9c17be2cc8944af93ff4730"
  },
  {
    "url": "blog/tag/blog/index.html",
    "revision": "09a6524b93f8e178f302e8d071d1315a"
  },
  {
    "url": "blog/tag/covid-19-mortality/index.html",
    "revision": "e60ce1a69d421dfb8ff93c2d4391d3fe"
  },
  {
    "url": "blog/tag/covid-19-virus-sars-co-v-2/index.html",
    "revision": "3fe376ef0551d99e8b1dec4cf54406e7"
  },
  {
    "url": "blog/tag/d-3-js/index.html",
    "revision": "dffcad3b379bbbccba8d7c376c2ecbe2"
  },
  {
    "url": "blog/tag/dash/index.html",
    "revision": "32cb213bb58b6addbb45d948d5dbd5e4"
  },
  {
    "url": "blog/tag/data-analytics/index.html",
    "revision": "6a3e42380973d621c420f022ff3cb566"
  },
  {
    "url": "blog/tag/data-engineering/index.html",
    "revision": "7863217b05956a0ca16bd510508bd938"
  },
  {
    "url": "blog/tag/data-politics/index.html",
    "revision": "94bb8abb9274520bc00b63cad8a39259"
  },
  {
    "url": "blog/tag/dataviz/index.html",
    "revision": "b35d2c77010fd30d8505b9f2d048560d"
  },
  {
    "url": "blog/tag/deploy/index.html",
    "revision": "8532a4a9b9d8c15c905b1eaeb41ac074"
  },
  {
    "url": "blog/tag/epidemiology/index.html",
    "revision": "1ad414c3859e032da9b47abff888084e"
  },
  {
    "url": "blog/tag/heroku/index.html",
    "revision": "504e67dfa72f7451615fdf3ff55cc33e"
  },
  {
    "url": "blog/tag/host/index.html",
    "revision": "e916ff5201bec3022ca45f8a766eee3e"
  },
  {
    "url": "blog/tag/html/index.html",
    "revision": "9236fea8c0298a85d510b4268001d7b2"
  },
  {
    "url": "blog/tag/interactive/index.html",
    "revision": "76222c8dc50201d62c21a5d8a8b8405d"
  },
  {
    "url": "blog/tag/javascript/index.html",
    "revision": "360ce7d40ad1a045167ebdf9166ae254"
  },
  {
    "url": "blog/tag/jupyter-notebook/index.html",
    "revision": "a9bc1960ed698f2d64d5dc312314f0b2"
  },
  {
    "url": "blog/tag/jupyter-widgets/index.html",
    "revision": "cc497a529a77d93cb1952a745968d7cf"
  },
  {
    "url": "blog/tag/markdown/index.html",
    "revision": "f868a911f99b06a96130349e32f788ed"
  },
  {
    "url": "blog/tag/pandas/index.html",
    "revision": "5708904a0a6d2cbdcdb4eae306f6ebc5"
  },
  {
    "url": "blog/tag/pandemic/index.html",
    "revision": "f2d093775d01558bb1666f51c15f180d"
  },
  {
    "url": "blog/tag/plotly/index.html",
    "revision": "c492f2c33b92112ef304f58341b6b25f"
  },
  {
    "url": "blog/tag/python/index.html",
    "revision": "8eb1a751ddc0fd54e640af7a82ccdaed"
  },
  {
    "url": "blog/tag/research-innovation/index.html",
    "revision": "43544a4b92f0f03a0b13bd3e5c3ba3b4"
  },
  {
    "url": "blog/tag/shiny/index.html",
    "revision": "09691bd38ba83f0c378cbf0293301a36"
  },
  {
    "url": "blog/tag/statistics/index.html",
    "revision": "0763d7e3a8edd2016570b5a976aba056"
  },
  {
    "url": "blog/tag/template/index.html",
    "revision": "d71c82780c57d8d7f982152c1354e1cc"
  },
  {
    "url": "blog/tag/urban-observatory/index.html",
    "revision": "8a7c6bfac6775305c65a744737469039"
  },
  {
    "url": "blog/tag/web/index.html",
    "revision": "ac86158169906a9cfb3588c1e0e5f191"
  },
  {
    "url": "cb0a7846a2477a4925125501cb38e5bb9f875859-7d688a2d27e89d0969e7.js"
  },
  {
    "url": "cb0a7846a2477a4925125501cb38e5bb9f875859-7d688a2d27e89d0969e7.js.map",
    "revision": "c352e006117d712bec4605341d8c85d6"
  },
  {
    "url": "ce495cf4cddfab10605895c037545834/Colin_Angus.png",
    "revision": "ce495cf4cddfab10605895c037545834"
  },
  {
    "url": "cf4d725311c2fdf851f0b593d3a9f5b3/img2.jpg",
    "revision": "cf4d725311c2fdf851f0b593d3a9f5b3"
  },
  {
    "url": "chunk-map.json",
    "revision": "52a6186541f8233fbf9bf0d26263a9a1"
  },
  {
    "url": "community/index.html",
    "revision": "921c309308e08b0919d95d186acd410b"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a04bf9fd7f0b2db0f0f9.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a04bf9fd7f0b2db0f0f9.js.map",
    "revision": "4b479c31058c904235fec0f8d7ba46c4"
  },
  {
    "url": "component---src-pages-404-jsx-90d3fe883f7102635edf.js"
  },
  {
    "url": "component---src-pages-404-jsx-90d3fe883f7102635edf.js.map",
    "revision": "dd302ee5b35a6864f7f892f13723995b"
  },
  {
    "url": "component---src-pages-about-jsx-1e0998e865baca586a4f.js"
  },
  {
    "url": "component---src-pages-about-jsx-1e0998e865baca586a4f.js.map",
    "revision": "2f6784c4647c71496b70b668076d810e"
  },
  {
    "url": "component---src-pages-community-jsx-90fbee0c0c5eff9747c8.js"
  },
  {
    "url": "component---src-pages-community-jsx-90fbee0c0c5eff9747c8.js.map",
    "revision": "420e927565ce1d79d848a47b4362a21e"
  },
  {
    "url": "component---src-pages-events-jsx-b07991a3dea7a87b69e1.js"
  },
  {
    "url": "component---src-pages-events-jsx-b07991a3dea7a87b69e1.js.map",
    "revision": "1583b315192663b03a2889ab079fd1ea"
  },
  {
    "url": "component---src-pages-index-jsx-509d4fe93898d06c87b9.js"
  },
  {
    "url": "component---src-pages-index-jsx-509d4fe93898d06c87b9.js.map",
    "revision": "2e90e7c90d223afe4044231503c52d8f"
  },
  {
    "url": "component---src-pages-privacy-jsx-fdb316617d0104f5e678.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-fdb316617d0104f5e678.js.map",
    "revision": "c4d0e8eeb886fd50f8abad4b8507e473"
  },
  {
    "url": "component---src-pages-search-jsx-ed0abcd7d0c023a53718.js"
  },
  {
    "url": "component---src-pages-search-jsx-ed0abcd7d0c023a53718.js.map",
    "revision": "70ed259a4a8a2b2f4531b814ca028b2f"
  },
  {
    "url": "component---src-templates-blog-category-template-jsx-34d9ed944911a4fb9a8d.js"
  },
  {
    "url": "component---src-templates-blog-category-template-jsx-34d9ed944911a4fb9a8d.js.map",
    "revision": "e1feb7e0a692a1b75d4e2d798abb8d2b"
  },
  {
    "url": "component---src-templates-blog-post-template-custom-jsx-53b960edfe9450395196.js"
  },
  {
    "url": "component---src-templates-blog-post-template-custom-jsx-53b960edfe9450395196.js.map",
    "revision": "d208824c481a59dce58b230bbacf8c6c"
  },
  {
    "url": "component---src-templates-blog-post-template-jsx-f0919cc08a933e565f52.js"
  },
  {
    "url": "component---src-templates-blog-post-template-jsx-f0919cc08a933e565f52.js.map",
    "revision": "db46f3498d80343c48cd20bae883e102"
  },
  {
    "url": "component---src-templates-blog-tag-template-jsx-1094f1a8d8ca34ae3fd4.js"
  },
  {
    "url": "component---src-templates-blog-tag-template-jsx-1094f1a8d8ca34ae3fd4.js.map",
    "revision": "ea064a6ce234ab7798c0eb57990f29c3"
  },
  {
    "url": "component---src-templates-blog-template-jsx-c7a4e990b3acefb8e9b5.js"
  },
  {
    "url": "component---src-templates-blog-template-jsx-c7a4e990b3acefb8e9b5.js.map",
    "revision": "94e1a4b463ffef586bf6b05bc2ccb7a1"
  },
  {
    "url": "d3/d3js_for_dataviz.js"
  },
  {
    "url": "d3/dataviz.js"
  },
  {
    "url": "d3/dist/d3js_for_dataviz.dev.js"
  },
  {
    "url": "d3/dist/dataviz.dev.js"
  },
  {
    "url": "d706d7115f6f55e0119134f15bc0178a/Fig6.png",
    "revision": "d706d7115f6f55e0119134f15bc0178a"
  },
  {
    "url": "d71dd128a1b9662d4f93d9735e5b35cbf15bcb51-5e42920c357cebfef7ed.js"
  },
  {
    "url": "d71dd128a1b9662d4f93d9735e5b35cbf15bcb51-5e42920c357cebfef7ed.js.map",
    "revision": "b420847a16b8c922f77bdf698bc8f691"
  },
  {
    "url": "dba3324f4142f375d19268a54c60e915/output_32_1.png",
    "revision": "dba3324f4142f375d19268a54c60e915"
  },
  {
    "url": "de71a805-8d7f1e1e14aab4219133.js"
  },
  {
    "url": "de71a805-8d7f1e1e14aab4219133.js.map",
    "revision": "55984b9ee05fbb47fa06d9726ac6e01b"
  },
  {
    "url": "e04c37380dca28669fa92eac59ceffc1/Fig3.png",
    "revision": "e04c37380dca28669fa92eac59ceffc1"
  },
  {
    "url": "e30e471cc42b0550ad39ff8c40d6c078/output_16_1.png",
    "revision": "e30e471cc42b0550ad39ff8c40d6c078"
  },
  {
    "url": "e4be2d5d36c833a13ad91fe8cc0b72f2/hexbinPlot.png",
    "revision": "e4be2d5d36c833a13ad91fe8cc0b72f2"
  },
  {
    "url": "e5000396a4f7ac960b66debd0ef47352/Fig4.gif",
    "revision": "e5000396a4f7ac960b66debd0ef47352"
  },
  {
    "url": "e678b8b4676ac9fa48670c696e16c887ac7f55c7-10964ea560ba356e0a33.js"
  },
  {
    "url": "e678b8b4676ac9fa48670c696e16c887ac7f55c7-10964ea560ba356e0a33.js.map",
    "revision": "a10e9b03658ad45c3db8a226d932b903"
  },
  {
    "url": "e79de403c487f46cc2c02dc4cad8fe76/BlogBreakdown.png",
    "revision": "e79de403c487f46cc2c02dc4cad8fe76"
  },
  {
    "url": "events/index.html",
    "revision": "b4218f94e02be45e9a493cbf48627f1c"
  },
  {
    "url": "f132b4caf23a2eb84ad4c68e52fe1df6/Fig7.png",
    "revision": "f132b4caf23a2eb84ad4c68e52fe1df6"
  },
  {
    "url": "f19704a092dc0f7a75a1a7a37b13cec7/Fig2.png",
    "revision": "f19704a092dc0f7a75a1a7a37b13cec7"
  },
  {
    "url": "f4ea99fb7f507e5d29383ece5079d3f1/Fig8.jpg",
    "revision": "f4ea99fb7f507e5d29383ece5079d3f1"
  },
  {
    "url": "f809e3e6ff34dfcb2e726a03b56c47a0/Fig2.png",
    "revision": "f809e3e6ff34dfcb2e726a03b56c47a0"
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
    "url": "fb16343b545125a2840699b1215cafe3/Fig5.jpg",
    "revision": "fb16343b545125a2840699b1215cafe3"
  },
  {
    "url": "fc793935fef334c225b42aab0fd70a7e/solution.jpg",
    "revision": "fc793935fef334c225b42aab0fd70a7e"
  },
  {
    "url": "fdb1e2f7472aa185ca0212ced955456e/Sheffield_Hackathon_Map_Output.png",
    "revision": "fdb1e2f7472aa185ca0212ced955456e"
  },
  {
    "url": "flexsearch_index.json",
    "revision": "e51c5795873f01c3849aad5e6c8608aa"
  },
  {
    "url": "framework-d567e117e5d5c25331be.js"
  },
  {
    "url": "framework-d567e117e5d5c25331be.js.map",
    "revision": "53b763e6b0230308ba70ecffade7f5a1"
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
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "2aac900f9ebec0aa4350aa9ee2cbb587"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8d0b5c4f27de19af677b8e979a75d509"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "eade511a52b1e1ea45a283e16ceae0d1"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "548e9c6655e688768583a7ec81afb994"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "e1d1232f70eb57bf56994354e9d741ad"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "534f7202ade34edb02179bd228f1a18b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "abd6811477131da5af31c159d341b4f5"
  },
  {
    "url": "page-data/blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality/page-data.json",
    "revision": "04119ef47b48f208bdbba8dc39c4aaa8"
  },
  {
    "url": "page-data/blog/02/05/2020/dataviz_stats_1/page-data.json",
    "revision": "b596fb22155bd2dfdc884be5f7bcf043"
  },
  {
    "url": "page-data/blog/03/07/2020/Deploy_Your_Dash_App/page-data.json",
    "revision": "118fcf254bbd55b1e7e666dbf6fad678"
  },
  {
    "url": "page-data/blog/03/07/2020/LearningPath_Concept/page-data.json",
    "revision": "a5671beac8e9b6d1946735c273136f8c"
  },
  {
    "url": "page-data/blog/04/06/2020/dash_tutorial/page-data.json",
    "revision": "54b941b3382ff588a83e2c59bfa27e30"
  },
  {
    "url": "page-data/blog/04/07/2020/LearningPath_Lab/page-data.json",
    "revision": "57ea1e97d6479d8cc3a15dc8574ccfce"
  },
  {
    "url": "page-data/blog/05/07/2020/LearningPath_Workflow/page-data.json",
    "revision": "0c4a24fb0530e529e3aa71f58f5c4bf2"
  },
  {
    "url": "page-data/blog/06/04/2020/chart_choice/page-data.json",
    "revision": "5ac5b27be1f46c030bb56a10773802cf"
  },
  {
    "url": "page-data/blog/06/05/2020/Colour_Schemes/page-data.json",
    "revision": "81fd4cdaa77c01018c714a631594e18a"
  },
  {
    "url": "page-data/blog/07/05/2020/dataviz_stats_2/page-data.json",
    "revision": "8f1e906188202deebb09e7b8c1ab704a"
  },
  {
    "url": "page-data/blog/08/09/2020/challenges_in_visualising_data/page-data.json",
    "revision": "25f54b855736996a5ee381b07b8250ce"
  },
  {
    "url": "page-data/blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/page-data.json",
    "revision": "f2941a085cf681a35b91bf0716cd57e2"
  },
  {
    "url": "page-data/blog/12/06/2020/dash_tutorial_2/page-data.json",
    "revision": "086049cec0b0b80cafdaaf75cc283706"
  },
  {
    "url": "page-data/blog/13/07/2020/Shiny_Template/page-data.json",
    "revision": "aeff812c83c2fb7dc58487e34e120df6"
  },
  {
    "url": "page-data/blog/16/06/2020/Jupyter_Widgets/page-data.json",
    "revision": "a574e4aa5bbc12cf63aa0e0f27f8c3e8"
  },
  {
    "url": "page-data/blog/16/07/2020/python_visualisation_templates/page-data.json",
    "revision": "d2b799c4566018efb59d85e6d45fbbf1"
  },
  {
    "url": "page-data/blog/18/08/2020/GM/page-data.json",
    "revision": "58a63d2b61bb013c0f34351254eb6513"
  },
  {
    "url": "page-data/blog/20/05/2020/Non_Numeric/page-data.json",
    "revision": "dbeb0ef85294a40276c8223b0ab37b64"
  },
  {
    "url": "page-data/blog/22/03/2020/contribute_blog_post/page-data.json",
    "revision": "c239b61887be6ae89d7d49fc20f79a57"
  },
  {
    "url": "page-data/blog/22/03/2020/datavizhub_guide/page-data.json",
    "revision": "5d496b31eb656c05af293d4f894ddd73"
  },
  {
    "url": "page-data/blog/24/06/2020/host_jupyter_notebook/page-data.json",
    "revision": "d537c8d386e32371b5f174319293e4e9"
  },
  {
    "url": "page-data/blog/26/08/2020/D3js_for_data_visualisation/page-data.json",
    "revision": "56f6aadf68727e1985628676d96cd4d8"
  },
  {
    "url": "page-data/blog/28/02/2020/Urban_Observatories_hackathon/page-data.json",
    "revision": "66f7352af43f290ed3f1c9a0a3959261"
  },
  {
    "url": "page-data/blog/category/articles/page-data.json",
    "revision": "369fd35fd2ab76edd9899cad1674a919"
  },
  {
    "url": "page-data/blog/category/articles/page/2/page-data.json",
    "revision": "b2782d1b9569789422311f8e1d10fb67"
  },
  {
    "url": "page-data/blog/category/events/page-data.json",
    "revision": "da6a5691c332d7a6d5080986147820f8"
  },
  {
    "url": "page-data/blog/category/tutorial/page-data.json",
    "revision": "8386e0fb758f2b9e07cd4a3d4c9b7a26"
  },
  {
    "url": "page-data/blog/category/tutorials/page-data.json",
    "revision": "e552c1e435d66e90d1c10cdc6b18286e"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "32d44ddd9e356420e186b2176bce38a6"
  },
  {
    "url": "page-data/blog/page/2/page-data.json",
    "revision": "769ab81b4ac210759687740252c68538"
  },
  {
    "url": "page-data/blog/tag/blog/page-data.json",
    "revision": "c1f8f67968d6234d77641fe0a4f46e5f"
  },
  {
    "url": "page-data/blog/tag/covid-19-mortality/page-data.json",
    "revision": "8b64c0ce283c34be16149ca661212c26"
  },
  {
    "url": "page-data/blog/tag/covid-19-virus-sars-co-v-2/page-data.json",
    "revision": "1d06a0074b4b35c965fbb54c90fe7200"
  },
  {
    "url": "page-data/blog/tag/d-3-js/page-data.json",
    "revision": "eaeececd7bd9c33a47d58bf507050d8e"
  },
  {
    "url": "page-data/blog/tag/dash/page-data.json",
    "revision": "30440b373604268a982477f6debde358"
  },
  {
    "url": "page-data/blog/tag/data-analytics/page-data.json",
    "revision": "c29820971d667f36ddda60cc7971fadf"
  },
  {
    "url": "page-data/blog/tag/data-engineering/page-data.json",
    "revision": "be0997afeac7390fd8f31d7633252cee"
  },
  {
    "url": "page-data/blog/tag/data-politics/page-data.json",
    "revision": "abdb21e764d71542643f53a704c8d9b6"
  },
  {
    "url": "page-data/blog/tag/dataviz/page-data.json",
    "revision": "fe5ce558e834376028c3dc03bf087ada"
  },
  {
    "url": "page-data/blog/tag/deploy/page-data.json",
    "revision": "2733ac4b05c45666e3b503c7f9789c0c"
  },
  {
    "url": "page-data/blog/tag/epidemiology/page-data.json",
    "revision": "40b8c02103307e2d175cfc1a5fbdc7fe"
  },
  {
    "url": "page-data/blog/tag/heroku/page-data.json",
    "revision": "dc097fa2e92fb8e309950af9a4aa403c"
  },
  {
    "url": "page-data/blog/tag/host/page-data.json",
    "revision": "42562082cb2e5ae424e022266b6ab53b"
  },
  {
    "url": "page-data/blog/tag/html/page-data.json",
    "revision": "82980589e4427e433bc486d95cd2c578"
  },
  {
    "url": "page-data/blog/tag/interactive/page-data.json",
    "revision": "7a976e89c69d64cec9917242131e0da3"
  },
  {
    "url": "page-data/blog/tag/javascript/page-data.json",
    "revision": "1e821c972e20d8688f31965448c5a2e0"
  },
  {
    "url": "page-data/blog/tag/jupyter-notebook/page-data.json",
    "revision": "38b128276d6d2382fbbb395c53039fd1"
  },
  {
    "url": "page-data/blog/tag/jupyter-widgets/page-data.json",
    "revision": "982ba6b98f8b09bf87d62df0bdccb13c"
  },
  {
    "url": "page-data/blog/tag/markdown/page-data.json",
    "revision": "1fee9fde52cb4d519babed01a4728d16"
  },
  {
    "url": "page-data/blog/tag/pandas/page-data.json",
    "revision": "5384f57250a450acd2aacf062632076b"
  },
  {
    "url": "page-data/blog/tag/pandemic/page-data.json",
    "revision": "4d67085fcd567cdfdb6f3e3d80af027a"
  },
  {
    "url": "page-data/blog/tag/plotly/page-data.json",
    "revision": "0179ac2c65dfbe111dd68465685d2c8d"
  },
  {
    "url": "page-data/blog/tag/python/page-data.json",
    "revision": "83fb72a545e2e787b792a12af25c1224"
  },
  {
    "url": "page-data/blog/tag/research-innovation/page-data.json",
    "revision": "c0de25f0cb070b42538a32fef32600b4"
  },
  {
    "url": "page-data/blog/tag/shiny/page-data.json",
    "revision": "fab6d85f0f9a1f45aa38f42f8a14f28b"
  },
  {
    "url": "page-data/blog/tag/statistics/page-data.json",
    "revision": "216106a83f3574a8b8dc6deb499c0127"
  },
  {
    "url": "page-data/blog/tag/template/page-data.json",
    "revision": "22f6df92ef3d2ae0d13c2c0420610890"
  },
  {
    "url": "page-data/blog/tag/urban-observatory/page-data.json",
    "revision": "9ce9cc9ea8a9109d187f72b38732411e"
  },
  {
    "url": "page-data/blog/tag/web/page-data.json",
    "revision": "9218682378943e6a3091d6330caf6707"
  },
  {
    "url": "page-data/community/page-data.json",
    "revision": "8c280a82c6b671ef71c90c89987c7ccd"
  },
  {
    "url": "page-data/events/page-data.json",
    "revision": "96d2fb0521c387269c862b9ab7b50f9d"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "487aedcd7b82dbaa6adaf84d00c78362"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "56801ac39d165648aff6b297cd482a6d"
  },
  {
    "url": "page-data/search/page-data.json",
    "revision": "ada6d6a8a1de7d6fe4d4940797f5d714"
  },
  {
    "url": "page-data/sq/d/1454382005.json",
    "revision": "61508b4377957ad362f9a4c07cc8a31d"
  },
  {
    "url": "page-data/sq/d/1792964189.json",
    "revision": "956b5a84a733011cef4ee50ccea02802"
  },
  {
    "url": "page-data/sq/d/2676937355.json",
    "revision": "c9e03f93202f057ac20046d008924377"
  },
  {
    "url": "page-data/sq/d/2772118594.json",
    "revision": "28421a86459411a1addef03952ef15b7"
  },
  {
    "url": "page-data/sq/d/2868699018.json",
    "revision": "978a55be8cf2b8f7289ea87ce1cabe28"
  },
  {
    "url": "page-data/sq/d/3370916995.json",
    "revision": "2b7aede90190094a5b757753f11d6209"
  },
  {
    "url": "page-data/sq/d/4157404630.json",
    "revision": "8b8d71427c3877e207827583513a154d"
  },
  {
    "url": "page-data/sq/d/501939828.json",
    "revision": "f31acaf328c912c170bb50db7e550a43"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "30b2a1e655f94558cde55b82507f4883"
  },
  {
    "url": "polyfill-83113f8a07a09662dfc5.js"
  },
  {
    "url": "polyfill-83113f8a07a09662dfc5.js.map",
    "revision": "b53f9cb4bdea666351da5c84de0c25eb"
  },
  {
    "url": "privacy/index.html",
    "revision": "75c6fb3b2271ef6669c6ff89d9750f54"
  },
  {
    "url": "search/index.html",
    "revision": "4756d79b9d19e4c281121baf5cfd6568"
  },
  {
    "url": "sitemap.xsl",
    "revision": "84eed71bbf820506ceb395ae16c91e89"
  },
  {
    "url": "static/02beed7ac46f390d93fba01e5ea4a1c1/21302/dataviz.jpg"
  },
  {
    "url": "static/02beed7ac46f390d93fba01e5ea4a1c1/801b3/dataviz.jpg"
  },
  {
    "url": "static/02beed7ac46f390d93fba01e5ea4a1c1/cd873/dataviz.jpg"
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
    "url": "static/1900c2032227e4775232aec94b867b8c/497c6/LetterIcon.png"
  },
  {
    "url": "static/1900c2032227e4775232aec94b867b8c/69585/LetterIcon.png"
  },
  {
    "url": "static/1900c2032227e4775232aec94b867b8c/dff58/LetterIcon.png"
  },
  {
    "url": "static/1900c2032227e4775232aec94b867b8c/ee604/LetterIcon.png"
  },
  {
    "url": "static/2ec5c103f287dc87d926d899bc31b225/833d8/rosie_h.jpg"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/497c6/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/5707d/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/69585/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/ce507/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/ee604/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/f3583/ShinyThumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/196bc/thumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/497c6/thumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/69585/thumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/ee604/thumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/f3583/thumb.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/108cb/Fig1.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/497c6/Fig1.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/69585/Fig1.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/ee604/Fig1.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/f3583/Fig1.png"
  },
  {
    "url": "static/48da9e4fe0f5ea7a532420147131e5e3/39fae/chair.jpg"
  },
  {
    "url": "static/48da9e4fe0f5ea7a532420147131e5e3/b1e91/chair.jpg"
  },
  {
    "url": "static/48da9e4fe0f5ea7a532420147131e5e3/ce222/chair.jpg"
  },
  {
    "url": "static/520f2ff84f05bad12a0e30618fa5e593/684c4/joe_h.jpg"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/017d7/GM_Thumb.png"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/497c6/GM_Thumb.png"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/69585/GM_Thumb.png"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/ee604/GM_Thumb.png"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/f3583/GM_Thumb.png"
  },
  {
    "url": "static/6f3ed93fe3e6ea21b26c15df4b34c525/09a85/Fig1.png"
  },
  {
    "url": "static/6f3ed93fe3e6ea21b26c15df4b34c525/497c6/Fig1.png"
  },
  {
    "url": "static/6f3ed93fe3e6ea21b26c15df4b34c525/69585/Fig1.png"
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
    "url": "static/7711a87621c0c4a65462df1b7fbfb241/684c4/angus_t.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/0e329/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/14b42/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/2244e/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/47498/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/d8255/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/f836f/bg.jpg"
  },
  {
    "url": "static/7e6512bc55228b80a2bfcbdff165add2/3ee52/Fig1.png"
  },
  {
    "url": "static/7e6512bc55228b80a2bfcbdff165add2/497c6/Fig1.png"
  },
  {
    "url": "static/7e6512bc55228b80a2bfcbdff165add2/69585/Fig1.png"
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
    "url": "static/a5274f179b0d1633e06b1b506a25dee7/10a00/bg1.png"
  },
  {
    "url": "static/a5274f179b0d1633e06b1b506a25dee7/497c6/bg1.png"
  },
  {
    "url": "static/a5274f179b0d1633e06b1b506a25dee7/5707d/bg1.png"
  },
  {
    "url": "static/a5274f179b0d1633e06b1b506a25dee7/69585/bg1.png"
  },
  {
    "url": "static/a5274f179b0d1633e06b1b506a25dee7/ee604/bg1.png"
  },
  {
    "url": "static/a5274f179b0d1633e06b1b506a25dee7/f3583/bg1.png"
  },
  {
    "url": "static/about-d1b3607045b93bc9f47f2edab8393a23.jpg"
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
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/0e329/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/14b42/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/2244e/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/47498/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/e731c/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/f836f/Dash1.jpg"
  },
  {
    "url": "static/bg-d2e315389be310ad1df988334939fa79.jpg"
  },
  {
    "url": "static/bg1-5fff908ab0abc7a6edf3a19225c0b9a5.jpg"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/497c6/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/5707d/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/69585/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/d98bf/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/ee604/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/f3583/thumb.png"
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
    "url": "static/c823d2bf145dd881fe77c9265116b3e8/104b3/no_image_4.png"
  },
  {
    "url": "static/c823d2bf145dd881fe77c9265116b3e8/88c65/no_image_4.png"
  },
  {
    "url": "static/c823d2bf145dd881fe77c9265116b3e8/ca599/no_image_4.png"
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
    "url": "static/d334c839a9c87e13e2901d5d6e7047df/2244e/jez_c.jpg"
  },
  {
    "url": "static/d334c839a9c87e13e2901d5d6e7047df/f836f/jez_c.jpg"
  },
  {
    "url": "static/earth-76d2f3fe9fe8b243615b08363c395d3d.jpg"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/4589b/thumb1.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/497c6/thumb1.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/69585/thumb1.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/ee604/thumb1.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/f3583/thumb1.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/497c6/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/5707d/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/69585/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/ee604/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/f3583/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/google-6f52b93ba7863140c2badef18ed17a97.png"
  },
  {
    "url": "static/its-bf42e10ede6fc9096548ea038be6d3ec.png"
  },
  {
    "url": "static/KaTeX_AMS-Regular-2dbe16b4f4662798159f8d62c8d2509d.ttf"
  },
  {
    "url": "static/KaTeX_AMS-Regular-38a68f7d18d292349a6e802a66136eae.woff2"
  },
  {
    "url": "static/KaTeX_AMS-Regular-7d307e8337b9559e4040c5fb76819789.woff"
  },
  {
    "url": "static/KaTeX_Caligraphic-Bold-33d26881e4dd89321525c43b993f136c.ttf"
  },
  {
    "url": "static/KaTeX_Caligraphic-Regular-5e7940b4ed250e98a512f520e39c867d.ttf"
  },
  {
    "url": "static/KaTeX_Fraktur-Bold-4de87d40f0389255d975c69d45a0a7e7.woff"
  },
  {
    "url": "static/KaTeX_Fraktur-Bold-7a3757c0bfc580d91012d092ec8f06cb.woff2"
  },
  {
    "url": "static/KaTeX_Fraktur-Bold-ed330126290a846bf0bb78f61aa6a080.ttf"
  },
  {
    "url": "static/KaTeX_Fraktur-Regular-450cc4d9319c4a438dd00514efac941b.woff2"
  },
  {
    "url": "static/KaTeX_Fraktur-Regular-82d05fe2abb0da9d1077110efada0f6e.ttf"
  },
  {
    "url": "static/KaTeX_Fraktur-Regular-dc4e330b6334767a16619c60d9ebce8c.woff"
  },
  {
    "url": "static/KaTeX_Main-Bold-2e1915b1a2f33c8ca9d1534193e934d7.ttf"
  },
  {
    "url": "static/KaTeX_Main-Bold-62c69756b3f1ca7b52fea2bea1030cd2.woff"
  },
  {
    "url": "static/KaTeX_Main-Bold-78b0124fc13059862cfbe4c95ff68583.woff2"
  },
  {
    "url": "static/KaTeX_Main-BoldItalic-0d817b487b7fc993bda7dddba745d497.ttf"
  },
  {
    "url": "static/KaTeX_Main-BoldItalic-a2e3dcd2316f5002ee2b5f35614849a8.woff"
  },
  {
    "url": "static/KaTeX_Main-BoldItalic-c7213ceb79250c2ca46cc34ff3b1aa49.woff2"
  },
  {
    "url": "static/KaTeX_Main-Italic-081073fd6a7c66073ad231db887de944.woff"
  },
  {
    "url": "static/KaTeX_Main-Italic-767e06e1df6abd16e092684bffa71c38.ttf"
  },
  {
    "url": "static/KaTeX_Main-Italic-eea32672f64250e9d1dfb68177c20a26.woff2"
  },
  {
    "url": "static/KaTeX_Main-Regular-689bbe6b67f22ffb51b15cc6cfa8facf.ttf"
  },
  {
    "url": "static/KaTeX_Main-Regular-756fad0d6f3dff1062cfa951751d744c.woff"
  },
  {
    "url": "static/KaTeX_Main-Regular-f30e3b213e9a74cf7563b0c3ee878436.woff2"
  },
  {
    "url": "static/KaTeX_Math-BoldItalic-753ca3dfa44302604bec8e08412ad1c1.woff2"
  },
  {
    "url": "static/KaTeX_Math-BoldItalic-b3e80ff3816595ffb07082257d30b24f.woff"
  },
  {
    "url": "static/KaTeX_Math-BoldItalic-d9377b53f267ef7669fbcce45a74d4c7.ttf"
  },
  {
    "url": "static/KaTeX_Math-Italic-0343f93ed09558b81aaca43fc4386462.ttf"
  },
  {
    "url": "static/KaTeX_Math-Italic-2a39f3827133ad0aeb2087d10411cbf2.woff2"
  },
  {
    "url": "static/KaTeX_Math-Italic-67710bb2357b8ee5c04d169dc440c69d.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Bold-59b3773389adfb2b21238892c08322ca.woff2"
  },
  {
    "url": "static/KaTeX_SansSerif-Bold-dfcc59ad994a0513b07ef3309b8b5159.ttf"
  },
  {
    "url": "static/KaTeX_SansSerif-Bold-f28c4fa28f596796702fea3716d82052.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Italic-3ab5188c9aadedf425ea63c6b6568df7.ttf"
  },
  {
    "url": "static/KaTeX_SansSerif-Italic-99ad93a4600c7b00b961d70943259032.woff2"
  },
  {
    "url": "static/KaTeX_SansSerif-Italic-9d0fdf5d7d27b0e3bdc740d90b40ec57.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Regular-6c3bd5b57f7eba215a2d37e2e28077f1.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Regular-badf3598c22478fd9155a49391ecd396.woff2"
  },
  {
    "url": "static/KaTeX_SansSerif-Regular-d511ebcef253ab53775576f28315f350.ttf"
  },
  {
    "url": "static/KaTeX_Script-Regular-082640ca4242bb2aade86855e4d7d5f6.ttf"
  },
  {
    "url": "static/KaTeX_Script-Regular-4edf4e0fd49c8a5680dd541c05f16a4c.woff"
  },
  {
    "url": "static/KaTeX_Script-Regular-af7bc98b2200573686405dc784f53cf2.woff2"
  },
  {
    "url": "static/KaTeX_Size1-Regular-2c2dc3b057bb48b80bc785ac3d87ecf8.ttf"
  },
  {
    "url": "static/KaTeX_Size2-Regular-114ad19833311359052ad1a174159262.ttf"
  },
  {
    "url": "static/KaTeX_Size4-Regular-70174da79d1707501c10e07872e84667.ttf"
  },
  {
    "url": "static/KaTeX_Typewriter-Regular-35fe2cce0791c276b8e919decd873f5b.ttf"
  },
  {
    "url": "static/KaTeX_Typewriter-Regular-53dcf861876aae6f3a6a6004dc3bc758.woff"
  },
  {
    "url": "static/KaTeX_Typewriter-Regular-641339e2cd86c7816bfb8028ee7f86e0.woff2"
  },
  {
    "url": "static/no_image_1-cbab1c85fd0b5df4703007ed018da08a.png"
  },
  {
    "url": "static/no_image_2-8588841d1e101e5cd1794737b8392414.png"
  },
  {
    "url": "static/no_image_3-5fff908ab0abc7a6edf3a19225c0b9a5.png"
  },
  {
    "url": "static/no_image_4-c823d2bf145dd881fe77c9265116b3e8.png"
  },
  {
    "url": "static/no_image_5-0b0b76e89033963a72b34200d192a851.png"
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
    "url": "static/user1-dc7c51f98d395f38d7b70e2962cb5329.png"
  },
  {
    "url": "styles-d34d6d50c68384cf0a65.js"
  },
  {
    "url": "styles-d34d6d50c68384cf0a65.js.map",
    "revision": "8236b01a896fb556d1c5d0d4488443d5"
  },
  {
    "url": "styles.e5554cc58b90cf41bd83.css"
  },
  {
    "url": "webpack-runtime-ad4f73f72058f7397a17.js"
  },
  {
    "url": "webpack-runtime-ad4f73f72058f7397a17.js.map",
    "revision": "616b2e89ef380c4e204ee7e55e175805"
  },
  {
    "url": "webpack.stats.json",
    "revision": "7f43b530840f16133691fb53511e11a2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

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
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-bb287f60984ca71be21d.js`))) {
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

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
