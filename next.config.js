const withImages = require("next-images");

const withTranspileModules = require("next-transpile-modules")([
  "govuk-react-jsx",
]);

const plugins = [
  [
    withImages,
    {
      inlineImageLimit: false,
      esModule: false,
    },
  ],
  withTranspileModules,
];

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  poweredByHeader: false,
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = plugins.reduce(
  (acc, plugin) => {
    if (Array.isArray(plugin)) {
      return plugin[0](acc, plugin[1]);
    }
    return plugin(acc);
  },
  { ...nextConfig }
);
