import UC_CONFIG from './index'
let prefix = UC_CONFIG.ucApiUrl

console.log([prefix])

export default {
  SIGNUP: prefix + '/cumeetingApi/api/uc/user/reg'
}