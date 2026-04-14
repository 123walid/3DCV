module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "fs": false,
    "path": false,
    "crypto": false,
    "stream": false,
    "http": false,
    "https": false,
    "zlib": false,
    "net": false,
    "tls": false,
  };
  return config;
};