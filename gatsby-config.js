require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  //pathPrefix: "/dataviz-hub2",
  siteMetadata: {
    title: `Data Visualisation Hub - The University of Sheffield `,
    description: `Promoting and building community around data visualisation at the University of Sheffield.`,
    author: 'Yu Liang Weng <y.weng@sheffield.ac.uk>',
    siteUrl: "https://dataviz.shef.ac.uk"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'author',
        path: `./src/author`,
      },
    },
    /******************************* MDX Plugins *******************************************/
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // Apply gatsby-mdx to both .mdx and .md files
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/blogPostTemplate.jsx'),
        },
        plugins: [
          `gatsby-remark-prismjs`
        ],

        gatsbyRemarkPlugins: [
          `gatsby-remark-embedder`,
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              maxwidth: 700,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              Height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ]
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin: 2rem auto 1.075rem auto, max-width: 800px, height: 600px`,

            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              fromHeading: 1,
              toHeading: 6
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: ``,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          {
            // Use this plugin instead of remark-image, since latter cannot style images individuallly
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`bmp`, `tiff`],
            },
          },

        ]
      }
    },
    /************************** END MDX Plugins *********************************/
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js',
      },
    },
    "gatsby-remark-embed-video",
    `gatsby-remark-responsive-iframe`,
    `gatsby-remark-reading-time`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-eslint',
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    //`gatsby-plugin-smoothscroll`,
    `gatsby-transformer-json`,
    `gatsby-plugin-emotion`,
    //`gatsby-plugin-twitter`,
    `gatsby-plugin-instagram-embed`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.jsx`),
      },
    },
    {
      resolve: `gatsby-source-eventbrite-multi-accounts`,
      options: {
        organisations: [
          {
            organisationId: process.env.EVENT_ORG_ID_1,
            accessToken: process.env.EVENT_API_KEY_1
          },
          {
            organisationId: process.env.EVENT_ORG_ID_2,
            accessToken: process.env.EVENT_API_KEY_2
          },
        ],
        entities: ['events', 'venues']
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `dataviz-hub-tuos`,
        short_name: `dvh-tuos`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        cache_busting_mode: 'none'   // Work with offline plugin
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require('tailwindcss')(`./tailwind.config.js`),
          require(`autoprefixer`),
          require(`cssnano`)
        ]
      }
    },

    {
      resolve: 'gatsby-background-image',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    /***************** FLEXSEARCH ********************/
    // {
    //   resolve: 'gatsby-plugin-flexsearch',
    //   options: {
    //     // L
    //     languages: ['en'],
    //     type: 'Mdx', // Filter the node types you want to index
    //     // Fields to index.
    //     fields: [
    //       {
    //         name: 'id',
    //         indexed: false, // If indexed === true, the field will be indexed.
    //         resolver: 'id',
    //         store: true, // In case you want to make the field available in the search results.
    //       },
    //       {
    //         name: 'title',
    //         indexed: true, // If indexed === true, the field will be indexed.
    //         resolver: 'frontmatter.title',
    //         // Attributes for indexing logic. Check https://github.com/nextapps-de/flexsearch#presets for details.
    //         attributes: {
    //           encode: "extra",
    //           tokenize: "strict",
    //           threshold: 1,
    //           resolution: 9,
    //           depth: 4
    //         },
    //         store: true, // In case you want to make the field available in the search results.
    //       },
    //       {
    //         name: 'description',
    //         indexed: true,
    //         resolver: 'frontmatter.description',
    //         attributes: {
    //           encode: "extra",
    //           tokenize: "strict",
    //           threshold: 1,
    //           resolution: 9,
    //           depth: 4
    //         },
    //         store: true,
    //       },
    //       {
    //         name: 'author',
    //         indexed: true,
    //         resolver: 'frontmatter.author',
    //         attributes: {
    //           encode: "extra",
    //           tokenize: "strict",
    //           threshold: 1,
    //           resolution: 9,
    //           depth: 4
    //         },
    //         store: true,
    //       },
    //       {
    //         name: 'category',
    //         indexed: true,
    //         resolver: 'frontmatter.category',
    //         attributes: {
    //           encode: "extra",
    //           tokenize: "strict",
    //           threshold: 1,
    //           resolution: 9,
    //           depth: 4
    //         },
    //         store: true,
    //       },
    //       {
    //         name: 'tag',
    //         indexed: true,
    //         resolver: 'frontmatter.tag',
    //         attributes: {
    //           encode: "extra",
    //           tokenize: "strict",
    //           threshold: 1,
    //           resolution: 9,
    //           depth: 4
    //         },
    //         store: true,
    //       },
    //       {
    //         name: 'url',
    //         indexed: true,
    //         resolver: 'fields.slug',
    //         store: true,
    //       },
    //     ],
    //   },
    // },
    /***************** END FLEXSEARCH ********************/

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  //   {
  //     resolve: 'gatsby-plugin-offline',
  //     options: {
  //        workboxConfig: {
  //           globPatterns: ['**/*']
  //        }
  //     }
  //  },

    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tag`, `description`, `category`, `date`, `authorName`, `start_date`, `venue`, `path`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          Mdx : {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            category: node => node.frontmatter.category,
            tag: node => node.frontmatter.tag,
            //readingTime: node => node.fields.readingTime.text,
            date: node => node.frontmatter.date,
            //slug: node => node.fields.slug,
            //thumbnail: node => node.frontmatter.thumbnail.childImageSharp.fluid.src,
            authorName: node => node.frontmatter.author.name,
            //authorAvatar: node => node.frontmatter.author.avatar.childImageSharp.fluid.src,
          },
          eventbriteEvents: {
            name: node => node.name.text,
            description: node => node.description.text,
            startDate: node => node.start.utc(`formatString: "ddd, DD MMM YYYY"`),
            venue: node => node.address.address_1,
          },
          sitePage: {
            path: node => node.path,
          },
          AuthorJson: {

          }

        },
        // Optional filter to limit indexed nodes
        filter: (node, getNode) => node.frontmatter.hide !== "true",
      },
    },

  ],
}
