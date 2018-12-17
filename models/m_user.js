
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