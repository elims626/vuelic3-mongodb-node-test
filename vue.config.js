module.exports = {
  devServer: {
    open: false, // 配置自动启动浏览器
    host: 'localhost',
    port: '8090',
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
    },
  },
}
