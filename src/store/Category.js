import jwtAxios from '@/library/jwtAxios'
import library from '@/library/library';

export default {
  namespaced: true,

  state: {
    currentCategory: "life_health",
    currentMarket: {
      "Amazon" : true,
      "eBay" : true,
      "AliExpress" : true
    },
    marketAllChecked: false,
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

    SET_MARKETALLCHECKED(state, payload) {
      state.marketAllChecked = payload
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
        console.log("/category/" +
        context.state.currentCategory +
        "/" +
        context.state.page +
        "/list",
        context.state.currentMarket, config)

        let res = await jwtAxios.post(
          "/category/" +
          context.state.currentCategory +
          "/" +
          context.state.page +
          "/list",
          context.state.currentMarket, config
        );

        context.commit("SET_PRODUCTLIST", res.data["result"],);
        context.commit("SET_PRODUCTCOUNT", res.data['productCount']);
        context.commit("SET_TOTALPAGE", res.data['totalPage']);

      } catch (error) {
      }
    },

  },
};
