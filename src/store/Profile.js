export default {
  namespaced : true,

  state: {
    id: '',
    nickname: '',
    email: '',
    comments: [],
    recommends: [],
  },

  getters: {
  },

  mutations: {
    SET_ID(state, payload) {
      state.id = payload;
    },
    SET_NICKNAME(state, payload) {
      state.nickname = payload;
    },
    SET_EMAIL(state, payload) {
      state.email = payload;
    },
    SET_COMMENTS(state, payload) {
      state.comments = payload;
    },
    SET_RECOMMENDS(state, payload) {
      state.recommends = payload;
    },
  },

}
