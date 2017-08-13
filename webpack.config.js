const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
	entry: './index.js',
  output: {
    path: __dirname,
    filename: 'pyin.umd.js',
    library: "pYIN",
		libraryTarget: "umd"
	},
	module: {
		noParse: /pyin.asm.umd/
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				worker: {
					output: {
						filename: "pyin.worker.js",
						chunkFilename: "[id].pyin.worker.js"
					}
				}
			}
		}),
		new UglifyJSPlugin(
      {
        sourceMap: false,
				uglifyOptions: { mangle: false }, // seems there is a bug otherwise,
				exclude: /^pyin.asm.umd.js$/
      }
    )
	]
};
