import wepy from 'wepy'
// HTTP工具类
export default class http {
  static async request (method, url, data) {
    const header = this.createAuthHeader()
    const param = {
      url: url,
      data: data,
      method: method,
      header: header
    }

    // Tips.loading()
    let res = await wepy.request(param)
    if (this.isSuccess(res)) {
      return res.data
    } else {
      console.log('no')
      throw this.requestException(res)
    }
  }

  /**
   * 判断请求是否成功
   */
  static isSuccess(res) {
    const wxCode = res.statusCode
    // 请求错误
    if (wxCode !== 200) {
      return false
    }
    const wxData = res.data
    return wxData
  }

  /**
   * 异常
   */
  static requestException(res) {
    const error = {}
    error.statusCode = res.statusCode
    const wxData = res.data
    const serverData = wxData.data
    console.log(error)
    if (serverData) {
      error.serverCode = serverData.code
      error.message = serverData.message
    }
    return error
  }
  /**
   * 构造权限头部
   */
  static createAuthHeader () {
    const header = {}
    header['accept'] = 'application/json'
    header['content-type'] = 'application/x-www-form-urlencoded'
    let userInfo = wepy.$instance.globalData.userInfo
    if (userInfo) {
      header['Authorization'] = userInfo.JwtToken
    }
    return header
  }

  static get (url, data) {
    return this.request('GET', url, data)
  }

  static put (url, data) {
    return this.request('PUT', url, data)
  }

  static post (url, data) {
    return this.request('POST', url, data)
  }

  static patch (url, data) {
    return this.request('PATCH', url, data)
  }

  static delete (url, data) {
    return this.request('DELETE', url, data)
  }
}
