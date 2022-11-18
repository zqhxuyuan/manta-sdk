const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './index.js',
    entry: './sdk.ts',
    plugins: [
        new HtmlWebpackPlugin()
    ],
    mode: 'development',
    experiments: {
        asyncWebAssembly: true
    },
    resolve: {
        alias: {
          crypto: false
        },
        extensions: [
            '.js', '.jsx', '.ts', '.tsx'
        ]
    }
};
