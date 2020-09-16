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
    "url": "004a46017d377e7734e0eca46de51182/chart.png",
    "revision": "004a46017d377e7734e0eca46de51182"
  },
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
    "url": "11630fecaaf89cc47d3f52781145af09/helen_k.jpg",
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
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-b3a3c7590f75ecd5b52d.js"
  },
  {
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-b3a3c7590f75ecd5b52d.js.map",
    "revision": "3b3bb2994c6b71c2c27ea5d535d92ae9"
  },
  {
    "url": "2b34a3ff3736da40afaf4b7a5922ddb9/login_long.jpg",
    "revision": "2b34a3ff3736da40afaf4b7a5922ddb9"
  },
  {
    "url": "34-1018fe9979e0d90f9eec.js"
  },
  {
    "url": "34-1018fe9979e0d90f9eec.js.map",
    "revision": "2c219353cd7e2dac3af2c983655fa77b"
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
    "revision": "960321b2e246cfae354112005a58a497"
  },
  {
    "url": "404/index.html",
    "revision": "1aa414417ad1a4252951332fd1a42a04"
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
    "url": "746fa65abbca5995ba163aa0ea43ab04791bf0db-9d1e7611d076a1439400.js"
  },
  {
    "url": "746fa65abbca5995ba163aa0ea43ab04791bf0db-9d1e7611d076a1439400.js.map",
    "revision": "6c1d7030bd8bee953260fdf7171ec30d"
  },
  {
    "url": "78e521c3-c2e7506ec8b9abde991b.js"
  },
  {
    "url": "78e521c3-c2e7506ec8b9abde991b.js.map",
    "revision": "1008e434f013a48014718f5522d15f8a"
  },
  {
    "url": "7a10acfa924e70cf856c7190addf70b6/output_20_1.png",
    "revision": "7a10acfa924e70cf856c7190addf70b6"
  },
  {
    "url": "869b12657a2969845f875e26f3c08591/login_sm2.jpg",
    "revision": "869b12657a2969845f875e26f3c08591"
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
    "url": "979495879b0b2a87ffced73604a45f648734915f-aa9905c6994831649257.js"
  },
  {
    "url": "979495879b0b2a87ffced73604a45f648734915f-aa9905c6994831649257.js.map",
    "revision": "f44e3c984a00c6ec2857743fa4a00768"
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
    "url": "9f5ddf66ce06535b70d9417fc202e9d6/index.mdx",
    "revision": "9f5ddf66ce06535b70d9417fc202e9d6"
  },
  {
    "url": "a0f1a88da99c38bdb88ff0985519a90a/Fig2.png",
    "revision": "a0f1a88da99c38bdb88ff0985519a90a"
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
    "revision": "fd38a8b2c80a90cd3a717a6502587b48"
  },
  {
    "url": "acc11559c25bce5ee3d9a689a3c602a8/output_14_1.png",
    "revision": "acc11559c25bce5ee3d9a689a3c602a8"
  },
  {
    "url": "accessibility/index.html",
    "revision": "0f37066161606195529ebc8f64343ef2"
  },
  {
    "url": "adb95786ee5c22fc51746113cb541f06/Fig4.png",
    "revision": "adb95786ee5c22fc51746113cb541f06"
  },
  {
    "url": "app-1b5f6418fe376f112638.js"
  },
  {
    "url": "app-1b5f6418fe376f112638.js.map",
    "revision": "f86c68b437230decb213444bde9eee72"
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
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-5b24b465519181502c35.js"
  },
  {
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-5b24b465519181502c35.js.map",
    "revision": "24dd28568581361c488af5c9702fa598"
  },
  {
    "url": "b6f2fe82a2458ef1e089e6f3cdacff6a/Fig4.png",
    "revision": "b6f2fe82a2458ef1e089e6f3cdacff6a"
  },
  {
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-341c2e7312ae714b13fe.js"
  },
  {
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-341c2e7312ae714b13fe.js.map",
    "revision": "1e00b8a804b2a91c7fa3166499aebfdc"
  },
  {
    "url": "b98bc7c3-5fa9d1a8c83bfbad3d62.js"
  },
  {
    "url": "b98bc7c3-5fa9d1a8c83bfbad3d62.js.map",
    "revision": "38328c19441c5bde219173aca94d5d9c"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-37c2a7a60072c7857f1c.js"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-37c2a7a60072c7857f1c.js.map",
    "revision": "bab10e51d9b7b37dde208ddb7e4a7ced"
  },
  {
    "url": "bab4896a-d9f0e342396e339e7669.js"
  },
  {
    "url": "bab4896a-d9f0e342396e339e7669.js.map",
    "revision": "b0b7d081034c2bd77337841dcb2f5505"
  },
  {
    "url": "blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality/index.html",
    "revision": "09971b9563975e6e406c3d01572e909a"
  },
  {
    "url": "blog/02/05/2020/dataviz_stats_1/index.html",
    "revision": "5c9b9a13df6a441ddd3e53b8d4bf29a6"
  },
  {
    "url": "blog/03/07/2020/Deploy_Your_Dash_App/index.html",
    "revision": "76ae8fba09c59a838b65fe8bc4df6efc"
  },
  {
    "url": "blog/03/07/2020/LearningPath_Concept/index.html",
    "revision": "9ae4cfa5b239531452c2e7f8cc0a9c20"
  },
  {
    "url": "blog/04/06/2020/dash_tutorial/index.html",
    "revision": "c2b0dff69d490cb3b9ffb8f1cc603211"
  },
  {
    "url": "blog/04/07/2020/LearningPath_Lab/index.html",
    "revision": "9813d683d424bb97ba16627aa2724626"
  },
  {
    "url": "blog/05/07/2020/LearningPath_Workflow/index.html",
    "revision": "23b8d2accd133ac29ef2b0e4464172ed"
  },
  {
    "url": "blog/05/09/2020/challenges_in_visualising_data/index.html",
    "revision": "6bab7183f48f0a135113a291961a1fef"
  },
  {
    "url": "blog/06/04/2020/chart_choice/index.html",
    "revision": "33ddc396d918bacc2e9cebb3503546a9"
  },
  {
    "url": "blog/06/05/2020/Colour_Schemes/index.html",
    "revision": "f4685f0f83beb95db1ecc19a2f05e223"
  },
  {
    "url": "blog/07/05/2020/dataviz_stats_2/index.html",
    "revision": "503988f22673529b77f771f9d683a8dd"
  },
  {
    "url": "blog/09/09/2020/data_visualizations_social_role/index.html",
    "revision": "a75536c599fc4b5afb6f68cdcef5bf9c"
  },
  {
    "url": "blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/index.html",
    "revision": "2be43aad1af91f8353df64982104df3e"
  },
  {
    "url": "blog/12/06/2020/dash_tutorial_2/index.html",
    "revision": "21b75a5a6842d3b88b1f954c56fff01d"
  },
  {
    "url": "blog/13/07/2020/Shiny_Template/index.html",
    "revision": "a3f8b92cbaaea84080f5c0736ce909d2"
  },
  {
    "url": "blog/16/06/2020/Jupyter_Widgets/index.html",
    "revision": "00b68cdfbf0e85e7363fb497c5bb0733"
  },
  {
    "url": "blog/16/07/2020/python_visualisation_templates/index.html",
    "revision": "d4657d8be9fd9e04c60529161d7df9a7"
  },
  {
    "url": "blog/18/08/2020/GM/index.html",
    "revision": "02eeee958d5989bb18466650e1b2a863"
  },
  {
    "url": "blog/20/05/2020/Non_Numeric/index.html",
    "revision": "2f3daa601f2723994b41a88c5da1a1b1"
  },
  {
    "url": "blog/22/03/2020/contribute_blog_post/index.html",
    "revision": "b80596262e4f0f1e9f8caec3ff15cac5"
  },
  {
    "url": "blog/22/03/2020/datavizhub_guide/index.html",
    "revision": "bcd569844fdade5dc3a192ddb06140a5"
  },
  {
    "url": "blog/24/06/2020/host_jupyter_notebook/index.html",
    "revision": "c091b08b4a2a2c1336ec6903a005d5db"
  },
  {
    "url": "blog/26/08/2020/D3js_for_data_visualisation/index.html",
    "revision": "68dace6fd84f4d99141168e3bd6cf5d3"
  },
  {
    "url": "blog/28/02/2020/Urban_Observatories_hackathon/index.html",
    "revision": "9b20486b1f2a9c874e3c1a08dd58968e"
  },
  {
    "url": "blog/category/articles/index.html",
    "revision": "bdaf13613c8c7dad164a91877432dd9b"
  },
  {
    "url": "blog/category/articles/page/2/index.html",
    "revision": "7181f92fb037a7bd71c390e8eda8f8b8"
  },
  {
    "url": "blog/category/events/index.html",
    "revision": "b0585ca8ccbadc0b7bf703d57ba7e490"
  },
  {
    "url": "blog/category/tutorial/index.html",
    "revision": "4047371b7e73d258f09e877ca8572788"
  },
  {
    "url": "blog/index.html",
    "revision": "e56c9155af19a514c8081191e2f20692"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "7d98f1bccede16f9d98e934746f6acb3"
  },
  {
    "url": "blog/tag/blog/index.html",
    "revision": "85f0b41ea6e47a8d444e6d76df5aa292"
  },
  {
    "url": "blog/tag/covid-19-mortality/index.html",
    "revision": "dc2595d72817d4955eb9ad8c9525fd39"
  },
  {
    "url": "blog/tag/covid-19-virus-sars-co-v-2/index.html",
    "revision": "9b5a0543c9a0c4264a91e791a3ef7d26"
  },
  {
    "url": "blog/tag/d-3-js/index.html",
    "revision": "11fe3defcc6430b7319b47319db58a26"
  },
  {
    "url": "blog/tag/dash/index.html",
    "revision": "ee71c577850d1486aabb3d99a3bca9e3"
  },
  {
    "url": "blog/tag/data-analytics/index.html",
    "revision": "9f2a151761eb162579f915c302c0ba9f"
  },
  {
    "url": "blog/tag/data-engineering/index.html",
    "revision": "820c5dd05044049059c0b39e3fa00184"
  },
  {
    "url": "blog/tag/data-politics/index.html",
    "revision": "5aca8fcab1e32d0f2c99d943d1d0cc79"
  },
  {
    "url": "blog/tag/dataviz/index.html",
    "revision": "d26604577682ae20713450cc6209c9e1"
  },
  {
    "url": "blog/tag/deploy/index.html",
    "revision": "d2bd3e38622a444c911c8751d66ca334"
  },
  {
    "url": "blog/tag/effectiveness/index.html",
    "revision": "15e433feb50283fb03eb410027a169fd"
  },
  {
    "url": "blog/tag/effects/index.html",
    "revision": "0d1183bf85dd8b22bf7cdabd1f8c86f9"
  },
  {
    "url": "blog/tag/emotions/index.html",
    "revision": "d902c9e60b1cf77d00d4d7e644831b52"
  },
  {
    "url": "blog/tag/engaging-with-dataviz/index.html",
    "revision": "8824dc2d4230b50c07f59940873979c1"
  },
  {
    "url": "blog/tag/epidemiology/index.html",
    "revision": "db987416bb225be8d9064a7debc0674d"
  },
  {
    "url": "blog/tag/heroku/index.html",
    "revision": "c4b79ed48940f6261d1a27c81987ced1"
  },
  {
    "url": "blog/tag/host/index.html",
    "revision": "633abefe47f8ecfca2eea7fe49c9b540"
  },
  {
    "url": "blog/tag/html/index.html",
    "revision": "3766b1b280c63c72fc67391f1b428e09"
  },
  {
    "url": "blog/tag/interactive/index.html",
    "revision": "a84f86180b2a1e4a47706dcd241e77c2"
  },
  {
    "url": "blog/tag/javascript/index.html",
    "revision": "6a6fee24387261e0785b630e3b503f31"
  },
  {
    "url": "blog/tag/jupyter-notebook/index.html",
    "revision": "67ba2d27e949f809066c6c47c0b382fc"
  },
  {
    "url": "blog/tag/jupyter-widgets/index.html",
    "revision": "40667e15def4802bf7ae02735ae2eaa2"
  },
  {
    "url": "blog/tag/markdown/index.html",
    "revision": "fa11d184f53c7a67d8837f0d395679d1"
  },
  {
    "url": "blog/tag/pandas/index.html",
    "revision": "ae386daf79feb7ad8f2ed3ae5c283e1e"
  },
  {
    "url": "blog/tag/pandemic/index.html",
    "revision": "7b6a4eaf2d28f58f6da83c3950ce7d15"
  },
  {
    "url": "blog/tag/plotly/index.html",
    "revision": "807298f9692cf4689c0e4d32ed0bc259"
  },
  {
    "url": "blog/tag/python/index.html",
    "revision": "95b6cf8cb9bc0c74e9bf54e636c53ab7"
  },
  {
    "url": "blog/tag/research-innovation/index.html",
    "revision": "0fd341f570cef310a8335b8fbef331ea"
  },
  {
    "url": "blog/tag/shiny/index.html",
    "revision": "4f018e2cafd04f2fbc78734074102e8c"
  },
  {
    "url": "blog/tag/social-factors/index.html",
    "revision": "0b01d7245aa61d6517826573c714aa99"
  },
  {
    "url": "blog/tag/statistics/index.html",
    "revision": "9bf615d26f82bcfc658abaeb8abcdc06"
  },
  {
    "url": "blog/tag/template/index.html",
    "revision": "118b0f19d2c485cb61413a8c0aa84b24"
  },
  {
    "url": "blog/tag/urban-observatory/index.html",
    "revision": "bec334d51e32155a9e91d45f2e157855"
  },
  {
    "url": "blog/tag/web/index.html",
    "revision": "e3cb1de88b98b9f2b932fb395c544e8a"
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
    "revision": "b94cf6a4df41a5e2c94f1a8e000746cf"
  },
  {
    "url": "community/index.html",
    "revision": "6e79c45e0623059f1113ddd172a9e676"
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
    "url": "component---src-pages-about-jsx-5c2f690f25aad6b93e29.js"
  },
  {
    "url": "component---src-pages-about-jsx-5c2f690f25aad6b93e29.js.map",
    "revision": "2e23b194dbf2ba1727e5bd6b048bd52c"
  },
  {
    "url": "component---src-pages-accessibility-jsx-bdba8de7258b796d682d.js"
  },
  {
    "url": "component---src-pages-accessibility-jsx-bdba8de7258b796d682d.js.map",
    "revision": "bf8f8a7441d0a96ef7500b36930a1303"
  },
  {
    "url": "component---src-pages-community-jsx-8ca7050b1995824c3eae.js"
  },
  {
    "url": "component---src-pages-community-jsx-8ca7050b1995824c3eae.js.map",
    "revision": "e41b876dc379085536050faab59a8b21"
  },
  {
    "url": "component---src-pages-events-jsx-667a352f4da764a8687e.js"
  },
  {
    "url": "component---src-pages-events-jsx-667a352f4da764a8687e.js.map",
    "revision": "c9476893e6c25434e7caadda828a6540"
  },
  {
    "url": "component---src-pages-index-jsx-ae6e76b790ebdbbc8cd0.js"
  },
  {
    "url": "component---src-pages-index-jsx-ae6e76b790ebdbbc8cd0.js.map",
    "revision": "662d1104bc742b9aa99d792bbedcd54e"
  },
  {
    "url": "component---src-pages-privacy-jsx-fa022640aee3bf3d3d54.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-fa022640aee3bf3d3d54.js.map",
    "revision": "0de2b8e65c2d907c74e3c0fe366182f9"
  },
  {
    "url": "component---src-pages-search-jsx-0f0f2388168c4d5055eb.js"
  },
  {
    "url": "component---src-pages-search-jsx-0f0f2388168c4d5055eb.js.map",
    "revision": "fe7a1547d9880cf29387c89859b75431"
  },
  {
    "url": "component---src-templates-blog-blog-category-template-jsx-eff1b85c146aa58610d7.js"
  },
  {
    "url": "component---src-templates-blog-blog-category-template-jsx-eff1b85c146aa58610d7.js.map",
    "revision": "cd53a90605fc723838e9495f2f681efc"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-custom-jsx-954d20057e02bb79b40c.js"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-custom-jsx-954d20057e02bb79b40c.js.map",
    "revision": "c85b57c8090520879d08926f93df657d"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-d08edcd9abbba6f9af8e.js"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-d08edcd9abbba6f9af8e.js.map",
    "revision": "ceebf918206f25f57074a5241b272bfc"
  },
  {
    "url": "component---src-templates-blog-blog-tag-template-jsx-b9c0d6dd79b889244f37.js"
  },
  {
    "url": "component---src-templates-blog-blog-tag-template-jsx-b9c0d6dd79b889244f37.js.map",
    "revision": "b6dc752b47f12a7045ce58692a7df9a8"
  },
  {
    "url": "component---src-templates-blog-blog-template-jsx-4c67f440e9f70dc9c65a.js"
  },
  {
    "url": "component---src-templates-blog-blog-template-jsx-4c67f440e9f70dc9c65a.js.map",
    "revision": "b30dab703053c42b4a90a87e9b669b74"
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
    "url": "dba3324f4142f375d19268a54c60e915/output_32_1.png",
    "revision": "dba3324f4142f375d19268a54c60e915"
  },
  {
    "url": "de71a805-89a9142bf31efd8d298f.js"
  },
  {
    "url": "de71a805-89a9142bf31efd8d298f.js.map",
    "revision": "f77e7002945ea199bdbada71c9f6d109"
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
    "revision": "134c978f34dde4a39f4af8eba64967c1"
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
    "revision": "6f8e3509f51f2dab2ebbea700e9b7f6e"
  },
  {
    "url": "framework-aaea27cd7ee6870b6744.js"
  },
  {
    "url": "framework-aaea27cd7ee6870b6744.js.map",
    "revision": "35cbf1575ad6b0ca695e8aaf47eb6957"
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
    "revision": "40c9bc3a129c88418496e945ec234bed"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8d0b5c4f27de19af677b8e979a75d509"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3d06a0b4fbffd62a2e4d9e6686d390fb"
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
    "url": "page-data/accessibility/page-data.json",
    "revision": "c9072986500af0b781362f43bf494235"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "dcddce8ba04fc99aa13d47fd585830d7"
  },
  {
    "url": "page-data/blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality/page-data.json",
    "revision": "736bd0f95702019411ed5d7b4a24d23e"
  },
  {
    "url": "page-data/blog/02/05/2020/dataviz_stats_1/page-data.json",
    "revision": "1daccae1a81562c879c37476f657e172"
  },
  {
    "url": "page-data/blog/03/07/2020/Deploy_Your_Dash_App/page-data.json",
    "revision": "4b8d1e64c800765d841313f337022737"
  },
  {
    "url": "page-data/blog/03/07/2020/LearningPath_Concept/page-data.json",
    "revision": "78e410b97889a7780a25fd80f5f49285"
  },
  {
    "url": "page-data/blog/04/06/2020/dash_tutorial/page-data.json",
    "revision": "9e58d9c43fdbe8db5462e4bec1d10115"
  },
  {
    "url": "page-data/blog/04/07/2020/LearningPath_Lab/page-data.json",
    "revision": "bef977e2998a0c2dec3ed6adbd63878a"
  },
  {
    "url": "page-data/blog/05/07/2020/LearningPath_Workflow/page-data.json",
    "revision": "47247840534df96129b30abd401076f0"
  },
  {
    "url": "page-data/blog/05/09/2020/challenges_in_visualising_data/page-data.json",
    "revision": "cd29e948450a9261a84c5f3b2f0d1aeb"
  },
  {
    "url": "page-data/blog/06/04/2020/chart_choice/page-data.json",
    "revision": "5181ea4e9cca32f4e7761a621491b524"
  },
  {
    "url": "page-data/blog/06/05/2020/Colour_Schemes/page-data.json",
    "revision": "93ab3dfa5075b6b6d444b807fbec1b01"
  },
  {
    "url": "page-data/blog/07/05/2020/dataviz_stats_2/page-data.json",
    "revision": "df7f290d7d7fdadd679f2fa65fd29758"
  },
  {
    "url": "page-data/blog/09/09/2020/data_visualizations_social_role/page-data.json",
    "revision": "1e5e313c85d960a3bc5ebe13a2a00553"
  },
  {
    "url": "page-data/blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/page-data.json",
    "revision": "5114c21e320468f3d2042e455b3d424e"
  },
  {
    "url": "page-data/blog/12/06/2020/dash_tutorial_2/page-data.json",
    "revision": "b6ef06420846d82e7335193c1b56c6e4"
  },
  {
    "url": "page-data/blog/13/07/2020/Shiny_Template/page-data.json",
    "revision": "05a32447e8e575ccf5fbbb2cdffe9de3"
  },
  {
    "url": "page-data/blog/16/06/2020/Jupyter_Widgets/page-data.json",
    "revision": "e8d32340ac788645fb65379d32e138e9"
  },
  {
    "url": "page-data/blog/16/07/2020/python_visualisation_templates/page-data.json",
    "revision": "2a6cf907ab49b2d5970686f154319b8c"
  },
  {
    "url": "page-data/blog/18/08/2020/GM/page-data.json",
    "revision": "41f822d347db5122a1e245efec970035"
  },
  {
    "url": "page-data/blog/20/05/2020/Non_Numeric/page-data.json",
    "revision": "87a56da4310b2bcd62591686a347dbb1"
  },
  {
    "url": "page-data/blog/22/03/2020/contribute_blog_post/page-data.json",
    "revision": "0f0180d86f7112e5bb7d035643731ebe"
  },
  {
    "url": "page-data/blog/22/03/2020/datavizhub_guide/page-data.json",
    "revision": "79ac0b1fb589fe0aa8885e6b2eb78019"
  },
  {
    "url": "page-data/blog/24/06/2020/host_jupyter_notebook/page-data.json",
    "revision": "3356788ad541ae89e20aeef7283be4e4"
  },
  {
    "url": "page-data/blog/26/08/2020/D3js_for_data_visualisation/page-data.json",
    "revision": "1c1ea978456bbd1798e8e45ef9ed271f"
  },
  {
    "url": "page-data/blog/28/02/2020/Urban_Observatories_hackathon/page-data.json",
    "revision": "ce078a35b515060d1007ae2ee19ea809"
  },
  {
    "url": "page-data/blog/category/articles/page-data.json",
    "revision": "e82bd7502c86194542ce4b85557c0f8f"
  },
  {
    "url": "page-data/blog/category/articles/page/2/page-data.json",
    "revision": "1cc3faf820a746c5094a5b0edadd329b"
  },
  {
    "url": "page-data/blog/category/events/page-data.json",
    "revision": "79fb1a1c4448a494d3c49e2d51363bad"
  },
  {
    "url": "page-data/blog/category/tutorial/page-data.json",
    "revision": "99d2763b9ccccf0853c3bf25e013941f"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "33f907c2c944562bcd7112d793cbb3cc"
  },
  {
    "url": "page-data/blog/page/2/page-data.json",
    "revision": "44535e6b336ae68ed40477de07db389a"
  },
  {
    "url": "page-data/blog/tag/blog/page-data.json",
    "revision": "de89a5ce6a42da04f77fba97935c7ec0"
  },
  {
    "url": "page-data/blog/tag/covid-19-mortality/page-data.json",
    "revision": "fdc593cd1bed2f58896723b8f7b13ad8"
  },
  {
    "url": "page-data/blog/tag/covid-19-virus-sars-co-v-2/page-data.json",
    "revision": "28e63dacf9fed03c841f6035bdecc7ee"
  },
  {
    "url": "page-data/blog/tag/d-3-js/page-data.json",
    "revision": "770e6096bbab3fb70581b74b71a4c9e7"
  },
  {
    "url": "page-data/blog/tag/dash/page-data.json",
    "revision": "2426c196ed9841deaec24ef9de14971f"
  },
  {
    "url": "page-data/blog/tag/data-analytics/page-data.json",
    "revision": "93d810eb1b2f31aade488f4f2b0d73e2"
  },
  {
    "url": "page-data/blog/tag/data-engineering/page-data.json",
    "revision": "f6988404f43b2d051024b989dc3614e4"
  },
  {
    "url": "page-data/blog/tag/data-politics/page-data.json",
    "revision": "756e1238335ea3b3ec15e7f527816a85"
  },
  {
    "url": "page-data/blog/tag/dataviz/page-data.json",
    "revision": "92992d235e921861c9a92e23a1575d08"
  },
  {
    "url": "page-data/blog/tag/deploy/page-data.json",
    "revision": "abf8a87ad53c8c970d2b7b3f386c7354"
  },
  {
    "url": "page-data/blog/tag/effectiveness/page-data.json",
    "revision": "8b91a9069489e1e89e371798a379c3d8"
  },
  {
    "url": "page-data/blog/tag/effects/page-data.json",
    "revision": "14dce2efabf5f6260331ac5e8b0e1f52"
  },
  {
    "url": "page-data/blog/tag/emotions/page-data.json",
    "revision": "c54b80d7df73012b7681707b593140b4"
  },
  {
    "url": "page-data/blog/tag/engaging-with-dataviz/page-data.json",
    "revision": "e2557a72b4419f7bbfd6bd8d2b4d4ba4"
  },
  {
    "url": "page-data/blog/tag/epidemiology/page-data.json",
    "revision": "216664c9bdb079922ff399c1492b2086"
  },
  {
    "url": "page-data/blog/tag/heroku/page-data.json",
    "revision": "ae433dc4b569cd5218bfaa0a7043ea40"
  },
  {
    "url": "page-data/blog/tag/host/page-data.json",
    "revision": "99a41fbf62607d8ea38d874bd5c1770e"
  },
  {
    "url": "page-data/blog/tag/html/page-data.json",
    "revision": "ffaacdaaacdac20256f4270b67439ff8"
  },
  {
    "url": "page-data/blog/tag/interactive/page-data.json",
    "revision": "2d3e311a95e38542a574dc4f99cac606"
  },
  {
    "url": "page-data/blog/tag/javascript/page-data.json",
    "revision": "3aceac569bdddc89a3209cee1add6dfc"
  },
  {
    "url": "page-data/blog/tag/jupyter-notebook/page-data.json",
    "revision": "d096619ee826eccc194a952f7c2b057d"
  },
  {
    "url": "page-data/blog/tag/jupyter-widgets/page-data.json",
    "revision": "6e5bf1d053f77763113d31473b45294e"
  },
  {
    "url": "page-data/blog/tag/markdown/page-data.json",
    "revision": "bdcbf360c9989e47cf65983202de0e88"
  },
  {
    "url": "page-data/blog/tag/pandas/page-data.json",
    "revision": "04d2b7371b3087c72b67eed7853d15b6"
  },
  {
    "url": "page-data/blog/tag/pandemic/page-data.json",
    "revision": "b40135a60f59409e8d6b9f65a214b3bb"
  },
  {
    "url": "page-data/blog/tag/plotly/page-data.json",
    "revision": "7f019eb438279706d465e47d3cec6e61"
  },
  {
    "url": "page-data/blog/tag/python/page-data.json",
    "revision": "251e7608b42b9fa9007af969864a159b"
  },
  {
    "url": "page-data/blog/tag/research-innovation/page-data.json",
    "revision": "a5e85e8d132f8e00d2093fe364695254"
  },
  {
    "url": "page-data/blog/tag/shiny/page-data.json",
    "revision": "edeed47a85bc22b2058b9b4a7ffdb2ad"
  },
  {
    "url": "page-data/blog/tag/social-factors/page-data.json",
    "revision": "5388a3b843052ea760ec63474f389735"
  },
  {
    "url": "page-data/blog/tag/statistics/page-data.json",
    "revision": "d6fa5b282c087840982f52f6917a2f2b"
  },
  {
    "url": "page-data/blog/tag/template/page-data.json",
    "revision": "9cec4a71184cd5ecc28ca09a163bf917"
  },
  {
    "url": "page-data/blog/tag/urban-observatory/page-data.json",
    "revision": "99ec871cccb4d8f0e35507f650820823"
  },
  {
    "url": "page-data/blog/tag/web/page-data.json",
    "revision": "710a58de8690d8dd75313214edbcbd67"
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
    "revision": "13098ba04df79813432ff3fc85938156"
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
    "revision": "035f3c24576fe11d9a1a3238eaf84a9c"
  },
  {
    "url": "page-data/sq/d/3370916995.json",
    "revision": "c8eedc56600e107a7f626045ea3211e2"
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
    "url": "polyfill-a384fa135148697a249b.js"
  },
  {
    "url": "polyfill-a384fa135148697a249b.js.map",
    "revision": "335bca8ae376877e8316f50e5413f081"
  },
  {
    "url": "privacy/index.html",
    "revision": "7da3cc39535569c2f46e471ea9eef460"
  },
  {
    "url": "search/index.html",
    "revision": "5a1204f230ebd3de4441ed43cf9ce452"
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
    "url": "static/455e7875a263fa94f0c44ecb181f9ec8/2244e/login_sm4.jpg"
  },
  {
    "url": "static/455e7875a263fa94f0c44ecb181f9ec8/82eb6/login_sm4.jpg"
  },
  {
    "url": "static/455e7875a263fa94f0c44ecb181f9ec8/f836f/login_sm4.jpg"
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
    "url": "static/b6f432ec1b47d139d904d5025714b073/148b8/helen_k.jpg"
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
    "url": "static/f4595957a37944891068ea9f168c144a/497c6/thumb.png"
  },
  {
    "url": "static/f4595957a37944891068ea9f168c144a/65595/thumb.png"
  },
  {
    "url": "static/f4595957a37944891068ea9f168c144a/69585/thumb.png"
  },
  {
    "url": "static/f4595957a37944891068ea9f168c144a/ee604/thumb.png"
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
    "url": "styles.912644638da58796a80c.css"
  },
  {
    "url": "webpack-runtime-fef8d2fcc4cd1a506b89.js"
  },
  {
    "url": "webpack-runtime-fef8d2fcc4cd1a506b89.js.map",
    "revision": "87cc115c8e8371af924c068372773eec"
  },
  {
    "url": "webpack.stats.json",
    "revision": "0b3df2f2e734a8f928d498ce58e54bd4"
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
  if (!resources || !(await caches.match(`/app-1b5f6418fe376f112638.js`))) {
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
