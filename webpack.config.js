const path = require('path')

const outputpath = path.resolve(__dirname, 'dist')
console.log({outputpath})
console.log(outputpath)

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: outputpath
    }
}