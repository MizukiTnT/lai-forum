<template>
      <!-- 投票模板 _S -->
    <transition name="el-fade-in-linear">
      <ul class="vote_content">
        <div class="content_tool">
          <span>{{ vote_title }}</span>
        </div>
        <!-- 投票选项 _S -->
        <li v-for="(item, index) in voteList" :class="{active: voteForm.indexOf(index) !== -1 }" @click="handleChoose(index)">
          <el-row type="flex" align="middle">
            <el-col :span="3" class="vote_text">{{ item.select }}</el-col>
            <el-col :span="18">
              <el-progress :text-inside="true" :stroke-width="18" :percentage="80" :color="item.color" class="vote_body"></el-progress>
            </el-col>
            <el-col :span="3" style="text-align: center">
              34
            </el-col>
          </el-row>
        </li>
        <!-- 投票选项 _E -->
        <div class="submit">
          <span :class="{show: showWarning}">请选择投票选项</span>
          <el-button type="primary" @click="submit">投票</el-button>
        </div>
      </ul>
    </transition>
    <!-- 投票模板 _E -->
</template>

<script>
export default {
  data () {
    return {
      voteForm: [],
      showWarning: false
    }
  },
  props: [
    'voteList',
    'vote_title',
    'allow_checkbox',
    'id'
  ],
  methods: {
    submit () {
      if (this.voteForm.length === 0) {
        this.showWarning = true
        return
      }

    },
    handleChoose(index) { // 处理内容
      if (this.allow_checkbox) { // 如果可以多选
        let pos = this.voteForm.indexOf(index)
        if (pos != -1) {
          this.voteForm.splice(pos, 1)
        } else {
          this.voteForm.push(index)
        }
      } else { // 如果不能多选
        if (this.voteForm.length === 0) {
          this.voteForm.push(index)
        } else {
          this.voteForm.splice(0, 1)
          this.voteForm.push(index)
        }
      }
      this.showWarning = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .vote_content {
    position: relative;
    margin 20px 0 30px
    padding: 0 20px
    border: 1px solid #EBEEF5
    border-radius 5px
    list-style: none
    .content_tool {
      font-size: 16px
      margin: 15px 0
      padding 0 0 10px
      border-bottom: 1px solid #EBEEF5
    }
    .vote_temp_close {
      position: absolute
      top: 10px
      right: 10px
      font-size: 22px
      cursor: pointer
    }
    li {
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #E4E7ED;
      border-radius: 5px;
      color: #909399;
      cursor: pointer;
      transition: all .15s;
      &:hover {
        border: 1px solid #409EFF;
      }
      &.active {
        color: #303133;
        border: 1px solid #409EFF;
      }
      .vote_text {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .submit {
      margin-bottom 10px
      text-align right
      .el-button {
        padding: 5px 10px;
      }
      span {
        float left
        font-size 13px
        color #fd5353
        line-height 25px
        opacity 0
        transition opacity .35s
        &.show {
          opacity 1
        }
      }
    }
  }
</style>

