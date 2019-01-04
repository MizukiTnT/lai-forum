const comm = {
  state: {
    top: 0
  },
  mutations: {
    SET_TOP (state, top) {
      state.top = top
    }
  },
  actions: {
    watchScroll ({commit}) {
      window.addEventListener('scroll', function () {
        let top = document.documentElement.scrollTop || document.body.scrollTop
        commit('SET_TOP', top)
      })
    }
  }
}

export default comm
