export default {
  namespaced : true,

  state: {
    token : localStorage.getItem('token') || '',
    nickname: localStorage.getItem('nickname') || '',
    redirectPath: ''
  },

  getters: {
    logined (state) {
      return state.token != ''
    }
  },

  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_NICKNAME(state, payload) {
      state.nickname = payload;
    },
    SET_REDIRECTPATH(state, payload) {
      state.redirectPath = payload;
    },
    LOGOUT(state) {
      state.token = '',
      state.nickname = ''
    }
  },

  actions: {
  }

}
