<template>
  <div class="home">
    <div class="header">
      <lheader></lheader>
    </div>
    <el-container class="container">
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <lfooter></lfooter>
    <login></login>
  </div>
</template>

<script>
import lheader from './header'
import login from '@/components/login'
import lfooter from './footer'
export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  computed: {
  },
  components: {
    lheader, login, lfooter
  },
  methods: {

  }
}
</script>

<style lang="stylus">
  .home {
    background-color #f7f7f7
    .container {
      width 1200px
      margin 0 auto
    }
    .banner {
      display flex
      align-items center
      >div {
        margin-right 30px
        display inline-block
      }
    }
  }
  @media only screen and (max-width: 768px)
    .home .container {
      width 100%
    }

  @media only screen and (max-width: 600px)
    .home .container {
      width 600px
    }
</style>
