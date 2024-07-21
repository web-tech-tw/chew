const {defineConfig} = require('@vue/cli-service')

module.exports = defineConfig({
    pages: {
        index: {
            title: 'Chew 口香糖',
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/chew/' : '/',
    transpileDependencies: true
})
