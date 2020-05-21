var path = require('path')
function resolve (dir) {
  console.log(__dirname)
  return path.join(__dirname, dir)
}
module.exports = {
  devServer:{
      port:8181
  },
  runtimeCompiler: true,/**如果报You are using the runtime-only build....加上这句**/
  lintOnSave:false,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    config.resolve.alias
      .set('@', resolve('src'))
      .set('css', resolve('src/assets/css'))
      .set('js', resolve('src/assets/js'))
      .set('components', resolve('src/components'))
      .set('pages', resolve('src/pages'))
      .set('images', resolve('src/assets/images'))
  }
}