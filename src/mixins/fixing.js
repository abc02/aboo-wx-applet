import Wepy from 'wepy'
import FixingService from '../services/fixingService'
import Tips from '../utils/tips'
export default class Fixing extends Wepy.mixin {
  data = {
    fixingsInfo: null
  }
  watch = {
    fixingsInfo() {
      if (this.fixingsInfo && this.fixingsInfo.length > 0) {
        [].forEach.call(this.fixingsInfo, fixing => {
          if (fixing.isDefault === '1') {
            this.GetLastPosition(fixing)
          }
        })
      }
    }
  }
  JoinFixingRequest(fixing, key) {
    let userInfo = Wepy.$instance.GetUserInfo()
    let data = {}
    data.userId = userInfo.UserId
    if (fixing) {
      data.fixingId = fixing.fixingId
    }
    if (key) {
      data[key] = fixing[key]
    }
    return data
  }
  // 获取用户绑定信息
  async GetBindinginfo() {
    let data = this.JoinFixingRequest()
    let res = await FixingService.GetBindinginfo(data)
    this.fixingsInfo = res.data
    this.$apply()
  }
  // 获取设备最近一次定位
  async GetLastPosition(fixing) {
    let data = this.JoinFixingRequest(fixing)
    let tmp = {
      iconPath: './assets/location-animte.gif',
      width: 50,
      height: 50
    }
    let res = await FixingService.GetLastPosition(data)
    if (res.ret !== 1001) return Tips.toast(res.code)
    let longitude = res.data.Position.split(',')[0]
    let latitude = res.data.Position.split(',')[1]
    tmp.id = res.data.MachineCode
    tmp.latitude = latitude
    tmp.longitude = longitude
    this.locationInfo = tmp
    this.markers = [tmp]
    this.$apply()
    Tips.toast(res.code)
  }
  methods = {
    getLastPosition() {
      let data = {
        fixingId: this.currentLocationInfo.id
      }
      this.GetLastPosition(data)
    }
  }
  onShow() {
    if (this.userInfo) {
      this.GetBindinginfo()
    }
  }
}
