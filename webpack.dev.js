const {merge} = require ("webpack-merge");
const common = require ("./webpack.common.js");
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');
module.exports = merge(common,{
    mode: 'development',
    devtool: 'source-map', 
    devServer:{
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
});
