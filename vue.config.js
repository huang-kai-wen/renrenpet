const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
	// style-resources-loader 引用css变量的插件
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [
				path.resolve(__dirname, './src/assets/less/variables.less')
			]
		}
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					require("postcss-px2rem")({
						'remUnit': 75, //根据设计稿调整
					})
				]
			}
		}
	},
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath: BASE_URL,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@src', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_com', resolve('src/components'))
      .set('_api', resolve('src/api'))
      .set('_img', resolve('src/assets/img'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    proxy: 'http://localhost:3000',
    overlay: {
      warnings: false, // 是否将eslint警告信息显示到浏览器中
      errors: true // 是否将eslint错误信息显示到浏览器中，此时编译不通过
    }
  }
}
