var proxy = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: 'Andrey Posudevsky | Full Stack Developer',
    description:
      'Andrey Posudevsky | Full Stack Developer. Drop me a message if you need help with your website!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://aposudevsky.com`,
        stripQueryString: true,
      },
    },
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //       name: `Andrey Posudevsky | Full Stack Web Developer`,
    //       short_name: `Andrey Posudevsky`,
    //       start_url: `/`,
    //       background_color: `#5e42a6`,
    //       theme_color: `#5e42a6`,
    //       display: `standalone`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //       trackingId: "UA-141218511-1",
    //       // Defines where to place the tracking script - `true` in the head and `false` in the body
    //       head: false,
    //       // Setting this parameter is optional
    //       anonymize: true,
    //       // Setting this parameter is also optional
    //       respectDNT: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "387777545", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/admin"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy.createProxyMiddleware({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    )
  },
}
