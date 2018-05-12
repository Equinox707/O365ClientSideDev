const path = require('path');

module.exports = {
    entry: './src/index',
    mode: 'development', //'productions'
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts',
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './Layouts/TypeScriptSolution/dist'),
    },
};