const path = require("path");
const build = path.join(process.cwd(), "build");
module.exports = {
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "index.js",
        path: build,
        library: "library",
        libraryTarget: "umd",
    },
};