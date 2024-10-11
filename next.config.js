const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const securityHeaders = require('./config/security.headers');
const cacheControlHeaders = require('./config/cache-control.headers');
const path = require('path');

const ANALYZE_MODE = process.env.ANALYZE;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '.');
    config.resolve.alias['@trpc.server'] = path.resolve(__dirname, './common/trpc/server');
    config.resolve.alias['@trpc.client'] = path.resolve(__dirname, './common/trpc/client');

    if (!isServer && ANALYZE_MODE) {
      const analyzerConfig = { openAnalyzer: true };
      const analyzerReportFilename = 'bundle-analyzer-report';
  
      switch (ANALYZE_MODE) {
        // static html report
        case '1':
          analyzerConfig.analyzerMode = 'static';
          analyzerConfig.reportFilename = `${analyzerReportFilename}.html`;
          break;
        // json report
        case '2':
          analyzerConfig.analyzerMode = 'json';
          analyzerConfig.reportFilename = `${analyzerReportFilename}.json`;
          break;
      }
  
      config.plugins.push(new BundleAnalyzerPlugin(analyzerConfig));
    };

    return config;
  },
  async headers() {
    return [
      securityHeaders,
      ...cacheControlHeaders
    ]
  }
};

module.exports = nextConfig;