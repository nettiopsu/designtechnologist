const fs = require("fs");
const gracefulFs = require("graceful-fs");
gracefulFs.gracefulify(fs);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const plugins = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`
    }
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Design Technologist Club`,
      short_name: `Design Techologist`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/dt.png` // This path is relative to the root of the site.
    }
  },
  {
    resolve: `gatsby-plugin-typescript`
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `book`,
      path: `${__dirname}/src/book`
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [`gatsby-remark-autolink-headers`]
    }
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-autolink-headers`
        },
        {
          resolve: `gatsby-remark-images`
        },
        `gatsby-remark-copy-linked-files`
      ]
    }
  },
  "gatsby-remark-reading-time",
  `gatsby-plugin-postcss`,
  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`
    }
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GA_ID,
      head: true
    }
  },
  {
    resolve: `gatsby-plugin-webpack-size`,
    options: {
      // Set to true to show bundle sizes in development mode as well
      development: true
    }
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint: process.env.MAILCHIMP_URL,
      timeout: 3500
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `comments`,
      path: `${__dirname}/comments`
    }
  },
  {
    resolve: `gatsby-transformer-yaml`,
    options: {
      typeName: `Yaml` // a fixed string
    }
  },
  "gatsby-plugin-preload-fonts"

  // this (optional) plugin enables Progressive Web App + Offline functionality
  // To learn more, visit: https://gatsby.dev/offline
  // `gatsby-plugin-offline`,
];

if (process.env.NODE_ENV === "production") {
  plugins.push("gatsby-plugin-preact");
}

module.exports = {
  siteMetadata: {
    title: `Design Technologist Club`,
    description: ``,
    commentsApiUrl:
      "https://comments.designtechnologist.club/v3/entry/github/nettiopsu/designtechnologist/master/comments"
  },
  flags: {
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true
  },
  plugins
};
