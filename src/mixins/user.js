import Wepy from 'wepy'

export default class testMixin extends Wepy.mixin {
  data = {
    userInfo: null
  }
  onLoad() {
    this.userInfo = this.$parent.GetUserInfo()
  }
}
