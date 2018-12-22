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

    // session保存用户
    req.session.user = data[0];
    // console.log(req.session.user);


    res.send({
      code: 200,
      msg: "登录成功"
    })
  })
}

// 退出登录
exports.handleSignout = (req, res) => {
  // 删除session
  delete req.session.user
  // 来到登录页面
  res.redirect('/signin')
}


// 渲染注册页面
exports.showSignup = (req, res) => {
  res.render("signup.html")
}

exports.handleSignup = (req, res) => {
  const body = req.body;
  M_user.checkEmail(body.email, (err, data) => {
    if (err) {
      return res.send({
        code: 500,
        msg: err.message
      })
    }
    if (data[0]) {
      return res.send({
        code: 2,
        mag: "昵称已存在"
      })
    }
    M_user.addUser(body, (err, data) => {
      if (err) {
        return res.send({
          code: 500,
          msg: err.message
        })
      }
      res.send({
        code: 200,
        msg: '注册成功'
      })
    })
  })
}