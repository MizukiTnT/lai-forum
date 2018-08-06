<template>
  <div class="account">
    <el-form label-position="left"  label-width="120px" class="form" :model="formData">
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
      <el-form-item label="真实姓名">
        <el-input v-model="formData.realName"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="formData.gender" label="male">男</el-radio>
        <el-radio v-model="formData.gender" label="female">女</el-radio>
        <el-radio v-model="formData.gender" label="unknow">未知</el-radio>
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
        <span style="color:#606266;margin: 0 20px 0 30px">是否允许被私信</span>
        <el-switch
          v-model="formData.allow_msg"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        imageUrl: '',
        name: '',
        open: true,
        profile: '',
        nickName: '',
        realName: '',
        gender: 'unknow',
        work: '',
        allow_msg: true
      }
    }
  },
  methods: {
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleAvatarSuccess (res, file) {
      this.formData.imageUrl = URL.createObjectURL(file.raw)
    }
  }
}
</script>

<style lang="stylus">
  .account {
    width 100%
    background-color #fff
    position relative
    padding 50px 0 70px
    .form {
      width 600px
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

</style>
