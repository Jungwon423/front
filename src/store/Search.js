import jwtAxios from '@/library/jwtAxios'

export default {
  namespaced: true,

  state: {
    currentKeyword:'',
    productList: [],
    productCount: 0,
    page:1,
    totalPage: 1,
  },

  getters: {},

  mutations: {
    SET_CURRENTKEYWORD(state, payload) {
      state.currentKeyword = payload;
    },

    SET_PRODUCTLIST(state, payload) {
      state.productList = payload;
    },

    SET_PRODUCTCOUNT(state, payload) {
      state.productCount = payload
    },

    SET_PAGE(state, payload) {
      state.page = payload;
    },

    SET_TOTALPAGE(state, payload) {
      state.totalPage = payload
    }
  },

  actions: {
    async FETCH_PRODUCTLIST_API(context) {
      const config = {"Content-Type": 'application/json'};
      try {
        let res = await jwtAxios.post(
          "/product/" +
          context.state.page +
          "/search?keyword=" +
          context.state.currentKeyword, config
        );
        context.commit("SET_PRODUCTLIST", res.data["result"],);
        context.commit("SET_PRODUCTCOUNT", res.data['productCount']);
        context.commit("SET_TOTALPAGE", res.data['totalPage']);
      } catch (error) {
      }
    },
  },
};
