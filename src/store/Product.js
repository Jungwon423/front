import jwtAxios from '@/library/jwtAxios'

export default {
  namespaced: true,

  state: {
    imageUrl: "",
    name: "",
    rating: 0,
    comments: [],
    price: 0,
    naverPrice: 0,
    category: "생활/건강",
    marketName: "",
    link: "",
    tax: 0,
    shippingFee: 0,
    clickCount: 0,
    good: [],
    bad: [],
    wishUserList: [],
    subImageUrl: [],
  },

  getters: {},

  mutations: {
    SET_IMAGEURL(state, payload) {
        state.imageUrl = payload
    },
    SET_NAME(state, payload) {
        state.name = payload
    },
    SET_RATING(state, payload) {
        state.rating = payload
    },
    SET_COMMENTS(state, payload) {
        state.comments = payload
    },
    SET_PRICE(state, payload) {
        state.price = payload
    },
    SET_NAVERPRICE(state, payload) {
        state.naverPrice = payload
    },
    SET_CATEGORY(state, payload) {
        state.category = payload
    },
    SET_MARKETNAME(state, payload) {
        state.marketName = payload
    },
    SET_LINK(state, payload) {
        state.link = payload
    },
    SET_TAX(state, payload) {
        state.tax = payload
    },
    SET_SHIPPINGFEE(state, payload) {
        state.shippingFee = payload
    },
    SET_CLICKCOUNT(state, payload) {
        state.clickCount = payload
    },
    SET_GOOD(state, payload) {
        state.good = payload
    },
    SET_BAD(state, payload) {
        state.bad = payload
    },
    SET_WISHUSERLIST(state, payload) {
        state.wishUserList = payload
    },

    SET_SUBIMAGEURL(state, payload) {
        state.subImageUrl = payload
    },
  },

  actions: {
    async FETCH_PRODUCTDETAIL_API(context, productName) {
        console.log('뭐야..')
        try {
            let res = await jwtAxios.get("/product/detail?name=" + encodeURIComponent(productName))
            .then((res) => {
                console.log(res.data['result'])
                context.commit('SET_IMAGEURL', res.data["result"]["imageUrl"])
                context.commit('SET_NAME', res.data["result"]["name"])
                context.commit('SET_RATING', res.data["result"]["rating"])
                context.commit('SET_COMMENTS', res.data["result"]["comments"])
                context.commit('SET_PRICE', res.data["result"]["price"])
                context.commit('SET_NAVERPRICE', res.data["result"]["naverPrice"])
                context.commit('SET_CATEGORY', res.data["result"]["categoryName"])
                context.commit('SET_MARKETNAME', res.data["result"]["marketName"])
                context.commit('SET_LINK', res.data["result"]["link"])
                context.commit('SET_TAX', res.data["result"]["tax"])
                context.commit('SET_SHIPPINGFEE', res.data["result"]["shippingFee"])
                context.commit('SET_CLICKCOUNT', res.data["result"]["clickCount"])
                context.commit('SET_GOOD', res.data["result"]["good"])
                context.commit('SET_BAD', res.data["result"]["bad"])
                context.commit('SET_WISHUSERLIST', res.data["result"]["wishUserList"])

                context.commit('SET_SUBIMAGEURL', res.data['result']['subImageUrl'])
            })
        } catch (error) {
        }
      },
  },
};
