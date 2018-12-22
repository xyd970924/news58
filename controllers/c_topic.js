const M_topic = require('../models/m_topic.js');
const moment = require('moment');


// 渲染列表页面
exports.showTopicList = (req, res, next) => {

  M_topic.findAllTopics((err, data) => {
    if (err) {
      return next(err)
    }
    res.render("index.html", {
      topics: data,
      user: req.session.user
    });
  });
}



// 渲染发布页面

exports.createTopic = (req, res, next) => {
  res.render('topic/create.html')

}
exports.handleCreateTopic = (req, res, next) => {
  const body = req.body;


  body.createdAt = moment().format();
  // userId:用来区分每个文章的创建者是谁
  body.userId = req.session.user.id;

  M_topic.addTopic(body, (err, data) => {
    if (err) {
      return next(err)
    }

    res.send({
      code: 200,
      msg: "添加成功"
    })
  })
}

// 渲染详情页面

exports.detailTopic = (req, res, next) => {
  // res.render('topic/create.html')
  const topicId = req.params.topicId
  M_topic.findTopicById(topicId, (err, data) => {
    if (err) {
      return next(err)
    }
    res.render("topic/show.html", {
      topic: data[0],
      sessionUserId: req.session.user ? req.session.user.id : 0
    });

    // if (req.session.user) {
    //   res.render("topic/show.html", {
    //     topic: data[0],
    //     sessionUserId: req.session.user.id,

    //   });
    // } else {
    //   res.render("topic/show.html", {
    //     topic: data[0],

    //   });
    // }

  })


}

// 删除文章
exports.delectTopic = (req, res, next) => {
  const topicId = req.params.topicId
  // console.log(topicId);
  M_topic.deleTopicById(topicId, (err, data) => {
    if (err) {
      return next(err)
    }
    res.redirect('/')
  })
}

// 根据id编辑页面
exports.editorTopic = (req, res, next) => {
  const topicId = req.params.topicId
  M_topic.findTopicById(topicId, (err, data) => {
    if (err) {
      return next(err)
    }
    res.render("topic/edit.html", {
      topic: data[0]
    })
  })
}

// 编辑页面
exports.editPageTopic = (req, res, next) => {
  const body = req.body;
  const topicId = req.params.topicId;

  M_topic.editTopic(body, topicId, (err, data) => {
    if (err) {
      return next(err)
    }
    res.send({
      code: 200,
      msg: "修改成功"
    });
  });
}

