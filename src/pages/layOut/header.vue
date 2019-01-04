<template>
<div class="header">
  <div class="header-wrapper">
    <el-row type="flex" align="middle" class="banner">
      <!-- 导航栏 _S -->
      <el-col class="navbar" :xs="18" :sm="18" :md="12" :lg="12" >
        <el-row type="flex" align="middle" :gutter="10">
          <!-- 公司图片 _S -->
          <el-col :xs="12" :sm="6" :md="6">
            <a href="http://www.lai.cn" target="_blank" class="icon">
              <img src="@/assets/images/logo.png" alt="">
            </a>
          </el-col>
          <!-- 公司图片 _E -->
          <!-- 导航 _S -->
          <el-col :xs="12" :sm="18" :md="18">
            <div class="navi">
              <router-link :class="{hover: currentPage == 'home'}" to="/home">首页</router-link>
              <router-link :class="{hover: currentPage == 'editor'}" to="/writte">发帖</router-link>
            </div>
          </el-col>
          <!-- 导航 _E -->
        </el-row>
      </el-col>
      <!-- 导航栏 _E -->
      <!-- 搜索框 _S -->
      <el-col :xs="6" :sm="6" :md="12" :lg="12">
        <el-row type="flex" align="middle" justify="end">
          <el-col :span="12" class="hidden-sm-and-down">
            <el-input
              class="search"
              :placeholder="placeholder"
              v-model="searchItem">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button @click="handleSearch" class="search_button" type="primary">搜索</el-button>
          </el-col>
          <el-col :span="12" class="user-wrapper">
            <el-row type="flex" align="right"  class="login-wrapper">
              <el-col v-if="!isLoggin" :span="12">
                <router-link class="register" to="">注册</router-link>
                <div @click="showLoggin" v-if="!isLoggin" class="login" to="">登录</div>
              </el-col>
              <el-col v-if="isLoggin" :span="12">
                <div class="avatar">
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
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <!-- 搜索框 _E -->

    </el-row>
  </div>
  <div class="placeholder"></div>
</div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
export default {
  data () {
    return {
      searchItem: '',
      scroll: 0,
      placeholder: '搜索',
      currentPage: ''
    }
  },
  watch: {
    '$route' () {
      this.currentPage = this.$route.name || ''
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
    },
    handleSearch () {
      if (!this.searchItem) {
        this.placeholder = '搜索内容不能为空'
        return
      }
      let path = this.$router.resolve({
        path: '/search/query',
        query: {keywords: this.searchItem}
      })
      window.open(path.href, '_blank')
    }
  },
  mounted () {
    this.currentPage = this.$route.name
  }
}
</script>

<style lang="stylus" scoped>
  .header {
    .header-wrapper {
      width 100%
      position fixed
      top 0
      left:0
      z-index 1994
      background-color #fff
      border-bottom 1px solid b-fir
      height 63px
      .banner {
        margin 0 auto
        max-width 1200px
        padding 10px 0
        .navbar {
          .icon {
            padding-left 5px
            img {
              max-width 142px
              max-height 37px
            }
          }
          .navi {
            margin-left 20px
            a {
              margin-left 20px
              &.hover {
                color #409eff
                font-weight 600
              }
            }
          }
        }

        .search {
          display inline-block
          margin-right 10px
          width 67%

        }
        .search_button {
          padding 5px 10px
        }
        .user-wrapper {
          position relative
          text-align left
          a {
            display inline-block
            transition all .3s
          }
          .login {
            color c-imp
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
            color c-imp
            text-align right
            img {
              cursor pointer
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
      width 100%
      height 63px
    }
  }
  @media screen and (min-width 320px) and (max-width 768px) {
    .navi {
      margin-left 0 !important
      a {
        font-size 13px
        margin-left 5px !important
      }
    }
  }
  @media screen and (min-width 320px) and (max-width 370px) {
    .navbar {
      .icon {
        img {
          max-width 110px !important
        }
      }
    }

  }
</style>
