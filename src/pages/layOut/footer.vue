<template>
  <div class="footer-wrapper">
    <div class="layout-footer">
      <el-row>
        <el-col :span="10">
          <el-row class="links">
            <el-col :span="8">
              <div class="title"><img src="" class="icon" alt="">信息披露</div>
              <ul>
                <li>
                  <a href="https://lai.cn/front/aboutus/platformReport">运营报告</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/aboutus/trustData">运营数据</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/security/information-safety">信息安全</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/security/lr-cbo">风控体系</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/security/lawCredit">法律保障</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/security/recordInformation">备案信息</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/security/auditInformation">审核信息</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/security/legalPromise">法人承诺书</a>
                </li>
              </ul>
            </el-col>
            <el-col :span="8">
              <div class="title"><img src="" class="icon" alt="">最新动态</div>
              <ul>
                <li>
                  <a href="https://lai.cn/front/news/lrdt">来融动态</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/news/wzgg">平台公告</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/news/dhgl">贷后管理</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/news/hkgg">还款公告</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/news/mtbd">媒体报道</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/news/flfg">法律法规</a>
                </li>
              </ul>
            </el-col>
            <el-col :span="8">
              <div class="title"><img src="" class="icon" alt="">帮助中心</div>
              <ul>
                <li>
                  <a href="https://lai.cn/front/guidelines">新手指引</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/help/help-problems">常见问题</a>
                </li>
                <li>
                  <a href="https://lai.cn/front/help/help-costs">费用说明</a>
                </li>
              </ul>
            </el-col>
          </el-row>
        </el-col>
        <el-col class="code" :span="7">
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
        <el-col class="connect" :span="7">
          <div class="phone">
            <img src="../../assets/images/phone.png" alt="">
            <span>400-915-1000</span>
          </div>
          <div class="time">（人工9：00 ~ 21：00）</div>
          <div class="mail">合作与建议：qinjin@lai.cn</div>
        </el-col>
      </el-row>
      <div class="position">总部地址：</div>
      <el-row class="location">
        <el-col :span="10">
          <div>江西省-南昌市-红谷滩新区-红谷中大道1398号九江银行大厦第19层</div>
          <div>江西来融金融信息服务有限公司&nbsp;&nbsp;&nbsp;赣ICP备15005103号-3</div>
        </el-col>
        <el-col  :span="14">
          <el-row :gutter="100">
            <el-col :span="4">
              <a href="https://credit.cecdc.com/CX20150825011056100181.html">
                <img src="../../assets/images/honor-1.jpg" alt="">
              </a>
            </el-col>
            <el-col :span="4">
              <a href="http://gsxt.jxaic.gov.cn/ECPS/qyxxgsAction_initQyxyxxMain.action?qylx=1130&nbxh=3601252015050600139816&qylxFlag=1&zch=360125210062583">
                <img src="../../assets/images/honor-2.jpg" alt="">
              </a>
            </el-col>
            <el-col :span="4">
              <a href="http://webscan.360.cn/index/checkwebsite/url/lai.cn">
                <img src="../../assets/images/honor-3.jpg" alt="">
              </a>
            </el-col>
            <el-col :span="4">
              <a href="http://si.trustutn.org/info?sn=133150902000269325483">
                <img src="../../assets/images/honor-4.jpg" alt="">
              </a>
            </el-col>
            <el-col :span="4">
              <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">
                <img src="../../assets/images/honor-5.jpg" alt="">
              </a>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <div class="call-phone">
        <span>省互联网金融协会投诉电话：400-915-8227</span>
        <span>省政府金融办举报邮箱：jx_jrb_jcs@163.com</span>
        <span>江西银监局投诉电话：0791-86766700</span>
      </div>
      <div class="police">
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36010802000187" target="_blank">
          <img src="../../assets/images/beian.png" alt="">
          <span>赣公网安备 36010802000187号</span>
        </a>
      </div>
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
      width 1100px
      margin 0 auto
      padding 30px 0
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
        border-left 1px solid b-fir
        border-right 1px solid b-fir
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
      text-align center
      img {
        vertical-align middle
      }
      a {
        color c-sub
      }
    }
  }
</style>
