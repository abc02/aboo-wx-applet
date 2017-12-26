import Wepy from 'wepy'
import FixingService from '../services/fixingService'
import Tips from '../utils/tips'
import QQMapWX from '../utils/qqmap-wx-jssdk'
export default class Fixing extends Wepy.mixin {
  data = {
    fixingsInfo: null
  }
  JoinFixingRequest(fixing, key) {
    let userInfo = Wepy.$instance.GetUserInfo()
    let data = {}
    data.userId = userInfo.UserId + ''
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
    return await FixingService.GetBindinginfo(this.JoinFixingRequest())
  }
  // 获取设备最近一次历史定位数据
  async GetLastPosition(fixing) {
    let FixingLocationInfo = await FixingService.GetLastPosition(this.JoinFixingRequest(fixing))
    return await this.GetLastPositonResponse(FixingLocationInfo)
  }
  // 获取设备定位数据
  async GetLastPositionSmall(fixing) {
    let FixingLocationInfo = await FixingService.GetLastPositionSmall(this.JoinFixingRequest(fixing))
    return await this.GetLastPositonResponse(FixingLocationInfo)
  }
  async GetLastPositonResponse(res) {
    let exp
    res.ret ? exp = res.ret : exp = res.data.Ret
    switch (exp) {
      // 1003 初始化 1002 定位失败 1001 定位成功    13868623153  884127
      case 1001: // 定位成功
        // 转换经纬度
        let TencentLocationInfo = await this.GetBaiduToTencentLocationInfo(res.data.Position)
        return this.SetMarkers({message: '定位成功', iconPath: './assets/icon_gif_success.png'}, TencentLocationInfo.result, res.data)
      case 1002:// 定位失败
        return this.SetMarkers({message: '定位失败', iconPath: './assets/icon_gif_fail.png'})
      case 1003:// 正在初始化
        return this.SetMarkers({message: '正在初始化', iconPath: './assets/icon_gif_init.png'})
    }
  }
  SetMarkers(message, TencentLocationInfo = null, fixingInfo = null) {
    let res = {
      id: 0,
      iconPath: message.iconPath,
      width: 50,
      height: 50
    }
    let label = {
      content: message.message,
      fontSize: 16,
      x: -25,
      y: -80,
      borderWidth: 1,
      borderColor: '#f3f3f3',
      borderRadius: 6,
      bgColor: '#ffffff',
      padding: 3
    }
    if (TencentLocationInfo && fixingInfo) {
      res = {
        ...res,
        latitude: TencentLocationInfo.location.lat,
        longitude: TencentLocationInfo.location.lng,
        ...TencentLocationInfo,
        ...fixingInfo,
        label
      }
    } else {
      res = {
        ...this.markers[0],
        ...res,
        label
      }
    }
    console.log(res)
    return res
  }
  // 调用接口 latitude, longitude 百度 -> 腾讯
  GetBaiduToTencentLocationInfo(locationInfo) {
    // "120.61785902045,28.028979000195" = > ['120.61785902045', '28.028979000195']
    let locationInfoArr = locationInfo.split(',')
    return new Promise((resolve, reject) => {
      this.qqmapsdk.reverseGeocoder({
        location: {
          latitude: locationInfoArr[1],
          longitude: locationInfoArr[0]
        },
        coord_type: 3,
        success: function(res) {
          resolve(res)
        },
        fail: function(res) {
          reject(res)
        }
      })
    })
  }
  // 设备解绑
  async Unbind(fixing) {
    return await FixingService.Unbind(this.JoinFixingRequest(fixing))
  }
  // 设备默认
  async UpdateFixingIsDefault(fixing) {
    return await FixingService.UpdateFixingIsDefault(this.JoinFixingRequest(fixing))
  }
  onLoad() {
     // 实例化API核心类
    this.qqmapsdk = new QQMapWX({
      key: 'ZXCBZ-TY7CS-TPTOT-6JB22-WJFRF-YUFR6'
    })
  }
}
