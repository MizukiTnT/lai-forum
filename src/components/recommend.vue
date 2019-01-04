<template>
  <el-card
    ref="rec"
    shadow="hover"
    class="comment"
    :style="{width: rwidth + 'px'}"
    :class="{pos: top > limit}">
    <div slot="header" class="header">
      <span>最热文章</span>
      <el-button class="sort" type="text">本周</el-button>
      <el-button class="sort" type="text" autofocus>本日</el-button>
    </div>
    <ul class="news">
      <li class="title" v-for="(item, index) in comments" :key="item.id">
        <div>
          <span>{{index + 1}}. </span>
          <router-link to="" class="link">{{item.title}}</router-link>
        </div>
      </li>
    </ul>
  </el-card>
</template>

<script>
import {fetchHot} from '@/api/article'
export default {
  data () {
    return {
      sort: 0,
      top: 0,
      comments: [],
      rwidth: 0
    }
  },
  props: ['limit'],
  methods: {
    handleScroll () {
      this.top = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset
    },
    getFatherWidth () {
      this.rwidth = this.$refs.rec.$parent.$parent.$el.clientWidth - 70
    }
  },
  async mounted () {
    let _this = this
    this.getFatherWidth()
    window.addEventListener('resize', this.getFatherWidth)
    window.addEventListener('scroll', this.handleScroll)
    let res = await fetchHot({sort: _this.sort})
    this.comments = res.data
  },
  destroyed () {
    window.removeEventListener('resize', this.getFatherWidth)
    window.removeEventListener('scroll', this.handleScroll)
  }

}

</script>

<style lang="stylus" scoped>
  .comment {
    &.el-card {
      transition all 0s
    }
    &.pos {
      position fixed
      top 83px
    }
    .header {
      .sort {
        float right
        margin-left 5px
        padding 3px 0
        &:hover {
          text-decoration underline
        }
        &.active {
          text-decoration underline
        }
      }
    }
    .news {
      list-style none
      .title {
        padding 10px 0
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
