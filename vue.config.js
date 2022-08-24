const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ?
        'C:/xampp/htdocs/my-app/' :
        '/'
        ,
  transpileDependencies: true,
  lintOnSave:false,
})
