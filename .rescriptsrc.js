const { name } = require('./package');
module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`; 
    config.output.globalObject = 'window';

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = true;
    // config.watchContentBase = false;
    config.liveReload = false;
    config.static = {
        // directory: path.join(__dirname, 'public'), // 静态文件目录
        watch: true // 替代 watchContentBase
    }
    return config;
  },
};