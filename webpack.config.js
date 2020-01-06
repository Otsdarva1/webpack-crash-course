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
            // css関連
            {
                // 全cssファイルを指定
                test: /\.css$/,
                // ローダーは逆順に読み込まれる。styleを先に読み込んでほしいのでcss-loaderは最後に書く
                use: ['style-loader', 'css-loader']
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
            }
        ]
    },
    devServer: {
        // ドキュメントルートにdistディレクトリの絶対パスを指定。
        // webpack-dev-server起動時にdist/index.htmlにアクセスする
        contentBase: outputpath
    }
}