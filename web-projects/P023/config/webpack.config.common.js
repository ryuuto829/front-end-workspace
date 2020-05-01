const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist')
};

module.exports = {
    context: __dirname,
    /** look up entry file
     *  resolve all import module dependencies
     *  bundle it into single .js file in dist folder
     *  */
    entry: path.resolve(PATHS.src, 'index.js'),
    output: {
        filename: 'bundle-[contenthash].js',
        path: PATHS.dist,
        sourceMapFilename: 'maps/[file].map'
    },
    plugins: [
        /** Clean up the .dist folder */
        new CleanWebpackPlugin(),

        /** Add <script> tag to html file */
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(PATHS.src, 'index.html'),
        }),
    ]
};