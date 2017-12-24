import Wepy from 'wepy'
import LoginService from '../services/loginService'
import Tips from '../utils/tips'
export default class testMixin extends Wepy.mixin {
  toIndex(res) {
    if (res.ret !== 1001) return
    this.$parent.globalData.userInfo = res
    this.$redirect({
      url: '../index/Index'
    })
  }
  async SendSms(data) {
    if (!data.phone) return Tips.toast('手机号码不能为空')
    let res = await LoginService.SendSms(data)
    Tips.toast(res.code, () => {
      if (res.ret !== 1001) return
      this.cd(60)
    })
  }
  methods = {
    async PhoneLoginAccount(data) {
      let res = await LoginService.PhoneLoginAccount(data)
      Tips.toast(res.code, () => {
        this.toIndex(res)
      })
    },
    async PhoneRegisterAccount(data) {
      let res = await LoginService.PhoneRegisterAccount(data)
      Tips.toast(res.code, () => {
        Wepy.navigateBack()
      })
    },
    async PhonePasswordGet(data) {
      let res = await LoginService.PhonePasswordGet(data)
      Tips.toast(res.code, () => {
        Wepy.navigateBack()
      })
    }
  }
}
