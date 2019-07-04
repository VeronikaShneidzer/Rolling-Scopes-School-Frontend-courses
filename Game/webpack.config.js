const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './assets/scripts/app.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
	plugins: [
			new webpack.ProvidePlugin({_: 'lodash'})
	],
	module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devServer: {
        host: "localhost",
        port: 8080
    },
};