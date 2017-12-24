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
    let data = this.JoinFixingRequest()
    let res = await FixingService.GetBindinginfo(data)
    return res
  }
  // 获取设备最近一次历史定位数据
  async GetLastPosition(fixing) {
    let FixingLocationInfo = await FixingService.GetLastPosition(this.JoinFixingRequest(fixing))
    if (FixingLocationInfo.ret !== 1001) return Tips.toast('定位获取失败')
    // 转换经纬度
    let TencentLocationInfo = await this.GetBaiduToTencentLocationInfo(FixingLocationInfo.data.Position)
    let res = this.SetMarkers(TencentLocationInfo.result, FixingLocationInfo.data)
    return res
  }
  // 获取设备定位数据
  async GetLastPositionSmall(fixing) {
    let FixingLocationInfo = await FixingService.GetLastPositionSmall(this.JoinFixingRequest(fixing))
    if (FixingLocationInfo.data.Ret !== 1001) return Tips.toast('定位获取失败')
    // 转换经纬度
    let TencentLocationInfo = await this.GetBaiduToTencentLocationInfo(FixingLocationInfo.data.Position)
    let res = this.SetMarkers(TencentLocationInfo.result, FixingLocationInfo.data)
    return res
  }
  SetMarkers(markers, fixing) {
    let res = {
      id: 0,
      iconPath: './assets/location_animte.gif',
      width: 50,
      height: 50,
      latitude: markers.location.lat,
      longitude: markers.location.lng,
      ...markers,
      ...fixing
    }
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
  onLoad() {
     // 实例化API核心类
    this.qqmapsdk = new QQMapWX({
      key: 'ZXCBZ-TY7CS-TPTOT-6JB22-WJFRF-YUFR6'
    })
  }
}
