module.exports = {
  //开发模式下建议用代理模式解决跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:7777",
        pathRewrite:{
            '^/api':''
        }
      },
    },
  },
};
