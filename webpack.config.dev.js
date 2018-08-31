const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const antdTheme = {
	'@icon-url': '"/antd/iconfont/iconfont"'
};

const config = {
	entry: [
		'babel-polyfill',
		'webpack-hot-middleware/client?reload=true',
		'react-hot-loader/patch',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],
	devtool: 'eval-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
		port: 9099
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		chunkFilename: '[name].bundle.js'
		// sourceMapFilename: '[name].js.map',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'react-resize-svg': path.resolve(__dirname, './src/index.js')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				include: [/src/],
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIndexName: '[name]__[local]___[hash:base64:5]'
						}
					},
					{ loader: 'less-loader' }, // compiles Less to CSS
					{ loader: 'postcss-loader' }
				]
			},
			{
				test: /\.less$/,
				include: [/node_modules/],
				use: [
					{ loader: 'style-loader' },
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1
						}
					},
					{
						loader: 'less-loader',
						options: {
							javascriptEnabled: true,
							modifyVars: antdTheme
						}
					}
				]
			},
			{
				test: /\.(eot|woff|woff2|svg|ttf|png|jpg|jpeg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 20, // 20K
							fallback: 'file-loader', // default
							name: '[path][name]-[hash:8].[ext]',
							// publicPath: 'assets/',
							outputPath: './imgs/',
							useRelativePath: false // true : outputPath 失效
						}
					}
				]
			}
		]
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './template/index_dev.html',
			title: 'react-boilerplate-dev',
			// chunks: ['app'], //指定要加入的entry实例,
			inject: 'body'
		}),
		new OpenBrowserPlugin({ url: 'http://localhost:9099/' })
	]
};

module.exports = config;
