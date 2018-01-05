import Wepy from 'wepy'
import LoginService from '../services/loginService'
import Tips from '../utils/tips'
export default class testMixin extends Wepy.mixin {
  ToIndex(res) {
    this.$parent.globalData.userInfo = res
    this.$redirect({
      url: '../index/Index'
    })
  }
  ToPhoneRegisterAccount(res) {
    this.$navigate({
      url: './PhoneRegisterAccount'
    })
  }
  async SendSms(data) {
    if (!data.phone) return this.Toast('手机号码不能为空')
    let res = await LoginService.SendSms(data)
    let dialog = await this.Toast(res.code)
    if (dialog.confirm) {
      // 1001 发送成功  // 1002 请勿频繁操作
      if (res.ret === 1001) return this.cd(60)
    }
  }
  methods = {
    async phoneLoginAccount(data) {
      let res = await LoginService.PhoneLoginAccount(data)
      let dialog = await this.Toast(res.code)
      if (dialog.confirm) {
        // 1001 登录成功 1002 手机号未注册 1003 登录超时
        if (res.ret === 1001) return this.ToIndex(res)
      }
    },
    async phoneRegisterAccount(data) {
      let res = await LoginService.PhoneRegisterAccount(data)
      let dialog = await this.Toast(res.code)
      if (dialog.confirm) {
        // 1001 注册成功 1002 该手机号码已被使用 1003
        if (res.ret === 1001) return Wepy.navigateBack()
      }
    },
    async phonePasswordGet(data) {
      let res = await LoginService.PhonePasswordGet(data)
      let dialog = await this.Toast(res.code)
      if (dialog.confirm) {
        // 1001 修改成功 1002 验证码错误/过期 1003
        if (res.ret === 1001) return Wepy.navigateBack()
      }
    },
    async phoneLogout() {
      let dialog = await this.Toast('您确定要退出账号吗?', '提醒', true)
      if (dialog.confirm) {
        Wepy.$instance.globalData.userInfo = null
        Wepy.reLaunch({
          url: '../login/PhoneLoginAccount'
        })
      }
    }
  }
}
