<template>
  <el-row class="row" :gutter="20">
    <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
      <detail :sort="sort" :anchor="anchor" :baseRoute="baseRoute" :linkWord="linkWord"></detail>
    </el-col>
    <el-col :xs="0" :sm="8" :md="8" :lg="8" :xl="8">
      <recommend :recommend="recommend" limit="67"></recommend>
    </el-col>
  </el-row>
</template>

<script>
import recommend from '@/components/recommend'
import detail from '@/components/detail'
import { fetchHot } from '@/api/article'
export default {
  data () {
    return {
      recommend: [], // 推荐栏数据
      baseRoute: '/home/index/', // 不同页面的路由
      linkWord: ['我的关注', '最新消息', '最热文章', '24小时最热'], // 推荐栏内容
      anchor: ''
    }
  },
  props: ['sort'], // 这个是父组件接受route的params 当做中介
  components: {detail, recommend},
  created () {
    this.anchor = this.$route.meta.component // 标识点 告诉页面应该用哪套请求
    if (this.anchor === 'account') {
      this.baseRoute = '/userCenter/myAccount/'
      this.linkWord = ['浏览记录', '收藏', '点赞', '评论']
    } else if (this.anchor === 'home') {
      this.baseRoute = '/home/index/'
      this.linkWord = ['我的关注', '最新消息', '最热文章', '24小时最热']
    }
  },
  async mounted () {
    let hot = fetchHot({sort: 0})
    this.recommend = hot
  }
}
</script>

<style lang="stylus">
  .row {
    position relative
  }
</style>
