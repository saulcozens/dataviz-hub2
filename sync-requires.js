const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-template-jsx": hot(preferDefault(require("C:\\dataviz-hub\\src\\templates\\blogPostTemplate.jsx"))),
  "component---src-templates-blog-post-template-custom-jsx": hot(preferDefault(require("C:\\dataviz-hub\\src\\templates\\blogPostTemplate_custom.jsx"))),
  "component---src-templates-blog-template-jsx": hot(preferDefault(require("C:\\dataviz-hub\\src\\templates\\blogTemplate.jsx"))),
  "component---src-templates-blog-tag-template-jsx": hot(preferDefault(require("C:\\dataviz-hub\\src\\templates\\blogTagTemplate.jsx"))),
  "component---src-templates-blog-category-template-jsx": hot(preferDefault(require("C:\\dataviz-hub\\src\\templates\\blogCategoryTemplate.jsx"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("C:\\dataviz-hub\\src\\pages\\404.jsx"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("C:\\dataviz-hub\\src\\pages\\about.jsx"))),
  "component---src-pages-community-jsx": hot(preferDefault(require("C:\\dataviz-hub\\src\\pages\\community.jsx"))),
  "component---src-pages-events-jsx": hot(preferDefault(require("C:\\dataviz-hub\\src\\pages\\events.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("C:\\dataviz-hub\\src\\pages\\index.jsx")))
}

