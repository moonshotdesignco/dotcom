module.exports = {
    entry: "./src/js/main.js",
    output: {
        filename: "main_pack.js",
        path: __dirname + "/prod",
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    }
};