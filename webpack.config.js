var webpack = require('webpack');

module.exports = {
    output: {
        path: './dist'
    },
    externals: {
        'jquery': 'jQuery',
        'angular': 'angular'
    },
    entry: {
        library: './index'
    }
};
