<template>
  <el-card shadow="hover" class="comment">
    <div slot="header" class="header">
      <span>最热文章</span>
      <el-button class="sort" type="text">本周</el-button>
      <el-button class="sort" type="text" autofocus>本日</el-button>
    </div>
    <ul class="news">
      <li>
        <div class="title">
          <span>1.</span>
          <router-link to=""> 213213212</router-link>
        </div>
      </li>
    </ul>
  </el-card>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
  .comment {
    .header {
      .sort {
        float right
        margin-left 5px
        padding 3px 0
        &:hover {
          text-decoration underline
        }
        &:focus {
          color c-main
          text-decoration underline
        }
      }
    }
    .news {
      .title {
        padding 5px 0
        font-size 16px
        border-bottom 1px dashed b-trd
        span {
          margin-right 5px
          font-style italic
          font-weight 600
        }
        a {
          &:hover {
            color #0e4d8c
          }
        }
        &:last-child {
          border-bottom none
        }
      }
    }
  }
</style>
