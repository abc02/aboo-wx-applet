import wepy from 'wepy'
/**
 * 提示与加载工具类
 */
export default class Tips {
  constructor() {
    this.isLoading = false
  }
  /**
   * 弹出提示框
   */

  static success(title, duration = 500) {
    wepy.showToast({
      title: title,
      icon: 'success',
      mask: true,
      duration: duration
    })
    if (duration > 0) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, duration)
      })
    }
  }

  /**
   * 弹出确认窗口
   */
  static confirm(text, payload = {}, title = '提示') {
    return new Promise((resolve, reject) => {
      wepy.showModal({
        title: title,
        content: text,
        showCancel: true,
        success: res => {
          if (res.confirm) {
            resolve(payload)
          } else if (res.cancel) {
            reject(payload)
          }
        },
        fail: res => {
          reject(payload)
        }
      })
    })
  }

  static toast(title, onHide, icon = 'success') {
    wepy.showToast({
      title: title,
      icon: icon,
      mask: true,
      duration: 500
    })
    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide()
      }, 500)
    }
  }

  /**
   * 警告框
   */
  static alert(title) {
    wepy.showToast({
      title: title,
      image: '/images/icons/alert.png',
      mask: true,
      duration: 500
    })
  }

  /**
   * 错误框
   */

  static error(title, onHide) {
    wepy.showToast({
      title: title,
      // image: '/images/icons/error.png',
      mask: true,
      duration: 500
    })
    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide()
      }, 800)
    }
  }
  /**
   * 定位提示框
   */

  static locationing(title = '定位中', onHide) {
    if (Tips.isLoading) {
      return
    }
    Tips.isLoading = true
    wepy.showLoading({
      title: title,
      mask: true
    })
  }
  /**
   * 定位完毕
   */

  static locationed() {
    if (Tips.isLoading) {
      Tips.isLoading = false
      wepy.hideLoading()
    }
  }

  /**
   * 弹出加载提示
   */
  static loading(title = '加载中') {
    if (Tips.isLoading) {
      return
    }
    Tips.isLoading = true
    wepy.showLoading({
      title: title,
      mask: true
    })
  }

  /**
   * 加载完毕
   */
  static loaded() {
    if (Tips.isLoading) {
      Tips.isLoading = false
      wepy.hideLoading()
    }
  }

  /**
   * 弹出下拉动作栏
   */
  static action(...items) {
    return new Promise((resolve, reject) => {
      wepy.showActionSheet({
        itemList: items,
        success: function (res) {
          const result = {
            index: res.tapIndex,
            text: items[res.tapIndex]
          }
          resolve(result)
        },
        fail: function (res) {
          reject(res.errMsg)
        }
      })
    })
  }

  static actionWithFunc(items, ...functions) {
    wepy.showActionSheet({
      itemList: items,
      success: function (res) {
        const index = res.tapIndex
        if (index >= 0 && index < functions.length) {
          functions[index]()
        }
      }
    })
  }

  static share(title, url, desc) {
    return {
      title: title,
      path: url,
      desc: desc,
      success: function (res) {
        Tips.toast('分享成功')
      }
    }
  }
}

/**
 * 静态变量，是否加载中
 */
Tips.isLoading = false
