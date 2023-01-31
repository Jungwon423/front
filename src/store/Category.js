import jwtAxios from '@/jwtAxios'

export default {
  namespaced: true,

  state: {
    currentCategory: "life_health",
    currentMarket: "all",
    productList: [],
    productCount: 0,
    page: 1,
    totalPage: 1,
  },

  getters: {},

  mutations: {
    SET_CURRENTCATEGORY(state, payload) {
      state.currentCategory = payload;

    },

    SET_CURRENTMARKET(state, payload) {
      state.currentMarket = payload;
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
    // category page에서 product list & page_c 수정
    async FETCH_PRODUCTLIST_API(context) {
      try {
        let res = await jwtAxios.get(
          "/category/" +
          context.state.currentCategory +
          "/" +
          context.state.currentMarket +
          "/" +
          context.state.page +
          "/list"
        );

        context.commit("SET_PRODUCTLIST", res.data["result"],);
        context.commit("SET_PRODUCTCOUNT", res.data['productCount']);
        context.commit("SET_TOTALPAGE", res.data['totalPage']);

      } catch (error) {
      }
    },

  },
};
