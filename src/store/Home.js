import jwtAxios from '@/library/jwtAxios'

export default {
  namespaced: true,

  state: {
    currentMarket: "all",
    top3ProductList: [],
  },

  getters: {},

  mutations: {
    SET_CURRENTMARKET(state, payload) {
      state.currentMarket = payload;
    },

    SET_TOP3_PRODUCTLIST(state, payload) {
      state.top3ProductList = payload;
    },
  },

  actions: {

    // home page에서 product list
    async FETCH_TOP3_PRODUCTLIST_API(context) {
      try {
        let res = await jwtAxios.get(
          "/category/" +
          context.state.currentMarket +
          "/top3"
        );

        context.commit("SET_TOP3_PRODUCTLIST", res.data["result"]);

      } catch (error) {
        console.log(error)
      }
    },
  },
};
