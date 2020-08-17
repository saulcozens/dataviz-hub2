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
    "url": "1bfc9850-7f1eb5558df2fb4cd361.js"
  },
  {
    "url": "1bfc9850-7f1eb5558df2fb4cd361.js.map",
    "revision": "9210a488a809c9eb75a4450d78df7561"
  },
  {
    "url": "252f366e-5224fb0241625906ae48.js"
  },
  {
    "url": "252f366e-5224fb0241625906ae48.js.map",
    "revision": "8ec889552cea6d453ccd2b23f9c33ea8"
  },
  {
    "url": "25fffed93c38f0fc849f23da47ea66ae/Deviation2.png",
    "revision": "25fffed93c38f0fc849f23da47ea66ae"
  },
  {
    "url": "32-e42a3cad8643512d781a.js"
  },
  {
    "url": "32-e42a3cad8643512d781a.js.map",
    "revision": "ce976b3db274366738b1a8c710471eae"
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
    "revision": "be15c75851f9597eeabdb62c27ae334d"
  },
  {
    "url": "404/index.html",
    "revision": "736bc192007eae5b0f167281908916f4"
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
    "url": "5e2a4920-164bd9274e87691be396.js"
  },
  {
    "url": "5e2a4920-164bd9274e87691be396.js.map",
    "revision": "42c77c775244e03a04cd36099673d65f"
  },
  {
    "url": "603e72ea82932164d1edff27806072a2/Relationship1.png",
    "revision": "603e72ea82932164d1edff27806072a2"
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
    "url": "78e521c3-d4d6d12c8b9388211229.js"
  },
  {
    "url": "78e521c3-d4d6d12c8b9388211229.js.map",
    "revision": "5de657e6d1145314108045e1154c48f6"
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
    "url": "8cde48887f50e3ccc99105b48fffcac23eee5e7d-d1f2087adf03db056f5c.js"
  },
  {
    "url": "8cde48887f50e3ccc99105b48fffcac23eee5e7d-d1f2087adf03db056f5c.js.map",
    "revision": "ef986899d26e2189ba4df67f957a3912"
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
    "url": "95b64a6e-3cad2718662dca0ef7ed.js"
  },
  {
    "url": "95b64a6e-3cad2718662dca0ef7ed.js.map",
    "revision": "171fb78fd559444e3c0c36baf27af2c4"
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
    "url": "a0f1a88da99c38bdb88ff0985519a90a/Fig2.png",
    "revision": "a0f1a88da99c38bdb88ff0985519a90a"
  },
  {
    "url": "a3632cb3fa18b04fe50a788dfd73d3afe878b2b6-22778534573afab662b6.js"
  },
  {
    "url": "a3632cb3fa18b04fe50a788dfd73d3afe878b2b6-22778534573afab662b6.js.map",
    "revision": "b96d7a50b9b9b40338d0afa8c46dfc7d"
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
    "revision": "4591c3ea9b7101ffe3e06abaacf3a8a3"
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
    "url": "app-545f94a958d7b0f5278c.js"
  },
  {
    "url": "app-545f94a958d7b0f5278c.js.map",
    "revision": "af59f06e276038ec49f8e3c854ec40c9"
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
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-edab7a3ffd5bebdd27a9.js"
  },
  {
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-edab7a3ffd5bebdd27a9.js.map",
    "revision": "f1f42419ba5283d42a0d395ddb17f773"
  },
  {
    "url": "b6f2fe82a2458ef1e089e6f3cdacff6a/Fig4.png",
    "revision": "b6f2fe82a2458ef1e089e6f3cdacff6a"
  },
  {
    "url": "b98bc7c3-8185f536c71a740ac33f.js"
  },
  {
    "url": "b98bc7c3-8185f536c71a740ac33f.js.map",
    "revision": "4f3d3fa27814266351bab2935cb7da34"
  },
  {
    "url": "bab4896a-4508fc1acff672ea5ed2.js"
  },
  {
    "url": "bab4896a-4508fc1acff672ea5ed2.js.map",
    "revision": "136e661a7e36203d1c593215a8c61988"
  },
  {
    "url": "blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality/index.html",
    "revision": "65101c3bad0f836d1c587e58eef7853c"
  },
  {
    "url": "blog/02/05/2020/dataviz_stats_1/index.html",
    "revision": "e031b5b2168e4dff70af8d2b932e74af"
  },
  {
    "url": "blog/03/07/2020/Deploy_Your_Dash_App/index.html",
    "revision": "7e31db707d9fa513246c2e4273a004f2"
  },
  {
    "url": "blog/03/07/2020/LearningPath_Concept/index.html",
    "revision": "a1bcff6a2e9f33131811a10f2985213c"
  },
  {
    "url": "blog/04/06/2020/dash_tutorial/index.html",
    "revision": "54cf7b0cd11557a31213dd3ed03ed497"
  },
  {
    "url": "blog/04/07/2020/LearningPath_Lab/index.html",
    "revision": "0d75b45e0f1eab0168f14ea1628c409c"
  },
  {
    "url": "blog/05/07/2020/LearningPath_Workflow/index.html",
    "revision": "a8fdc90682c9c2706c03cdde9e8dd054"
  },
  {
    "url": "blog/06/04/2020/chart_choice/index.html",
    "revision": "88e3de30427f5a1b73b7568ad010e46f"
  },
  {
    "url": "blog/06/05/2020/Colour_Schemes/index.html",
    "revision": "4ac55d4503272c979f8cf279f83e8165"
  },
  {
    "url": "blog/07/05/2020/dataviz_stats_2/index.html",
    "revision": "da0a235ab43a915a56610f5877a2d01d"
  },
  {
    "url": "blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/index.html",
    "revision": "4631a9189e2896198f8ddcfb5103f616"
  },
  {
    "url": "blog/12/06/2020/dash_tutorial_2/index.html",
    "revision": "10590120cb65b7f89d9b0874c541b860"
  },
  {
    "url": "blog/13/07/2020/Shiny_Template/index.html",
    "revision": "3ed9a7e0caf6940bf1bffab5f5ee44db"
  },
  {
    "url": "blog/16/06/2020/Jupyter_Widgets/index.html",
    "revision": "ddac20ce0958a09fef7fe4a70ff14468"
  },
  {
    "url": "blog/16/07/2020/python_visualisation_templates/index.html",
    "revision": "2853090fdfcb63537b69e8589eeeba72"
  },
  {
    "url": "blog/20/05/2020/Non_Numeric/index.html",
    "revision": "404f6352d6530e91fa5f9e0992c2f13a"
  },
  {
    "url": "blog/22/03/2020/contribute_blog_post/index.html",
    "revision": "03f362d25504cf8a04a662c8e85f79ab"
  },
  {
    "url": "blog/22/03/2020/datavizhub_guide/index.html",
    "revision": "8a68e6946a4009513103367dec0bfeba"
  },
  {
    "url": "blog/24/06/2020/host_jupyter_notebook/index.html",
    "revision": "034b68c2303f33ee876a1f6169aee794"
  },
  {
    "url": "blog/28/02/2020/Urban_Observatories_hackathon/index.html",
    "revision": "73c6aff96f6cb786bf6d7568b8703f63"
  },
  {
    "url": "blog/category/articles/index.html",
    "revision": "fbc8cc0e77148fd1ab93af2054f77289"
  },
  {
    "url": "blog/category/articles/page/2/index.html",
    "revision": "e8d805f4e6509c22377ea46dd03c8326"
  },
  {
    "url": "blog/category/events/index.html",
    "revision": "c6d3ef358a0584698552df9284827484"
  },
  {
    "url": "blog/category/tutorial/index.html",
    "revision": "d577ce8a49304a395368ee4beb7752a7"
  },
  {
    "url": "blog/category/tutorials/index.html",
    "revision": "97b84866d163c0236c2a35aec4559149"
  },
  {
    "url": "blog/index.html",
    "revision": "93f9b3a6ce720ee9d8ec46eea69432f8"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "1672ba3ee05a646009ecb68e08b49449"
  },
  {
    "url": "blog/tag/blog/index.html",
    "revision": "e5e1e3bcde98f532e13329636ba0066e"
  },
  {
    "url": "blog/tag/covid-19-mortality/index.html",
    "revision": "13ca1cb6b9250f9ca27e32e32af31817"
  },
  {
    "url": "blog/tag/covid-19-virus-sars-co-v-2/index.html",
    "revision": "7ddf9bc86ce2de62352814617a6d88e4"
  },
  {
    "url": "blog/tag/dash/index.html",
    "revision": "d9ab0fd23194c5f6abc2a59bedc2142a"
  },
  {
    "url": "blog/tag/data-analytics/index.html",
    "revision": "9fd7bcffac6b7b1c85929f01742b06fe"
  },
  {
    "url": "blog/tag/data-engineering/index.html",
    "revision": "9125c6a48a47b4cf5e831f2c35bdda70"
  },
  {
    "url": "blog/tag/data-politics/index.html",
    "revision": "6f5a502dae756c9687a54a00114b5752"
  },
  {
    "url": "blog/tag/dataviz/index.html",
    "revision": "395a7160702f515eb1984c81c85308a0"
  },
  {
    "url": "blog/tag/deploy/index.html",
    "revision": "f984d956efbb9627059258ccf6f1d3f7"
  },
  {
    "url": "blog/tag/epidemiology/index.html",
    "revision": "7dcccbda1406ddf004d3559a9e5020a5"
  },
  {
    "url": "blog/tag/heroku/index.html",
    "revision": "01916a50ac3e1145839990897e8e49d8"
  },
  {
    "url": "blog/tag/host/index.html",
    "revision": "2f774fdfca79e65f3ecb4e10b392a3f8"
  },
  {
    "url": "blog/tag/interactive/index.html",
    "revision": "1049c655482d9071c03913ec7398b380"
  },
  {
    "url": "blog/tag/jupyter-notebook/index.html",
    "revision": "e2731696db418eefbc981908efe15d2e"
  },
  {
    "url": "blog/tag/jupyter-widgets/index.html",
    "revision": "4f3eaf40c2970dfbdc8393b28bab9712"
  },
  {
    "url": "blog/tag/learning-path/index.html",
    "revision": "82220423b621b06553a69c0be2565ea2"
  },
  {
    "url": "blog/tag/markdown/index.html",
    "revision": "878a90ac79e3d55ca9c287824871b2e0"
  },
  {
    "url": "blog/tag/pandas/index.html",
    "revision": "3db7a81f91a044fa037dcdba5119fb0b"
  },
  {
    "url": "blog/tag/pandemic/index.html",
    "revision": "99872fa81300d4d71ba9b244b6b2659a"
  },
  {
    "url": "blog/tag/plotly/index.html",
    "revision": "14172e3f7da4f5617cc8300c3f5643b7"
  },
  {
    "url": "blog/tag/python/index.html",
    "revision": "ee333f4aec3e6746680a4922a3c5c9c4"
  },
  {
    "url": "blog/tag/research-innovation/index.html",
    "revision": "5c6b1a7031d81f5d70b79e5ccb0c6c36"
  },
  {
    "url": "blog/tag/shiny/index.html",
    "revision": "e5f14c124b4638923b10df6a26355ddc"
  },
  {
    "url": "blog/tag/statistics/index.html",
    "revision": "d21d06638a88b1f6c8c46030ee884d74"
  },
  {
    "url": "blog/tag/template/index.html",
    "revision": "e7159216c5bce60b5c30f283832fd95a"
  },
  {
    "url": "blog/tag/urban-observatory/index.html",
    "revision": "29d0fad33257524f49dd6bb36b6af389"
  },
  {
    "url": "blog/tag/web/index.html",
    "revision": "2c76d1dfc10d179a7bc0544a1e95f58a"
  },
  {
    "url": "cb0a7846a2477a4925125501cb38e5bb9f875859-d70026b4f143e8cc587c.js"
  },
  {
    "url": "cb0a7846a2477a4925125501cb38e5bb9f875859-d70026b4f143e8cc587c.js.map",
    "revision": "ff7b5fde05fa27a5d72f5673c83cb3ea"
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
    "revision": "b8e0252eb0a496451045416a62160747"
  },
  {
    "url": "community/index.html",
    "revision": "2f9750f36b5ded0164b9e9486e343e56"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-55af2c1bd4393d9b2605.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-55af2c1bd4393d9b2605.js.map",
    "revision": "58397c2c9f7c5a5cc69bd7ef558abc6b"
  },
  {
    "url": "component---src-pages-404-jsx-2cdedf5cccab72666132.js"
  },
  {
    "url": "component---src-pages-404-jsx-2cdedf5cccab72666132.js.map",
    "revision": "0b0f11994e2e9d2a4de3845d00dbe48c"
  },
  {
    "url": "component---src-pages-about-jsx-8e5e4991f7e96d007ca6.js"
  },
  {
    "url": "component---src-pages-about-jsx-8e5e4991f7e96d007ca6.js.map",
    "revision": "dd6e7317472b136cd24d8810d49d6d8f"
  },
  {
    "url": "component---src-pages-community-jsx-b636331ffaca3c96bd7d.js"
  },
  {
    "url": "component---src-pages-community-jsx-b636331ffaca3c96bd7d.js.map",
    "revision": "8bafa9906c85f4fa9d1c15d33450dae9"
  },
  {
    "url": "component---src-pages-events-jsx-a5c048b7da81d74deb9e.js"
  },
  {
    "url": "component---src-pages-events-jsx-a5c048b7da81d74deb9e.js.map",
    "revision": "3bb7193fff235d4569186e4675df3d15"
  },
  {
    "url": "component---src-pages-index-jsx-fa46e9caaf916f90d397.js"
  },
  {
    "url": "component---src-pages-index-jsx-fa46e9caaf916f90d397.js.map",
    "revision": "eea26caff354d8d60a37f29bb5e0214a"
  },
  {
    "url": "component---src-pages-privacy-jsx-65ea4fa1fcf5c68a3eb7.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-65ea4fa1fcf5c68a3eb7.js.map",
    "revision": "7588f4be101c0f604b5e41a1df032e71"
  },
  {
    "url": "component---src-pages-search-jsx-1b3ea8f81990262630e5.js"
  },
  {
    "url": "component---src-pages-search-jsx-1b3ea8f81990262630e5.js.map",
    "revision": "b61ea5f24e6a59ef570cf7e0fb8e6d1e"
  },
  {
    "url": "component---src-templates-blog-category-template-jsx-03e99de6fd1a903bcec7.js"
  },
  {
    "url": "component---src-templates-blog-category-template-jsx-03e99de6fd1a903bcec7.js.map",
    "revision": "0771d43c87c777e6154a3035ec810d09"
  },
  {
    "url": "component---src-templates-blog-post-template-custom-jsx-17d9acaee084545f2017.js"
  },
  {
    "url": "component---src-templates-blog-post-template-custom-jsx-17d9acaee084545f2017.js.map",
    "revision": "76dbe38d78efda00ad1ec5191f3e903c"
  },
  {
    "url": "component---src-templates-blog-post-template-jsx-dd415a16fa1f1db06b9f.js"
  },
  {
    "url": "component---src-templates-blog-post-template-jsx-dd415a16fa1f1db06b9f.js.map",
    "revision": "1ed59500d757f9929120978c1678099f"
  },
  {
    "url": "component---src-templates-blog-tag-template-jsx-4acda8e50d7ac7efaf0d.js"
  },
  {
    "url": "component---src-templates-blog-tag-template-jsx-4acda8e50d7ac7efaf0d.js.map",
    "revision": "8a607a0bec1a8bb14517c875b1eb1ef1"
  },
  {
    "url": "component---src-templates-blog-template-jsx-e279f372c2b0d9838300.js"
  },
  {
    "url": "component---src-templates-blog-template-jsx-e279f372c2b0d9838300.js.map",
    "revision": "1c16f80251dde35161934b9f00415106"
  },
  {
    "url": "d706d7115f6f55e0119134f15bc0178a/Fig6.png",
    "revision": "d706d7115f6f55e0119134f15bc0178a"
  },
  {
    "url": "d71dd128a1b9662d4f93d9735e5b35cbf15bcb51-195842e602d7702fe43f.js"
  },
  {
    "url": "d71dd128a1b9662d4f93d9735e5b35cbf15bcb51-195842e602d7702fe43f.js.map",
    "revision": "0084ce4f77be32d13dd520c3134d8b7e"
  },
  {
    "url": "dba3324f4142f375d19268a54c60e915/output_32_1.png",
    "revision": "dba3324f4142f375d19268a54c60e915"
  },
  {
    "url": "de71a805-f8eada05f3c421a32d55.js"
  },
  {
    "url": "de71a805-f8eada05f3c421a32d55.js.map",
    "revision": "764dd2f12605d286383a548911cea874"
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
    "url": "e678b8b4676ac9fa48670c696e16c887ac7f55c7-480a3f423f3955da2957.js"
  },
  {
    "url": "e678b8b4676ac9fa48670c696e16c887ac7f55c7-480a3f423f3955da2957.js.map",
    "revision": "377bb867df2859c1a2cfacd7464667b4"
  },
  {
    "url": "e79de403c487f46cc2c02dc4cad8fe76/BlogBreakdown.png",
    "revision": "e79de403c487f46cc2c02dc4cad8fe76"
  },
  {
    "url": "ec4fa0e42e6920e5b5e4f3fb8709e75c6bdd83fa-b3702859210bd8c365b3.js"
  },
  {
    "url": "ec4fa0e42e6920e5b5e4f3fb8709e75c6bdd83fa-b3702859210bd8c365b3.js.map",
    "revision": "e51a6ebfdbc700f607a63e6a0869829b"
  },
  {
    "url": "events/index.html",
    "revision": "beb95abbbe1e7cf6139952ec7293abba"
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
    "url": "fe653f1046d8c0022b0aaae8a6df8a75/index.mdx",
    "revision": "fe653f1046d8c0022b0aaae8a6df8a75"
  },
  {
    "url": "flexsearch_index.json",
    "revision": "e452508e818005db14bd00d829f4d40c"
  },
  {
    "url": "framework-b8f10c35144e3c9227f8.js"
  },
  {
    "url": "framework-b8f10c35144e3c9227f8.js.map",
    "revision": "6fee565a213d5350054524dfb80a4d8f"
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
    "revision": "bdc4310b61d5d21ce43327ed75741d9f"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f7a7cdaf89c655be0f52f1803dd3c1c9"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ba5c4fe647da9c3e2ad9744225846e72"
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
    "revision": "d6c6a3a1b4ff32bbdb6788a2d4bf1d4d"
  },
  {
    "url": "page-data/blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality/page-data.json",
    "revision": "ea26b1386d232af93cb58b831fd0f76f"
  },
  {
    "url": "page-data/blog/02/05/2020/dataviz_stats_1/page-data.json",
    "revision": "bbfab051c37d645c889d6ea7913b05ad"
  },
  {
    "url": "page-data/blog/03/07/2020/Deploy_Your_Dash_App/page-data.json",
    "revision": "1c13bda0b72b9da31f28e147f74ebeaf"
  },
  {
    "url": "page-data/blog/03/07/2020/LearningPath_Concept/page-data.json",
    "revision": "3a6e12e19c0ca61755016c7d571b482d"
  },
  {
    "url": "page-data/blog/04/06/2020/dash_tutorial/page-data.json",
    "revision": "6c9805bef329bf7c82717d1cca31296c"
  },
  {
    "url": "page-data/blog/04/07/2020/LearningPath_Lab/page-data.json",
    "revision": "cc6b1631bf5ec1f6bb047e5f97fff9ec"
  },
  {
    "url": "page-data/blog/05/07/2020/LearningPath_Workflow/page-data.json",
    "revision": "433b6f250583a715e6f8015db0607a3b"
  },
  {
    "url": "page-data/blog/06/04/2020/chart_choice/page-data.json",
    "revision": "857a57bc4cea5b538ff1a508d0877885"
  },
  {
    "url": "page-data/blog/06/05/2020/Colour_Schemes/page-data.json",
    "revision": "1cdb4d8397f288688591768a9d90520f"
  },
  {
    "url": "page-data/blog/07/05/2020/dataviz_stats_2/page-data.json",
    "revision": "c17628d05c412fcd93fb74021481460a"
  },
  {
    "url": "page-data/blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/page-data.json",
    "revision": "a16283079080bd1502a109addcfa5a44"
  },
  {
    "url": "page-data/blog/12/06/2020/dash_tutorial_2/page-data.json",
    "revision": "17deac44ba1dfbc07b8b81aad0a04b22"
  },
  {
    "url": "page-data/blog/13/07/2020/Shiny_Template/page-data.json",
    "revision": "f049338e9e99a0cf0f96cedb05d30ec8"
  },
  {
    "url": "page-data/blog/16/06/2020/Jupyter_Widgets/page-data.json",
    "revision": "6176de7a13d2b7311c02e10ed0f4adb1"
  },
  {
    "url": "page-data/blog/16/07/2020/python_visualisation_templates/page-data.json",
    "revision": "1e6d72f243df2e06edcb49d3b180d3ce"
  },
  {
    "url": "page-data/blog/20/05/2020/Non_Numeric/page-data.json",
    "revision": "adabb5c449dd57554fd724b388a7bbab"
  },
  {
    "url": "page-data/blog/22/03/2020/contribute_blog_post/page-data.json",
    "revision": "f772dcaab0c22c06d52b87e49edf3dec"
  },
  {
    "url": "page-data/blog/22/03/2020/datavizhub_guide/page-data.json",
    "revision": "f2da18f28d4df300418a176c048d1d3e"
  },
  {
    "url": "page-data/blog/24/06/2020/host_jupyter_notebook/page-data.json",
    "revision": "a5c7b9b02955243a07fe8978a2a25898"
  },
  {
    "url": "page-data/blog/28/02/2020/Urban_Observatories_hackathon/page-data.json",
    "revision": "781ffdc02bba1cf615ebaa72309e5683"
  },
  {
    "url": "page-data/blog/category/articles/page-data.json",
    "revision": "88664b515a339ecd08c7e40b7b72ee36"
  },
  {
    "url": "page-data/blog/category/articles/page/2/page-data.json",
    "revision": "a79832afce873b51bd69be47eedd32ed"
  },
  {
    "url": "page-data/blog/category/events/page-data.json",
    "revision": "e6135b38b0424e1e25ed93436ee35004"
  },
  {
    "url": "page-data/blog/category/tutorial/page-data.json",
    "revision": "8d8bfc38add6dd16eae104234e4c1010"
  },
  {
    "url": "page-data/blog/category/tutorials/page-data.json",
    "revision": "bae38b00e2b638b85798dc4cd09eed3a"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "20f8be24b8f93e2f98a2b2876d4f70f7"
  },
  {
    "url": "page-data/blog/page/2/page-data.json",
    "revision": "809fbeff313da932fe4f34572d87d9fd"
  },
  {
    "url": "page-data/blog/tag/blog/page-data.json",
    "revision": "c6ad4360a77bdaae42efe0e00521bd8a"
  },
  {
    "url": "page-data/blog/tag/covid-19-mortality/page-data.json",
    "revision": "5d35fdcb07b4751a840f6dcd4c87cfe5"
  },
  {
    "url": "page-data/blog/tag/covid-19-virus-sars-co-v-2/page-data.json",
    "revision": "325809dceaa53925449e92878531c169"
  },
  {
    "url": "page-data/blog/tag/dash/page-data.json",
    "revision": "f9b09f70f62cb704721805d1505efbac"
  },
  {
    "url": "page-data/blog/tag/data-analytics/page-data.json",
    "revision": "3e80bef73fc27d02485f54b8425f376e"
  },
  {
    "url": "page-data/blog/tag/data-engineering/page-data.json",
    "revision": "792d70b658e85fe6ed2018c61d2c6c5d"
  },
  {
    "url": "page-data/blog/tag/data-politics/page-data.json",
    "revision": "2324b204d6b4fa6fa2ccf18b98b8f0d9"
  },
  {
    "url": "page-data/blog/tag/dataviz/page-data.json",
    "revision": "e6b439ec54b3b74a52fca31b315237da"
  },
  {
    "url": "page-data/blog/tag/deploy/page-data.json",
    "revision": "1ddff7bf7e43c8410bb0335387a76708"
  },
  {
    "url": "page-data/blog/tag/epidemiology/page-data.json",
    "revision": "9d4574b5a1405d6c918d937a2a529120"
  },
  {
    "url": "page-data/blog/tag/heroku/page-data.json",
    "revision": "234a0ac7f881c3dc7263524575f61fb5"
  },
  {
    "url": "page-data/blog/tag/host/page-data.json",
    "revision": "b65aedb467a9a68ecce74e2e7bab31bf"
  },
  {
    "url": "page-data/blog/tag/interactive/page-data.json",
    "revision": "6c092baec2401693021ed56c502221d0"
  },
  {
    "url": "page-data/blog/tag/jupyter-notebook/page-data.json",
    "revision": "e9a0cdd4210de155edce2e9bf702a50f"
  },
  {
    "url": "page-data/blog/tag/jupyter-widgets/page-data.json",
    "revision": "95bca8945eb544f81db5967786d47f40"
  },
  {
    "url": "page-data/blog/tag/learning-path/page-data.json",
    "revision": "8b558edf65648ad55d5408919e6e1e9b"
  },
  {
    "url": "page-data/blog/tag/markdown/page-data.json",
    "revision": "d5cf8f94115a10001a927db32079e882"
  },
  {
    "url": "page-data/blog/tag/pandas/page-data.json",
    "revision": "d45f8e6f52ddce3de5f8ed2613ad8f9a"
  },
  {
    "url": "page-data/blog/tag/pandemic/page-data.json",
    "revision": "b8cd1681faf4507b70c5da1ac4fec099"
  },
  {
    "url": "page-data/blog/tag/plotly/page-data.json",
    "revision": "7639f07e18332dc37fb0efc74a27379b"
  },
  {
    "url": "page-data/blog/tag/python/page-data.json",
    "revision": "0c382453bb9f9b8c6997171514f91f50"
  },
  {
    "url": "page-data/blog/tag/research-innovation/page-data.json",
    "revision": "627ff672778351de50fd9b34026fd06e"
  },
  {
    "url": "page-data/blog/tag/shiny/page-data.json",
    "revision": "279c261155a363c013b1047df8c2fe41"
  },
  {
    "url": "page-data/blog/tag/statistics/page-data.json",
    "revision": "0d3f39549adb6dc4c02f43ced1b5ee93"
  },
  {
    "url": "page-data/blog/tag/template/page-data.json",
    "revision": "b39dd411c6353c52c6d45e59857caa19"
  },
  {
    "url": "page-data/blog/tag/urban-observatory/page-data.json",
    "revision": "b85c4285780f4b3e5b05075873ed1f3b"
  },
  {
    "url": "page-data/blog/tag/web/page-data.json",
    "revision": "1a6b5dad966c8a7d4be5c049b2faad7f"
  },
  {
    "url": "page-data/community/page-data.json",
    "revision": "e0d15d2a7bd1ba0d7301c5f33152a0ca"
  },
  {
    "url": "page-data/events/page-data.json",
    "revision": "3e2fcecb57a3af7e8b52cebeda659ee1"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "5e2c20a279398266f05e1ab69bb66760"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "eae471a1094fdde25dd3bbfcedea23af"
  },
  {
    "url": "page-data/search/page-data.json",
    "revision": "7ea7c58ab21e889294068afe87aca2b6"
  },
  {
    "url": "privacy/index.html",
    "revision": "da09a32192ec2bac2bc19d78acec1b4e"
  },
  {
    "url": "search/index.html",
    "revision": "e4b77a74d17f9fd4a604a11a07586091"
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
    "url": "static/d/1404961848.json"
  },
  {
    "url": "static/d/2417117884.json"
  },
  {
    "url": "static/d/2538406912.json"
  },
  {
    "url": "static/d/2620169608.json"
  },
  {
    "url": "static/d/3155470302.json"
  },
  {
    "url": "static/d/3576563811.json"
  },
  {
    "url": "static/d/3904747727.json"
  },
  {
    "url": "static/d/738643199.json"
  },
  {
    "url": "static/d/854775064.json"
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
    "url": "styles-ae6d046c35c187471a06.js"
  },
  {
    "url": "styles-ae6d046c35c187471a06.js.map",
    "revision": "f7bede00500e57b4fff89713756c0bd9"
  },
  {
    "url": "styles.3f657f6d60dff4644400.css"
  },
  {
    "url": "webpack-runtime-cb1b61af221183ecca41.js"
  },
  {
    "url": "webpack-runtime-cb1b61af221183ecca41.js.map",
    "revision": "d4feb8f71960fd607e52cccedd1f5059"
  },
  {
    "url": "webpack.stats.json",
    "revision": "241fd0eb8d6a4badefaa7a5f0faa7736"
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
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-545f94a958d7b0f5278c.js`))) {
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
