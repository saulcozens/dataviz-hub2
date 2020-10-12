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
    "url": "01579fc6bcf79816d64a0582fa031024/geompoint.png",
    "revision": "01579fc6bcf79816d64a0582fa031024"
  },
  {
    "url": "02aa206361a969b42d3e3be18d3bdb27/pieChart1.png",
    "revision": "02aa206361a969b42d3e3be18d3bdb27"
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
    "url": "09555539ce1d05bc69f04cab08f3a4de/rstudio1.png",
    "revision": "09555539ce1d05bc69f04cab08f3a4de"
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
    "url": "1b8e2c8856a46f00b17ea24b776b551a/pop_2020.png",
    "revision": "1b8e2c8856a46f00b17ea24b776b551a"
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
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-f229b46351eadaad5d34.js"
  },
  {
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-f229b46351eadaad5d34.js.map",
    "revision": "784d733286995463df6da5636f287d95"
  },
  {
    "url": "2b34a3ff3736da40afaf4b7a5922ddb9/login_long.jpg",
    "revision": "2b34a3ff3736da40afaf4b7a5922ddb9"
  },
  {
    "url": "33cf97e05704742911a9dac9d61fd0ab/sp_lm.png",
    "revision": "33cf97e05704742911a9dac9d61fd0ab"
  },
  {
    "url": "35-7ce7bdc4343acfda1076.js"
  },
  {
    "url": "35-7ce7bdc4343acfda1076.js.map",
    "revision": "62ce85ec31433acdc07c8ab77c104766"
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
    "revision": "4e4f9eaa30676bdaf976825d5607070c"
  },
  {
    "url": "404/index.html",
    "revision": "7b5b8a7c0f96198bf0f3ca4c66b4f09d"
  },
  {
    "url": "45401ff2e6ab69d21b0b06f968e7aad8/rstudio4.png",
    "revision": "45401ff2e6ab69d21b0b06f968e7aad8"
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
    "url": "503d8eb81732a0fe3895c085d0c467c1/pieChart2.png",
    "revision": "503d8eb81732a0fe3895c085d0c467c1"
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
    "url": "5ba6f7e717ca64cbf5698d6b49958983/Theme1.png",
    "revision": "5ba6f7e717ca64cbf5698d6b49958983"
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
    "url": "6728d85a-859fba2aa14f5cd926f2.js"
  },
  {
    "url": "6728d85a-859fba2aa14f5cd926f2.js.map",
    "revision": "d8ac881d58c2e07ad30d4cafa1ecca11"
  },
  {
    "url": "6cca3b30969784cf299c198a765827a5/sp_subset.png",
    "revision": "6cca3b30969784cf299c198a765827a5"
  },
  {
    "url": "6de14820c819b82ca826e9f42b769237/columnChart.png",
    "revision": "6de14820c819b82ca826e9f42b769237"
  },
  {
    "url": "6dfb4a1ec3e5661f8105cf2cfe33aa41/scatterPlot.png",
    "revision": "6dfb4a1ec3e5661f8105cf2cfe33aa41"
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
    "url": "757cea458fb7bd13c92287aadae2f076/lineChart.png",
    "revision": "757cea458fb7bd13c92287aadae2f076"
  },
  {
    "url": "78e521c3-c2e7506ec8b9abde991b.js"
  },
  {
    "url": "78e521c3-c2e7506ec8b9abde991b.js.map",
    "revision": "1008e434f013a48014718f5522d15f8a"
  },
  {
    "url": "7927f9558ed6828a07491f06aa7e9919/groupby.png",
    "revision": "7927f9558ed6828a07491f06aa7e9919"
  },
  {
    "url": "79e2c79d15cd1b41a49931609b0079e7/index.mdx",
    "revision": "79e2c79d15cd1b41a49931609b0079e7"
  },
  {
    "url": "7a10acfa924e70cf856c7190addf70b6/output_20_1.png",
    "revision": "7a10acfa924e70cf856c7190addf70b6"
  },
  {
    "url": "7b63819be61e87cba1590a679ad84c1a/Heatmap1.png",
    "revision": "7b63819be61e87cba1590a679ad84c1a"
  },
  {
    "url": "7d49b884781ef1a79e72350e2cc35570/data1.png",
    "revision": "7d49b884781ef1a79e72350e2cc35570"
  },
  {
    "url": "7f9e9b7fc7a37ade6ddd71600d8a792a/Heatmap2.png",
    "revision": "7f9e9b7fc7a37ade6ddd71600d8a792a"
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
    "url": "8e2cff7e8c5486703c4a615fead939e8/Histogram1.png",
    "revision": "8e2cff7e8c5486703c4a615fead939e8"
  },
  {
    "url": "8e700d79fa76b0cb5e6e610b99b79488/edward_itineraryCUMULATIVE.gif",
    "revision": "8e700d79fa76b0cb5e6e610b99b79488"
  },
  {
    "url": "8e98fa8ec906378e09ae926f5f398d4e/pipes.png",
    "revision": "8e98fa8ec906378e09ae926f5f398d4e"
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
    "url": "8f52df9ea57cb90343719493401d6886/waterfall.png",
    "revision": "8f52df9ea57cb90343719493401d6886"
  },
  {
    "url": "95b64a6e-26c4ff9a9d2f1f737d6e.js"
  },
  {
    "url": "95b64a6e-26c4ff9a9d2f1f737d6e.js.map",
    "revision": "0163d27332e707c1a0ac1155b6d05c92"
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
    "url": "999bd8b8776d289d6ab0a525ed66722e/filtermpg.png",
    "revision": "999bd8b8776d289d6ab0a525ed66722e"
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
    "url": "a44240697a5f55109c51dfebab7b3395/Fig2.png",
    "revision": "a44240697a5f55109c51dfebab7b3395"
  },
  {
    "url": "a644408106b079620ca4a349f4cc66e5/Kickstarter2.png",
    "revision": "a644408106b079620ca4a349f4cc66e5"
  },
  {
    "url": "a84ec2294a8faf9b5e0965967d602659/summary.png",
    "revision": "a84ec2294a8faf9b5e0965967d602659"
  },
  {
    "url": "a8e5249bdeab577fdedce16e359f5195/Fig4.png",
    "revision": "a8e5249bdeab577fdedce16e359f5195"
  },
  {
    "url": "a90d453ec8e29ba2f6bd65dbbd1305aa/mutateMpg.png",
    "revision": "a90d453ec8e29ba2f6bd65dbbd1305aa"
  },
  {
    "url": "about/index.html",
    "revision": "c9ad28ebc165b8b677f0ba24adc22338"
  },
  {
    "url": "acc11559c25bce5ee3d9a689a3c602a8/output_14_1.png",
    "revision": "acc11559c25bce5ee3d9a689a3c602a8"
  },
  {
    "url": "accessibility/index.html",
    "revision": "67e0fdb46f6249c309e5af4141703205"
  },
  {
    "url": "adb95786ee5c22fc51746113cb541f06/Fig4.png",
    "revision": "adb95786ee5c22fc51746113cb541f06"
  },
  {
    "url": "app-824f2a2bd4bb09b0e290.js"
  },
  {
    "url": "app-824f2a2bd4bb09b0e290.js.map",
    "revision": "5c391d17acc92e5f81b7e837e1b368e8"
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
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-672df63096efe4cd0a30.js"
  },
  {
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-672df63096efe4cd0a30.js.map",
    "revision": "6f7419ed1c8ac8b3dc6ea4f1a296a40c"
  },
  {
    "url": "b6f2fe82a2458ef1e089e6f3cdacff6a/Fig4.png",
    "revision": "b6f2fe82a2458ef1e089e6f3cdacff6a"
  },
  {
    "url": "b7d165f1f79ad6a4c4a0b6d9cac7a5b6/Histogram2.png",
    "revision": "b7d165f1f79ad6a4c4a0b6d9cac7a5b6"
  },
  {
    "url": "b7ff330670970d127561ca52bc9d8efe/rstudio2.png",
    "revision": "b7ff330670970d127561ca52bc9d8efe"
  },
  {
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-6f2f91cee807a9b1062f.js"
  },
  {
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-6f2f91cee807a9b1062f.js.map",
    "revision": "2c081763042a7379f754179a1fe32803"
  },
  {
    "url": "b98bc7c3-e554e05697b34066e56e.js"
  },
  {
    "url": "b98bc7c3-e554e05697b34066e56e.js.map",
    "revision": "e207cc0fc1d25d10c26ee31bd3ec9ace"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-6918acfdb8951bd24539.js"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-6918acfdb8951bd24539.js.map",
    "revision": "97393e48b1bc2ee14541a4ed4dad15d9"
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
    "revision": "f45b4c71166e42803b19060beb678751"
  },
  {
    "url": "blog/01/10/2020/moving-from-excel-to-r/index.html",
    "revision": "d4c79b325da48f7fbbf6dbd2da020397"
  },
  {
    "url": "blog/02/05/2020/dataviz-stats-1/index.html",
    "revision": "b118a35305fa61f0ce9596d534d61293"
  },
  {
    "url": "blog/03/07/2020/Deploy-Your-Dash-App/index.html",
    "revision": "6e9a09e80749f9651eae0bf198612984"
  },
  {
    "url": "blog/03/07/2020/LearningPath-Introduction/index.html",
    "revision": "808993e1858cfb15803197d287824d44"
  },
  {
    "url": "blog/04/06/2020/dash-tutorial/index.html",
    "revision": "b99ac16e1cb957274f129a16f2cd4663"
  },
  {
    "url": "blog/04/07/2020/LearningPath-Lab/index.html",
    "revision": "baa144d9fc762fbf66d2916af6087282"
  },
  {
    "url": "blog/05/07/2020/LearningPath-Workflow/index.html",
    "revision": "3ed052ac2d3ae0ca110aa875409aedde"
  },
  {
    "url": "blog/05/09/2020/challenges_in_visualising_data/index.html",
    "revision": "7da538183e3d62b3615d49d626e54075"
  },
  {
    "url": "blog/06/04/2020/chart-choice/index.html",
    "revision": "426a0db26b9cf7902873fece6bf83d44"
  },
  {
    "url": "blog/06/05/2020/Colour-Schemes/index.html",
    "revision": "c4284a5528f1725177bd8c97c92d0c43"
  },
  {
    "url": "blog/07/05/2020/dataviz-stats-2/index.html",
    "revision": "fe9ac6d188abc799767d3310c9a150e3"
  },
  {
    "url": "blog/09/09/2020/data_visualizations_social_role/index.html",
    "revision": "7ef32c8323ab87358e15febd9d7d24b5"
  },
  {
    "url": "blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/index.html",
    "revision": "c0171ff4a31387fc31dce7dcb1903a2c"
  },
  {
    "url": "blog/12/06/2020/dash-tutorial-2/index.html",
    "revision": "4ef6abc6125937828a2e34d3a631f3b8"
  },
  {
    "url": "blog/13/07/2020/Shiny-Template/index.html",
    "revision": "8c35ac5fe1eb67609cfcb1df7aac304d"
  },
  {
    "url": "blog/16/06/2020/Jupyter-Widgets/index.html",
    "revision": "6a161b9e4b71788906cb7ea85cf562a2"
  },
  {
    "url": "blog/16/07/2020/python-visualisation-templates/index.html",
    "revision": "30604d6129d5910e97601db035fb5e75"
  },
  {
    "url": "blog/18/08/2020/GM/index.html",
    "revision": "e38f9ccfa9069ac17119a1556ed63d42"
  },
  {
    "url": "blog/20/05/2020/Non-Numeric/index.html",
    "revision": "0de49106fff2c89f012f5663ecd4a2b1"
  },
  {
    "url": "blog/22/03/2020/contribute-blog-post/index.html",
    "revision": "2b2513ed86887297b34d8a6d2bdc62ce"
  },
  {
    "url": "blog/22/03/2020/datavizhub-guide/index.html",
    "revision": "7c9cee85ca2a714ec15219099accbed0"
  },
  {
    "url": "blog/24/06/2020/host-jupyter-notebook/index.html",
    "revision": "27e9701b59de0d2616c2499ca65b37fa"
  },
  {
    "url": "blog/26/08/2020/D3js-for-data-visualisation/index.html",
    "revision": "9321b656413681b99ae3e22cc9ce7a97"
  },
  {
    "url": "blog/28/02/2020/Urban-Observatories-hackathon/index.html",
    "revision": "b44664479e30640ec12cddcb8bec55d9"
  },
  {
    "url": "blog/30/09/2020/making-the-best-data-visualisations-in-excel/index.html",
    "revision": "73205ae46d71da4df6555e43a38909ae"
  },
  {
    "url": "blog/category/articles/index.html",
    "revision": "914992529f529707f0954f431f927d39"
  },
  {
    "url": "blog/category/articles/page/2/index.html",
    "revision": "c6a201eefc29741f4615513cb72130e4"
  },
  {
    "url": "blog/category/events/index.html",
    "revision": "cef279bd3044cef5c96e3a478b7f15dc"
  },
  {
    "url": "blog/category/tutorial/index.html",
    "revision": "457bf40bd2b5de55a5af7dda709a73fb"
  },
  {
    "url": "blog/index.html",
    "revision": "5515e8f460db82f73ed823aac67abb47"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "3e4b4a9cdd0c1515c119e4e0a7a6d1ea"
  },
  {
    "url": "blog/tag/best-practice/index.html",
    "revision": "b89044e4307a38a30d2a8147cc2271f1"
  },
  {
    "url": "blog/tag/blog/index.html",
    "revision": "b8091efc804533d580becd22daad2ffe"
  },
  {
    "url": "blog/tag/covid-19-mortality/index.html",
    "revision": "3665185dfe2b2c94c18e43bc0e69b172"
  },
  {
    "url": "blog/tag/covid-19-virus-sars-co-v-2/index.html",
    "revision": "b635ec6219ab033837d160e11d12fdb5"
  },
  {
    "url": "blog/tag/d-3-js/index.html",
    "revision": "e45ad8036ecf35cb6770a6dc39725b63"
  },
  {
    "url": "blog/tag/dash/index.html",
    "revision": "56b164d0287a5c441e8821ee936bda79"
  },
  {
    "url": "blog/tag/data-analytics/index.html",
    "revision": "f4886f243a3dbb60a79a1a3d84466fb2"
  },
  {
    "url": "blog/tag/data-engineering/index.html",
    "revision": "f408ab8128c25fc2b982c04b02347ca9"
  },
  {
    "url": "blog/tag/data-politics/index.html",
    "revision": "530fd8a3826ec481c8cf070bcf9e395d"
  },
  {
    "url": "blog/tag/dataviz/index.html",
    "revision": "fa4dab528a54e83a2f5722850d650177"
  },
  {
    "url": "blog/tag/deploy/index.html",
    "revision": "8108172d3eb1e0dc34323fe1ca218b86"
  },
  {
    "url": "blog/tag/effectiveness/index.html",
    "revision": "a54234a03521537033228cb255679cc9"
  },
  {
    "url": "blog/tag/effects/index.html",
    "revision": "dc59b663bd1066630e5e1e4e29d2389b"
  },
  {
    "url": "blog/tag/emotions/index.html",
    "revision": "a397787f82d5043aa524aa68f1d105c9"
  },
  {
    "url": "blog/tag/engaging-with-dataviz/index.html",
    "revision": "e0a0e59529f4e0caaf6eef8788edd0e2"
  },
  {
    "url": "blog/tag/epidemiology/index.html",
    "revision": "19cdeb2e2095431f4c2ade16c1bb7732"
  },
  {
    "url": "blog/tag/excel/index.html",
    "revision": "48d32a818e3ef2c5fe5bfc67f27f85ba"
  },
  {
    "url": "blog/tag/heroku/index.html",
    "revision": "c1624c7109cc663aa19cc1dc507c7edc"
  },
  {
    "url": "blog/tag/host/index.html",
    "revision": "e4f96d0c14463db3bcb6c9b3bd079f0c"
  },
  {
    "url": "blog/tag/html/index.html",
    "revision": "4209cf40bcae05936d0a931f82f98417"
  },
  {
    "url": "blog/tag/interactive/index.html",
    "revision": "e14c5caf6e193fb0859f1ab99ab4714a"
  },
  {
    "url": "blog/tag/javascript/index.html",
    "revision": "f3b0cb6bc64788003437023769ca43b5"
  },
  {
    "url": "blog/tag/jupyter-notebook/index.html",
    "revision": "efcd6e1a8cb45bef5b594b65072fb979"
  },
  {
    "url": "blog/tag/jupyter-widgets/index.html",
    "revision": "5bf5c3cf153bb74696090ae5f6df4e77"
  },
  {
    "url": "blog/tag/markdown/index.html",
    "revision": "019abc75693d7acd399999184f5af816"
  },
  {
    "url": "blog/tag/pandas/index.html",
    "revision": "ba591011bd1daf5ee2daa4aa8369cf71"
  },
  {
    "url": "blog/tag/pandemic/index.html",
    "revision": "4976d227911f1d9e01e9f7d68477567b"
  },
  {
    "url": "blog/tag/plotly/index.html",
    "revision": "9832c763a6f8c37bb694ad3d09b42045"
  },
  {
    "url": "blog/tag/python/index.html",
    "revision": "afd7bb1cc15e0a6e28cf841ae1a2a55d"
  },
  {
    "url": "blog/tag/r/index.html",
    "revision": "1417edce41610f47e0e7265370793e83"
  },
  {
    "url": "blog/tag/research-innovation/index.html",
    "revision": "62ba89c79a54aa3e8cd6819701dc3b36"
  },
  {
    "url": "blog/tag/shiny/index.html",
    "revision": "c4ae228e3952a95ec0b4b6fea1df407e"
  },
  {
    "url": "blog/tag/social-factors/index.html",
    "revision": "09fe81a8046a8f7a2b9c84a937009427"
  },
  {
    "url": "blog/tag/statistics/index.html",
    "revision": "dd4cfe78546482ed5b8c024aa6ceaf6d"
  },
  {
    "url": "blog/tag/template/index.html",
    "revision": "df68d75dcb6bab3ffe135e0b188f8215"
  },
  {
    "url": "blog/tag/urban-observatory/index.html",
    "revision": "4093afe424d7d3ad6173c26db2041391"
  },
  {
    "url": "blog/tag/web/index.html",
    "revision": "debea08d6d150289374b83ba26687308"
  },
  {
    "url": "c944440f07a9819c3f73bbb95aa91b6a/sp_labels2.png",
    "revision": "c944440f07a9819c3f73bbb95aa91b6a"
  },
  {
    "url": "c9c3554184cabbe232393039b19492c0/Theme2.png",
    "revision": "c9c3554184cabbe232393039b19492c0"
  },
  {
    "url": "ce0b325623f94aa7761c38e27508b1d6/rstudio3.png",
    "revision": "ce0b325623f94aa7761c38e27508b1d6"
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
    "revision": "d5d3068952ba6918fa2c887641c6954b"
  },
  {
    "url": "community/index.html",
    "revision": "b6ae5adaab4321472acbd1e14c75ab98"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-2f460365d2363c04bf3a.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-2f460365d2363c04bf3a.js.map",
    "revision": "95aae16ace2b4f6d2956a80a25b2fc05"
  },
  {
    "url": "component---src-pages-404-jsx-dcccba4be7df3e536172.js"
  },
  {
    "url": "component---src-pages-404-jsx-dcccba4be7df3e536172.js.map",
    "revision": "e683e8f1beb462cc8f91efac30e1afce"
  },
  {
    "url": "component---src-pages-about-jsx-f7f9af81a69d3ba204b0.js"
  },
  {
    "url": "component---src-pages-about-jsx-f7f9af81a69d3ba204b0.js.map",
    "revision": "81d03d0023a76edeca0318099038012b"
  },
  {
    "url": "component---src-pages-accessibility-jsx-24ac22314a49af5ee791.js"
  },
  {
    "url": "component---src-pages-accessibility-jsx-24ac22314a49af5ee791.js.map",
    "revision": "ca679016bbd2702b37def0b9ce163f21"
  },
  {
    "url": "component---src-pages-community-jsx-ca359fff0a25bd4bc7d6.js"
  },
  {
    "url": "component---src-pages-community-jsx-ca359fff0a25bd4bc7d6.js.map",
    "revision": "19c3e5eddd3ef13c69f7c31ebba35898"
  },
  {
    "url": "component---src-pages-events-jsx-ae7bd3a088bba0b363f9.js"
  },
  {
    "url": "component---src-pages-events-jsx-ae7bd3a088bba0b363f9.js.map",
    "revision": "03811be1ab034490020009e7c31e2244"
  },
  {
    "url": "component---src-pages-index-jsx-7785df8b8a011bb2fdb9.js"
  },
  {
    "url": "component---src-pages-index-jsx-7785df8b8a011bb2fdb9.js.map",
    "revision": "f0ae58f14ca924e04433d8d2b7e6a52e"
  },
  {
    "url": "component---src-pages-privacy-jsx-5f2e4a22b713b70a1cfc.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-5f2e4a22b713b70a1cfc.js.map",
    "revision": "845ea7261a7453e19ce3ae2bf19aa4c9"
  },
  {
    "url": "component---src-pages-search-jsx-fc7e90d345c22ff35f6c.js"
  },
  {
    "url": "component---src-pages-search-jsx-fc7e90d345c22ff35f6c.js.map",
    "revision": "c1b845d548a071cb9d32c158cfe7b14c"
  },
  {
    "url": "component---src-templates-blog-blog-category-template-jsx-40531e20f34f2c3eca8e.js"
  },
  {
    "url": "component---src-templates-blog-blog-category-template-jsx-40531e20f34f2c3eca8e.js.map",
    "revision": "18e50e8dafdd052280447926b5765e3b"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-custom-jsx-8d0f886f12c26708f6da.js"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-custom-jsx-8d0f886f12c26708f6da.js.map",
    "revision": "5cbee68fad92a85711d3113c067d5950"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-e1038adf5bee9bf3a065.js"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-e1038adf5bee9bf3a065.js.map",
    "revision": "d2170398f85940079f1ee780640bbb4f"
  },
  {
    "url": "component---src-templates-blog-blog-tag-template-jsx-7c498ac93de0b24ab3c7.js"
  },
  {
    "url": "component---src-templates-blog-blog-tag-template-jsx-7c498ac93de0b24ab3c7.js.map",
    "revision": "0d7909308d2b5fc04b47f30c6965ad04"
  },
  {
    "url": "component---src-templates-blog-blog-template-jsx-8f6e99a0cf508de25b11.js"
  },
  {
    "url": "component---src-templates-blog-blog-template-jsx-8f6e99a0cf508de25b11.js.map",
    "revision": "95267370bfab088918d4a9c48c4c5cd9"
  },
  {
    "url": "d208a25a86562dd71c41ba95f7546627/ggplotBlank.png",
    "revision": "d208a25a86562dd71c41ba95f7546627"
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
    "url": "de71a805-8c48e862b77a6cf5a636.js"
  },
  {
    "url": "de71a805-8c48e862b77a6cf5a636.js.map",
    "revision": "bc06d4a8c74709e5e727230578dedcac"
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
    "url": "e44d2e8c61221320a6dce9ec5016fe98/saveImg.png",
    "revision": "e44d2e8c61221320a6dce9ec5016fe98"
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
    "url": "e871a4b80ef736b0894bd99e6063d8a0/sp_final.png",
    "revision": "e871a4b80ef736b0894bd99e6063d8a0"
  },
  {
    "url": "eaab34a1458b2da67ef77c42d4aa54b8/Script.r",
    "revision": "eaab34a1458b2da67ef77c42d4aa54b8"
  },
  {
    "url": "events/index.html",
    "revision": "b4e1bf330f28ef74155c4149d15a3020"
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
    "url": "f2125eef0963be539792380e28a5d9ea/sp_label.png",
    "revision": "f2125eef0963be539792380e28a5d9ea"
  },
  {
    "url": "f3eeeefc72334f5f5c13a45b961ed8ce/data2.png",
    "revision": "f3eeeefc72334f5f5c13a45b961ed8ce"
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
    "revision": "49fbe19134042514172885f879ac8198"
  },
  {
    "url": "framework-f223a1bb25b5e97de2ca.js"
  },
  {
    "url": "framework-f223a1bb25b5e97de2ca.js.map",
    "revision": "4efeb1cb4a139186e8ae54149d4d3bd0"
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
    "revision": "acd14e449554935b1148a5e33eb570e3"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8d0b5c4f27de19af677b8e979a75d509"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "58490294dc1b3b14a9c7f283db50dc70"
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
    "revision": "f26457d2704aa95a42378da1a96c03d0"
  },
  {
    "url": "page-data/blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality/page-data.json",
    "revision": "a483a3fa856afdbf1fb9b682a9e9ef2f"
  },
  {
    "url": "page-data/blog/01/10/2020/moving-from-excel-to-r/page-data.json",
    "revision": "b782a623a5762dce0524240e54ff9143"
  },
  {
    "url": "page-data/blog/02/05/2020/dataviz-stats-1/page-data.json",
    "revision": "323a90061b2f1fd5a2894b6250d35814"
  },
  {
    "url": "page-data/blog/03/07/2020/Deploy-Your-Dash-App/page-data.json",
    "revision": "89733feabf2eef040553ea5ea80dceed"
  },
  {
    "url": "page-data/blog/03/07/2020/LearningPath-Introduction/page-data.json",
    "revision": "c493c80829c2ef985b972bcdfc7f2b54"
  },
  {
    "url": "page-data/blog/04/06/2020/dash-tutorial/page-data.json",
    "revision": "ef25fde52f0008301ae364eedb52b21e"
  },
  {
    "url": "page-data/blog/04/07/2020/LearningPath-Lab/page-data.json",
    "revision": "058c8cacd0ba82045b768e24670d984b"
  },
  {
    "url": "page-data/blog/05/07/2020/LearningPath-Workflow/page-data.json",
    "revision": "dc384c64cc075c33cd00739281b902e4"
  },
  {
    "url": "page-data/blog/05/09/2020/challenges_in_visualising_data/page-data.json",
    "revision": "4df5d2af03ffb4ffc8c889f84a6b9e4b"
  },
  {
    "url": "page-data/blog/06/04/2020/chart-choice/page-data.json",
    "revision": "848489482c193560b3df69e75e831fff"
  },
  {
    "url": "page-data/blog/06/05/2020/Colour-Schemes/page-data.json",
    "revision": "195ae9ae3e94ca304cdc5dce0cdbb5d7"
  },
  {
    "url": "page-data/blog/07/05/2020/dataviz-stats-2/page-data.json",
    "revision": "3c07fa7cacd687fb65f6725b1cb651d6"
  },
  {
    "url": "page-data/blog/09/09/2020/data_visualizations_social_role/page-data.json",
    "revision": "502086352c34eea2be1be4c9fe400749"
  },
  {
    "url": "page-data/blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/page-data.json",
    "revision": "64f1fc6e289b3f543cb5d1cd6f19ff2c"
  },
  {
    "url": "page-data/blog/12/06/2020/dash-tutorial-2/page-data.json",
    "revision": "b019f999cf453e20a0e5a33779265e26"
  },
  {
    "url": "page-data/blog/13/07/2020/Shiny-Template/page-data.json",
    "revision": "35e9843864379e881aff631284012066"
  },
  {
    "url": "page-data/blog/16/06/2020/Jupyter-Widgets/page-data.json",
    "revision": "74172bff079332b84b97a9f42b067942"
  },
  {
    "url": "page-data/blog/16/07/2020/python-visualisation-templates/page-data.json",
    "revision": "1b4c1c4f5f67aa6836ce8f723b383936"
  },
  {
    "url": "page-data/blog/18/08/2020/GM/page-data.json",
    "revision": "ed60594e041297d55aaf08e153178252"
  },
  {
    "url": "page-data/blog/20/05/2020/Non-Numeric/page-data.json",
    "revision": "9137ebb6d3e11dcf7f377fda6f2d920d"
  },
  {
    "url": "page-data/blog/22/03/2020/contribute-blog-post/page-data.json",
    "revision": "42de5d12e67e2e587ed6e16538a26725"
  },
  {
    "url": "page-data/blog/22/03/2020/datavizhub-guide/page-data.json",
    "revision": "be927d6532f62bff0916210b66ff2884"
  },
  {
    "url": "page-data/blog/24/06/2020/host-jupyter-notebook/page-data.json",
    "revision": "f7c574a81cc81d3f3320c54f4fb7e69a"
  },
  {
    "url": "page-data/blog/26/08/2020/D3js-for-data-visualisation/page-data.json",
    "revision": "46604b592f471072d4210305516c99ad"
  },
  {
    "url": "page-data/blog/28/02/2020/Urban-Observatories-hackathon/page-data.json",
    "revision": "705c90152d37fc8a7c1d5f1bc436ca69"
  },
  {
    "url": "page-data/blog/30/09/2020/making-the-best-data-visualisations-in-excel/page-data.json",
    "revision": "d7cffb6e4fedb8c6fa47cfdaaa63293f"
  },
  {
    "url": "page-data/blog/category/articles/page-data.json",
    "revision": "e2f0de968b470a0300f247b21e615fe0"
  },
  {
    "url": "page-data/blog/category/articles/page/2/page-data.json",
    "revision": "a13d48ebce92178ce039518e5ec3b043"
  },
  {
    "url": "page-data/blog/category/events/page-data.json",
    "revision": "bd76f71814e9225f8df4c27ff0a4c8b2"
  },
  {
    "url": "page-data/blog/category/tutorial/page-data.json",
    "revision": "04d73348c07944b6526cb29324b1cec1"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "3367ee4d62c930a1ec799ccad46baa90"
  },
  {
    "url": "page-data/blog/page/2/page-data.json",
    "revision": "86eadbf7bd6efbd135901f63a01cb00a"
  },
  {
    "url": "page-data/blog/tag/best-practice/page-data.json",
    "revision": "4d03e9897241f7e0a25c353796df1988"
  },
  {
    "url": "page-data/blog/tag/blog/page-data.json",
    "revision": "1f12c89ed51fb8381d68ab13375b619e"
  },
  {
    "url": "page-data/blog/tag/covid-19-mortality/page-data.json",
    "revision": "16196ba6e9e35333fa4878eafcdcb587"
  },
  {
    "url": "page-data/blog/tag/covid-19-virus-sars-co-v-2/page-data.json",
    "revision": "8dc29164fe1973fbc1ea7e3730339660"
  },
  {
    "url": "page-data/blog/tag/d-3-js/page-data.json",
    "revision": "03c34d1a9e1b3ecd3d732beb0b451536"
  },
  {
    "url": "page-data/blog/tag/dash/page-data.json",
    "revision": "dcde462750df06810ae9cbc0c631b6c9"
  },
  {
    "url": "page-data/blog/tag/data-analytics/page-data.json",
    "revision": "ea624db45aa71bb7cd82b1df963758bc"
  },
  {
    "url": "page-data/blog/tag/data-engineering/page-data.json",
    "revision": "f9935a4806346d445b421d17867f3295"
  },
  {
    "url": "page-data/blog/tag/data-politics/page-data.json",
    "revision": "a592e4533ca1738b1a3cd81c89bd5f6a"
  },
  {
    "url": "page-data/blog/tag/dataviz/page-data.json",
    "revision": "78bac0bc6341b2cac7fe77f68f7c358a"
  },
  {
    "url": "page-data/blog/tag/deploy/page-data.json",
    "revision": "e7d5f900624020e8229682a127090511"
  },
  {
    "url": "page-data/blog/tag/effectiveness/page-data.json",
    "revision": "4562ecbbb73c1e5c987ede2c31a85c3a"
  },
  {
    "url": "page-data/blog/tag/effects/page-data.json",
    "revision": "74c18ca55d389f3fac1a1de7a46c5a49"
  },
  {
    "url": "page-data/blog/tag/emotions/page-data.json",
    "revision": "bec2481a338169efa7d5d8df5ca5af96"
  },
  {
    "url": "page-data/blog/tag/engaging-with-dataviz/page-data.json",
    "revision": "cd4507f9666b10142691a9ad988efc3d"
  },
  {
    "url": "page-data/blog/tag/epidemiology/page-data.json",
    "revision": "73f4c698bc2f69a207f6982d96341657"
  },
  {
    "url": "page-data/blog/tag/excel/page-data.json",
    "revision": "f4a0948a4913f2ade67c59c8464ee68b"
  },
  {
    "url": "page-data/blog/tag/heroku/page-data.json",
    "revision": "6ab40dc4cee2a723df0269498c3154fb"
  },
  {
    "url": "page-data/blog/tag/host/page-data.json",
    "revision": "ce33b4851a6a66ae07d146d1f0250eeb"
  },
  {
    "url": "page-data/blog/tag/html/page-data.json",
    "revision": "020f4751a1f1aa28ce3ed8cc79970e97"
  },
  {
    "url": "page-data/blog/tag/interactive/page-data.json",
    "revision": "f0b742777b456bc803244eb4fa82d021"
  },
  {
    "url": "page-data/blog/tag/javascript/page-data.json",
    "revision": "1803f800dad5acf1c9c3ada195fa837e"
  },
  {
    "url": "page-data/blog/tag/jupyter-notebook/page-data.json",
    "revision": "4241e893671d587764310b0db468fd1b"
  },
  {
    "url": "page-data/blog/tag/jupyter-widgets/page-data.json",
    "revision": "65c2f630f8bfe2a7a626b77bcd6d7099"
  },
  {
    "url": "page-data/blog/tag/markdown/page-data.json",
    "revision": "1b07c6c95b8d3a38d10b5066cb86613c"
  },
  {
    "url": "page-data/blog/tag/pandas/page-data.json",
    "revision": "04f8ef3d1d2e06f0b9ae62c7bd7bec3c"
  },
  {
    "url": "page-data/blog/tag/pandemic/page-data.json",
    "revision": "ccaec1c39f1cf42cc42a1d3b381a6b01"
  },
  {
    "url": "page-data/blog/tag/plotly/page-data.json",
    "revision": "dc5a5eb46a681915bc526f83b307bd4c"
  },
  {
    "url": "page-data/blog/tag/python/page-data.json",
    "revision": "d1bd59836a0e46d22fe9d698c8dab474"
  },
  {
    "url": "page-data/blog/tag/r/page-data.json",
    "revision": "4e863a2e69b2d5628572424835b0f3fc"
  },
  {
    "url": "page-data/blog/tag/research-innovation/page-data.json",
    "revision": "a02cc8a2041f87b3a1a9e44754738b08"
  },
  {
    "url": "page-data/blog/tag/shiny/page-data.json",
    "revision": "c1becfdae8c41da1a5c3811273865a72"
  },
  {
    "url": "page-data/blog/tag/social-factors/page-data.json",
    "revision": "7bfc9c6a278128c801a98a1191d17a25"
  },
  {
    "url": "page-data/blog/tag/statistics/page-data.json",
    "revision": "6fbbf153a5b5cdbaa5c5050dae0d23f0"
  },
  {
    "url": "page-data/blog/tag/template/page-data.json",
    "revision": "2daa75ce32a86c73eab41530309a8a76"
  },
  {
    "url": "page-data/blog/tag/urban-observatory/page-data.json",
    "revision": "a31275b634fa0633ac649870bd38a26c"
  },
  {
    "url": "page-data/blog/tag/web/page-data.json",
    "revision": "71d9d521a9d4d039e7d32bdc8432eb22"
  },
  {
    "url": "page-data/community/page-data.json",
    "revision": "8c280a82c6b671ef71c90c89987c7ccd"
  },
  {
    "url": "page-data/events/page-data.json",
    "revision": "65be127f67ae8a8bca2c732485dabbe1"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "c5d1d7609950c11fc62538f883f16666"
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
    "revision": "73493e169822ba2e6677d4d3d83c811d"
  },
  {
    "url": "page-data/sq/d/3370916995.json",
    "revision": "04894b4a04a20d8072d61a70f1fde517"
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
    "url": "polyfill-7c91c3c75f4fd4c545e0.js"
  },
  {
    "url": "polyfill-7c91c3c75f4fd4c545e0.js.map",
    "revision": "6472cc9abca0a60f8ee8d0804738135b"
  },
  {
    "url": "privacy/index.html",
    "revision": "7c344ef19340abdaf842edfbca24a9e6"
  },
  {
    "url": "search/index.html",
    "revision": "095e6cd2faaddfa24057e111cad2768c"
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
    "url": "static/63f5c4e8b7a603344500bd624dc9dbf9/497c6/thumb.png"
  },
  {
    "url": "static/63f5c4e8b7a603344500bd624dc9dbf9/69585/thumb.png"
  },
  {
    "url": "static/63f5c4e8b7a603344500bd624dc9dbf9/db955/thumb.png"
  },
  {
    "url": "static/63f5c4e8b7a603344500bd624dc9dbf9/ee604/thumb.png"
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
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/497c6/thumb.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/69585/thumb.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/ac98b/thumb.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/ee604/thumb.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/f3583/thumb.png"
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
    "url": "styles.83a810c82a2e6454e337.css"
  },
  {
    "url": "webpack-runtime-4b22949fc078b8db3a90.js"
  },
  {
    "url": "webpack-runtime-4b22949fc078b8db3a90.js.map",
    "revision": "5c943346992043b8fe425d2490c46774"
  },
  {
    "url": "webpack.stats.json",
    "revision": "6c1e23156160e8117c021e9eaf50fea1"
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
  if (!resources || !(await caches.match(`/app-824f2a2bd4bb09b0e290.js`))) {
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
