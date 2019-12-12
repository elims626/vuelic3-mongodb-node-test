<template>
  <div class="">
    <el-form
      ref="form"
      label-width="80px"
      :rules="rules"
      :model="model"
    >
      <h3>
        登录页面
      </h3>
      <el-form-item
        label="用户名"
        prop="username"
      >
        <el-input
          v-model="model.username"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
      >
        <el-input
          v-model="model.password"
          type="password"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        没有账号，去
        <router-link to="/register">
          注册
        </router-link>
      </el-form-item>
      <el-form-item>
        <el-button>
          取消
        </el-button>
        <el-button
          type="primary"
          @click="handleLogin"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    Form,
    FormItem,
    Input,
    Button,
  } from 'element-ui';

  export default {
    components: {
      ElForm: Form,
      ElFormItem: FormItem,
      ElInput: Input,
      ElButton: Button,
    },
    data() {
      return {
        model: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            {
              required: true,
              message: '用户名不能为空',
              trigger: ['blur', 'change'],
            },
          ],
          password: [
            {
              required: true,
              message: '密码不能为空',
              trigger: ['blur', 'change'],
            },
          ],
        },
      };
    },
    methods: {
      handleLogin() {
        const { model } = this;
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.axios({
              method: 'post',
              url: '/api/user/login',
              data: {
                ...model,
              },
            }).then((res) => {
              if (res.data.code === '0') {
                this.$router.push('/home');
                const { _id } = res.data.data;
                window.localStorage.setItem('_id', _id);
              }
            });
          }
        });
      },
    },
  };
</script>
<style lang="scss" scoped>
</style>
