//入口文件

// 1.导包
const express = require('express');
const router = require('./router.js');

// 2.配置
const app = express();


// 3.挂载路由

app.use(router);

// 4.监听端口
app.listen(3000, () => {
  console.log("go go go ...");

})