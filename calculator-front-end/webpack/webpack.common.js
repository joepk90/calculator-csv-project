const Dotenv = require('dotenv-webpack');
const path = require("path");
const paths = require("./paths");

module.exports = {
    entry: {
        app: ["@babel/polyfill", path.resolve(__dirname, paths.js.src)],
        vendor: path.resolve(__dirname, paths.js.src + "/vendor.js"),
    },
    plugins: [
        new Dotenv()
    ],
    node: {
        fs: "empty" // handles: Error - Can't resolve 'fs'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-env"],
                },
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.svg$/,
                loader: "svg-url-loader",
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash][ext]",
                        outputPath: paths.img.dest,
                    },
                },
            },
        ],
    },
};
