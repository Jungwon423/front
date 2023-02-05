export default {
  namespaced : true,

  state: {
    token : localStorage.getItem('token') || '',
    nickname: localStorage.getItem('nickname') || '',
    isAdminUser: false || true,
  },

  getters: {
    logined (state) {
      return state.token != ''
    },
    isAdminUser (state) {
      return state.isAdminUser ==true;
    }
  },

  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_NICKNAME(state, payload) {
      state.nickname = payload;
    },
    LOGOUT(state) {
      state.token = '',
      state.nickname = ''
    }
  },

}
