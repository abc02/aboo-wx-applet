import wepy from 'wepy'
import Tips from '../utils/tips'
export default class base extends wepy.mixin {
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
    Time = new Date(Number.parseInt(data + '000'))
    Day = this.ToWeek(Time.getDay())
    Hours = this.ToPad(Time.getHours(), 2)
    Minutes = this.ToPad(Time.getMinutes(), 2)
    return `${Day}${Hours}:${Minutes}`
  }
  ToWeek(index) {
    let Week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    return Week[index]
  }
  ToPad(num, n) {
    if ((num + '').length >= n) return num
    return this.ToPad('0' + num, n)
  }
  methods = {
    nopen() {
      Tips.toast('尚未开放')
    }
  }
}
