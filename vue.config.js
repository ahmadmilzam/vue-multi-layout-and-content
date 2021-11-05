module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.store.delete('prefetch');
    config.plugins.store.delete('preload');
  }
}
