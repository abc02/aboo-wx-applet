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
  // 设备绑定api
  async AddBinding(fixing) {
    let res = await FixingService.AddBinding(this.JoinFixingRequest(fixing, 'fixingPassword'))
    return res
  }
  // 请求地址获取设备密文
  async GetFixingIdCipher(url) {
    let userInfo = Wepy.$instance.GetUserInfo()
    // result & Ciphertext + UserId
    let urlCipher = `${url.result}&${userInfo.Ciphertext}&${userInfo.UserId}`
    console.log(urlCipher)
    let fixingIdCipher = await Wepy.request({
      url: urlCipher,
      method: 'POST'
    })
    console.log(fixingIdCipher)
    return fixingIdCipher
  }
  // 用户扫码绑定, 处理
  async BindingFixing() {
    // 确认 -> 调用微信扫码api
    let url = await this.GetQRCode()
    // 请求地址 获取设备id密文
    Tips.loading()
    let fixingIdCipher = await this.GetFixingIdCipher(url)
    Tips.loaded()
    if (fixingIdCipher.data) {
        // 获取成功 -> 转跳输入设备密码
      this.$redirect({
        url: `../fixing/AddBinding?fixingIdCipher=${fixingIdCipher.data}`
      })
    }
  }
  // 获取用户绑定信息
  async GetBindinginfo() {
    let res = await FixingService.GetBindinginfo(this.JoinFixingRequest())
    if (res.ret === 1002) {
      // 提示弹窗
      let dialog = await Wepy.showModal({
        title: '提醒',
        content: '您可能未绑定设备，是否立即绑定?若已申请绑定,等待管理员通过后点击刷新。',
        confirmText: '立即绑定',
        cancelText: '立即刷新',
        confirmColor: '#f6655e'
      })
      if (dialog.confirm) {
        // 立即绑定 -> 转跳扫码绑定
        this.BindingFixing()
      } else {
        // 立即刷新 -> 获取用户绑定的设备
        res = await this.GetBindinginfo()
        return res
      }
    }
    if (res.ret === 1001) {
      return res
    }
  }
  // 获取设备最近一次历史定位数据
  async GetLastPosition(fixing) {
    let FixingLocationInfo = await FixingService.GetLastPosition(this.JoinFixingRequest(fixing))
    return await this.GetLastPositonResponse(FixingLocationInfo)
  }
  // 获取设备定位数据
  async GetLastPositionSmall(fixing) {
    let FixingLocationInfo 
    try {
      FixingLocationInfo = await FixingService.GetLastPositionSmall(this.JoinFixingRequest(fixing))
      return await this.GetLastPositonResponse(FixingLocationInfo)
    }
    catch (err) {
      FixingLocationInfo = {ret: 1002}
      return await this.GetLastPositonResponse(FixingLocationInfo)
    }
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
    let label = {
      content: message.message,
      fontSize: 16,
      x: -30,
      y: -80,
      borderWidth: 1,
      borderColor: '#f3f3f3',
      borderRadius: 6,
      bgColor: '#ffffff',
      padding: 3
    }
    let markers
    this.markers ? markers = this.markers[0] : markers = {...this.locationInfo}
    if (TencentLocationInfo && fixingInfo) {
      res = {
        ...res,
        latitude: TencentLocationInfo.location.lat,
        longitude: TencentLocationInfo.location.lng,
        ...TencentLocationInfo,
        ...fixingInfo,
        callout
      }
    } else {
      res = {
        ...markers,
        ...res,
        callout
      }
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
  // 设备解绑
  async Unbind(fixing) {
    return await FixingService.Unbind(this.JoinFixingRequest(fixing))
  }
  // 设备默认
  async UpdateFixingIsDefault(fixing) {
    return await FixingService.UpdateFixingIsDefault(this.JoinFixingRequest(fixing))
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
