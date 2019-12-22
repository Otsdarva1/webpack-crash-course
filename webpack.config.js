const path = require('path')
const outputpath = path.resolve(__dirname, 'dist')
console.log({outputpath})

module.exports = {
    // webpackでバンドルする対象のファイル
    entry: './src/index.js',
    output: {
        // webpackでバンドルした結果をmain.jsというファイル名で
        filename: 'main.js',
        // distディレクトリ配下に出力する。
        path: outputpath
    },
    devServer: {
        // ドキュメントルートにdistディレクトリの絶対パスを指定。
        // webpack-dev-server起動時にdist/index.htmlにアクセスする
        contentBase: outputpath
    }
}