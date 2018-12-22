//入口文件

// 1.导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
var options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'users58'
};

const sessionStore = new MySQLStore(options);


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


// 配置session
app.use(session({
  key: 'session_cookie_name',
  secret: 'session_cookie_secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false
}));


// 3.挂载路由
app.use(router);

app.use((req, res, next) => {
  res.render('404.html');
  next()
})
app.use((err, req, res, next) => {
  res.send({
    code: 500,
    msg: err.message
  })
})

// 4.监听端口
app.listen(3000, () => {
  console.log("go go go ...");

})