export default {
  namespaced : true,

  state: {
    token : localStorage.getItem('token') || '',
    nickname: localStorage.getItem('nickname') || ''
  },

  getters: {},

  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_NICKNAME(state, payload) {
      state.nickname = payload;
    }
  },

  actions: {
  }

}
