const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "source-maps",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, paths.basepaths.dest),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, paths.html.src + "/index.html"),
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()],
            },
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: function () {
                                return [autoprefixer];
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: 'compressed',
                            },
                        },
                    }
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader', options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: function () {
                                return [autoprefixer];
                            },
                        },
                    },
                ],
            },
        ],
    },
});
