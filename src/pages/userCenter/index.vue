<template>
  <div class="userCenter">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link class="link" :to="{path: '/userCenter/editor/account'}">账号设置</router-link></el-menu-item>
      <el-menu-item index="2"><router-link class="link" :to="{path: '/userCenter/editor/pass'}">修改密码</router-link></el-menu-item>
    </el-menu>
    <transition name="el-fade-in-linear">
      <component :is="currentComponent"></component>
    </transition>
  </div>
</template>

<script>
import account from './account'
import pass from './pass'
export default {
  data () {
    return {
      activeIndex: '1',
      currentComponent: 'account'
    }
  },
  props: ['page'],
  components: {account, pass},
  watch: {
    page (v) {
      this.currentComponent = v
      if (v === 'pass') this.activeIndex = '2'
      if (v === 'account') this.activeIndex = '1'
    }
  },
  mounted () {
    this.currentComponent = this.page
    if (this.page === 'pass') this.activeIndex = '2'
    if (this.page === 'account') this.activeIndex = '1'
  }
}
</script>

<style lang="stylus">
  .userCenter {
    .link {
      display inline-block
      padding  0 20px
      width 100%
      height 100%
    }
    .el-menu-item {
      padding 0
    }
    .content {
      margin-top 30px
    }
  }
</style>
