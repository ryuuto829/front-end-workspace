const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(commonConfig, {
    /** Config for development mode */
    mode: 'development',
    devtool: 'inline-source-map',
    /** Create a Development Server */
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            // {
            //     /** Take CSS and place it in a style tag in HTML */
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader']
            // }
            {
                test: /\.(css|s[ac]ss)$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
});