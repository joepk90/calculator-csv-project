const path = require("path");
const paths = require("./paths");

module.exports = {
    entry: {
        app: ["@babel/polyfill", path.resolve(__dirname, paths.js.src)],
        vendor: path.resolve(__dirname, paths.js.src + "/vendor.js"),
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
