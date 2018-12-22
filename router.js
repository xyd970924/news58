//路由模块


// 1.导包
const express = require('express');
const c_user = require('./controllers/c_user.js')
const c_topic = require('./controllers/c_topic.js')
// 2.实例化router
const router = express.Router();

// 3.监听端口，实现函数
router
  .get('/signin', c_user.showLogin)
  .post("/signin", c_user.handleSignin)
  .get('/', c_topic.showTopicList)
  .get('/topic/create', c_topic.createTopic)
  .post('/topic/create', c_topic.handleCreateTopic)
  .get('/signout', c_user.handleSignout)
  .get('/detail/topic/:topicId', c_topic.detailTopic)
  .get('/topic/:topicId/delete', c_topic.delectTopic)
  .get('/topic/:topicId/edit', c_topic.editorTopic)
  .post('/topic/edit/:topicId', c_topic.editPageTopic)
  .get('/signup', c_user.showSignup)
  .post('/signup', c_user.handleSignup)

// 4.导出router

module.exports = router;