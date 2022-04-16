// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_NODE_1: "https://mainnet.aurora.dev",
    REACT_APP_NODE_2: "https://mainnet.aurora.dev",
    REACT_APP_NODE_3: "https://mainnet.aurora.dev",
    REACT_APP_NODE_PRODUCTION: "https://mainnet.aurora.dev",
    REACT_APP_CHAIN_ID: 1313161554
  }
};
