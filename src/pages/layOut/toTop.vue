<template>
  <div class="tool">
    <transition name="el-fade-in-linear">
      <div v-show="top >= 300">
        <div @click="toTop" class="item notice">
          <div>
            <i class="el-icon-arrow-up"></i>
          </div>
        </div>
        <div  @click="showModel = true" class="item top">
          <div>
            <i class="el-icon-edit-outline"></i>
          </div>
        </div>
      </div>
    </transition>

    <el-dialog :modal="false" title="意见反馈" :visible.sync="showModel">
      <el-form :model="form" v-loading="loading">
        <el-form-item label="您的建议:">
          <el-input maxlength="300" resize="none" v-model="form.advice" type="textarea" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showModel = false">取 消</el-button>
        <el-button type="primary" @click="submitAdvice">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModel: false,
      loading: false,
      form: {
        advice: ''
      }
    }
  },
  computed: {
    top () {
      return this.$store.getters.top
    }
  },
  mounted () {
    this.$store.dispatch('watchScroll')
  },
  methods: {
    submitAdvice () {

    },
    toTop () {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  .tool {
    position fixed
    right 25px
    bottom 35px
    z-index 1994
    width 60px
    font-size 14px
    .item {
      margin-bottom 10px
      height 60px
      padding-top 18px
      text-align center
      background-color #fff
      box-sizing border-box
      border 1px solid c-main
      cursor pointer
      transition all .3s
      &:hover {
        transform scale(1.1)
      }
      i {
        font-size 22px
      }
    }
  }
  @media screen and (max-width 768px) {
    .tool {
      width auto
      .item {
        padding-top 0
        height auto
        border none
        background-color transparent
      }
    }
    .footer-wrapper .layout-footer .connect .phone {
      font-size 16px
    }
  }
</style>
