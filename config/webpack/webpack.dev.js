import FileIncludeWebpackPlugin from 'file-include-webpack-plugin-replace';
import CopyPlugin from 'copy-webpack-plugin';
import { path } from '../settings/path.js';

const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    stats: 'errors-warnings',
    optimization: {
        minimize: false
    },
    entry: [
        `${path.root}/js/app.js`
    ],
    output: {
        filename: 'js/app.min.js',
        path: path.built,
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        static: path.built,
        host: 'local-ip',
        compress: true,
        port: 'auto',
        open: true,
        hot: true,

        watchFiles: [
            `${path.root}/content/**/*.*`,
            `${path.root}/**/*.html`,
            `${path.root}/**/*.htm`
        ]
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                exclude: `${path.root}/content/fonts`,
                use: [
                    'style-loader',
                    {
                        loader: 'string-replace-loader',
                        options: {
                            search: '@content',
                            replace: '../content',
                            flags: 'g'
                        }
                    }, {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            modules: false,
                            url: {
                                filter: url => {
                                    if (url.includes('content/') || url.includes('fonts/')) {
                                        return false;
                                    }
                                    return true;
                                }
                            }
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new FileIncludeWebpackPlugin({
            source: path.srcFolder,
            htmlBeautifyOptions: {
                'indent-with-tabs': true,
                'indent_size': 4
            },
            replace: [
                { regex: '<link rel="stylesheet" href="css/style.min.css">', to: '' },
                { regex: 'NAME__PROJECT', to: path.rootFolder },
                { regex: '../content', to: 'content' },
                { regex: '@content', to: 'content' }
            ]
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: `${path.root}/json`, to: 'json',
                    noErrorOnMissing: true,
                    force: true
                }, {
                    from: `${path.root}/content`, to: 'content',
                    noErrorOnMissing: true,
                    force: true
                }, {
                    from: `${path.root}/files`, to: 'files',
                    noErrorOnMissing: true,
                    force: true
                }, {
                    from: `${path.root}/favicon.svg`, to: './',
                    noErrorOnMissing: true
                }, {
                    from: `${path.root}/.htaccess`, to: './',
                    noErrorOnMissing: true
                }
            ]
        })
    ],
    resolve: {
        extensions: [
            '.scss',
            '.css',
            '.js'
        ],
        alias: {
            '@content': `${path.root}/content`,
            '@scss': `${path.root}/scss`,
            '@js': `${path.root}/js`
        }
    }
}
export default config;