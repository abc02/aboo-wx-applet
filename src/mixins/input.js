  import Wepy from 'wepy'
  import Lang from '../utils/lang'
  import v from '../utils/validate'
  export default class Input extends Wepy.mixin {
    data = {
      input: {},
      isDisabled: true
    }
    // 卸载页面
    onUnload() {
      this.input = {}
    }
    // 判断字符串是否为空
    isEmpty(str) {
      return Lang.isEmpty(str)
    }
    // 判断字符串是否不为空
    isNotEmpty(str) {
      return !Lang.isEmpty(str)
    }
    // 提示错误（调用FormTips）
    tips(message) {
      this.$invoke('Tips', 'show', message)
    }
    // 校验
    check(rules) {
      for (let rule of rules) {
        const value = rule.value
        if (rule.method !== 'noDuplicate' && Lang.isArray(value)) {
          // 数组校验每个值
          for (let innerValue of value) {
            const isValid = this.execCheck(rule, innerValue)
            if (!isValid) {
              return false
            }
          }
        } else {
          // 单元素直接校验
          const isValid = this.execCheck(rule, value)
          if (!isValid) {
            return false
          }
        }
      }
      return true
    }
    execCheck(rule, value) {
      const method = v[rule.method].bind(v)
      const isValid = method(value, rule.param)
      if (!isValid) {
        this.tips(rule.message)
        return false
      }
      return true
    }
    methods = {
      // 处理输入事件
      onInput(e) {
        const fieldName = e.currentTarget.id
        this.input[fieldName] = e.detail.value
        //  判断手机号大于等于11位
        if (this.input['phone']) {
          this.input['phone'].length === 11 ? this.isDisabled = false : this.isDisabled = true
        }
        // 判断设备密码大于等于4位
        if (this.input['fixingPassword']) {
          this.input['fixingPassword'].length >= 4 ? this.isDisabled = false : this.isDisabled = true
        }
      },
      // 处理单选事件
      onRadio(e) {
        const fieldName = e.currentTarget.id
        this.input[fieldName] = e.detail.value
      },
      onEmpty(key) {
        this.input[key] = ''
      }
    }
  }
