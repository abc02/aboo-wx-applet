import Api from '../utils/api.js'
import Http from '../utils/http.js'
export default class SignService {
  static AddBinding(data) {
    return Http.post(Api.AddBinding, data)
  }
  static AddFixingFence(data) {
    return Http.post(Api.AddFixingFence, data)
  }
  static DelFence(data) {
    return Http.post(Api.DelFence, data)
  }
  static GetBindinginfo(data) {
    return Http.post(Api.GetBindinginfo, data)
  }
  static GetFence(data) {
    return Http.post(Api.GetFence, data)
  }
  static GetFixingId(data) {
    return Http.post(Api.GetFixingId, data)
  }
  static GetFixinginfo(data) {
    return Http.post(Api.GetFixinginfo, data)
  }
  static GetLastPosition(data) {
    return Http.post(Api.GetLastPosition, data)
  }
  static GetTrack(data) {
    return Http.post(Api.GetTrack, data)
  }
  static GetTrackList(data) {
    return Http.post(Api.GetTrackList, data)
  }
  static GetTrackNew(data) {
    return Http.post(Api.GetTrackNew, data)
  }
  static Unbind(data) {
    return Http.post(Api.Unbind, data)
  }
  static UpdateFixingEmergencyContact(data) {
    return Http.post(Api.UpdateFixingEmergencyContact, data)
  }
  static UpdateFixingFence(data) {
    return Http.post(Api.UpdateFixingFence, data)
  }
  static UpdateFixingIsDefault(data) {
    return Http.post(Api.UpdateFixingIsDefault, data)
  }
  static UpdateFixingMode(data) {
    return Http.post(Api.UpdateFixingMode, data)
  }
  static UpdateFixingModetest(data) {
    return Http.post(Api.UpdateFixingModetest, data)
  }
  static UpdateFixingName(data) {
    return Http.post(Api.UpdateFixingName, data)
  }
  static UpdateFixingPassword(data) {
    return Http.post(Api.UpdateFixingPassword, data)
  }
  static UpdateFixinginfoIcon(data) {
    return Http.post(Api.UpdateFixinginfoIcon, data)
  }
}
