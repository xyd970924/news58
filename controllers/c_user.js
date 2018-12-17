// 导包
const M_user = require('../models/m_user.js')


// 渲染登录页面
exports.showLogin = (req, res) => {

  res.render("signin.html")
}

exports.handleSignin = (req, res) => {
  const body = req.body

  // console.log(body);
  M_user.checkEmail(body.email, (err, data) => {
    if (err) {
      throw err
    }
    // console.log(data);
    if (data.lenght === 0) {
      return res.send({
        code: 1,
        msg: "邮箱不存在"
      });
    }
    if (data[0].password != body.password) {
      return res.send({
        code: 2,
        msg: "账号密码不正确"
      })
    }
    res.send({
      code: 200,
      msg: "登录成功"
    })
  })
}
