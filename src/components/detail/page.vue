<template>
  <div class="page-wrapper">
    <el-card
      v-for="item in list"
      shadow="hover"
      class="page"
      :key="item.id">
      <el-row class="header">
        <el-col :span="2" class="avatar">
          <img src="../../assets/images/timg.jpg" alt="">
        </el-col>
        <el-col :span="18">
          <div class="user">
            <div class="name">{{item.name}}</div>
            <div class="annouce">{{item.synopsis}}</div>
          </div>
        </el-col>
        <el-col class="condition" :span="4">
          <div v-if="item.isTop" class="icon hot" >置顶</div>
          <div v-if="item.isHot" class="icon hot" >热帖</div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="zt">
        <el-col :span="8">
          <router-link to="list">
            <img src="@/assets/images/example.jpg" alt="小图">
          </router-link>
        </el-col>
        <el-col class="details" :span="16">
          <router-link to="" class="title">{{item.title}}</router-link>
          <router-link to="" class="content">{{item.content}}</router-link>
        </el-col>
      </el-row>
      <div class="operation">
        <span>{{item.reading}}人阅读</span>
        <span>{{item.like}}赞</span>
        <span>{{item.comment}}评论</span>
        <span>{{item.collection}}收藏</span>
        <span class="time">2小时以前 </span>
      </div>
    </el-card>
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
  created () {

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
         width 80%
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
</style>
