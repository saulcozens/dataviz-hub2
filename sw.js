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
    "revision": "3563b1824289c46badde4e85d280aa2b"
  },
  {
    "url": "404/index.html",
    "revision": "18793a9308b3b0c5525ecdc234934b09"
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
    "url": "78e521c3-af13212a31af8617153e.js"
  },
  {
    "url": "78e521c3-af13212a31af8617153e.js.map",
    "revision": "343a592e2034551e6441d27234a039ac"
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
    "url": "8cde48887f50e3ccc99105b48fffcac23eee5e7d-6b1814d6630319d10369.js"
  },
  {
    "url": "8cde48887f50e3ccc99105b48fffcac23eee5e7d-6b1814d6630319d10369.js.map",
    "revision": "884e9a3c2680ad385849571bda92a65e"
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
    "url": "9d39dad6821a410ef10e99ccf9b6f625619b2449-d8fec18643fa4daf1c13.js"
  },
  {
    "url": "9d39dad6821a410ef10e99ccf9b6f625619b2449-d8fec18643fa4daf1c13.js.map",
    "revision": "fc180a01646fd289b794c04520d32a89"
  },
  {
    "url": "9de23731cb7d05aaec54f7a9904378e8/index.mdx",
    "revision": "9de23731cb7d05aaec54f7a9904378e8"
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
    "revision": "46d5038d129d79d9d59009f244b302d4"
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
    "url": "app-64ca790427627b07c6ed.js"
  },
  {
    "url": "app-64ca790427627b07c6ed.js.map",
    "revision": "7d035b98cb4e53e8b7ddd72f42a67df9"
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
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-f2cd376119ca69b64727.js"
  },
  {
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-f2cd376119ca69b64727.js.map",
    "revision": "1c1a3ba3d3a2bbfd7195797f8fb7072b"
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
    "revision": "239d2ba92316a2c764d3a3fc03aab741"
  },
  {
    "url": "blog/02/05/2020/dataviz_stats_1/index.html",
    "revision": "94d138144054fa2adfca4da307ee965e"
  },
  {
    "url": "blog/03/07/2020/Deploy_Your_Dash_App/index.html",
    "revision": "d6a0b31e7dee15918cb2f7dd5e1c1858"
  },
  {
    "url": "blog/03/07/2020/LearningPath_Concept/index.html",
    "revision": "0bc199d799ed929162ea1374ebc0ea7e"
  },
  {
    "url": "blog/04/06/2020/dash_tutorial/index.html",
    "revision": "fc619a28ffd8104cb8d2ee5a0cf35c48"
  },
  {
    "url": "blog/04/07/2020/LearningPath_Lab/index.html",
    "revision": "9f21c3ae73bdfc011ae1e3f3122c3782"
  },
  {
    "url": "blog/05/07/2020/LearningPath_Workflow/index.html",
    "revision": "979ee49755494fcac88f045175a9cf3d"
  },
  {
    "url": "blog/06/04/2020/chart_choice/index.html",
    "revision": "33679316864309fa32bd8ad1268713ab"
  },
  {
    "url": "blog/06/05/2020/Colour_Schemes/index.html",
    "revision": "eaa36595a0bec4173134d28904d9d44b"
  },
  {
    "url": "blog/07/05/2020/dataviz_stats_2/index.html",
    "revision": "26e1a118d7ce8627a7558dcb04ce4ee8"
  },
  {
    "url": "blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/index.html",
    "revision": "fbe3c4817082b0dded5614a3d559ce3a"
  },
  {
    "url": "blog/12/06/2020/dash_tutorial_2/index.html",
    "revision": "7c78205837e78ef879cb3d7e30c046be"
  },
  {
    "url": "blog/13/07/2020/Shiny_Template/index.html",
    "revision": "b04430bfcc7974bf227672562dd99af0"
  },
  {
    "url": "blog/16/06/2020/Jupyter_Widgets/index.html",
    "revision": "f07220a289a468f396267df0abab8787"
  },
  {
    "url": "blog/16/07/2020/python_visualisation_templates/index.html",
    "revision": "b78f4b7f4b0f9cb05cf78d9dd77b54a4"
  },
  {
    "url": "blog/18/08/2020/GM/index.html",
    "revision": "48621adb41478075fe6e0a59a52990ef"
  },
  {
    "url": "blog/20/05/2020/Non_Numeric/index.html",
    "revision": "732711c260e38f14916384ffdf4c9ee6"
  },
  {
    "url": "blog/22/03/2020/contribute_blog_post/index.html",
    "revision": "2969710f94b7393e1a7465fef15fe178"
  },
  {
    "url": "blog/22/03/2020/datavizhub_guide/index.html",
    "revision": "a208c97d0134b918d39fa3f2eaffc71a"
  },
  {
    "url": "blog/24/06/2020/host_jupyter_notebook/index.html",
    "revision": "e6c43f4f43f96db3dc823278bd441b6b"
  },
  {
    "url": "blog/28/02/2020/Urban_Observatories_hackathon/index.html",
    "revision": "a5394f67a4983f62345ab890910b9482"
  },
  {
    "url": "blog/category/articles/index.html",
    "revision": "1232900a98ac1a0a6a7cfe6656fa3e14"
  },
  {
    "url": "blog/category/articles/page/2/index.html",
    "revision": "1a73b41007c57ef40a56db9a3d419dfb"
  },
  {
    "url": "blog/category/events/index.html",
    "revision": "9ec744dcfcfc6de593c67c2a14ba5e98"
  },
  {
    "url": "blog/category/tutorial/index.html",
    "revision": "4304b94559ba20e8f9e14f84a6659121"
  },
  {
    "url": "blog/category/tutorials/index.html",
    "revision": "c45bbac18e637f6f9b3f9fb208e8b61a"
  },
  {
    "url": "blog/index.html",
    "revision": "d42e8abe03b8aae75cd69c6dd7ae8613"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "16b4383a15fc3362c7f413980c717f50"
  },
  {
    "url": "blog/tag/blog/index.html",
    "revision": "c9288a660148e65af7e42b838e9eade5"
  },
  {
    "url": "blog/tag/covid-19-mortality/index.html",
    "revision": "96b15883412e439b7a4b7cec67f46030"
  },
  {
    "url": "blog/tag/covid-19-virus-sars-co-v-2/index.html",
    "revision": "17a05158d83ba064fbda37c2b3c0bd90"
  },
  {
    "url": "blog/tag/dash/index.html",
    "revision": "92b76fecdf8026e5e013641e2397382b"
  },
  {
    "url": "blog/tag/data-analytics/index.html",
    "revision": "a8533a641df0de94024d3bb2ee23740d"
  },
  {
    "url": "blog/tag/data-engineering/index.html",
    "revision": "d6c3aeb7154708497707b9ec4bf220b6"
  },
  {
    "url": "blog/tag/data-politics/index.html",
    "revision": "e019f79403c4db552ea1b385b8c007b4"
  },
  {
    "url": "blog/tag/dataviz/index.html",
    "revision": "60e96271afd2e24f5d956c7bbb32bfd2"
  },
  {
    "url": "blog/tag/deploy/index.html",
    "revision": "5519383d3ecac60cf462ad6431f57634"
  },
  {
    "url": "blog/tag/epidemiology/index.html",
    "revision": "de9ec7b9005b2bee2e1bb924052a989b"
  },
  {
    "url": "blog/tag/heroku/index.html",
    "revision": "c331936b42cac5af08db6bb185b6b6a8"
  },
  {
    "url": "blog/tag/host/index.html",
    "revision": "8d134382ebb96f657a8ef42cd1cf4137"
  },
  {
    "url": "blog/tag/interactive/index.html",
    "revision": "3b5ede068fe929b4ab7720929ff6ff1b"
  },
  {
    "url": "blog/tag/jupyter-notebook/index.html",
    "revision": "315bcd6102369deaea4cd6e69124f9ab"
  },
  {
    "url": "blog/tag/jupyter-widgets/index.html",
    "revision": "92408ab3a7795a0a7589ff754028f646"
  },
  {
    "url": "blog/tag/markdown/index.html",
    "revision": "af6cc61ab013d178c2cb380907168774"
  },
  {
    "url": "blog/tag/pandas/index.html",
    "revision": "240750abc5d478c2ead15eb6ad91c9d2"
  },
  {
    "url": "blog/tag/pandemic/index.html",
    "revision": "010e2a8630aaa0db5e959bb8acf2f058"
  },
  {
    "url": "blog/tag/plotly/index.html",
    "revision": "2bec77b8b8b23f6c8df7109ddde830b5"
  },
  {
    "url": "blog/tag/python/index.html",
    "revision": "920c7384f54b0950873ea130f3f2b3fd"
  },
  {
    "url": "blog/tag/research-innovation/index.html",
    "revision": "fe49bd87bcacb0e764765496d1ce6517"
  },
  {
    "url": "blog/tag/shiny/index.html",
    "revision": "508cbb0095ecbab3444d1fecd14ca442"
  },
  {
    "url": "blog/tag/statistics/index.html",
    "revision": "254743cd7a42dba33c87ec8c295fc484"
  },
  {
    "url": "blog/tag/template/index.html",
    "revision": "fb2fc8341614107b79bb101028e18f7b"
  },
  {
    "url": "blog/tag/urban-observatory/index.html",
    "revision": "40b9ed39b6fbffb061752144a3996259"
  },
  {
    "url": "blog/tag/web/index.html",
    "revision": "15c7f74bd8e72ca3eaf3449816656c69"
  },
  {
    "url": "cb0a7846a2477a4925125501cb38e5bb9f875859-e8f02416bc7e51b4ee9a.js"
  },
  {
    "url": "cb0a7846a2477a4925125501cb38e5bb9f875859-e8f02416bc7e51b4ee9a.js.map",
    "revision": "544a83689b133ed7c3f06a89dfbd0aad"
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
    "revision": "c839064783181bf75dc06fb1475dafc8"
  },
  {
    "url": "community/index.html",
    "revision": "02f1096799df2785c15f894a6cbeb2db"
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
    "url": "component---src-pages-community-jsx-6aa189e88262531b99a8.js"
  },
  {
    "url": "component---src-pages-community-jsx-6aa189e88262531b99a8.js.map",
    "revision": "03595f1db22082ec53b34071381f2736"
  },
  {
    "url": "component---src-pages-events-jsx-2c07b1fe4b149d6bdc70.js"
  },
  {
    "url": "component---src-pages-events-jsx-2c07b1fe4b149d6bdc70.js.map",
    "revision": "614f45a575fe4c37d45c7571bcb13cbe"
  },
  {
    "url": "component---src-pages-index-jsx-e6fd2324082fd335674f.js"
  },
  {
    "url": "component---src-pages-index-jsx-e6fd2324082fd335674f.js.map",
    "revision": "afe686e5bb360fe3f7a4272ba29ba44c"
  },
  {
    "url": "component---src-pages-privacy-jsx-65ea4fa1fcf5c68a3eb7.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-65ea4fa1fcf5c68a3eb7.js.map",
    "revision": "7588f4be101c0f604b5e41a1df032e71"
  },
  {
    "url": "component---src-pages-search-jsx-bf37bc9f3662920d5e7a.js"
  },
  {
    "url": "component---src-pages-search-jsx-bf37bc9f3662920d5e7a.js.map",
    "revision": "4e386190a26e019dadff071fa86f4174"
  },
  {
    "url": "component---src-templates-blog-category-template-jsx-e066ea90733bff5ce967.js"
  },
  {
    "url": "component---src-templates-blog-category-template-jsx-e066ea90733bff5ce967.js.map",
    "revision": "146cf015edfbb2c7bd5231e543e28ae9"
  },
  {
    "url": "component---src-templates-blog-post-template-custom-jsx-05ab485b8f9e9b75e26f.js"
  },
  {
    "url": "component---src-templates-blog-post-template-custom-jsx-05ab485b8f9e9b75e26f.js.map",
    "revision": "0589eaf09cba7a32845b1fb8943f506e"
  },
  {
    "url": "component---src-templates-blog-post-template-jsx-22a9495981d7aa8eb3c4.js"
  },
  {
    "url": "component---src-templates-blog-post-template-jsx-22a9495981d7aa8eb3c4.js.map",
    "revision": "449bd3c4bc94eb5ab8173c6858edd319"
  },
  {
    "url": "component---src-templates-blog-tag-template-jsx-cbc4c58627befe712f32.js"
  },
  {
    "url": "component---src-templates-blog-tag-template-jsx-cbc4c58627befe712f32.js.map",
    "revision": "b7b1bb93d1ff04443ea83ee448afe5e3"
  },
  {
    "url": "component---src-templates-blog-template-jsx-1cda3a0da75c9d554dac.js"
  },
  {
    "url": "component---src-templates-blog-template-jsx-1cda3a0da75c9d554dac.js.map",
    "revision": "3e4d631996ba59c75336e27f2110da8a"
  },
  {
    "url": "d3/dataviz.js"
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
    "url": "events/index.html",
    "revision": "387536650e13ef2244ae8487e3a6bc24"
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
    "revision": "3a101e333654ab583ea013fa2b1fbcff"
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
    "revision": "f2956f1f969979723522b91cd2345f30"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f7a7cdaf89c655be0f52f1803dd3c1c9"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "21f7dad8673ea867e39cd6338d11478d"
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
    "revision": "c4e29e979b861ddc7acff0e85ec90018"
  },
  {
    "url": "page-data/blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality/page-data.json",
    "revision": "b2dddcc59fde245929ad02ff9f6e2a90"
  },
  {
    "url": "page-data/blog/02/05/2020/dataviz_stats_1/page-data.json",
    "revision": "063d97864d7c6d180d87bfb7357aed4b"
  },
  {
    "url": "page-data/blog/03/07/2020/Deploy_Your_Dash_App/page-data.json",
    "revision": "0edfa1092bf7c61e401d390a1375561c"
  },
  {
    "url": "page-data/blog/03/07/2020/LearningPath_Concept/page-data.json",
    "revision": "9c3f8e91df58162a84c409d8b2896133"
  },
  {
    "url": "page-data/blog/04/06/2020/dash_tutorial/page-data.json",
    "revision": "72ea381e1eaf795ffbfe7e14bcd25cfa"
  },
  {
    "url": "page-data/blog/04/07/2020/LearningPath_Lab/page-data.json",
    "revision": "8f394daf373d6cf88156c4fadc6ac1a7"
  },
  {
    "url": "page-data/blog/05/07/2020/LearningPath_Workflow/page-data.json",
    "revision": "c282deb073fd1858f55dcd160594a266"
  },
  {
    "url": "page-data/blog/06/04/2020/chart_choice/page-data.json",
    "revision": "e320803f460831ac98963cc1597bba50"
  },
  {
    "url": "page-data/blog/06/05/2020/Colour_Schemes/page-data.json",
    "revision": "09775cd20f83668497c77db847b34818"
  },
  {
    "url": "page-data/blog/07/05/2020/dataviz_stats_2/page-data.json",
    "revision": "9de648a276569531a2928bde79f9fe01"
  },
  {
    "url": "page-data/blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/page-data.json",
    "revision": "8280be0d6e2ddb1fd33e212789ac1603"
  },
  {
    "url": "page-data/blog/12/06/2020/dash_tutorial_2/page-data.json",
    "revision": "096c7fb7681776431d8cce481420f64d"
  },
  {
    "url": "page-data/blog/13/07/2020/Shiny_Template/page-data.json",
    "revision": "78eeb40e01201edc638b920465d8b516"
  },
  {
    "url": "page-data/blog/16/06/2020/Jupyter_Widgets/page-data.json",
    "revision": "70322282b174e468411adf354cf639ab"
  },
  {
    "url": "page-data/blog/16/07/2020/python_visualisation_templates/page-data.json",
    "revision": "975d789191f040fb57c537d6415a5ed1"
  },
  {
    "url": "page-data/blog/18/08/2020/GM/page-data.json",
    "revision": "1227873385d7f885bbbfc18e87b17c75"
  },
  {
    "url": "page-data/blog/20/05/2020/Non_Numeric/page-data.json",
    "revision": "cca6656fecae3307e959564eb5ae72de"
  },
  {
    "url": "page-data/blog/22/03/2020/contribute_blog_post/page-data.json",
    "revision": "5fe44a9d36ba83bdd41cbcbdd820b467"
  },
  {
    "url": "page-data/blog/22/03/2020/datavizhub_guide/page-data.json",
    "revision": "5a5dd976c0591db7e841f52c3d26a73d"
  },
  {
    "url": "page-data/blog/24/06/2020/host_jupyter_notebook/page-data.json",
    "revision": "f8e6797dc3336fe76bf4f5bfb9f8d6c6"
  },
  {
    "url": "page-data/blog/28/02/2020/Urban_Observatories_hackathon/page-data.json",
    "revision": "9d62db9b851d1cbb533bd87dc3dd74ad"
  },
  {
    "url": "page-data/blog/category/articles/page-data.json",
    "revision": "cf4b85c4498aaf710dfc1016934365d2"
  },
  {
    "url": "page-data/blog/category/articles/page/2/page-data.json",
    "revision": "01d7c31d4f760fcfb0d6c5247f6b81fe"
  },
  {
    "url": "page-data/blog/category/events/page-data.json",
    "revision": "1636653eed6297332ac212bdf24cc323"
  },
  {
    "url": "page-data/blog/category/tutorial/page-data.json",
    "revision": "cb81154deaad741aa7b01e4f0aafef79"
  },
  {
    "url": "page-data/blog/category/tutorials/page-data.json",
    "revision": "625eda13a7a1f6e94b849cd60f0a4aa2"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "25201d0708d535a2b39f79db95f48049"
  },
  {
    "url": "page-data/blog/page/2/page-data.json",
    "revision": "4c0535e98af333a88cb53a02069268a8"
  },
  {
    "url": "page-data/blog/tag/blog/page-data.json",
    "revision": "3209ddeed929b12655e09c9a9fd6dc61"
  },
  {
    "url": "page-data/blog/tag/covid-19-mortality/page-data.json",
    "revision": "7c9ddf831bf04cb0d6cd92ab92a4ef24"
  },
  {
    "url": "page-data/blog/tag/covid-19-virus-sars-co-v-2/page-data.json",
    "revision": "4baf2c0fae8b146da5439501bf88ede2"
  },
  {
    "url": "page-data/blog/tag/dash/page-data.json",
    "revision": "1af1568faa7baa79174a7e47eae87666"
  },
  {
    "url": "page-data/blog/tag/data-analytics/page-data.json",
    "revision": "bc8c46d6f948fab2c20ffac7e2b82581"
  },
  {
    "url": "page-data/blog/tag/data-engineering/page-data.json",
    "revision": "f9e533c2d9351d487173b67a21a8c092"
  },
  {
    "url": "page-data/blog/tag/data-politics/page-data.json",
    "revision": "73f850124e9d935cc722a7bc0d42e365"
  },
  {
    "url": "page-data/blog/tag/dataviz/page-data.json",
    "revision": "e035c2284bef3e0299d0fd83e31bdc81"
  },
  {
    "url": "page-data/blog/tag/deploy/page-data.json",
    "revision": "3de1b6725f3fa05a60a40aa8fff08553"
  },
  {
    "url": "page-data/blog/tag/epidemiology/page-data.json",
    "revision": "4d2937cc9f06839880295a92c4cf00cd"
  },
  {
    "url": "page-data/blog/tag/heroku/page-data.json",
    "revision": "b6cc0d23032f374ac76840aa7b62fbb2"
  },
  {
    "url": "page-data/blog/tag/host/page-data.json",
    "revision": "8179c8298effe7a1a24e6f2da75f9cc8"
  },
  {
    "url": "page-data/blog/tag/interactive/page-data.json",
    "revision": "fae6b9a2f3526433a6adcaefaedb6074"
  },
  {
    "url": "page-data/blog/tag/jupyter-notebook/page-data.json",
    "revision": "62b8cf60c0b612b7276e29494aed7617"
  },
  {
    "url": "page-data/blog/tag/jupyter-widgets/page-data.json",
    "revision": "a15c26593a1e7c504bd4a1d1bb4d6981"
  },
  {
    "url": "page-data/blog/tag/markdown/page-data.json",
    "revision": "13781373cc3640d2650ccbccf806b722"
  },
  {
    "url": "page-data/blog/tag/pandas/page-data.json",
    "revision": "4d7a8e2b9dac2515087bc9800e522be0"
  },
  {
    "url": "page-data/blog/tag/pandemic/page-data.json",
    "revision": "2063c785f22bf221408ba5414bd954b7"
  },
  {
    "url": "page-data/blog/tag/plotly/page-data.json",
    "revision": "d9c8d29910a54a9bea94a12ee0c10d99"
  },
  {
    "url": "page-data/blog/tag/python/page-data.json",
    "revision": "d69804bc05fc0dfebf1199ec6e6863bb"
  },
  {
    "url": "page-data/blog/tag/research-innovation/page-data.json",
    "revision": "ac72a3d9089903a98faac3b2445130b0"
  },
  {
    "url": "page-data/blog/tag/shiny/page-data.json",
    "revision": "46526c66607c080a712dedd6a50d5913"
  },
  {
    "url": "page-data/blog/tag/statistics/page-data.json",
    "revision": "da509b2e8b18b8897372c983d8d94662"
  },
  {
    "url": "page-data/blog/tag/template/page-data.json",
    "revision": "a5f17c9970e31ca0f8861fd564b6898c"
  },
  {
    "url": "page-data/blog/tag/urban-observatory/page-data.json",
    "revision": "751744b65eb7de5c321e5c35fa86a2e1"
  },
  {
    "url": "page-data/blog/tag/web/page-data.json",
    "revision": "b4d6a9fc2246faf3e3a8567be7a8359f"
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
    "revision": "5a4157eefc57b11c51b9e7b79ea6ae1a"
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
    "revision": "d2dc3f83817c91c654b26a2efd32a987"
  },
  {
    "url": "search/index.html",
    "revision": "3dce3d7770681f18da4b6e0852d3039e"
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
    "url": "styles.e6cf5ea69e3721e211e6.css"
  },
  {
    "url": "webpack-runtime-8f47c8f554411192ab97.js"
  },
  {
    "url": "webpack-runtime-8f47c8f554411192ab97.js.map",
    "revision": "8123ad3c6ce09ad14c8b73b768e69948"
  },
  {
    "url": "webpack.stats.json",
    "revision": "0963e56b09739526c86b0d6ad0450c72"
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
  if (!resources || !(await caches.match(`/app-64ca790427627b07c6ed.js`))) {
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
