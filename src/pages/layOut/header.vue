<template>
<div class="haeder">
  <div class="header-wrapper">
    <el-row class="banner">
      <el-col class="" :span="15">
        <div class="icon">
          <img src="@/assets/images/logo.png" alt="">
        </div>

      </el-col>
      <el-col :span="6">
        <el-input
          class="search"
          placeholder="请输入感兴趣的内容"
          v-model="searchItem">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
          <el-button type="primary">搜索</el-button>
      </el-col>
      <el-col :span="3" class="user-wrapper">
        <div class="login-wrapper">
          <router-link class="register" to="">注册</router-link>
          <div @click="showLoggin" v-if="!isLoggin" class="login" to="">登录</div>
          <div v-if="isLoggin" class="avatar">
            <el-dropdown>
              <div class="el-dropdown-link">
                <img src="../../assets/images/timg.jpg">
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><router-link to="/userCenter/account/1">个人中心</router-link></el-dropdown-item>
                <el-dropdown-item><router-link to="/userCenter">账号设置</router-link></el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="placeholder"></div>
</div>
</template>

<script>
export default {
  data () {
    return {
      searchItem: '',
      scroll: 0
    }
  },
  computed: {
    isLoggin () {
      return this.$store.getters.isLoggin
    },
    replace () {
      return this.scroll > 0
    }
  },
  methods: {
    showLoggin () {
      this.$store.commit('SHOW_LOGGIN', true)
    }
  }
}
</script>

<style lang="stylus">
  .header-wrapper {
    position fixed
    left 0
    top 0
    width 100%
    z-index 10000
    background-color #fff
    border-bottom 1px solid b-fir
    height 63px
    .banner {
      margin 0 auto
      width 1200px
      padding 10px 0
      .icon {
        width 49%
        display inline-block
        img {
          height 40px
        }
      }
      .search {
        display inline-block
        margin-right 10px
        width 67%
      }
      .user-wrapper {
        position relative
        text-align left
        a {
          display inline-block
          line-height 40px
          transition all .3s
        }
        .login {
          position absolute
          right 0
          top 0
          width 48%
          color c-imp
          line-height 40px
          cursor pointer
        }
        .register {
          width 48%
          text-align center
          &:hover {
            color: c-imp
          }
        }
        .avatar {
          position absolute
          right 0
          top 0
          width 48%
          color c-imp
          line-height 40px
          cursor pointer
          img {
            width 40px
            height 40px
            border-radius 100%
            border 1px solid b-trd
          }
        }
      }
    }
  }
  .placeholder {
    height 63px
  }
</style>
