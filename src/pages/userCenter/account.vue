<template>
  <div class="account">
    <el-form label-position="left"  :label-width="labelWidth" class="form" :model="formData">
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader load"
          action=""
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="formData.imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="formData.nickName"></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <el-date-picker
          v-model="formData.birthday"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="formData.gender" label="male">男</el-radio>
        <el-radio v-model="formData.gender" label="female">女</el-radio>
        <el-radio v-model="formData.gender" label="unknow">保密</el-radio>
      </el-form-item>
      <el-form-item label="职业">
        <el-input v-model="formData.work"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input
          type="textarea"
          rows="3"
          resize="none"
          maxlength="50"
          placeholder="请输入内容"
          v-model="formData.profile">
        </el-input>
      </el-form-item>
      <el-form-item label="是否公开">
        <el-switch
          v-model="formData.open"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
        <span style="color:#606266;margin-left: 10px">允许私信</span>
        <el-switch
          v-model="formData.allow_msg"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>

      <el-form-item>
        <el-button style="width: 100%;margin-left: -30px"  type="primary">提交</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        imageUrl: '', // 上传图片的地址
        name: '', // 用户名
        open: true, // 是否保密
        profile: '', // 简介
        nickName: '',
        gender: 'unknow', // 性别
        work: '', // 工作
        birthday: '', // 生日
        allow_msg: true, // 允许私信
        width: 0 // 检测宽度
      }
    }
  },
  computed: {
    labelWidth () {
      return this.width > 768 ? (120 + 'px') : (70 + 'px')
    }
  },
  methods: {
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
        return false
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
        return false
      }
      console.log(file)
    },
    handleAvatarSuccess (res, file) {
      this.formData.imageUrl = URL.createObjectURL(file.raw)
    },
    handleUpload (res, file) {

    },
    getWidth () {
      this.width = document.documentElement.clientWidth || document.body.clientWidth
    }
  },
  mounted () {
    this.getWidth()
    window.addEventListener('resize', this.getWidth)
  }
}
</script>

<style lang="stylus" scoped>
  .account {
    width 100%
    background-color #fff
    position relative
    padding 50px 0 70px
    .form {
      max-width 600px
      margin 0 auto
      padding 30px 100px 30px 25px
      border 1px solid b-fir
      .load {
        text-align center
        .el-upload {
          border: 1px dashed #d9d9d9;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            text-align: center;
            &:hover {
              border-color: #409EFF;
              transition all .35s
            }
          }
          .avatar {
            width: 178px;
            height: 178px;
            display: block;
          }
        }
      }

    }
  }

  @media screen and (max-width 768px) {
    .account {
      padding 30px 0
      .el-input {
        width 100%
      }
      .form {
        padding 30px
        border none
        .load {
          .el-upload {
            .avatar-uploader-icon {
              font-size: 20px;

              width: 70px;
              height: 70px;
              line-height: 70px;
            }
            .avatar {
              width: 70px;
              height: 70px;
              display: block;
            }
          }
        }
      }
    }
  }
</style>
