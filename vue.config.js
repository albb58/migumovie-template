const path = require('path')

function resolve(url){ //设置绝对路径
    return path.resolve(__dirname,url)
}

module.exports = {
    devServer: {
        port: 8000, //配置自定义端口
        proxy: { //配置代理服务器
            "/api": {
                target: "http://movie.miguvideo.com",
                changeOrigin: true,
                pathRewrite: {
                    "^/api" : ""
                }
            }
        }
    },
    chainWebpack(config){
        config.resolve
        .alias // 配置别名
        .set("@stylesheets",resolve('src/stylesheets'))
        .set('@views',resolve('src/views'))
        .set('@component',resolve('src/components'))
        .set('@libs',resolve('src/libs'))
        // .set('@img',resolve('src/images'))
    }
  }