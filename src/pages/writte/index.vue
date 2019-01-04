<template>
  <div id="writte">
    <el-form label-position="left" ref="editorForm" :rules="rules" :model="form" label-width="55px" >
      <el-form-item label="标题:" prop="title" required >
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="简介:" prop="catlog" required >
        <el-input :rows="3" type="textarea" v-model="form.catlog"></el-input>
      </el-form-item>
      <el-form-item label="投票:">
        <vote @sendList="handleList" :width="width"></vote>
      </el-form-item>
      <el-form-item label="内容" required>
        <editor
          v-if="width >= 768"
          @handleBlur="getContent"
          ref="myTextEditor"></editor>
          <el-input v-else :rows="3" type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import editor from '@/components/editor'
import vote from '@/components/vote'
export default {
  name: 'app',
  data () {
    return {
      form: {
        title: '',
        catlog: '',
        content: ''
      },
      width: 0,
      vote: {},
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        catlog: [
          { required: true, message: '请输入简介', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    editor, vote
  },
  methods: {
    getContent (content) {
      this.form.content = content
    },
    getWidth () {
      this.width = document.documentElement.clientWidth || document.body.clientWidth
    },
    handleList (vote) { // 接受
      this.vote = vote
    },
    onSubmit () { // 提交代码验证
      this.$refs.editorForm.validate((valid) => {
        if (valid) {
          if (this.form.content !== '') {

          } else {
            this.$message({
              type: 'warning',
              message: '请输入文章内容'
            })
          }
        }
      })
    }
  },
  mounted () {
    this.getWidth()
    window.addEventListener('resize', this.getWidth)
  },
  destroyed () {
    window.removeEventListener('resize', this.getWidth)
  }
}
</script>

<style lang="stylus">
 #writte {
   padding 30px 60px
   background-color #fff
 }
 @media screen and (max-width 768px) {
   #writte {
     padding 30px 7px
    .editor-only {
      padding 0
    }
   }

 }
</style>
