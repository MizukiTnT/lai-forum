import { login } from '@/api/login'
import { setToken } from '@/utlis/auth'
const loggin = {
  state: {
    isLoggin: true,
    info: {},
    isClick: false,
    token: null
  },
  mutations: {
    // 之所以给出这么多mutarion 而不是一次赋值 则是因为在用户中心中有对单个项目的修改
    SET_USERINFO: (state, userInfo) => {
      state.info = userInfo
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    Login ({commit}, infos) {
      return new Promise((resolve, reject) => {
        login(infos).then(res => {
          const data = res.data
          commit('SET_USERINFO', data.userInfo)
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default loggin
