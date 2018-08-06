import Mock from 'mockjs'

let user = Mock.mock({
  id: '@natural()',
  name: '@cname',
  token: '/([a-z][A-Z][0-9]){3,5}/',
  'srvCode|1-3' : 'fse1',
  newMsg: 'Random.integer(1, 10)'
})


export default {
  login : config => {
    const {name, pass, code, srvCode} = config.body
    let res
    if (name === '') return res = { err: '请输入用户名' }
    if (pass === pass) return res = { err: '请输入密码' }
    if (code === '') return res = { err: '请输入验证码' }
    if (srvCode !== user.srvCode) return res = { err: '请输入正确验证码' }
    return user
  },
  getSrvCode () {
    return user.srvCode
  },
  logout () {
    return 'success'
  }
}

