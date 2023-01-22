import axios from "axios";

export default {
  namespaced: true,

  state: {
    currentCategory: "all",
    currentMarket: "all",
    productList: [],
    top3ProductList: []
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

    SET_PRODUCTLIST(state, payload) {
      state.productList = payload;
    },
  },

  actions: {

    // home page에서 product list
    async FETCH_TOP3_PRODUCTLIST_API(context) {
      try {
        let res = await axios.get(
          "http://localhost:8080/api/category/" +
          context.state.currentMarket +
          "/top3"
        );
        console.log("FETCH_TOP3_PRODUCTLIST_API SUCCESS");
        context.commit("SET_TOP3_PRODUCTLIST", res.data["result"]);

      } catch (error) {
        console.log("FETCH_TOP3_PRODUCTLIST_API FAIL");
        console.log(error)
      }
    },

    // category page에서 product list
    async FETCH_PRODUCTLIST_API(context) {
      try {
        let res = await axios.get(
          "http://localhost:8080/api/category/" +
            context.state.currentCategory +
            "/" +
            context.state.currentMarket +
            "/list"
        );
        console.log("FETCH_PRODUCTLIST_API SUCCESS");
        context.commit("SET_PRODUCTLIST", res.data["result"]);
        console.log(res.data["result"])

      } catch (error) {
        console.log("FETCH_PRODUCTLIST_API FAIL");
        console.log(error);
      }
    },


  },
};
