import Wepy from 'wepy'
export default class Map extends Wepy.mixin {
  data = {
    scale: 14, // 默认 16
    markers: null,
    locationInfo: null
  }
  computed = {
    currentLocationInfo() {
      // 默认值空的时，定位到北京
      if (!this.locationInfo) {
        return {
          latitude: '39.910119',
          longitude: '116.397983'
        }
      }
      console.log(this.locationInfo)
      return this.locationInfo
    }
  }
  methods = {
    // 将地图中心移动到当前定位点，需要配合map组件的show-location使用
    moveToLocation() {
      this.mapCtx.moveToLocation()
    },
    add() {
      if (this.scale === 18) return null
      this.scale = this.scale + 1
      this.num = this.num + 1
    },
    reduce() {
      if (this.scale === 5) return null
      this.scale = this.scale - 1
      this.num = this.num - 1
    }
  }
  async onLoad() {
    this.locationInfo = await this.$parent.GetLocationInfo()
    this.$apply()
  }
  onReady() {
    this.mapCtx = Wepy.createMapContext('myMap')
  }
}
