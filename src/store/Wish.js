import jwtAxios from '@/library/jwtAxios'

export default {
  namespaced: true,

  state: {
    wishList: []
  },

  getters: {},

  mutations: {
    SET_WISHLIST(state, payload) {
      state.wishList = payload;
    },
  },

  actions: {
  },
};
