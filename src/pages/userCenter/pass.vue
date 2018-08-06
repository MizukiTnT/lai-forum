<template>
  <div class="pass">
    <div class="wrapper">
      <el-steps :active="active" align-center finish-status="success">
        <el-step title="输入验证码"></el-step>
        <el-step title="修改手机号"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <div class="form">
        <transition name="el-fade-in-linear">
          <div v-show="active == 0" class="transition-box">
            <div class="input-wrapper">
              <span>图形验证码</span>
              <el-input v-model="step1.pic" placeholder="请输入图形验证码"></el-input>
            </div>
            <div class="input-wrapper">
              <span>短信验证码</span>
              <el-input v-model="step1.code" placeholder="请输入短信验证码"></el-input>
              <el-button type="primary" >{{text}}</el-button>
            </div>
            <el-button type="primary" style="width:70%" @click="handleClick(1)">下一步</el-button>
          </div>
        </transition>
        <transition name="el-fade-in-linear">
          <div v-show="active == 1" class="transition-box">
            <div class="input-wrapper">
              <span>输入新密码</span>
              <el-input v-model="step2.pass" type="password" placeholder="请输入新密码"></el-input>
            </div>
            <div class="input-wrapper">
              <span>确认新密码</span>
              <el-input v-model="step2.confirmPass" type="password" placeholder="请确认密码"></el-input>
            </div>
            <el-button style="width: 70%" type="primary" @click="handleClick(2)">设置新密码</el-button>
          </div>
        </transition>
        <transition name="el-fade-in-linear">
          <div v-show="active == 2" class="transition-box">
            <div class="success">
              <i class="el-icon-success"></i>
              <div class="title">修改密码成功</div>
              <el-button style="width:40%" type="danger">
                <router-link to="/">点此前往首页</router-link>
              </el-button>

            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      text: '获取验证码',
      isClick: false,
      step1: {
        code: '',
        pic: ''
      },
      step2: {
        pass: '',
        confirmPass: ''
      }
    }
  },
  methods: {
    handleClick (type) {
      console.log(type)
      if (type === 1) {
        if (!this.step1.code || !this.step1.pic) {
          this.$message.error({
            message: '请输入验证码',
            duration: 1000
          })
          return false
        }
      } else if (type === 2) {
        if (!this.step2.pass || !this.step2.confirmPass) {
          this.$message.error({
            message: '请输入新密码',
            duration: 1000
          })
          return false
        }
        if (this.step2.pass !== this.step2.confirmPass) {
          this.$message.error({
            message: '两次密码不相等',
            duration: 1000
          })
          return false
        }
      }
      this.active = type
    }
  }
}
</script>

<style lang="stylus">
  .pass {
    height 520px
    padding-top 70px
    background-color #fff
    .wrapper {
      width 800px
      margin 0 auto
      .form {
        margin-top 40px
        padding-left 160px
        .input-wrapper {
          margin-bottom 30px
          >span {
            color: c-comm
          }
          .el-input {
            width 230px
            margin-left 15px
            display inline-block
          }
        }
        .success {
          margin-left -160px
          text-align center
          .el-icon-success {
            font-size 60px
            color c-success
          }
        }
      }
    }
  }
</style>
