const path = require('path');

const config= {
    entry: path.resolve(__dirname, './src/index.js'),

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react','env']
                    }
                }
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                ctx: {
                                    autoprefixer: true
                                }
                            }
                        }
                    },
                    {
                        loader: 'stylus-loader',
                    },
                ]
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        compress: true,
        open: true,
        openPage: '/app.html',
        port: 9000
    }
};

module.exports = config;