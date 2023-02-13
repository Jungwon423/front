import jwtAxios from '@/library/jwtAxios'

export default {
  namespaced: true,

  state: {
    brandList1: [],
    brandList2: [],
  },

  getters: {},

  mutations: {
    SET_BRANDLIST1(state, payload) {
      state.brandList1 = payload;
    },
    SET_BRANDLIST2(state, payload) {
      state.brandList2 = payload;
    },
  },

  actions: {
    async FETCH_BRANDLIST1_API(context) {
      try {
        let res = await jwtAxios.get(
          "/brand/brand1"
        );
        console.log(res);
        context.commit("SET_BRANDLIST1", res.data["result"],);
      } catch (error) {
      }
    },

    async FETCH_BRANDLIST2_API(context) {
      try {
        let res = await jwtAxios.get(
          "/brand/brand2"
        );
        console.log(res);
        context.commit("SET_BRANDLIST2", res.data["result"],);
      } catch (error) {
      }
    },

  },
};
