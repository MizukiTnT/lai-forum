<template>
  <div class="user-detail">
    <div class="avatar">
      <img src="../../assets/images/timg.jpg" alt="">
    </div>
    <div class="detail-wrapper">
      <div class="name">122333</div>
      <div class="catlog">无简介</div>
      <div class="user">
        <div class="block">
          <i class="el-icon-edit-outline"></i>
          <span>编辑资料</span>
        </div>
      </div>
      <el-row class="focus">
        <el-col class="item" :span="12">
          <div>关注</div>
          <div>0</div>
        </el-col>
        <el-col class="item" :span="12">
          <div>粉丝</div>
          <div>0</div>
        </el-col>
      </el-row>
      <ul class="detail">
        <li>性别： {{userInfo.gender}}</li>
        <li>生日： {{userInfo.birthday}}</li>
        <li>职业： {{userInfo.job}}</li>
      </ul>
      <div class="page-focus">
        <div class="blue-button">
          <i class="el-icon-plus"></i>
          关注
        </div>
      </div>
    </div>
    <div class="hot" :style="{height: screenHeight + 'px'}" :class="{fixed: isFixed}" v-if="comment.length != 0 && isShow">
      <div class="title">
        <div class="left">热门推荐</div>
        <div class="right">
          <router-link to="">更多>></router-link>
        </div>
      </div>
      <ul class="topic">
        <li v-for="(item, index) in comment" :key="item.id" class="item">
          <el-row class="user-name">
            <el-col :span="6">
              <router-link  to="">
                <img src="../../assets/images/timg.jpg" class="avatar">
              </router-link>
            </el-col>
            <el-col :span="10" class="infos">
              <router-link class="user" to="">{{item.name}}</router-link>
              <div>{{item.focus}}人关注</div>
            </el-col>
            <el-col :span="8" class="focus-icon">
              <div class="content" :class="{selected: item.isFocus}" @click="handleFocus(index)">
                <i class="el-icon-plus"></i>
                {{item.isFocus ? '已关注' : '关注'}}
              </div>
            </el-col>
          </el-row>
          <ul class="list">
            <li>
              <router-link to="">今天是个好日子</router-link>
            </li>
            <li>
              <router-link to="">明天是个好日子</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <div class="refresh"></div>
    </div>
  </div>
</template>

<script>
import { fetchComment } from '@/api/article'
export default {
  data () {
    return {
      userInfo: {
        gender: '保密',
        birthday: '保密',
        job: '保密'
      },
      hasFocus: false,
      comment: [],
      scrollTop: 0, // 滚动距离
      top: 580, // 触顶距离
      bottom: 510,
      screenHeight: '', // 屏幕可视高度
      domHeight: '' // 文档高度
    }
  },
  computed: {
    avatar () {
      return this.$store.getters.userInfo.avatar
    },
    isFixed () {
      return this.scrollTop >= this.top
    },
    isShow () {
      return this.domHeight - (this.scrollTop + this.screenHeight) >= this.bottom
    }
  },
  mounted () {
    this.screenHeight = window.innerHeight - 103
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },
  async created () {
    let res = await fetchComment({uid: 31231})
    this.comment = res.data
  },
  methods: {
    handleFocus (index) {
      this.comment[index].isFocus = !this.comment[index].isFocus
    },
    handleScroll () {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.domHeight = document.body.offsetHeight || document.documentElement.offsetHeight
    },
    handleResize () {
      this.screenHeight = window.innerHeight - 103
    }
  }
}
</script>

<style lang="stylus" scoped>
  .user-detail {
    .detail-wrapper {
      position relative
      padding 30px 10px
      top -70px
      padding-top 70px
      background-color #fff
      color c-sub
      text-align center
      .name {
        margin-top 10px
        font-size 24px
      }
      .catlog {
        margin 15px 0
        font-size 14px
      }
      .user {
        .block {
          display inline-block
          padding 5px 30px
          background-color b-trd
          cursor pointer
        }
      }
      .focus {
        margin 15px 0
        padding 10px 0 0
        border-top 1px solid b-trd
        background-color #fff
        .item {
          text-align center
          cursor pointer
          &:hover {
            color c-main
          }
        }
      }
      .page-focus {
        .blue-button {
          display inline-block
          padding 10px 15px
          color #fff
          background-color #1677d9
          cursor pointer
          border-radius 3px
          .el-icon-plus {
            font-weight 600
          }
          &:hover {
            background-color #1885f2
          }
        }
      }
      .detail {
        text-align left
        padding-left 30px
        list-style none
        li {
          margin-bottom 15px
          padding 10px 0
          border-bottom 1px solid b-trd
        }
      }
    }
    .avatar {
      position relative
      z-index 1
      text-align center
      >img {
        border-radius 50%
        width 150px
        height 150px
      }
    }
    .hot {
      position relative
      top -50px
      background-color #fff
      padding 20px
      overflow scroll
      &.fixed {
        position fixed
        top 73px
        width 333.33px
      }
      .title {
        position relative
        margin-bottom 15px
        .left {
          font-size 16px
        }
        .right {
          position absolute
          right 0
          top 0px
          font-size 14px
          a {
            color c-sub
            &:hover {
              color #0e4d8c
            }
          }
        }
      }
      .topic {
        list-style none
        .item {
          border-bottom 1px dashed b-trd
          padding 10px 0
        }
        .user-name {
          display flex
          align-items center
          img {
            width 60px
            height 60px
          }
          .infos {
            .user {
              font-size 16px
            }
            div {
              margin-top 5px
              font-size 14px
              color c-sub
            }
          }
          .focus-icon {
            .content {
              display inline-block
              width 90px
              height 30px
              line-height 30px
              color #409eff
              cursor pointer
              text-align center
              border-radius 5px
              &.selected {
                color c-sub
              }
              i {
                font-weight 600
              }
            }
          }
        }
        .list {
          list-style disc
          margin-top 10px
          padding-left 15px
          li {
            margin-bottom 5px
            a {
              &:hover {
                color #0e4d8c
              }
            }
          }
        }
      }
    }
  }
</style>
