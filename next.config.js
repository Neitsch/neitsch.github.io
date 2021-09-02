// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');
const withImages = require('next-images')
const withOffline = require('next-offline')

const SentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore

    silent: true, // Suppresses all logs
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
};

let config = withOffline(withImages({
    optimizeFonts: false,
    reactStrictMode: true,
    images: {
        domains: ['media.graphcms.com'],
        loader: 'custom'
    },
    workboxOpts: {
        runtimeCaching: [
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                        maxEntries: 200,
                    },
                },
            },
        ],
    },
}));

if (process.env.NODE_ENV === 'production') {
    // Make sure adding Sentry options is the last code to run before exporting, to
    // ensure that your source maps include changes from all other Webpack plugins
    config = withSentryConfig(config, SentryWebpackPluginOptions);
}


module.exports = config;
