<template>
  <div class="page-wrapper">
    <!-- 文章主体 _S -->
    <el-card
      v-for="item in list"
      shadow="hover"
      class="page"
      :key="item.id">
      <!-- 用户信息 _S -->
      <el-row class="header">
        <el-col class="avatar" :xs="4" :sm="2" :md="2" :lg="2">
          <img src="../../assets/images/timg.jpg" alt="">
        </el-col>
        <el-col :xs="14" :sm="18" :md="18" :lg="18">
          <div class="user">
            <div class="name">{{item.name}}</div>
            <div class="annouce">{{item.synopsis}}</div>
          </div>
        </el-col>
        <el-col class="condition" :xs="6" :sm="4" :md="4" :lg="4">
          <div v-if="item.isTop" class="icon hot" >置顶</div>
          <div v-if="item.isHot" class="icon hot" >热帖</div>
        </el-col>
      </el-row>
      <!-- 用户信息 _E -->

      <!-- 文章梗概 _S -->
      <el-row :gutter="20" class="zt">
        <el-col :span="8">
          <router-link :to="'/article/page/' + item.id ">
            <img src="@/assets/images/example.jpg" alt="小图">
          </router-link>
        </el-col>
        <el-col class="details" :span="16">
          <router-link :to="'/article/page/' + item.id " class="title">{{item.title}}</router-link>
          <router-link :to="'/article/page/' + item.id " class="content">{{item.content}}</router-link>
        </el-col>
      </el-row>
      <!-- 文章梗概 _E -->

      <!-- 操作栏 _S -->
      <div class="operation">
        <span>{{item.reading}}人阅读</span>
        <span>{{item.like}}赞</span>
        <span>{{item.comment}}评论</span>
        <span>{{item.collection}}收藏</span>
        <span class="time">2小时以前 </span>
      </div>
      <!-- 操作栏 _E -->
    </el-card>
    <!-- 文章主体 _E -->
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    },
    sort: {
      type: String
    }
  },
  mounted () {
    console.log(this.list)
  }
}
</script>

<style lang="stylus">

 .page {
   position relative
   margin-top 10px
   .header {
     margin-bottom 15px
     .avatar {
       img {
         max-width 80%
         border-radius 100%
       }
     }
    .user {
      .name {
        color c-main
        font-size 18px
        font-weight 600
      }
      .annouce {
        width 100%
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        margin-top 10px
        font-size 14px
        color c-sub
      }

    }
   }
   .condition {
     text-align right
     .icon {
       display inline-block
       font-size 13px
       padding 2px 3px
       user-select none
       &.hot {
         color: c-imp
         radius-border c-imp
       }
     }
   }
   .zt {
     img {
       width 100%
     }
    .details {
      .title {
        margin-bottom 15px
        font-size 18px
        font-weight 700
        color c-main
        &:hover {
          color #0e4d8c
        }
      }
      .content {
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        word-wrap: break-word;
        overflow-wrap: break-word;
        font-size: 13px;
        line-height: 21px;
        color: #666;
        margin-top: 10px;
        height: 62px;
        overflow: hidden;
        &:hover {
          color #000
        }
      }
    }
   }
    .operation {
      position absolute
      right 20px
      bottom 20px
      font-size 13px
      span {
        margin-left 15px
        cursor pointer
        &.time {
          margin-top 5px
          font-size 12px
          color c-sub
        }
      }
    }
 }
 @media screen and (max-width 900px) {
   .operation {
     display none !important
   }
 }
 @media screen and (min-width 320px) and (max-width 768px){
  .page .header .avatar img {
    max-width 43px
    height 43px
  }
  .page .zt .details .title {
    font-size 14px
  }
  .page .zt .details .content {
    margin-top 0
    height: 41px;
    font-size: 12px;
    line-height: 20px;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
  .page .header .user .name {
    font-size 14px
  }
  .page .header {
    margin-bottom 7px
  }
  .link-wrapper .link {
    display flex
    flex-wrap nowrap
  }
  .link-wrapper .link li {
    flex 1 1 auto
  }
 }
</style>
