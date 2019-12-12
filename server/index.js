// 文件模块
const fs = require('fs');
// 处理路径
const path = require('path');
// 处理post数据
const bodyParser = require('body-parser');
// Express
const express = require('express');
const mongoose = require('mongoose');

// 逻辑 - controller - 需要注入所有api
const api = require('./api/user');

// 需要链接的数据库 - 这里是testdb
mongoose.connect('mongodb://localhost/testdb');
const db = mongoose.connection;

db.on('open', () => {
  console.log('连接成功');
});

db.on('error', () => {
  console.log('连接失败');
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(api);
// 访问静态资源文件
app.use(express.static(path.resolve(__dirname, '../dist')));
// 单页应用 - 所有请求都走/dist/index.html
app.get('*', (req, res) => {
  const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
  res.send(html);
});

// 监听3000端口
app.listen(3000);
