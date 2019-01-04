<template>
  <div class="editor-only">
    <div>
      <div class="quill-editor-example">
        <!-- quill-editor -->
        <quill-editor ref="myTextEditor"
          v-model="content"
          :options="editorOption"
          @blur="onEditorBlur"
          @change="onEditorBlur"
          @ready="onEditorReady">
        </quill-editor>
      </div>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        id="image"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
      </el-upload>
    </div>
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor'
  export default {
    data () {
      return {
        content: '', // 富文本编辑内容
        editorOption: {
          placeholder: '请输入内容',
          modules: { // quill 印入模块
            toolbar: [ // 上方工具栏配置
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote'],
              [{ 'header': 1 }, { 'header': 2 }],
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              [{ 'indent': '-1' }, { 'indent': '+1' }],
              [{ 'size': ['small', false, 'large', 'huge'] }],
              [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              [{ 'color': [] }, { 'background': [] }],
              [{ 'align': [] }],
              ['link', 'image']
            ]
          }
        }
      }
    },
    components: {quillEditor},
    methods: {
      onEditorBlur() {
        this.$emit('handleBlur', this.content)
      },
      onEditorReady () {
        this.$emit('handleBlur', this.content)
      },
      handleAvatarSuccess(res, file) {
        let addImage = this.$refs.myTextEditor.quill.getSelection()
        this.$refs.myTextEditor.quill.insertEmbed(addImage != null ? addImage.index : 0, 'image', res.datas, 'user')

      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
    computed: {
      editor() {
        return this.$refs.myTextEditor.quill
      }
    },
    mounted() {
      let _this = this
      let imgHandler = function (image) {
        if (image) {
          let input = document.querySelector('.el-upload__input')
          input.click()
        }
      }
      _this.$refs.myTextEditor.quill.getModule('toolbar').addHandler('image', imgHandler)
    }
  }
</script>

<style lang="stylus">
  .editor-only {
    padding 20px
    background-color #fff
    .ql-snow {
      line-height 20px
    }
  }
</style>