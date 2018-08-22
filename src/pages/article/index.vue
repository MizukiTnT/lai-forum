<template>
  <div class="article-page">
    <el-row :gutter="30">
      <!-- 左侧收藏栏 _S -->
      <el-col :xs="0" :span="4">
        <div class="comment">
          <div class="icon">
            <div class="to-comment"><i class="el-icon-edit"></i> 去评论</div>
            <div class="collection"><i class="el-icon-star-on"></i> 收藏</div>
          </div>
          <div class="navigator">
            <div class="pre">
              <div class="title">上一篇</div>
              <router-link class="nav" :to="{path: '/article/page/' + article.preId }">{{article.preTitle}}</router-link>
            </div>
            <div class="next">
              <div class="title">下一篇</div>
              <router-link class="nav" :to="{path: '/article/page/' + article.nextId }">{{article.nextTitle}}</router-link>
            </div>
          </div>
        </div>
      </el-col>
      <!-- 左侧收藏栏 _E -->
      <!-- 文章主体 _S -->
      <el-col :xs="24" class="text-wrapper" :span="14">
        <div class="title">{{article.title}}</div>
        <div class="name">
          <span>作者：{{article.name}}</span>
          <span class="time">{{article.time | formatTime}}</span>
        </div>
        <!-- 摘要 _S -->
        <div class="catlog">
          <div class="content">{{article.catlog}}
          </div>
        </div>
        <!-- 摘要 _E -->
        <!-- 富文本内容 _S -->
        <div class="ql-container ql-snow">
          <div v-html="template" class="ql-editor"></div>
        </div>
        <!-- 富文本内容 _E -->
        <el-row :gutter="20" class="to-share">
          <el-col :span="4">分享至</el-col>
          <el-col class="trilateral" :span="20">
            <el-popover
              placement="top"
              class="cursor"
              trigger="hover">
                <div>
                  <img src="../../assets/images/weixin.jpg" alt="">
                </div>
              <span slot="reference"><img src="../../assets/images/weixin.png"></span>
            </el-popover>
            <a href=""><img src="../../assets/images/weibo.png"></a>
          </el-col>
        </el-row>
        <!-- 讨论区 _S -->
        <div class="discuss">
          <div class="title">评论区</div>
          <el-row :gutter="20">
            <el-col :span="3">
              <img src="../../assets/images/timg.jpg" alt="">
            </el-col>
            <el-col :span="21">
              <el-input
                type="textarea"
                :rows="2"
                resize="none"
                @focus="handleFocus"
                @blur="handleBlur"
                placeholder="输入您的评论"
                v-model="discuss">
              </el-input>
            </el-col>
            <div>
              <el-button class="submit" v-show="buttonFlag" type="primary" @click="submitComment">提交</el-button>
            </div>
          </el-row>
          <ul class="comment-list">
            <li v-for="(item, index) in article.reply" :key="item.id">
              <div class="head">
                <img src="../../assets/images/timg.jpg">
                <div class="text">
                  <div class="user_name">{{item.name}}</div>
                  <div class="comment_time">{{item.time | formatTime}}</div>
                </div>
              </div>
              <div class="content">{{item.text}}</div>
              <div v-if="item.hasReply" class="comment_reply">
                <div>
                  <span class="reply_name">{{item.reply_to.name}}</span>
                  <span class="replya_time">{{item.reply_to.time | formatTime}}</span>
                </div>
                <div class="reply_content">{{item.reply_to.text}}</div>
              </div>
              <div class="comment_operation">
                <span @click="handleLike" :class="{clicked: isliked}">赞</span>
                <span @click="showReply(index)"><i class="el-icon-edit"></i>回复</span>
                <div class="comment_reply_my" v-show="showIndex === index">
                  <el-input
                    type="textarea"
                    :rows="2"
                    resize="none"
                    placeholder="输入您的评论"
                    @blur="setReply(item.id, $event)"
                    >
                  </el-input>
                  <div class="comment_repyly_to">
                    <span @click="cancleReply()">取消</span>
                    <span class="border" @click="submitReply">回复</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 讨论区 _E -->
      </el-col>
      <!-- 文章主体 _E -->
      <!-- 右侧拓展栏 _S -->
      <el-col :xs="0" :span="6">
        <div class="column">
          <el-row class="head" :gutter="20">
            <el-col class="pic" :span="4">
              <img src="../../assets/images/weixin.png" alt="">
            </el-col>
            <el-col class="tit" :span="12">
              <router-link to="">{{recColumn.type}}</router-link>
            </el-col>
            <el-col class="btn" :span="8">
              <div class="focus">
                <i class="el-icon-plus"></i>
                <span>{{recColumn.isFocus ? '已关注' : '关注'}}</span>
              </div>
            </el-col>
          </el-row>
          <div class="catlog">关系恶化,跌倒至历史低点</div>
          <div class="hasfocus" :gutter="20">
            <div>关注数</div>
            <div>{{recColumn.focusNumber}}</div>
          </div>
          <div class="rec">
            <div class="title">为您推荐</div>
            <router-link to="">{{recColumn.recommendTitle}}</router-link>
          </div>
        </div>
        <rec></rec>
      </el-col>
      <!-- 右侧拓展栏 _E -->
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import rec from '@/components/recommend'
import {parseTime} from '@/utlis'
import {fetchArticleById, fetchRecColumn} from '@/api/article'
export default {
  data () {
    return {
      template: `<ul><li class="ql-indent-1">请输入内容</li></ul>`,
      discuss: '',
      buttonFlag: false,
      isliked: true,
      replyValue: '',
      replyId: '',
      articleId: '',
      article: '',
      recColumn: '',
      showIndex: null,
      page: 0,
      recSize: 5
    }
  },
  components: {
    rec
  },
  methods: {
    handleFocus () {
      this.buttonFlag = true
    },
    handleBlur () {
      this.buttonFlag = false
    },
    // 回复当前文章
    submitComment () {

    },
    // 点赞功能
    handleLike () {},
    // 设置当前回复人的id和回复内容
    setReply (id, event) {
      this.replyId = id
      this.replyValue = event.target.value
    },
    // 提交回复框内容
    submitReply () {

    },
    // 将当前的回复框消失
    cancleReply () {
      this.showIndex = null
    },
    showReply (index) {
      this.showIndex = index
    }
  },
  async created () {
    let res = await fetchArticleById({a: 'aaa'})
    this.article = res.data
    this.articleId = this.article.id
    console.log(this.article)
  },
  async mounted () {
    let res = await fetchRecColumn({page: this.page, id: this.articleId, size: this.recSize})
    this.recColumn = res.data
    console.log(this.recColumn)
  },
  filters: {
    formatTime: (value) => {
      return parseTime(value)
    }
  }
}
</script>

