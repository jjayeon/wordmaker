/* eslint-disable no-undef */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const PrettierWebpackPlugin = require("prettier-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                loader: "file-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
        new PrettierWebpackPlugin({ tabWidth: 4 }),
    ],
    devServer: {
        contentBase: "./dist",
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
};
