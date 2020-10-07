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
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-bb61253b4a33febf6c6a.js"
  },
  {
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-bb61253b4a33febf6c6a.js.map",
    "revision": "973d8e99a9bc0bc9878e67420db393c3"
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
    "revision": "6676aabc8d3f95655f0d2957d2818762"
  },
  {
    "url": "404/index.html",
    "revision": "31f166e91f5ced9be265e95dbf75d97a"
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
    "url": "546f98687917de6b9c08768cac072b8c/index.mdx",
    "revision": "546f98687917de6b9c08768cac072b8c"
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
    "revision": "0ccfd9ebd0b1a60d4e37738d0f02f1fd"
  },
  {
    "url": "acc11559c25bce5ee3d9a689a3c602a8/output_14_1.png",
    "revision": "acc11559c25bce5ee3d9a689a3c602a8"
  },
  {
    "url": "accessibility/index.html",
    "revision": "77448c4710f85b477971cc1b1a2bd9a1"
  },
  {
    "url": "adb95786ee5c22fc51746113cb541f06/Fig4.png",
    "revision": "adb95786ee5c22fc51746113cb541f06"
  },
  {
    "url": "app-f3a65b01799c598feb39.js"
  },
  {
    "url": "app-f3a65b01799c598feb39.js.map",
    "revision": "1ab02f5f9959eaa6afb80ba7e297b985"
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
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-b366badc5a76281f26e1.js"
  },
  {
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-b366badc5a76281f26e1.js.map",
    "revision": "c7cdf24e96bd12d5812cb0d76b2b5aa5"
  },
  {
    "url": "b98bc7c3-5fa9d1a8c83bfbad3d62.js"
  },
  {
    "url": "b98bc7c3-5fa9d1a8c83bfbad3d62.js.map",
    "revision": "38328c19441c5bde219173aca94d5d9c"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-5ee3091fea547f1a230e.js"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-5ee3091fea547f1a230e.js.map",
    "revision": "343c8a9abf0cb67d434f94b10e7cfec0"
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
    "revision": "0f9ee914ecf07e81dddacbc39448a8c8"
  },
  {
    "url": "blog/01/10/2020/moving_from_excel_to_r/index.html",
    "revision": "0f8787a50b8d6f329f1d42e63a1496f6"
  },
  {
    "url": "blog/02/05/2020/dataviz_stats_1/index.html",
    "revision": "289e4657d7e69de14e7915fcbe458257"
  },
  {
    "url": "blog/03/07/2020/Deploy_Your_Dash_App/index.html",
    "revision": "04b115ba9d0e3da47f4bcf49e32f5f87"
  },
  {
    "url": "blog/03/07/2020/LearningPath_Introduction/index.html",
    "revision": "caf6daf352e809b8ab474bfe959ede60"
  },
  {
    "url": "blog/04/06/2020/dash_tutorial/index.html",
    "revision": "0be0c04b55fdf05b2bfcb429faa720a8"
  },
  {
    "url": "blog/04/07/2020/LearningPath_Lab/index.html",
    "revision": "20e5ce004f5621643cb92a9f47b972b1"
  },
  {
    "url": "blog/05/07/2020/LearningPath_Workflow/index.html",
    "revision": "f166f4514dd6cbb2f0722436698eb6a6"
  },
  {
    "url": "blog/05/09/2020/challenges_in_visualising_data/index.html",
    "revision": "efcade088becafed74adfb8b7501a6c4"
  },
  {
    "url": "blog/06/04/2020/chart_choice/index.html",
    "revision": "2951c7f3c5730394a9ad1c234bd4ad3b"
  },
  {
    "url": "blog/06/05/2020/Colour_Schemes/index.html",
    "revision": "215ee837e6bba6a6fb640f026d553cd5"
  },
  {
    "url": "blog/07/05/2020/dataviz_stats_2/index.html",
    "revision": "096f98daae197917db8e6500e75b4689"
  },
  {
    "url": "blog/09/09/2020/data_visualizations_social_role/index.html",
    "revision": "da193ae5e6ff23399a8de1e9b7b2d127"
  },
  {
    "url": "blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/index.html",
    "revision": "0ae0f024103a7b65fc518ec704cd0b99"
  },
  {
    "url": "blog/12/06/2020/dash_tutorial_2/index.html",
    "revision": "43385825889eb74c88e024ec5acd68b8"
  },
  {
    "url": "blog/13/07/2020/Shiny_Template/index.html",
    "revision": "b5534ad77a0573184ae17c1754018e03"
  },
  {
    "url": "blog/16/06/2020/Jupyter_Widgets/index.html",
    "revision": "7d96072ee1ec7e05be54dc34951772b7"
  },
  {
    "url": "blog/16/07/2020/python_visualisation_templates/index.html",
    "revision": "f908fd66f7cd66efc89efe114ef8bb64"
  },
  {
    "url": "blog/18/08/2020/GM/index.html",
    "revision": "693c59202f7d5e67dddb1d65223e904a"
  },
  {
    "url": "blog/20/05/2020/Non_Numeric/index.html",
    "revision": "f0e10f52013739787d77a8681382d10a"
  },
  {
    "url": "blog/22/03/2020/contribute_blog_post/index.html",
    "revision": "3312951a878b820108ee2e2f79d027cf"
  },
  {
    "url": "blog/22/03/2020/datavizhub_guide/index.html",
    "revision": "89cefa2091c57f7b35469cdc7f167a94"
  },
  {
    "url": "blog/24/06/2020/host_jupyter_notebook/index.html",
    "revision": "09c0427b65dd29bae1e3e154c0c0eb62"
  },
  {
    "url": "blog/26/08/2020/D3js_for_data_visualisation/index.html",
    "revision": "24a9189953217a48700906ac6547ddde"
  },
  {
    "url": "blog/28/02/2020/Urban_Observatories_hackathon/index.html",
    "revision": "1a0a5e71995e13c662d86e1154f09e21"
  },
  {
    "url": "blog/30/09/2020/making_the_best_data_visualisations_in_excel/index.html",
    "revision": "8c45aceca0db427eb415ea6c8f38ae5d"
  },
  {
    "url": "blog/category/articles/index.html",
    "revision": "9fb105afea0891025e3535ab5ef616b6"
  },
  {
    "url": "blog/category/articles/page/2/index.html",
    "revision": "ca8d8a858582d2c267de537c07b33f59"
  },
  {
    "url": "blog/category/events/index.html",
    "revision": "d3808a27ceee71cb55b40a9c32797959"
  },
  {
    "url": "blog/category/tutorial/index.html",
    "revision": "c050b3deee863e048eddb63545198784"
  },
  {
    "url": "blog/index.html",
    "revision": "bd520b3458f97e623b550b8ffb6b08c9"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "b33c538ea9145bcced8170883ffdef64"
  },
  {
    "url": "blog/tag/best-practice/index.html",
    "revision": "d8d502a0cf50bde9edbb48f1fd69fa29"
  },
  {
    "url": "blog/tag/blog/index.html",
    "revision": "0b92e6d659257817a93bac0317c652db"
  },
  {
    "url": "blog/tag/covid-19-mortality/index.html",
    "revision": "bf708b211e5fc465a49d000c45e9e74a"
  },
  {
    "url": "blog/tag/covid-19-virus-sars-co-v-2/index.html",
    "revision": "ce8b056958a6e28705049a81ab63f379"
  },
  {
    "url": "blog/tag/d-3-js/index.html",
    "revision": "9dfd50f9b3eacbac718c2021c9080dfe"
  },
  {
    "url": "blog/tag/dash/index.html",
    "revision": "d27e112d44f43bf9486883c5e6afbba7"
  },
  {
    "url": "blog/tag/data-analytics/index.html",
    "revision": "9a2a695e0c8df0fdb4b22214af06e4c9"
  },
  {
    "url": "blog/tag/data-engineering/index.html",
    "revision": "574ee43695c4e6e0a00907aee9b9b84b"
  },
  {
    "url": "blog/tag/data-politics/index.html",
    "revision": "68ed150d7f6fe03044def851bbebee3a"
  },
  {
    "url": "blog/tag/dataviz/index.html",
    "revision": "45197974cd6ff2e5fcafebbec84c3035"
  },
  {
    "url": "blog/tag/deploy/index.html",
    "revision": "5b69438d54f97b36f11014f3ee23991b"
  },
  {
    "url": "blog/tag/effectiveness/index.html",
    "revision": "b53815d1c7dfcb8945db38ace413e9aa"
  },
  {
    "url": "blog/tag/effects/index.html",
    "revision": "5fb234a8ef6a490bc71be6324dd0772f"
  },
  {
    "url": "blog/tag/emotions/index.html",
    "revision": "94c09e433535bd5bf4386de65e7c03fe"
  },
  {
    "url": "blog/tag/engaging-with-dataviz/index.html",
    "revision": "0011e1bafef3d016092ee644a2681787"
  },
  {
    "url": "blog/tag/epidemiology/index.html",
    "revision": "4f280af166cd11ad4ec4008d644970d2"
  },
  {
    "url": "blog/tag/excel/index.html",
    "revision": "44448643f69236a4008955c0a65efef4"
  },
  {
    "url": "blog/tag/heroku/index.html",
    "revision": "14fab9e2efc9c6d51307ea163d12878d"
  },
  {
    "url": "blog/tag/host/index.html",
    "revision": "f351d229abba04391e1ae6bcd6c773e7"
  },
  {
    "url": "blog/tag/html/index.html",
    "revision": "4bb6637c2398ba5efb92964bce9121b3"
  },
  {
    "url": "blog/tag/interactive/index.html",
    "revision": "1b4d5f3c245e72a48848772bf043144b"
  },
  {
    "url": "blog/tag/javascript/index.html",
    "revision": "21f7f56503311ee400f0f2c19e234aa2"
  },
  {
    "url": "blog/tag/jupyter-notebook/index.html",
    "revision": "035b1165ac61aa17845a1d99591a444e"
  },
  {
    "url": "blog/tag/jupyter-widgets/index.html",
    "revision": "80e9f523e95617f0b38a401f83ef35be"
  },
  {
    "url": "blog/tag/markdown/index.html",
    "revision": "53e51e4a79a264ac656f9772e1e9bc8c"
  },
  {
    "url": "blog/tag/pandas/index.html",
    "revision": "4815ecad9d445315201c2f5c35eb04f4"
  },
  {
    "url": "blog/tag/pandemic/index.html",
    "revision": "c4eacb74a9c96e96c05cf6a14f854856"
  },
  {
    "url": "blog/tag/plotly/index.html",
    "revision": "2a4968fc558976dcbdfeb4984f783810"
  },
  {
    "url": "blog/tag/python/index.html",
    "revision": "bee82b58b8e741525da79c3670e595e5"
  },
  {
    "url": "blog/tag/r/index.html",
    "revision": "9f3c058d3bac4897380ccbdc06b4ca40"
  },
  {
    "url": "blog/tag/research-innovation/index.html",
    "revision": "8dd8fe9eb31ea5811f7858c20afb9f97"
  },
  {
    "url": "blog/tag/shiny/index.html",
    "revision": "36937e35c1c555e8003ed73aacd50589"
  },
  {
    "url": "blog/tag/social-factors/index.html",
    "revision": "3c5ee4adedfc6f3c223f0961d2b9e87a"
  },
  {
    "url": "blog/tag/statistics/index.html",
    "revision": "e2763612cdd28334f746e79bbf4180a0"
  },
  {
    "url": "blog/tag/template/index.html",
    "revision": "e760d3ad84752d881bda654453b6ee1b"
  },
  {
    "url": "blog/tag/urban-observatory/index.html",
    "revision": "ece316ce63cacb2501af0c0aa509b0cf"
  },
  {
    "url": "blog/tag/web/index.html",
    "revision": "af41a614bdc3e5595b2f05a5775a36f4"
  },
  {
    "url": "c944440f07a9819c3f73bbb95aa91b6a/sp_labels2.png",
    "revision": "c944440f07a9819c3f73bbb95aa91b6a"
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
    "revision": "e621d769d42e671611e3ffab9ed274d3"
  },
  {
    "url": "community/index.html",
    "revision": "f8ae1b90f02a66a0dee7535cb2f51277"
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
    "url": "component---src-pages-accessibility-jsx-9ef5e5fda94a4e8efc9e.js"
  },
  {
    "url": "component---src-pages-accessibility-jsx-9ef5e5fda94a4e8efc9e.js.map",
    "revision": "84afa8eac5c6219043b3bab11792a14b"
  },
  {
    "url": "component---src-pages-community-jsx-be0dc5bbd40f7e68c8aa.js"
  },
  {
    "url": "component---src-pages-community-jsx-be0dc5bbd40f7e68c8aa.js.map",
    "revision": "1ee0c8f7e10cd96b0fe39ef293c202af"
  },
  {
    "url": "component---src-pages-events-jsx-2ac8411959a571fe4f8b.js"
  },
  {
    "url": "component---src-pages-events-jsx-2ac8411959a571fe4f8b.js.map",
    "revision": "fe15d0bc689cea45f27c5809ddfb8d6e"
  },
  {
    "url": "component---src-pages-index-jsx-479823f9386f640c73e1.js"
  },
  {
    "url": "component---src-pages-index-jsx-479823f9386f640c73e1.js.map",
    "revision": "fdec05b3c4d51cd3800051086868ac10"
  },
  {
    "url": "component---src-pages-privacy-jsx-e56fb61ad827c311d00c.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-e56fb61ad827c311d00c.js.map",
    "revision": "50c153b30977f94d18a26042d94a9ca4"
  },
  {
    "url": "component---src-pages-search-jsx-054a17bfc43ed2ba13d7.js"
  },
  {
    "url": "component---src-pages-search-jsx-054a17bfc43ed2ba13d7.js.map",
    "revision": "f41bd5cb4c615cf0b43cefa8910ebd16"
  },
  {
    "url": "component---src-templates-blog-blog-category-template-jsx-eff1b85c146aa58610d7.js"
  },
  {
    "url": "component---src-templates-blog-blog-category-template-jsx-eff1b85c146aa58610d7.js.map",
    "revision": "cd53a90605fc723838e9495f2f681efc"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-custom-jsx-a450afac5cbfe6c3ad28.js"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-custom-jsx-a450afac5cbfe6c3ad28.js.map",
    "revision": "6b82ce6c4e77b0c2a7012ae791ab3799"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-392344a1cb60ace1dded.js"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-392344a1cb60ace1dded.js.map",
    "revision": "ef168567a66bf3d5041e1c40b5e3b632"
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
    "url": "e871a4b80ef736b0894bd99e6063d8a0/sp_final.png",
    "revision": "e871a4b80ef736b0894bd99e6063d8a0"
  },
  {
    "url": "eaab34a1458b2da67ef77c42d4aa54b8/Script.r",
    "revision": "eaab34a1458b2da67ef77c42d4aa54b8"
  },
  {
    "url": "events/index.html",
    "revision": "48bbf361368605758886ea2a2ab1e1a8"
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
    "revision": "4f8a42e27666abfdfc1b547431bcd3a7"
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
    "revision": "dbdf98b1d6528e9385689b4a84a36a68"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8d0b5c4f27de19af677b8e979a75d509"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "bc1777da5a2766b114a2ce9f435e03e2"
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
    "revision": "d145abc7a34fc940bdd4934324164871"
  },
  {
    "url": "page-data/blog/01/06/2020/visualising_high_risk_areas_for_covid_19_mortality/page-data.json",
    "revision": "3ad31b6c6c54b4b9871b7cc61f402c16"
  },
  {
    "url": "page-data/blog/01/10/2020/moving_from_excel_to_r/page-data.json",
    "revision": "d501f0a17dd928b34098bfa5f9d4c290"
  },
  {
    "url": "page-data/blog/02/05/2020/dataviz_stats_1/page-data.json",
    "revision": "1daccae1a81562c879c37476f657e172"
  },
  {
    "url": "page-data/blog/03/07/2020/Deploy_Your_Dash_App/page-data.json",
    "revision": "5b04ac32fc3388f56ab220aa18163e90"
  },
  {
    "url": "page-data/blog/03/07/2020/LearningPath_Introduction/page-data.json",
    "revision": "b6063850bee0bd24958bf0f3bd560a6b"
  },
  {
    "url": "page-data/blog/04/06/2020/dash_tutorial/page-data.json",
    "revision": "9e58d9c43fdbe8db5462e4bec1d10115"
  },
  {
    "url": "page-data/blog/04/07/2020/LearningPath_Lab/page-data.json",
    "revision": "aa1a3dabe879957e20260a5051f7047f"
  },
  {
    "url": "page-data/blog/05/07/2020/LearningPath_Workflow/page-data.json",
    "revision": "47247840534df96129b30abd401076f0"
  },
  {
    "url": "page-data/blog/05/09/2020/challenges_in_visualising_data/page-data.json",
    "revision": "e49d515d9b37f75470ef77a11e7f2aee"
  },
  {
    "url": "page-data/blog/06/04/2020/chart_choice/page-data.json",
    "revision": "a140fdd3e13f334997410a6e490cbbd1"
  },
  {
    "url": "page-data/blog/06/05/2020/Colour_Schemes/page-data.json",
    "revision": "2bdcedb2abc3c70c0e8f7d78cfc69d02"
  },
  {
    "url": "page-data/blog/07/05/2020/dataviz_stats_2/page-data.json",
    "revision": "df7f290d7d7fdadd679f2fa65fd29758"
  },
  {
    "url": "page-data/blog/09/09/2020/data_visualizations_social_role/page-data.json",
    "revision": "8e6e888a0fd14169c057e51b4d0c2332"
  },
  {
    "url": "page-data/blog/11/06/2020/simple_data_visualisations_have_become_key_to_communicating_about_the_COVID-19_pandemic/page-data.json",
    "revision": "09ec9876a25d1c714835b8690ae72c96"
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
    "revision": "f14c7a04d2926ce7a2c13e00a5520b33"
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
    "revision": "faac8936293bdf0be8ca2f8bf9efe219"
  },
  {
    "url": "page-data/blog/22/03/2020/datavizhub_guide/page-data.json",
    "revision": "fd35667bec476ac985d9946a60b83e1f"
  },
  {
    "url": "page-data/blog/24/06/2020/host_jupyter_notebook/page-data.json",
    "revision": "c8b826be00619d4cc46c902818dece72"
  },
  {
    "url": "page-data/blog/26/08/2020/D3js_for_data_visualisation/page-data.json",
    "revision": "7b37fe49950f353b5414ab52d42d9d47"
  },
  {
    "url": "page-data/blog/28/02/2020/Urban_Observatories_hackathon/page-data.json",
    "revision": "ce078a35b515060d1007ae2ee19ea809"
  },
  {
    "url": "page-data/blog/30/09/2020/making_the_best_data_visualisations_in_excel/page-data.json",
    "revision": "4377f8d0b118398149c89b38b0b19cd6"
  },
  {
    "url": "page-data/blog/category/articles/page-data.json",
    "revision": "e38ae29e52076ef57cd9ab3daf079d60"
  },
  {
    "url": "page-data/blog/category/articles/page/2/page-data.json",
    "revision": "18e8cbc055e02f8d8f1c19c97acda513"
  },
  {
    "url": "page-data/blog/category/events/page-data.json",
    "revision": "2044a92deeb7bf1bbf87528ffa1bc21a"
  },
  {
    "url": "page-data/blog/category/tutorial/page-data.json",
    "revision": "f9fb98e1abbe364e215fa89478f95b43"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "a3dffe3c62ab6d4d1ee42f77722808e5"
  },
  {
    "url": "page-data/blog/page/2/page-data.json",
    "revision": "cec70e26836bc1a6cc48cf074e5e7500"
  },
  {
    "url": "page-data/blog/tag/best-practice/page-data.json",
    "revision": "3b92f4ee5358e40e2cd69f0d4909eb28"
  },
  {
    "url": "page-data/blog/tag/blog/page-data.json",
    "revision": "95d7ffdf41b422b9060084a05f874ae0"
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
    "revision": "335f215537b6fc45d8d078764639dcab"
  },
  {
    "url": "page-data/blog/tag/dash/page-data.json",
    "revision": "db1bafc2782fc43bec7d80676d875955"
  },
  {
    "url": "page-data/blog/tag/data-analytics/page-data.json",
    "revision": "3a08ea1fd3b621919df42da41f500a85"
  },
  {
    "url": "page-data/blog/tag/data-engineering/page-data.json",
    "revision": "7696f53c5c8134097e371eba77fb1c5b"
  },
  {
    "url": "page-data/blog/tag/data-politics/page-data.json",
    "revision": "a592e4533ca1738b1a3cd81c89bd5f6a"
  },
  {
    "url": "page-data/blog/tag/dataviz/page-data.json",
    "revision": "c8dd1f62f2ebd55197f795a269a4e108"
  },
  {
    "url": "page-data/blog/tag/deploy/page-data.json",
    "revision": "b4c62ab472026d7866b207e180bfbbf7"
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
    "revision": "3c6a01d78777ab328085b4a28495280d"
  },
  {
    "url": "page-data/blog/tag/heroku/page-data.json",
    "revision": "5a819372f80270a7115c679733e5edf8"
  },
  {
    "url": "page-data/blog/tag/host/page-data.json",
    "revision": "d42a6f287435d7710ce71e2128906968"
  },
  {
    "url": "page-data/blog/tag/html/page-data.json",
    "revision": "386bc08c10a00e2dc0dfb0be389538d5"
  },
  {
    "url": "page-data/blog/tag/interactive/page-data.json",
    "revision": "a199576632b1b232464647d0bdbb862c"
  },
  {
    "url": "page-data/blog/tag/javascript/page-data.json",
    "revision": "f8abd1e57b83228f3d0eaf0603fdd921"
  },
  {
    "url": "page-data/blog/tag/jupyter-notebook/page-data.json",
    "revision": "dc34d4fffee8736a0c777167d302b088"
  },
  {
    "url": "page-data/blog/tag/jupyter-widgets/page-data.json",
    "revision": "22a6ec9fb87b9e5b3dffda77593cc65e"
  },
  {
    "url": "page-data/blog/tag/markdown/page-data.json",
    "revision": "fdd2078c0a5c8eab3b963a65fcd32096"
  },
  {
    "url": "page-data/blog/tag/pandas/page-data.json",
    "revision": "be539a03fbb0a2b816a2f982a76e6d33"
  },
  {
    "url": "page-data/blog/tag/pandemic/page-data.json",
    "revision": "ccaec1c39f1cf42cc42a1d3b381a6b01"
  },
  {
    "url": "page-data/blog/tag/plotly/page-data.json",
    "revision": "09999ac164d9b746d6fd29f685eab486"
  },
  {
    "url": "page-data/blog/tag/python/page-data.json",
    "revision": "7920539b8dada1037cc14d72a04c07af"
  },
  {
    "url": "page-data/blog/tag/r/page-data.json",
    "revision": "29a0a9062b1019a9857786f289cc1ae1"
  },
  {
    "url": "page-data/blog/tag/research-innovation/page-data.json",
    "revision": "cf36cd73788f1cfd2274e00b00abd59d"
  },
  {
    "url": "page-data/blog/tag/shiny/page-data.json",
    "revision": "2c2f54e13516a0040b0f593a7f6ff858"
  },
  {
    "url": "page-data/blog/tag/social-factors/page-data.json",
    "revision": "7bfc9c6a278128c801a98a1191d17a25"
  },
  {
    "url": "page-data/blog/tag/statistics/page-data.json",
    "revision": "fe5a7756b5b6b5dc0ff75be051115a09"
  },
  {
    "url": "page-data/blog/tag/template/page-data.json",
    "revision": "e9b9adfc330d66a7edd588448f5108d7"
  },
  {
    "url": "page-data/blog/tag/urban-observatory/page-data.json",
    "revision": "d285d8e17e4e5c8df0bd69fbf8b7818d"
  },
  {
    "url": "page-data/blog/tag/web/page-data.json",
    "revision": "e431a4ce2699548bc1018f5c7fa37c08"
  },
  {
    "url": "page-data/community/page-data.json",
    "revision": "8c280a82c6b671ef71c90c89987c7ccd"
  },
  {
    "url": "page-data/events/page-data.json",
    "revision": "cac65e5ef07e55bcd619ad9e7d504cd6"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "751445078862a28e06ab68c832fe9ec8"
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
    "revision": "7920f8cc2d2cc9f4b76f6f9ae8b5b9b1"
  },
  {
    "url": "page-data/sq/d/3370916995.json",
    "revision": "6ffc0288278f4824abfca5b975c26e5f"
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
    "revision": "a1a773919e71809124aefa7a270bf044"
  },
  {
    "url": "search/index.html",
    "revision": "0359db4a777aa1d1bd21af4106990c78"
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
    "url": "styles.b4efe2d8f104a8962bb2.css"
  },
  {
    "url": "webpack-runtime-8f12266c6819f23ed24f.js"
  },
  {
    "url": "webpack-runtime-8f12266c6819f23ed24f.js.map",
    "revision": "63a0dddcac0af411bba292732a1b875a"
  },
  {
    "url": "webpack.stats.json",
    "revision": "8ee5e3384894841e9ceff32f1882b645"
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
  if (!resources || !(await caches.match(`/app-f3a65b01799c598feb39.js`))) {
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
