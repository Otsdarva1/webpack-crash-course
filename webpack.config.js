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
    module: {
        rules: [
            {
                // 全cssファイルを指定
                test: /\.css$/,
                // ローダーは逆順に読み込まれる。styleを先に読み込んでほしいのでcss-loaderは最後に書く
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        // ドキュメントルートにdistディレクトリの絶対パスを指定。
        // webpack-dev-server起動時にdist/index.htmlにアクセスする
        contentBase: outputpath
    }
}