<style lang="stylus" >
  .article-page {
    .comment {
      background-color #fff
      padding 20px
      .icon {
        font-size 16px
        color c-main
        .to-comment {
          cursor pointer
          margin-bottom 10px
          i {
            margin-right 10px
            font-size 20px
          }
          &:hover {
            color #fd5353
          }
        }
        .collection {
          cursor pointer
          i {
            margin-right 10px
            font-size 20px
          }
          &:hover {
            color #1677d9
          }
        }
      }
      .navigator {
        margin-top 20px
        padding-top 20px
        border-top 1px dashed b-sec
        font-size 14px
        .pre {
          margin-bottom 20px
        }
        .title {
          margin-bottom 5px
          color c-sub
        }
        a {
          &:hover {
            color #fd5353
          }
        }
      }
    }
    .column {
      background-color #fff
      padding 20px
      margin-bottom 15px
      .head {
        display flex
        align-items center
        .pic {
          img {
            width 30px
            height 30px
          }
        }
        .tit {
          a {
            &:hover {
              color #fd5353
            }
          }
        }
        .btn {
          cursor pointer
          color #66b1ff
          font-size 12px
          &:.selected {
            color c-sub
            .i {
              display none
            }
          }
        }
      }
      .catlog {
        margin-top 5px
        font-size 13px
        color c-sub
      }
      .hasfocus {
        margin-top 15px
        div {
          font-size 14px
          &:first-child {
            margin-bottom 3px
            color c-sub
          }
        }
      }
      .rec {
        margin-top 10px
        padding-top 20px
        border-top 1px dashed b-trd
        font-size 14px
        .title {
          margin-bottom 10px
          color c-comm
        }
        a {
          &:hover {
            color #0e4d8c
          }
        }
      }
    }
  }
  .text-wrapper {
    padding 30px 10px
    background-color #fff
    .title {
      font-size 24px
      font-weight 600
    }
    .name {
      margin 20px 0 35px
      font-size 14px
      .time {
        color c-comm
        margin-left 15px
      }
    }
    .catlog {
      padding 15px 30px
      line-height 22px
      background-color #f2f3f4
      border-left 1px solid #1677d9
    }
    .ql-container {
      padding 30px 0 50px
    }
    .to-share {
      padding 10px 20px
      display flex
      align-items center
      background-color #f2f3f4
      .trilateral {
        .cursor {
          cursor pointer
        }
        img {
          width 30px
          height 30px
          margin-right 5px
          vertical-align middle
        }
      }
    }
    .discuss {
      margin-top 30px
      padding 0 20px
      .title {
        margin 50px 0 30px
        padding 0 0 5px 15px
        font-weight 400
        font-size 18px
        border-left 5px solid #fd5353
      }
      .submit {
        margin 15px 10px 0 0
        float right
      }
      .comment-list {
        list-style none
        margin-top 35px
        padding 0 25px
        li {
          margin-top 30px
          border-bottom 1px solid b-sec
          .head {
            display flex
            align-items center
            .text {
              display inline-block
              margin-left 10px
            }
          }
          .content {
            margin 15px 0
          }
          .comment_reply {
            background-color #f2f2f2
            padding 10px 15px
            font-size 14px
            .replya_time {
              color c-sub
              margin-left 10px
            }
            .reply_content {
              margin 10px 0 5px
              color c-sub
            }
          }
          .comment_operation {
            margin 10px 0 30px
            >span {
              font-size 14px
              margin-right 10px
              cursor pointer
              &:hover {
                color #409EFF
              }
            }
            .comment_reply_my {
              margin-top 15px
              padding 0 15px
              .comment_repyly_to {
                margin-top 10px
                text-align right
                color c-sub
                >span {
                  margin-left 15px
                  cursor pointer
                  font-size 14px
                }
              }
            }
          }
        }
      }
      img {
        width 40px
        height 40px
        border-radius 50%
      }
    }
  }
  .ql-container.ql-snow {
    border none
  }
</style>
