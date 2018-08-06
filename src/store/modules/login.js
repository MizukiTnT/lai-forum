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
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_DETAIL: (state, detail) => {
      state.detail = detail
    },
    SHOW_LOGGIN: (state, isClick) => {
      state.isClick = isClick
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
