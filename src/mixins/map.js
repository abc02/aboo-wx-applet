import Wepy from 'wepy'
export default class Map extends Wepy.mixin {
  data = {
    scale: '14', // 默认 16
    markers: null,
    locationInfo: {
      latitude: '39.910119',
      longitude: '116.397983'
    }
  }
  async onLoad() {
    this.locationInfo = await this.$parent.GetLocationInfo()
    this.$apply()
  }
  onReady() {
    this.mapCtx = Wepy.createMapContext('myMap')
  }
  methods = {
    getCenterLocation() {
      this.mapCtx.getCenterLocation().then(res => {
        console.log(res)
      })
    },
    // 将地图中心移动到当前定位点，需要配合map组件的show-location使用
    moveToLocation() {
      this.mapCtx.moveToLocation()
    },
    translateMarker() {
      this.mapCtx.translateMarker({
        markerId: 0,
        autoRotate: true,
        duration: 1000,
        destination: {
          latitude: 23.10229,
          longitude: 113.3345211
        },
        animationEnd() {
          console.log('animation end')
        }
      })
    },
    includePoints() {
      this.mapCtx.includePoints({
        padding: [10],
        points: [{
          latitude: 23.10229,
          longitude: 113.3345211
        }, {
          latitude: 23.00229,
          longitude: 113.3345211
        }]
      })
    }
  }
}
