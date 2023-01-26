import { createStore } from 'vuex'
import ProductStore from './ProductStore'
import userStore from './userStore.js'
import createPersistedState from "vuex-persistedstate"

export default createStore({
  modules: {
    ProductStore,
    userStore
  }
})

const persistedState = createPersistedState({
    paths: ['token', 'id', 'name', 'role', 'nickname']
})

export const store = createStore({
    state:      userStore.state,
    getters:    userStore.getters,
    mutations:  userStore.mutations,
    actions:    userStore.actions,
    plugins:    [persistedState]
})
