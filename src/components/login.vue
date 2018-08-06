<template>

  <transition name="el-fade-in-linear">
    <div v-show="isClick" class="loggin">
      <el-form :model="form" ref="form" status-icon :rules="rule" class="wrapper">
        <div class="title">登录</div>
        <el-form-item prop="name">
          <el-input
            placeholder="请输入您的账号"
            v-model="form.name"
            clearable>
            <i slot="prefix" class="el-icon-close"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            placeholder="请输入您的密码"
            v-model="form.pass"
            type="password"
            clearable>
            <i slot="prefix" class="el-icon-close"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="code-wrapper">
            <el-input
              class="code"
              placeholder="请输入验证码"
              v-model="form.code"
            >
            </el-input>
            <el-button class="msg" @click="handleCode" type="primary">{{text}}</el-button>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="handleSubmit" :loading="isLoading" class="submit">登录</el-button>
          <a href="https://lai.cn">注册</a>
        </el-form-item>
        <i class="el-icon-close close" @click="handleClose"></i>
      </el-form>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'
// import {fetchCode} from '@/api/login'
export default {
  data () {
    // 前端验证规则
    var validateName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      setTimeout(() => {
        callback()
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      }
      callback()
    }
    var validateCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'))
      }
      callback()
    }
    return {
      form: {
        name: '',
        pass: '',
        code: ''
      },
      text: '获取验证码',
      isLoading: false, // 提交按钮是否显示loading按钮
      rule: {
        // 对应具体form-item的验证条件
        name: [{validator: validateName, trigger: 'blur'}],
        pass: [{validator: validatePass, trigger: 'blur'}],
        code: [{validator: validateCode, trigger: 'blur'}]
      }
    }
  },
  computed: {
    ...mapGetters(['isClick'])
  },
  methods: {
    handleClose () {
      this.$store.commit('SHOW_LOGGIN', false)
    },
    handleCode () {

    },
    handleSubmit () {
      this.isLoading = true
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.$message('恭喜你成功了')
          this.$store.dispatch('Login', this.form)
        } else {
          this.isLoading = false
        }
      })
    }
  },
  mounted () {

  }
}
</script>

<style lang="stylus" scoped>
  .loggin {
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 99
    background-color rgba(0,0,0,.3)
    .wrapper {
      position absolute
      top 40%
      left 50%
      width 360px
      transform translate(-50%, -50%)
      padding 50px 30px
      background-color #fff
      z-index 100
      .title {
        margin-bottom 40px
        color c-main
        font-size 18px
        text-align center
      }
      .close {
        position absolute
        top 10px
        right 10px
        font-size 18px
        cursor pointer
        transition all .35s
        &:hover {
          transform: rotate(90deg)
        }
      }
      .el-form-item {
        margin-bottom 33px
      }
      .code-wrapper {
        position relative
        .code {
          display inline-block
          width 60%
        }
        .msg {
          position absolute
          display inline-block
          width 35%
          right 0
        }
      }
      .submit {
        width 100%
      }
    }
  }
</style>
