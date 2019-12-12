const mongoose = require('mongoose');

const { Schema } = mongoose;

// 定义模式 user
const UserSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

// 与数据库表（集合）对应 - users(表/集合)
module.exports = mongoose.model('Users', UserSchema);
