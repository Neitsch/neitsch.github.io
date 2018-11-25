const config = require("./data/SiteConfig");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

const regexExclude404AndOfflineShell = /^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback|tags|categories|search)).*$/

const algoliaQuery = `{
  allMarkdownRemark(limit: 1000) {
    edges {
      node {
        excerpt
        timeToRead
        internal {
          content
        }
        fields {
          slug
        }
        frontmatter {
          title
          date
          cover {
            childImageSharp{
              sizes(maxWidth: 630) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
          category
          tags
          date
        }
      }
    }
  }
}`;
const algoliaQueries = [
  {
    query: algoliaQuery,
    transformer: ({data: {allMarkdownRemark: {edges}}}) => edges.map(({ node }) => ({
      content: node.internal.content,
      id: node.fields.slug,
      objectID: node.fields.slug,
      meta: node.frontmatter,
      date: Date.parse(node.frontmatter.date),
      excerpt: node.excerpt,
      timeToRead: node.timeToRead,
    })),
  },
];

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/logos/logo-512.png`,
      author: config.userName,
      copyright: config.copyright
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/${config.blogPostDir}`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe"
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers"
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.siteGATrackingID
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#c62828"
      }
    },
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            allSitePage(
              filter: {
                path: {
                  regex: "${regexExclude404AndOfflineShell}"
                }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: "Nigel | Blog",
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: "#e0e0e0",
        theme_color: "#c62828",
        display: "minimal-ui",
        icon:  "static/logos/logo-1024.png",
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-feed",
      options: {
        setup(ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = "Nigel Schuster | Blog";
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                author
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize(ctx) {
              const rssMetadata = ctx.query.site.siteMetadata.rssMetadata;
              return ctx.query.allMarkdownRemark.edges.map(edge => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.frontmatter.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                author: rssMetadata.author,
                url: rssMetadata.site_url + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }]
              }));
            },
            query: `
            {
              allMarkdownRemark(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields { slug }
                    frontmatter {
                      title
                      date
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: config.siteRss
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/logos/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: '3GOEFLAHC5',
        apiKey: '',
        indexName: 'page_index',
        queries: algoliaQueries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-W8KB3GV",
        includeInDevelopment: true,
      },
    },
  ]
};
