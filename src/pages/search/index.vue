<template>
  <div class="search">
    <!-- 搜索内容 _S -->
    <el-row :gutter="20" class="content">

      <el-col class="items"  :xs="24" :sm="16" :md="16" :lg="16">
        <!-- 搜索栏 _S -->
        <el-row class="search_bar" :gutter="15" >
          <el-col :span="12">
            <el-input
              v-model="searchItem"
              placeholder="搜索"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <el-button @click="search_again" type="primary">搜索</el-button>
          </el-col>
        </el-row>
        <!-- 搜索栏  _E -->

        <!-- 搜索提示 _S -->
        <div class="hint">
          为您搜索到了{{total}}条关于<em>{{keywords}}</em>的消息
        </div>
        <!-- 搜索提示 _E -->

        <!-- 搜索结果  _S -->
        <div v-if="total != 0" class="list">
          <ul>
            <li v-for="item in list" :key="item.id">

              <el-row :gutter="10" class="catlog">
                <el-col class="img_wrapper" :span="8">
                  <router-link :to="'/article/page/' + item.id ">
                    <img :src="item.imgUrl" alt="">
                  </router-link>
                </el-col>
                <el-col :span="16">
                  <router-link :to="'/article/page/' + item.id " class="title" v-html="item.title"></router-link>
                  <router-link class="search_catlog" :to="'/article/page/' + item.id ">
                    <div class="search_item_content" v-html="item.content"></div>
                  </router-link>
                </el-col>
              </el-row>
            </li>
          </ul>
        </div>
        <!-- 搜索结果  _E -->

        <!-- 分页  _S -->
        <div v-if="total != 0" class="pagenation">
          <el-pagination
            :page-size="pagesize"
            :page-count="10"
            layout="prev, pager, next"
            :total="total">
          </el-pagination>
        <!-- 分页  _S -->

        </div>
      </el-col>
      <!-- 搜索内容 _E -->
      <!-- 搜索排行 _S -->
      <el-col :xs="0" :sm="8" :md="8" :lg="8">
        <div class="board">
          <div class="title">搜索排行</div>
          <div class="list">
            <div
              v-for="item in board"
              class="item"
              :key="item.keywords"
            >
              <router-link
                :to="{path: '/search/query',query: {keywords: item.keywords}}"
                >{{item.title}}</router-link>
              </div>
          </div>
        </div>
      </el-col>
      <!-- 搜索排行 _E -->
    </el-row>
  </div>
</template>

<script>
import {search} from '../../api/common'
export default {
  data () {
    return {
      list: [],
      total: 0,
      pagesize: 10,
      page: 0,
      searchItem: '',
      keywords: '',
      board: [
        {
          title: '今天好日子',
          keywords: '好日子'
        },
        {
          title: 'b',
          keywords: 'b'
        },
        {
          title: 'c',
          keywords: 'c'
        }
      ]
    }
  },
  watch: {
    '$route': 'getSearch'
  },
  methods: {
    getSearch () {
      search({
        keywords: this.$route.query.keywords,
        page: this.page,
        pagesize: this.pagesize
      }).then(res => {
        this.total = res.data.length
        this.list = res.data.search
        this.keywords = this.$route.query.keywords
        this.searchItem = this.$route.query.keywords
      })
    },
    search_again () {
      if (this.searchItem === '') return
      this.$router.push({
        path: '/search/query',
        query: {keywords: this.searchItem}
      })
    }
  },
  created () {
    this.getSearch()
  }
}
</script>

<style lang="stylus">
  em {
    color #fd5353
    font-style normal
  }
  .search {
    margin 0 auto
    max-width  1000px
    .content {
      .items {
        padding 15px 10px
        background-color #fff
        min-height 500px
        .search_bar {
          margin-bottom 25px
        }
        .hint {
          padding-bottom 10px
          border-bottom 1px solid hsla(240,2%,90%,.8)
        }
        .list {
          margin-top 30px
          ul {
            list-style none
            li {
              margin-top 15px
              color #333
              padding-bottom 10px
              border-bottom 1px solid #f0f0f0
              .search_item_content {
                height: 90px;
                line-height: 1.5em;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 5;
                -webkit-box-orient: vertical;
                &:hover {
                  color #666
                }
              }
              .img_wrapper {
                img {
                  width 180px
                  height 135px
                }
              }
              .title {
                margin-bottom 7px
                display inline-block
                color inherit
                font-weight 600
                font-size 18px
                border-bottom 1px solid transparent
                &:hover {
                  border-bottom 1px solid #666
                }
              }
              .catlog {
                color inherit
              }
              .search_catlog {
                color inherit
                font-size 15px
              }
            }
          }

        }
      }
      .board {
        padding 15px 10px
        background-color #fff
        box-sizing border-box
        min-height 500px
        .title {
          font-size 16px
          border-bottom 1px solid #f8f8f8
          padding-bottom 10px
        }
        .item {
          font-size 16px
          margin-top 15px
        }
      }
    }
  }
  @media screen and (max-width 768px) {
    .search .content .items .list ul li .img_wrapper img {
      width: 100%
      height: 110px
    }
  }
</style>
