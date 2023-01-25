import axios from "axios";

export default {
  namespaced: true,

  state: {
    currentCategory: "all",
    currentMarket: "all",
    top3ProductList: [],

    currentCategory_c: "life_health",
    currentMarket_c: "all",
    productList_c: [],
    productCount_c: 0,
    page_c: 1,
    totalPage_c: 1,
  },

  getters: {},

  mutations: {
    SET_CURRENTCATEGORY(state, payload) {
      state.currentCategory = payload;
    },

    SET_CURRENTMARKET(state, payload) {
      state.currentMarket = payload;
    },

    SET_TOP3_PRODUCTLIST(state, payload) {
      state.top3ProductList = payload;
    },

    SET_CURRENTCATEGORY_C(state, payload) {
      state.currentCategory_c = payload;

    },

    SET_CURRENTMARKET_C(state, payload) {
      state.currentMarket_c = payload;
    },

    SET_PRODUCTLIST_C(state, payload) {
      state.productList_c = payload;
    },

    SET_PRODUCTCOUNT_C(state, payload) {
      state.productCount_c = payload
    },

    SET_PAGE_C(state, payload) {
      state.page_c = payload;
    },

    SET_TOTALPAGE_C(state, payload) {
      state.totalPage_c = payload
    }
  },

  actions: {

    // home page에서 product list
    async FETCH_TOP3_PRODUCTLIST_API(context) {
      try {
        let res = await axios.get(
          // "http://localhost:8080/api/category/" +
          "https://www.zigdeal.shop:8080/api/category/" +
          context.state.currentMarket +
          "/top3"
        );
        console.log('현재 marketName : '+context.state.currentMarket)
        console.log("FETCH_TOP3_PRODUCTLIST_API SUCCESS");
        console.log('초특가 핫딜 products : ')
        console.log(res.data["result"])

        context.commit("SET_TOP3_PRODUCTLIST", res.data["result"]);

      } catch (error) {
        console.log("FETCH_TOP3_PRODUCTLIST_API FAIL");
        console.log(error)
      }
    },

    // category page에서 product list & page_c 수정
    async FETCH_PRODUCTLIST_API(context) {
      try {
        let res = await axios.get(
          // "http://localhost:8080/api/category/" +
          "https://www.zigdeal.shop:8080/api/category/" +
          context.state.currentCategory_c +
          "/" +
          context.state.currentMarket_c +
          "/" +
          context.state.page_c +
          "/list"
        );
        console.log("FETCH_PRODUCTLIST_API SUCCESS");

        context.commit("SET_PRODUCTLIST_C", res.data["result"],);
        context.commit("SET_PRODUCTCOUNT_C", res.data['productCount']);
        context.commit("SET_TOTALPAGE_C", res.data['totalPage']);

        console.log(res.data["result"])

      } catch (error) {
        console.log("FETCH_PRODUCTLIST_API FAIL");
        console.log(error);
      }
    },


  },
};
