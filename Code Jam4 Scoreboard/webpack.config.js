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
};