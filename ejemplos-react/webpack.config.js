var path = require('path');
var MiniCSS = require('mini-css-extract-plugin');
var entryPath = path.join(__dirname, 'src');
var outputPath = path.join(__dirname, 'dist');

module.exports = {
    // entry: path.join(entryPath, 'app.js'),
    entry: {
        bundle: path.join(entryPath, 'app.js'), 
        otros: path.join(entryPath, 'otros.js')
    },
    output: {
        path: outputPath,
        filename: '[name].js'
    },
    plugins: [
        new MiniCSS({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss|sass)$/,
                exclude: /node_modules/,
                // loaders: ['style-loader', 'css-loader', 'sass-loader']
                use: [{
                    loader: MiniCSS.loader,
                    options: {
                        publicPath: './dist'
                    }
                }, 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: outputPath
    }
}