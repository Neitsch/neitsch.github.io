// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const { withSentryConfig } = require('@sentry/nextjs');
const withImages = require('next-images')
const withOffline = require('next-offline')
const withTM = require('next-transpile-modules')(["react-markdown"])

let config = withOffline(withImages(withTM({
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
})));

if (!process.env.SKIP_SENTRY) {
    const SentryWebpackPluginOptions = {
        silent: true,
    };
    config = withSentryConfig(config, SentryWebpackPluginOptions);
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = config
