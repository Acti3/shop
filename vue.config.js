const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:"./",
       //开启代理服务器（方式一）
  // devServer:{
  //   proxy:'http://localhost:5000'
  // },
      //开启代理服务器（方式二）
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        pathRewrite:{'^/api':''},
        ws:true,
        changeOrigin:true
      },
      '/demo':{
        target:'http://localhost:5001',
        pathRewrite:{'^/demo':''},
        ws:true,
        changeOrigin:true
      }
    }
  }
})
