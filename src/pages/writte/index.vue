<template>
  <div id="writte">
    <el-form label-position="left" :model="form" ref="ruleForm" label-width="80px" >
      <el-form-item label="标题:" prop="name">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="简介:">
        <el-input v-model="form.catlog"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <editor @handleBlur="getContent" ref="myTextEditor"></editor>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import editor from '@/components/editor'
export default {
  name: 'app',
  data () {
    return {
      form: {
        title: '',
        catlog: ''
      },
      content: ''
    }
  },
  components: {
    editor
  },
  methods: {
    getContent (content) {
      this.content = content
      console.log(this.content)
    }
  }
}
</script>

<style lang="stylus">
 #writte {
   padding 30px 60px
   background-color #fff
 }
</style>
