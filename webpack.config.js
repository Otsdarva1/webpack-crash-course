const path = require('path')
const outputpath = path.resolve(__dirname, 'dist')
console.log({outputpath})
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // webpackでバンドルする対象のファイル
    entry: './src/index.js',
    output: {
        // webpackでバンドルした結果をmain.jsというファイル名で
        filename: 'main.js',
        // distディレクトリ配下に出力する。
        path: outputpath
    },
    module: {
        rules: [
            // babel
            {
                // jsファイルをbabel-loaderのトランスパイルの対象となる
                test: /\.jsx?$/,
                // node_modules配下のファイルは除く（自分で書いたjsのみを対象とする）
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            // css関連
            {
                test: /\.(sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            // 画像関連
            {
                // ?: 前の1文字があってもなくても対象
                // i: 大文字を許容
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loader: 'url-loader',
                // 以下file-loaderを適用するための記述
                options: {
                    // 2048byte=2kb以上のファイルをnameに指定したファイルに分離する
                    limit: 2048,
                    name: './images/[name].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    devServer: {
        // ドキュメントルートにdistディレクトリの絶対パスを指定。
        // webpack-dev-server起動時にdist/index.htmlにアクセスする
        contentBase: outputpath
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ]
}