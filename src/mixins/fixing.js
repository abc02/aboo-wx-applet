import Wepy from 'wepy'
import FixingService from '../services/fixingService'
import Tips from '../utils/tips'
import QQMapWX from '../utils/qqmap-wx-jssdk'
export default class Fixing extends Wepy.mixin {
  data = {
    fixingsInfo: null
  }
  JoinFixingRequest(fixing, key) {
    let userInfo = Wepy.$instance.globalData.userInfo
    let data = {}
    data.userId = userInfo.UserId + ''
    if (fixing) {
      data.fixingId = fixing.fixingId
    }
    if (Array.isArray(key)) {
      key.forEach(key => {
        data[key] = fixing[key]
      })
    } else {
      if (key) {
        data[key] = fixing[key]
      }
    }
    console.log(data)
    return data
  }
  // 鞋垫绑定api
  async AddBinding(fixing) {
    let res = await FixingService.AddBinding(this.JoinFixingRequest(fixing, ['fixingPassword', 'relation']))
    console.log(res)
    return res
  }
  // 请求地址获取鞋垫密文
  async GetFixingIdCipher(url) {
    let userInfo = await Wepy.$instance.GetUserInfo()
    // console.log(userInfo)
    // result & Ciphertext + UserId
    let urlCipher = `${url.result}&${userInfo.Ciphertext}&${userInfo.UserId}`
    console.log(urlCipher)
    let fixingIdCipher = await Wepy.request({
      url: urlCipher,
      method: 'POST'
    })
    return fixingIdCipher
  }
  // 用户扫码绑定, 处理
  async BindingFixing() {
    // 确认 -> 调用微信扫码api
    let url = await this.GetQRCode()
    // 请求地址 获取鞋垫id密文
    // console.log(url)
    Tips.loading()
    let fixingIdCipher = await this.GetFixingIdCipher(url)
    Tips.loaded()
    if (fixingIdCipher.data) {
        // 获取成功 -> 转跳输入鞋垫密码
      this.$redirect({
        url: `../fixing/AddBinding?fixingIdCipher=${fixingIdCipher.data}`
      })
    }
  }
  // 获取用户绑定信息
  async GetBindinginfo() {
    let res = await FixingService.GetBindinginfo(this.JoinFixingRequest())
    // 1003 您还未登陆
    Tips.locationed()
    if (res.ret === 1003) {
      let dialog = this.Toast(res.code)
      if (dialog.confirm) {
        Wepy.redirectTo({
          url: '../login/PhoneLoginAccount'
        })
      }
    }
    if (res.ret === 1002) {
      // 提示弹窗
      let dialog = await Wepy.showModal({
        title: '提醒',
        content: '您可能未绑定鞋垫，是否立即绑定?若已申请绑定,等待管理员通过后点击刷新。',
        confirmText: '立即绑定',
        cancelText: '立即刷新',
        confirmColor: '#f6655e'
      })
      if (dialog.confirm) {
        // 立即绑定 -> 转跳扫码绑定
        this.BindingFixing()
      } else {
        // 立即刷新 -> 获取用户绑定的鞋垫
        res = await this.GetBindinginfo()
        return res
      }
    }
    if (res.ret === 1001) {
      return res
    }
  }
  // 获取鞋垫最近一次历史定位数据
  async GetLastPosition(fixing) {
    let FixingLocationInfo = await FixingService.GetLastPosition(this.JoinFixingRequest(fixing))
    return await this.GetLastPositonResponse(FixingLocationInfo)
  }
  // 获取鞋垫定位数据
  async GetLastPositionSmall(fixing) {
    console.log(fixing)
    let FixingLocationInfo
    try {
      FixingLocationInfo = await FixingService.GetLastPositionSmall(this.JoinFixingRequest(fixing))
      console.log(FixingLocationInfo)
      return await this.GetLastPositonResponse(FixingLocationInfo)
    } catch (err) {
      FixingLocationInfo = {ret: 1002}
      return await this.GetLastPositonResponse(FixingLocationInfo)
    }
  }
  async GetLastPositonResponse(res) {
    let exp, state, message
    res.ret ? exp = res.ret : exp = res.data.Ret
    if (res.data && res.data.State) {
      state = res.data.State
    } else {
      state = '3'
    }
    if (state === '1') {
      message = `${this.fixing.fixingName} 正在移动`
    }
    if (state === '2') {
      message = `${this.fixing.fixingName} 已静止`
    }
    if (state !== '1' && state !== '2') {
      message = `${this.fixing.fixingName} 正在初始化`
    }
    switch (exp) {
      // 1003 初始化 1002 定位失败 1001 定位成功    13868623153  884127
      case 1001: // 定位成功
        // 转换经纬度
        let TencentLocationInfo = await this.GetBaiduToTencentLocationInfo(res.data.Position)
        console.log(TencentLocationInfo)
        return this.SetMarkers({message, iconPath: './assets/icon_gif_success.png'}, TencentLocationInfo.result, res.data)
      case 1002:// 定位失败
        return this.SetMarkers({message, iconPath: './assets/icon_gif_fail.png'})
      case 1003:// 正在初始化
        return this.SetMarkers({message, iconPath: './assets/icon_gif_init.png'})
    }
  }
  SetMarkers(message, TencentLocationInfo = null, fixingInfo = null) {
    let oldMarkers
    this.markers ? oldMarkers = this.markers[0] : oldMarkers = {...this.locationInfo}
    let res = {
      id: 0,
      iconPath: message.iconPath,
      width: 50,
      height: 50
    }
    let callout = {
      content: message.message,
      color: '#000000',
      fontSize: 16,
      borderRadius: 16,
      bgColor: '#ffffff',
      padding: 8,
      display: 'ALWAYS',
      textAlign: 'center'
    }
    console.log('TencentLocationInfo', TencentLocationInfo)
    console.log('fixingInfo', fixingInfo)
    if (TencentLocationInfo && fixingInfo) {
      let { Battery, Charge, CreatTime, MachineCode, Mode, Position, Radius, Shutdown, State } = fixingInfo
      let { location, address, formatted_addresses } = TencentLocationInfo
      res = {
        ...res,
        latitude: location.lat,
        longitude: location.lng,
        address,
        formatted_addresses,
        Battery,
        Charge,
        CreatTime,
        MachineCode,
        Mode,
        Position,
        Radius,
        Shutdown,
        State,
        callout
      }
    } else {
      res = {
        ...oldMarkers,
        ...res,
        callout
      }
    }
    console.log(res)
    return res
  }
  setCircles() {
    let markers
    this.markers ? markers = this.markers[0] : markers = {...this.locationInfo}
    let circles = [{
      latitude: markers.latitude,
      longitude: markers.longitude,
      color: '#ffffffFF',
      fillColor: '#8ce0ff40',
      radius: markers.Radius ? Number.parseInt(markers.Radius) : 15,
      strokeWidth: 0.5
    }]
    return circles
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
        get_poi: 1,
        poi_options: 'page_index=1',
        success: function(res) {
          resolve(res)
        },
        fail: function(res) {
          reject(res)
        }
      })
    })
  }
  // 鞋垫解绑
  async Unbind(fixing) {
    Tips.loading()
    let res = await FixingService.Unbind(this.JoinFixingRequest(fixing))
    Tips.loaded()
    let dialog = await this.Toast(res.code)
    if (dialog.confirm) {
      // 1001  解绑成功
      if (res.ret === 1001) return this.GetBindinginfoToWepySwipe()  // 重新获取用户绑定的鞋垫数据
    }
  }
  // 鞋垫默认
  async UpdateFixingIsDefault(fixing) {
    Tips.loading()
    let res = await FixingService.UpdateFixingIsDefault(this.JoinFixingRequest(fixing))
    Tips.loaded()
    let dialog = await this.Toast(res.code)
    if (dialog.confirm) {
      // 1001  设置成功
      if (res.ret === 1001) {
        Wepy.reLaunch({
          url: '../index/Index'
        })
      }
    }
  }
  methods = {
    async addBinding(fixing) {
      let res = await this.AddBinding(fixing)
      if (res.ret === 1001) {
        let dialog = await this.ShowModal(res.code)
        if (dialog.confirm) {
          this.$redirect({
            url: `../index/Index`
          })
        }
      } else {
        let dialog = await this.ShowModal(res.code)
        if (dialog.confirm) {
          this.BindingFixing()
        }
      }
    }
  }
  onLoad() {
     // 实例化API核心类
    this.qqmapsdk = new QQMapWX({
      key: 'ZXCBZ-TY7CS-TPTOT-6JB22-WJFRF-YUFR6'
    })
  }
}
