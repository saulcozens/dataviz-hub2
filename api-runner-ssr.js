var plugins = [{
      plugin: require('C:/dataviz-hub/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/dataviz-hub/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[{"resolve":"C:/dataviz-hub/node_modules/gatsby-remark-images","id":"3626c0e0-58d4-5046-b0e5-cb7731a052f2","name":"gatsby-remark-images","version":"3.1.46","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]},{"resolve":"C:/dataviz-hub/node_modules/gatsby-remark-prismjs","id":"b8d3a2f5-5540-5699-b862-153e57b2c618","name":"gatsby-remark-prismjs","version":"3.3.33","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":[],"ssrAPIs":[]}],"extensions":[".mdx",".md"],"defaultLayouts":{"default":"C:\\dataviz-hub\\src\\templates\\blogPostTemplate.jsx"},"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-embed-video","options":{"maxwidth":800,"ratio":1.77,"Height":400,"related":false,"noIframeBorder":true,"urlOverrides":[{"id":"youtube"}]}},{"resolve":"gatsby-remark-images","options":{"maxWidth":1000,"quality":100}},{"resolve":"gatsby-remark-responsive-iframe","options":{"wrapperStyle":"margin-bottom: 1.0725rem, margin-left: auto, margin-right: auto, margin-top: 2rem, width: 800px, height: 600px"}},{"resolve":"gatsby-remark-prismjs","options":{"classPrefix":"language-","inlineCodeMarker":null,"aliases":{},"showLineNumbers":true,"noInlineHighlight":false}},{"resolve":"gatsby-remark-copy-linked-files","options":{"ignoreFileExtensions":["png","jpg","jpeg","bmp","tiff"]}}]},
    },{
      plugin: require('C:/dataviz-hub/node_modules/gatsby-plugin-load-script/gatsby-ssr'),
      options: {"plugins":[],"src":"https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js"},
    },{
      plugin: require('C:/dataviz-hub/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/dataviz-hub/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"dataviz-hub-tuos","short_name":"dvh-tuos","start_url":"/","background_color":"#ffffff","theme_color":"#ffffff","display":"minimal-ui","icon":"src/images/icon.png"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
