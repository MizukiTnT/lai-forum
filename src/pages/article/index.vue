<template>
  <div class="article-page">
    <el-row :gutter="20">
      <el-col class="text-wrapper" :span="18">
        <div class="ql-container ql-snow">
          <div v-html="template" class="ql-editor"></div>
        </div>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      template: `<ul><li class="ql-indent-1">请输入内容</li></ul>`
    }
  },
}
</script>

<style lang="stylus" >
  .text-wrapper {
    padding 30px 10px
    background-color #fff
  }
  .ql-container.ql-snow {
    border none
  }
</style>
