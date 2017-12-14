import Wepy from 'wepy'
export default class VCode extends Wepy.mixin {
  data = {
    waitSecond: {},
    timeoutId: null
  }
  computed = {
    isWaiting() {
      return this.waitSecond > 0
    },
    btnText() {
      return this.isWaiting > 0 ? `请等待${this.waitSecond}秒` : '获取验证码'
    }
  }
  cd(second) {
    if (this.isWaiting) {
      return
    }
    this.waitSecond = second
    this.interval = setInterval(() => {
      this.waitSecond--
      if (this.waitSecond === 0) {
        clearInterval(this.interval)
      }
      this.$apply()
    }, 1000)
  }
  methods = {
    /**
     * 传递点击事件
     */
    onCodeTap(style) {
      if (this.isWaiting) {
        return
      }
      this.input.style = style
      this.SendSms(this.input)
    }
  }
}
