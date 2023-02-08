import jwtAxios from '@/library/jwtAxios'

export default {
  namespaced: true,

  state: {
    currentUser:'',
    userList: [],
    userCount: 0,
  },

  getters: {},

  mutations: {
    SET_CURRENTUSER(state, payload) {
      state.currentUser = payload;
    },

    SET_USERLIST(state, payload) {
      state.userList = payload;
    },

    SET_USERCOUNT(state, payload) {
      state.userCount = payload
    },
  },

  actions: {
    async FETCH_PRODUCTLIST_API(context) {
      const config = {"Content-Type": 'application/json'};
      try {
        let res = await jwtAxios.post(
          "/admin/users", config
        );
        context.commit("SET_USERLIST", res.data["result"],);
        context.commit("SET_USERCOUNT", res.data['userCount']);
      } catch (error) {
      }
    },
  },
};
