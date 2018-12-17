//入口文件

// 1.导包
const express = require('express');
const router = require('./router.js');
const bodyParser = require('body-parser')

// 2.配置
const app = express();
// 统一处理静态资源
app.use('/public', express.static('./public'));
// 统一处理第三方请求
app.use('/node_modules', express.static('./node_modules'));

//配置模板引擎
app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// 3.挂载路由
app.use(router);

// 4.监听端口
app.listen(3000, () => {
  console.log("go go go ...");

})