const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './Layouts/JavaScript/webpack/'),
    entry: {
        app: './app.js'
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        filename: './Layouts/JavaScript/bundle/webpack-bundle.js'
    },
    devtool: 'eval-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: "babel-loader",
                        options: { presets: ["es2015"] }
                    }
                ]
            }
        ]
    }
};