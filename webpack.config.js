import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import { watchFile } from 'fs';
import { type } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const webpackConfig = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        watchFiles: ['src/**/*'],
        open: true,
        port: 9000,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader', 'postcss-loader']
            },
            {
                test: /\.njk$/i,
                use: ['simple-nunjucks-loader']
            },
            {
                test: /\.png/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index.njk'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/merch.njk',
            filename: 'merch.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/contact.njk',
            filename: 'contact.html'
        }),

        new HtmlWebpackPlugin({
            template: './src/pages/merchdetail.njk',
            filename: 'merchdetail.html'
        }),
    ],
}

export default webpackConfig;