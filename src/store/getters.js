const getters = {
  isLoggin: state => state.loggin.isLoggin,
  userInfo: state => state.loggin.info,
  isClick: state => state.loggin.isClick,
  top: state => state.comm.top
}

export default getters
