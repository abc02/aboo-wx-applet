import Wepy from 'wepy'
import Tips from '../utils/tips'
export default class base extends Wepy.mixin {
  loaded() {
    this.init = true
    this.$apply()
    Tips.loaded()
  }
  // 卸载清理
  onUnload() {
    Object.assign(this, this.def)
  }
  // 时间戳转换 -> yyyy-mm-dd
  ToYYYYMMDD(date) {
    let Year, Month, Day
    Year = date.getFullYear()
    Month = date.getMonth() + 1
    Day = date.getDate()
    return {
      yyyy: Year,
      mm: Month,
      dd: Day
    }
  }
  // 时间戳转换 -> hh-mm-ss-ms
  ToHHMMSSMS(date) {
    let Hours, Minutes, Seconds, Milliseconds
    Hours = date.getHours()
    Minutes = date.getMinutes()
    Seconds = date.getSeconds()
    Milliseconds = date.getMilliseconds()
    console.log()
    return {
      hh: Hours,
      mm: Minutes,
      ss: Seconds,
      ms: Milliseconds
    }
  }
  // 时间戳转换 -> week-hours-minutes
  ToWeekHoursMinutes(data) {
    let Time, Day, Hours, Minutes
    Time = new Date(data)
    Day = this.ToWeek(Time.getDay())
    Hours = this.ToPad(Time.getHours(), 2)
    Minutes = this.ToPad(Time.getMinutes(), 2)
    return `${Day}${Hours}:${Minutes}`
  }
  ToWeek(index) {
    let Week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    return Week[index]
  }
  ToPad(num, n = 2) {
    if ((num + '').length >= n) return num
    return this.ToPad('0' + num, n)
  }
  ToTodayOrYesterday(date) {
    let Now, Time, HHMMSS
    Now = this.ToYYYYMMDD(new Date())
    Time = this.ToYYYYMMDD(new Date(date))
    HHMMSS = this.ToHHMMSSMS(new Date(date))
    if (Now.yyyy === Time.yyyy && Now.mm === Time.mm && Now.dd === Time.dd) {
      return `今天${this.ToPad(HHMMSS.hh)}:${this.ToPad(HHMMSS.mm)}`
    }
    if (Now.yyyy === Time.yyyy && Now.mm === Time.mm && (Now.dd - 1) === Time.dd) {
      return `昨天${this.ToPad(HHMMSS.hh)}:${this.ToPad(HHMMSS.mm)}`
    }
    return `${this.ToPad(Time.mm)}-${this.ToPad(Time.dd)} ${this.ToPad(HHMMSS.hh)}:${this.ToPad(HHMMSS.mm)}`
  }
  // 调用微信扫码api
  async GetQRCode() {
    return await Wepy.scanCode({
      sourceType: ['qrCode']
    })
  }
  // 提示弹窗
  async ShowModal(message) {
    return await Wepy.showModal({
      content: message,
      showCancel: false
    })
  }
  async Toast(message, title = '提醒', showCancel = false) {
    return await Wepy.showModal({
      title: title,
      content: message,
      confirmColor: '#f6655e',
      showCancel
    })
  }
  methods = {
    nopen() {
      Tips.toast('尚未开放')
    }
  }
}
