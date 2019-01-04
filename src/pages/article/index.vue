<template>
  <div class="article-page">
    <el-row :gutter="30">
      <!-- 左侧收藏栏 _S -->
      <el-col class="hidden-sm-and-down" :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
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
      <el-col :xs="24" :sm="14" :md="14" :lg="14" class="text-wrapper" :span="14">
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
        <!-- 投票内容 _S -->
        <div class="vote">
          <vote-template v-if="article.allow_vote"
            :voteList="article.voteList"
            :vote_title="article.vote_title"
            :allow_checkbox="article.allow_checkbox"
            :id="articleId"
          ></vote-template>
        </div>
        <!-- 投票内容 _E -->
        <el-row :gutter="20" class="to-share">
          <el-col :span="6">分享至</el-col>
          <el-col class="trilateral" :span="18">
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
      <el-col :xs="0" :sm="10" :md="6" :lg="6">
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
        <rec limit="274"></rec>
      </el-col>
      <!-- 右侧拓展栏 _E -->
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import rec from '@/components/recommend'
import voteTemplate from '@/components/vote/vote_template'
import {parseTime} from '@/utlis'
import {fetchArticleById, fetchRecColumn} from '@/api/article'
export default {
  data () {
    return {
      template: `<ul><li class="ql-indent-1">请输入内容</li></ul>`, // 富文本模板
      discuss: '', // 对于当前文章的评论内容
      buttonFlag: false, // 是否显示对当前文章评论的按钮
      isliked: true,
      replyValue: '', // 回复评论的内容
      replyId: '', // 当前回复的评论的id
      articleId: '', // 文章id
      article: '', // 文章内容主题
      recColumn: {}, // 右侧专栏内容
      showIndex: null, // 页面显示具体回复框
      page: 0, // 回复页面
      recSize: 5 // 每页回复内容
    }
  },
  components: {
    rec, voteTemplate
  },
  watch: {
    '$route': 'getArticle'
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
    },
    async getArticle () {
      this.id = this.$route.params.id
      let res = await fetchRecColumn({page: this.page, id: this.articleId, size: this.recSize})
      let article = await fetchArticleById({a: 'aaa'})
      this.article = article.data
      this.articleId = this.article.id
      this.recColumn = res.data
      console.log(this.article,this.articleId,this.recColumn)
    }

  },
  mounted () {
    this.getArticle()
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
      position relative
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
            display inline-block
            width 100%
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
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
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        margin-top 5px
        font-size 12px
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
          display inline-block
          width 100%
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
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
