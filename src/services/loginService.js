import Api from '../utils/api.js'
import Http from '../utils/http.js'

export default class LoginService {
  static IsLoginType() {
    return Http.get(Api.IsLoginType)
  }
  static OtherAddAccount(data) {
    return Http.post(Api.OtherAddAccount, data)
  }
  static PhoneLoginAccount(data) {
    return Http.post(Api.PhoneLoginAccount, data)
  }
  static PhonePasswordGet(data) {
    return Http.post(Api.PhonePasswordGet, data)
  }
  static PhoneRegisterAccount(data) {
    return Http.post(Api.PhoneRegisterAccount, data)
  }
  static SendSms(data) {
    return Http.post(Api.SendSms, data)
  }
  static Update() {
    return Http.get(Api.Update)
  }
}
