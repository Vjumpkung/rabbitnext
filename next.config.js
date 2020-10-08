module.exports = {
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: "preact/compat",
      "react-dom": "preact/compat",
    };
    return config;
  },
};
module.exports = {
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/DTG': { page: '/DTG' },
      '/DST': { page: '/DST' },
      '/blockscreen': { page: '/blockscreen' },
      '/embroidery': { page: '/embroidery' },
    }
  },
}