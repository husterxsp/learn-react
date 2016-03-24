var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader']
        }, {
            test: /\.jsx$/,
            loaders: ['react-hot', 'babel']
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
        }]
    }
};