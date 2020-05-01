const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
    /** Config for production mode */
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                /** Take CSS and place it in separate file to dist folder */
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        /** Take CSS and place it in separate file to dist folder */
        new MiniCssExtractPlugin({
            filename: 'bundle-[contenthash].css',
        }),
    ],
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                        annotation: true,
                        sourceMapFilename: 'maps/[file].map'
                    },
                },
            }),
            new TerserPlugin({
                parallel: true,
                cache: true,
                sourceMap: true,
            }),
        ],
    },
});