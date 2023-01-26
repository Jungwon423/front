import router from "@/router";

export default {
  state: {
    id: '',
    nickname: '',
    token: ''
  },

  getters: {},

  mutations: {
    login(state, payload) {
      state.id = payload.id
      state.nickname = payload.nickname
      state.token = payload.token
    },
    loginCheck(state) {
      if (!state.token) {
          router.push({
              name: 'login'
          }).catch(error => {
              console.log(error)
          })
      }
    },
    SET_CURRENTID(state, payload) {
      state.id = payload;
    },

    SET_CURRENTNICKNAME(state, payload) {
      state.nickname = payload;
    },
  },
  actions: {
    async FETCH_ID(context){
      console.log(context.state.id)
    }
  },
}
