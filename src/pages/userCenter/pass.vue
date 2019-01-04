<template>
  <div class="pass-only">
    <div class="wrapper">
      <el-steps :active="active" align-center finish-status="success">
        <el-step title="输入验证码"></el-step>
        <el-step title="修改手机号"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <div class="form">
        <!-- 第一步 _S -->
        <transition name="el-fade-in-linear">
          <div v-show="active == 0" class="transition-box">
            <div class="input-wrapper">
              <span>图形验证码</span>
              <el-input v-model="step1.pic" placeholder="请输入图形验证码"></el-input>
            </div>
            <div class="input-wrapper">
              <span>短信验证码</span>
              <el-input v-model="step1.code" class="slim" placeholder="请输入短信验证码"></el-input>
              <el-button type="primary" class="code" >{{text}}</el-button>
            </div>
            <el-button type="primary" class="next" style="width:70%" @click="handleClick(1)">下一步</el-button>
          </div>
        </transition>
        <!-- 第一步 _E -->

        <!-- 第二步 _S -->
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
            <el-button style="width: 70%" type="primary" class="next" @click="handleClick(2)">设置新密码</el-button>
          </div>
        </transition>
        <!-- 第二步 _E -->

        <!-- 第三步 _S -->
        <transition name="el-fade-in-linear">
          <div v-show="active == 2" class="transition-box">
            <div class="success">
              <i class="el-icon-success"></i>
              <div class="title">修改密码成功</div>
              <el-button style="width:40%" type="success">
                <router-link class="back" to="/">点此前往首页</router-link>
              </el-button>

            </div>
          </div>
        </transition>
        <!-- 第三步 _E -->
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
// 这里之所以不用scoped的原因是因为我要改一点element的原生css 但是如果用了scope 会给类名后面加编码 这样选不中我要的

  .pass-only {
    height 520px
    padding-top 70px
    background-color #fff
    .wrapper {
      max-width 800px
      margin 0 auto
      .form {
        margin 40px auto 0
        width 560px
        padding-left 150px
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
          margin-left -150px
          text-align center
          .el-icon-success {
            margin-bottom 15px
            font-size 60px
            color c-success
          }
        }
        .back {
          display inline-block
          width 100%
          height 100%
          color #fff
        }
      }
    }
  }
  @media screen and (max-width 768px) {
    .pass-only .wrapper .form {
      margin 40px auto 0
      width 80%
      padding-left 0
    }
    .pass-only .wrapper .form .input-wrapper >span {
      display none
    }
    .pass-only .wrapper .form .input-wrapper {
      position relative
    }
    .pass-only .wrapper .form .input-wrapper .el-button {
      position absolute
      right 0
      top 3px
      padding 8px 12px
    }
    .pass-only .wrapper .form .input-wrapper .el-input {
      width 100%
      margin-left 0
    }
    .pass-only .wrapper .form .input-wrapper .code {

    }
    .next {
      width 100% !important
    }
    .pass-only .wrapper .form .success {
      margin-left 0
    }
    .pass-only .wrapper .form .el-input__inner {
      border none
      border-bottom 1px solid #dcdfe6
      border-radius 0
    }
  }
</style>
