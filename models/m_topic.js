const connection = require('../config/db.config.js');



exports.findAllTopics = (callback) => {
  const sqlStr = " SELECT *FROM `topics` ORDER BY id DESC";

  connection.query(sqlStr, (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, data)
  })
}

// 添加文章
exports.addTopic = (body, callback) => {
  const sqlStr = "INSERT INTO `topics` SET ?";
  connection.query(sqlStr, body, (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, data)
  })
}

// 根据ID来查询文章
exports.findTopicById = (topicid, callback) => {
  const sqlStr = "select * from `topics` where id = ?"
  connection.query(sqlStr, topicid, function (err, data) {
    if (err) {
      return callback(err)
    }
    callback(null, data)
  })
}

// 根据ID来删除文章
exports.deleTopicById = (topicid, callback) => {
  const sqlStr = "DELETE FROM `topics` WHERE id = ?"
  connection.query(sqlStr, topicid, (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, data)
  });
}

// 编辑文章
exports.editTopic = (body, topicId, callback) => {
  const sqlStr = 'UPDATE `topics` SET ? WHERE id = ?';

  connection.query(sqlStr, [body, topicId], (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}