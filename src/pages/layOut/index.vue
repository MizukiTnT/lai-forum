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
    <right-tool></right-tool>
  </div>
</template>

<script>
import lheader from './header'
import login from '@/components/login'
import lfooter from './footer'
import rightTool from './toTop'
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
    lheader, login, lfooter, rightTool
  },
  methods: {

  }
}
</script>

<style lang="stylus">
  .home {
    background-color #f7f7f7
    .container {
      max-width 1200px
      margin 0 auto
    }
  }

</style>
