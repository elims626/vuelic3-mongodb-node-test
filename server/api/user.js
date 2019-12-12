const models = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');

// 与实体类一一对应
const Users = mongoose.model('Users');

const router = express.Router();

/* ************* 创建(create) 读取(get) 更新(update) 删除(delete) ************* */

// 创建(create)
router.post('/api/user/create', (req, res) => {
  const { body } = req;
  const { username, password } = body;
  const user = new Users({
    username,
    password,
  });
  user.save((err, data) => {
    if (err) throw err;
    if (data) {
      res.send({
        msg: '操作成功',
        code: '0',
        data,
      });
    } else {
      res.send({
        msg: '操作失败',
        code: '1000',
      });
    }
  });
});
// 读取(get) -登录
router.post('/api/user/login', (req, res) => {
  const { username, password } = req.body;
  // 通过模型去查找数据库
   Users.findOne({
    username,
    password,
  }, (err, data) => {
    if (err) throw err;
    if (data) {
      const { _id } = data;
      res.send({
        msg: '操作成功',
        code: '0',
        data: {
          _id,
        },
      });
    } else {
      res.send({
        msg: '操作失败',
        code: '1000',
      });
    }
  });
});
module.exports = router;
