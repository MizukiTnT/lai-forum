<template>
  <div class="footer-wrapper">
    <div class="layout-footer">
      <el-row>
        <el-col class="code" :xs="24" :sm="24" :md="7" :lg="7" :xl="7" >
          <el-row>
            <el-col :span="12">
              <img src="../../assets/images/phone.jpg" alt="">
              <div class="title">手机客户端</div>
            </el-col>
            <el-col :span="12">
              <img src="../../assets/images/weixin.jpg" alt="">
              <div class="title">微信公众号</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col class="loc" :xs="12" :sm="12" :md="10" :lg="10" :xl="10" >
          <div class="position">总部地址：</div>
          <el-row class="location">
            <div>
              <div>江西省-南昌市-红谷滩新区-红谷中大道1398号九江银行大厦第19层</div>
              <div>江西来融金融信息服务有限公司&nbsp;&nbsp;&nbsp;赣ICP备15005103号-3</div>
            </div>
          </el-row>
          <div class="police">
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36010802000187" target="_blank">
              <img src="../../assets/images/beian.png" alt="">
              <span>赣公网安备 36010802000187号</span>
            </a>
          </div>
        </el-col>
        <el-col class="connect" :xs="12" :sm="12" :md="7" :lg="7" :xl="7">
          <div class="phone">
            <img src="../../assets/images/phone.png" alt="">
            <span>400-915-1000</span>
          </div>
          <div class="time">（人工9：00 ~ 21：00）</div>
          <div class="mail">合作与建议：qinjin@lai.cn</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .footer-wrapper {
    width 100%
    background-color #fff
    border-top 1px solid b-fir
    font-size 14px
    color c-sub
    .layout-footer {
      max-width 1100px
      margin 0 auto
      padding 30px 15px
      .loc {
        padding-left 15px
      }
      .links {
        color c-main
        .title {
          font-size 15px
        }
        ul {
          padding 0
          list-style none
          li {
            margin-top 12px
            a {
              color c-sub
            }
          }
        }
      }
      .code {
        margin-bottom 15px
        text-align center
        .title {
          margin-top 10px

        }
      }
      .connect {
        padding-left 30px
        .phone {
          color #fd5353
          font-size 20px
          font-weight 900
          img {
            vertical-align middle
          }
        }
        .time {
          margin-top 10px
        }
        .mail {
          margin-top 20px
        }
      }
    }
    .position {
      margin 15px 0 5px
    }
    .location {
      margin-bottom 15px
    }
    .call-phone {
      span {
        margin-right  10px
      }
    }
    .police {
      margin 30px 0
      img {
        vertical-align middle
      }
      a {
        color c-sub
      }
    }
  }
  @media screen and (max-width 768px){
    .code {
      img {
        width 40%
      }
    }
  }
</style>
