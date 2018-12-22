
const connection = require('../config/db.config.js')


exports.checkEmail = (email, callback) => {
  const mysqlStr = 'select * from `users` where email=?'
  connection.query(mysqlStr, email, (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data)

  })
}


exports.addUser = (body, callback) => {
  const sqlstr = 'INSERT INTO `users` SET ?';
  connection.query(sqlstr, body, (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);

  });
};