<template>
  <div class="detail">
    <div class="link-wrapper">
      <ul class="link">
        <li v-for="(item, index) in linkWord" :class="{active: index === currentIndex}" :key="index">
          <router-link :to="{path: baseRoute + index}">{{item}}</router-link>
        </li>
      </ul>
    </div>
    <page v-loading="loading" :list="list"></page>
  </div>
</template>

<script>
import page from './page'
import { fetchArticle, fetchArticleByUserId } from '@/api/article'
export default {
  data () {
    return {
      list: [], // 文章列表数据
      loading: false, // 判断文章列表是否在加载 flag
      scrollTop: 0, // 当前上滑高度
      windowHeight: 0, // 当前可视区高度
      bodyHeight: 0, // 整个文档高度
      threshold: 650, // 触底判断距离
      pagesize: 10, // 默认每页文章数目
      page: 1, // 当前页面
      currentIndex: 1, // 当且路由params索引
      hasRequest: false, // 判断是否在请求
      isOver: false // 是否请求完数据
    }
  },
  components: {page},
  props: ['sort', 'baseRoute', 'linkWord', 'anchor'],
  watch: {
    sort (n) {
      this.handlePageChange(n)
    }
  },
  async created () {
    // 这个组件里面 不管是请求还是滚轮下滑 都要做一次判断 其实是不好的 我现在能想到的办法是再复制一份代码 页面调用的是具体的组件 就不用判断了
    let res
    this.currentIndex = +this.sort
    if (this.anchor === 'home') {
      res = await fetchArticle({type: 1, page: 1, pagesize: 10})
    } else if (this.anchor === 'account') {
      res = await fetchArticleByUserId({userId: '232344', type: 1, page: 1, pagesize: 10})
    }
    this.list = res.data.list
    if (res.data.toltalCount <= 10) this.isOver = true
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 处理页面切换
    async handlePageChange (key) {
      let _this = this
      let res
      _this.loading = true // 切换条目间出发loading页面
      _this.page = 1 // 每次切换后 重置当前页面的page
      _this.currentIndex = +key // 获取请求所需要的type
      _this.isOver = false // 重置完结flag
      if (this.anchor === 'home') {
        res = await fetchArticle({type: +key, page: _this.page, pagesize: _this.pagesize})
      } else if (this.anchor === 'account') {
        res = await fetchArticleByUserId({userId: '221321', type: +key, page: _this.page, pagesize: _this.pagesize})
      }
      _this.loading = false
      _this.list = res.data.list
    },
    // 监听滚动事件并发送请求
    async handleScroll () {
      let _this = this
      let res
      // 获取屏幕 文档 和滚动高度
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.bodyHeight = document.body.offsetHeight || document.documentElement.offsetHeight
      this.windowHeight = window.innerHeight
      // 做一个判断 如果文档高度减屏幕和滚动高度之和大于最小下拉判定 则请求数据
      if ((this.bodyHeight - this.scrollTop - this.windowHeight) <= this.threshold) {
        if (this.isOver) return false // 如果数据到底 则不再请求
        if (!_this.hasRequest) {
          _this.page++
          _this.hasRequest = true // 开始请求之后 防止其再次请求数据flag
          // 判断标识  根据标志切换不同接口
          if (this.anchor === 'home') {
            res = await fetchArticle({type: _this.currentIndex, page: _this.page, pagesize: _this.pagesize})
          } else if (this.anchor === 'account') {
            res = await fetchArticleByUserId({userId: '121', type: _this.currentIndex, page: _this.page, pagesize: _this.pagesize})
          }
          _this.list = _this.list.concat(res.data.list)
          _this.hasRequest = false // 请求完毕之后更改flag
          if (res.data.toltalCount <= _this.page * _this.pagesize) _this.isOver = true // 判断数据长度是否小于当前的请求的总长 小于则改变flag
        }
      }
    }
  }
}
</script>

<style lang="stylus">
.link-wrapper {
  position relative
  .link {
    background-color #fff
    li {
      display inline-block
      width 100px
      cursor pointer
      color c-main
      text-align center
      font-size 14px
      a {
        display inline-block
        width 100%
        height 100%
        padding 20px 0
      }
      &.active {
        border-bottom 3px solid #409EFF
      }
      &:hover {
        color #000
        font-weight 600
      }
    }
  }
}
</style>
