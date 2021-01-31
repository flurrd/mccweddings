const glob = require('glob')

// next.config.js
const withSCSS = require('@zeit/next-sass')

module.exports = withSCSS({

  cssLoaderOptions: {
    url: false
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
   exportPathMap: async function() {
    const routes = {
      '/': { page : '/'}
    }
    return routes
  }
})