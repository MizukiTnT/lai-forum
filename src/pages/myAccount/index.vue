<template>
  <el-row class="article">
    <el-col :xs="24" class="list" :sm="16" :md="16" :lg="16" :xl="16">
      <detail :sort="list" :anchor="anchor" :baseRoute="baseRoute" :linkWord="linkWord"></detail>
    </el-col>
    <el-col :xs="0" :sm="8" :md="8" :lg="8" :xl="8">
    </el-col>
  </el-row>
</template>

<script>
import detail from '@/components/detail'
export default {
  data () {
    return {
      linkWord: ['动态', '收藏', '点赞', '评论'],
      baseRoute: '/userCenter/myAccount/',
      anchor: 'account'
    }
  },
  props: ['list'],
  components: {detail}
}
</script>

<style lang="stylus">
</style>
