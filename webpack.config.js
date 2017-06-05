module.exports = {
    entry : './src/Bolygone.js',
    output: {
        path: __dirname + '/js/',
        filename: 'bundle.js',
        library: 'App'
    },

    resolve: {
        extensions: [".js"]
    },

    module: {
        loaders: [
            {
                test : /\.js?/,
                exclude: /node_modules/,
                loader : 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    }
};