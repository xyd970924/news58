//路由模块


// 1.导包
const express = require('express');
const c_user = require('./controllers/c_user.js')
// 2.实例化router
const router = express.Router();

// 3.监听端口，实现函数
router.get('/', c_user.showLogin);



// 4.导出router

module.exports = router;